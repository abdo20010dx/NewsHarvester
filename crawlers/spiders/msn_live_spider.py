import scrapy
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import re
import logging
import json

logger = logging.getLogger(__name__)

class MSNLiveSpider(scrapy.Spider):
    name = 'msn_live'
    allowed_domains = ['msn.com', 'msnbc.com', 'nbcnews.com']
    
    # MSN.com main sections - using more specific URLs
    start_urls = [
        'https://www.msn.com/en-us/news',
        'https://www.msn.com/en-us/news/world',
        'https://www.msn.com/en-us/news/politics',
        'https://www.msn.com/en-us/news/technology',
        'https://www.msn.com/en-us/news/business',
        'https://www.msn.com/en-us/news/entertainment',
        'https://www.msn.com/en-us/news/sports',
        'https://www.msn.com/en-us/news/health',
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 5,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 1,
        'ROBOTSTXT_OBEY': False,  # MSN blocks robots.txt
        'ITEM_PIPELINES': {
            'crawlers.pipelines.ValidationPipeline': 300,
            'crawlers.pipelines.DuplicatesPipeline': 400,
        },
        'DOWNLOADER_MIDDLEWARES': {
            'crawlers.middlewares.RotateUserAgentMiddleware': 400,
            'crawlers.middlewares.DelayMiddleware': 500,
        },
        'COOKIES_ENABLED': True,
        'DOWNLOAD_TIMEOUT': 60,
        'RETRY_TIMES': 5,
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403],
        'AUTOTHROTTLE_ENABLED': True,
        'AUTOTHROTTLE_START_DELAY': 5,
        'AUTOTHROTTLE_MAX_DELAY': 60,
        'AUTOTHROTTLE_TARGET_CONCURRENCY': 1.0,
        'AUTOTHROTTLE_DEBUG': True
    }
    
    def start_requests(self):
        """Override start_requests to add headers"""
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'max-age=0',
        }
        
        for url in self.start_urls:
            yield scrapy.Request(
                url=url,
                headers=headers,
                callback=self.parse,
                meta={'dont_cache': True}
            )
    
    def parse(self, response):
        """Parse MSN.com news listing pages"""
        self.logger.info(f"Parsing listing page: {response.url}")
        self.logger.info(f"Response status: {response.status}")
        self.logger.info(f"Page content length: {len(response.text)}")
        
        # Extract category from URL
        category = self.extract_category(response.url)
        country = self.extract_country(response.url)
        
        # Strategy 1: Look for MSN's modern article structure
        article_links = self.extract_article_links_modern(response)
        
        # Strategy 2: If no links found, try alternative selectors
        if not article_links:
            article_links = self.extract_article_links_alternative(response)
        
        # Strategy 3: Extract from JavaScript data
        if not article_links:
            article_links = self.extract_article_links_from_js(response)
        
        self.logger.info(f"Total article links found: {len(article_links)}")
        
        # Process found links
        processed_urls = set()
        for link in article_links[:15]:  # Limit to first 15 for testing
            if not link:
                continue
                
            full_url = urljoin(response.url, link)
            if full_url in processed_urls:
                continue
                
            processed_urls.add(full_url)
            
            if self.is_article_url(full_url):
                self.logger.info(f"Following article link: {full_url}")
                yield scrapy.Request(
                    url=full_url,
                    callback=self.parse_article,
                    meta={'category': category, 'country': country},
                    dont_filter=True,
                    headers={'Referer': response.url}
                )
        
        # Follow pagination
        next_url = self.extract_next_page(response)
        if next_url:
            self.logger.info(f"Following pagination: {next_url}")
            yield scrapy.Request(
                url=next_url,
                callback=self.parse,
                dont_filter=True
            )
    
    def extract_article_links_modern(self, response):
        """Extract article links using modern MSN selectors"""
        selectors = [
            # Modern MSN selectors
            'a[data-testid="article-link"]',
            'a[data-testid="story-link"]',
            'a[data-testid="headline-link"]',
            'a[class*="article-link"]',
            'a[class*="story-link"]',
            'a[class*="headline-link"]',
            # Generic article selectors
            'a[href*="/en-us/news/"]',
            'a[href*="/news/"]',
            'a[href*="msn.com"]',
            # Container-based selectors
            '.article a',
            '.story a',
            '.news-item a',
            '.feed-item a',
            '.card a',
            '.tile a'
        ]
        
        article_links = []
        for selector in selectors:
            links = response.css(f'{selector}::attr(href)').getall()
            if links:
                self.logger.info(f"Found {len(links)} links with selector: {selector}")
                article_links.extend(links)
                if len(article_links) > 20:  # Found enough links
                    break
        
        return article_links
    
    def extract_article_links_alternative(self, response):
        """Alternative method to extract article links"""
        # Look for any links that might be articles
        all_links = response.css('a::attr(href)').getall()
        article_links = []
        
        for link in all_links:
            if link and self.is_article_url(link):
                article_links.append(link)
        
        return article_links
    
    def extract_article_links_from_js(self, response):
        """Extract article links from JavaScript data"""
        article_links = []
        
        # Look for JSON data in script tags
        script_tags = response.css('script::text').getall()
        for script in script_tags:
            if 'article' in script.lower() or 'news' in script.lower():
                # Extract URLs from script content
                urls = re.findall(r'https?://[^\s"\'<>]+', script)
                article_links.extend([url for url in urls if 'msn.com' in url])
        
        return article_links
    
    def extract_next_page(self, response):
        """Extract next page URL"""
        next_selectors = [
            'a[aria-label*="Next"]',
            'a[class*="next"]',
            'a[class*="pagination"]',
            '.pagination a:last-child',
            'a[href*="page"]',
            'a[href*="offset"]'
        ]
        
        for selector in next_selectors:
            next_page = response.css(f'{selector}::attr(href)').get()
            if next_page:
                return urljoin(response.url, next_page)
        
        return None
    
    def parse_article(self, response):
        """Parse individual MSN.com article pages"""
        self.logger.info(f"Parsing article: {response.url}")
        self.logger.info(f"Article response status: {response.status}")
        
        # Extract article data with multiple strategies
        title = self.extract_title(response)
        content = self.extract_content(response)
        description = self.extract_description(response)
        pub_date = self.extract_pub_date(response)
        image_url = self.extract_image(response)
        source_name = self.extract_source(response)
        
        # Log extraction results
        self.logger.info(f"Title extracted: {bool(title)}")
        self.logger.info(f"Content extracted: {bool(content)}")
        self.logger.info(f"Description extracted: {bool(description)}")
        
        if not title or not content:
            self.logger.warning(f"Missing title or content: {response.url}")
            # Try alternative extraction methods
            title = title or self.extract_title_alternative(response)
            content = content or self.extract_content_alternative(response)
            
            if not title or not content:
                self.logger.error(f"Failed to extract content from: {response.url}")
                return
        
        # Create article item
        item = NewsItem()
        item['title'] = title
        item['link'] = response.url
        item['description'] = description
        item['content'] = content
        item['pub_date'] = pub_date
        item['image_url'] = image_url
        item['source_name'] = source_name
        item['category'] = [response.meta.get('category', 'News')]
        item['country'] = [response.meta.get('country', 'US')]
        item['keywords'] = self.extract_keywords(response)
        item['creator'] = self.extract_creator(response)
        
        self.logger.info(f"Successfully created item: {title[:50]}...")
        yield item
    
    def extract_title(self, response):
        """Extract article title with multiple selectors"""
        selectors = [
            # Modern MSN selectors
            '[data-testid="headline"]::text',
            '[data-testid="title"]::text',
            '[data-testid="article-title"]::text',
            # Traditional selectors
            'h1::text',
            '.headline::text',
            '.article-title::text',
            '.story-title::text',
            '.main-headline::text',
            # Generic selectors
            '[class*="title"]::text',
            'h1[class*="title"]::text',
            '.title h1::text',
            'h1.title::text'
        ]
        
        for selector in selectors:
            title = response.css(selector).get()
            if title:
                title = title.strip()
                if len(title) > 10:  # Ensure it's a meaningful title
                    return title
        
        # Fallback: extract from title tag
        title_tag = response.css('title::text').get()
        if title_tag:
            # Clean up title tag (remove site name, etc.)
            title = title_tag.split(' - ')[0].split(' | ')[0].strip()
            if len(title) > 10:
                return title
        
        return None
    
    def extract_title_alternative(self, response):
        """Alternative title extraction using text analysis"""
        # Look for the largest text element that might be a title
        text_elements = response.css('h1, h2, h3, .title, .headline')
        for element in text_elements:
            text = element.css('::text').get()
            if text and len(text.strip()) > 10:
                return text.strip()
        return None
    
    def extract_content(self, response):
        """Extract article content with multiple strategies"""
        selectors = [
            # Modern MSN selectors
            '[data-testid="content"] p::text',
            '[data-testid="article-content"] p::text',
            '[data-testid="story-content"] p::text',
            # Traditional selectors
            '.article-content p::text',
            '.content p::text',
            '.article-body p::text',
            '.story-body p::text',
            # Generic selectors
            '.article p::text',
            '.story p::text',
            '[class*="content"] p::text',
            '[class*="body"] p::text',
            '.main-content p::text',
            '.article-text p::text'
        ]
        
        content_parts = []
        for selector in selectors:
            parts = response.css(selector).getall()
            if parts:
                content_parts.extend([part.strip() for part in parts if part.strip() and len(part.strip()) > 20])
                if len(content_parts) > 2:  # Found enough content
                    break
        
        if content_parts:
            return ' '.join(content_parts)
        
        # Alternative: extract from article-like containers
        article_containers = response.css('.article, .story, [class*="article"], [class*="story"]')
        for container in article_containers:
            paragraphs = container.css('p::text').getall()
            if paragraphs:
                content_parts = [p.strip() for p in paragraphs if p.strip() and len(p.strip()) > 20]
                if content_parts:
                    return ' '.join(content_parts)
        
        return None
    
    def extract_content_alternative(self, response):
        """Alternative content extraction using text analysis"""
        # Find the largest text block that might be content
        all_text = response.css('p::text').getall()
        content_parts = []
        
        for text in all_text:
            text = text.strip()
            if len(text) > 50 and not text.startswith('©') and not text.startswith('Follow'):
                content_parts.append(text)
        
        if content_parts:
            return ' '.join(content_parts[:10])  # Limit to first 10 paragraphs
        
        return None
    
    def extract_description(self, response):
        """Extract article description"""
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
    
    def extract_pub_date(self, response):
        """Extract publication date"""
        selectors = [
            'meta[property="article:published_time"]::attr(content)',
            '.timestamp::text',
            '.date::text',
            '[data-testid="timestamp"]::text',
            'time::attr(datetime)',
            'time::text'
        ]
        
        for selector in selectors:
            date_str = response.css(selector).get()
            if date_str:
                try:
                    # Try to parse various date formats
                    date_str = date_str.strip()
                    if 'T' in date_str:
                        return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
                    else:
                        # Handle other date formats
                        return datetime.strptime(date_str, '%B %d, %Y')
                except:
                    continue
        return datetime.now()
    
    def extract_image(self, response):
        """Extract article image URL"""
        selectors = [
            'meta[property="og:image"]::attr(content)',
            '.article-image img::attr(src)',
            '.hero-image img::attr(src)',
            '[data-testid="hero-image"] img::attr(src)'
        ]
        
        for selector in selectors:
            img_url = response.css(selector).get()
            if img_url:
                return urljoin(response.url, img_url)
        return None
    
    def extract_source(self, response):
        """Extract source name"""
        selectors = [
            '.source::text',
            '.byline::text',
            '[data-testid="source"]::text',
            'meta[property="og:site_name"]::attr(content)'
        ]
        
        for selector in selectors:
            source = response.css(selector).get()
            if source:
                return source.strip()
        return 'MSN'
    
    def extract_keywords(self, response):
        """Extract keywords"""
        keywords = response.css('meta[name="keywords"]::attr(content)').get()
        if keywords:
            return [kw.strip() for kw in keywords.split(',')]
        return []
    
    def extract_creator(self, response):
        """Extract author/creator"""
        selectors = [
            '.author::text',
            '.byline a::text',
            '[data-testid="author"]::text',
            'meta[name="author"]::attr(content)'
        ]
        
        for selector in selectors:
            author = response.css(selector).get()
            if author:
                return [author.strip()]
        return []
    
    def extract_category(self, url):
        """Extract category from URL"""
        path = urlparse(url).path
        if '/news/world' in path:
            return 'World'
        elif '/news/politics' in path:
            return 'Politics'
        elif '/news/technology' in path:
            return 'Technology'
        elif '/news/business' in path:
            return 'Business'
        elif '/news/entertainment' in path:
            return 'Entertainment'
        elif '/news/sports' in path:
            return 'Sports'
        elif '/news/health' in path:
            return 'Health'
        else:
            return 'News'
    
    def extract_country(self, url):
        """Extract country from URL"""
        path = urlparse(url).path
        if '/en-us/' in path:
            return 'US'
        elif '/en-gb/' in path:
            return 'UK'
        elif '/en-ca/' in path:
            return 'CA'
        else:
            return 'US'
    
    def is_article_url(self, url):
        """Check if URL is an article URL"""
        article_patterns = [
            r'/en-us/news/[^/]+/[^/]+$',
            r'/en-us/news/[^/]+/[^/]+/[^/]+$'
        ]
        
        for pattern in article_patterns:
            if re.search(pattern, url):
                return True
        return False 