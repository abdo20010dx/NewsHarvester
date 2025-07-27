import random
from scrapy import signals
from scrapy.downloadermiddlewares.useragent import UserAgentMiddleware


class RotateUserAgentMiddleware(UserAgentMiddleware):
    """Rotate user agents to avoid detection"""
    
    user_agent_list = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    ]
    
    def process_request(self, request, spider):
        ua = random.choice(self.user_agent_list)
        request.headers['User-Agent'] = ua
        return None


class ProxyMiddleware:
    """Add proxy support if needed"""
    
    def __init__(self, proxy_list=None):
        self.proxy_list = proxy_list or []
    
    @classmethod
    def from_crawler(cls, crawler):
        proxy_list = crawler.settings.getlist('PROXY_LIST', [])
        return cls(proxy_list)
    
    def process_request(self, request, spider):
        if self.proxy_list:
            proxy = random.choice(self.proxy_list)
            request.meta['proxy'] = proxy
        return None


class DelayMiddleware:
    """Add random delays between requests"""
    
    def __init__(self, delay_range=(1, 3)):
        self.delay_range = delay_range
    
    @classmethod
    def from_crawler(cls, crawler):
        delay_range = crawler.settings.get('DELAY_RANGE', (1, 3))
        return cls(delay_range)
    
    def process_request(self, request, spider):
        import time
        delay = random.uniform(*self.delay_range)
        time.sleep(delay)
        return None 