#!/usr/bin/env python
"""
Script to import scraped news data into the posts table
"""
import os
import sys
import json
import django
from datetime import datetime
from django.utils import timezone

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import Post
from django.db import connection

def import_json_data(json_file_path):
    """Import data from JSON file into posts table"""
    print(f"Importing data from {json_file_path}...")
    
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print(f"Found {len(data)} articles in {json_file_path}")
        
        imported_count = 0
        skipped_count = 0
        error_count = 0
        
        for article in data:
            try:
                # Check if article already exists by link
                if article.get('link'):
                    existing_post = Post.objects.filter(link=article['link']).first()
                    if existing_post:
                        skipped_count += 1
                        continue
                
                # Create new post
                post = Post()
                
                # Core fields
                post.title = article.get('title', '')[:500] if article.get('title') else None
                post.link = article.get('link')
                post.description = article.get('description', '')
                post.content = article.get('content', '')
                
                # Publication date
                if article.get('pub_date'):
                    if isinstance(article['pub_date'], str):
                        try:
                            # Try to parse the date string
                            post.pub_date = timezone.now()  # Fallback
                        except:
                            post.pub_date = timezone.now()
                    else:
                        post.pub_date = timezone.now()
                else:
                    post.pub_date = timezone.now()
                
                # Image URL
                post.image_url = article.get('image_url', '')
                
                # Source and creator
                post.source_name = article.get('source_name', '')[:255] if article.get('source_name') else None
                post.creator = article.get('creator', [])
                
                # Classification fields
                post.country = article.get('country', [])
                post.category = article.get('category', [])
                post.keywords = article.get('keywords', [])
                
                # Save the post
                post.save()
                imported_count += 1
                
                if imported_count % 100 == 0:
                    print(f"Imported {imported_count} posts...")
                    
            except Exception as e:
                error_count += 1
                print(f"Error importing article: {e}")
                continue
        
        print(f"Import completed for {json_file_path}:")
        print(f"  - Imported: {imported_count}")
        print(f"  - Skipped (duplicates): {skipped_count}")
        print(f"  - Errors: {error_count}")
        
        return imported_count, skipped_count, error_count
        
    except Exception as e:
        print(f"Error reading {json_file_path}: {e}")
        return 0, 0, 1

def main():
    """Main function to import all JSON files"""
    print("Starting import of scraped news data to posts table...")
    
    # List of JSON files to import
    json_files = [
        'latest_news_data.json',
        'additional_news_data.json', 
        'comprehensive_news_data.json',
        'global_news_data.json',
        'historical_news_data.json'
    ]
    
    total_imported = 0
    total_skipped = 0
    total_errors = 0
    
    for json_file in json_files:
        if os.path.exists(json_file):
            imported, skipped, errors = import_json_data(json_file)
            total_imported += imported
            total_skipped += skipped
            total_errors += errors
        else:
            print(f"File {json_file} not found, skipping...")
    
    print("\n" + "="*50)
    print("IMPORT SUMMARY:")
    print(f"Total imported: {total_imported}")
    print(f"Total skipped (duplicates): {total_skipped}")
    print(f"Total errors: {total_errors}")
    print(f"Total posts in database: {Post.objects.count()}")
    print("="*50)

if __name__ == "__main__":
    main() 