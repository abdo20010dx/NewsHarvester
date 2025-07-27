#!/usr/bin/env python
"""
Script to check database structure and import scraped data
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

def check_posts_table():
    """Check if posts table exists and its structure"""
    print("Checking posts table structure...")
    
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                SELECT column_name, data_type, is_nullable 
                FROM information_schema.columns 
                WHERE table_name = 'posts' 
                ORDER BY ordinal_position
            """)
            
            columns = cursor.fetchall()
            
            if columns:
                print("Posts table exists with columns:")
                column_names = []
                for col_name, data_type, is_nullable in columns:
                    print(f"  - {col_name}: {data_type} ({'NULL' if is_nullable == 'YES' else 'NOT NULL'})")
                    column_names.append(col_name)
                return True, column_names
            else:
                print("Posts table does not exist")
                return False, []
                
    except Exception as e:
        print(f"Error checking posts table: {e}")
        return False, []

def create_posts_table():
    """Create posts table if it doesn't exist"""
    print("Creating posts table...")
    
    try:
        with connection.cursor() as cursor:
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS posts (
                    id BIGSERIAL PRIMARY KEY,
                    post_id UUID UNIQUE DEFAULT gen_random_uuid(),
                    title VARCHAR(500),
                    link TEXT UNIQUE,
                    description TEXT,
                    content TEXT,
                    pub_date TIMESTAMP WITH TIME ZONE,
                    image_url TEXT,
                    source_name VARCHAR(255),
                    creator TEXT[],
                    country TEXT[],
                    category TEXT[],
                    keywords TEXT[],
                    content_hash VARCHAR(64) UNIQUE,
                    processing_status VARCHAR(50) DEFAULT 'raw',
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
                )
            """)
            
            # Create indexes
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_posts_link ON posts(link)")
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_posts_pub_date ON posts(pub_date)")
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_posts_source_name ON posts(source_name)")
            
            print("Posts table created successfully")
            return True
            
    except Exception as e:
        print(f"Error creating posts table: {e}")
        return False

def import_data_to_posts():
    """Import scraped data directly to posts table"""
    print("Importing scraped data to posts table...")
    
    # First check the table structure
    table_exists, column_names = check_posts_table()
    if not table_exists:
        if not create_posts_table():
            print("Failed to create posts table. Exiting.")
            return
        table_exists, column_names = check_posts_table()
    
    print(f"Available columns: {column_names}")
    
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
                        # Check if article already exists
                        if article.get('link'):
                            cursor.execute("SELECT id FROM posts WHERE link = %s", [article['link']])
                            if cursor.fetchone():
                                skipped += 1
                                continue
                        
                        # Prepare data for insertion based on available columns
                        title = article.get('title', '')[:500] if article.get('title') else None
                        link = article.get('link')
                        description = article.get('description', '')
                        content = article.get('content', '')
                        image_url = article.get('image_url', '')
                        source_name = article.get('source_name', '')[:255] if article.get('source_name') else None
                        
                        # Handle arrays
                        creator = article.get('creator', [])
                        country = article.get('country', [])
                        category = article.get('category', [])
                        keywords = article.get('keywords', [])
                        
                        # Build dynamic SQL based on available columns
                        if 'pub_date' in column_names:
                            # Insert with pub_date
                            cursor.execute("""
                                INSERT INTO posts (
                                    title, link, description, content, pub_date, image_url,
                                    source_name, creator, country, category, keywords
                                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                            """, [
                                title, link, description, content, timezone.now(), image_url,
                                source_name, creator, country, category, keywords
                            ])
                        else:
                            # Insert without pub_date
                            cursor.execute("""
                                INSERT INTO posts (
                                    title, link, description, content, image_url,
                                    source_name, creator, country, category, keywords
                                ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                            """, [
                                title, link, description, content, image_url,
                                source_name, creator, country, category, keywords
                            ])
                        
                        imported += 1
                        
                        if imported % 100 == 0:
                            print(f"  Imported {imported} posts...")
                            
                    except Exception as e:
                        errors += 1
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

def main():
    """Main function"""
    print("Starting database check and import process...")
    
    # Import the data
    import_data_to_posts()

if __name__ == "__main__":
    main() 