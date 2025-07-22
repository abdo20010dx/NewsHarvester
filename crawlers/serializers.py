from rest_framework import serializers
from .models import NewsSource, CrawlSession


class NewsSourceSerializer(serializers.ModelSerializer):
    """Serializer for NewsSource model."""
    
    class Meta:
        model = NewsSource
        fields = [
            'id', 'name', 'domain', 'url', 'rss_feed', 'priority', 'is_active',
            'language', 'country', 'crawl_interval', 'last_crawled', 'next_crawl',
            'title_selector', 'content_selector', 'author_selector', 'date_selector',
            'image_selector', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class CrawlSessionSerializer(serializers.ModelSerializer):
    """Serializer for CrawlSession model."""
    
    source_name = serializers.CharField(source='source.name', read_only=True)
    duration = serializers.SerializerMethodField()
    
    class Meta:
        model = CrawlSession
        fields = [
            'id', 'source', 'source_name', 'started_at', 'finished_at', 'status',
            'articles_found', 'articles_saved', 'errors', 'duration'
        ]
        read_only_fields = ['id', 'started_at', 'finished_at', 'duration']
    
    def get_duration(self, obj):
        """Calculate and return crawl duration."""
        return str(obj.duration) if obj.duration else None 