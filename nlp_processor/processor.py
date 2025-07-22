import spacy
from transformers import pipeline
from sentence_transformers import SentenceTransformer
import logging
from typing import Dict, List, Any, Optional
from django.conf import settings
import numpy as np

logger = logging.getLogger(__name__)


class NLPProcessor:
    """Main NLP processor for news articles."""
    
    def __init__(self):
        """Initialize NLP models."""
        self.nlp = None
        self.sentiment_analyzer = None
        self.embedding_model = None
        self.topic_classifier = None
        
        self._load_models()
    
    def _load_models(self):
        """Load all required NLP models."""
        try:
            # Load spaCy model for NER and language detection
            self.nlp = spacy.load("en_core_web_sm")
            logger.info("Loaded spaCy model")
            
            # Load sentiment analysis model
            self.sentiment_analyzer = pipeline(
                "sentiment-analysis",
                model="cardiffnlp/twitter-roberta-base-sentiment-latest"
            )
            logger.info("Loaded sentiment analysis model")
            
            # Load sentence transformer for embeddings
            self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
            logger.info("Loaded sentence transformer model")
            
        except Exception as e:
            logger.error(f"Error loading NLP models: {str(e)}")
            raise
    
    def process_article(self, text: str, title: str = None) -> Dict[str, Any]:
        """Process a news article with NLP."""
        try:
            # Combine title and text for processing
            full_text = f"{title} {text}" if title else text
            
            # Language detection
            language = self._detect_language(full_text)
            
            # Named Entity Recognition
            entities = self._extract_entities(full_text)
            
            # Sentiment analysis
            sentiment_result = self._analyze_sentiment(full_text)
            
            # Generate embeddings
            embedding = self._generate_embedding(full_text)
            
            # Topic classification
            topics = self._classify_topics(full_text)
            
            return {
                'language': language,
                'entities': entities,
                'sentiment': sentiment_result['label'],
                'sentiment_score': sentiment_result['score'],
                'embedding': embedding.tolist(),
                'topics': topics
            }
            
        except Exception as e:
            logger.error(f"Error processing article: {str(e)}")
            return {
                'language': 'en',
                'entities': [],
                'sentiment': 'neutral',
                'sentiment_score': 0.5,
                'embedding': [],
                'topics': []
            }
    
    def _detect_language(self, text: str) -> str:
        """Detect the language of the text."""
        try:
            doc = self.nlp(text[:1000])  # Use first 1000 chars for efficiency
            return doc.lang_
        except:
            return 'en'
    
    def _extract_entities(self, text: str) -> List[Dict[str, Any]]:
        """Extract named entities from text."""
        try:
            doc = self.nlp(text[:5000])  # Limit text length for efficiency
            
            entities = []
            for ent in doc.ents:
                entities.append({
                    'text': ent.text,
                    'label': ent.label_,
                    'start': ent.start_char,
                    'end': ent.end_char
                })
            
            return entities
            
        except Exception as e:
            logger.error(f"Error extracting entities: {str(e)}")
            return []
    
    def _analyze_sentiment(self, text: str) -> Dict[str, Any]:
        """Analyze sentiment of the text."""
        try:
            # Use first 500 chars for sentiment analysis
            text_sample = text[:500]
            result = self.sentiment_analyzer(text_sample)[0]
            
            # Map labels to our format
            label_mapping = {
                'LABEL_0': 'negative',
                'LABEL_1': 'neutral',
                'LABEL_2': 'positive'
            }
            
            return {
                'label': label_mapping.get(result['label'], 'neutral'),
                'score': result['score']
            }
            
        except Exception as e:
            logger.error(f"Error analyzing sentiment: {str(e)}")
            return {'label': 'neutral', 'score': 0.5}
    
    def _generate_embedding(self, text: str) -> np.ndarray:
        """Generate text embedding."""
        try:
            # Use first 1000 chars for embedding
            text_sample = text[:1000]
            embedding = self.embedding_model.encode(text_sample)
            return embedding
            
        except Exception as e:
            logger.error(f"Error generating embedding: {str(e)}")
            return np.zeros(384)  # Default embedding size
    
    def _classify_topics(self, text: str) -> List[str]:
        """Classify topics in the text."""
        try:
            # Simple keyword-based topic classification
            topics = []
            text_lower = text.lower()
            
            topic_keywords = {
                'politics': ['president', 'government', 'election', 'congress', 'senate'],
                'technology': ['tech', 'software', 'ai', 'artificial intelligence', 'startup'],
                'business': ['business', 'economy', 'market', 'stock', 'finance'],
                'sports': ['sport', 'football', 'basketball', 'baseball', 'soccer'],
                'entertainment': ['movie', 'film', 'music', 'celebrity', 'hollywood'],
                'health': ['health', 'medical', 'doctor', 'hospital', 'disease'],
                'science': ['science', 'research', 'study', 'scientist', 'discovery']
            }
            
            for topic, keywords in topic_keywords.items():
                if any(keyword in text_lower for keyword in keywords):
                    topics.append(topic)
            
            return topics[:3]  # Return top 3 topics
            
        except Exception as e:
            logger.error(f"Error classifying topics: {str(e)}")
            return []
    
    def batch_process(self, articles: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        """Process multiple articles in batch."""
        results = []
        
        for article in articles:
            try:
                text = article.get('content', '')
                title = article.get('title', '')
                
                nlp_result = self.process_article(text, title)
                
                # Merge NLP results with original article
                article.update(nlp_result)
                results.append(article)
                
            except Exception as e:
                logger.error(f"Error processing article in batch: {str(e)}")
                results.append(article)
        
        return results


# Global instance
nlp_processor = NLPProcessor() 