from rest_framework import serializers
from .models import NewsArticle


class NewsArticleSerializer(serializers.ModelSerializer):
    """Serializer for NewsArticle model."""
    
    class Meta:
        model = NewsArticle
        fields = [
            'id', 'article_id', 'title', 'link', 'description', 'content',
            'pub_date', 'image_url', 'video_url', 'source_id', 'source_name',
            'source_priority', 'keywords', 'creator', 'country', 'category',
            'topics', 'language', 'entities', 'sentiment', 'sentiment_score',
            'embedding', 'content_hash', 'processing_status', 'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'article_id', 'content_hash', 'created_at', 'updated_at']


class NewsArticleListSerializer(serializers.ModelSerializer):
    """Simplified serializer for list views."""
    
    class Meta:
        model = NewsArticle
        fields = [
            'id', 'article_id', 'title', 'link', 'description', 'pub_date',
            'image_url', 'source_name', 'language', 'sentiment', 'processing_status'
        ]


class NewsArticleCreateSerializer(serializers.ModelSerializer):
    """Serializer for creating new articles."""
    
    class Meta:
        model = NewsArticle
        fields = [
            'title', 'link', 'description', 'content', 'pub_date',
            'image_url', 'video_url', 'source_id', 'source_name',
            'source_priority', 'keywords', 'creator', 'country', 'category',
            'topics', 'language'
        ]


class NewsArticleUpdateSerializer(serializers.ModelSerializer):
    """Serializer for updating articles."""
    
    class Meta:
        model = NewsArticle
        fields = [
            'title', 'description', 'content', 'image_url', 'video_url',
            'keywords', 'creator', 'country', 'category', 'topics',
            'entities', 'sentiment', 'sentiment_score', 'embedding',
            'processing_status'
        ] 