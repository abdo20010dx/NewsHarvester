from django.db import models
from django.utils import timezone


class NewsSource(models.Model):
    """Model to store news source configurations."""
    
    name = models.CharField(max_length=255, unique=True)
    domain = models.CharField(max_length=255)
    url = models.URLField()
    rss_feed = models.URLField(blank=True, null=True)
    priority = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    language = models.CharField(max_length=10, default='en')
    country = models.CharField(max_length=10, blank=True, null=True)
    
    # Crawler settings
    crawl_interval = models.IntegerField(default=3600)  # seconds
    last_crawled = models.DateTimeField(blank=True, null=True)
    next_crawl = models.DateTimeField(blank=True, null=True)
    
    # Selectors for different elements
    title_selector = models.CharField(max_length=255, blank=True, null=True)
    content_selector = models.CharField(max_length=255, blank=True, null=True)
    author_selector = models.CharField(max_length=255, blank=True, null=True)
    date_selector = models.CharField(max_length=255, blank=True, null=True)
    image_selector = models.CharField(max_length=255, blank=True, null=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['priority', 'name']
    
    def __str__(self):
        return f"{self.name} ({self.domain})"
    
    def should_crawl(self):
        """Check if source should be crawled based on interval."""
        if not self.is_active:
            return False
        if not self.next_crawl:
            return True
        return timezone.now() >= self.next_crawl


class CrawlSession(models.Model):
    """Model to track crawling sessions."""
    
    source = models.ForeignKey(NewsSource, on_delete=models.CASCADE)
    started_at = models.DateTimeField(auto_now_add=True)
    finished_at = models.DateTimeField(blank=True, null=True)
    status = models.CharField(
        max_length=20,
        choices=[
            ('running', 'Running'),
            ('completed', 'Completed'),
            ('failed', 'Failed'),
            ('cancelled', 'Cancelled')
        ],
        default='running'
    )
    articles_found = models.IntegerField(default=0)
    articles_saved = models.IntegerField(default=0)
    errors = models.TextField(blank=True, null=True)
    
    class Meta:
        ordering = ['-started_at']
    
    def __str__(self):
        return f"{self.source.name} - {self.started_at}"
    
    @property
    def duration(self):
        """Calculate crawl duration."""
        if self.finished_at:
            return self.finished_at - self.started_at
        return timezone.now() - self.started_at 