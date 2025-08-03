from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
import uuid


class User(AbstractUser):
    """
    User model extending Django's AbstractUser
    Based on the TypeORM User entity
    """
    fname = models.CharField(max_length=255, blank=True, default="")
    lname = models.CharField(max_length=255, blank=True, default="")
    address = models.CharField(max_length=255, blank=True, null=True)
    age = models.DateTimeField(blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    image = models.CharField(max_length=255, blank=True, null=True)
    language = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=10, blank=True, null=True)
    
    # Override username field to use email
    username = models.CharField(max_length=150, unique=True, blank=True, null=True)
    email = models.EmailField(unique=True)
    
    # Use email as the username field
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        db_table = 'user'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f"{self.fname} {self.lname}" if self.fname and self.lname else self.email


class Post(models.Model):
    """
    Post model for news articles
    Based on the TypeORM Post entity
    """
    PROCESSING_STATUS_CHOICES = [
        ('raw', 'Raw'),
        ('processed', 'Processed'),
        ('error', 'Error'),
        ('filtered', 'Filtered'),
    ]
    
    CRAWL_TYPE_CHOICES = [
        ('historical', 'Historical'),
        ('live', 'Live'),
    ]

    id = models.BigAutoField(primary_key=True)
    article_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    
    # Core article fields
    title = models.CharField(max_length=500, blank=True, null=True)
    link = models.TextField(blank=True, null=True, unique=True)
    description = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    
    # Publication and language info
    pub_date = models.DateTimeField(blank=True, null=True)
    language = models.CharField(max_length=10, blank=True, null=True)
    
    # Media
    image_url = models.TextField(blank=True, null=True)
    video_url = models.TextField(blank=True, null=True)
    
    # Source information
    source_name = models.CharField(max_length=255, blank=True, null=True)
    source_domain = models.CharField(max_length=255, blank=True, null=True)
    source_country = models.CharField(max_length=10, blank=True, null=True)
    source_language = models.CharField(max_length=10, blank=True, null=True)
    
    # Authors and contributors
    author = models.CharField(max_length=255, blank=True, null=True)
    creator = models.JSONField(default=list, blank=True)
    
    # Classification and categorization
    category = models.JSONField(default=list, blank=True)
    tags = models.JSONField(default=list, blank=True)
    keywords = models.JSONField(default=list, blank=True)
    
    # Geographic and demographic info
    country = models.JSONField(default=list, blank=True)
    region = models.JSONField(default=list, blank=True)
    city = models.JSONField(default=list, blank=True)
    
    # Content analysis
    sentiment = models.CharField(max_length=50, blank=True, null=True)
    sentiment_score = models.FloatField(blank=True, null=True)
    readability_score = models.FloatField(blank=True, null=True)
    word_count = models.IntegerField(blank=True, null=True)
    
    # Processing and quality
    content_hash = models.CharField(max_length=64, blank=True, null=True, unique=True)
    processing_status = models.CharField(
        max_length=50, 
        choices=PROCESSING_STATUS_CHOICES, 
        default='raw',
        blank=True, 
        null=True
    )
    quality_score = models.FloatField(blank=True, null=True)
    
    # Crawling metadata
    crawl_type = models.CharField(
        max_length=20, 
        choices=CRAWL_TYPE_CHOICES, 
        default='live',
        blank=True, 
        null=True
    )
    spider_name = models.CharField(max_length=100, blank=True, null=True)
    feed_url = models.TextField(blank=True, null=True)
    
    # Legacy fields for backward compatibility
    source_id = models.CharField(max_length=255, blank=True, null=True)
    source_priority = models.BigIntegerField(blank=True, null=True)
    pubDate = models.DateTimeField(blank=True, null=True)
    
    # NLP fields (commented out in TypeORM but included here)
    entities = models.JSONField(blank=True, null=True)
    embedding = models.JSONField(blank=True, null=True)  # Array of floats
    topics = models.JSONField(default=list, blank=True)
    crawled_at = models.DateTimeField(blank=True, null=True)
    
    # Standard timestamps
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
    
    # Virtual fields for frontend (computed properties)
    @property
    def likes(self):
        return self.immotion_set.filter(like=1).count()
    
    @property
    def dislikes(self):
        return self.immotion_set.filter(like=-1).count()
    
    @property
    def comments(self):
        return self.immotion_set.filter(comment__isnull=False).exclude(comment='').count()
    
    @property
    def shareds(self):
        return self.immotion_set.filter(shared=True).count()
    
    @property
    def like(self):
        return self.likes - self.dislikes
    
    @property
    def watches(self):
        # This would need to be implemented based on your requirements
        return 0

    class Meta:
        db_table = 'posts'
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
        indexes = [
            models.Index(fields=['pub_date']),
            models.Index(fields=['source_country']),
            models.Index(fields=['language']),
            models.Index(fields=['crawl_type']),
            models.Index(fields=['processing_status']),
            models.Index(fields=['created_at']),
            models.Index(fields=['crawled_at']),
        ]

    def __str__(self):
        return self.title or f"Post {self.id}"


