#!/usr/bin/env python
"""
Script to show database statistics
"""
import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import Post
from django.db.models import Count
from datetime import datetime, timedelta

def show_database_stats():
    """Show comprehensive database statistics"""
    print("📊 DATABASE STATISTICS")
    print("=" * 60)
    
    # Total articles
    total_articles = Post.objects.count()
    print(f"Total Articles: {total_articles}")
    
    # Articles by crawl type
    print(f"\n📈 Articles by Crawl Type:")
    print("-" * 40)
    crawl_types = Post.objects.values('crawl_type').annotate(count=Count('id')).order_by('-count')
    for ct in crawl_types:
        print(f"  {ct['crawl_type']}: {ct['count']} articles")
    
    # Articles by source
    print(f"\n📰 Top 10 News Sources:")
    print("-" * 40)
    sources = Post.objects.values('source_name').annotate(count=Count('id')).order_by('-count')[:10]
    for source in sources:
        print(f"  {source['source_name']}: {source['count']} articles")
    
    # Articles by country
    print(f"\n🌍 Articles by Country:")
    print("-" * 40)
    countries = Post.objects.values('source_country').annotate(count=Count('id')).order_by('-count')
    for country in countries:
        print(f"  {country['source_country']}: {country['count']} articles")
    
    # Recent articles (last hour)
    one_hour_ago = datetime.now() - timedelta(hours=1)
    recent_articles = Post.objects.filter(created_at__gte=one_hour_ago).count()
    print(f"\n⏰ Articles added in last hour: {recent_articles}")
    
    # Latest articles
    print(f"\n🆕 Latest 5 Articles:")
    print("-" * 40)
    latest_posts = Post.objects.all().order_by('-created_at')[:5]
    for i, post in enumerate(latest_posts, 1):
        print(f"{i}. {post.title[:60]}...")
        print(f"   Source: {post.source_name} | Type: {post.crawl_type} | {post.created_at.strftime('%H:%M:%S')}")
        print()

if __name__ == "__main__":
    show_database_stats() 