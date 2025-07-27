from django.urls import path
from . import views

app_name = 'news'

urlpatterns = [
    path('articles/', views.article_list, name='article_list'),
    path('articles/<uuid:article_id>/', views.article_detail, name='article_detail'),
    path('search/', views.search_articles, name='search_articles'),
    path('categories/', views.category_list, name='category_list'),
    path('countries/', views.country_list, name='country_list'),
] 