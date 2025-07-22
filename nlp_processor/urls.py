from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NLPProcessingViewSet, SimilarityViewSet

router = DefaultRouter()
router.register(r'processing', NLPProcessingViewSet, basename='nlp-processing')
router.register(r'similarity', SimilarityViewSet, basename='similarity')

urlpatterns = [
    path('', include(router.urls)),
] 