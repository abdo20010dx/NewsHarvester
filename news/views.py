from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from django.db.models import Q
import json
from .models import NewsArticle


@csrf_exempt
def article_list(request):
    """List all articles with pagination and filtering"""
    if request.method == 'GET':
        page = request.GET.get('page', 1)
        limit = request.GET.get('limit', 20)
        category = request.GET.get('category')
        country = request.GET.get('country')
        status = request.GET.get('status')
        
        queryset = NewsArticle.objects.all()
        
        if category:
            queryset = queryset.filter(category__contains=[category])
        if country:
            queryset = queryset.filter(country__contains=[country])
        if status:
            queryset = queryset.filter(processing_status=status)
            
        queryset = queryset.order_by('-pub_date', '-created_at')
        
        paginator = Paginator(queryset, limit)
        articles_page = paginator.get_page(page)
        
        articles_data = []
        for article in articles_page:
            articles_data.append({
                'article_id': str(article.article_id),
                'title': article.title,
                'link': article.link,
                'description': article.description,
                'pub_date': article.pub_date.isoformat() if article.pub_date else None,
                'source_name': article.source_name,
                'category': article.category,
                'country': article.country,
                'processing_status': article.processing_status,
                'created_at': article.created_at.isoformat(),
            })
        
        return JsonResponse({
            'articles': articles_data,
            'total': paginator.count,
            'pages': paginator.num_pages,
            'current_page': int(page),
            'has_next': articles_page.has_next(),
            'has_previous': articles_page.has_previous(),
        })
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def article_detail(request, article_id):
    """Get detailed information about a specific article"""
    if request.method == 'GET':
        try:
            article = NewsArticle.objects.get(article_id=article_id)
            article_data = {
                'article_id': str(article.article_id),
                'title': article.title,
                'link': article.link,
                'description': article.description,
                'content': article.content,
                'pub_date': article.pub_date.isoformat() if article.pub_date else None,
                'image_url': article.image_url,
                'video_url': article.video_url,
                'source_id': article.source_id,
                'source_name': article.source_name,
                'source_priority': article.source_priority,
                'keywords': article.keywords,
                'creator': article.creator,
                'country': article.country,
                'category': article.category,
                'topics': article.topics,
                'language': article.language,
                'entities': article.entities,
                'sentiment': article.sentiment,
                'sentiment_score': article.sentiment_score,
                'processing_status': article.processing_status,
                'created_at': article.created_at.isoformat(),
                'updated_at': article.updated_at.isoformat(),
            }
            return JsonResponse(article_data)
        except NewsArticle.DoesNotExist:
            return JsonResponse({'error': 'Article not found'}, status=404)
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def search_articles(request):
    """Search articles by keyword, title, or content"""
    if request.method == 'GET':
        query = request.GET.get('q', '')
        if not query:
            return JsonResponse({'error': 'Query parameter required'}, status=400)
        
        queryset = NewsArticle.objects.filter(
            Q(title__icontains=query) |
            Q(content__icontains=query) |
            Q(description__icontains=query) |
            Q(keywords__contains=[query])
        ).order_by('-pub_date', '-created_at')
        
        page = request.GET.get('page', 1)
        limit = request.GET.get('limit', 20)
        
        paginator = Paginator(queryset, limit)
        articles_page = paginator.get_page(page)
        
        articles_data = []
        for article in articles_page:
            articles_data.append({
                'article_id': str(article.article_id),
                'title': article.title,
                'link': article.link,
                'description': article.description,
                'pub_date': article.pub_date.isoformat() if article.pub_date else None,
                'source_name': article.source_name,
                'category': article.category,
                'country': article.country,
                'processing_status': article.processing_status,
            })
        
        return JsonResponse({
            'query': query,
            'articles': articles_data,
            'total': paginator.count,
            'pages': paginator.num_pages,
            'current_page': int(page),
        })
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def category_list(request):
    """Get list of all available categories"""
    if request.method == 'GET':
        categories = NewsArticle.objects.values_list('category', flat=True).distinct()
        all_categories = []
        for category_list in categories:
            if category_list:
                all_categories.extend(category_list)
        
        unique_categories = list(set(all_categories))
        return JsonResponse({'categories': unique_categories})
    
    return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def country_list(request):
    """Get list of all available countries"""
    if request.method == 'GET':
        countries = NewsArticle.objects.values_list('country', flat=True).distinct()
        all_countries = []
        for country_list in countries:
            if country_list:
                all_countries.extend(country_list)
        
        unique_countries = list(set(all_countries))
        return JsonResponse({'countries': unique_countries})
    
    return JsonResponse({'error': 'Method not allowed'}, status=405) 