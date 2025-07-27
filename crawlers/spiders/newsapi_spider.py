import scrapy
import json
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging
import os

logger = logging.getLogger(__name__)

class NewsAPISpider(scrapy.Spider):
    name = 'newsapi'
    allowed_domains = ['newsapi.org']
    
    # NewsAPI endpoints for MSN content
    api_urls = [
        'https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}',
        'https://newsapi.org/v2/everything?domains=msn.com&apiKey={api_key}',
        'https://newsapi.org/v2/everything?q=msn&apiKey={api_key}',
    ]
    
    # Categories to search for
    categories = [
        'general', 'business', 'technology', 'entertainment', 
        'sports', 'science', 'health'
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 2,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 1,
        'ROBOTSTXT_OBEY': False,
        'ITEM_PIPELINES': {
            'crawlers.pipelines.ValidationPipeline': 300,
            'crawlers.pipelines.DuplicatesPipeline': 400,
        },
        'DOWNLOADER_MIDDLEWARES': {
            'crawlers.middlewares.RotateUserAgentMiddleware': 400,
        },
        'COOKIES_ENABLED': True,
        'DOWNLOAD_TIMEOUT': 30,
        'RETRY_TIMES': 3,
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403],
    }
    
    def __init__(self, *args, **kwargs):
        super(NewsAPISpider, self).__init__(*args, **kwargs)
        # Get API key from environment variable
        self.api_key = os.getenv('NEWSAPI_KEY', 'your_api_key_here')
        if self.api_key == 'your_api_key_here':
            logger.warning("NEWSAPI_KEY environment variable not set. Please set it to use NewsAPI.")
    
    def start_requests(self):
        """Start requests for NewsAPI endpoints"""
        if self.api_key == 'your_api_key_here':
            logger.error("Cannot proceed without NewsAPI key")
            return
        
        headers = {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }
        
        # Request from main API endpoints
        for api_url in self.api_urls:
            url = api_url.format(api_key=self.api_key)
            yield scrapy.Request(
                url=url,
                headers=headers,
                callback=self.parse_newsapi,
                meta={'dont_cache': True}
            )
        
        # Request by categories
        for category in self.categories:
            category_url = f'https://newsapi.org/v2/top-headlines?country=us&category={category}&apiKey={self.api_key}'
            yield scrapy.Request(
                url=category_url,
                headers=headers,
                callback=self.parse_newsapi,
                meta={'category': category, 'dont_cache': True}
            )
    
    def parse_newsapi(self, response):
        """Parse NewsAPI responses"""
        logger.info(f"Parsing NewsAPI response: {response.url}")
        
        try:
            data = json.loads(response.text)
            
            if data.get('status') != 'ok':
                logger.error(f"NewsAPI error: {data.get('message', 'Unknown error')}")
                return
            
            articles = data.get('articles', [])
            logger.info(f"Found {len(articles)} articles from NewsAPI")
            
            category = response.meta.get('category', 'general')
            
            for article_data in articles:
                # Filter for MSN content or high-quality news
                if self.is_msn_content(article_data) or self.is_quality_news(article_data):
                    item = self.create_article_item(article_data, category)
                    if item:
                        yield item
                        
        except json.JSONDecodeError:
            logger.error("Failed to parse JSON from NewsAPI response")
        except Exception as e:
            logger.error(f"Error parsing NewsAPI response: {e}")
    
    def is_msn_content(self, article_data):
        """Check if article is from MSN or related sources"""
        source_name = article_data.get('source', {}).get('name', '').lower()
        url = article_data.get('url', '').lower()
        
        msn_indicators = [
            'msn', 'microsoft', 'nbc', 'cnbc', 'msnbc',
            'outlook', 'bing', 'windows', 'microsoft news'
        ]
        
        return any(indicator in source_name for indicator in msn_indicators) or \
               any(indicator in url for indicator in msn_indicators)
    
    def is_quality_news(self, article_data):
        """Check if article is from a quality news source"""
        source_name = article_data.get('source', {}).get('name', '').lower()
        
        quality_sources = [
            'reuters', 'associated press', 'ap', 'bbc', 'cnn', 'fox news',
            'nbc news', 'abc news', 'cbs news', 'usa today', 'wall street journal',
            'new york times', 'washington post', 'los angeles times',
            'time', 'newsweek', 'the atlantic', 'the economist'
        ]
        
        return any(source in source_name for source in quality_sources)
    
    def create_article_item(self, article_data, category):
        """Create MSNArticleItem from NewsAPI article data"""
        try:
            item = NewsItem()
            
            # Map NewsAPI fields to item fields
            item['title'] = article_data.get('title', '')
            item['link'] = article_data.get('url', '')
            item['description'] = article_data.get('description', '')
            item['content'] = article_data.get('content', '') or article_data.get('description', '')
            item['pub_date'] = self.parse_newsapi_date(article_data.get('publishedAt'))
            item['image_url'] = article_data.get('urlToImage')
            item['source_name'] = article_data.get('source', {}).get('name', 'Unknown')
            item['category'] = [category.title()]
            item['country'] = ['US']
            item['keywords'] = self.extract_keywords_from_text(article_data.get('title', '') + ' ' + article_data.get('description', ''))
            item['creator'] = [article_data.get('author', '')] if article_data.get('author') else []
            
            # Only return if we have essential fields
            if item['title'] and item['link']:
                return item
                
        except Exception as e:
            logger.error(f"Error creating article item: {e}")
        
        return None
    
    def parse_newsapi_date(self, date_str):
        """Parse date from NewsAPI response"""
        if not date_str:
            return datetime.now()
        
        try:
            # NewsAPI uses ISO 8601 format
            return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        except:
            return datetime.now()
    
    def extract_keywords_from_text(self, text):
        """Extract keywords from text using simple NLP"""
        if not text:
            return []
        
        # Simple keyword extraction
        import re
        
        # Remove common words and punctuation
        stop_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
            'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
            'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
            'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those',
            'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her',
            'us', 'them', 'my', 'your', 'his', 'her', 'its', 'our', 'their'
        }
        
        # Clean text
        text = re.sub(r'[^\w\s]', ' ', text.lower())
        words = text.split()
        
        # Filter out stop words and short words
        keywords = [word for word in words if word not in stop_words and len(word) > 3]
        
        # Return unique keywords (limit to 10)
        return list(set(keywords))[:10]
    
    def closed(self, reason):
        """Called when spider closes"""
        logger.info(f"NewsAPI spider closed: {reason}") 