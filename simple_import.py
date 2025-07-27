#!/usr/bin/env python
"""
Simple script to import scraped data to posts table
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

from django.db import connection

def check_table_structure():
    """Check what columns actually exist in posts table"""
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT column_name 
                FROM information_schema.columns 
                WHERE table_name = 'posts' 
                ORDER BY ordinal_position
            """)
            
            columns = [row[0] for row in cursor.fetchall()]
            print(f"Posts table columns: {columns}")
            return columns
    except Exception as e:
        print(f"Error checking table: {e}")
        return []

def import_data():
    """Import data using only existing columns"""
    columns = check_table_structure()
    if not columns:
        print("Could not determine table structure")
        return
    
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
        if not os.path.exists(json_file):
            print(f"File {json_file} not found, skipping...")
            continue
            
        print(f"\nProcessing {json_file}...")
        
        try:
            with open(json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            print(f"Found {len(data)} articles")
            
            imported = 0
            skipped = 0
            errors = 0
            
            with connection.cursor() as cursor:
                for article in data:
                    try:
                        # Check if article already exists by link
                        if article.get('link') and 'link' in columns:
                            cursor.execute("SELECT id FROM posts WHERE link = %s", [article['link']])
                            if cursor.fetchone():
                                skipped += 1
                                continue
                        
                        # Build dynamic SQL based on available columns
                        available_columns = []
                        values = []
                        
                        if 'title' in columns:
                            available_columns.append('title')
                            values.append(article.get('title', '')[:500] if article.get('title') else None)
                        
                        if 'link' in columns:
                            available_columns.append('link')
                            values.append(article.get('link'))
                        
                        if 'description' in columns:
                            available_columns.append('description')
                            values.append(article.get('description', ''))
                        
                        if 'content' in columns:
                            available_columns.append('content')
                            values.append(article.get('content', ''))
                        
                        if 'image_url' in columns:
                            available_columns.append('image_url')
                            values.append(article.get('image_url', ''))
                        
                        if 'source_name' in columns:
                            available_columns.append('source_name')
                            values.append(article.get('source_name', '')[:255] if article.get('source_name') else None)
                        
                        if 'creator' in columns:
                            available_columns.append('creator')
                            values.append(article.get('creator', []))
                        
                        if 'country' in columns:
                            available_columns.append('country')
                            values.append(article.get('country', []))
                        
                        if 'category' in columns:
                            available_columns.append('category')
                            values.append(article.get('category', []))
                        
                        if 'keywords' in columns:
                            available_columns.append('keywords')
                            values.append(article.get('keywords', []))
                        
                        if available_columns:
                            placeholders = ', '.join(['%s'] * len(available_columns))
                            column_list = ', '.join(available_columns)
                            
                            sql = f"INSERT INTO posts ({column_list}) VALUES ({placeholders})"
                            cursor.execute(sql, values)
                            
                            imported += 1
                            
                            if imported % 100 == 0:
                                print(f"  Imported {imported} posts...")
                        else:
                            errors += 1
                            
                    except Exception as e:
                        errors += 1
                        if errors < 10:  # Only show first 10 errors
                            print(f"  Error importing article: {e}")
                        continue
            
            print(f"  Completed {json_file}: {imported} imported, {skipped} skipped, {errors} errors")
            total_imported += imported
            total_skipped += skipped
            total_errors += errors
            
        except Exception as e:
            print(f"Error processing {json_file}: {e}")
            total_errors += 1
    
    print(f"\n{'='*50}")
    print("IMPORT SUMMARY:")
    print(f"Total imported: {total_imported}")
    print(f"Total skipped (duplicates): {total_skipped}")
    print(f"Total errors: {total_errors}")
    
    # Get total count
    with connection.cursor() as cursor:
        cursor.execute("SELECT COUNT(*) FROM posts")
        total_count = cursor.fetchone()[0]
        print(f"Total posts in database: {total_count}")
    
    print("="*50)

if __name__ == "__main__":
    print("Starting simple import process...")
    import_data() 