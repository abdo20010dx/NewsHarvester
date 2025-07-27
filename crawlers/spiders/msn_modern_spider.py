import scrapy
import json
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging
import re

logger = logging.getLogger(__name__)

class MSNModernSpider(scrapy.Spider):
    name = 'msn_modern'
    allowed_domains = ['msn.com', 'assets.msn.com', 'ent-api.msn.com']
    
    # MSN API endpoints based on the debug analysis
    api_endpoints = [
        'https://assets.msn.com/config/v1/',
        'https://ent-api.msn.com/',
        'https://assets.msn.com/resolver/api/resolve/v3/',
    ]
    
    # Topic-specific API endpoints
    topic_endpoints = [
        'https://www.msn.com/en-us/channel/topic/News/tp-Y_46b78bbb-31c4-4fc5-8a4a-858072348d06',
        'https://www.msn.com/en-us/channel/topic/World/tp-Y_ee352f2b-a60f-41b3-9b10-4d54b4e7f3f9',
        'https://www.msn.com/en-us/channel/topic/Politics/tp-Y_bced654c-7e2e-4c63-acb4-f3b3b89bd4e3',
        'https://www.msn.com/en-us/channel/topic/Technology/tp-Y_d1cad308-780e-4a75-ba34-6460811ccfe3',
        'https://www.msn.com/en-us/channel/topic/Entertainment/tp-Y_414a7c40-a373-4025-b4ce-e9502e9e17ed',
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
        """Start with API requests and topic pages"""
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
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://www.msn.com/',
        }
        
        # Try API endpoints first
        for api_url in self.api_endpoints:
            yield scrapy.Request(
                url=api_url,
                headers=headers,
                callback=self.parse_api,
                meta={'dont_cache': True},
                errback=self.handle_api_error
            )
        
        # Try topic pages
        for topic_url in self.topic_endpoints:
            yield scrapy.Request(
                url=topic_url,
                headers=headers,
                callback=self.parse_topic_page,
                meta={'dont_cache': True}
            )
        
        # Try to find feed endpoints
        yield from self.try_feed_endpoints()
    
    def try_feed_endpoints(self):
        """Try various MSN feed endpoints"""
        feed_patterns = [
            'https://assets.msn.com/feed/news',
            'https://assets.msn.com/feed/content',
            'https://ent-api.msn.com/feed/news',
            'https://ent-api.msn.com/feed/content',
            'https://www.msn.com/api/feed/news',
            'https://www.msn.com/api/feed/content',
        ]
        
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://www.msn.com/',
        }
        
        for feed_url in feed_patterns:
            yield scrapy.Request(
                url=feed_url,
                headers=headers,
                callback=self.parse_feed,
                meta={'dont_cache': True},
                errback=self.handle_api_error
            )
    
    def parse_api(self, response):
        """Parse API responses"""
        self.logger.info(f"Parsing API: {response.url}")
        
        try:
            data = json.loads(response.text)
            self.logger.info(f"API response structure: {list(data.keys()) if isinstance(data, dict) else 'Not a dict'}")
            
            # Look for feed URLs or content in the API response
            if isinstance(data, dict):
                # Try to find feed endpoints
                feed_urls = self.extract_feed_urls(data)
                for feed_url in feed_urls:
                    yield scrapy.Request(
                        url=feed_url,
                        callback=self.parse_feed,
                        meta={'dont_cache': True}
                    )
                
                # Try to extract articles directly
                articles = self.extract_articles_from_data(data)
                for article_data in articles:
                    item = self.create_article_item(article_data)
                    if item:
                        yield item
                        
        except json.JSONDecodeError:
            self.logger.warning(f"Failed to parse JSON from {response.url}")
        except Exception as e:
            self.logger.error(f"Error parsing API response: {e}")
    
    def parse_topic_page(self, response):
        """Parse MSN topic pages"""
        self.logger.info(f"Parsing topic page: {response.url}")
        
        # Extract category from URL
        category = self.extract_category_from_url(response.url)
        
        # Look for JavaScript data in the page
        script_data = self.extract_script_data(response)
        if script_data:
            articles = self.extract_articles_from_data(script_data)
            for article_data in articles:
                item = self.create_article_item(article_data)
                if item:
                    item['category'] = [category]
                    yield item
        
        # Look for any links that might be articles
        article_links = self.extract_article_links(response)
        for link in article_links[:10]:  # Limit for testing
            if link:
                full_url = urljoin(response.url, link)
                yield scrapy.Request(
                    url=full_url,
                    callback=self.parse_article,
                    meta={'category': category},
                    dont_filter=True
                )
    
    def parse_feed(self, response):
        """Parse feed responses"""
        self.logger.info(f"Parsing feed: {response.url}")
        
        try:
            data = json.loads(response.text)
            articles = self.extract_articles_from_data(data)
            
            self.logger.info(f"Found {len(articles)} articles in feed")
            
            for article_data in articles:
                item = self.create_article_item(article_data)
                if item:
                    yield item
                    
        except json.JSONDecodeError:
            self.logger.warning(f"Failed to parse JSON from feed: {response.url}")
        except Exception as e:
            self.logger.error(f"Error parsing feed: {e}")
    
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
        item['country'] = ['US']
        item['keywords'] = self.extract_keywords(response)
        item['creator'] = self.extract_creator(response)
        
        self.logger.info(f"Successfully created item: {title[:50]}...")
        yield item
    
    def extract_feed_urls(self, data):
        """Extract feed URLs from API response"""
        feed_urls = []
        
        def search_for_urls(obj):
            if isinstance(obj, dict):
                for key, value in obj.items():
                    if isinstance(value, str) and ('feed' in value.lower() or 'content' in value.lower()):
                        if value.startswith('http'):
                            feed_urls.append(value)
                    search_for_urls(value)
            elif isinstance(obj, list):
                for item in obj:
                    search_for_urls(item)
        
        search_for_urls(data)
        return list(set(feed_urls))
    
    def extract_script_data(self, response):
        """Extract data from script tags"""
        scripts = response.css('script::text').getall()
        
        for script in scripts:
            # Look for JSON data in scripts
            json_patterns = [
                r'window\.__INITIAL_STATE__\s*=\s*({.*?});',
                r'window\.__PRELOADED_STATE__\s*=\s*({.*?});',
                r'window\.__NEXT_DATA__\s*=\s*({.*?});',
                r'window\.__APOLLO_STATE__\s*=\s*({.*?});',
                r'"articles":\s*\[(.*?)\]',
                r'"items":\s*\[(.*?)\]',
                r'"content":\s*\[(.*?)\]',
            ]
            
            for pattern in json_patterns:
                matches = re.findall(pattern, script, re.DOTALL)
                if matches:
                    try:
                        data = json.loads(matches[0])
                        return data
                    except:
                        continue
        
        return None
    
    def extract_articles_from_data(self, data):
        """Extract articles from various data structures"""
        articles = []
        
        def search_for_articles(obj, path=""):
            if isinstance(obj, dict):
                # Check if this looks like an article
                if self.is_article_object(obj):
                    articles.append(obj)
                
                # Recursively search
                for key, value in obj.items():
                    current_path = f"{path}.{key}" if path else key
                    search_for_articles(value, current_path)
            
            elif isinstance(obj, list):
                # Check if this list contains articles
                if obj and isinstance(obj[0], dict):
                    if self.is_article_object(obj[0]):
                        articles.extend(obj)
                    else:
                        # Recursively search list items
                        for item in obj:
                            search_for_articles(item, path)
        
        search_for_articles(data)
        return articles
    
    def is_article_object(self, obj):
        """Check if an object looks like an article"""
        if not isinstance(obj, dict):
            return False
        
        # Look for common article fields
        article_fields = ['title', 'headline', 'url', 'link', 'content', 'body', 'description']
        has_article_fields = any(field in obj for field in article_fields)
        
        # Must have at least a title and some content
        has_title = bool(obj.get('title') or obj.get('headline'))
        has_content = bool(obj.get('content') or obj.get('body') or obj.get('description'))
        
        return has_article_fields and has_title and has_content
    
    def extract_article_links(self, response):
        """Extract article links from page"""
        # Look for any links that might be articles
        all_links = response.css('a::attr(href)').getall()
        article_links = []
        
        for link in all_links:
            if link and self.is_article_url(link):
                article_links.append(link)
        
        return article_links
    
    def is_article_url(self, url):
        """Check if URL looks like an article URL"""
        if not url:
            return False
        
        # Look for article patterns in URL
        article_patterns = [
            r'/en-us/news/',
            r'/news/',
            r'/article/',
            r'/story/',
            r'msn\.com.*news',
        ]
        
        for pattern in article_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                return True
        
        return False
    
    def create_article_item(self, article_data):
        """Create MSNArticleItem from article data"""
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
            
            # Only return if we have essential fields
            if item['title'] and item['link']:
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
    
    def extract_category_from_url(self, url):
        """Extract category from URL"""
        path = urlparse(url).path
        if 'World' in path:
            return 'World'
        elif 'Politics' in path:
            return 'Politics'
        elif 'Technology' in path:
            return 'Technology'
        elif 'Entertainment' in path:
            return 'Entertainment'
        else:
            return 'News'
    
    def handle_api_error(self, failure):
        """Handle API request failures"""
        self.logger.warning(f"API request failed: {failure.value}")
    
    # Standard extraction methods for article pages
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