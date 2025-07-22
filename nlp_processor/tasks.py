from celery import shared_task
from django.utils import timezone
from .services import NLPProcessingService
from articles.models import NewsArticle
import logging

logger = logging.getLogger(__name__)


@shared_task
def process_article_nlp(article_id: int):
    """Celery task to process a single article with NLP."""
    try:
        article = NewsArticle.objects.get(id=article_id)
        logger.info(f"Starting NLP processing for article: {article.title}")
        
        NLPProcessingService.process_single_article(article)
        
        logger.info(f"Completed NLP processing for article: {article.title}")
        return f"Successfully processed article {article_id}"
        
    except NewsArticle.DoesNotExist:
        logger.error(f"Article with ID {article_id} not found")
        return f"Article {article_id} not found"
    except Exception as e:
        logger.error(f"Error in NLP processing for article {article_id}: {str(e)}")
        return f"Error processing article {article_id}: {str(e)}"


@shared_task
def process_unprocessed_articles_batch(batch_size: int = 10):
    """Celery task to process a batch of unprocessed articles."""
    try:
        logger.info(f"Starting batch NLP processing (batch_size={batch_size})")
        
        processed_count = NLPProcessingService.process_unprocessed_articles(batch_size)
        
        logger.info(f"Completed batch NLP processing: {processed_count} articles")
        return f"Processed {processed_count} articles"
        
    except Exception as e:
        logger.error(f"Error in batch NLP processing: {str(e)}")
        return f"Error: {str(e)}"


@shared_task
def process_all_unprocessed_articles():
    """Celery task to process all unprocessed articles."""
    try:
        logger.info("Starting processing of all unprocessed articles")
        
        total_processed = 0
        batch_size = 20
        
        while True:
            unprocessed_count = NewsArticle.objects.filter(
                processing_status='raw'
            ).count()
            
            if unprocessed_count == 0:
                break
            
            processed_count = NLPProcessingService.process_unprocessed_articles(batch_size)
            total_processed += processed_count
            
            if processed_count == 0:
                break
        
        logger.info(f"Completed processing all unprocessed articles: {total_processed} total")
        return f"Processed {total_processed} articles total"
        
    except Exception as e:
        logger.error(f"Error in processing all unprocessed articles: {str(e)}")
        return f"Error: {str(e)}"


@shared_task
def reprocess_failed_articles():
    """Celery task to reprocess articles that failed NLP processing."""
    try:
        logger.info("Starting reprocessing of failed articles")
        
        failed_articles = NewsArticle.objects.filter(processing_status='error')
        count = failed_articles.count()
        
        for article in failed_articles:
            try:
                article.processing_status = 'raw'
                article.save()
                process_article_nlp.delay(article.id)
            except Exception as e:
                logger.error(f"Error reprocessing article {article.id}: {str(e)}")
        
        logger.info(f"Started reprocessing of {count} failed articles")
        return f"Started reprocessing {count} articles"
        
    except Exception as e:
        logger.error(f"Error in reprocessing failed articles: {str(e)}")
        return f"Error: {str(e)}"


@shared_task
def generate_embeddings_for_articles():
    """Celery task to generate embeddings for articles that don't have them."""
    try:
        logger.info("Starting embedding generation for articles")
        
        articles_without_embeddings = NewsArticle.objects.filter(
            processing_status='processed',
            embedding__isnull=True
        )
        
        count = 0
        for article in articles_without_embeddings:
            try:
                # Reprocess just the embedding part
                from .processor import nlp_processor
                embedding = nlp_processor._generate_embedding(article.content or '')
                article.embedding = embedding.tolist()
                article.save()
                count += 1
            except Exception as e:
                logger.error(f"Error generating embedding for article {article.id}: {str(e)}")
        
        logger.info(f"Generated embeddings for {count} articles")
        return f"Generated embeddings for {count} articles"
        
    except Exception as e:
        logger.error(f"Error in embedding generation: {str(e)}")
        return f"Error: {str(e)}" 