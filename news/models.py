from django.db import models
import uuid
from django.contrib.postgres.fields import ArrayField
import hashlib
from datetime import datetime


class Post(models.Model):
    """Model to store scraped news articles in posts table"""
    id = models.BigAutoField(primary_key=True)
    # post_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)  # Commented out as column doesn't exist

    # Core article fields
    title = models.CharField(max_length=500, blank=True, null=True)
    link = models.TextField(unique=True, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    
    # Publication and language info
    pub_date = models.DateTimeField(blank=True, null=True)
    language = models.CharField(max_length=10, blank=True, null=True)  # ISO language code (en, fr, es, etc.)
    
    # Media
    image_url = models.TextField(blank=True, null=True)
    video_url = models.TextField(blank=True, null=True)
    
    # Source information
    source_name = models.CharField(max_length=255, blank=True, null=True)
    source_domain = models.CharField(max_length=255, blank=True, null=True)
    source_country = models.CharField(max_length=10, blank=True, null=True)  # ISO country code
    source_language = models.CharField(max_length=10, blank=True, null=True)
    
    # Authors and contributors
    author = models.CharField(max_length=255, blank=True, null=True)
    creator = ArrayField(models.TextField(), blank=True, default=list)
    
    # Classification and categorization
    category = ArrayField(models.TextField(), blank=True, default=list)
    tags = ArrayField(models.TextField(), blank=True, default=list)
    keywords = ArrayField(models.TextField(), blank=True, default=list)
    
    # Geographic and demographic info
    country = ArrayField(models.TextField(), blank=True, default=list)
    region = ArrayField(models.TextField(), blank=True, default=list)
    city = ArrayField(models.TextField(), blank=True, default=list)
    
    # Content analysis
    sentiment = models.CharField(max_length=50, blank=True, null=True)
    sentiment_score = models.FloatField(blank=True, null=True)
    readability_score = models.FloatField(blank=True, null=True)
    word_count = models.IntegerField(blank=True, null=True)
    
    # Processing and quality
    content_hash = models.CharField(max_length=64, unique=True, blank=True, null=True)
    processing_status = models.CharField(
        max_length=50,
        choices=[
            ('raw', 'Raw'),
            ('processed', 'Processed'),
            ('error', 'Error'),
            ('filtered', 'Filtered')
        ],
        default='raw'
    )
    quality_score = models.FloatField(blank=True, null=True)
    
    # Crawling metadata
    crawl_type = models.CharField(
        max_length=20,
        choices=[
            ('historical', 'Historical'),
            ('live', 'Live')
        ],
        default='live'
    )
    spider_name = models.CharField(max_length=100, blank=True, null=True)
    feed_url = models.TextField(blank=True, null=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    crawled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'posts'
        managed = True
        indexes = [
            models.Index(fields=['pub_date']),
            models.Index(fields=['source_country']),
            models.Index(fields=['language']),
            models.Index(fields=['crawl_type']),
            models.Index(fields=['processing_status']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.title or 'Untitled'} | {self.source_name} | {self.pub_date}"

    def save(self, *args, **kwargs):
        # Generate content hash for deduplication
        if (self.title or self.content or self.link) and not self.content_hash:
            content_str = f"{self.title or ''}{self.content or ''}{self.link or ''}"
            self.content_hash = hashlib.sha256(content_str.encode()).hexdigest()
        
        # Set default language if not provided
        if not self.language and self.source_language:
            self.language = self.source_language
        
        # Calculate word count if content is available
        if self.content and not self.word_count:
            self.word_count = len(self.content.split())
        
        super().save(*args, **kwargs)


class CrawlSchedule(models.Model):
    """Model to manage crawling schedules for different countries and sources"""
    id = models.BigAutoField(primary_key=True)
    
    # Crawl configuration
    country_code = models.CharField(max_length=10)  # ISO country code
    source_domain = models.CharField(max_length=255)
    crawl_type = models.CharField(
        max_length=20,
        choices=[
            ('historical', 'Historical'),
            ('live', 'Live')
        ],
        default='live'
    )
    
    # Schedule settings
    is_active = models.BooleanField(default=True)
    interval_minutes = models.IntegerField(default=15)  # For live crawls
    last_crawl = models.DateTimeField(blank=True, null=True)
    next_crawl = models.DateTimeField(blank=True, null=True)
    
    # Crawl statistics
    total_articles = models.IntegerField(default=0)
    success_count = models.IntegerField(default=0)
    error_count = models.IntegerField(default=0)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'crawl_schedule'
        unique_together = ['country_code', 'source_domain', 'crawl_type']

    def __str__(self):
        return f"{self.country_code} - {self.source_domain} - {self.crawl_type}"


class CrawlLog(models.Model):
    """Model to log crawling activities and errors"""
    id = models.BigAutoField(primary_key=True)
    
    # Crawl session info
    spider_name = models.CharField(max_length=100)
    country_code = models.CharField(max_length=10)
    source_domain = models.CharField(max_length=255)
    crawl_type = models.CharField(max_length=20)
    
    # Crawl results
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(blank=True, null=True)
    duration_seconds = models.FloatField(blank=True, null=True)
    
    # Statistics
    articles_found = models.IntegerField(default=0)
    articles_saved = models.IntegerField(default=0)
    articles_skipped = models.IntegerField(default=0)
    errors_count = models.IntegerField(default=0)
    
    # Status
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
    
    # Error details
    error_message = models.TextField(blank=True, null=True)
    error_traceback = models.TextField(blank=True, null=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'crawl_log'
        indexes = [
            models.Index(fields=['spider_name']),
            models.Index(fields=['country_code']),
            models.Index(fields=['crawl_type']),
            models.Index(fields=['start_time']),
            models.Index(fields=['status']),
        ]

    def __str__(self):
        return f"{self.spider_name} - {self.country_code} - {self.status} - {self.start_time}"


class NewsArticle(models.Model):
    id = models.BigAutoField(primary_key=True)
    article_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    # Core fields
    title = models.CharField(max_length=255, blank=True, null=True)
    link = models.TextField(unique=True, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)

    pub_date = models.DateTimeField(blank=True, null=True)
    image_url = models.TextField(blank=True, null=True)
    video_url = models.CharField(max_length=255, blank=True, null=True)

    source_id = models.CharField(max_length=255, blank=True, null=True)
    source_name = models.CharField(max_length=255, blank=True, null=True)
    source_priority = models.BigIntegerField(blank=True, null=True)

    keywords = ArrayField(models.TextField(), blank=True, default=list)
    creator = ArrayField(models.TextField(), blank=True, default=list)
    country = ArrayField(models.TextField(), blank=True, default=list)
    category = ArrayField(models.TextField(), blank=True, default=list)
    topics = ArrayField(models.TextField(), blank=True, default=list)

    language = models.CharField(max_length=20, blank=True, null=True)

    # NLP fields
    entities = models.JSONField(blank=True, null=True, default=list)
    sentiment = models.CharField(max_length=50, blank=True, null=True)
    sentiment_score = models.FloatField(blank=True, null=True)

    # Vector embedding — requires pgvector
    embedding = ArrayField(models.FloatField(), blank=True, null=True)

    # Deduplication
    content_hash = models.CharField(max_length=64, unique=True, blank=True, null=True)

    processing_status = models.CharField(
        max_length=50,
        choices=[
            ('raw', 'Raw'),
            ('processed', 'Processed'),
            ('error', 'Error')
        ],
        default='raw'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'news_article'
        managed = True

    def __str__(self):
        return f"{self.title or 'Untitled'} | {self.link}"

    def save(self, *args, **kwargs):
        # Generate content hash for deduplication
        if self.content and not self.content_hash:
            content_str = f"{self.title or ''}{self.content or ''}{self.link or ''}"
            self.content_hash = hashlib.sha256(content_str.encode()).hexdigest()
        super().save(*args, **kwargs)


class CrawlCheckpoint(models.Model):
    """Track crawling progress for historical spider"""
    id = models.BigAutoField(primary_key=True)
    spider_name = models.CharField(max_length=100)
    last_page = models.IntegerField(default=0)
    last_url = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'crawl_checkpoint'
        unique_together = ['spider_name', 'category', 'country']

    def __str__(self):
        return f"{self.spider_name} - {self.category} - {self.country} - Page {self.last_page}" 