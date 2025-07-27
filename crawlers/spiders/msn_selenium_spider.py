import scrapy
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging
import json
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException, NoSuchElementException

logger = logging.getLogger(__name__)

class MSNSeleniumSpider(scrapy.Spider):
    name = 'msn_selenium'
    allowed_domains = ['msn.com']
    
    # MSN.com main sections
    start_urls = [
        'https://www.msn.com/en-us/news',
        'https://www.msn.com/en-us/news/world',
        'https://www.msn.com/en-us/news/politics',
        'https://www.msn.com/en-us/news/technology',
        'https://www.msn.com/en-us/news/business',
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 5,
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
        'DOWNLOAD_TIMEOUT': 60,
        'RETRY_TIMES': 2,
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403],
    }
    
    def __init__(self, *args, **kwargs):
        super(MSNSeleniumSpider, self).__init__(*args, **kwargs)
        self.driver = None
        self.setup_driver()
    
    def setup_driver(self):
        """Setup Chrome WebDriver with appropriate options"""
        try:
            chrome_options = Options()
            chrome_options.add_argument('--headless')  # Run in headless mode
            chrome_options.add_argument('--no-sandbox')
            chrome_options.add_argument('--disable-dev-shm-usage')
            chrome_options.add_argument('--disable-gpu')
            chrome_options.add_argument('--window-size=1920,1080')
            chrome_options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36')
            
            # Disable images and CSS to speed up loading
            chrome_options.add_argument('--disable-images')
            chrome_options.add_argument('--disable-css')
            
            self.driver = webdriver.Chrome(options=chrome_options)
            self.driver.set_page_load_timeout(30)
            logger.info("Chrome WebDriver initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize Chrome WebDriver: {e}")
            self.driver = None
    
    def closed(self, reason):
        """Clean up WebDriver when spider closes"""
        if self.driver:
            self.driver.quit()
            logger.info("Chrome WebDriver closed")
    
    def start_requests(self):
        """Start requests for MSN pages"""
        if not self.driver:
            logger.error("WebDriver not available, cannot proceed")
            return
        
        for url in self.start_urls:
            yield scrapy.Request(
                url=url,
                callback=self.parse_with_selenium,
                meta={'dont_cache': True}
            )
    
    def parse_with_selenium(self, response):
        """Parse MSN pages using Selenium"""
        if not self.driver:
            logger.error("WebDriver not available")
            return
        
        url = response.url
        logger.info(f"Parsing with Selenium: {url}")
        
        try:
            # Navigate to the page
            self.driver.get(url)
            
            # Wait for page to load
            time.sleep(5)
            
            # Wait for content to appear
            try:
                WebDriverWait(self.driver, 15).until(
                    EC.presence_of_element_located((By.TAG_NAME, "body"))
                )
            except TimeoutException:
                logger.warning(f"Timeout waiting for page to load: {url}")
            
            # Extract category from URL
            category = self.extract_category_from_url(url)
            
            # Try multiple strategies to find articles
            articles_found = False
            
            # Strategy 1: Look for article links
            article_links = self.extract_article_links()
            if article_links:
                logger.info(f"Found {len(article_links)} article links")
                articles_found = True
                
                for link in article_links[:10]:  # Limit to first 10
                    if link:
                        yield scrapy.Request(
                            url=link,
                            callback=self.parse_article,
                            meta={'category': category},
                            dont_filter=True
                        )
            
            # Strategy 2: Look for embedded article data
            if not articles_found:
                embedded_articles = self.extract_embedded_articles()
                if embedded_articles:
                    logger.info(f"Found {len(embedded_articles)} embedded articles")
                    articles_found = True
                    
                    for article_data in embedded_articles:
                        item = self.create_article_item(article_data)
                        if item:
                            item['category'] = [category]
                            yield item
            
            # Strategy 3: Look for any text that might be news
            if not articles_found:
                news_texts = self.extract_news_texts()
                if news_texts:
                    logger.info(f"Found {len(news_texts)} potential news texts")
                    articles_found = True
                    
                    for text_data in news_texts:
                        item = self.create_text_item(text_data, category)
                        if item:
                            yield item
            
            if not articles_found:
                logger.warning(f"No articles found on: {url}")
                
        except Exception as e:
            logger.error(f"Error parsing with Selenium: {e}")
    
    def extract_article_links(self):
        """Extract article links from the page"""
        article_links = []
        
        try:
            # Look for various types of links that might be articles
            link_selectors = [
                'a[href*="/en-us/news/"]',
                'a[href*="/news/"]',
                'a[href*="msn.com"]',
                'a[class*="article"]',
                'a[class*="story"]',
                'a[class*="headline"]',
                'a[data-testid*="article"]',
                'a[data-testid*="story"]',
            ]
            
            for selector in link_selectors:
                try:
                    links = self.driver.find_elements(By.CSS_SELECTOR, selector)
                    for link in links:
                        href = link.get_attribute('href')
                        if href and self.is_article_url(href):
                            article_links.append(href)
                except Exception as e:
                    logger.debug(f"Error with selector {selector}: {e}")
                    continue
            
            # Remove duplicates
            article_links = list(set(article_links))
            
        except Exception as e:
            logger.error(f"Error extracting article links: {e}")
        
        return article_links
    
    def extract_embedded_articles(self):
        """Extract embedded article data from JavaScript"""
        articles = []
        
        try:
            # Execute JavaScript to extract data
            js_script = """
            // Look for any JavaScript variables that might contain article data
            let articles = [];
            
            // Check window object for article data
            if (window.__INITIAL_STATE__) {
                articles.push(window.__INITIAL_STATE__);
            }
            if (window.__PRELOADED_STATE__) {
                articles.push(window.__PRELOADED_STATE__);
            }
            if (window.__NEXT_DATA__) {
                articles.push(window.__NEXT_DATA__);
            }
            
            // Look for any script tags with JSON data
            const scripts = document.querySelectorAll('script');
            for (let script of scripts) {
                const content = script.textContent;
                if (content && (content.includes('"articles"') || content.includes('"items"') || content.includes('"content"'))) {
                    try {
                        const data = JSON.parse(content);
                        articles.push(data);
                    } catch (e) {
                        // Try to extract JSON from the script content
                        const jsonMatch = content.match(/\{[^{}]*"articles"[^{}]*\}/);
                        if (jsonMatch) {
                            try {
                                const data = JSON.parse(jsonMatch[0]);
                                articles.push(data);
                            } catch (e2) {}
                        }
                    }
                }
            }
            
            return articles;
            """
            
            result = self.driver.execute_script(js_script)
            if result:
                articles.extend(result)
            
        except Exception as e:
            logger.error(f"Error extracting embedded articles: {e}")
        
        return articles
    
    def extract_news_texts(self):
        """Extract news-like text from the page"""
        news_texts = []
        
        try:
            # Look for text elements that might be news
            text_selectors = [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'p', 'span', 'div'
            ]
            
            for selector in text_selectors:
                try:
                    elements = self.driver.find_elements(By.CSS_SELECTOR, selector)
                    for element in elements:
                        text = element.text.strip()
                        if text and len(text) > 20 and self.looks_like_news(text):
                            news_texts.append({
                                'title': text[:100],
                                'content': text,
                                'source': 'MSN'
                            })
                except Exception as e:
                    logger.debug(f"Error with text selector {selector}: {e}")
                    continue
            
        except Exception as e:
            logger.error(f"Error extracting news texts: {e}")
        
        return news_texts
    
    def looks_like_news(self, text):
        """Check if text looks like news content"""
        news_keywords = [
            'news', 'article', 'story', 'headline', 'breaking', 'update',
            'reports', 'announces', 'says', 'according', 'officials',
            'government', 'president', 'minister', 'election', 'vote'
        ]
        
        text_lower = text.lower()
        return any(keyword in text_lower for keyword in news_keywords)
    
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
        
        import re
        for pattern in article_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                return True
        
        return False
    
    def parse_article(self, response):
        """Parse individual article pages"""
        logger.info(f"Parsing article: {response.url}")
        
        # Extract article data
        title = self.extract_title(response)
        content = self.extract_content(response)
        description = self.extract_description(response)
        pub_date = self.extract_pub_date(response)
        image_url = self.extract_image(response)
        source_name = self.extract_source(response)
        
        if not title or not content:
            logger.warning(f"Missing title or content: {response.url}")
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
        
        logger.info(f"Successfully created item: {title[:50]}...")
        yield item
    
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
            logger.error(f"Error creating article item: {e}")
        
        return None
    
    def create_text_item(self, text_data, category):
        """Create article item from text data"""
        try:
            item = NewsItem()
            item['title'] = text_data.get('title', 'MSN News')
            item['link'] = f"https://www.msn.com/news/{category.lower()}"
            item['description'] = text_data.get('content', '')[:200]
            item['content'] = text_data.get('content', '')
            item['pub_date'] = datetime.now()
            item['image_url'] = None
            item['source_name'] = text_data.get('source', 'MSN')
            item['category'] = [category]
            item['country'] = ['US']
            item['keywords'] = []
            item['creator'] = []
            
            return item
            
        except Exception as e:
            logger.error(f"Error creating text item: {e}")
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