import scrapy
from datetime import datetime
from urllib.parse import urljoin
from ..items import NewsItem
import feedparser
import re


class RSSSpider(scrapy.Spider):
    name = 'rss'
    allowed_domains = ['rss.cnn.com', 'feeds.bbci.co.uk', 'rss.nytimes.com']
    
    # Public RSS feeds from major news sources
    start_urls = [
        'http://rss.cnn.com/rss/edition.rss',
        'http://feeds.bbci.co.uk/news/rss.xml',
        'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 2,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 1,
        'ROBOTSTXT_OBEY': False,
        'ITEM_PIPELINES': {
            'crawlers.pipelines.ValidationPipeline': 300,
            'crawlers.pipelines.DuplicatesPipeline': 400,
            'crawlers.pipelines.PostgreSQLPipeline': 500,
        },
        'DOWNLOADER_MIDDLEWARES': {
            'crawlers.middlewares.RotateUserAgentMiddleware': 400,
            'crawlers.middlewares.DelayMiddleware': 500,
        }
    }
    
    def parse(self, response):
        """Parse RSS feed responses"""
        self.logger.info(f"Parsing RSS feed: {response.url}")
        
        try:
            # Parse RSS feed
            feed = feedparser.parse(response.text)
            
            if feed.entries:
                self.logger.info(f"Found {len(feed.entries)} articles in RSS feed")
                
                for entry in feed.entries:
                    item = self.create_article_item(entry, response.url)
                    if item:
                        yield item
            else:
                self.logger.warning(f"No entries found in RSS feed: {response.url}")
                
        except Exception as e:
            self.logger.error(f"Failed to parse RSS feed {response.url}: {e}")
    
    def create_article_item(self, entry, source_url):
        """Create MSNArticleItem from RSS entry"""
        try:
            item = NewsItem()
            
            # Map RSS fields to our item fields
            item['title'] = entry.get('title', '').strip()
            item['link'] = entry.get('link', '')
            item['description'] = entry.get('summary', '')
            
            # Try to extract content from different fields
            content = entry.get('content', [{}])[0].get('value', '') if entry.get('content') else ''
            if not content:
                content = entry.get('summary', '')
            item['content'] = content
            
            # Handle publication date
            pub_date_str = entry.get('published', '')
            if pub_date_str:
                try:
                    # Parse various date formats
                    parsed_date = feedparser._parse_date(pub_date_str)
                    if parsed_date:
                        item['pub_date'] = datetime(*parsed_date[:6])
                    else:
                        item['pub_date'] = datetime.now()
                except:
                    item['pub_date'] = datetime.now()
            else:
                item['pub_date'] = datetime.now()
            
            # Extract image URL from media content or enclosures
            image_url = None
            if entry.get('media_content'):
                image_url = entry['media_content'][0].get('url')
            elif entry.get('enclosures'):
                for enclosure in entry['enclosures']:
                    if enclosure.get('type', '').startswith('image/'):
                        image_url = enclosure.get('href')
                        break
            
            item['image_url'] = image_url
            
            # Set source name based on feed URL
            item['source_name'] = self.extract_source_name(source_url)
            
            # Set category based on feed URL
            item['category'] = [self.extract_category(source_url)]
            item['country'] = [self.extract_country(source_url)]
            
            # Extract author
            author = entry.get('author', '')
            if author:
                item['creator'] = [author]
            else:
                item['creator'] = []
            
            # Only yield if we have essential fields
            if item['title'] and item['link']:
                return item
                
        except Exception as e:
            self.logger.error(f"Error creating article item: {e}")
        
        return None
    
    def extract_source_name(self, url):
        """Extract source name from URL"""
        if 'cnn.com' in url:
            return 'CNN'
        elif 'bbci.co.uk' in url:
            return 'BBC'
        elif 'nytimes.com' in url:
            return 'New York Times'
        else:
            return 'RSS Feed'
    
    def extract_category(self, url):
        """Extract category from URL"""
        if 'Technology' in url:
            return 'Technology'
        elif 'Business' in url:
            return 'Business'
        elif 'Sports' in url:
            return 'Sports'
        elif 'Entertainment' in url:
            return 'Entertainment'
        else:
            return 'News'
    
    def extract_country(self, url):
        """Extract country from URL"""
        if 'bbci.co.uk' in url:
            return 'UK'
        elif 'cnn.com' in url or 'nytimes.com' in url:
            return 'US'
        else:
            return 'US' 