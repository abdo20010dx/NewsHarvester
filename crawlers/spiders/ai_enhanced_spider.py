"""
AI-Enhanced Spider for intelligent web scraping with AI capabilities
This spider uses AI for content extraction, processing, and adaptive crawling
"""
import scrapy
import feedparser
from datetime import datetime, timedelta
from urllib.parse import urlparse, urljoin
import logging
import re
import json
import requests
from ..items import NewsItem
from data.countries import get_country_name
from data.news_sources import get_sources_for_country


class AIEnhancedSpider(scrapy.Spider):
    name = 'ai_enhanced'
    
    def __init__(self, countries='all', max_articles_per_source=50, hours_back=24, 
                 use_ai_extraction=True, use_ai_processing=True, *args, **kwargs):
        super(AIEnhancedSpider, self).__init__(*args, **kwargs)
        
        self.countries = countries.split(',') if countries != 'all' else ['US', 'GB', 'CA']
        self.max_articles_per_source = int(max_articles_per_source)
        self.hours_back = int(hours_back)
        self.total_articles = 0
        
        # AI configuration
        self.use_ai_extraction = use_ai_extraction
        self.use_ai_processing = use_ai_processing
        
        # AI service endpoints (you can replace with your preferred AI service)
        self.ai_extraction_url = "http://localhost:8000/ai/extract-content"
        self.ai_processing_url = "http://localhost:8000/ai/process-content"
        
        # Calculate cutoff time for recent articles
        self.cutoff_time = datetime.now() - timedelta(hours=self.hours_back)
        
        # Setup logging
        self._logger = logging.getLogger(__name__)
        
        # Generate start URLs for all countries and sources
        self.start_urls = self._generate_start_urls()
        
        # Custom settings for AI-enhanced crawling
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
        
    def _generate_start_urls(self):
        """Generate start URLs for all configured countries and sources"""
        urls = []
        
        for country_code in self.countries:
            country_sources = get_sources_for_country(country_code)
            if not country_sources:
                self.logger.warning(f"No sources configured for country: {country_code}")
                continue
                
            for source in country_sources.get('sources', []):
                for rss_feed in source.get('rss_feeds', []):
                    urls.append({
                        'url': rss_feed,
                        'country_code': country_code,
                        'source_name': source['name'],
                        'source_domain': source['domain'],
                        'language': country_sources.get('language', 'en')
                    })
        
        self.logger.info(f"Generated {len(urls)} RSS feeds for AI-enhanced crawling")
        return urls
    
    def start_requests(self):
        """Start requests for all RSS feeds"""
        for url_data in self.start_urls:
            yield scrapy.Request(
                url=url_data['url'],
                callback=self.parse_rss_feed,
                meta={
                    'country_code': url_data['country_code'],
                    'source_name': url_data['source_name'],
                    'source_domain': url_data['source_domain'],
                    'language': url_data['language'],
                    'feed_url': url_data['url']
                },
                errback=self.handle_error,
                dont_filter=True
            )
    
    def parse_rss_feed(self, response):
        """Parse RSS feed and extract recent articles with AI enhancement"""
        country_code = response.meta['country_code']
        source_name = response.meta['source_name']
        source_domain = response.meta['source_domain']
        language = response.meta['language']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Parsing AI-enhanced RSS feed: {feed_url} for {source_name} ({country_code})")
        
        try:
            # Parse RSS feed
            feed = feedparser.parse(response.text)
            
            if not feed.entries:
                self._logger.warning(f"No entries found in RSS feed: {feed_url}")
                return
            
            articles_processed = 0
            recent_articles = 0
            
            for entry in feed.entries:
                if articles_processed >= self.max_articles_per_source:
                    break
                
                try:
                    # Check if article is recent enough
                    pub_date = self._extract_publication_date(entry)
                    if pub_date and pub_date < self.cutoff_time:
                        continue
                    
                    # Extract basic article data from RSS
                    article_data = self._extract_basic_article_data(entry, country_code, source_name, source_domain, language, feed_url)
                    
                    if article_data and article_data.get('link'):
                        # Visit the actual article URL with AI enhancement
                        yield scrapy.Request(
                            url=article_data['link'],
                            callback=self.parse_ai_enhanced_article,
                            meta={
                                'article_data': article_data,
                                'country_code': country_code,
                                'source_name': source_name,
                                'source_domain': source_domain,
                                'language': language,
                                'feed_url': feed_url
                            },
                            errback=self.handle_article_error,
                            dont_filter=True
                        )
                        articles_processed += 1
                        recent_articles += 1
                
                except Exception as e:
                    self._logger.error(f"Error processing article from {feed_url}: {e}")
                    continue
            
            self._logger.info(f"Queued {recent_articles} recent articles from {source_name} ({country_code}) for AI-enhanced extraction")
            
        except Exception as e:
            self._logger.error(f"Error parsing RSS feed {feed_url}: {e}")
    
    def parse_ai_enhanced_article(self, response):
        """Parse individual article page with AI enhancement"""
        article_data = response.meta['article_data']
        country_code = response.meta['country_code']
        source_name = response.meta['source_name']
        source_domain = response.meta['source_domain']
        language = response.meta['language']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"AI-enhanced extraction from: {response.url}")
        
        try:
            # Use AI for content extraction if enabled
            if self.use_ai_extraction:
                full_content = self._ai_extract_content(response)
                full_title = self._ai_extract_title(response)
                full_description = self._ai_extract_description(response)
                full_image_url = self._ai_extract_image_url(response)
                full_author = self._ai_extract_author(response)
            else:
                # Fallback to traditional extraction
                full_content = self._traditional_extract_content(response)
                full_title = self._traditional_extract_title(response)
                full_description = self._traditional_extract_description(response)
                full_image_url = self._traditional_extract_image_url(response)
                full_author = self._traditional_extract_author(response)
            
            # Update article data with extracted content
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
            if self.use_ai_processing and full_content:
                ai_processed_data = self._ai_process_content(full_content, full_title)
                article_data.update(ai_processed_data)
            
            # Create NewsItem with AI-enhanced data
            item = NewsItem()
            for key, value in article_data.items():
                if hasattr(item, 'fields') and key in item.fields:
                    item[key] = value
            
            self.total_articles += 1
            content_length = len(full_content or '')
            self._logger.info(f"AI-enhanced extraction successful: {content_length} chars from {response.url}")
            
            yield item
            
        except Exception as e:
            self._logger.error(f"Error in AI-enhanced extraction from {response.url}: {e}")
    
    def _ai_extract_content(self, response):
        """Use AI to extract content from the page"""
        try:
            # Prepare data for AI service
            ai_data = {
                'url': response.url,
                'html': response.text,
                'domain': urlparse(response.url).netloc,
                'task': 'extract_content'
            }
            
            # Call AI service
            ai_response = requests.post(
                self.ai_extraction_url,
                json=ai_data,
                timeout=30
            )
            
            if ai_response.status_code == 200:
                result = ai_response.json()
                return result.get('content', '')
            else:
                self._logger.warning(f"AI extraction failed, falling back to traditional method")
                return self._traditional_extract_content(response)
                
        except Exception as e:
            self._logger.error(f"AI extraction error: {e}")
            return self._traditional_extract_content(response)
    
    def _ai_extract_title(self, response):
        """Use AI to extract title from the page"""
        try:
            ai_data = {
                'url': response.url,
                'html': response.text,
                'domain': urlparse(response.url).netloc,
                'task': 'extract_title'
            }
            
            ai_response = requests.post(
                self.ai_extraction_url,
                json=ai_data,
                timeout=30
            )
            
            if ai_response.status_code == 200:
                result = ai_response.json()
                return result.get('title', '')
            else:
                return self._traditional_extract_title(response)
                
        except Exception as e:
            self._logger.error(f"AI title extraction error: {e}")
            return self._traditional_extract_title(response)
    
    def _ai_extract_description(self, response):
        """Use AI to extract description from the page"""
        try:
            ai_data = {
                'url': response.url,
                'html': response.text,
                'domain': urlparse(response.url).netloc,
                'task': 'extract_description'
            }
            
            ai_response = requests.post(
                self.ai_extraction_url,
                json=ai_data,
                timeout=30
            )
            
            if ai_response.status_code == 200:
                result = ai_response.json()
                return result.get('description', '')
            else:
                return self._traditional_extract_description(response)
                
        except Exception as e:
            self._logger.error(f"AI description extraction error: {e}")
            return self._traditional_extract_description(response)
    
    def _ai_extract_image_url(self, response):
        """Use AI to extract image URL from the page"""
        try:
            ai_data = {
                'url': response.url,
                'html': response.text,
                'domain': urlparse(response.url).netloc,
                'task': 'extract_image'
            }
            
            ai_response = requests.post(
                self.ai_extraction_url,
                json=ai_data,
                timeout=30
            )
            
            if ai_response.status_code == 200:
                result = ai_response.json()
                return result.get('image_url', '')
            else:
                return self._traditional_extract_image_url(response)
                
        except Exception as e:
            self._logger.error(f"AI image extraction error: {e}")
            return self._traditional_extract_image_url(response)
    
    def _ai_extract_author(self, response):
        """Use AI to extract author from the page"""
        try:
            ai_data = {
                'url': response.url,
                'html': response.text,
                'domain': urlparse(response.url).netloc,
                'task': 'extract_author'
            }
            
            ai_response = requests.post(
                self.ai_extraction_url,
                json=ai_data,
                timeout=30
            )
            
            if ai_response.status_code == 200:
                result = ai_response.json()
                return result.get('author', '')
            else:
                return self._traditional_extract_author(response)
                
        except Exception as e:
            self._logger.error(f"AI author extraction error: {e}")
            return self._traditional_extract_author(response)
    
    def _ai_process_content(self, content, title):
        """Use AI to process and enrich content"""
        try:
            ai_data = {
                'content': content,
                'title': title,
                'task': 'process_content'
            }
            
            ai_response = requests.post(
                self.ai_processing_url,
                json=ai_data,
                timeout=30
            )
            
            if ai_response.status_code == 200:
                result = ai_response.json()
                return {
                    'sentiment': result.get('sentiment', ''),
                    'sentiment_score': result.get('sentiment_score', 0.0),
                    'entities': result.get('entities', []),
                    'keywords': result.get('keywords', []),
                    'topics': result.get('topics', []),
                    'summary': result.get('summary', ''),
                    'readability_score': result.get('readability_score', 0.0),
                    'word_count': result.get('word_count', 0)
                }
            else:
                return {}
                
        except Exception as e:
            self._logger.error(f"AI content processing error: {e}")
            return {}
    
    def _traditional_extract_content(self, response):
        """Traditional content extraction as fallback"""
        # Site-specific content selectors
        domain = urlparse(response.url).netloc
        
        if 'bbc.com' in domain or 'bbc.co.uk' in domain:
            selectors = [
                '[data-component="text-block"] p::text',
                '[data-component="text-block"] div::text',
                '.article-body p::text',
                '.story-body p::text'
            ]
        elif 'msn.com' in domain:
            selectors = [
                '[data-testid="content"] p::text',
                '.article-content p::text',
                '.content p::text'
            ]
        else:
            selectors = [
                'article p::text',
                '.article-content p::text',
                '.content p::text',
                '.article-body p::text',
                '.story-body p::text',
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
    
    def _traditional_extract_title(self, response):
        """Traditional title extraction as fallback"""
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
    
    def _traditional_extract_description(self, response):
        """Traditional description extraction as fallback"""
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
    
    def _traditional_extract_image_url(self, response):
        """Traditional image URL extraction as fallback"""
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
    
    def _traditional_extract_author(self, response):
        """Traditional author extraction as fallback"""
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
    
    def _extract_basic_article_data(self, entry, country_code, source_name, source_domain, language, feed_url):
        """Extract basic article data from RSS entry"""
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
            
            categories = []
            if hasattr(entry, 'tags') and entry.tags:
                categories = [tag.term for tag in entry.tags]
            elif hasattr(entry, 'category'):
                categories = [entry.category]
            
            return {
                'title': title,
                'link': link,
                'description': description,
                'content': description,
                'pub_date': pub_date,
                'image_url': image_url,
                'video_url': '',
                'source_name': source_name,
                'source_domain': source_domain,
                'source_country': country_code,
                'source_language': language,
                'author': author,
                'creator': [author] if author else [],
                'category': categories,
                'tags': categories,
                'keywords': [],
                'country': [get_country_name(country_code)],
                'region': [],
                'city': [],
                'language': language,
                'crawl_type': 'live',
                'spider_name': self.name,
                'feed_url': feed_url
            }
            
        except Exception as e:
            self._logger.error(f"Error extracting basic article data: {e}")
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
    
    def handle_error(self, failure):
        """Handle RSS feed request errors"""
        self._logger.error(f"RSS feed request failed: {failure.value}")
    
    def handle_article_error(self, failure):
        """Handle article page request errors"""
        self._logger.error(f"Article page request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider is closed"""
        self._logger.info(f"AI-enhanced spider finished. Total articles processed: {self.total_articles}")
        self._logger.info(f"Spider closed with reason: {reason}") 