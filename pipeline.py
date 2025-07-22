#!/usr/bin/env python
"""
Main pipeline orchestration for NewsHarvester.
Coordinates crawling, NLP processing, and storage operations.
"""

import os
import sys
import django
import logging
from datetime import datetime, timedelta
from typing import List, Dict, Any

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from django.utils import timezone
from django.db import transaction

from crawlers.models import NewsSource, CrawlSession
from crawlers.management.commands.run_crawler import Command as CrawlerCommand
from nlp_processor.services import NLPProcessingService
from articles.models import NewsArticle

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class NewsHarvesterPipeline:
    """Main pipeline orchestrator for NewsHarvester."""
    
    def __init__(self):
        self.crawler_command = CrawlerCommand()
    
    def run_full_pipeline(self, source_ids: List[int] = None):
        """Run the complete pipeline: crawl -> NLP -> store."""
        logger.info("Starting NewsHarvester pipeline")
        
        try:
            # Step 1: Crawl news sources
            crawl_results = self.run_crawling_phase(source_ids)
            logger.info(f"Crawling phase completed: {crawl_results}")
            
            # Step 2: Process articles with NLP
            nlp_results = self.run_nlp_phase()
            logger.info(f"NLP phase completed: {nlp_results}")
            
            # Step 3: Generate pipeline report
            report = self.generate_pipeline_report(crawl_results, nlp_results)
            logger.info("Pipeline completed successfully")
            
            return report
            
        except Exception as e:
            logger.error(f"Pipeline failed: {str(e)}")
            raise
    
    def run_crawling_phase(self, source_ids: List[int] = None) -> Dict[str, Any]:
        """Run the crawling phase."""
        logger.info("Starting crawling phase")
        
        try:
            # Get sources to crawl
            if source_ids:
                sources = NewsSource.objects.filter(id__in=source_ids, is_active=True)
            else:
                sources = NewsSource.objects.filter(is_active=True)
            
            crawl_results = {
                'sources_crawled': 0,
                'articles_found': 0,
                'articles_saved': 0,
                'errors': []
            }
            
            for source in sources:
                if source.should_crawl():
                    try:
                        logger.info(f"Crawling source: {source.name}")
                        
                        # Create crawl session
                        session = CrawlSession.objects.create(
                            source=source,
                            status='running'
                        )
                        
                        # Run crawler
                        # Note: In production, this would be done with Celery
                        # For now, we'll simulate the process
                        articles_before = NewsArticle.objects.count()
                        
                        # TODO: Actually run the crawler
                        # self.crawler_command.handle(source_id=source.id)
                        
                        articles_after = NewsArticle.objects.count()
                        articles_saved = articles_after - articles_before
                        
                        # Update session
                        session.status = 'completed'
                        session.finished_at = timezone.now()
                        session.articles_saved = articles_saved
                        session.save()
                        
                        # Update source
                        source.last_crawled = timezone.now()
                        source.save()
                        
                        crawl_results['sources_crawled'] += 1
                        crawl_results['articles_saved'] += articles_saved
                        
                        logger.info(f"Completed crawling {source.name}: {articles_saved} articles")
                        
                    except Exception as e:
                        logger.error(f"Error crawling {source.name}: {str(e)}")
                        crawl_results['errors'].append(f"{source.name}: {str(e)}")
                        
                        if 'session' in locals():
                            session.status = 'failed'
                            session.errors = str(e)
                            session.finished_at = timezone.now()
                            session.save()
                else:
                    logger.info(f"Skipping {source.name} - not due for crawl")
            
            return crawl_results
            
        except Exception as e:
            logger.error(f"Crawling phase failed: {str(e)}")
            raise
    
    def run_nlp_phase(self, batch_size: int = 20) -> Dict[str, Any]:
        """Run the NLP processing phase."""
        logger.info("Starting NLP processing phase")
        
        try:
            nlp_results = {
                'articles_processed': 0,
                'articles_failed': 0,
                'processing_time': 0
            }
            
            start_time = timezone.now()
            
            # Process articles in batches
            while True:
                unprocessed_count = NewsArticle.objects.filter(
                    processing_status='raw'
                ).count()
                
                if unprocessed_count == 0:
                    break
                
                processed_count = NLPProcessingService.process_unprocessed_articles(batch_size)
                nlp_results['articles_processed'] += processed_count
                
                if processed_count == 0:
                    break
            
            nlp_results['processing_time'] = (timezone.now() - start_time).total_seconds()
            
            return nlp_results
            
        except Exception as e:
            logger.error(f"NLP phase failed: {str(e)}")
            raise
    
    def generate_pipeline_report(self, crawl_results: Dict, nlp_results: Dict) -> Dict[str, Any]:
        """Generate a comprehensive pipeline report."""
        try:
            # Get overall statistics
            total_articles = NewsArticle.objects.count()
            processed_articles = NewsArticle.objects.filter(processing_status='processed').count()
            raw_articles = NewsArticle.objects.filter(processing_status='raw').count()
            error_articles = NewsArticle.objects.filter(processing_status='error').count()
            
            # Get recent activity
            recent_articles = NewsArticle.objects.filter(
                created_at__gte=timezone.now() - timedelta(hours=24)
            ).count()
            
            report = {
                'pipeline_run_time': timezone.now().isoformat(),
                'crawling_results': crawl_results,
                'nlp_results': nlp_results,
                'overall_statistics': {
                    'total_articles': total_articles,
                    'processed_articles': processed_articles,
                    'raw_articles': raw_articles,
                    'error_articles': error_articles,
                    'recent_articles_24h': recent_articles
                },
                'processing_rate': (processed_articles / total_articles * 100) if total_articles > 0 else 0
            }
            
            return report
            
        except Exception as e:
            logger.error(f"Error generating report: {str(e)}")
            return {'error': str(e)}
    
    def run_scheduled_pipeline(self):
        """Run pipeline for sources due for crawling."""
        logger.info("Running scheduled pipeline")
        
        try:
            # Get sources due for crawling
            due_sources = [source for source in NewsSource.objects.filter(is_active=True) if source.should_crawl()]
            
            if not due_sources:
                logger.info("No sources due for crawling")
                return
            
            source_ids = [source.id for source in due_sources]
            return self.run_full_pipeline(source_ids)
            
        except Exception as e:
            logger.error(f"Scheduled pipeline failed: {str(e)}")
            raise
    
    def cleanup_old_data(self, days: int = 30):
        """Clean up old articles and crawl sessions."""
        logger.info(f"Cleaning up data older than {days} days")
        
        try:
            cutoff_date = timezone.now() - timedelta(days=days)
            
            # Clean up old articles (optional - you might want to keep all articles)
            # old_articles = NewsArticle.objects.filter(created_at__lt=cutoff_date)
            # old_articles_count = old_articles.count()
            # old_articles.delete()
            
            # Clean up old crawl sessions
            old_sessions = CrawlSession.objects.filter(started_at__lt=cutoff_date)
            old_sessions_count = old_sessions.count()
            old_sessions.delete()
            
            logger.info(f"Cleaned up {old_sessions_count} old crawl sessions")
            
        except Exception as e:
            logger.error(f"Error during cleanup: {str(e)}")


def main():
    """Main entry point for the pipeline."""
    import argparse
    
    parser = argparse.ArgumentParser(description='NewsHarvester Pipeline')
    parser.add_argument('--full', action='store_true', help='Run full pipeline for all sources')
    parser.add_argument('--scheduled', action='store_true', help='Run scheduled pipeline')
    parser.add_argument('--source-ids', nargs='+', type=int, help='Specific source IDs to crawl')
    parser.add_argument('--cleanup', type=int, help='Clean up data older than N days')
    
    args = parser.parse_args()
    
    pipeline = NewsHarvesterPipeline()
    
    try:
        if args.cleanup:
            pipeline.cleanup_old_data(args.cleanup)
        elif args.scheduled:
            pipeline.run_scheduled_pipeline()
        elif args.source_ids:
            pipeline.run_full_pipeline(args.source_ids)
        elif args.full:
            pipeline.run_full_pipeline()
        else:
            print("Please specify an action: --full, --scheduled, --source-ids, or --cleanup")
            
    except Exception as e:
        logger.error(f"Pipeline execution failed: {str(e)}")
        sys.exit(1)


if __name__ == '__main__':
    main() 