from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsSourceViewSet, CrawlSessionViewSet

router = DefaultRouter()
router.register(r'sources', NewsSourceViewSet)
router.register(r'sessions', CrawlSessionViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 