class Immotion(models.Model):
    """
    Immotion model for user interactions with posts (likes, comments, shares)
    Based on the TypeORM Immotion entity
    """
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='immotions')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='immotions')
    comment = models.TextField(blank=True, null=True)
    like = models.IntegerField(default=0, blank=True, null=True)  # 1 for like, -1 for dislike, 0 for neutral
    shared = models.BooleanField(default=False, blank=True, null=True)

    class Meta:
        db_table = 'immotion'
        verbose_name = 'Immotion'
        verbose_name_plural = 'Imotions'
        indexes = [
            models.Index(fields=['user', 'post'], name='userPost'),
        ]
        unique_together = [['user', 'post']]

    def __str__(self):
        return f"{self.user.email} - {self.post.title[:50]}"


class Session(models.Model):
    """
    Session model for user sessions
    Based on the TypeORM Session entity
    """
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sessions')
    device = models.CharField(max_length=255, blank=True, null=True)
    ip = models.CharField(max_length=255, blank=True, null=True)
    token = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'session'
        verbose_name = 'Session'
        verbose_name_plural = 'Sessions'

    def __str__(self):
        return f"Session {self.id} - {self.user.email}"


class Auth(models.Model):
    """
    Auth model for authentication (if needed)
    Based on the TypeORM Auth entity structure
    """
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='auths')
    token = models.TextField(blank=True, null=True)
    refresh_token = models.TextField(blank=True, null=True)
    expires_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:
        db_table = 'auth'
        verbose_name = 'Auth'
        verbose_name_plural = 'Auths'

    def __str__(self):
        return f"Auth {self.id} - {self.user.email}"


# Additional models for news harvesting functionality
class NewsSource(models.Model):
    """
    Model for news sources from the country chunks
    """
    name = models.CharField(max_length=255)
    domain = models.CharField(max_length=255)
    country_code = models.CharField(max_length=10)
    country_name = models.CharField(max_length=255)
    language = models.CharField(max_length=10)
    rss_feeds = models.JSONField(default=list)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'news_sources'
        verbose_name = 'News Source'
        verbose_name_plural = 'News Sources'
        unique_together = [['domain', 'country_code']]

    def __str__(self):
        return f"{self.name} ({self.country_code})"


class CrawlJob(models.Model):
    """
    Model for tracking crawl jobs
    """
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('running', 'Running'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('cancelled', 'Cancelled'),
    ]
    
    id = models.BigAutoField(primary_key=True)
    job_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    source = models.ForeignKey(NewsSource, on_delete=models.CASCADE, related_name='crawl_jobs')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    started_at = models.DateTimeField(blank=True, null=True)
    completed_at = models.DateTimeField(blank=True, null=True)
    articles_found = models.IntegerField(default=0)
    articles_processed = models.IntegerField(default=0)
    error_message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'crawl_jobs'
        verbose_name = 'Crawl Job'
        verbose_name_plural = 'Crawl Jobs'

    def __str__(self):
        return f"Crawl Job {self.job_id} - {self.source.name}"
