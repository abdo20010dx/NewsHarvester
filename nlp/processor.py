import spacy
from transformers import pipeline
from sentence_transformers import SentenceTransformer
import django
import os
from datetime import datetime
import logging

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import NewsArticle
from django.conf import settings

logger = logging.getLogger(__name__)


class NLPProcessor:
    """NLP processor for MSN.com news articles"""
    
    def __init__(self):
        self.nlp = None
        self.sentiment_analyzer = None
        self.embedding_model = None
        self.initialize_models()
    
    def initialize_models(self):
        """Initialize NLP models"""
        try:
            # Load spaCy model for NER and language detection
            model_name = getattr(settings, 'SPACY_MODEL', 'en_core_web_sm')
            self.nlp = spacy.load(model_name)
            logger.info(f"Loaded spaCy model: {model_name}")
            
            # Load sentiment analysis model
            self.sentiment_analyzer = pipeline(
                "sentiment-analysis",
                model="cardiffnlp/twitter-roberta-base-sentiment-latest"
            )
            logger.info("Loaded sentiment analysis model")
            
            # Load sentence transformer for embeddings
            model_name = getattr(settings, 'SENTENCE_TRANSFORMER_MODEL', 'all-MiniLM-L6-v2')
            self.embedding_model = SentenceTransformer(model_name)
            logger.info(f"Loaded sentence transformer model: {model_name}")
            
        except Exception as e:
            logger.error(f"Error initializing NLP models: {e}")
            raise
    
    def process_article(self, article_id):
        """Process a single article with NLP"""
        try:
            article = NewsArticle.objects.get(article_id=article_id)
            
            if article.processing_status == 'processed':
                logger.info(f"Article {article_id} already processed")
                return article
            
            # Process the article
            article = self._extract_entities(article)
            article = self._analyze_sentiment(article)
            article = self._generate_embedding(article)
            
            # Update processing status
            article.processing_status = 'processed'
            article.save()
            
            logger.info(f"Successfully processed article: {article.title}")
            return article
            
        except NewsArticle.DoesNotExist:
            logger.error(f"Article {article_id} not found")
            raise
        except Exception as e:
            logger.error(f"Error processing article {article_id}: {e}")
            # Update status to error
            try:
                article.processing_status = 'error'
                article.save()
            except:
                pass
            raise
    
    def process_raw_articles(self, batch_size=10):
        """Process all raw articles in batches"""
        raw_articles = NewsArticle.objects.filter(
            processing_status='raw'
        ).order_by('-created_at')[:batch_size]
        
        processed_count = 0
        error_count = 0
        
        for article in raw_articles:
            try:
                self.process_article(article.article_id)
                processed_count += 1
            except Exception as e:
                logger.error(f"Error processing article {article.article_id}: {e}")
                error_count += 1
        
        logger.info(f"Processed {processed_count} articles, {error_count} errors")
        return processed_count, error_count
    
    def _extract_entities(self, article):
        """Extract named entities from article content"""
        try:
            # Combine title and content for entity extraction
            text = f"{article.title or ''} {article.content or ''}"
            
            if not text.strip():
                article.entities = []
                return article
            
            # Process with spaCy
            doc = self.nlp(text)
            
            # Extract entities
            entities = []
            for ent in doc.ents:
                entity_data = {
                    'text': ent.text,
                    'label': ent.label_,
                    'start': ent.start_char,
                    'end': ent.end_char,
                    'description': spacy.explain(ent.label_)
                }
                entities.append(entity_data)
            
            # Remove duplicates based on text and label
            unique_entities = []
            seen = set()
            for entity in entities:
                key = (entity['text'].lower(), entity['label'])
                if key not in seen:
                    seen.add(key)
                    unique_entities.append(entity)
            
            article.entities = unique_entities
            
            # Detect language
            article.language = doc.lang_
            
            return article
            
        except Exception as e:
            logger.error(f"Error extracting entities: {e}")
            article.entities = []
            return article
    
    def _analyze_sentiment(self, article):
        """Analyze sentiment of article content"""
        try:
            # Use title and first part of content for sentiment analysis
            text = f"{article.title or ''} {article.content or ''}"
            
            if not text.strip():
                article.sentiment = 'neutral'
                article.sentiment_score = 0.0
                return article
            
            # Truncate text if too long for sentiment analysis
            max_length = 512
            if len(text) > max_length:
                text = text[:max_length]
            
            # Analyze sentiment
            result = self.sentiment_analyzer(text)[0]
            
            # Map sentiment labels
            label = result['label'].lower()
            score = result['score']
            
            if label == 'positive':
                sentiment = 'positive'
            elif label == 'negative':
                sentiment = 'negative'
            else:
                sentiment = 'neutral'
            
            article.sentiment = sentiment
            article.sentiment_score = score
            
            return article
            
        except Exception as e:
            logger.error(f"Error analyzing sentiment: {e}")
            article.sentiment = 'neutral'
            article.sentiment_score = 0.0
            return article
    
    def _generate_embedding(self, article):
        """Generate embedding vector for article"""
        try:
            # Combine title and content for embedding
            text = f"{article.title or ''} {article.content or ''}"
            
            if not text.strip():
                article.embedding = []
                return article
            
            # Generate embedding
            embedding = self.embedding_model.encode(text)
            
            # Convert to list for storage
            article.embedding = embedding.tolist()
            
            return article
            
        except Exception as e:
            logger.error(f"Error generating embedding: {e}")
            article.embedding = []
            return article
    
    def get_entity_statistics(self):
        """Get statistics about extracted entities"""
        try:
            all_entities = []
            articles = NewsArticle.objects.filter(processing_status='processed')
            
            for article in articles:
                if article.entities:
                    all_entities.extend(article.entities)
            
            # Count entity types
            entity_counts = {}
            for entity in all_entities:
                label = entity.get('label', 'UNKNOWN')
                entity_counts[label] = entity_counts.get(label, 0) + 1
            
            return {
                'total_entities': len(all_entities),
                'entity_types': entity_counts,
                'processed_articles': articles.count()
            }
            
        except Exception as e:
            logger.error(f"Error getting entity statistics: {e}")
            return {}
    
    def get_sentiment_statistics(self):
        """Get statistics about sentiment analysis"""
        try:
            articles = NewsArticle.objects.filter(processing_status='processed')
            
            sentiment_counts = {
                'positive': 0,
                'negative': 0,
                'neutral': 0
            }
            
            total_score = 0.0
            count = 0
            
            for article in articles:
                if article.sentiment:
                    sentiment_counts[article.sentiment] += 1
                
                if article.sentiment_score:
                    total_score += article.sentiment_score
                    count += 1
            
            avg_score = total_score / count if count > 0 else 0.0
            
            return {
                'sentiment_distribution': sentiment_counts,
                'average_sentiment_score': avg_score,
                'total_processed': articles.count()
            }
            
        except Exception as e:
            logger.error(f"Error getting sentiment statistics: {e}")
            return {}


def process_article_batch(batch_size=10):
    """Convenience function to process a batch of articles"""
    processor = NLPProcessor()
    return processor.process_raw_articles(batch_size)


def process_single_article(article_id):
    """Convenience function to process a single article"""
    processor = NLPProcessor()
    return processor.process_article(article_id) 