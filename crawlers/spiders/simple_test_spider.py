import scrapy
from datetime import datetime
from ..items import NewsItem
import logging

logger = logging.getLogger(__name__)

class SimpleTestSpider(scrapy.Spider):
    name = 'simple_test'
    allowed_domains = ['news.ycombinator.com']
    start_urls = ['https://news.ycombinator.com/']
    
    custom_settings = {
        'DOWNLOAD_DELAY': 1,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 1,
        'ROBOTSTXT_OBEY': True,
        'ITEM_PIPELINES': {
            'crawlers.pipelines.ValidationPipeline': 300,
            'crawlers.pipelines.DuplicatesPipeline': 400,
        },
        'DOWNLOADER_MIDDLEWARES': {
            'crawlers.middlewares.RotateUserAgentMiddleware': 400,
        }
    }
    
    def parse(self, response):
        """Parse Hacker News front page"""
        self.logger.info(f"Parsing Hacker News: {response.url}")
        self.logger.info(f"Response status: {response.status}")
        
        # Find article links (Hacker News has a simple structure)
        article_rows = response.css('.athing')
        
        self.logger.info(f"Found {len(article_rows)} articles")
        
        for row in article_rows[:5]:  # Limit to first 5 for testing
            title_element = row.css('.titleline a')
            title = title_element.css('::text').get()
            link = title_element.css('::attr(href)').get()
            
            if title and link:
                self.logger.info(f"Found article: {title[:50]}...")
                
                # Create item directly from listing page
                item = NewsItem()
                item['title'] = title.strip()
                item['link'] = link
                item['description'] = f"Hacker News article: {title}"
                item['content'] = f"Article from Hacker News: {title}. Link: {link}"
                item['pub_date'] = datetime.now()
                item['source_name'] = 'Hacker News'
                item['category'] = ['Technology']
                item['country'] = ['US']
                item['keywords'] = ['technology', 'news']
                item['creator'] = []
                
                yield item
        
        self.logger.info("Simple test spider completed successfully") 