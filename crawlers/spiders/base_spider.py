import scrapy
from scrapy import signals
from scrapy.http import Request
from scrapy.exceptions import DropItem
from datetime import datetime
import logging
from django.utils import timezone

from articles.models import NewsArticle
from crawlers.models import NewsSource, CrawlSession


class BaseNewsSpider(scrapy.Spider):
    """Base spider class for news crawling."""
    
    custom_settings = {
        'ROBOTSTXT_OBEY': True,
        'DOWNLOAD_DELAY': 1,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 2,
        'USER_AGENT': 'NewsHarvester/1.0 (+https://github.com/your-repo/newsharvester)',
        'ITEM_PIPELINES': {
            'crawlers.pipelines.NewsArticlePipeline': 300,
        }
    }
    
    def __init__(self, source_id=None, *args, **kwargs):
        super(BaseNewsSpider, self).__init__(*args, **kwargs)
        self.source_id = source_id
        self.source = None
        self.crawl_session = None
        self.articles_found = 0
        self.articles_saved = 0
        
        if source_id:
            try:
                self.source = NewsSource.objects.get(id=source_id)
                self.crawl_session = CrawlSession.objects.create(
                    source=self.source,
                    status='running'
                )
                self.logger.info(f"Started crawl session for {self.source.name}")
            except NewsSource.DoesNotExist:
                self.logger.error(f"Source with ID {source_id} not found")
                raise
    
    @classmethod
    def from_crawler(cls, crawler, *args, **kwargs):
        spider = super(BaseNewsSpider, cls).from_crawler(crawler, *args, **kwargs)
        crawler.signals.connect(spider.spider_closed, signal=signals.spider_closed)
        return spider
    
    def spider_closed(self, spider):
        """Handle spider closure and update crawl session."""
        if self.crawl_session:
            self.crawl_session.finished_at = timezone.now()
            self.crawl_session.status = 'completed'
            self.crawl_session.articles_found = self.articles_found
            self.crawl_session.articles_saved = self.articles_saved
            self.crawl_session.save()
            
            # Update source last_crawled
            if self.source:
                self.source.last_crawled = timezone.now()
                self.source.save()
    
    def parse_article(self, response):
        """Parse individual article page. Override in subclasses."""
        raise NotImplementedError("Subclasses must implement parse_article")
    
    def extract_title(self, response):
        """Extract article title."""
        if self.source and self.source.title_selector:
            return response.css(self.source.title_selector).get()
        return response.css('h1::text, .title::text, .headline::text').get()
    
    def extract_content(self, response):
        """Extract article content."""
        if self.source and self.source.content_selector:
            content = response.css(self.source.content_selector).getall()
        else:
            content = response.css('article p::text, .content p::text, .article-body p::text').getall()
        
        return ' '.join(content) if content else None
    
    def extract_author(self, response):
        """Extract article author."""
        if self.source and self.source.author_selector:
            return response.css(self.source.author_selector).get()
        return response.css('.author::text, .byline::text, [rel="author"]::text').get()
    
    def extract_date(self, response):
        """Extract publication date."""
        if self.source and self.source.date_selector:
            date_text = response.css(self.source.date_selector).get()
        else:
            date_text = response.css('time::attr(datetime), .date::text, .published::text').get()
        
        if date_text:
            try:
                # Try to parse various date formats
                from dateutil import parser
                return parser.parse(date_text)
            except:
                pass
        return None
    
    def extract_image(self, response):
        """Extract featured image URL."""
        if self.source and self.source.image_selector:
            return response.css(self.source.image_selector + '::attr(src)').get()
        return response.css('img[src*="featured"]::attr(src), .featured-image img::attr(src)').get()
    
    def create_article_item(self, response, **kwargs):
        """Create a news article item from response."""
        title = kwargs.get('title') or self.extract_title(response)
        content = kwargs.get('content') or self.extract_content(response)
        author = kwargs.get('author') or self.extract_author(response)
        pub_date = kwargs.get('pub_date') or self.extract_date(response)
        image_url = kwargs.get('image_url') or self.extract_image(response)
        
        if not title or not content:
            raise DropItem("Missing title or content")
        
        return {
            'title': title.strip(),
            'link': response.url,
            'description': kwargs.get('description', ''),
            'content': content.strip(),
            'pub_date': pub_date,
            'image_url': image_url,
            'video_url': kwargs.get('video_url'),
            'source_id': self.source.id if self.source else None,
            'source_name': self.source.name if self.source else None,
            'source_priority': self.source.priority if self.source else None,
            'keywords': kwargs.get('keywords', []),
            'creator': [author] if author else [],
            'country': [self.source.country] if self.source and self.source.country else [],
            'category': kwargs.get('category', []),
            'topics': kwargs.get('topics', []),
            'language': self.source.language if self.source else 'en',
            'processing_status': 'raw'
        } 