import scrapy
import feedparser
from datetime import datetime
from urllib.parse import urljoin, urlparse
from ..items import NewsItem
import logging
import re
import json
import os

logger = logging.getLogger(__name__)

class GlobalRSSSpider(scrapy.Spider):
    name = 'global_rss'
    allowed_domains = ['*']  # Allow all domains for global RSS feeds
    
    # Global news sources organized by country and category
    global_news_sources = {
        'US': {
            'general': [
                'https://feeds.nbcnews.com/nbcnews/public/world',
                'https://feeds.nbcnews.com/nbcnews/public/politics',
                'https://feeds.nbcnews.com/nbcnews/public/technology',
                'https://feeds.nbcnews.com/nbcnews/public/business',
                'https://feeds.nbcnews.com/nbcnews/public/entertainment',
                'https://feeds.nbcnews.com/nbcnews/public/sports',
                'https://feeds.nbcnews.com/nbcnews/public/health',
                'https://rss.cnn.com/rss/edition.rss',
                'https://rss.cnn.com/rss/edition_world.rss',
                'https://rss.cnn.com/rss/edition_us.rss',
                'https://rss.cnn.com/rss/edition_business.rss',
                'https://rss.cnn.com/rss/edition_technology.rss',
                'https://rss.cnn.com/rss/edition_entertainment.rss',
                'https://rss.cnn.com/rss/edition_sport.rss',
                'https://feeds.foxnews.com/foxnews/latest',
                'https://feeds.foxnews.com/foxnews/world',
                'https://feeds.foxnews.com/foxnews/politics',
                'https://feeds.foxnews.com/foxnews/business',
                'https://feeds.foxnews.com/foxnews/tech',
                'https://feeds.foxnews.com/foxnews/entertainment',
                'https://feeds.foxnews.com/foxnews/sports',
                'https://feeds.foxnews.com/foxnews/health',
                'https://rss.msn.com/en-us/news',
                'https://rss.msn.com/en-us/news/world',
                'https://rss.msn.com/en-us/news/politics',
                'https://rss.msn.com/en-us/news/technology',
                'https://rss.msn.com/en-us/news/business',
                'https://rss.msn.com/en-us/news/entertainment',
                'https://rss.msn.com/en-us/news/sports',
                'https://rss.msn.com/en-us/news/health',
                'https://feeds.arstechnica.com/arstechnica/index',
                'https://feeds.arstechnica.com/arstechnica/technology-lab',
                'https://feeds.arstechnica.com/arstechnica/gadgets',
                'https://feeds.arstechnica.com/arstechnica/science',
            ],
            'business': [
                'https://feeds.nbcnews.com/nbcnews/public/business',
                'https://rss.cnn.com/rss/edition_business.rss',
                'https://feeds.foxnews.com/foxnews/business',
                'https://feeds.bloomberg.com/markets/news.rss',
                'https://feeds.bloomberg.com/politics/news.rss',
                'https://feeds.bloomberg.com/technology/news.rss',
                'https://www.wsj.com/xml/rss/3_7085.xml',  # WSJ Business
                'https://www.wsj.com/xml/rss/3_7087.xml',  # WSJ Technology
                'https://www.wsj.com/xml/rss/3_7089.xml',  # WSJ World
            ],
            'technology': [
                'https://feeds.nbcnews.com/nbcnews/public/technology',
                'https://rss.cnn.com/rss/edition_technology.rss',
                'https://feeds.foxnews.com/foxnews/tech',
                'https://feeds.bloomberg.com/technology/news.rss',
                'https://www.wsj.com/xml/rss/3_7087.xml',  # WSJ Technology
                'https://feeds.arstechnica.com/arstechnica/index',
                'https://feeds.arstechnica.com/arstechnica/technology-lab',
                'https://feeds.arstechnica.com/arstechnica/gadgets',
                'https://feeds.arstechnica.com/arstechnica/science',
            ],
            'politics': [
                'https://feeds.nbcnews.com/nbcnews/public/politics',
                'https://rss.cnn.com/rss/edition_politics.rss',
                'https://feeds.foxnews.com/foxnews/politics',
                'https://feeds.bloomberg.com/politics/news.rss',
                'https://www.wsj.com/xml/rss/3_7085.xml',  # WSJ Politics
            ],
            'sports': [
                'https://feeds.nbcnews.com/nbcnews/public/sports',
                'https://rss.cnn.com/rss/edition_sport.rss',
                'https://feeds.foxnews.com/foxnews/sports',
            ],
            'entertainment': [
                'https://feeds.nbcnews.com/nbcnews/public/entertainment',
                'https://rss.cnn.com/rss/edition_entertainment.rss',
                'https://feeds.foxnews.com/foxnews/entertainment',
            ],
            'health': [
                'https://feeds.nbcnews.com/nbcnews/public/health',
                'https://feeds.foxnews.com/foxnews/health',
            ],
        },
        'UK': {
            'general': [
                'https://feeds.bbci.co.uk/news/rss.xml',
                'https://feeds.bbci.co.uk/news/world/rss.xml',
                'https://feeds.bbci.co.uk/news/uk/rss.xml',
                'https://feeds.bbci.co.uk/news/business/rss.xml',
                'https://feeds.bbci.co.uk/news/technology/rss.xml',
                'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml',
                'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
                'https://feeds.bbci.co.uk/news/health/rss.xml',
                'https://www.theguardian.com/world/rss',
                'https://www.theguardian.com/uk/rss',
                'https://www.theguardian.com/business/rss',
                'https://www.theguardian.com/technology/rss',
                'https://www.theguardian.com/sport/rss',
                'https://www.theguardian.com/culture/rss',
                'https://www.theguardian.com/science/rss',
                'https://www.theguardian.com/society/rss',
                'https://www.independent.co.uk/news/world/rss',
                'https://www.independent.co.uk/news/uk/rss',
                'https://www.independent.co.uk/news/business/rss',
                'https://www.independent.co.uk/news/science/rss',
                'https://www.independent.co.uk/sport/rss',
                'https://www.independent.co.uk/arts-entertainment/rss',
            ],
            'business': [
                'https://feeds.bbci.co.uk/news/business/rss.xml',
                'https://www.theguardian.com/business/rss',
                'https://www.independent.co.uk/news/business/rss',
                'https://www.ft.com/rss/home',
                'https://www.ft.com/rss/world',
                'https://www.ft.com/rss/companies',
                'https://www.ft.com/rss/markets',
                'https://www.ft.com/rss/technology',
            ],
            'technology': [
                'https://feeds.bbci.co.uk/news/technology/rss.xml',
                'https://www.theguardian.com/technology/rss',
                'https://www.independent.co.uk/news/science/rss',
                'https://www.ft.com/rss/technology',
            ],
            'politics': [
                'https://feeds.bbci.co.uk/news/politics/rss.xml',
                'https://www.theguardian.com/politics/rss',
                'https://www.independent.co.uk/news/uk/politics/rss',
            ],
            'sports': [
                'https://feeds.bbci.co.uk/sport/rss.xml',
                'https://www.theguardian.com/sport/rss',
                'https://www.independent.co.uk/sport/rss',
            ],
            'entertainment': [
                'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml',
                'https://www.theguardian.com/culture/rss',
                'https://www.independent.co.uk/arts-entertainment/rss',
            ],
            'health': [
                'https://feeds.bbci.co.uk/news/health/rss.xml',
                'https://www.theguardian.com/society/rss',
            ],
        },
        'Canada': {
            'general': [
                'https://www.cbc.ca/cmlink/rss-topstories',
                'https://www.cbc.ca/cmlink/rss-world',
                'https://www.cbc.ca/cmlink/rss-canada',
                'https://www.cbc.ca/cmlink/rss-business',
                'https://www.cbc.ca/cmlink/rss-technology',
                'https://www.cbc.ca/cmlink/rss-arts',
                'https://www.cbc.ca/cmlink/rss-sports',
                'https://www.cbc.ca/cmlink/rss-health',
                'https://www.theglobeandmail.com/rss.xml',
                'https://www.theglobeandmail.com/world/rss.xml',
                'https://www.theglobeandmail.com/canada/rss.xml',
                'https://www.theglobeandmail.com/business/rss.xml',
                'https://www.theglobeandmail.com/technology/rss.xml',
                'https://www.theglobeandmail.com/sports/rss.xml',
                'https://www.theglobeandmail.com/arts/rss.xml',
            ],
        },
        'Australia': {
            'general': [
                'https://www.abc.net.au/news/feed/45910/rss.xml',
                'https://www.abc.net.au/news/feed/45916/rss.xml',
                'https://www.abc.net.au/news/feed/45908/rss.xml',
                'https://www.abc.net.au/news/feed/45912/rss.xml',
                'https://www.abc.net.au/news/feed/45914/rss.xml',
                'https://www.abc.net.au/news/feed/45918/rss.xml',
                'https://www.abc.net.au/news/feed/45920/rss.xml',
                'https://www.abc.net.au/news/feed/45922/rss.xml',
                'https://www.smh.com.au/rss/feed.xml',
                'https://www.smh.com.au/rss/world.xml',
                'https://www.smh.com.au/rss/national.xml',
                'https://www.smh.com.au/rss/business.xml',
                'https://www.smh.com.au/rss/technology.xml',
                'https://www.smh.com.au/rss/sport.xml',
                'https://www.smh.com.au/rss/entertainment.xml',
            ],
        },
        'Germany': {
            'general': [
                'https://www.spiegel.de/international/index.rss',
                'https://www.spiegel.de/politik/index.rss',
                'https://www.spiegel.de/wirtschaft/index.rss',
                'https://www.spiegel.de/wissenschaft/index.rss',
                'https://www.spiegel.de/sport/index.rss',
                'https://www.spiegel.de/kultur/index.rss',
                'https://www.dw.com/rss/rss-de-all',
                'https://www.dw.com/rss/rss-de-world',
                'https://www.dw.com/rss/rss-de-business',
                'https://www.dw.com/rss/rss-de-culture',
                'https://www.dw.com/rss/rss-de-sports',
                'https://www.dw.com/rss/rss-de-science',
            ],
        },
        'France': {
            'general': [
                'https://www.lemonde.fr/rss/une.xml',
                'https://www.lemonde.fr/rss/international.xml',
                'https://www.lemonde.fr/rss/politique.xml',
                'https://www.lemonde.fr/rss/economie.xml',
                'https://www.lemonde.fr/rss/technologies.xml',
                'https://www.lemonde.fr/rss/sport.xml',
                'https://www.lemonde.fr/rss/culture.xml',
                'https://www.lemonde.fr/rss/sciences.xml',
                'https://www.lefigaro.fr/rss/figaro_actualites.xml',
                'https://www.lefigaro.fr/rss/figaro_international.xml',
                'https://www.lefigaro.fr/rss/figaro_politique.xml',
                'https://www.lefigaro.fr/rss/figaro_economie.xml',
                'https://www.lefigaro.fr/rss/figaro_technologies.xml',
                'https://www.lefigaro.fr/rss/figaro_sport.xml',
                'https://www.lefigaro.fr/rss/figaro_culture.xml',
            ],
        },
        'Japan': {
            'general': [
                'https://www.japantimes.co.jp/feed/',
                'https://www.japantimes.co.jp/feed/news/',
                'https://www.japantimes.co.jp/feed/business/',
                'https://www.japantimes.co.jp/feed/technology/',
                'https://www.japantimes.co.jp/feed/sports/',
                'https://www.japantimes.co.jp/feed/entertainment/',
                'https://www.japantimes.co.jp/feed/health/',
                'https://www3.nhk.or.jp/rss/news/cat0.xml',
                'https://www3.nhk.or.jp/rss/news/cat1.xml',
                'https://www3.nhk.or.jp/rss/news/cat2.xml',
                'https://www3.nhk.or.jp/rss/news/cat3.xml',
                'https://www3.nhk.or.jp/rss/news/cat4.xml',
                'https://www3.nhk.or.jp/rss/news/cat5.xml',
            ],
        },
        'India': {
            'general': [
                'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
                'https://timesofindia.indiatimes.com/rssfeedworld.cms',
                'https://timesofindia.indiatimes.com/rssfeedindia.cms',
                'https://timesofindia.indiatimes.com/rssfeedbusiness.cms',
                'https://timesofindia.indiatimes.com/rssfeedtechnology.cms',
                'https://timesofindia.indiatimes.com/rssfeedsports.cms',
                'https://timesofindia.indiatimes.com/rssfeedentertainment.cms',
                'https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml',
                'https://www.hindustantimes.com/feeds/rss/world-news/rssfeed.xml',
                'https://www.hindustantimes.com/feeds/rss/business/rssfeed.xml',
                'https://www.hindustantimes.com/feeds/rss/technology/rssfeed.xml',
                'https://www.hindustantimes.com/feeds/rss/sports/rssfeed.xml',
                'https://www.hindustantimes.com/feeds/rss/entertainment/rssfeed.xml',
                'https://www.ndtv.com/india-news/rss',
                'https://www.ndtv.com/world-news/rss',
                'https://www.ndtv.com/business/rss',
                'https://www.ndtv.com/technology/rss',
                'https://www.ndtv.com/sports/rss',
                'https://www.ndtv.com/entertainment/rss',
            ],
        },
        'China': {
            'general': [
                'https://www.scmp.com/rss/91/feed',
                'https://www.scmp.com/rss/92/feed',
                'https://www.scmp.com/rss/93/feed',
                'https://www.scmp.com/rss/94/feed',
                'https://www.scmp.com/rss/95/feed',
                'https://www.scmp.com/rss/96/feed',
                'https://www.scmp.com/rss/97/feed',
                'https://www.scmp.com/rss/98/feed',
            ],
        },
        'Brazil': {
            'general': [
                'https://g1.globo.com/rss/g1/',
                'https://g1.globo.com/rss/g1/mundo/',
                'https://g1.globo.com/rss/g1/politica/',
                'https://g1.globo.com/rss/g1/economia/',
                'https://g1.globo.com/rss/g1/tecnologia/',
                'https://g1.globo.com/rss/g1/esporte/',
                'https://g1.globo.com/rss/g1/entretenimento/',
                'https://g1.globo.com/rss/g1/ciencia-e-saude/',
            ],
        },
        'Mexico': {
            'general': [
                'https://www.eluniversal.com.mx/rss.xml',
                'https://www.eluniversal.com.mx/rss/nacion.xml',
                'https://www.eluniversal.com.mx/rss/mundo.xml',
                'https://www.eluniversal.com.mx/rss/politica.xml',
                'https://www.eluniversal.com.mx/rss/economia.xml',
                'https://www.eluniversal.com.mx/rss/tecnologia.xml',
                'https://www.eluniversal.com.mx/rss/deportes.xml',
                'https://www.eluniversal.com.mx/rss/espectaculos.xml',
            ],
        },
        'South Africa': {
            'general': [
                'https://www.news24.com/rss',
                'https://www.news24.com/rss/World',
                'https://www.news24.com/rss/SouthAfrica',
                'https://www.news24.com/rss/Business',
                'https://www.news24.com/rss/Technology',
                'https://www.news24.com/rss/Sport',
                'https://www.news24.com/rss/Entertainment',
            ],
        },
        'Egypt': {
            'general': [
                'https://www.almasryalyoum.com/rss',
                'https://www.almasryalyoum.com/rss/world',
                'https://www.almasryalyoum.com/rss/local',
                'https://www.almasryalyoum.com/rss/business',
                'https://www.almasryalyoum.com/rss/sports',
                'https://www.almasryalyoum.com/rss/entertainment',
            ],
        },
    }
    
    custom_settings = {
        'DOWNLOAD_DELAY': 1,
        'CONCURRENT_REQUESTS_PER_DOMAIN': 2,
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
    
    def __init__(self, *args, **kwargs):
        super(GlobalRSSSpider, self).__init__(*args, **kwargs)
        self.articles_found = 0
        self.max_articles = int(kwargs.get('max_articles', 1000))
        self.target_countries = kwargs.get('countries', 'all').split(',')
        self.target_categories = kwargs.get('categories', 'all').split(',')
        
        # If 'all' is specified, use all countries and categories
        if 'all' in self.target_countries:
            self.target_countries = list(self.global_news_sources.keys())
        if 'all' in self.target_categories:
            self.target_categories = ['general', 'business', 'technology', 'politics', 'sports', 'entertainment', 'health']
    
    def start_requests(self):
        """Start requests for all RSS feeds"""
        headers = {
            'Accept': 'application/rss+xml, application/xml, text/xml, text/html, */*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        }
        
        total_feeds = 0
        
        for country in self.target_countries:
            if country not in self.global_news_sources:
                logger.warning(f"Country {country} not found in news sources")
                continue
                
            for category in self.target_categories:
                if category not in self.global_news_sources[country]:
                    logger.warning(f"Category {category} not found for country {country}")
                    continue
                
                feeds = self.global_news_sources[country][category]
                for feed_url in feeds:
                    total_feeds += 1
                    yield scrapy.Request(
                        url=feed_url,
                        headers=headers,
                        callback=self.parse_rss,
                        meta={
                            'country': country,
                            'category': category,
                            'source': 'rss',
                            'dont_cache': True
                        },
                        errback=self.handle_error
                    )
        
        logger.info(f"Starting collection from {total_feeds} RSS feeds across {len(self.target_countries)} countries")
    
    def parse_rss(self, response):
        """Parse RSS feed responses"""
        country = response.meta.get('country', 'Unknown')
        category = response.meta.get('category', 'general')
        
        logger.info(f"Parsing RSS feed: {response.url} (Country: {country}, Category: {category})")
        
        try:
            feed = feedparser.parse(response.text)
            
            if feed.bozo:
                logger.warning(f"RSS feed parsing error: {feed.bozo_exception}")
            
            entries = feed.entries
            logger.info(f"Found {len(entries)} entries in RSS feed")
            
            for entry in entries[:30]:  # Limit to first 30 entries per feed
                if self.articles_found >= int(self.max_articles):
                    break
                    
                item = self.create_article_from_rss(entry, country, category)
                if item:
                    self.articles_found += 1
                    yield item
                    
        except Exception as e:
            logger.error(f"Error parsing RSS feed {response.url}: {e}")
    
    def create_article_from_rss(self, entry, country, category):
        """Create article from RSS entry"""
        try:
            item = NewsItem()
            
            # Extract title
            title = entry.get('title', '')
            if not title:
                return None
            
            # Extract link
            link = entry.get('link', '')
            if not link:
                return None
            
            # Extract description/content
            description = entry.get('summary', '') or entry.get('description', '')
            
            # Extract publication date
            pub_date = self.parse_rss_date(entry.get('published', ''))
            
            # Extract author
            author = entry.get('author', '')
            
            # Extract image if available
            image_url = None
            if 'media_content' in entry:
                for media in entry['media_content']:
                    if media.get('type', '').startswith('image'):
                        image_url = media.get('url')
                        break
            
            # If no media_content, try to extract from description
            if not image_url and description:
                img_match = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', description)
                if img_match:
                    image_url = img_match.group(1)
            
            # Clean description (remove HTML tags)
            clean_description = re.sub(r'<[^>]+>', '', description)
            
            # Determine source name from URL
            source_name = self.extract_source_name(link)
            
            # Create item
            item['title'] = title
            item['link'] = link
            item['description'] = clean_description
            item['content'] = clean_description
            item['pub_date'] = pub_date
            item['image_url'] = image_url
            item['source_name'] = source_name
            item['category'] = [category.title()]
            item['country'] = [country]
            item['keywords'] = self.extract_keywords_from_text(title + ' ' + clean_description)
            item['creator'] = [author] if author else []
            
            return item
            
        except Exception as e:
            logger.error(f"Error creating article from RSS: {e}")
            return None
    
    def extract_source_name(self, url):
        """Extract source name from URL"""
        try:
            domain = urlparse(url).netloc
            # Remove www. prefix and get the main domain
            if domain.startswith('www.'):
                domain = domain[4:]
            
            # Map common domains to readable names
            source_mapping = {
                'bbc.co.uk': 'BBC',
                'theguardian.com': 'The Guardian',
                'reuters.com': 'Reuters',
                'cnn.com': 'CNN',
                'foxnews.com': 'Fox News',
                'nbcnews.com': 'NBC News',
                'msn.com': 'MSN',
                'wsj.com': 'Wall Street Journal',
                'bloomberg.com': 'Bloomberg',
                'arstechnica.com': 'Ars Technica',
                'espn.com': 'ESPN',
                'eonline.com': 'E! Online',
                'webmd.com': 'WebMD',
                'independent.co.uk': 'The Independent',
                'telegraph.co.uk': 'The Telegraph',
                'ft.com': 'Financial Times',
                'skysports.com': 'Sky Sports',
                'cbc.ca': 'CBC',
                'theglobeandmail.com': 'The Globe and Mail',
                'abc.net.au': 'ABC Australia',
                'smh.com.au': 'Sydney Morning Herald',
                'spiegel.de': 'Der Spiegel',
                'dw.com': 'Deutsche Welle',
                'lemonde.fr': 'Le Monde',
                'lefigaro.fr': 'Le Figaro',
                'japantimes.co.jp': 'The Japan Times',
                'nhk.or.jp': 'NHK',
                'timesofindia.indiatimes.com': 'Times of India',
                'hindustantimes.com': 'Hindustan Times',
                'ndtv.com': 'NDTV',
                'scmp.com': 'South China Morning Post',
                'g1.globo.com': 'G1',
                'eluniversal.com.mx': 'El Universal',
                'news24.com': 'News24',
                'almasryalyoum.com': 'Al-Masry Al-Youm',
            }
            
            return source_mapping.get(domain, domain.split('.')[0].title())
            
        except Exception as e:
            logger.error(f"Error extracting source name: {e}")
            return 'Unknown'
    
    def parse_rss_date(self, date_str):
        """Parse date from RSS entry"""
        if not date_str:
            return datetime.now()
        
        try:
            import email.utils
            parsed_date = email.utils.parsedate_to_datetime(date_str)
            return parsed_date
        except:
            try:
                return datetime.fromisoformat(date_str.replace('Z', '+00:00'))
            except:
                return datetime.now()
    
    def extract_keywords_from_text(self, text):
        """Extract keywords from text using simple NLP"""
        if not text:
            return []
        
        # Simple keyword extraction
        stop_words = {
            'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
            'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
            'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
            'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those',
            'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her',
            'us', 'them', 'my', 'your', 'his', 'her', 'its', 'our', 'their',
            'says', 'said', 'new', 'news', 'report', 'reports', 'according',
            'from', 'into', 'during', 'including', 'until', 'against', 'among',
            'throughout', 'despite', 'towards', 'upon', 'concerning', 'to',
            'of', 'in', 'for', 'on', 'with', 'at', 'by', 'about', 'against',
            'between', 'into', 'through', 'during', 'before', 'after', 'above',
            'below', 'from', 'up', 'down', 'out', 'off', 'over', 'under', 'again',
            'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
            'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other',
            'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
            'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don',
            'should', 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren',
            'couldn', 'didn', 'doesn', 'hadn', 'hasn', 'haven', 'isn', 'ma',
            'mightn', 'mustn', 'needn', 'shan', 'shouldn', 'wasn', 'weren',
            'won', 'wouldn'
        }
        
        # Clean text
        text = re.sub(r'[^\w\s]', ' ', text.lower())
        words = text.split()
        
        # Filter out stop words and short words
        keywords = [word for word in words if word not in stop_words and len(word) > 3]
        
        # Return unique keywords (limit to 10)
        return list(set(keywords))[:10]
    
    def handle_error(self, failure):
        """Handle request failures"""
        logger.warning(f"RSS feed request failed: {failure.value}")
    
    def closed(self, reason):
        """Called when spider closes"""
        logger.info(f"Global RSS spider closed: {reason}")
        logger.info(f"Total articles found: {self.articles_found}")
        logger.info(f"Target countries: {self.target_countries}")
        logger.info(f"Target categories: {self.target_categories}") 