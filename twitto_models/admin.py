from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Post, Immotion, Session, Auth, NewsSource, CrawlJob


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'fname', 'lname', 'country', 'language', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'country', 'language')
    search_fields = ('email', 'fname', 'lname')
    ordering = ('email',)
    
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('fname', 'lname', 'address', 'age', 'phone', 'image', 'language', 'country')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'fname', 'lname', 'password1', 'password2'),
        }),
    )


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'source_name', 'source_country', 'language', 'processing_status', 'created_at')
    list_filter = ('processing_status', 'crawl_type', 'language', 'source_country', 'created_at')
    search_fields = ('title', 'content', 'source_name', 'author')
    readonly_fields = ('article_id', 'content_hash', 'created_at', 'updated_at')
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('article_id', 'title', 'link', 'description', 'content')
        }),
        ('Publication Info', {
            'fields': ('pub_date', 'language', 'image_url', 'video_url')
        }),
        ('Source Information', {
            'fields': ('source_name', 'source_domain', 'source_country', 'source_language', 'feed_url')
        }),
        ('Authors & Categories', {
            'fields': ('author', 'creator', 'category', 'tags', 'keywords')
        }),
        ('Geographic Info', {
            'fields': ('country', 'region', 'city')
        }),
        ('Content Analysis', {
            'fields': ('sentiment', 'sentiment_score', 'readability_score', 'word_count')
        }),
        ('Processing', {
            'fields': ('content_hash', 'processing_status', 'quality_score', 'crawl_type', 'spider_name')
        }),
        ('NLP Data', {
            'fields': ('entities', 'embedding', 'topics', 'crawled_at'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at', 'deleted_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Immotion)
class ImmotionAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'post', 'like', 'shared', 'comment')
    list_filter = ('like', 'shared', 'user__country')
    search_fields = ('user__email', 'post__title', 'comment')
    raw_id_fields = ('user', 'post')


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'device', 'ip', 'created_at')
    list_filter = ('created_at', 'device')
    search_fields = ('user__email', 'ip', 'token')
    raw_id_fields = ('user',)
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Auth)
class AuthAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'expires_at', 'created_at')
    list_filter = ('expires_at', 'created_at')
    search_fields = ('user__email', 'token')
    raw_id_fields = ('user',)
    readonly_fields = ('created_at', 'updated_at')


@admin.register(NewsSource)
class NewsSourceAdmin(admin.ModelAdmin):
    list_display = ('name', 'domain', 'country_code', 'country_name', 'language', 'is_active')
    list_filter = ('country_code', 'language', 'is_active')
    search_fields = ('name', 'domain', 'country_name')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(CrawlJob)
class CrawlJobAdmin(admin.ModelAdmin):
    list_display = ('job_id', 'source', 'status', 'articles_found', 'articles_processed', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('job_id', 'source__name', 'error_message')
    raw_id_fields = ('source',)
    readonly_fields = ('job_id', 'created_at', 'updated_at')
