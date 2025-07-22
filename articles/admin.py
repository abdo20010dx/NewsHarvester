from django.contrib import admin
from .models import NewsArticle


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    """Admin interface for NewsArticle model."""
    
    list_display = [
        'title', 'source_name', 'pub_date', 'language', 
        'sentiment', 'processing_status', 'created_at'
    ]
    list_filter = [
        'processing_status', 'sentiment', 'language', 
        'source_name', 'pub_date', 'created_at'
    ]
    search_fields = ['title', 'description', 'content', 'link']
    readonly_fields = ['id', 'article_id', 'content_hash', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'link', 'description', 'content', 'pub_date')
        }),
        ('Media', {
            'fields': ('image_url', 'video_url'),
            'classes': ('collapse',)
        }),
        ('Source Information', {
            'fields': ('source_id', 'source_name', 'source_priority'),
            'classes': ('collapse',)
        }),
        ('Metadata', {
            'fields': ('keywords', 'creator', 'country', 'category', 'topics', 'language'),
            'classes': ('collapse',)
        }),
        ('NLP Results', {
            'fields': ('entities', 'sentiment', 'sentiment_score', 'embedding'),
            'classes': ('collapse',)
        }),
        ('System Fields', {
            'fields': ('id', 'article_id', 'content_hash', 'processing_status', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def get_queryset(self, request):
        """Optimize queryset for admin."""
        return super().get_queryset(request).select_related() 