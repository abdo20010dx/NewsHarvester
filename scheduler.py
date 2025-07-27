#!/usr/bin/env python
"""
Scheduler to run live news crawling every 15 minutes
"""
import os
import sys
import time
import schedule
import subprocess
import logging
from datetime import datetime
from django.utils import timezone

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/scheduler.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)


def run_live_spider():
    """Run the live spider to get latest news"""
    try:
        logger.info("Starting live spider run...")
        
        # Run the live spider
        cmd = [
            'scrapy', 'crawl', 'live',
            '-a', 'countries=all',
            '-a', 'max_articles_per_source=50',
            '-a', 'hours_back=24',
            '-s', 'LOG_LEVEL=INFO'
        ]
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            cwd=os.getcwd()
        )
        
        if result.returncode == 0:
            logger.info("Live spider completed successfully")
            logger.info(f"Output: {result.stdout}")
        else:
            logger.error(f"Live spider failed with return code {result.returncode}")
            logger.error(f"Error: {result.stderr}")
            
    except Exception as e:
        logger.error(f"Error running live spider: {e}")


def run_historical_spider():
    """Run the historical spider for one-time data collection"""
    try:
        logger.info("Starting historical spider run...")
        
        # Run the historical spider
        cmd = [
            'scrapy', 'crawl', 'historical',
            '-a', 'countries=all',
            '-a', 'max_articles_per_source=1000',
            '-s', 'LOG_LEVEL=INFO'
        ]
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            cwd=os.getcwd()
        )
        
        if result.returncode == 0:
            logger.info("Historical spider completed successfully")
            logger.info(f"Output: {result.stdout}")
        else:
            logger.error(f"Historical spider failed with return code {result.returncode}")
            logger.error(f"Error: {result.stderr}")
            
    except Exception as e:
        logger.error(f"Error running historical spider: {e}")


def setup_schedule():
    """Setup the crawling schedule"""
    logger.info("Setting up crawling schedule...")
    
    # Run live spider every 15 minutes
    schedule.every(15).minutes.do(run_live_spider)
    
    # Run historical spider once per day at 2 AM
    schedule.every().day.at("02:00").do(run_historical_spider)
    
    logger.info("Schedule setup complete:")
    logger.info("- Live spider: Every 15 minutes")
    logger.info("- Historical spider: Daily at 2:00 AM")


def main():
    """Main function to run the scheduler"""
    logger.info("Starting News Harvester Scheduler...")
    
    # Create logs directory if it doesn't exist
    os.makedirs('logs', exist_ok=True)
    
    # Setup the schedule
    setup_schedule()
    
    # Run initial live spider
    logger.info("Running initial live spider...")
    run_live_spider()
    
    logger.info("Scheduler is running. Press Ctrl+C to stop.")
    
    try:
        while True:
            schedule.run_pending()
            time.sleep(60)  # Check every minute
            
    except KeyboardInterrupt:
        logger.info("Scheduler stopped by user")
    except Exception as e:
        logger.error(f"Scheduler error: {e}")


if __name__ == "__main__":
    main() 