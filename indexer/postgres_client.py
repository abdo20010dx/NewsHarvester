import psycopg2
import psycopg2.extras
import django
import os
import logging
from datetime import datetime
import json

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import NewsArticle
from django.conf import settings

logger = logging.getLogger(__name__)


class PostgreSQLClient:
    """PostgreSQL client for indexing and searching MSN.com news articles"""
    
    def __init__(self):
        self.connection = None
        self.db_config = {
            'dbname': 'postgres',
            'user': 'postgres',
            'password': 'password',
            'host': 'localhost',
            'port': '5432'
        }
        self.initialize_connection()
    
    def initialize_connection(self):
        """Initialize PostgreSQL connection"""
        try:
            self.connection = psycopg2.connect(**self.db_config)
            self.connection.autocommit = True
            logger.info("Successfully connected to PostgreSQL")
            self.setup_full_text_search()
        except Exception as e:
            logger.error(f"Error connecting to PostgreSQL: {e}")
            raise
    
    def setup_full_text_search(self):
        """Setup full-text search capabilities"""
        try:
            with self.connection.cursor() as cursor:
                # Create full-text search index if it doesn't exist
                cursor.execute("""
                    CREATE INDEX IF NOT EXISTS idx_news_article_fts 
                    ON twitto.news_article 
                    USING gin(to_tsvector('english', title || ' ' || COALESCE(content, '')))
                """)
                
                # Create indexes for common search fields
                cursor.execute("""
                    CREATE INDEX IF NOT EXISTS idx_news_article_category 
                    ON twitto.news_article USING gin(category)
                """)
                
                cursor.execute("""
                    CREATE INDEX IF NOT EXISTS idx_news_article_country 
                    ON twitto.news_article USING gin(country)
                """)
                
                cursor.execute("""
                    CREATE INDEX IF NOT EXISTS idx_news_article_pub_date 
                    ON twitto.news_article (pub_date DESC)
                """)
                
                cursor.execute("""
                    CREATE INDEX IF NOT EXISTS idx_news_article_processing_status 
                    ON twitto.news_article (processing_status)
                """)
                
            logger.info("Full-text search indexes created successfully")
        except Exception as e:
            logger.error(f"Error setting up full-text search: {e}")
            raise
    
    def search_articles(self, query, filters=None, limit=20, offset=0):
        """Search articles using PostgreSQL full-text search"""
        try:
            with self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                # Build the search query
                search_sql = """
                    SELECT 
                        article_id,
                        title,
                        content,
                        description,
                        link,
                        pub_date,
                        source_name,
                        category,
                        country,
                        sentiment,
                        sentiment_score,
                        processing_status,
                        created_at,
                        updated_at,
                        ts_rank(to_tsvector('english', title || ' ' || COALESCE(content, '')), plainto_tsquery('english', %s)) as rank
                    FROM twitto.news_article
                    WHERE to_tsvector('english', title || ' ' || COALESCE(content, '')) @@ plainto_tsquery('english', %s)
                """
                
                params = [query, query]
                
                # Add filters
                if filters:
                    filter_conditions = []
                    for field, value in filters.items():
                        if field == 'category' and value:
                            filter_conditions.append("category @> %s")
                            params.append(json.dumps([value]))
                        elif field == 'country' and value:
                            filter_conditions.append("country @> %s")
                            params.append(json.dumps([value]))
                        elif field == 'sentiment' and value:
                            filter_conditions.append("sentiment = %s")
                            params.append(value)
                        elif field == 'processing_status' and value:
                            filter_conditions.append("processing_status = %s")
                            params.append(value)
                    
                    if filter_conditions:
                        search_sql += " AND " + " AND ".join(filter_conditions)
                
                # Add ordering and pagination
                search_sql += """
                    ORDER BY rank DESC, pub_date DESC
                    LIMIT %s OFFSET %s
                """
                params.extend([limit, offset])
                
                # Execute search
                cursor.execute(search_sql, params)
                results = cursor.fetchall()
                
                # Get total count
                count_sql = """
                    SELECT COUNT(*) 
                    FROM twitto.news_article
                    WHERE to_tsvector('english', title || ' ' || COALESCE(content, '')) @@ plainto_tsquery('english', %s)
                """
                count_params = [query]
                
                if filters:
                    filter_conditions = []
                    for field, value in filters.items():
                        if field == 'category' and value:
                            filter_conditions.append("category @> %s")
                            count_params.append(json.dumps([value]))
                        elif field == 'country' and value:
                            filter_conditions.append("country @> %s")
                            count_params.append(json.dumps([value]))
                        elif field == 'sentiment' and value:
                            filter_conditions.append("sentiment = %s")
                            count_params.append(value)
                        elif field == 'processing_status' and value:
                            filter_conditions.append("processing_status = %s")
                            count_params.append(value)
                    
                    if filter_conditions:
                        count_sql += " AND " + " AND ".join(filter_conditions)
                
                cursor.execute(count_sql, count_params)
                total_count = cursor.fetchone()[0]
                
                return {
                    'results': [dict(row) for row in results],
                    'total': total_count,
                    'limit': limit,
                    'offset': offset
                }
                
        except Exception as e:
            logger.error(f"Error searching articles: {e}")
            raise
    
    def search_by_embedding(self, query_embedding, limit=20, offset=0):
        """Search articles by vector similarity using pgvector"""
        try:
            with self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                # Check if pgvector extension is available
                cursor.execute("SELECT EXISTS(SELECT 1 FROM pg_extension WHERE extname = 'vector')")
                if not cursor.fetchone()[0]:
                    logger.warning("pgvector extension not available. Falling back to regular search.")
                    return self.search_articles("", limit=limit, offset=offset)
                
                search_sql = """
                    SELECT 
                        article_id,
                        title,
                        content,
                        description,
                        link,
                        pub_date,
                        source_name,
                        category,
                        country,
                        sentiment,
                        sentiment_score,
                        processing_status,
                        created_at,
                        updated_at,
                        1 - (embedding <=> %s) as similarity
                    FROM twitto.news_article
                    WHERE embedding IS NOT NULL
                    ORDER BY embedding <=> %s
                    LIMIT %s OFFSET %s
                """
                
                cursor.execute(search_sql, [query_embedding, query_embedding, limit, offset])
                results = cursor.fetchall()
                
                return {
                    'results': [dict(row) for row in results],
                    'total': len(results),
                    'limit': limit,
                    'offset': offset
                }
                
        except Exception as e:
            logger.error(f"Error searching by embedding: {e}")
            raise
    
    def get_article_statistics(self):
        """Get article statistics from PostgreSQL"""
        try:
            with self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                # Get basic statistics
                cursor.execute("""
                    SELECT 
                        COUNT(*) as total_articles,
                        COUNT(CASE WHEN processing_status = 'raw' THEN 1 END) as raw_articles,
                        COUNT(CASE WHEN processing_status = 'processed' THEN 1 END) as processed_articles,
                        COUNT(CASE WHEN processing_status = 'error' THEN 1 END) as error_articles,
                        COUNT(CASE WHEN embedding IS NOT NULL THEN 1 END) as articles_with_embeddings
                    FROM twitto.news_article
                """)
                
                basic_stats = cursor.fetchone()
                
                # Get sentiment distribution
                cursor.execute("""
                    SELECT 
                        sentiment,
                        COUNT(*) as count,
                        AVG(sentiment_score) as avg_score
                    FROM twitto.news_article
                    WHERE sentiment IS NOT NULL
                    GROUP BY sentiment
                """)
                
                sentiment_stats = cursor.fetchall()
                
                # Get category distribution
                cursor.execute("""
                    SELECT 
                        jsonb_array_elements_text(category) as category_name,
                        COUNT(*) as count
                    FROM twitto.news_article
                    WHERE category IS NOT NULL
                    GROUP BY category_name
                    ORDER BY count DESC
                    LIMIT 10
                """)
                
                category_stats = cursor.fetchall()
                
                return {
                    'basic_stats': dict(basic_stats),
                    'sentiment_distribution': [dict(row) for row in sentiment_stats],
                    'top_categories': [dict(row) for row in category_stats]
                }
                
        except Exception as e:
            logger.error(f"Error getting statistics: {e}")
            return {}
    
    def get_recent_articles(self, limit=20):
        """Get recent articles"""
        try:
            with self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                cursor.execute("""
                    SELECT 
                        article_id,
                        title,
                        content,
                        description,
                        link,
                        pub_date,
                        source_name,
                        category,
                        country,
                        sentiment,
                        sentiment_score,
                        processing_status,
                        created_at,
                        updated_at
                    FROM twitto.news_article
                    ORDER BY pub_date DESC, created_at DESC
                    LIMIT %s
                """, [limit])
                
                results = cursor.fetchall()
                return [dict(row) for row in results]
                
        except Exception as e:
            logger.error(f"Error getting recent articles: {e}")
            return []
    
    def get_articles_by_category(self, category, limit=20, offset=0):
        """Get articles by category"""
        try:
            with self.connection.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cursor:
                cursor.execute("""
                    SELECT 
                        article_id,
                        title,
                        content,
                        description,
                        link,
                        pub_date,
                        source_name,
                        category,
                        country,
                        sentiment,
                        sentiment_score,
                        processing_status,
                        created_at,
                        updated_at
                    FROM twitto.news_article
                    WHERE category @> %s
                    ORDER BY pub_date DESC, created_at DESC
                    LIMIT %s OFFSET %s
                """, [json.dumps([category]), limit, offset])
                
                results = cursor.fetchall()
                return [dict(row) for row in results]
                
        except Exception as e:
            logger.error(f"Error getting articles by category: {e}")
            return []
    
    def close_connection(self):
        """Close PostgreSQL connection"""
        if self.connection:
            self.connection.close()
            logger.info("PostgreSQL connection closed")


def search_articles(query, filters=None, limit=20):
    """Convenience function to search articles"""
    client = PostgreSQLClient()
    try:
        return client.search_articles(query, filters, limit)
    finally:
        client.close_connection()


def get_recent_articles(limit=20):
    """Convenience function to get recent articles"""
    client = PostgreSQLClient()
    try:
        return client.get_recent_articles(limit)
    finally:
        client.close_connection()


def get_article_statistics():
    """Convenience function to get article statistics"""
    client = PostgreSQLClient()
    try:
        return client.get_article_statistics()
    finally:
        client.close_connection() 