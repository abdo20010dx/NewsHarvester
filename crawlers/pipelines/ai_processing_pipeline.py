"""
AI Processing Pipeline for NewsHarvester
Enhances scraped content with AI-powered analysis
"""
import logging
import requests
import json
from urllib.parse import urlparse

logger = logging.getLogger(__name__)

class AIProcessingPipeline:
    """Pipeline for AI-powered content processing"""
    
    def __init__(self):
        self.ai_service_url = "http://localhost:8000/ai/process-content"
        self.enabled = True  # Can be disabled via settings
    
    def process_item(self, item, spider):
        """Process item with AI enhancement"""
        if not self.enabled:
            return item
        
        try:
            # Check if item has content to process
            if not item.get('content') or len(item['content']) < 100:
                logger.debug(f"Skipping AI processing for item with insufficient content: {item.get('title', 'No title')}")
                return item
            
            logger.info(f"Processing item with AI: {item.get('title', 'No title')}")
            
            # Prepare data for AI processing
            ai_data = {
                'content': item.get('content', ''),
                'title': item.get('title', ''),
                'url': item.get('link', ''),
                'source': item.get('source_name', '')
            }
            
            # Call AI service
            try:
                response = requests.post(
                    self.ai_service_url,
                    json=ai_data,
                    timeout=30
                )
                
                if response.status_code == 200:
                    ai_result = response.json()
                    
                    # Update item with AI-enhanced data
                    item = self._enhance_item_with_ai(item, ai_result)
                    
                    logger.info(f"Successfully enhanced item with AI: {item.get('title', 'No title')}")
                else:
                    logger.warning(f"AI service returned status {response.status_code}")
                    
            except requests.exceptions.RequestException as e:
                logger.error(f"AI service request failed: {e}")
                
        except Exception as e:
            logger.error(f"AI processing pipeline error: {e}")
        
        return item
    
    def _enhance_item_with_ai(self, item, ai_result):
        """Enhance item with AI processing results"""
        try:
            # Update sentiment analysis
            if ai_result.get('sentiment'):
                item['sentiment'] = ai_result['sentiment']
            
            if ai_result.get('sentiment_score') is not None:
                item['sentiment_score'] = ai_result['sentiment_score']
            
            # Update entities
            if ai_result.get('entities'):
                item['entities'] = ai_result['entities']
            
            # Update keywords
            if ai_result.get('keywords'):
                # Merge with existing keywords
                existing_keywords = item.get('keywords', [])
                new_keywords = ai_result['keywords']
                item['keywords'] = list(set(existing_keywords + new_keywords))
            
            # Update topics
            if ai_result.get('topics'):
                item['topics'] = ai_result['topics']
            
            # Update summary
            if ai_result.get('summary'):
                item['summary'] = ai_result['summary']
            
            # Update readability score
            if ai_result.get('readability_score') is not None:
                item['readability_score'] = ai_result['readability_score']
            
            # Update word count
            if ai_result.get('word_count'):
                item['word_count'] = ai_result['word_count']
            
            # Generate content hash if not present
            if not item.get('content_hash') and item.get('content'):
                import hashlib
                content_str = f"{item.get('title', '')}{item.get('content', '')}{item.get('link', '')}"
                item['content_hash'] = hashlib.sha256(content_str.encode()).hexdigest()
            
            # Set processing status
            item['processing_status'] = 'processed'
            
            return item
            
        except Exception as e:
            logger.error(f"Error enhancing item with AI: {e}")
            return item
    
    def open_spider(self, spider):
        """Called when spider opens"""
        logger.info(f"AI Processing Pipeline opened for spider: {spider.name}")
        
        # Check if AI service is available
        try:
            response = requests.get("http://localhost:8000/health", timeout=5)
            if response.status_code == 200:
                logger.info("AI service is available")
                self.enabled = True
            else:
                logger.warning("AI service health check failed")
                self.enabled = False
        except:
            logger.warning("AI service is not available, disabling AI processing")
            self.enabled = False
    
    def close_spider(self, spider):
        """Called when spider closes"""
        logger.info(f"AI Processing Pipeline closed for spider: {spider.name}")


