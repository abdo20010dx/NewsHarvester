from django.contrib import admin
from .models import NewsArticle, CrawlCheckpoint


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'source_name', 'pub_date', 'processing_status', 'created_at']
    list_filter = ['processing_status', 'pub_date', 'source_name', 'category']
    search_fields = ['title', 'content', 'link']
    readonly_fields = ['article_id', 'content_hash', 'created_at', 'updated_at']
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'link', 'description', 'content', 'pub_date')
        }),
        ('Media', {
            'fields': ('image_url', 'video_url')
        }),
        ('Source Information', {
            'fields': ('source_id', 'source_name', 'source_priority')
        }),
        ('Classification', {
            'fields': ('keywords', 'creator', 'country', 'category', 'topics', 'language')
        }),
        ('NLP Data', {
            'fields': ('entities', 'sentiment', 'sentiment_score', 'embedding')
        }),
        ('System Fields', {
            'fields': ('article_id', 'content_hash', 'processing_status', 'created_at', 'updated_at')
        }),
    )


@admin.register(CrawlCheckpoint)
class CrawlCheckpointAdmin(admin.ModelAdmin):
    list_display = ['spider_name', 'category', 'country', 'last_page', 'is_active', 'updated_at']
    list_filter = ['spider_name', 'is_active', 'category', 'country']
    search_fields = ['spider_name', 'category', 'country']
    readonly_fields = ['created_at', 'updated_at'] 