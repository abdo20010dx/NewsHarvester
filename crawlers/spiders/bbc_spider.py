"""
Specialized BBC Spider for extracting full content from BBC articles
This spider is specifically designed to handle BBC's content structure
"""
import scrapy
import feedparser
from datetime import datetime, timedelta
from urllib.parse import urlparse, urljoin
import logging
import re
from ..items import NewsItem
from data.countries import get_country_name


class BBCSpider(scrapy.Spider):
    name = 'bbc'
    allowed_domains = ['bbc.com', 'bbc.co.uk']
    
    def __init__(self, max_articles=100, hours_back=24, *args, **kwargs):
        super(BBCSpider, self).__init__(*args, **kwargs)
        
        self.max_articles = int(max_articles)
        self.hours_back = int(hours_back)
        self.total_articles = 0
        
        # Calculate cutoff time for recent articles
        self.cutoff_time = datetime.now() - timedelta(hours=self.hours_back)
        
        # Setup logging
        self._logger = logging.getLogger(__name__)
        
        # BBC RSS feeds
        self.start_urls = [
            'https://feeds.bbci.co.uk/news/rss.xml',
            'https://feeds.bbci.co.uk/news/world/rss.xml',
            'https://feeds.bbci.co.uk/news/uk/rss.xml',
            'https://feeds.bbci.co.uk/news/business/rss.xml',
            'https://feeds.bbci.co.uk/news/technology/rss.xml',
            'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml',
            'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
            'https://feeds.bbci.co.uk/news/health/rss.xml',
            'https://feeds.bbci.co.uk/news/politics/rss.xml',
            'https://feeds.bbci.co.uk/news/education/rss.xml'
        ]
        
        # Custom settings for BBC
        self.custom_settings = {
            'DOWNLOAD_DELAY': 1,
            'CONCURRENT_REQUESTS_PER_DOMAIN': 3,
            'ROBOTSTXT_OBEY': True,
            'COOKIES_ENABLED': True,
            'DOWNLOAD_TIMEOUT': 30,
            'RETRY_TIMES': 3,
            'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403],
            'AUTOTHROTTLE_ENABLED': True,
            'AUTOTHROTTLE_START_DELAY': 1,
            'AUTOTHROTTLE_MAX_DELAY': 5,
            'AUTOTHROTTLE_TARGET_CONCURRENCY': 3.0,
            'DOWNLOADER_MIDDLEWARES': {
                'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
                'crawlers.middlewares.RotateUserAgentMiddleware': 400,
            },
            'ITEM_PIPELINES': {
                'crawlers.pipelines.ValidationPipeline': 300,
                'crawlers.pipelines.DuplicatesPipeline': 400,
            }
        }
    
    def start_requests(self):
        """Start requests for all BBC RSS feeds"""
        for rss_url in self.start_urls:
            yield scrapy.Request(
                url=rss_url,
                callback=self.parse_rss_feed,
                meta={'feed_url': rss_url},
                errback=self.handle_error,
                dont_filter=True
            )
    
    def parse_rss_feed(self, response):
        """Parse BBC RSS feed and extract recent articles"""
        feed_url = response.meta['feed_url']
        category = self._extract_category_from_url(feed_url)
        
        self._logger.info(f"Parsing BBC RSS feed: {feed_url} for category: {category}")
        
        try:
            # Parse RSS feed
            feed = feedparser.parse(response.text)
            
            if not feed.entries:
                self._logger.warning(f"No entries found in BBC RSS feed: {feed_url}")
                return
            
            articles_processed = 0
            
            for entry in feed.entries:
                if articles_processed >= self.max_articles:
                    break
                
                try:
                    # Check if article is recent enough
                    pub_date = self._extract_publication_date(entry)
                    if pub_date and pub_date < self.cutoff_time:
                        continue
                    
                    # Extract basic article data from RSS
                    article_data = self._extract_basic_article_data(entry, category)
                    
                    if article_data and article_data.get('link'):
                        # Visit the actual BBC article URL to get full content
                        yield scrapy.Request(
                            url=article_data['link'],
                            callback=self.parse_bbc_article,
                            meta={
                                'article_data': article_data,
                                'category': category,
                                'feed_url': feed_url
                            },
                            errback=self.handle_article_error,
                            dont_filter=True
                        )
                        articles_processed += 1
                
                except Exception as e:
                    self._logger.error(f"Error processing BBC article from {feed_url}: {e}")
                    continue
            
            self._logger.info(f"Queued {articles_processed} recent BBC articles from {feed_url}")
            
        except Exception as e:
            self._logger.error(f"Error parsing BBC RSS feed {feed_url}: {e}")
    
    def parse_bbc_article(self, response):
        """Parse individual BBC article page to extract full content"""
        article_data = response.meta['article_data']
        category = response.meta['category']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Extracting full content from BBC article: {response.url}")
        
        try:
            # Extract full content from BBC article page
            full_content = self._extract_bbc_content(response)
            full_title = self._extract_bbc_title(response)
            full_description = self._extract_bbc_description(response)
            full_image_url = self._extract_bbc_image_url(response)
            full_author = self._extract_bbc_author(response)
            
            # Update article data with full content
            if full_content:
                article_data['content'] = full_content
            if full_title:
                article_data['title'] = full_title
            if full_description:
                article_data['description'] = full_description
            if full_image_url:
                article_data['image_url'] = full_image_url
            if full_author:
                article_data['author'] = full_author
            
            # Create NewsItem with full content
            item = NewsItem()
            for key, value in article_data.items():
                if hasattr(item, 'fields') and key in item.fields:
                    item[key] = value
            
            self.total_articles += 1
            content_length = len(full_content or '')
            self._logger.info(f"Successfully extracted BBC content: {content_length} chars from {response.url}")
            
            yield item
            
        except Exception as e:
            self._logger.error(f"Error extracting BBC content from {response.url}: {e}")
    
    def _extract_basic_article_data(self, entry, category):
        """Extract basic article data from BBC RSS entry"""
        try:
            # Extract title
            title = getattr(entry, 'title', '')
            if not title:
                return None
            
            # Extract link
            link = getattr(entry, 'link', '')
            if not link:
                return None
            
            # Extract description/summary
            description = ''
            if hasattr(entry, 'summary'):
                description = entry.summary
            elif hasattr(entry, 'description'):
                description = entry.description
            
            # Extract publication date
            pub_date = self._extract_publication_date(entry)
            if not pub_date:
                pub_date = datetime.now()
            
            # Extract image URL from media content
            image_url = ''
            if hasattr(entry, 'media_content') and entry.media_content:
                image_url = entry.media_content[0]['url']
            elif hasattr(entry, 'media_thumbnail') and entry.media_thumbnail:
                image_url = entry.media_thumbnail[0]['url']
            
            # Extract author
            author = ''
            if hasattr(entry, 'author'):
                author = entry.author
            elif hasattr(entry, 'dc_creator'):
                author = entry.dc_creator
            
            return {
                'title': title,
                'link': link,
                'description': description,
                'content': description,  # Will be replaced with full content
                'pub_date': pub_date,
                'image_url': image_url,
                'video_url': '',
                'source_name': 'BBC News',
                'source_domain': 'bbc.com',
                'source_country': 'GB',
                'source_language': 'en',
                'author': author,
                'creator': [author] if author else ['BBC News'],
                'category': [category],
                'tags': [category],
                'keywords': [],
                'country': ['United Kingdom'],
                'region': [],
                'city': [],
                'language': 'en',
                'crawl_type': 'live',
                'spider_name': self.name,
                'feed_url': feed_url
            }
            
        except Exception as e:
            self._logger.error(f"Error extracting basic BBC article data: {e}")
            return None
    
    def _extract_bbc_content(self, response):
        """Extract full content from BBC article page"""
        # BBC-specific content selectors
        selectors = [
            # Primary content selectors
            '[data-component="text-block"] p::text',
            '[data-component="text-block"] div::text',
            '.article-body p::text',
            '.story-body p::text',
            '.article-body div::text',
            '.story-body div::text',
            # Alternative selectors
            '[data-component="text-block"]::text',
            '.article-body::text',
            '.story-body::text',
            # Generic selectors as fallback
            'article p::text',
            'main p::text',
            '.content p::text'
        ]
        
        content_parts = []
        for selector in selectors:
            parts = response.css(selector).getall()
            if parts:
                # Clean and filter content
                cleaned_parts = []
                for part in parts:
                    part = part.strip()
                    # Skip short content, navigation, ads, etc.
                    if (len(part) > 50 and 
                        not part.startswith('©') and 
                        not part.startswith('Follow') and
                        not part.startswith('Share') and
                        not part.startswith('Sign up') and
                        not part.startswith('Get our') and
                        not 'cookie' in part.lower() and
                        not 'privacy' in part.lower() and
                        not 'terms' in part.lower() and
                        not 'newsletter' in part.lower() and
                        not 'subscribe' in part.lower()):
                        cleaned_parts.append(part)
                
                if cleaned_parts:
                    content_parts.extend(cleaned_parts)
                    # If we found substantial content, break
                    if len(' '.join(content_parts)) > 500:
                        break
        
        if content_parts:
            return ' '.join(content_parts)
        
        # Fallback: try to extract from any text-containing elements
        text_elements = response.css('[data-component="text-block"], .article-body, .story-body, p, div')
        content_parts = []
        for element in text_elements:
            text = element.css('::text').get()
            if text:
                text = text.strip()
                if len(text) > 100 and not text.startswith('©'):
                    content_parts.append(text)
                    if len(' '.join(content_parts)) > 1000:
                        break
        
        return ' '.join(content_parts) if content_parts else None
    
    def _extract_bbc_title(self, response):
        """Extract full article title from BBC page"""
        selectors = [
            'h1::text',
            '[data-testid="headline"]::text',
            '.headline::text',
            '.article-title::text',
            'title::text'
        ]
        
        for selector in selectors:
            title = response.css(selector).get()
            if title:
                title = title.strip()
                if len(title) > 10:
                    return title
        
        return None
    
    def _extract_bbc_description(self, response):
        """Extract full article description from BBC page"""
        selectors = [
            'meta[name="description"]::attr(content)',
            '.summary::text',
            '.description::text',
            '[data-testid="summary"]::text'
        ]
        
        for selector in selectors:
            desc = response.css(selector).get()
            if desc:
                return desc.strip()
        
        return None
    
    def _extract_bbc_image_url(self, response):
        """Extract full article image URL from BBC page"""
        selectors = [
            'meta[property="og:image"]::attr(content)',
            'meta[name="twitter:image"]::attr(content)',
            '.article-image img::attr(src)',
            '.story-image img::attr(src)',
            '.main-image img::attr(src)',
            'img[class*="hero"]::attr(src)',
            'img[class*="main"]::attr(src)'
        ]
        
        for selector in selectors:
            img_url = response.css(selector).get()
            if img_url:
                return urljoin(response.url, img_url)
        
        return None
    
    def _extract_bbc_author(self, response):
        """Extract full article author from BBC page"""
        selectors = [
            '.author::text',
            '.byline::text',
            '[data-testid="author"]::text',
            '.article-author::text',
            '.story-author::text',
            'meta[name="author"]::attr(content)',
            'meta[property="article:author"]::attr(content)'
        ]
        
        for selector in selectors:
            author = response.css(selector).get()
            if author:
                author = author.strip()
                if len(author) > 2:
                    return author
        
        return None
    
    def _extract_publication_date(self, entry):
        """Extract publication date from RSS entry"""
        if hasattr(entry, 'published_parsed') and entry.published_parsed:
            return datetime(*entry.published_parsed[:6])
        elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
            return datetime(*entry.updated_parsed[:6])
        elif hasattr(entry, 'published'):
            try:
                return datetime.fromisoformat(entry.published.replace('Z', '+00:00'))
            except:
                pass
        return None
    
    def _extract_category_from_url(self, url):
        """Extract category from BBC RSS URL"""
        if 'world' in url:
            return 'World'
        elif 'uk' in url:
            return 'UK'
        elif 'business' in url:
            return 'Business'
        elif 'technology' in url:
            return 'Technology'
        elif 'entertainment' in url:
            return 'Entertainment'
        elif 'science' in url:
            return 'Science'
        elif 'health' in url:
            return 'Health'
        elif 'politics' in url:
            return 'Politics'
        elif 'education' in url:
            return 'Education'
        else:
            return 'News'
    
    def handle_error(self, failure):
        """Handle RSS feed request errors"""
        self._logger.error(f"BBC RSS feed request failed: {failure.value}")
    
    def handle_article_error(self, failure):
        """Handle article page request errors"""
        self._logger.error(f"BBC article page request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider is closed"""
        self._logger.info(f"BBC spider finished. Total articles with full content: {self.total_articles}")
        self._logger.info(f"Spider closed with reason: {reason}") 