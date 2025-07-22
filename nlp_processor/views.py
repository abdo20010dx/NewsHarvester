from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404

from articles.models import NewsArticle
from articles.serializers import NewsArticleSerializer
from .services import NLPProcessingService, SimilarityService


class NLPProcessingViewSet(viewsets.ViewSet):
    """ViewSet for NLP processing operations."""
    
    permission_classes = [IsAuthenticated]
    
    @action(detail=False, methods=['post'])
    def process_batch(self, request):
        """Process a batch of unprocessed articles."""
        try:
            batch_size = request.data.get('batch_size', 10)
            processed_count = NLPProcessingService.process_unprocessed_articles(batch_size)
            
            return Response({
                'message': f'Processed {processed_count} articles',
                'processed_count': processed_count
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=True, methods=['post'])
    def process_article(self, request, pk=None):
        """Process a specific article."""
        try:
            article = get_object_or_404(NewsArticle, pk=pk)
            NLPProcessingService.process_single_article(article)
            
            return Response({
                'message': f'Article {pk} processed successfully',
                'article_id': pk
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=True, methods=['post'])
    def reprocess_article(self, request, pk=None):
        """Reprocess a specific article."""
        try:
            success = NLPProcessingService.reprocess_article(int(pk))
            
            if success:
                return Response({
                    'message': f'Article {pk} reprocessed successfully',
                    'article_id': pk
                })
            else:
                return Response(
                    {'error': f'Failed to reprocess article {pk}'},
                    status=status.HTTP_400_BAD_REQUEST
                )
                
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get NLP processing statistics."""
        try:
            stats = NLPProcessingService.get_processing_stats()
            return Response(stats)
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class SimilarityViewSet(viewsets.ViewSet):
    """ViewSet for similarity operations."""
    
    @action(detail=True, methods=['get'])
    def similar_articles(self, request, pk=None):
        """Find articles similar to the given article."""
        try:
            limit = int(request.query_params.get('limit', 10))
            similar_articles = SimilarityService.find_similar_articles(int(pk), limit)
            
            serializer = NewsArticleSerializer(similar_articles, many=True)
            return Response({
                'similar_articles': serializer.data,
                'count': len(similar_articles)
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def by_topic(self, request):
        """Find articles by topic."""
        try:
            topic = request.query_params.get('topic')
            if not topic:
                return Response(
                    {'error': 'Topic parameter is required'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            limit = int(request.query_params.get('limit', 20))
            articles = SimilarityService.find_articles_by_topic(topic, limit)
            
            serializer = NewsArticleSerializer(articles, many=True)
            return Response({
                'articles': serializer.data,
                'topic': topic,
                'count': len(articles)
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def by_entity(self, request):
        """Find articles by entity."""
        try:
            entity_text = request.query_params.get('entity')
            entity_type = request.query_params.get('entity_type')
            
            if not entity_text:
                return Response(
                    {'error': 'Entity parameter is required'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            limit = int(request.query_params.get('limit', 20))
            articles = SimilarityService.find_articles_by_entity(entity_text, entity_type, limit)
            
            serializer = NewsArticleSerializer(articles, many=True)
            return Response({
                'articles': serializer.data,
                'entity': entity_text,
                'entity_type': entity_type,
                'count': len(articles)
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            ) 