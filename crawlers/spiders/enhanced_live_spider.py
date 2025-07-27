"""
Enhanced Live Spider for continuous crawling of latest news with full content extraction
This spider visits actual article URLs to extract complete content, not just RSS summaries
"""
import scrapy
import feedparser
from datetime import datetime, timedelta
from urllib.parse import urlparse, urljoin
import logging
import re
from ..items import NewsItem
from data.countries import get_country_name
from data.news_sources import get_sources_for_country


class EnhancedLiveSpider(scrapy.Spider):
    name = 'enhanced_live'
    
    def __init__(self, countries='all', max_articles_per_source=50, hours_back=24, *args, **kwargs):
        super(EnhancedLiveSpider, self).__init__(*args, **kwargs)
        
        self.countries = countries.split(',') if countries != 'all' else ['US', 'GB', 'CA']
        self.max_articles_per_source = int(max_articles_per_source)
        self.hours_back = int(hours_back)  # Only get articles from last N hours
        self.articles_found = 0
        self.total_articles = 0
        
        # Calculate cutoff time for recent articles
        self.cutoff_time = datetime.now() - timedelta(hours=self.hours_back)
        
        # Setup logging
        self._logger = logging.getLogger(__name__)
        
        # Generate start URLs for all countries and sources
        self.start_urls = self._generate_start_urls()
        
        # Custom settings for better content extraction
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
        
        self.logger.info(f"Generated {len(urls)} RSS feeds for enhanced live crawling")
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
        """Parse RSS feed and extract recent articles, then visit each article URL"""
        country_code = response.meta['country_code']
        source_name = response.meta['source_name']
        source_domain = response.meta['source_domain']
        language = response.meta['language']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Parsing enhanced RSS feed: {feed_url} for {source_name} ({country_code})")
        
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
                        # Skip old articles
                        continue
                    
                    # Extract basic article data from RSS
                    article_data = self._extract_basic_article_data(entry, country_code, source_name, source_domain, language, feed_url)
                    
                    if article_data and article_data.get('link'):
                        # Visit the actual article URL to get full content
                        yield scrapy.Request(
                            url=article_data['link'],
                            callback=self.parse_article_page,
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
            
            self._logger.info(f"Queued {recent_articles} recent articles from {source_name} ({country_code}) for full content extraction")
            
        except Exception as e:
            self._logger.error(f"Error parsing RSS feed {feed_url}: {e}")
    
    def parse_article_page(self, response):
        """Parse individual article page to extract full content"""
        article_data = response.meta['article_data']
        country_code = response.meta['country_code']
        source_name = response.meta['source_name']
        source_domain = response.meta['source_domain']
        language = response.meta['language']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Extracting full content from: {response.url}")
        
        try:
            # Extract full content from the article page
            full_content = self._extract_full_content(response)
            full_title = self._extract_full_title(response)
            full_description = self._extract_full_description(response)
            full_image_url = self._extract_full_image_url(response)
            full_author = self._extract_full_author(response)
            
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
            self._logger.info(f"Successfully extracted full content from {response.url} ({len(full_content or '')} chars)")
            
            yield item
            
        except Exception as e:
            self._logger.error(f"Error extracting full content from {response.url}: {e}")
    
    def _extract_basic_article_data(self, entry, country_code, source_name, source_domain, language, feed_url):
        """Extract basic article data from RSS entry"""
        try:
            # Extract title
            title = getattr(entry, 'title', '')
            if not title:
                return None
            
            # Extract link
            link = getattr(entry, 'link', '')
            if not link:
                return None
            
            # Extract basic description/summary
            description = ''
            if hasattr(entry, 'summary'):
                description = entry.summary
            elif hasattr(entry, 'description'):
                description = entry.description
            
            # Extract basic content (will be replaced with full content)
            content = description
            if hasattr(entry, 'content') and entry.content:
                content = entry.content[0].value if isinstance(entry.content, list) else entry.content
            
            # Extract publication date
            pub_date = self._extract_publication_date(entry)
            if not pub_date:
                pub_date = datetime.now()
            
            # Extract basic image URL
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
            
            # Extract categories/tags
            categories = []
            if hasattr(entry, 'tags') and entry.tags:
                categories = [tag.term for tag in entry.tags]
            elif hasattr(entry, 'category'):
                categories = [entry.category]
            
            return {
                'title': title,
                'link': link,
                'description': description,
                'content': content,
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
    
    def _extract_full_content(self, response):
        """Extract full article content from the page"""
        # BBC-specific selectors
        if 'bbc.com' in response.url or 'bbc.co.uk' in response.url:
            selectors = [
                '[data-component="text-block"] p::text',
                '.article-body p::text',
                '.story-body p::text',
                '[data-component="text-block"] div::text',
                '.article-body div::text',
                '.story-body div::text'
            ]
        # MSN-specific selectors
        elif 'msn.com' in response.url:
            selectors = [
                '[data-testid="content"] p::text',
                '.article-content p::text',
                '.content p::text',
                '.article-body p::text',
                '.story-body p::text'
            ]
        # Generic selectors for other sites
        else:
            selectors = [
                'article p::text',
                '.article-content p::text',
                '.content p::text',
                '.article-body p::text',
                '.story-body p::text',
                '.post-content p::text',
                '.entry-content p::text',
                'main p::text',
                '.main-content p::text',
                '[class*="content"] p::text',
                '[class*="body"] p::text',
                'p::text'  # Fallback to all paragraphs
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
                        not 'terms' in part.lower()):
                        cleaned_parts.append(part)
                
                if cleaned_parts:
                    content_parts.extend(cleaned_parts)
                    # If we found substantial content, break
                    if len(' '.join(content_parts)) > 500:
                        break
        
        if content_parts:
            return ' '.join(content_parts)
        
        # Fallback: try to extract from any text-containing elements
        text_elements = response.css('p, div, span, article, section')
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
    
    def _extract_full_title(self, response):
        """Extract full article title from the page"""
        selectors = [
            'h1::text',
            '.headline::text',
            '[data-testid="headline"]::text',
            '.article-title::text',
            '.story-title::text',
            'title::text'
        ]
        
        for selector in selectors:
            title = response.css(selector).get()
            if title:
                title = title.strip()
                if len(title) > 10:
                    return title
        
        return None
    
    def _extract_full_description(self, response):
        """Extract full article description from the page"""
        selectors = [
            'meta[name="description"]::attr(content)',
            '.summary::text',
            '.description::text',
            '[data-testid="summary"]::text',
            '.article-summary::text',
            '.story-summary::text'
        ]
        
        for selector in selectors:
            desc = response.css(selector).get()
            if desc:
                return desc.strip()
        
        return None
    
    def _extract_full_image_url(self, response):
        """Extract full article image URL from the page"""
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
    
    def _extract_full_author(self, response):
        """Extract full article author from the page"""
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
    
    def handle_error(self, failure):
        """Handle RSS feed request errors"""
        self._logger.error(f"RSS feed request failed: {failure.value}")
    
    def handle_article_error(self, failure):
        """Handle article page request errors"""
        self._logger.error(f"Article page request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider is closed"""
        self._logger.info(f"Enhanced live spider finished. Total articles with full content: {self.total_articles}")
        self._logger.info(f"Spider closed with reason: {reason}") 