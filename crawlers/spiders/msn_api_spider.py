import scrapy
import json
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging

logger = logging.getLogger(__name__)

class MSNApiSpider(scrapy.Spider):
    name = 'msn_api'
    allowed_domains = ['msn.com', 'api.msn.com']
    
    # MSN API endpoints
    api_urls = [
        'https://www.msn.com/api/v1/news/feed',
        'https://www.msn.com/api/v1/news/top',
        'https://www.msn.com/api/v1/news/latest',
    ]
    
    # Fallback to regular MSN URLs if API doesn't work
    start_urls = [
        'https://www.msn.com/en-us/news',
        'https://www.msn.com/en-us/news/world',
        'https://www.msn.com/en-us/news/politics',
        'https://www.msn.com/en-us/news/technology',
        'https://www.msn.com/en-us/news/business',
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 3,
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
        """Start with API requests, fallback to regular URLs"""
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        }
        
        # Try API endpoints first
        for api_url in self.api_urls:
            yield scrapy.Request(
                url=api_url,
                headers=headers,
                callback=self.parse_api,
                meta={'dont_cache': True},
                errback=self.handle_api_error
            )
        
        # Fallback to regular URLs
        for url in self.start_urls:
            yield scrapy.Request(
                url=url,
                callback=self.parse_regular,
                meta={'dont_cache': True}
            )
    
    def parse_api(self, response):
        """Parse MSN API response"""
        self.logger.info(f"Parsing API response: {response.url}")
        
        try:
            data = json.loads(response.text)
            self.logger.info(f"API response structure: {list(data.keys()) if isinstance(data, dict) else 'Not a dict'}")
            
            # Handle different API response structures
            articles = self.extract_articles_from_api(data)
            
            if articles:
                self.logger.info(f"Found {len(articles)} articles from API")
                for article_data in articles:
                    yield self.create_article_item(article_data)
            else:
                self.logger.warning("No articles found in API response")
                
        except json.JSONDecodeError:
            self.logger.error("Failed to parse JSON from API response")
        except Exception as e:
            self.logger.error(f"Error parsing API response: {e}")
    
    def handle_api_error(self, failure):
        """Handle API request failures"""
        self.logger.warning(f"API request failed: {failure.value}")
        # The regular URL requests will handle the fallback
    
    def parse_regular(self, response):
        """Parse regular MSN pages as fallback"""
        self.logger.info(f"Parsing regular page: {response.url}")
        
        # Extract category from URL
        category = self.extract_category(response.url)
        country = self.extract_country(response.url)
        
        # Look for article links
        article_links = self.extract_article_links(response)
        
        self.logger.info(f"Found {len(article_links)} article links")
        
        for link in article_links[:10]:  # Limit for testing
            if link:
                full_url = urljoin(response.url, link)
                yield scrapy.Request(
                    url=full_url,
                    callback=self.parse_article,
                    meta={'category': category, 'country': country},
                    dont_filter=True
                )
    
    def extract_articles_from_api(self, data):
        """Extract articles from various API response structures"""
        articles = []
        
        # Try different possible structures
        possible_paths = [
            ['articles'],
            ['data', 'articles'],
            ['feed', 'articles'],
            ['items'],
            ['data', 'items'],
            ['results'],
            ['data', 'results'],
            ['content'],
            ['data', 'content'],
        ]
        
        for path in possible_paths:
            current = data
            try:
                for key in path:
                    current = current[key]
                if isinstance(current, list):
                    articles = current
                    self.logger.info(f"Found articles at path: {path}")
                    break
            except (KeyError, TypeError):
                continue
        
        return articles
    
    def extract_article_links(self, response):
        """Extract article links from regular MSN pages"""
        selectors = [
            'a[href*="/en-us/news/"]',
            'a[href*="/news/"]',
            'a[data-testid*="article"]',
            'a[class*="article"]',
            'a[class*="story"]',
            '.article a',
            '.story a',
            '.news-item a',
        ]
        
        article_links = []
        for selector in selectors:
            links = response.css(f'{selector}::attr(href)').getall()
            if links:
                article_links.extend(links)
                break
        
        return article_links
    
    def parse_article(self, response):
        """Parse individual article pages"""
        self.logger.info(f"Parsing article: {response.url}")
        
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
        
        self.logger.info(f"Successfully created item: {title[:50]}...")
        yield item
    
    def create_article_item(self, article_data):
        """Create article item from API data"""
        try:
            item = NewsItem()
            
            # Map API fields to item fields
            item['title'] = article_data.get('title') or article_data.get('headline') or article_data.get('name')
            item['link'] = article_data.get('url') or article_data.get('link') or article_data.get('webUrl')
            item['description'] = article_data.get('description') or article_data.get('summary') or article_data.get('abstract')
            item['content'] = article_data.get('content') or article_data.get('body') or item['description']
            item['pub_date'] = self.parse_api_date(article_data.get('publishedAt') or article_data.get('date') or article_data.get('timestamp'))
            item['image_url'] = article_data.get('imageUrl') or article_data.get('image') or article_data.get('thumbnail')
            item['source_name'] = article_data.get('source') or article_data.get('provider') or 'MSN'
            item['category'] = [article_data.get('category', 'News')]
            item['country'] = [article_data.get('country', 'US')]
            item['keywords'] = article_data.get('keywords', []) or article_data.get('tags', [])
            item['creator'] = article_data.get('author', []) or article_data.get('creator', [])
            
            return item
            
        except Exception as e:
            self.logger.error(f"Error creating article item: {e}")
            return None
    
    def parse_api_date(self, date_str):
        """Parse date from API response"""
        if not date_str:
            return datetime.now()
        
        try:
            # Try different date formats
            if 'T' in date_str:
                return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            else:
                return datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')
        except:
            return datetime.now()
    
    def extract_title(self, response):
        """Extract article title"""
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
            '.description::text'
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
            '.hero-image img::attr(src)'
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