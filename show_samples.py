#!/usr/bin/env python
"""
Script to show sample articles from both crawl types
"""
import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from news.models import Post

def show_sample_articles():
    """Show sample articles from both crawl types"""
    print("📰 SAMPLE ARTICLES FROM BOTH CRAWL TYPES")
    print("=" * 80)
    
    print("HISTORICAL ARTICLES:")
    print("-" * 40)
    historical = Post.objects.filter(crawl_type='historical').order_by('-created_at')[:3]
    for i, post in enumerate(historical, 1):
        print(f"{i}. {post.title[:70]}...")
        print(f"   Source: {post.source_name} | {post.created_at.strftime('%H:%M:%S')}")
        print(f"   Link: {post.link}")
        print()
    
    print("LIVE ARTICLES:")
    print("-" * 40)
    live = Post.objects.filter(crawl_type='live').order_by('-created_at')[:3]
    for i, post in enumerate(live, 1):
        print(f"{i}. {post.title[:70]}...")
        print(f"   Source: {post.source_name} | {post.created_at.strftime('%H:%M:%S')}")
        print(f"   Link: {post.link}")
        print()

if __name__ == "__main__":
    show_sample_articles() 