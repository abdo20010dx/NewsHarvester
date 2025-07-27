import psycopg2
import json
import hashlib
from datetime import datetime
from scrapy.exceptions import DropItem
import logging
import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import Post

logger = logging.getLogger(__name__)


class ValidationPipeline:
    """Validate scraped items"""
    
    def process_item(self, item, spider):
        if not item.get('title') or not item.get('content'):
            raise DropItem(f"Missing title or content: {item}")
        
        if not item.get('link'):
            raise DropItem(f"Missing link: {item}")
        
        return item


class DuplicatesPipeline:
    """Remove duplicate items based on content hash"""
    
    def __init__(self):
        self.seen_hashes = set()
    
    def process_item(self, item, spider):
        # Create content hash
        content = f"{item.get('title', '')}{item.get('content', '')}"
        content_hash = hashlib.sha256(content.encode()).hexdigest()
        
        if content_hash in self.seen_hashes:
            raise DropItem(f"Duplicate item: {item.get('title')}")
        
        self.seen_hashes.add(content_hash)
        item['content_hash'] = content_hash
        return item


class DjangoDatabasePipeline:
    """Save items to Django database using the Post model"""
    
    def process_item(self, item, spider):
        """Save item to Django database"""
        try:
            # Check if article already exists
            existing_post = Post.objects.filter(
                link=item.get('link')
            ).first()
            
            if existing_post:
                logger.info(f"Article already exists: {item.get('title')}")
                return item
            
            # Create new post
            post = Post(
                title=item.get('title'),
                link=item.get('link'),
                description=item.get('description'),
                content=item.get('content'),
                pub_date=item.get('pub_date'),
                language=item.get('language'),
                image_url=item.get('image_url'),
                video_url=item.get('video_url'),
                source_name=item.get('source_name'),
                source_domain=item.get('source_domain'),
                source_country=item.get('source_country'),
                source_language=item.get('source_language'),
                author=item.get('author'),
                creator=item.get('creator', []),
                category=item.get('category', []),
                tags=item.get('tags', []),
                keywords=item.get('keywords', []),
                country=item.get('country', []),
                region=item.get('region', []),
                city=item.get('city', []),
                sentiment=item.get('sentiment'),
                sentiment_score=item.get('sentiment_score'),
                readability_score=item.get('readability_score'),
                word_count=item.get('word_count'),
                quality_score=item.get('quality_score'),
                crawl_type=item.get('crawl_type', 'live'),
                spider_name=item.get('spider_name'),
                feed_url=item.get('feed_url'),
                content_hash=item.get('content_hash'),
                processing_status=item.get('processing_status', 'raw')
            )
            
            post.save()
            logger.info(f"Saved article: {item.get('title')}")
            
        except Exception as e:
            logger.error(f"Error saving item to database: {e}")
            raise DropItem(f"Database error: {e}")
        
        return item


class PostgreSQLPipeline:
    """Save items directly to PostgreSQL"""
    
    def __init__(self):
        self.db_config = {
            'dbname': 'postgres',
            'user': 'postgres',
            'password': 'password',
            'host': 'localhost',
            'port': '5432'
        }
        self.connection = None
    
    def open_spider(self, spider):
        """Open database connection when spider starts"""
        try:
            self.connection = psycopg2.connect(**self.db_config)
            self.connection.autocommit = True
            logger.info("PostgreSQL connection established")
        except Exception as e:
            logger.error(f"Failed to connect to PostgreSQL: {e}")
            raise
    
    def close_spider(self, spider):
        """Close database connection when spider finishes"""
        if self.connection:
            self.connection.close()
            logger.info("PostgreSQL connection closed")
    
    def process_item(self, item, spider):
        """Save item to PostgreSQL"""
        try:
            with self.connection.cursor() as cursor:
                # Check if article already exists
                cursor.execute(
                    "SELECT id FROM twitto.news_article WHERE link = %s OR content_hash = %s",
                    (item.get('link'), item.get('content_hash'))
                )
                
                if cursor.fetchone():
                    logger.info(f"Article already exists: {item.get('title')}")
                    return item
                
                # Insert new article
                cursor.execute("""
                    INSERT INTO twitto.news_article (
                        article_id, title, link, description, content, pub_date, image_url,
                        video_url, source_id, source_name, source_priority, category, country, 
                        keywords, creator, topics, language, entities, sentiment, sentiment_score,
                        embedding, content_hash, processing_status, created_at, updated_at, deleted_at
                    ) VALUES (
                        gen_random_uuid(), %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
                    )
                """, (
                    item.get('title'),
                    item.get('link'),
                    item.get('description'),
                    item.get('content'),
                    item.get('pub_date'),
                    item.get('image_url'),
                    item.get('video_url'),
                    item.get('source_id'),
                    item.get('source_name'),
                    item.get('source_priority'),
                    item.get('category'),
                    item.get('country'),
                    item.get('keywords'),
                    item.get('creator'),
                    item.get('topics'),
                    item.get('language'),
                    item.get('entities'),
                    item.get('sentiment'),
                    item.get('sentiment_score'),
                    item.get('embedding'),
                    item.get('content_hash'),
                    item.get('processing_status'),
                    datetime.now(),
                    datetime.now(),
                    None
                ))
                
                logger.info(f"Saved article to PostgreSQL: {item.get('title')}")
                
        except Exception as e:
            logger.error(f"Error saving item to PostgreSQL: {e}")
            raise DropItem(f"PostgreSQL error: {e}")
        
        return item


class DatabasePipeline:
    """Legacy database pipeline"""
    
    def process_item(self, item, spider):
        # This pipeline requires Django to be set up
        # For now, we'll use the PostgreSQL pipeline instead
        return item 