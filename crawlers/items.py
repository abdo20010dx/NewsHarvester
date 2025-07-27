# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy import Field


class NewsItem(scrapy.Item):
    # Core article fields
    title = Field()
    link = Field()
    description = Field()
    content = Field()
    
    # Publication and language info
    pub_date = Field()
    language = Field()  # ISO language code (en, fr, es, etc.)
    
    # Media
    image_url = Field()
    video_url = Field()
    
    # Source information
    source_name = Field()
    source_domain = Field()
    source_country = Field()  # ISO country code
    source_language = Field()
    
    # Authors and contributors
    author = Field()
    creator = Field()
    
    # Classification and categorization
    category = Field()
    tags = Field()
    keywords = Field()
    
    # Geographic and demographic info
    country = Field()
    region = Field()
    city = Field()
    
    # Content analysis
    sentiment = Field()
    sentiment_score = Field()
    readability_score = Field()
    word_count = Field()
    
    # Processing and quality
    content_hash = Field()
    processing_status = Field()
    quality_score = Field()
    
    # Crawling metadata
    crawl_type = Field()  # 'historical' or 'live'
    spider_name = Field()
    feed_url = Field()
    
    # Timestamps
    created_at = Field()
    updated_at = Field()
    crawled_at = Field() 