#!/usr/bin/env python3
"""
Comprehensive data collection script using the newly generated news sources
"""

import os
import sys
import subprocess
import logging
import argparse
from datetime import datetime
import json

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def get_comprehensive_sources():
    """Get news sources from our comprehensive file"""
    try:
        sys.path.append('data')
        from news_sources_comprehensive_generated import NEWS_SOURCES, get_all_supported_countries
        return NEWS_SOURCES, get_all_supported_countries()
    except ImportError as e:
        logger.error(f"Could not import comprehensive news sources: {e}")
        return None, None

def run_rss_spider_for_countries(countries, max_articles=20, spider_type='live'):
    """Run RSS spider for specific countries"""
    try:
        logger.info(f"Running {spider_type} spider for countries: {countries}")
        
        cmd = ['scrapy', 'crawl', spider_type]
        cmd.extend(['-a', f'countries={countries}'])
        cmd.extend(['-a', f'max_articles_per_source={max_articles}'])
        
        if spider_type == 'live':
            cmd.extend(['-a', 'hours_back=48'])
        
        cmd.extend(['-s', 'LOG_LEVEL=INFO'])
        
        logger.info(f"Running command: {' '.join(cmd)}")
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            cwd=os.getcwd()
        )
        
        if result.returncode == 0:
            logger.info(f"{spider_type} spider completed successfully for {countries}")
            return True
        else:
            logger.error(f"{spider_type} spider failed for {countries}")
            if result.stderr:
                logger.error(f"Error: {result.stderr}")
            return False
            
    except Exception as e:
        logger.error(f"Error running {spider_type} spider for {countries}: {e}")
        return False

def collect_data_by_region():
    """Collect data organized by geographic regions"""
    
    # Define regions with major countries
    regions = {
        'North_America': ['US', 'CA', 'MX'],
        'Europe': ['GB', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI'],
        'Asia_Pacific': ['JP', 'CN', 'IN', 'AU', 'KR', 'SG', 'TH', 'MY', 'ID', 'PH'],
        'Latin_America': ['BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC', 'UY'],
        'Middle_East': ['SA', 'AE', 'EG', 'TR', 'IL', 'IR', 'IQ', 'JO', 'LB'],
        'Africa': ['ZA', 'NG', 'KE', 'EG', 'MA', 'TN', 'GH', 'UG', 'TZ'],
        'Oceania': ['AU', 'NZ', 'FJ', 'PG', 'NC']
    }
    
    logger.info("Starting comprehensive data collection by region...")
    
    total_success = 0
    total_regions = len(regions)
    
    for region_name, countries in regions.items():
        logger.info(f"\n{'='*50}")
        logger.info(f"Processing region: {region_name}")
        logger.info(f"Countries: {', '.join(countries)}")
        logger.info(f"{'='*50}")
        
        # Run live crawl for recent news
        success = run_rss_spider_for_countries(
            ','.join(countries), 
            max_articles=15, 
            spider_type='live'
        )
        
        if success:
            total_success += 1
            logger.info(f"✅ Successfully collected data for {region_name}")
        else:
            logger.error(f"❌ Failed to collect data for {region_name}")
    
    logger.info(f"\n{'='*50}")
    logger.info(f"REGIONAL COLLECTION SUMMARY")
    logger.info(f"{'='*50}")
    logger.info(f"Successful regions: {total_success}/{total_regions}")
    logger.info(f"Success rate: {total_success/total_regions*100:.1f}%")

def collect_data_by_language():
    """Collect data organized by language groups"""
    
    # Get comprehensive sources
    news_sources, all_countries = get_comprehensive_sources()
    if not news_sources:
        logger.error("Could not load comprehensive news sources")
        return
    
    # Group countries by language
    language_groups = {}
    for country_code, country_data in news_sources.items():
        language = country_data.get('language', 'en')
        if language not in language_groups:
            language_groups[language] = []
        language_groups[language].append(country_code)
    
    # Focus on major languages
    major_languages = ['en', 'es', 'fr', 'ar', 'pt', 'de', 'zh', 'ja', 'ko', 'hi']
    
    logger.info("Starting comprehensive data collection by language...")
    
    total_success = 0
    total_languages = len(major_languages)
    
    for language in major_languages:
        if language in language_groups:
            countries = language_groups[language][:5]  # Limit to 5 countries per language
            
            logger.info(f"\n{'='*50}")
            logger.info(f"Processing language: {language}")
            logger.info(f"Countries: {', '.join(countries)}")
            logger.info(f"{'='*50}")
            
            success = run_rss_spider_for_countries(
                ','.join(countries), 
                max_articles=20, 
                spider_type='live'
            )
            
            if success:
                total_success += 1
                logger.info(f"✅ Successfully collected data for {language}")
            else:
                logger.error(f"❌ Failed to collect data for {language}")
    
    logger.info(f"\n{'='*50}")
    logger.info(f"LANGUAGE COLLECTION SUMMARY")
    logger.info(f"{'='*50}")
    logger.info(f"Successful languages: {total_success}/{total_languages}")
    logger.info(f"Success rate: {total_success/total_languages*100:.1f}%")

def collect_historical_data():
    """Collect historical data for major countries"""
    
    # Major countries for historical data
    major_countries = ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'JP', 'IN', 'BR', 'CN', 'RU', 'SA']
    
    logger.info("Starting historical data collection...")
    
    total_success = 0
    total_countries = len(major_countries)
    
    for country in major_countries:
        logger.info(f"\n{'='*50}")
        logger.info(f"Collecting historical data for: {country}")
        logger.info(f"{'='*50}")
        
        success = run_rss_spider_for_countries(
            country, 
            max_articles=50, 
            spider_type='historical'
        )
        
        if success:
            total_success += 1
            logger.info(f"✅ Successfully collected historical data for {country}")
        else:
            logger.error(f"❌ Failed to collect historical data for {country}")
    
    logger.info(f"\n{'='*50}")
    logger.info(f"HISTORICAL COLLECTION SUMMARY")
    logger.info(f"{'='*50}")
    logger.info(f"Successful countries: {total_success}/{total_countries}")
    logger.info(f"Success rate: {total_success/total_countries*100:.1f}%")

