import scrapy
from urllib.parse import urljoin, urlparse
from .base_spider import BaseNewsSpider


class NewsSiteSpider(BaseNewsSpider):
    """Spider for crawling news websites directly."""
    
    name = 'news_site'
    
    def start_requests(self):
        """Start requests from the main news site."""
        if not self.source:
            self.logger.error("No source configured")
            return
        
        yield scrapy.Request(
            url=self.source.url,
            callback=self.parse_homepage,
            meta={'source': self.source}
        )
    
    def parse_homepage(self, response):
        """Parse homepage and extract article links."""
        # Common selectors for article links
        article_selectors = [
            'a[href*="/article/"]',
            'a[href*="/news/"]',
            'a[href*="/story/"]',
            '.article-link',
            '.news-link',
            'article a',
            '.headline a'
        ]
        
        for selector in article_selectors:
            article_links = response.css(selector + '::attr(href)').getall()
            
            for link in article_links:
                if link:
                    full_url = urljoin(response.url, link)
                    
                    # Check if it's a valid article URL
                    if self.is_article_url(full_url):
                        self.articles_found += 1
                        yield scrapy.Request(
                            url=full_url,
                            callback=self.parse_article,
                            meta={'source': self.source}
                        )
    
    def is_article_url(self, url):
        """Check if URL looks like an article URL."""
        article_patterns = [
            '/article/',
            '/news/',
            '/story/',
            '/post/',
            '/entry/'
        ]
        
        url_lower = url.lower()
        return any(pattern in url_lower for pattern in article_patterns)
    
    def parse_article(self, response):
        """Parse individual article page."""
        try:
            article_data = self.create_article_item(response)
            yield article_data
            
        except Exception as e:
            self.logger.error(f"Error parsing article {response.url}: {str(e)}")
            if self.crawl_session:
                self.crawl_session.errors = f"{self.crawl_session.errors or ''}\n{str(e)}"
                self.crawl_session.save() 