import os
import sys
import time
import schedule
import logging
import subprocess
from datetime import datetime
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import NewsArticle, CrawlCheckpoint
from nlp.processor import NLPProcessor
from indexer.postgres_client import PostgreSQLClient
from django.conf import settings

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/pipeline.log'),
        logging.StreamHandler(sys.stdout)
    ]
)
logger = logging.getLogger(__name__)


class NewsHarvesterPipeline:
    """Main pipeline orchestrator for MSN.com NewsHarvester"""
    
    def __init__(self):
        self.nlp_processor = None
        self.es_client = None
        self.initialize_components()
    
    def initialize_components(self):
        """Initialize NLP processor and PostgreSQL client"""
        try:
            self.nlp_processor = NLPProcessor()
            logger.info("Initialized NLP processor")
            
            self.pg_client = PostgreSQLClient()
            logger.info("Initialized PostgreSQL client")
            
        except Exception as e:
            logger.error(f"Error initializing pipeline components: {e}")
            raise
    
    def run_live_crawler(self):
        """Run the live MSN.com crawler"""
        try:
            logger.info("Starting live MSN.com crawler...")
            
            # Run Scrapy spider
            cmd = [
                'scrapy', 'crawl', 'msn_live',
                '-s', 'LOG_LEVEL=INFO',
                '-s', 'CLOSESPIDER_ITEMCOUNT=100'  # Limit items per run
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                cwd=os.getcwd()
            )
            
            if result.returncode == 0:
                logger.info("Live crawler completed successfully")
                return True
            else:
                logger.error(f"Live crawler failed: {result.stderr}")
                return False
                
        except Exception as e:
            logger.error(f"Error running live crawler: {e}")
            return False
    
    def run_historical_crawler(self):
        """Run the historical MSN.com crawler"""
        try:
            logger.info("Starting historical MSN.com crawler...")
            
            # Run Scrapy spider
            cmd = [
                'scrapy', 'crawl', 'msn_historical',
                '-s', 'LOG_LEVEL=INFO',
                '-s', 'CLOSESPIDER_ITEMCOUNT=500'  # More items for historical
            ]
            
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                cwd=os.getcwd()
            )
            
            if result.returncode == 0:
                logger.info("Historical crawler completed successfully")
                return True
            else:
                logger.error(f"Historical crawler failed: {result.stderr}")
                return False
                
        except Exception as e:
            logger.error(f"Error running historical crawler: {e}")
            return False
    
    def process_nlp_batch(self, batch_size=20):
        """Process a batch of raw articles with NLP"""
        try:
            logger.info(f"Processing NLP batch of {batch_size} articles...")
            
            processed_count, error_count = self.nlp_processor.process_raw_articles(batch_size)
            
            logger.info(f"NLP processing completed: {processed_count} processed, {error_count} errors")
            return processed_count, error_count
            
        except Exception as e:
            logger.error(f"Error in NLP processing: {e}")
            return 0, 0
    
    def index_articles_batch(self, batch_size=20):
        """Process a batch of articles (PostgreSQL handles indexing automatically)"""
        try:
            logger.info(f"Processing batch of {batch_size} articles...")
            
            # For PostgreSQL, we just need to ensure articles are processed
            # The database handles indexing automatically
            processed_count, error_count = self.nlp_processor.process_raw_articles(batch_size)
            
            logger.info(f"Processing completed: {processed_count} processed, {error_count} errors")
            return processed_count, error_count
            
        except Exception as e:
            logger.error(f"Error in processing: {e}")
            return 0, 0
    
    def run_full_pipeline(self):
        """Run the complete pipeline: crawl -> NLP -> index"""
        try:
            logger.info("Starting full pipeline...")
            
            # Step 1: Run live crawler
            live_success = self.run_live_crawler()
            
            # Step 2: Process NLP
            nlp_processed, nlp_errors = self.process_nlp_batch(50)
            
            # Step 3: Process articles (PostgreSQL handles indexing)
            processed_count, process_errors = self.index_articles_batch(50)
            
            # Log summary
            logger.info(f"Pipeline completed - Live: {live_success}, NLP: {nlp_processed}/{nlp_errors}, Index: {indexed_count}/{index_errors}")
            
            return {
                'live_success': live_success,
                'nlp_processed': nlp_processed,
                'nlp_errors': nlp_errors,
                'processed_count': processed_count,
                'process_errors': process_errors
            }
            
        except Exception as e:
            logger.error(f"Error in full pipeline: {e}")
            return None
    
    def run_historical_pipeline(self):
        """Run historical crawling pipeline"""
        try:
            logger.info("Starting historical pipeline...")
            
            # Step 1: Run historical crawler
            historical_success = self.run_historical_crawler()
            
            # Step 2: Process NLP for historical articles
            nlp_processed, nlp_errors = self.process_nlp_batch(100)
            
            # Step 3: Process historical articles
            processed_count, process_errors = self.index_articles_batch(100)
            
            logger.info(f"Historical pipeline completed - Crawl: {historical_success}, NLP: {nlp_processed}/{nlp_errors}, Process: {processed_count}/{process_errors}")
            
            return {
                'historical_success': historical_success,
                'nlp_processed': nlp_processed,
                'nlp_errors': nlp_errors,
                'processed_count': processed_count,
                'process_errors': process_errors
            }
            
        except Exception as e:
            logger.error(f"Error in historical pipeline: {e}")
            return None
    
    def get_pipeline_stats(self):
        """Get pipeline statistics"""
        try:
            stats = {
                'total_articles': NewsArticle.objects.count(),
                'raw_articles': NewsArticle.objects.filter(processing_status='raw').count(),
                'processed_articles': NewsArticle.objects.filter(processing_status='processed').count(),
                'error_articles': NewsArticle.objects.filter(processing_status='error').count(),
                'checkpoints': CrawlCheckpoint.objects.count(),
                'active_checkpoints': CrawlCheckpoint.objects.filter(is_active=True).count(),
            }
            
            # Get NLP stats
            nlp_stats = self.nlp_processor.get_entity_statistics()
            sentiment_stats = self.nlp_processor.get_sentiment_statistics()
            
            stats.update({
                'nlp_stats': nlp_stats,
                'sentiment_stats': sentiment_stats
            })
            
            # Get Elasticsearch stats
            es_stats = self.es_client.get_index_stats()
            stats['elasticsearch_stats'] = es_stats
            
            return stats
            
        except Exception as e:
            logger.error(f"Error getting pipeline stats: {e}")
            return {}
    
    def cleanup_old_data(self, days_old=30):
        """Clean up old data"""
        try:
            from datetime import timedelta
            
            cutoff_date = datetime.now() - timedelta(days=days_old)
            
            # Delete old articles
            old_articles = NewsArticle.objects.filter(created_at__lt=cutoff_date)
            deleted_count = old_articles.count()
            old_articles.delete()
            
            logger.info(f"Cleaned up {deleted_count} old articles")
            return deleted_count
            
        except Exception as e:
            logger.error(f"Error cleaning up old data: {e}")
            return 0


