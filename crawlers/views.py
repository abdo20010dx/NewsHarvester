from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone

from .models import NewsSource, CrawlSession
from .serializers import NewsSourceSerializer, CrawlSessionSerializer


class NewsSourceViewSet(viewsets.ModelViewSet):
    """ViewSet for NewsSource model."""
    
    queryset = NewsSource.objects.all()
    serializer_class = NewsSourceSerializer
    permission_classes = [IsAuthenticated]
    
    @action(detail=True, methods=['post'])
    def start_crawl(self, request, pk=None):
        """Start a crawl for a specific source."""
        try:
            source = self.get_object()
            
            # Check if source should be crawled
            if not source.should_crawl():
                return Response(
                    {'error': 'Source is not due for crawling'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            # Create crawl session
            session = CrawlSession.objects.create(
                source=source,
                status='running'
            )
            
            # TODO: Start actual crawler process
            # This would typically be done with Celery or similar
            
            return Response({
                'message': f'Started crawl for {source.name}',
                'session_id': session.id
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def due_for_crawl(self, request):
        """Get sources that are due for crawling."""
        try:
            due_sources = [source for source in NewsSource.objects.all() if source.should_crawl()]
            serializer = self.get_serializer(due_sources, many=True)
            
            return Response({
                'sources': serializer.data,
                'count': len(due_sources)
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class CrawlSessionViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for CrawlSession model (read-only)."""
    
    queryset = CrawlSession.objects.all()
    serializer_class = CrawlSessionSerializer
    permission_classes = [IsAuthenticated]
    
    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        """Cancel a running crawl session."""
        try:
            session = self.get_object()
            
            if session.status != 'running':
                return Response(
                    {'error': 'Session is not running'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            session.status = 'cancelled'
            session.finished_at = timezone.now()
            session.save()
            
            return Response({
                'message': f'Cancelled crawl session {pk}'
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    
    @action(detail=False, methods=['get'])
    def recent(self, request):
        """Get recent crawl sessions."""
        try:
            limit = int(request.query_params.get('limit', 10))
            recent_sessions = CrawlSession.objects.order_by('-started_at')[:limit]
            serializer = self.get_serializer(recent_sessions, many=True)
            
            return Response({
                'sessions': serializer.data,
                'count': len(recent_sessions)
            })
            
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            ) 