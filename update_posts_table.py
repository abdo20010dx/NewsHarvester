#!/usr/bin/env python
"""
Script to update the existing posts table with new columns
"""
import os
import sys
import django
from django.db import connection

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

def update_posts_table():
    """Add missing columns to the posts table"""
    print("Updating posts table structure...")
    
    try:
        with connection.cursor() as cursor:
            # List of columns to add
            columns_to_add = [
                ('pub_date', 'TIMESTAMP WITH TIME ZONE'),
                ('source_name', 'VARCHAR(255)'),
                ('source_domain', 'VARCHAR(255)'),
                ('source_country', 'VARCHAR(10)'),
                ('source_language', 'VARCHAR(10)'),
                ('author', 'VARCHAR(255)'),
                ('tags', 'TEXT[]'),
                ('region', 'TEXT[]'),
                ('city', 'TEXT[]'),
                ('sentiment', 'VARCHAR(50)'),
                ('sentiment_score', 'FLOAT'),
                ('readability_score', 'FLOAT'),
                ('word_count', 'INTEGER'),
                ('quality_score', 'FLOAT'),
                ('crawl_type', 'VARCHAR(20) DEFAULT \'live\''),
                ('spider_name', 'VARCHAR(100)'),
                ('feed_url', 'TEXT'),
                ('crawled_at', 'TIMESTAMP WITH TIME ZONE DEFAULT NOW()'),
                ('content_hash', 'VARCHAR(64)'),
                ('processing_status', 'VARCHAR(50) DEFAULT \'raw\'')
            ]
            
            # Check which columns already exist
            cursor.execute("""
                SELECT column_name 
                FROM information_schema.columns 
                WHERE table_name = 'posts'
            """)
            existing_columns = [row[0] for row in cursor.fetchall()]
            
            print(f"Existing columns: {existing_columns}")
            
            # Add missing columns
            for column_name, column_type in columns_to_add:
                if column_name not in existing_columns:
                    try:
                        sql = f"ALTER TABLE posts ADD COLUMN {column_name} {column_type}"
                        print(f"Adding column: {column_name}")
                        cursor.execute(sql)
                        print(f"  ✓ Added {column_name}")
                    except Exception as e:
                        print(f"  ✗ Error adding {column_name}: {e}")
                else:
                    print(f"  - Column {column_name} already exists")
            
            # Create indexes
            indexes_to_create = [
                ('idx_posts_pub_date', 'posts(pub_date)'),
                ('idx_posts_source_country', 'posts(source_country)'),
                ('idx_posts_language', 'posts(language)'),
                ('idx_posts_crawl_type', 'posts(crawl_type)'),
                ('idx_posts_processing_status', 'posts(processing_status)'),
                ('idx_posts_created_at', 'posts(created_at)')
            ]
            
            for index_name, index_def in indexes_to_create:
                try:
                    sql = f"CREATE INDEX IF NOT EXISTS {index_name} ON {index_def}"
                    cursor.execute(sql)
                    print(f"  ✓ Created index: {index_name}")
                except Exception as e:
                    print(f"  ✗ Error creating index {index_name}: {e}")
            
            # Update existing records
            print("\nUpdating existing records...")
            
            # Set default values for new columns
            updates = [
                ("UPDATE posts SET crawl_type = 'live' WHERE crawl_type IS NULL", "Set crawl_type"),
                ("UPDATE posts SET processing_status = 'raw' WHERE processing_status IS NULL", "Set processing_status"),
                ("UPDATE posts SET crawled_at = created_at WHERE crawled_at IS NULL", "Set crawled_at"),
                ("UPDATE posts SET source_name = 'Unknown' WHERE source_name IS NULL", "Set source_name"),
                ("UPDATE posts SET language = 'en' WHERE language IS NULL", "Set language")
            ]
            
            for sql, description in updates:
                try:
                    cursor.execute(sql)
                    print(f"  ✓ {description}")
                except Exception as e:
                    print(f"  ✗ Error {description}: {e}")
            
            print("\nPosts table update completed!")
            
    except Exception as e:
        print(f"Error updating posts table: {e}")


def create_new_tables():
    """Create the new CrawlSchedule and CrawlLog tables"""
    print("\nCreating new tables...")
    
    try:
        with connection.cursor() as cursor:
            # Create CrawlSchedule table
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS crawl_schedule (
                    id BIGSERIAL PRIMARY KEY,
                    country_code VARCHAR(10) NOT NULL,
                    source_domain VARCHAR(255) NOT NULL,
                    crawl_type VARCHAR(20) NOT NULL DEFAULT 'live',
                    is_active BOOLEAN DEFAULT TRUE,
                    interval_minutes INTEGER DEFAULT 15,
                    last_crawl TIMESTAMP WITH TIME ZONE,
                    next_crawl TIMESTAMP WITH TIME ZONE,
                    total_articles INTEGER DEFAULT 0,
                    success_count INTEGER DEFAULT 0,
                    error_count INTEGER DEFAULT 0,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                    UNIQUE(country_code, source_domain, crawl_type)
                )
            """)
            print("  ✓ Created crawl_schedule table")
            
            # Create CrawlLog table
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS crawl_log (
                    id BIGSERIAL PRIMARY KEY,
                    spider_name VARCHAR(100) NOT NULL,
                    country_code VARCHAR(10) NOT NULL,
                    source_domain VARCHAR(255) NOT NULL,
                    crawl_type VARCHAR(20) NOT NULL,
                    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
                    end_time TIMESTAMP WITH TIME ZONE,
                    duration_seconds FLOAT,
                    articles_found INTEGER DEFAULT 0,
                    articles_saved INTEGER DEFAULT 0,
                    articles_skipped INTEGER DEFAULT 0,
                    errors_count INTEGER DEFAULT 0,
                    status VARCHAR(20) DEFAULT 'running',
                    error_message TEXT,
                    error_traceback TEXT,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
                )
            """)
            print("  ✓ Created crawl_log table")
            
            # Create indexes for new tables
            indexes = [
                ('idx_crawl_schedule_country', 'crawl_schedule(country_code)'),
                ('idx_crawl_schedule_domain', 'crawl_schedule(source_domain)'),
                ('idx_crawl_schedule_type', 'crawl_schedule(crawl_type)'),
                ('idx_crawl_log_spider', 'crawl_log(spider_name)'),
                ('idx_crawl_log_country', 'crawl_log(country_code)'),
                ('idx_crawl_log_type', 'crawl_log(crawl_type)'),
                ('idx_crawl_log_start', 'crawl_log(start_time)'),
                ('idx_crawl_log_status', 'crawl_log(status)')
            ]
            
            for index_name, index_def in indexes:
                try:
                    cursor.execute(f"CREATE INDEX IF NOT EXISTS {index_name} ON {index_def}")
                    print(f"  ✓ Created index: {index_name}")
                except Exception as e:
                    print(f"  ✗ Error creating index {index_name}: {e}")
            
            print("\nNew tables created successfully!")
            
    except Exception as e:
        print(f"Error creating new tables: {e}")


def main():
    """Main function"""
    print("Starting database structure update...")
    
    # Update posts table
    update_posts_table()
    
    # Create new tables
    create_new_tables()
    
    print("\nDatabase structure update completed!")


if __name__ == "__main__":
    main() 