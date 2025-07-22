import scrapy
from scrapy.exceptions import DropItem
from django.utils import timezone
from articles.models import NewsArticle


class NewsArticlePipeline:
    """Pipeline for processing and saving news articles."""
    
    def process_item(self, item, spider):
        """Process scraped article item."""
        try:
            # Check if article already exists
            if item.get('link'):
                existing_article = NewsArticle.objects.filter(link=item['link']).first()
                if existing_article:
                    spider.logger.info(f"Article already exists: {item['link']}")
                    return item
            
            # Create new article
            article = NewsArticle(
                title=item.get('title'),
                link=item.get('link'),
                description=item.get('description'),
                content=item.get('content'),
                pub_date=item.get('pub_date'),
                image_url=item.get('image_url'),
                video_url=item.get('video_url'),
                source_id=item.get('source_id'),
                source_name=item.get('source_name'),
                source_priority=item.get('source_priority'),
                keywords=item.get('keywords', []),
                creator=item.get('creator', []),
                country=item.get('country', []),
                category=item.get('category', []),
                topics=item.get('topics', []),
                language=item.get('language', 'en'),
                processing_status='raw'
            )
            
            article.save()
            spider.articles_saved += 1
            spider.logger.info(f"Saved article: {article.title}")
            
            return item
            
        except Exception as e:
            spider.logger.error(f"Error saving article: {str(e)}")
            if hasattr(spider, 'crawl_session') and spider.crawl_session:
                spider.crawl_session.errors = f"{spider.crawl_session.errors or ''}\n{str(e)}"
                spider.crawl_session.save()
            raise DropItem(f"Failed to save article: {str(e)}")


class DuplicateFilterPipeline:
    """Pipeline to filter duplicate articles."""
    
    def __init__(self):
        self.seen_links = set()
        self.seen_titles = set()
    
    def process_item(self, item, spider):
        """Filter duplicate items based on link and title."""
        link = item.get('link')
        title = item.get('title')
        
        if link in self.seen_links:
            raise DropItem(f"Duplicate link: {link}")
        
        if title in self.seen_titles:
            raise DropItem(f"Duplicate title: {title}")
        
        self.seen_links.add(link)
        self.seen_titles.add(title)
        
        return item


class ContentValidationPipeline:
    """Pipeline to validate article content."""
    
    def process_item(self, item, spider):
        """Validate article content before saving."""
        # Check required fields
        if not item.get('title'):
            raise DropItem("Missing title")
        
        if not item.get('content'):
            raise DropItem("Missing content")
        
        if not item.get('link'):
            raise DropItem("Missing link")
        
        # Check content length
        if len(item.get('content', '')) < 50:
            raise DropItem("Content too short")
        
        # Check title length
        if len(item.get('title', '')) < 10:
            raise DropItem("Title too short")
        
        return item


class DataCleaningPipeline:
    """Pipeline to clean and normalize article data."""
    
    def process_item(self, item, spider):
        """Clean and normalize article data."""
        # Clean title
        if item.get('title'):
            item['title'] = item['title'].strip()
        
        # Clean content
        if item.get('content'):
            item['content'] = item['content'].strip()
            # Remove extra whitespace
            item['content'] = ' '.join(item['content'].split())
        
        # Clean description
        if item.get('description'):
            item['description'] = item['description'].strip()
        
        # Normalize language code
        if item.get('language'):
            item['language'] = item['language'].lower()[:2]
        
        # Ensure lists are not None
        for field in ['keywords', 'creator', 'country', 'category', 'topics']:
            if item.get(field) is None:
                item[field] = []
        
        return item 