class AIContentValidationPipeline:
    """Pipeline for AI-powered content validation"""
    
    def __init__(self):
        self.ai_service_url = "http://localhost:8000/ai/validate-content"
        self.enabled = True
    
    def process_item(self, item, spider):
        """Validate item content with AI"""
        if not self.enabled:
            return item
        
        try:
            # Check if item has sufficient content
            if not item.get('content') or len(item['content']) < 50:
                logger.warning(f"Item rejected due to insufficient content: {item.get('title', 'No title')}")
                return None
            
            # Validate content quality with AI
            ai_data = {
                'content': item.get('content', ''),
                'title': item.get('title', ''),
                'url': item.get('link', '')
            }
            
            try:
                response = requests.post(
                    self.ai_service_url,
                    json=ai_data,
                    timeout=30
                )
                
                if response.status_code == 200:
                    validation_result = response.json()
                    
                    if validation_result.get('is_valid', True):
                        logger.debug(f"Item validated by AI: {item.get('title', 'No title')}")
                        return item
                    else:
                        logger.warning(f"Item rejected by AI validation: {item.get('title', 'No title')}")
                        return None
                else:
                    logger.warning(f"AI validation service returned status {response.status_code}")
                    return item  # Accept item if validation service is down
                    
            except requests.exceptions.RequestException as e:
                logger.error(f"AI validation service request failed: {e}")
                return item  # Accept item if validation service is down
                
        except Exception as e:
            logger.error(f"AI validation pipeline error: {e}")
            return item
        
        return item
    
    def open_spider(self, spider):
        """Called when spider opens"""
        logger.info(f"AI Content Validation Pipeline opened for spider: {spider.name}")
    
    def close_spider(self, spider):
        """Called when spider closes"""
        logger.info(f"AI Content Validation Pipeline closed for spider: {spider.name}")


class AIDeduplicationPipeline:
    """Pipeline for AI-powered content deduplication"""
    
    def __init__(self):
        self.ai_service_url = "http://localhost:8000/ai/check-duplicate"
        self.enabled = True
        self.processed_hashes = set()
    
    def process_item(self, item, spider):
        """Check for duplicates using AI"""
        if not self.enabled:
            return item
        
        try:
            # Generate content hash
            import hashlib
            content_str = f"{item.get('title', '')}{item.get('content', '')}{item.get('link', '')}"
            content_hash = hashlib.sha256(content_str.encode()).hexdigest()
            
            # Check if we've seen this hash before
            if content_hash in self.processed_hashes:
                logger.info(f"Duplicate item detected by hash: {item.get('title', 'No title')}")
                return None
            
            # Use AI for semantic similarity check
            ai_data = {
                'content': item.get('content', ''),
                'title': item.get('title', ''),
                'url': item.get('link', '')
            }
            
            try:
                response = requests.post(
                    self.ai_service_url,
                    json=ai_data,
                    timeout=30
                )
                
                if response.status_code == 200:
                    duplicate_result = response.json()
                    
                    if duplicate_result.get('is_duplicate', False):
                        logger.info(f"Duplicate item detected by AI: {item.get('title', 'No title')}")
                        return None
                    else:
                        # Add to processed hashes
                        self.processed_hashes.add(content_hash)
                        item['content_hash'] = content_hash
                        return item
                else:
                    logger.warning(f"AI deduplication service returned status {response.status_code}")
                    # Add to processed hashes as fallback
                    self.processed_hashes.add(content_hash)
                    item['content_hash'] = content_hash
                    return item
                    
            except requests.exceptions.RequestException as e:
                logger.error(f"AI deduplication service request failed: {e}")
                # Add to processed hashes as fallback
                self.processed_hashes.add(content_hash)
                item['content_hash'] = content_hash
                return item
                
        except Exception as e:
            logger.error(f"AI deduplication pipeline error: {e}")
            return item
        
        return item
    
    def open_spider(self, spider):
        """Called when spider opens"""
        logger.info(f"AI Deduplication Pipeline opened for spider: {spider.name}")
        self.processed_hashes.clear()
    
    def close_spider(self, spider):
        """Called when spider closes"""
        logger.info(f"AI Deduplication Pipeline closed for spider: {spider.name}")
        logger.info(f"Processed {len(self.processed_hashes)} unique items") 