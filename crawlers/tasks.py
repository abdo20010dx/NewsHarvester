from celery import shared_task
from django.utils import timezone
from .models import NewsSource, CrawlSession
from .management.commands.run_crawler import Command as CrawlerCommand
import logging

logger = logging.getLogger(__name__)


@shared_task
def crawl_source(source_id: int):
    """Celery task to crawl a specific news source."""
    try:
        source = NewsSource.objects.get(id=source_id)
        logger.info(f"Starting crawl task for source: {source.name}")
        
        # Create crawl session
        session = CrawlSession.objects.create(
            source=source,
            status='running'
        )
        
        # Run crawler
        crawler_command = CrawlerCommand()
        crawler_command.handle(source_id=source_id)
        
        # Update session
        session.status = 'completed'
        session.finished_at = timezone.now()
        session.save()
        
        # Update source
        source.last_crawled = timezone.now()
        source.save()
        
        logger.info(f"Completed crawl task for source: {source.name}")
        return f"Successfully crawled {source.name}"
        
    except NewsSource.DoesNotExist:
        logger.error(f"Source with ID {source_id} not found")
        return f"Source {source_id} not found"
    except Exception as e:
        logger.error(f"Error in crawl task for source {source_id}: {str(e)}")
        
        # Update session with error
        if 'session' in locals():
            session.status = 'failed'
            session.errors = str(e)
            session.finished_at = timezone.now()
            session.save()
        
        return f"Error crawling source {source_id}: {str(e)}"


@shared_task
def crawl_all_sources():
    """Celery task to crawl all active sources."""
    try:
        active_sources = NewsSource.objects.filter(is_active=True)
        results = []
        
        for source in active_sources:
            if source.should_crawl():
                result = crawl_source.delay(source.id)
                results.append(result)
        
        logger.info(f"Started crawl tasks for {len(results)} sources")
        return f"Started {len(results)} crawl tasks"
        
    except Exception as e:
        logger.error(f"Error in crawl_all_sources task: {str(e)}")
        return f"Error: {str(e)}"


@shared_task
def cleanup_old_sessions(days: int = 30):
    """Celery task to cleanup old crawl sessions."""
    try:
        from datetime import timedelta
        cutoff_date = timezone.now() - timedelta(days=days)
        
        old_sessions = CrawlSession.objects.filter(started_at__lt=cutoff_date)
        count = old_sessions.count()
        old_sessions.delete()
        
        logger.info(f"Cleaned up {count} old crawl sessions")
        return f"Cleaned up {count} sessions"
        
    except Exception as e:
        logger.error(f"Error in cleanup task: {str(e)}")
        return f"Error: {str(e)}" 