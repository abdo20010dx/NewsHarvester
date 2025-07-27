import scrapy
from datetime import datetime, timedelta
from urllib.parse import urljoin, urlparse, parse_qs
from ..items import NewsItem
import re
import json
import os

# Simple checkpoint storage (file-based instead of Django)
CHECKPOINT_FILE = 'crawl_checkpoints.json'


class MSNHistoricalSpider(scrapy.Spider):
    name = 'msn_historical'
    allowed_domains = ['msn.com']
    
    # MSN.com sections for historical crawling
    sections = [
        {'url': 'https://www.msn.com/en-us/news', 'category': 'News', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/world', 'category': 'World', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/politics', 'category': 'Politics', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/technology', 'category': 'Technology', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/business', 'category': 'Business', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/entertainment', 'category': 'Entertainment', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/sports', 'category': 'Sports', 'country': 'US'},
        {'url': 'https://www.msn.com/en-us/news/health', 'category': 'Health', 'country': 'US'},
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 3,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 2,
        'ROBOTSTXT_OBEY': True,
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
    
    def start_requests(self):
        """Start requests with checkpoint logic"""
        for section in self.sections:
            checkpoint = self.get_checkpoint(section['category'], section['country'])
            
            if checkpoint and checkpoint.get('is_active', True):
                # Resume from last page
                start_page = checkpoint.get('last_page', 0) + 1
                self.logger.info(f"Resuming {section['category']} from page {start_page}")
            else:
                # Start from beginning
                start_page = 1
                self.logger.info(f"Starting {section['category']} from page {start_page}")
            
            # Generate paginated URLs
            for page in range(start_page, start_page + 50):  # Crawl 50 pages per run
                url = self.build_paginated_url(section['url'], page)
                yield scrapy.Request(
                    url=url,
                    callback=self.parse,
                    meta={
                        'category': section['category'],
                        'country': section['country'],
                        'page': page,
                        'base_url': section['url']
                    }
                )
    
    def parse(self, response):
        """Parse MSN.com historical news listing pages"""
        self.logger.info(f"Parsing historical: {response.url}")
        
        category = response.meta.get('category')
        country = response.meta.get('country')
        page = response.meta.get('page')
        base_url = response.meta.get('base_url')
        
        # Find article links
        article_links = response.css('a[href*="/en-us/news/"]::attr(href)').getall()
        
        articles_found = 0
        for link in article_links:
            if self.is_article_url(link):
                full_url = urljoin(response.url, link)
                yield scrapy.Request(
                    url=full_url,
                    callback=self.parse_article,
                    meta={'category': category, 'country': country}
                )
                articles_found += 1
        
        # Update checkpoint
        self.update_checkpoint(category, country, page, response.url)
        
        self.logger.info(f"Found {articles_found} articles on page {page}")
        
        # Continue to next page if articles were found
        if articles_found > 0:
            next_page = page + 1
            next_url = self.build_paginated_url(base_url, next_page)
            yield scrapy.Request(
                url=next_url,
                callback=self.parse,
                meta={
                    'category': category,
                    'country': country,
                    'page': next_page,
                    'base_url': base_url
                }
            )
    
    def parse_article(self, response):
        """Parse individual MSN.com article pages (same as live spider)"""
        self.logger.info(f"Parsing historical article: {response.url}")
        
        # Extract article data
        title = self.extract_title(response)
        content = self.extract_content(response)
        description = self.extract_description(response)
        pub_date = self.extract_pub_date(response)
        image_url = self.extract_image(response)
        source_name = self.extract_source(response)
        
        if not title or not content:
            self.logger.warning(f"Missing title or content: {response.url}")
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
        
        yield item
    
    def build_paginated_url(self, base_url, page):
        """Build paginated URL for MSN.com"""
        if page == 1:
            return base_url
        else:
            # MSN.com uses different pagination patterns
            if '?' in base_url:
                return f"{base_url}&page={page}"
            else:
                return f"{base_url}?page={page}"
    
    def get_checkpoint(self, category, country):
        """Get checkpoint for category/country combination"""
        try:
            if os.path.exists(CHECKPOINT_FILE):
                with open(CHECKPOINT_FILE, 'r') as f:
                    checkpoints = json.load(f)
                    key = f"{self.name}_{category}_{country}"
                    return checkpoints.get(key, {'last_page': 0, 'is_active': True})
            return {'last_page': 0, 'is_active': True}
        except Exception as e:
            self.logger.error(f"Error reading checkpoint: {e}")
            return {'last_page': 0, 'is_active': True}
    
    def update_checkpoint(self, category, country, page, url):
        """Update checkpoint with current progress"""
        try:
            checkpoints = {}
            if os.path.exists(CHECKPOINT_FILE):
                with open(CHECKPOINT_FILE, 'r') as f:
                    checkpoints = json.load(f)
            
            key = f"{self.name}_{category}_{country}"
            checkpoints[key] = {
                'last_page': page,
                'last_url': url,
                'is_active': True,
                'updated_at': datetime.now().isoformat()
            }
            
            with open(CHECKPOINT_FILE, 'w') as f:
                json.dump(checkpoints, f, indent=2)
            
            self.logger.info(f"Updated checkpoint: {category}/{country} - Page {page}")
        except Exception as e:
            self.logger.error(f"Error updating checkpoint: {e}")
    
    def extract_title(self, response):
        """Extract article title"""
        selectors = [
            'h1::text',
            '.headline::text',
            '[data-testid="headline"]::text',
            'h1 span::text',
            'title::text'
        ]
        
        for selector in selectors:
            title = response.css(selector).get()
            if title:
                return title.strip()
        return None
    
    def extract_content(self, response):
        """Extract article content"""
        selectors = [
            '.article-content p::text',
            '.content p::text',
            '[data-testid="content"] p::text',
            '.article-body p::text',
            '.story-body p::text'
        ]
        
        content_parts = []
        for selector in selectors:
            parts = response.css(selector).getall()
            if parts:
                content_parts.extend([part.strip() for part in parts if part.strip()])
                break
        
        return ' '.join(content_parts) if content_parts else None
    
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
                    date_str = date_str.strip()
                    if 'T' in date_str:
                        return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
                    else:
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