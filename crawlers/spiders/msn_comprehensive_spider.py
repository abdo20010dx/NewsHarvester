import scrapy
import feedparser
import json
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging
import re
import os

logger = logging.getLogger(__name__)

class MSNComprehensiveSpider(scrapy.Spider):
    name = 'msn_comprehensive'
    allowed_domains = ['msn.com', 'rss.msn.com', 'nbcnews.com', 'feeds.nbcnews.com', 'newsapi.org']
    
    # Multiple data sources for MSN content
    rss_feeds = [
        # NBC News feeds (MSN's content partner)
        'https://feeds.nbcnews.com/nbcnews/public/world',
        'https://feeds.nbcnews.com/nbcnews/public/politics',
        'https://feeds.nbcnews.com/nbcnews/public/technology',
        'https://feeds.nbcnews.com/nbcnews/public/business',
        'https://feeds.nbcnews.com/nbcnews/public/entertainment',
        'https://feeds.nbcnews.com/nbcnews/public/sports',
        'https://feeds.nbcnews.com/nbcnews/public/health',
        # MSN RSS feeds (if available)
        'https://rss.msn.com/en-us/news',
        'https://rss.msn.com/en-us/news/world',
        'https://rss.msn.com/en-us/news/politics',
        'https://rss.msn.com/en-us/news/technology',
        'https://rss.msn.com/en-us/news/business',
    ]
    
    # Direct MSN URLs to try
    msn_urls = [
        'https://www.msn.com/en-us/news',
        'https://www.msn.com/en-us/news/world',
        'https://www.msn.com/en-us/news/politics',
        'https://www.msn.com/en-us/news/technology',
        'https://www.msn.com/en-us/news/business',
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
        super(MSNComprehensiveSpider, self).__init__(*args, **kwargs)
        self.articles_found = 0
        self.max_articles = int(kwargs.get('max_articles', 100))
    
    def start_requests(self):
        """Start requests for multiple data sources"""
        headers = {
            'Accept': 'application/rss+xml, application/xml, text/xml, text/html, */*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }
        
        # Strategy 1: RSS Feeds (most reliable)
        logger.info("Starting RSS feed collection...")
        for rss_url in self.rss_feeds:
            yield scrapy.Request(
                url=rss_url,
                headers=headers,
                callback=self.parse_rss,
                meta={'source': 'rss', 'dont_cache': True},
                errback=self.handle_error
            )
        
        # Strategy 2: Direct MSN URLs (if RSS fails)
        logger.info("Starting direct MSN URL collection...")
        for msn_url in self.msn_urls:
            yield scrapy.Request(
                url=msn_url,
                headers=headers,
                callback=self.parse_msn_page,
                meta={'source': 'direct', 'dont_cache': True},
                errback=self.handle_error
            )
        
        # Strategy 3: Try NewsAPI if available
        api_key = os.getenv('NEWSAPI_KEY')
        if api_key and api_key != 'your_api_key_here':
            logger.info("Starting NewsAPI collection...")
            newsapi_urls = [
                f'https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}',
                f'https://newsapi.org/v2/everything?domains=msn.com&apiKey={api_key}',
                f'https://newsapi.org/v2/everything?q=msn&apiKey={api_key}',
            ]
            
            for api_url in newsapi_urls:
                yield scrapy.Request(
                    url=api_url,
                    headers={'Accept': 'application/json'},
                    callback=self.parse_newsapi,
                    meta={'source': 'newsapi', 'dont_cache': True},
                    errback=self.handle_error
                )
    
    def parse_rss(self, response):
        """Parse RSS feed responses"""
        logger.info(f"Parsing RSS feed: {response.url}")
        
        try:
            feed = feedparser.parse(response.text)
            
            if feed.bozo:
                logger.warning(f"RSS feed parsing error: {feed.bozo_exception}")
            
            entries = feed.entries
            logger.info(f"Found {len(entries)} entries in RSS feed")
            
            category = self.extract_category_from_url(response.url)
            source = 'NBC' if 'nbcnews.com' in response.url else 'MSN'
            
            for entry in entries[:20]:  # Limit to first 20 entries
                if self.articles_found >= self.max_articles:
                    break
                    
                item = self.create_article_from_rss(entry, category, source)
                if item:
                    self.articles_found += 1
                    yield item
                    
        except Exception as e:
            logger.error(f"Error parsing RSS feed: {e}")
    
    def parse_msn_page(self, response):
        """Parse direct MSN pages"""
        logger.info(f"Parsing MSN page: {response.url}")
        
        if self.articles_found >= self.max_articles:
            return
        
        try:
            category = self.extract_category_from_url(response.url)
            
            # Try to extract any content from the page
            articles = self.extract_articles_from_page(response)
            
            for article_data in articles:
                if self.articles_found >= self.max_articles:
                    break
                    
                item = self.create_article_from_data(article_data, category, 'MSN')
                if item:
                    self.articles_found += 1
                    yield item
                    
        except Exception as e:
            logger.error(f"Error parsing MSN page: {e}")
    
    def parse_newsapi(self, response):
        """Parse NewsAPI responses"""
        logger.info(f"Parsing NewsAPI: {response.url}")
        
        if self.articles_found >= self.max_articles:
            return
        
        try:
            data = json.loads(response.text)
            
            if data.get('status') != 'ok':
                logger.error(f"NewsAPI error: {data.get('message', 'Unknown error')}")
                return
            
            articles = data.get('articles', [])
            logger.info(f"Found {len(articles)} articles from NewsAPI")
            
            for article_data in articles:
                if self.articles_found >= self.max_articles:
                    break
                    
                # Filter for MSN content or high-quality news
                if self.is_msn_content(article_data) or self.is_quality_news(article_data):
                    item = self.create_article_from_newsapi(article_data)
                    if item:
                        self.articles_found += 1
                        yield item
                        
        except Exception as e:
            logger.error(f"Error parsing NewsAPI: {e}")
    
    def create_article_from_rss(self, entry, category, source):
        """Create article from RSS entry"""
        try:
            item = NewsItem()
            
            # Extract title
            title = entry.get('title', '')
            if not title:
                return None
            
            # Extract link
            link = entry.get('link', '')
            if not link:
                return None
            
            # Extract description/content
            description = entry.get('summary', '') or entry.get('description', '')
            
            # Extract publication date
            pub_date = self.parse_rss_date(entry.get('published', ''))
            
            # Extract author
            author = entry.get('author', '')
            
            # Extract image if available
            image_url = None
            if 'media_content' in entry:
                for media in entry['media_content']:
                    if media.get('type', '').startswith('image'):
                        image_url = media.get('url')
                        break
            
            # If no media_content, try to extract from description
            if not image_url and description:
                img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', description)
                if img_match:
                    image_url = img_match.group(1)
            
            # Clean description (remove HTML tags)
            clean_description = re.sub(r'<[^>]+>', '', description)
            
            # Create item
            item['title'] = title
            item['link'] = link
            item['description'] = clean_description
            item['content'] = clean_description
            item['pub_date'] = pub_date
            item['image_url'] = image_url
            item['source_name'] = source
            item['category'] = [category]
            item['country'] = ['US']
            item['keywords'] = self.extract_keywords_from_text(title + ' ' + clean_description)
            item['creator'] = [author] if author else []
            
            return item
            
        except Exception as e:
            logger.error(f"Error creating article from RSS: {e}")
            return None
    
    def create_article_from_newsapi(self, article_data):
        """Create article from NewsAPI data"""
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
            item['category'] = ['News']
            item['country'] = ['US']
            item['keywords'] = self.extract_keywords_from_text(article_data.get('title', '') + ' ' + article_data.get('description', ''))
            item['creator'] = [article_data.get('author', '')] if article_data.get('author') else []
            
            # Only return if we have essential fields
            if item['title'] and item['link']:
                return item
                
        except Exception as e:
            logger.error(f"Error creating article from NewsAPI: {e}")
        
        return None
    
    def create_article_from_data(self, article_data, category, source):
        """Create article from generic data"""
        try:
            item = NewsItem()
            
            item['title'] = article_data.get('title', '')
            item['link'] = article_data.get('link', '')
            item['description'] = article_data.get('description', '')
            item['content'] = article_data.get('content', '')
            item['pub_date'] = article_data.get('pub_date', datetime.now())
            item['image_url'] = article_data.get('image_url')
            item['source_name'] = source
            item['category'] = [category]
            item['country'] = ['US']
            item['keywords'] = article_data.get('keywords', [])
            item['creator'] = article_data.get('creator', [])
            
            if item['title'] and item['link']:
                return item
                
        except Exception as e:
            logger.error(f"Error creating article from data: {e}")
        
        return None
    
    def extract_articles_from_page(self, response):
        """Extract articles from MSN page"""
        articles = []
        
        try:
            # Look for any text that might be news content
            text_elements = response.css('h1, h2, h3, h4, h5, h6, p, span, div')
            
            for element in text_elements:
                text = element.css('::text').get()
                if text and len(text.strip()) > 20 and self.looks_like_news(text):
                    articles.append({
                        'title': text[:100],
                        'content': text,
                        'link': response.url,
                        'source_name': 'MSN'
                    })
                    break  # Just get one for now
            
        except Exception as e:
            logger.error(f"Error extracting articles from page: {e}")
        
        return articles
    
    def looks_like_news(self, text):
        """Check if text looks like news content"""
        news_keywords = [
            'news', 'article', 'story', 'headline', 'breaking', 'update',
            'reports', 'announces', 'says', 'according', 'officials',
            'government', 'president', 'minister', 'election', 'vote'
        ]
        
        text_lower = text.lower()
        return any(keyword in text_lower for keyword in news_keywords)
    
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
    
    def parse_rss_date(self, date_str):
        """Parse date from RSS entry"""
        if not date_str:
            return datetime.now()
        
        try:
            import email.utils
            parsed_date = email.utils.parsedate_to_datetime(date_str)
            return parsed_date
        except:
            try:
                return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            except:
                return datetime.now()
    
    def parse_newsapi_date(self, date_str):
        """Parse date from NewsAPI response"""
        if not date_str:
            return datetime.now()
        
        try:
            return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
        except:
            return datetime.now()
    
    def extract_keywords_from_text(self, text):
        """Extract keywords from text using simple NLP"""
        if not text:
            return []
        
        # Simple keyword extraction
        stop_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
            'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
            'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
            'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those',
            'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her',
            'us', 'them', 'my', 'your', 'his', 'her', 'its', 'our', 'their',
            'says', 'said', 'new', 'news', 'report', 'reports', 'according'
        }
        
        # Clean text
        text = re.sub(r'[^\w\s]', ' ', text.lower())
        words = text.split()
        
        # Filter out stop words and short words
        keywords = [word for word in words if word not in stop_words and len(word) > 3]
        
        # Return unique keywords (limit to 10)
        return list(set(keywords))[:10]
    
    def extract_category_from_url(self, url):
        """Extract category from URL"""
        url_lower = url.lower()
        
        if 'world' in url_lower:
            return 'World'
        elif 'politics' in url_lower:
            return 'Politics'
        elif 'technology' in url_lower:
            return 'Technology'
        elif 'business' in url_lower:
            return 'Business'
        elif 'entertainment' in url_lower:
            return 'Entertainment'
        elif 'sports' in url_lower:
            return 'Sports'
        elif 'health' in url_lower:
            return 'Health'
        else:
            return 'News'
    
    def handle_error(self, failure):
        """Handle request failures"""
        logger.warning(f"Request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider closes"""
        logger.info(f"MSN Comprehensive spider closed: {reason}")
        logger.info(f"Total articles found: {self.articles_found}") 