def setup_scheduled_jobs(pipeline):
    """Setup scheduled jobs"""
    
    # Live crawler every 15 minutes
    schedule.every(15).minutes.do(pipeline.run_live_crawler)
    
    # NLP processing every 5 minutes
    schedule.every(5).minutes.do(pipeline.process_nlp_batch, 20)
    
    # Indexing every 5 minutes
    schedule.every(5).minutes.do(pipeline.index_articles_batch, 20)
    
    # Historical crawler once a day at 2 AM
    schedule.every().day.at("02:00").do(pipeline.run_historical_pipeline)
    
    # Cleanup once a week
    schedule.every().sunday.at("03:00").do(pipeline.cleanup_old_data, 30)
    
    logger.info("Scheduled jobs configured")


def run_scheduler():
    """Run the scheduler"""
    pipeline = NewsHarvesterPipeline()
    setup_scheduled_jobs(pipeline)
    
    logger.info("Starting scheduler...")
    
    while True:
        try:
            schedule.run_pending()
            time.sleep(60)  # Check every minute
        except KeyboardInterrupt:
            logger.info("Scheduler stopped by user")
            break
        except Exception as e:
            logger.error(f"Scheduler error: {e}")
            time.sleep(60)


def run_single_pipeline():
    """Run a single pipeline execution"""
    pipeline = NewsHarvesterPipeline()
    return pipeline.run_full_pipeline()


def run_historical_pipeline():
    """Run historical pipeline once"""
    pipeline = NewsHarvesterPipeline()
    return pipeline.run_historical_pipeline()


if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description='MSN.com NewsHarvester Pipeline')
    parser.add_argument('--mode', choices=['scheduler', 'single', 'historical'], 
                       default='single', help='Pipeline mode')
    parser.add_argument('--stats', action='store_true', help='Show pipeline statistics')
    
    args = parser.parse_args()
    
    # Create logs directory if it doesn't exist
    os.makedirs('logs', exist_ok=True)
    
    if args.stats:
        pipeline = NewsHarvesterPipeline()
        stats = pipeline.get_pipeline_stats()
        print("Pipeline Statistics:")
        print(json.dumps(stats, indent=2, default=str))
    elif args.mode == 'scheduler':
        run_scheduler()
    elif args.mode == 'single':
        result = run_single_pipeline()
        print(f"Pipeline result: {result}")
    elif args.mode == 'historical':
        result = run_historical_pipeline()
        print(f"Historical pipeline result: {result}") 