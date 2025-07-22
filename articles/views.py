from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from django.utils import timezone
from datetime import timedelta

from .models import NewsArticle
from .serializers import (
    NewsArticleSerializer,
    NewsArticleListSerializer,
    NewsArticleCreateSerializer,
    NewsArticleUpdateSerializer
)


class NewsArticleViewSet(viewsets.ModelViewSet):
    """ViewSet for NewsArticle model with full CRUD operations."""
    
    queryset = NewsArticle.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = [
        'source_id', 'source_name', 'language', 'sentiment', 
        'processing_status', 'category', 'country'
    ]
    search_fields = ['title', 'description', 'content', 'keywords']
    ordering_fields = ['pub_date', 'created_at', 'title', 'source_priority']
    ordering = ['-pub_date', '-created_at']

    def get_serializer_class(self):
        """Return appropriate serializer class based on action."""
        if self.action == 'list':
            return NewsArticleListSerializer
        elif self.action == 'create':
            return NewsArticleCreateSerializer
        elif self.action in ['update', 'partial_update']:
            return NewsArticleUpdateSerializer
        return NewsArticleSerializer

    def get_queryset(self):
        """Filter queryset based on query parameters."""
        queryset = NewsArticle.objects.all()
        
        # Filter by date range
        days = self.request.query_params.get('days', None)
        if days:
            try:
                days = int(days)
                start_date = timezone.now() - timedelta(days=days)
                queryset = queryset.filter(pub_date__gte=start_date)
            except ValueError:
                pass
        
        # Filter by entity type
        entity_type = self.request.query_params.get('entity_type', None)
        if entity_type:
            queryset = queryset.filter(entities__contains=[{'label': entity_type}])
        
        # Filter by sentiment score range
        min_sentiment = self.request.query_params.get('min_sentiment', None)
        max_sentiment = self.request.query_params.get('max_sentiment', None)
        
        if min_sentiment:
            try:
                queryset = queryset.filter(sentiment_score__gte=float(min_sentiment))
            except ValueError:
                pass
        
        if max_sentiment:
            try:
                queryset = queryset.filter(sentiment_score__lte=float(max_sentiment))
            except ValueError:
                pass
        
        return queryset

    @action(detail=False, methods=['get'])
    def recent(self, request):
        """Get recent articles (last 24 hours)."""
        yesterday = timezone.now() - timedelta(days=1)
        recent_articles = self.get_queryset().filter(pub_date__gte=yesterday)
        page = self.paginate_queryset(recent_articles)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(recent_articles, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def trending(self, request):
        """Get trending articles based on source priority and recency."""
        trending_articles = self.get_queryset().filter(
            source_priority__isnull=False
        ).order_by('-source_priority', '-pub_date')[:50]
        
        page = self.paginate_queryset(trending_articles)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(trending_articles, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def by_sentiment(self, request):
        """Get articles grouped by sentiment."""
        sentiment = request.query_params.get('sentiment', 'positive')
        articles = self.get_queryset().filter(sentiment=sentiment)
        
        page = self.paginate_queryset(articles)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(articles, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def unprocessed(self, request):
        """Get articles that haven't been processed with NLP yet."""
        unprocessed = self.get_queryset().filter(processing_status='raw')
        
        page = self.paginate_queryset(unprocessed)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(unprocessed, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def reprocess(self, request, pk=None):
        """Mark article for reprocessing with NLP."""
        article = self.get_object()
        article.processing_status = 'raw'
        article.save()
        return Response({'status': 'Article marked for reprocessing'})

    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get basic statistics about articles."""
        total_articles = NewsArticle.objects.count()
        processed_articles = NewsArticle.objects.filter(processing_status='processed').count()
        raw_articles = NewsArticle.objects.filter(processing_status='raw').count()
        error_articles = NewsArticle.objects.filter(processing_status='error').count()
        
        # Sentiment distribution
        sentiment_stats = {}
        for sentiment in ['positive', 'negative', 'neutral']:
            count = NewsArticle.objects.filter(sentiment=sentiment).count()
            sentiment_stats[sentiment] = count
        
        # Language distribution
        language_stats = {}
        for article in NewsArticle.objects.values('language').distinct():
            lang = article['language']
            if lang:
                count = NewsArticle.objects.filter(language=lang).count()
                language_stats[lang] = count
        
        return Response({
            'total_articles': total_articles,
            'processed_articles': processed_articles,
            'raw_articles': raw_articles,
            'error_articles': error_articles,
            'sentiment_distribution': sentiment_stats,
            'language_distribution': language_stats,
        }) 