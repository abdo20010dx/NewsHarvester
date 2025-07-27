"""
Historical Spider for one-time crawling of historical news data
This spider will crawl historical data and then stop
"""
import scrapy
import feedparser
from datetime import datetime, timedelta
from urllib.parse import urlparse
import logging
from ..items import NewsItem
from data.countries import get_country_name
from data.news_sources import get_sources_for_country


class HistoricalSpider(scrapy.Spider):
    name = 'historical'
    
    def __init__(self, countries='all', max_articles_per_source=1000, *args, **kwargs):
        super(HistoricalSpider, self).__init__(*args, **kwargs)
        
        self.countries = countries.split(',') if countries != 'all' else ['US', 'GB', 'CA']  # Start with major countries
        self.max_articles_per_source = int(max_articles_per_source)
        self.articles_found = 0
        self.total_articles = 0
        
        # Setup logging
        self._logger = logging.getLogger(__name__)
        
        # Generate start URLs for all countries and sources
        self.start_urls = self._generate_start_urls()
        
    def _generate_start_urls(self):
        """Generate start URLs for all configured countries and sources"""
        urls = []
        
        for country_code in self.countries:
            country_sources = get_sources_for_country(country_code)
            if not country_sources:
                self._logger.warning(f"No sources configured for country: {country_code}")
                continue
                
            for source in country_sources.get('sources', []):
                for rss_feed in source.get('rss_feeds', []):
                    urls.append({
                        'url': rss_feed,
                        'country_code': country_code,
                        'source_name': source['name'],
                        'source_domain': source['domain'],
                        'language': country_sources.get('language', 'en')
                    })
        
        self._logger.info(f"Generated {len(urls)} RSS feeds for historical crawling")
        return urls
    
    def start_requests(self):
        """Start requests for all RSS feeds"""
        for url_data in self.start_urls:
            yield scrapy.Request(
                url=url_data['url'],
                callback=self.parse_rss_feed,
                meta={
                    'country_code': url_data['country_code'],
                    'source_name': url_data['source_name'],
                    'source_domain': url_data['source_domain'],
                    'language': url_data['language'],
                    'feed_url': url_data['url']
                },
                errback=self.handle_error,
                dont_filter=True
            )
    
    def parse_rss_feed(self, response):
        """Parse RSS feed and extract articles"""
        country_code = response.meta['country_code']
        source_name = response.meta['source_name']
        source_domain = response.meta['source_domain']
        language = response.meta['language']
        feed_url = response.meta['feed_url']
        
        self._logger.info(f"Parsing RSS feed: {feed_url} for {source_name} ({country_code})")
        
        try:
            # Parse RSS feed
            feed = feedparser.parse(response.text)
            
            if not feed.entries:
                self._logger.warning(f"No entries found in RSS feed: {feed_url}")
                return
            
            articles_processed = 0
            
            for entry in feed.entries:
                if articles_processed >= self.max_articles_per_source:
                    break
                
                try:
                    # Extract article data
                    article = self._extract_article_data(entry, country_code, source_name, source_domain, language, feed_url)
                    
                    if article:
                        yield article
                        articles_processed += 1
                        self.total_articles += 1
                        
                        if self.total_articles % 100 == 0:
                            self._logger.info(f"Processed {self.total_articles} articles so far...")
                
                except Exception as e:
                    self._logger.error(f"Error processing article from {feed_url}: {e}")
                    continue
            
            self._logger.info(f"Processed {articles_processed} articles from {source_name} ({country_code})")
            
        except Exception as e:
            self._logger.error(f"Error parsing RSS feed {feed_url}: {e}")
    
    def _extract_article_data(self, entry, country_code, source_name, source_domain, language, feed_url):
        """Extract article data from RSS entry"""
        try:
            # Extract title
            title = getattr(entry, 'title', '')
            if not title:
                return None
            
            # Extract link
            link = getattr(entry, 'link', '')
            if not link:
                return None
            
            # Extract description/summary
            description = ''
            if hasattr(entry, 'summary'):
                description = entry.summary
            elif hasattr(entry, 'description'):
                description = entry.description
            
            # Extract content
            content = description
            if hasattr(entry, 'content') and entry.content:
                content = entry.content[0].value if isinstance(entry.content, list) else entry.content
            
            # Extract publication date
            pub_date = None
            if hasattr(entry, 'published_parsed') and entry.published_parsed:
                pub_date = datetime(*entry.published_parsed[:6])
            elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
                pub_date = datetime(*entry.updated_parsed[:6])
            else:
                pub_date = datetime.now()
            
            # Extract image URL
            image_url = ''
            if hasattr(entry, 'media_content') and entry.media_content:
                image_url = entry.media_content[0]['url']
            elif hasattr(entry, 'media_thumbnail') and entry.media_thumbnail:
                image_url = entry.media_thumbnail[0]['url']
            
            # Extract author
            author = ''
            if hasattr(entry, 'author'):
                author = entry.author
            elif hasattr(entry, 'dc_creator'):
                author = entry.dc_creator
            
            # Extract categories/tags
            categories = []
            if hasattr(entry, 'tags') and entry.tags:
                categories = [tag.term for tag in entry.tags]
            elif hasattr(entry, 'category'):
                categories = [entry.category]
            
            # Create NewsItem
            item = NewsItem()
            item['title'] = title
            item['link'] = link
            item['description'] = description
            item['content'] = content
            item['pub_date'] = pub_date
            item['image_url'] = image_url
            item['video_url'] = ''
            item['source_name'] = source_name
            item['source_domain'] = source_domain
            item['source_country'] = country_code
            item['source_language'] = language
            item['author'] = author
            item['creator'] = [author] if author else []
            item['category'] = categories
            item['tags'] = categories
            item['keywords'] = []
            item['country'] = [get_country_name(country_code)]
            item['region'] = []
            item['city'] = []
            item['language'] = language
            item['crawl_type'] = 'historical'
            item['spider_name'] = self.name
            item['feed_url'] = feed_url
            
            return item
            
        except Exception as e:
            self._logger.error(f"Error extracting article data: {e}")
            return None
    
    def handle_error(self, failure):
        """Handle request errors"""
        self._logger.error(f"Request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider is closed"""
        self._logger.info(f"Historical spider finished. Total articles processed: {self.total_articles}")
        self._logger.info(f"Spider closed with reason: {reason}") 