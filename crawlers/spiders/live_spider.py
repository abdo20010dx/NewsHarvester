"""
Live Spider for continuous crawling of latest news every 15 minutes
This spider focuses on getting the most recent articles
"""
import scrapy
import feedparser
from datetime import datetime, timedelta
from urllib.parse import urlparse, urljoin
import logging
from ..items import NewsItem
from data.countries import get_country_name
from data.news_sources import get_sources_for_country


class LiveSpider(scrapy.Spider):
    name = 'live'
    
    def __init__(self, countries='all', max_articles_per_source=50, hours_back=24, *args, **kwargs):
        super(LiveSpider, self).__init__(*args, **kwargs)
        
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
        
        self.logger.info(f"Generated {len(urls)} RSS feeds for live crawling")
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
        """Parse RSS feed and extract recent articles"""
        country_code = response.meta['country_code']
        source_name = response.meta['source_name']
        source_domain = response.meta['source_domain']
        language = response.meta['language']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Parsing live RSS feed: {feed_url} for {source_name} ({country_code})")
        
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
                    
                    # Extract article data
                    article = self._extract_article_data(entry, country_code, source_name, source_domain, language, feed_url)
                    
                    if article:
                        yield article
                        articles_processed += 1
                        recent_articles += 1
                        self.total_articles += 1
                        
                        if self.total_articles % 50 == 0:
                            self._logger.info(f"Processed {self.total_articles} recent articles so far...")
                
                except Exception as e:
                    self._logger.error(f"Error processing article from {feed_url}: {e}")
                    continue
            
            self._logger.info(f"Processed {recent_articles} recent articles from {source_name} ({country_code})")
            
        except Exception as e:
            self._logger.error(f"Error parsing RSS feed {feed_url}: {e}")
    
    def _extract_publication_date(self, entry):
        """Extract publication date from RSS entry"""
        try:
            if hasattr(entry, 'published_parsed') and entry.published_parsed:
                return datetime(*entry.published_parsed[:6])
            elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                return datetime(*entry.updated_parsed[:6])
            elif hasattr(entry, 'dc_date') and entry.dc_date:
                # Try to parse DC date format
                try:
                    return datetime.strptime(entry.dc_date, '%Y-%m-%dT%H:%M:%SZ')
                except:
                    pass
            return None
        except:
            return None
    
    def _extract_article_data(self, entry, country_code, source_name, source_domain, language, feed_url):
        """Extract article data from RSS entry and visit article URL for full content"""
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
            
            # Extract basic content (will be enhanced by visiting the article URL)
            content = description
            if hasattr(entry, 'content') and entry.content:
                content = entry.content[0].value if isinstance(entry.content, list) else entry.content
            
            # Extract publication date
            pub_date = self._extract_publication_date(entry)
            if not pub_date:
                pub_date = datetime.now()
            
            # Extract image URL
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
            
            # Create NewsItem with basic data
            item = NewsItem()
            item['title'] = title
            item['link'] = link
            item['description'] = description
            item['content'] = content
            item['pub_date'] = pub_date
            item['image_url'] = image_url
            item['video_url'] = ''
            item['source_name'] = source_name
            item['source_domain'] = source_domain
            item['source_country'] = country_code
            item['source_language'] = language
            item['author'] = author
            item['creator'] = [author] if author else []
            item['category'] = categories
            item['tags'] = categories
            item['keywords'] = []
            item['country'] = [get_country_name(country_code)]
            item['region'] = []
            item['city'] = []
            item['language'] = language
            item['crawl_type'] = 'live'
            item['spider_name'] = self.name
            item['feed_url'] = feed_url
            
            # Now visit the article URL to get full content
            yield scrapy.Request(
                url=link,
                callback=self.parse_article_page,
                meta={
                    'item': item,
                    'country_code': country_code,
                    'source_name': source_name,
                    'source_domain': source_domain,
                    'language': language,
                    'feed_url': feed_url
                },
                errback=self.handle_article_error,
                dont_filter=True
            )
            
        except Exception as e:
            self._logger.error(f"Error extracting article data: {e}")
            return None
    
    def parse_article_page(self, response):
        """Parse individual article page to extract full content"""
        item = response.meta['item']
        
        self._logger.info(f"Extracting full content from: {response.url}")
        
        try:
            # Extract full content from the article page
            full_content = self._extract_full_content(response)
            full_title = self._extract_full_title(response)
            full_description = self._extract_full_description(response)
            full_image_url = self._extract_full_image_url(response)
            full_author = self._extract_full_author(response)
            
            # Update item with full content
            if full_content:
                item['content'] = full_content
            if full_title:
                item['title'] = full_title
            if full_description:
                item['description'] = full_description
            if full_image_url:
                item['image_url'] = full_image_url
            if full_author:
                item['author'] = full_author
            
            self.total_articles += 1
            content_length = len(full_content or '')
            self._logger.info(f"Successfully extracted full content: {content_length} chars from {response.url}")
            
            yield item
            
        except Exception as e:
            self._logger.error(f"Error extracting full content from {response.url}: {e}")
            # Still yield the basic item if full content extraction fails
            yield item
    
    def _extract_full_content(self, response):
        """Extract full article content from the page"""
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
            # Generic selectors for other sites
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
        text_elements = response.css('p, div, article, section')
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
            '[data-testid="summary"]::text'
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
    
    def handle_error(self, failure):
        """Handle RSS feed request errors"""
        self._logger.error(f"RSS feed request failed: {failure.value}")
    
    def handle_article_error(self, failure):
        """Handle article page request errors"""
        self._logger.error(f"Article page request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider is closed"""
        self._logger.info(f"Live spider finished. Total recent articles processed: {self.total_articles}")
        self._logger.info(f"Spider closed with reason: {reason}") 