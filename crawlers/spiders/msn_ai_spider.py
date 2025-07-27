"""
MSN AI-Enhanced Spider with Puppeteer
Specialized spider for MSN with dynamic content extraction and AI processing
"""
import scrapy
import asyncio
import json
import logging
from datetime import datetime, timedelta
from urllib.parse import urlparse, urljoin
import requests
from ..items import NewsItem
from data.countries import get_country_name


class MSNWithPuppeteerSpider(scrapy.Spider):
    name = 'msn_ai'
    allowed_domains = ['msn.com', 'msnbc.com']
    
    def __init__(self, max_articles=50, hours_back=24, use_puppeteer=True, use_ai=True, *args, **kwargs):
        super(MSNWithPuppeteerSpider, self).__init__(*args, **kwargs)
        
        self.max_articles = int(max_articles)
        self.hours_back = int(hours_back)
        self.use_puppeteer = use_puppeteer
        self.use_ai = use_ai
        self.total_articles = 0
        
        # Calculate cutoff time for recent articles
        self.cutoff_time = datetime.now() - timedelta(hours=self.hours_back)
        
        # Setup logging
        self._logger = logging.getLogger(__name__)
        
        # MSN RSS feeds and categories
        self.msn_feeds = [
            'https://www.msn.com/en-us/news/rss',
            'https://www.msn.com/en-us/news/politics/rss',
            'https://www.msn.com/en-us/news/technology/rss',
            'https://www.msn.com/en-us/news/business/rss',
            'https://www.msn.com/en-us/news/world/rss',
            'https://www.msn.com/en-us/news/entertainment/rss',
            'https://www.msn.com/en-us/news/sports/rss',
            'https://www.msn.com/en-us/news/health/rss'
        ]
        
        # AI service configuration
        self.ai_service_url = "http://localhost:8000/ai/process-content"
        
        # Custom settings for MSN
        self.custom_settings = {
            'DOWNLOAD_DELAY': 2,
            'CONCURRENT_REQUESTS_PER_DOMAIN': 2,
            'ROBOTSTXT_OBEY': True,
            'COOKIES_ENABLED': True,
            'DOWNLOAD_TIMEOUT': 30,
            'RETRY_TIMES': 3,
            'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403],
            'AUTOTHROTTLE_ENABLED': True,
            'AUTOTHROTTLE_START_DELAY': 1,
            'AUTOTHROTTLE_MAX_DELAY': 10,
            'AUTOTHROTTLE_TARGET_CONCURRENCY': 2.0,
            'DOWNLOADER_MIDDLEWARES': {
                'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
                'crawlers.middlewares.RotateUserAgentMiddleware': 400,
            },
            'ITEM_PIPELINES': {
                'crawlers.pipelines.ValidationPipeline': 300,
                'crawlers.pipelines.DuplicatesPipeline': 400,
                'crawlers.pipelines.AIProcessingPipeline': 500,
            }
        }
    
    def start_requests(self):
        """Start requests for MSN RSS feeds"""
        for feed_url in self.msn_feeds:
            category = self._extract_category_from_url(feed_url)
            yield scrapy.Request(
                url=feed_url,
                callback=self.parse_msn_rss,
                meta={
                    'category': category,
                    'feed_url': feed_url
                },
                errback=self.handle_error,
                dont_filter=True
            )
    
    def parse_msn_rss(self, response):
        """Parse MSN RSS feed and extract recent articles"""
        category = response.meta['category']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Parsing MSN RSS feed: {feed_url} for category: {category}")
        
        try:
            # Parse RSS feed
            import feedparser
            feed = feedparser.parse(response.text)
            
            if not feed.entries:
                self._logger.warning(f"No entries found in MSN RSS feed: {feed_url}")
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
                    article_data = self._extract_basic_msn_data(entry, category, feed_url)
                    
                    if article_data and article_data.get('link'):
                        # Use Puppeteer for dynamic content extraction
                        if self.use_puppeteer:
                            yield scrapy.Request(
                                url=article_data['link'],
                                callback=self.parse_msn_with_puppeteer,
                                meta={
                                    'article_data': article_data,
                                    'category': category,
                                    'feed_url': feed_url
                                },
                                errback=self.handle_article_error,
                                dont_filter=True
                            )
                        else:
                            # Fallback to traditional extraction
                            yield scrapy.Request(
                                url=article_data['link'],
                                callback=self.parse_msn_traditional,
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
                    self._logger.error(f"Error processing MSN article from {feed_url}: {e}")
                    continue
            
            self._logger.info(f"Queued {articles_processed} recent MSN articles from {category}")
            
        except Exception as e:
            self._logger.error(f"Error parsing MSN RSS feed {feed_url}: {e}")
    
    def parse_msn_with_puppeteer(self, response):
        """Parse MSN article using Puppeteer for dynamic content"""
        article_data = response.meta['article_data']
        category = response.meta['category']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Extracting MSN content with Puppeteer: {response.url}")
        
        try:
            # Use Puppeteer to extract dynamic content
            puppeteer_data = self._extract_with_puppeteer(response.url)
            
            if puppeteer_data:
                # Update article data with Puppeteer-extracted content
                article_data.update(puppeteer_data)
                
                # Use AI for content processing if enabled
                if self.use_ai:
                    ai_processed_data = self._ai_process_content(
                        article_data.get('content', ''),
                        article_data.get('title', '')
                    )
                    article_data.update(ai_processed_data)
                
                # Create NewsItem
                item = NewsItem()
                for key, value in article_data.items():
                    if hasattr(item, 'fields') and key in item.fields:
                        item[key] = value
                
                self.total_articles += 1
                content_length = len(article_data.get('content', ''))
                self._logger.info(f"Successfully extracted MSN content: {content_length} chars from {response.url}")
                
                yield item
            else:
                self._logger.warning(f"Puppeteer extraction failed, falling back to traditional method")
                yield scrapy.Request(
                    url=response.url,
                    callback=self.parse_msn_traditional,
                    meta={
                        'article_data': article_data,
                        'category': category,
                        'feed_url': feed_url
                    },
                    dont_filter=True
                )
        
        except Exception as e:
            self._logger.error(f"Error in Puppeteer extraction from {response.url}: {e}")
            # Fallback to traditional extraction
            yield scrapy.Request(
                url=response.url,
                callback=self.parse_msn_traditional,
                meta={
                    'article_data': article_data,
                    'category': category,
                    'feed_url': feed_url
                },
                dont_filter=True
            )
    
    def parse_msn_traditional(self, response):
        """Parse MSN article using traditional Scrapy methods"""
        article_data = response.meta['article_data']
        category = response.meta['category']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Extracting MSN content traditionally: {response.url}")
        
        try:
            # Extract content using traditional methods
            full_content = self._extract_msn_content_traditional(response)
            full_title = self._extract_msn_title_traditional(response)
            full_description = self._extract_msn_description_traditional(response)
            full_image_url = self._extract_msn_image_traditional(response)
            full_author = self._extract_msn_author_traditional(response)
            
            # Update article data
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
            
            # Use AI for content processing if enabled
            if self.use_ai and full_content:
                ai_processed_data = self._ai_process_content(full_content, full_title)
                article_data.update(ai_processed_data)
            
            # Create NewsItem
            item = NewsItem()
            for key, value in article_data.items():
                if hasattr(item, 'fields') and key in item.fields:
                    item[key] = value
            
            self.total_articles += 1
            content_length = len(full_content or '')
            self._logger.info(f"Successfully extracted MSN content: {content_length} chars from {response.url}")
            
            yield item
        
        except Exception as e:
            self._logger.error(f"Error in traditional MSN extraction from {response.url}: {e}")
    
    def _extract_with_puppeteer(self, url):
        """Extract content using Puppeteer"""
        try:
            # Call Puppeteer service
            puppeteer_data = {
                'url': url,
                'wait_for': '.article-content, .content, [data-testid="content"]',
                'extract_selectors': {
                    'title': 'h1, .headline, [data-testid="headline"]',
                    'content': '.article-content p, .content p, [data-testid="content"] p',
                    'author': '.author, .byline, [data-testid="author"]',
                    'image': 'meta[property="og:image"], .article-image img',
                    'description': 'meta[name="description"], .summary'
                }
            }
            
            # This would call a Puppeteer service
            # For now, we'll simulate the response
            response = requests.post(
                'http://localhost:3000/puppeteer/extract',
                json=puppeteer_data,
                timeout=30
            )
            
            if response.status_code == 200:
                return response.json()
            else:
                return None
                
        except Exception as e:
            self._logger.error(f"Puppeteer extraction error: {e}")
            return None
    
    def _ai_process_content(self, content, title):
        """Process content using AI"""
        if not content or not self.use_ai:
            return {}
        
        try:
            ai_data = {
                'content': content,
                'title': title,
                'url': '',  # Will be filled by the calling method
                'source': 'MSN'
            }
            
            response = requests.post(
                self.ai_service_url,
                json=ai_data,
                timeout=30
            )
            
            if response.status_code == 200:
                return response.json()
            else:
                return {}
                
        except Exception as e:
            self._logger.error(f"AI processing error: {e}")
            return {}
    
    def _extract_msn_content_traditional(self, response):
        """Extract MSN content using traditional methods"""
        selectors = [
            '[data-testid="content"] p::text',
            '.article-content p::text',
            '.content p::text',
            '.article-body p::text',
            '.story-body p::text',
            'article p::text',
            'p::text'
        ]
        
        content_parts = []
        for selector in selectors:
            parts = response.css(selector).getall()
            if parts:
                cleaned_parts = []
                for part in parts:
                    part = part.strip()
                    if (len(part) > 50 and 
                        not part.startswith('©') and 
                        not part.startswith('Follow') and
                        not part.startswith('Share')):
                        cleaned_parts.append(part)
                
                if cleaned_parts:
                    content_parts.extend(cleaned_parts)
                    if len(' '.join(content_parts)) > 500:
                        break
        
        return ' '.join(content_parts) if content_parts else None
    
    def _extract_msn_title_traditional(self, response):
        """Extract MSN title using traditional methods"""
        selectors = [
            'h1::text',
            '.headline::text',
            '[data-testid="headline"]::text',
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
    
    def _extract_msn_description_traditional(self, response):
        """Extract MSN description using traditional methods"""
        selectors = [
            'meta[name="description"]::attr(content)',
            '.summary::text',
            '.description::text'
        ]
        
        for selector in selectors:
            desc = response.css(selector).get()
            if desc:
                return desc.strip()
        
        return None
    
    def _extract_msn_image_traditional(self, response):
        """Extract MSN image using traditional methods"""
        selectors = [
            'meta[property="og:image"]::attr(content)',
            'meta[name="twitter:image"]::attr(content)',
            '.article-image img::attr(src)',
            '.story-image img::attr(src)'
        ]
        
        for selector in selectors:
            img_url = response.css(selector).get()
            if img_url:
                return urljoin(response.url, img_url)
        
        return None
    
    def _extract_msn_author_traditional(self, response):
        """Extract MSN author using traditional methods"""
        selectors = [
            '.author::text',
            '.byline::text',
            '[data-testid="author"]::text',
            'meta[name="author"]::attr(content)'
        ]
        
        for selector in selectors:
            author = response.css(selector).get()
            if author:
                author = author.strip()
                if len(author) > 2:
                    return author
        
        return None
    
    def _extract_basic_msn_data(self, entry, category, feed_url):
        """Extract basic MSN article data from RSS entry"""
        try:
            title = getattr(entry, 'title', '')
            if not title:
                return None
            
            link = getattr(entry, 'link', '')
            if not link:
                return None
            
            description = ''
            if hasattr(entry, 'summary'):
                description = entry.summary
            elif hasattr(entry, 'description'):
                description = entry.description
            
            pub_date = self._extract_publication_date(entry)
            if not pub_date:
                pub_date = datetime.now()
            
            image_url = ''
            if hasattr(entry, 'media_content') and entry.media_content:
                image_url = entry.media_content[0]['url']
            elif hasattr(entry, 'media_thumbnail') and entry.media_thumbnail:
                image_url = entry.media_thumbnail[0]['url']
            
            author = ''
            if hasattr(entry, 'author'):
                author = entry.author
            elif hasattr(entry, 'dc_creator'):
                author = entry.dc_creator
            
            return {
                'title': title,
                'link': link,
                'description': description,
                'content': description,
                'pub_date': pub_date,
                'image_url': image_url,
                'video_url': '',
                'source_name': 'MSN',
                'source_domain': 'msn.com',
                'source_country': 'US',
                'source_language': 'en',
                'author': author,
                'creator': [author] if author else ['MSN'],
                'category': [category],
                'tags': [category],
                'keywords': [],
                'country': ['United States'],
                'region': [],
                'city': [],
                'language': 'en',
                'crawl_type': 'live',
                'spider_name': self.name,
                'feed_url': feed_url
            }
            
        except Exception as e:
            self._logger.error(f"Error extracting basic MSN article data: {e}")
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
        """Extract category from MSN RSS URL"""
        if 'politics' in url:
            return 'Politics'
        elif 'technology' in url:
            return 'Technology'
        elif 'business' in url:
            return 'Business'
        elif 'world' in url:
            return 'World'
        elif 'entertainment' in url:
            return 'Entertainment'
        elif 'sports' in url:
            return 'Sports'
        elif 'health' in url:
            return 'Health'
        else:
            return 'News'
    
    def handle_error(self, failure):
        """Handle RSS feed request errors"""
        self._logger.error(f"MSN RSS feed request failed: {failure.value}")
    
    def handle_article_error(self, failure):
        """Handle article page request errors"""
        self._logger.error(f"MSN article page request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider is closed"""
        self._logger.info(f"MSN AI spider finished. Total articles processed: {self.total_articles}")
        self._logger.info(f"Spider closed with reason: {reason}") 