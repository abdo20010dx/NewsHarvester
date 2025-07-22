from django.db import models
import uuid
import hashlib
import json


class NewsArticle(models.Model):
    """News article model with NLP enrichment and vector embeddings."""
    
    # Primary keys
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

    # Tags & meta
    keywords = models.TextField(blank=True, default='[]')  # JSON string
    creator = models.TextField(blank=True, default='[]')   # JSON string
    country = models.TextField(blank=True, default='[]')   # JSON string
    category = models.TextField(blank=True, default='[]')  # JSON string
    topics = models.TextField(blank=True, default='[]')    # JSON string

    language = models.CharField(max_length=20, blank=True, null=True)

    # NLP fields
    entities = models.TextField(blank=True, null=True, default='[]')  # JSON string
    sentiment = models.CharField(max_length=50, blank=True, null=True)
    sentiment_score = models.FloatField(blank=True, null=True)

    # Vector embedding
    embedding = models.TextField(blank=True, null=True)  # JSON string

    # Deduplication
    content_hash = models.CharField(max_length=64, unique=True, blank=True, null=True)

    # Status tracking
    processing_status = models.CharField(
        max_length=50,
        choices=[
            ('raw', 'Raw'),
            ('processed', 'Processed'),
            ('error', 'Error')
        ],
        default='raw'
    )

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'news_articles'
        indexes = [
            models.Index(fields=['pub_date']),
            models.Index(fields=['source_id']),
            models.Index(fields=['processing_status']),
            models.Index(fields=['language']),
            models.Index(fields=['sentiment']),
        ]
        ordering = ['-pub_date', '-created_at']

    def __str__(self):
        return f"{self.title or 'Untitled'} | {self.link}"

    def save(self, *args, **kwargs):
        """Override save to generate content hash for deduplication."""
        if self.content and not self.content_hash:
            self.content_hash = hashlib.sha256(
                self.content.encode('utf-8')
            ).hexdigest()
        super().save(*args, **kwargs)

    def get_keywords(self):
        """Get keywords as list."""
        try:
            return json.loads(self.keywords) if self.keywords else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_keywords(self, keywords_list):
        """Set keywords from list."""
        self.keywords = json.dumps(keywords_list)

    def get_creator(self):
        """Get creator as list."""
        try:
            return json.loads(self.creator) if self.creator else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_creator(self, creator_list):
        """Set creator from list."""
        self.creator = json.dumps(creator_list)

    def get_country(self):
        """Get country as list."""
        try:
            return json.loads(self.country) if self.country else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_country(self, country_list):
        """Set country from list."""
        self.country = json.dumps(country_list)

    def get_category(self):
        """Get category as list."""
        try:
            return json.loads(self.category) if self.category else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_category(self, category_list):
        """Set category from list."""
        self.category = json.dumps(category_list)

    def get_topics(self):
        """Get topics as list."""
        try:
            return json.loads(self.topics) if self.topics else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_topics(self, topics_list):
        """Set topics from list."""
        self.topics = json.dumps(topics_list)

    def get_entities(self):
        """Get entities as list."""
        try:
            return json.loads(self.entities) if self.entities else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_entities(self, entities_list):
        """Set entities from list."""
        self.entities = json.dumps(entities_list)

    def get_embedding(self):
        """Get embedding as list."""
        try:
            return json.loads(self.embedding) if self.embedding else []
        except (json.JSONDecodeError, TypeError):
            return []

    def set_embedding(self, embedding_list):
        """Set embedding from list."""
        self.embedding = json.dumps(embedding_list)

    @property
    def is_processed(self):
        """Check if article has been processed with NLP."""
        return self.processing_status == 'processed'

    @property
    def has_embedding(self):
        """Check if article has vector embedding."""
        return bool(self.embedding and len(self.embedding) > 0)

    def get_entities_by_type(self, entity_type):
        """Get entities of a specific type (PERSON, ORG, GPE, etc.)."""
        entities = self.get_entities()
        if not entities:
            return []
        return [entity for entity in entities if entity.get('label') == entity_type]

    def get_people(self):
        """Get all person entities."""
        return self.get_entities_by_type('PERSON')

    def get_organizations(self):
        """Get all organization entities."""
        return self.get_entities_by_type('ORG')

    def get_locations(self):
        """Get all location entities."""
        return self.get_entities_by_type('GPE') 