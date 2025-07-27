import scrapy
import feedparser
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging
import re

logger = logging.getLogger(__name__)

class MSNRSSSpider(scrapy.Spider):
    name = 'msn_rss'
    allowed_domains = ['msn.com', 'rss.msn.com']
    
    # MSN RSS feeds
    rss_feeds = [
        'https://rss.msn.com/en-us/news',
        'https://rss.msn.com/en-us/news/world',
        'https://rss.msn.com/en-us/news/politics',
        'https://rss.msn.com/en-us/news/technology',
        'https://rss.msn.com/en-us/news/business',
        'https://rss.msn.com/en-us/news/entertainment',
        'https://rss.msn.com/en-us/news/sports',
        'https://rss.msn.com/en-us/news/health',
    ]
    
    # Alternative RSS feeds that might contain MSN content
    alternative_feeds = [
        'https://feeds.nbcnews.com/nbcnews/public/world',
        'https://feeds.nbcnews.com/nbcnews/public/politics',
        'https://feeds.nbcnews.com/nbcnews/public/technology',
        'https://feeds.nbcnews.com/nbcnews/public/business',
        'https://feeds.nbcnews.com/nbcnews/public/entertainment',
        'https://feeds.nbcnews.com/nbcnews/public/sports',
        'https://feeds.nbcnews.com/nbcnews/public/health',
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
    
    def start_requests(self):
        """Start requests for RSS feeds"""
        headers = {
            'Accept': 'application/rss+xml, application/xml, text/xml, */*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }
        
        # Try MSN RSS feeds first
        for rss_url in self.rss_feeds:
            yield scrapy.Request(
                url=rss_url,
                headers=headers,
                callback=self.parse_rss,
                meta={'source': 'msn', 'dont_cache': True},
                errback=self.handle_rss_error
            )
        
        # Try alternative feeds
        for rss_url in self.alternative_feeds:
            yield scrapy.Request(
                url=rss_url,
                headers=headers,
                callback=self.parse_rss,
                meta={'source': 'nbc', 'dont_cache': True},
                errback=self.handle_rss_error
            )
    
    def parse_rss(self, response):
        """Parse RSS feed responses"""
        logger.info(f"Parsing RSS feed: {response.url}")
        
        try:
            # Parse RSS feed
            feed = feedparser.parse(response.text)
            
            if feed.bozo:
                logger.warning(f"RSS feed parsing error: {feed.bozo_exception}")
            
            entries = feed.entries
            logger.info(f"Found {len(entries)} entries in RSS feed")
            
            source = response.meta.get('source', 'unknown')
            category = self.extract_category_from_url(response.url)
            
            for entry in entries[:20]:  # Limit to first 20 entries
                item = self.create_article_item(entry, category, source)
                if item:
                    yield item
                    
        except Exception as e:
            logger.error(f"Error parsing RSS feed: {e}")
    
    def handle_rss_error(self, failure):
        """Handle RSS feed request failures"""
        logger.warning(f"RSS feed request failed: {failure.value}")
    
    def create_article_item(self, entry, category, source):
        """Create MSNArticleItem from RSS entry"""
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
            item['source_name'] = source.upper()
            item['category'] = [category]
            item['country'] = ['US']
            item['keywords'] = self.extract_keywords_from_text(title + ' ' + clean_description)
            item['creator'] = [author] if author else []
            
            return item
            
        except Exception as e:
            logger.error(f"Error creating article item: {e}")
            return None
    
    def parse_rss_date(self, date_str):
        """Parse date from RSS entry"""
        if not date_str:
            return datetime.now()
        
        try:
            # Try to parse various RSS date formats
            import email.utils
            parsed_date = email.utils.parsedate_to_datetime(date_str)
            return parsed_date
        except:
            try:
                # Try ISO format
                return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            except:
                return datetime.now()
    
    def extract_keywords_from_text(self, text):
        """Extract keywords from text using simple NLP"""
        if not text:
            return []
        
        # Simple keyword extraction
        # Remove common words and punctuation
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
        """Extract category from RSS feed URL"""
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
    
    def closed(self, reason):
        """Called when spider closes"""
        logger.info(f"MSN RSS spider closed: {reason}") 