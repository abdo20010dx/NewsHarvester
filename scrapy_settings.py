# Scrapy settings for NewsHarvester project

BOT_NAME = 'newsharvester'

SPIDER_MODULES = ['crawlers.spiders']
NEWSPIDER_MODULE = 'crawlers.spiders'

# Obey robots.txt rules
ROBOTSTXT_OBEY = True

# Configure a delay for requests for the same website (default: 0)
DOWNLOAD_DELAY = 2

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 16

# Configure maximum concurrent requests per domain
CONCURRENT_REQUESTS_PER_DOMAIN = 8

# Configure item pipelines
ITEM_PIPELINES = {
    'crawlers.pipelines.ValidationPipeline': 300,
    'crawlers.pipelines.DuplicatesPipeline': 400,
    'crawlers.pipelines.DjangoDatabasePipeline': 500,
}

# Configure downloader middlewares
DOWNLOADER_MIDDLEWARES = {
    'crawlers.middlewares.RotateUserAgentMiddleware': 400,
    'crawlers.middlewares.DelayMiddleware': 500,
}

# User agent
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'

# Enable and configure HTTP caching (disabled by default)
HTTPCACHE_ENABLED = True
HTTPCACHE_EXPIRATION_SECS = 0
HTTPCACHE_DIR = 'httpcache'
HTTPCACHE_IGNORE_HTTP_CODES = []
HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'

# Log level
LOG_LEVEL = 'INFO' 