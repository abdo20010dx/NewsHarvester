"""
Django ORM Upsert Examples for NewsHarvester
Using link (URL) as unique identifier to prevent duplicates
"""

from django.db import models
from news.models import Post
import hashlib
from datetime import datetime


def upsert_post_with_link(article_data):
    """
    Upsert a post using link as the unique identifier
    This is the recommended approach for Django ORM
    """
    try:
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
                from urllib.parse import urlparse
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
            'updated_at': datetime.now(),
        }
        
        # Remove None values from defaults
        defaults = {k: v for k, v in defaults.items() if v is not None}
        
        # Upsert using link as the lookup field
        post, created = Post.objects.update_or_create(
            link=article_data['link'],  # This is the unique lookup field
            defaults=defaults
        )
        
        if created:
            print(f"✅ Created new post: {post.title}")
        else:
            print(f"🔄 Updated existing post: {post.title}")
            
        return post, created
        
    except Exception as e:
        print(f"❌ Error upserting post: {e}")
        return None, False


def bulk_upsert_posts(articles_list):
    """
    Bulk upsert multiple articles efficiently
    """
    created_count = 0
    updated_count = 0
    error_count = 0
    
    for article_data in articles_list:
        try:
            post, created = upsert_post_with_link(article_data)
            if created:
                created_count += 1
            else:
                updated_count += 1
        except Exception as e:
            print(f"❌ Error processing article: {e}")
            error_count += 1
    
    print(f"📊 Bulk upsert results:")
    print(f"   Created: {created_count}")
    print(f"   Updated: {updated_count}")
    print(f"   Errors: {error_count}")
    
    return created_count, updated_count, error_count


def upsert_with_content_hash(article_data):
    """
    Alternative upsert using content_hash as unique identifier
    Useful when you want to prevent duplicate content even with different URLs
    """
    try:
        # Generate content hash
        content_str = f"{article_data.get('title', '')}{article_data.get('content', '')}{article_data.get('link', '')}"
        content_hash = hashlib.sha256(content_str.encode()).hexdigest()
        
        # Check if content already exists
        existing_post = Post.objects.filter(content_hash=content_hash).first()
        
        if existing_post:
            print(f"🔄 Content already exists: {existing_post.title}")
            return existing_post, False
        else:
            # Create new post
            post = Post.objects.create(
                link=article_data['link'],
                title=article_data.get('title'),
                content=article_data.get('content'),
                content_hash=content_hash,
                # ... other fields
            )
            print(f"✅ Created new post with content hash: {post.title}")
            return post, True
            
    except Exception as e:
        print(f"❌ Error: {e}")
        return None, False


# Example usage in a Django view or management command
def example_usage():
    """
    Example of how to use the upsert functions
    """
    # Single article upsert
    article_data = {
        'title': 'Sample Article',
        'link': 'https://example.com/article1',
        'content': 'This is the article content...',
        'source_name': 'Example News',
        'category': ['technology'],
        'country': ['us'],
        'language': 'en'
    }
    
    post, created = upsert_post_with_link(article_data)
    
    # Bulk upsert
    articles_list = [
        {
            'title': 'Article 1',
            'link': 'https://example.com/article1',
            'content': 'Content 1...',
            'source_name': 'News Source 1'
        },
        {
            'title': 'Article 2', 
            'link': 'https://example.com/article2',
            'content': 'Content 2...',
            'source_name': 'News Source 2'
        }
    ]
    
    created, updated, errors = bulk_upsert_posts(articles_list)


# Django Management Command Example
"""
# In news/management/commands/upsert_articles.py

from django.core.management.base import BaseCommand
from news.upsert_example import bulk_upsert_posts

class Command(BaseCommand):
    help = 'Upsert articles from external sources'
    
    def handle(self, *args, **options):
        # Your article data here
        articles = [...]  # Your articles list
        
        created, updated, errors = bulk_upsert_posts(articles)
        
        self.stdout.write(
            self.style.SUCCESS(
                f'Successfully processed {created + updated} articles '
                f'(Created: {created}, Updated: {updated}, Errors: {errors})'
            )
        )
""" 