import scrapy
import feedparser
from urllib.parse import urljoin
from .base_spider import BaseNewsSpider


class RSSSpider(BaseNewsSpider):
    """Spider for crawling RSS feeds."""
    
    name = 'rss'
    
    def start_requests(self):
        """Start requests from RSS feed."""
        if not self.source or not self.source.rss_feed:
            self.logger.error("No RSS feed configured for source")
            return
        
        yield scrapy.Request(
            url=self.source.rss_feed,
            callback=self.parse_rss,
            meta={'source': self.source}
        )
    
    def parse_rss(self, response):
        """Parse RSS feed and extract article links."""
        feed = feedparser.parse(response.text)
        
        for entry in feed.entries:
            self.articles_found += 1
            
            # Extract basic info from RSS entry
            title = entry.get('title', '')
            description = entry.get('description', '')
            link = entry.get('link', '')
            pub_date = entry.get('published_parsed')
            
            if pub_date:
                from datetime import datetime
                pub_date = datetime(*pub_date[:6])
            
            # Follow link to get full article content
            if link:
                yield scrapy.Request(
                    url=link,
                    callback=self.parse_article,
                    meta={
                        'title': title,
                        'description': description,
                        'pub_date': pub_date,
                        'source': self.source
                    }
                )
    
    def parse_article(self, response):
        """Parse individual article page."""
        try:
            article_data = self.create_article_item(
                response,
                title=response.meta.get('title'),
                description=response.meta.get('description'),
                pub_date=response.meta.get('pub_date')
            )
            
            yield article_data
            
        except Exception as e:
            self.logger.error(f"Error parsing article {response.url}: {str(e)}")
            if self.crawl_session:
                self.crawl_session.errors = f"{self.crawl_session.errors or ''}\n{str(e)}"
                self.crawl_session.save() 