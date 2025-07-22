from django.db import transaction
from django.utils import timezone
from articles.models import NewsArticle
from .processor import nlp_processor
import logging
import numpy as np

logger = logging.getLogger(__name__)


class NLPProcessingService:
    """Service for processing articles with NLP."""
    
    @staticmethod
    def process_unprocessed_articles(batch_size: int = 10):
        """Process all unprocessed articles in batches."""
        try:
            unprocessed_articles = NewsArticle.objects.filter(
                processing_status='raw'
            ).order_by('created_at')[:batch_size]
            
            if not unprocessed_articles.exists():
                logger.info("No unprocessed articles found")
                return 0
            
            processed_count = 0
            
            for article in unprocessed_articles:
                try:
                    NLPProcessingService.process_single_article(article)
                    processed_count += 1
                    logger.info(f"Processed article: {article.title}")
                    
                except Exception as e:
                    logger.error(f"Error processing article {article.id}: {str(e)}")
                    article.processing_status = 'error'
                    article.save()
            
            logger.info(f"Processed {processed_count} articles")
            return processed_count
            
        except Exception as e:
            logger.error(f"Error in batch processing: {str(e)}")
            return 0
    
    @staticmethod
    def process_single_article(article: NewsArticle):
        """Process a single article with NLP."""
        try:
            # Process with NLP
            nlp_result = nlp_processor.process_article(
                text=article.content or '',
                title=article.title or ''
            )
            
            # Update article with NLP results
            with transaction.atomic():
                article.language = nlp_result.get('language', article.language)
                article.entities = nlp_result.get('entities', [])
                article.sentiment = nlp_result.get('sentiment', 'neutral')
                article.sentiment_score = nlp_result.get('sentiment_score', 0.5)
                article.embedding = nlp_result.get('embedding', [])
                article.topics = nlp_result.get('topics', [])
                article.processing_status = 'processed'
                article.save()
            
            logger.info(f"Successfully processed article: {article.title}")
            
        except Exception as e:
            logger.error(f"Error processing article {article.id}: {str(e)}")
            article.processing_status = 'error'
            article.save()
            raise
    
    @staticmethod
    def reprocess_article(article_id: int):
        """Reprocess a specific article."""
        try:
            article = NewsArticle.objects.get(id=article_id)
            NLPProcessingService.process_single_article(article)
            return True
            
        except NewsArticle.DoesNotExist:
            logger.error(f"Article with ID {article_id} not found")
            return False
        except Exception as e:
            logger.error(f"Error reprocessing article {article_id}: {str(e)}")
            return False
    
    @staticmethod
    def get_processing_stats():
        """Get statistics about article processing."""
        total_articles = NewsArticle.objects.count()
        processed_articles = NewsArticle.objects.filter(processing_status='processed').count()
        raw_articles = NewsArticle.objects.filter(processing_status='raw').count()
        error_articles = NewsArticle.objects.filter(processing_status='error').count()
        
        return {
            'total': total_articles,
            'processed': processed_articles,
            'raw': raw_articles,
            'error': error_articles,
            'processing_rate': (processed_articles / total_articles * 100) if total_articles > 0 else 0
        }


class SimilarityService:
    """Service for finding similar articles using embeddings."""
    
    @staticmethod
    def find_similar_articles(article_id: int, limit: int = 10):
        """Find articles similar to the given article."""
        try:
            target_article = NewsArticle.objects.get(id=article_id)
            
            if not target_article.embedding:
                logger.warning(f"Article {article_id} has no embedding")
                return []
            
            # Get all processed articles with embeddings
            articles_with_embeddings = NewsArticle.objects.filter(
                processing_status='processed',
                embedding__isnull=False
            ).exclude(id=article_id)
            
            similarities = []
            target_embedding = np.array(target_article.embedding)
            
            for article in articles_with_embeddings:
                if article.embedding:
                    article_embedding = np.array(article.embedding)
                    similarity = np.dot(target_embedding, article_embedding) / (
                        np.linalg.norm(target_embedding) * np.linalg.norm(article_embedding)
                    )
                    similarities.append((article, similarity))
            
            # Sort by similarity and return top results
            similarities.sort(key=lambda x: x[1], reverse=True)
            return [article for article, _ in similarities[:limit]]
            
        except NewsArticle.DoesNotExist:
            logger.error(f"Article with ID {article_id} not found")
            return []
        except Exception as e:
            logger.error(f"Error finding similar articles: {str(e)}")
            return []
    
    @staticmethod
    def find_articles_by_topic(topic: str, limit: int = 20):
        """Find articles by topic."""
        try:
            articles = NewsArticle.objects.filter(
                topics__contains=[topic],
                processing_status='processed'
            ).order_by('-pub_date')[:limit]
            
            return list(articles)
            
        except Exception as e:
            logger.error(f"Error finding articles by topic {topic}: {str(e)}")
            return []
    
    @staticmethod
    def find_articles_by_entity(entity_text: str, entity_type: str = None, limit: int = 20):
        """Find articles containing specific entities."""
        try:
            query = NewsArticle.objects.filter(
                entities__contains=[{'text': entity_text}],
                processing_status='processed'
            )
            
            if entity_type:
                query = query.filter(entities__contains=[{'label': entity_type}])
            
            articles = query.order_by('-pub_date')[:limit]
            return list(articles)
            
        except Exception as e:
            logger.error(f"Error finding articles by entity {entity_text}: {str(e)}")
            return [] 