def show_collection_status():
    """Show current collection status"""
    try:
        from django.db import connection
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
        
        with connection.cursor() as cursor:
            # Get total articles
            cursor.execute("SELECT COUNT(*) FROM posts")
            total_articles = cursor.fetchone()[0]
            
            # Get articles by country
            cursor.execute("SELECT source_country, COUNT(*) FROM posts GROUP BY source_country ORDER BY COUNT(*) DESC LIMIT 20")
            by_country = cursor.fetchall()
            
            # Get recent articles (last 24 hours)
            cursor.execute("SELECT COUNT(*) FROM posts WHERE created_at >= NOW() - INTERVAL '24 hours'")
            recent_articles = cursor.fetchone()[0]
            
            # Get articles by crawl type
            cursor.execute("SELECT crawl_type, COUNT(*) FROM posts GROUP BY crawl_type")
            by_type = cursor.fetchall()
        
        print("\n" + "="*60)
        print("CURRENT DATA COLLECTION STATUS")
        print("="*60)
        print(f"Total articles in database: {total_articles:,}")
        print(f"Articles added in last 24 hours: {recent_articles:,}")
        
        print(f"\nArticles by crawl type:")
        for crawl_type, count in by_type:
            print(f"  {crawl_type}: {count:,}")
        
        print(f"\nTop 20 countries by article count:")
        for country, count in by_country:
            print(f"  {country}: {count:,}")
            
    except Exception as e:
        print(f"Error getting status: {e}")

def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='Comprehensive Data Collection Tool')
    parser.add_argument('command', choices=['region', 'language', 'historical', 'status', 'all'],
                       help='Collection command to run')
    parser.add_argument('--max-articles', type=int, default=20,
                       help='Maximum articles per source (default: 20)')
    
    args = parser.parse_args()
    
    if args.command == 'region':
        collect_data_by_region()
    elif args.command == 'language':
        collect_data_by_language()
    elif args.command == 'historical':
        collect_historical_data()
    elif args.command == 'status':
        show_collection_status()
    elif args.command == 'all':
        logger.info("Running all collection methods...")
        collect_data_by_region()
        collect_data_by_language()
        collect_historical_data()
        show_collection_status()

if __name__ == "__main__":
    main() 