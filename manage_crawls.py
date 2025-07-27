#!/usr/bin/env python
"""
Management script for running different types of news crawls
"""
import os
import sys
import argparse
import subprocess
import logging
from datetime import datetime

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

logger = logging.getLogger(__name__)


def run_spider(spider_name, countries='all', max_articles=100, hours_back=24):
    """Run a specific spider"""
    try:
        logger.info(f"Starting {spider_name} spider...")
        
        cmd = ['scrapy', 'crawl', spider_name]
        
        # Add arguments
        cmd.extend(['-a', f'countries={countries}'])
        cmd.extend(['-a', f'max_articles_per_source={max_articles}'])
        
        if spider_name == 'live':
            cmd.extend(['-a', f'hours_back={hours_back}'])
        
        cmd.extend(['-s', 'LOG_LEVEL=INFO'])
        
        logger.info(f"Running command: {' '.join(cmd)}")
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            cwd=os.getcwd()
        )
        
        if result.returncode == 0:
            logger.info(f"{spider_name} spider completed successfully")
            if result.stdout:
                logger.info(f"Output: {result.stdout}")
        else:
            logger.error(f"{spider_name} spider failed with return code {result.returncode}")
            if result.stderr:
                logger.error(f"Error: {result.stderr}")
                
        return result.returncode == 0
        
    except Exception as e:
        logger.error(f"Error running {spider_name} spider: {e}")
        return False


def run_historical_crawl(countries='all', max_articles=1000):
    """Run historical crawl for one-time data collection"""
    logger.info("Running historical crawl...")
    return run_spider('historical', countries, max_articles)


def run_live_crawl(countries='all', max_articles=50, hours_back=24):
    """Run live crawl for recent news"""
    logger.info("Running live crawl...")
    return run_spider('live', countries, max_articles, hours_back)


def run_test_crawl(countries='US,GB', max_articles=10):
    """Run a test crawl with limited data"""
    logger.info("Running test crawl...")
    return run_spider('live', countries, max_articles, 1)


def list_available_countries():
    """List all available countries"""
    try:
        from data.countries import COUNTRIES
        print("\nAvailable countries:")
        print("=" * 50)
        for code, name in COUNTRIES.items():
            print(f"{code}: {name}")
        print("=" * 50)
        print(f"Total: {len(COUNTRIES)} countries")
    except ImportError:
        print("Could not import countries data")


def show_status():
    """Show current crawling status"""
    try:
        from django.db import connection
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
        
        with connection.cursor() as cursor:
            # Get total articles
            cursor.execute("SELECT COUNT(*) FROM posts")
            total_articles = cursor.fetchone()[0]
            
            # Get articles by crawl type
            cursor.execute("SELECT crawl_type, COUNT(*) FROM posts GROUP BY crawl_type")
            by_type = cursor.fetchall()
            
            # Get articles by country
            cursor.execute("SELECT source_country, COUNT(*) FROM posts GROUP BY source_country ORDER BY COUNT(*) DESC LIMIT 10")
            by_country = cursor.fetchall()
            
            # Get recent articles (last 24 hours)
            cursor.execute("SELECT COUNT(*) FROM posts WHERE created_at >= NOW() - INTERVAL '24 hours'")
            recent_articles = cursor.fetchone()[0]
            
        print("\nCurrent Status:")
        print("=" * 50)
        print(f"Total articles in database: {total_articles}")
        print(f"Articles added in last 24 hours: {recent_articles}")
        
        print("\nArticles by crawl type:")
        for crawl_type, count in by_type:
            print(f"  {crawl_type}: {count}")
        
        print("\nTop 10 countries by article count:")
        for country, count in by_country:
            print(f"  {country}: {count}")
            
    except Exception as e:
        print(f"Error getting status: {e}")


def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='News Harvester Management Tool')
    parser.add_argument('command', choices=['historical', 'live', 'test', 'countries', 'status', 'scheduler'],
                       help='Command to run')
    parser.add_argument('--countries', default='all',
                       help='Comma-separated list of country codes (default: all)')
    parser.add_argument('--max-articles', type=int, default=100,
                       help='Maximum articles per source (default: 100)')
    parser.add_argument('--hours-back', type=int, default=24,
                       help='Hours back for live crawl (default: 24)')
    
    args = parser.parse_args()
    
    if args.command == 'historical':
        success = run_historical_crawl(args.countries, args.max_articles)
        sys.exit(0 if success else 1)
        
    elif args.command == 'live':
        success = run_live_crawl(args.countries, args.max_articles, args.hours_back)
        sys.exit(0 if success else 1)
        
    elif args.command == 'test':
        success = run_test_crawl(args.countries, args.max_articles)
        sys.exit(0 if success else 1)
        
    elif args.command == 'countries':
        list_available_countries()
        
    elif args.command == 'status':
        show_status()
        
    elif args.command == 'scheduler':
        print("Starting scheduler...")
        os.system('python scheduler.py')


if __name__ == "__main__":
    main() 