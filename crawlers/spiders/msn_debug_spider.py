import scrapy
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import re
import logging
import json

logger = logging.getLogger(__name__)

class MSNDebugSpider(scrapy.Spider):
    name = 'msn_debug'
    allowed_domains = ['msn.com']
    
    # Test with just one URL for debugging
    start_urls = [
        'https://www.msn.com/en-us/news',
    ]
    
    custom_settings = {
        'DOWNLOAD_DELAY': 2,
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
        'RETRY_TIMES': 2,
        'RETRY_HTTP_CODES': [500, 502, 503, 504, 408, 429, 403],
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
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        
        for url in self.start_urls:
            yield scrapy.Request(
                url=url,
                headers=headers,
                callback=self.parse,
                meta={'dont_cache': True}
            )
    
    def parse(self, response):
        """Debug MSN.com structure"""
        self.logger.info(f"=== DEBUGGING MSN.COM STRUCTURE ===")
        self.logger.info(f"URL: {response.url}")
        self.logger.info(f"Status: {response.status}")
        self.logger.info(f"Content length: {len(response.text)}")
        
        # Save the HTML for manual inspection
        with open('msn_debug.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
        self.logger.info("Saved HTML to msn_debug.html")
        
        # Analyze the page structure
        self.analyze_page_structure(response)
        
        # Try to find any links
        self.find_all_links(response)
        
        # Look for JavaScript data
        self.extract_js_data(response)
        
        # Try to find any text that looks like news
        self.find_news_text(response)
    
    def analyze_page_structure(self, response):
        """Analyze the page structure"""
        self.logger.info("=== PAGE STRUCTURE ANALYSIS ===")
        
        # Check for common elements
        elements_to_check = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'a', 'div', 'article', 'section',
            'script', 'meta', 'title'
        ]
        
        for element in elements_to_check:
            count = len(response.css(element))
            self.logger.info(f"{element}: {count} elements")
        
        # Check for specific classes
        classes_to_check = [
            'article', 'story', 'news', 'headline', 'title',
            'content', 'body', 'feed', 'card', 'tile',
            'item', 'link', 'url'
        ]
        
        for class_name in classes_to_check:
            elements = response.css(f'[class*="{class_name}"]')
            if elements:
                self.logger.info(f"Found {len(elements)} elements with class containing '{class_name}'")
                # Show first few examples
                for i, elem in enumerate(elements[:3]):
                    text = elem.css('::text').get()
                    href = elem.css('::attr(href)').get()
                    self.logger.info(f"  Example {i+1}: text='{text[:50] if text else 'None'}', href='{href}'")
    
    def find_all_links(self, response):
        """Find all links on the page"""
        self.logger.info("=== LINK ANALYSIS ===")
        
        all_links = response.css('a::attr(href)').getall()
        self.logger.info(f"Total links found: {len(all_links)}")
        
        # Categorize links
        msn_links = [link for link in all_links if link and 'msn.com' in link]
        news_links = [link for link in all_links if link and ('news' in link or 'article' in link)]
        external_links = [link for link in all_links if link and link.startswith('http') and 'msn.com' not in link]
        
        self.logger.info(f"MSN links: {len(msn_links)}")
        self.logger.info(f"News-related links: {len(news_links)}")
        self.logger.info(f"External links: {len(external_links)}")
        
        # Show some examples
        if msn_links:
            self.logger.info("MSN link examples:")
            for link in msn_links[:5]:
                self.logger.info(f"  {link}")
        
        if news_links:
            self.logger.info("News link examples:")
            for link in news_links[:5]:
                self.logger.info(f"  {link}")
    
    def extract_js_data(self, response):
        """Extract data from JavaScript"""
        self.logger.info("=== JAVASCRIPT DATA ANALYSIS ===")
        
        scripts = response.css('script::text').getall()
        self.logger.info(f"Found {len(scripts)} script tags")
        
        # Look for JSON data
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
            matches = re.findall(pattern, response.text, re.DOTALL)
            if matches:
                self.logger.info(f"Found JSON pattern: {pattern}")
                for match in matches[:2]:  # Show first 2 matches
                    self.logger.info(f"  Match preview: {match[:200]}...")
        
        # Look for URLs in scripts
        url_pattern = r'https?://[^\s"\'<>]+'
        urls_in_scripts = re.findall(url_pattern, response.text)
        msn_urls_in_scripts = [url for url in urls_in_scripts if 'msn.com' in url]
        
        self.logger.info(f"URLs found in scripts: {len(urls_in_scripts)}")
        self.logger.info(f"MSN URLs in scripts: {len(msn_urls_in_scripts)}")
        
        if msn_urls_in_scripts:
            self.logger.info("MSN URLs in scripts examples:")
            for url in msn_urls_in_scripts[:5]:
                self.logger.info(f"  {url}")
    
    def find_news_text(self, response):
        """Find text that looks like news content"""
        self.logger.info("=== NEWS TEXT ANALYSIS ===")
        
        # Look for text in various elements
        text_elements = response.css('h1, h2, h3, h4, h5, h6, p, span, div')
        
        news_keywords = ['news', 'article', 'story', 'headline', 'breaking', 'update']
        potential_news = []
        
        for elem in text_elements:
            text = elem.css('::text').get()
            if text and len(text.strip()) > 10:
                text_lower = text.lower()
                if any(keyword in text_lower for keyword in news_keywords):
                    potential_news.append(text.strip())
        
        self.logger.info(f"Found {len(potential_news)} potential news text elements")
        
        if potential_news:
            self.logger.info("Potential news text examples:")
            for text in potential_news[:5]:
                self.logger.info(f"  {text[:100]}...")
        
        # Look for any text that might be article titles
        all_text = response.css('::text').getall()
        long_text = [text.strip() for text in all_text if text and len(text.strip()) > 20]
        
        self.logger.info(f"Text elements longer than 20 chars: {len(long_text)}")
        
        if long_text:
            self.logger.info("Long text examples:")
            for text in long_text[:5]:
                self.logger.info(f"  {text[:100]}...") 