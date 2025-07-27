"""
Enhanced NewsHarvester Pipeline with Upsert Functionality
Prevents duplicates using link as unique identifier
"""

import os
import sys
import time
import schedule
import logging
import subprocess
from datetime import datetime
import django
import hashlib
from urllib.parse import urlparse

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import Post, CrawlCheckpoint, CrawlLog
from nlp.processor import NLPProcessor
from indexer.postgres_client import PostgreSQLClient
from django.conf import settings
from django.db import transaction

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/enhanced_pipeline.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)


class EnhancedNewsHarvesterPipeline:
    """Enhanced pipeline with upsert functionality for MSN.com NewsHarvester"""
    
    def __init__(self):
        self.nlp_processor = None
        self.pg_client = None
        self.initialize_components()
    
    def initialize_components(self):
        """Initialize NLP processor and PostgreSQL client"""
        try:
            self.nlp_processor = NLPProcessor()
            logger.info("✅ Initialized NLP processor")
            
            self.pg_client = PostgreSQLClient()
            logger.info("✅ Initialized PostgreSQL client")
            
        except Exception as e:
            logger.error(f"❌ Error initializing pipeline components: {e}")
            raise
    
    def upsert_article(self, article_data):
        """
        Upsert a single article using link as unique identifier
        Returns (post, created, error_message)
        """
        try:
            # Validate required fields
            if not article_data.get('link'):
                return None, False, "Missing link field"
            
            if not article_data.get('title'):
                return None, False, "Missing title field"
            
            # Generate content hash for deduplication
            content_str = f"{article_data.get('title', '')}{article_data.get('content', '')}{article_data.get('link', '')}"
            content_hash = hashlib.sha256(content_str.encode()).hexdigest()
            
            # Calculate word count
            word_count = None
            if article_data.get('content'):
                word_count = len(article_data['content'].split())
            
            # Extract domain from URL
            source_domain = None
            if article_data.get('link'):
                try:
                    parsed_url = urlparse(article_data['link'])
                    source_domain = parsed_url.netloc.replace('www.', '')
                except:
                    pass
            
            # Prepare the defaults (fields to update if post exists)
            defaults = {
                'title': article_data.get('title'),
                'description': article_data.get('description'),
                'content': article_data.get('content'),
                'pub_date': article_data.get('pub_date'),
                'language': article_data.get('language'),
                'image_url': article_data.get('image_url'),
                'video_url': article_data.get('video_url'),
                'source_name': article_data.get('source_name'),
                'source_domain': source_domain,
                'source_country': article_data.get('source_country'),
                'source_language': article_data.get('source_language'),
                'author': article_data.get('author'),
                'creator': article_data.get('creator', []),
                'category': article_data.get('category', []),
                'tags': article_data.get('tags', []),
                'keywords': article_data.get('keywords', []),
                'country': article_data.get('country', []),
                'region': article_data.get('region', []),
                'city': article_data.get('city', []),
                'sentiment': article_data.get('sentiment'),
                'sentiment_score': article_data.get('sentiment_score'),
                'readability_score': article_data.get('readability_score'),
                'word_count': word_count,
                'content_hash': content_hash,
                'processing_status': article_data.get('processing_status', 'raw'),
                'quality_score': article_data.get('quality_score'),
                'crawl_type': article_data.get('crawl_type', 'live'),
                'spider_name': article_data.get('spider_name'),
                'feed_url': article_data.get('feed_url'),
                'entities': article_data.get('entities'),
                'embedding': article_data.get('embedding'),
                'topics': article_data.get('topics', []),
                'crawled_at': datetime.now(),
            }
            
            # Remove None values from defaults
            defaults = {k: v for k, v in defaults.items() if v is not None}
            
            # Upsert using link as the lookup field
            post, created = Post.objects.update_or_create(
                link=article_data['link'],  # This is the unique lookup field
                defaults=defaults
            )
            
            if created:
                logger.info(f"✅ Created new post: {post.title[:50]}...")
            else:
                logger.info(f"🔄 Updated existing post: {post.title[:50]}...")
                
            return post, created, None
            
        except Exception as e:
            error_msg = f"Error upserting post: {str(e)}"
            logger.error(f"❌ {error_msg}")
            return None, False, error_msg
    
    def bulk_upsert_articles(self, articles_list, batch_size=50):
        """
        Bulk upsert multiple articles efficiently
        Returns (created_count, updated_count, error_count, errors)
        """
        created_count = 0
        updated_count = 0
        error_count = 0
        errors = []
        
        # Process in batches to avoid memory issues
        for i in range(0, len(articles_list), batch_size):
            batch = articles_list[i:i + batch_size]
            
            with transaction.atomic():
                for article_data in batch:
                    try:
                        post, created, error = self.upsert_article(article_data)
                        if error:
                            error_count += 1
                            errors.append({
                                'article': article_data.get('title', 'Unknown'),
                                'error': error
                            })
                        elif created:
                            created_count += 1
                        else:
                            updated_count += 1
                            
                    except Exception as e:
                        error_count += 1
                        errors.append({
                            'article': article_data.get('title', 'Unknown'),
                            'error': str(e)
                        })
            
            logger.info(f"📊 Processed batch {i//batch_size + 1}: "
                       f"Created: {created_count}, Updated: {updated_count}, Errors: {error_count}")
        
        logger.info(f"📊 Final bulk upsert results:")
        logger.info(f"   Created: {created_count}")
        logger.info(f"   Updated: {updated_count}")
        logger.info(f"   Errors: {error_count}")
        
        return created_count, updated_count, error_count, errors
    
    def process_articles_with_nlp(self, articles_list):
        """
        Process articles with NLP and then upsert them
        """
        processed_articles = []
        
        for article_data in articles_list:
            try:
                # Process with NLP if content is available
                if article_data.get('content'):
                    # Sentiment analysis
                    sentiment_result = self.nlp_processor.analyze_sentiment(article_data['content'])
                    article_data['sentiment'] = sentiment_result.get('sentiment')
                    article_data['sentiment_score'] = sentiment_result.get('score')
                    
                    # Entity extraction
                    entities = self.nlp_processor.extract_entities(article_data['content'])
                    article_data['entities'] = entities
                    
                    # Readability score
                    readability = self.nlp_processor.calculate_readability(article_data['content'])
                    article_data['readability_score'] = readability
                    
                    # Set processing status
                    article_data['processing_status'] = 'processed'
                
                processed_articles.append(article_data)
                
            except Exception as e:
                logger.error(f"❌ Error processing article with NLP: {e}")
                article_data['processing_status'] = 'error'
                processed_articles.append(article_data)
        
        return processed_articles
    
    def run_live_crawler_with_upsert(self):
        """Run the live crawler and upsert results"""
        try:
            logger.info("🚀 Starting live crawler with upsert...")
            
            # Run Scrapy spider
            cmd = [
                'scrapy', 'crawl', 'msn_live',
                '-s', 'LOG_LEVEL=INFO',
                '-s', 'CLOSESPIDER_ITEMCOUNT=100'
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                cwd=os.getcwd()
            )
            
            if result.returncode == 0:
                logger.info("✅ Live crawler completed successfully")
                
                # Here you would typically load the scraped data
                # For now, we'll simulate with sample data
                sample_articles = self.get_sample_articles()
                
                # Process with NLP
                processed_articles = self.process_articles_with_nlp(sample_articles)
                
                # Upsert articles
                created, updated, errors, error_list = self.bulk_upsert_articles(processed_articles)
                
                # Log results
                logger.info(f"📊 Live crawl results: Created={created}, Updated={updated}, Errors={errors}")
                
                return True, created, updated, errors
            else:
                logger.error(f"❌ Live crawler failed: {result.stderr}")
                return False, 0, 0, 0
                
        except Exception as e:
            logger.error(f"❌ Error running live crawler: {e}")
            return False, 0, 0, 0
    
    def get_sample_articles(self):
        """Get sample articles for testing (replace with actual scraped data)"""
        return [
            {
                'title': 'Sample Article 1',
                'link': 'https://example.com/article1',
                'content': 'This is the content of article 1...',
                'source_name': 'Example News',
                'category': ['technology'],
                'country': ['us'],
                'language': 'en',
                'crawl_type': 'live',
                'spider_name': 'msn_live'
            },
            {
                'title': 'Sample Article 2',
                'link': 'https://example.com/article2',
                'content': 'This is the content of article 2...',
                'source_name': 'Example News',
                'category': ['business'],
                'country': ['us'],
                'language': 'en',
                'crawl_type': 'live',
                'spider_name': 'msn_live'
            }
        ]
    
    def run_full_pipeline_with_upsert(self):
        """Run the complete pipeline with upsert functionality"""
        try:
            logger.info("🚀 Starting full pipeline with upsert...")
            
            # Step 1: Run crawler
            success, created, updated, errors = self.run_live_crawler_with_upsert()
            
            if not success:
                logger.error("❌ Crawler failed, stopping pipeline")
                return False
            
            # Step 2: Index articles (if needed)
            # self.index_articles_batch()
            
            # Step 3: Cleanup old data
            # self.cleanup_old_data()
            
            logger.info("✅ Full pipeline completed successfully")
            return True
            
        except Exception as e:
            logger.error(f"❌ Error in full pipeline: {e}")
            return False
    
    def get_pipeline_stats(self):
        """Get statistics about the pipeline"""
        try:
            total_posts = Post.objects.count()
            processed_posts = Post.objects.filter(processing_status='processed').count()
            raw_posts = Post.objects.filter(processing_status='raw').count()
            error_posts = Post.objects.filter(processing_status='error').count()
            
            stats = {
                'total_posts': total_posts,
                'processed_posts': processed_posts,
                'raw_posts': raw_posts,
                'error_posts': error_posts,
                'processing_rate': (processed_posts / total_posts * 100) if total_posts > 0 else 0
            }
            
            logger.info(f"📊 Pipeline stats: {stats}")
            return stats
            
        except Exception as e:
            logger.error(f"❌ Error getting pipeline stats: {e}")
            return {}


# Example usage
def main():
    """Main function to run the enhanced pipeline"""
    pipeline = EnhancedNewsHarvesterPipeline()
    
    # Run full pipeline
    success = pipeline.run_full_pipeline_with_upsert()
    
    if success:
        # Get stats
        stats = pipeline.get_pipeline_stats()
        print(f"Pipeline completed successfully. Stats: {stats}")
    else:
        print("Pipeline failed")


if __name__ == "__main__":
    main() 