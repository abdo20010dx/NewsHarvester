from django.core.management.base import BaseCommand, CommandError
from django.utils import timezone
from crawlers.models import NewsSource
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
import os
import sys

# Add the project root to Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__)))))

from crawlers.spiders.rss_spider import RSSSpider
from crawlers.spiders.news_site_spider import NewsSiteSpider


class Command(BaseCommand):
    help = 'Run news crawlers for specified sources'

    def add_arguments(self, parser):
        parser.add_argument(
            '--source-id',
            type=int,
            help='Run crawler for specific source ID',
        )
        parser.add_argument(
            '--all',
            action='store_true',
            help='Run crawlers for all active sources',
        )
        parser.add_argument(
            '--spider-type',
            choices=['rss', 'news_site'],
            default='rss',
            help='Type of spider to run (default: rss)',
        )

    def handle(self, *args, **options):
        if not options['source_id'] and not options['all']:
            raise CommandError('Please specify either --source-id or --all')

        if options['source_id']:
            sources = NewsSource.objects.filter(id=options['source_id'])
            if not sources.exists():
                raise CommandError(f'Source with ID {options["source_id"]} not found')
        else:
            sources = NewsSource.objects.filter(is_active=True)

        # Configure Scrapy settings
        settings = get_project_settings()
        settings.set('LOG_LEVEL', 'INFO')
        settings.set('FEEDS', {
            'items.json': {
                'format': 'json',
                'encoding': 'utf8',
                'indent': 2,
            }
        })

        # Create crawler process
        process = CrawlerProcess(settings)

        spider_class = RSSSpider if options['spider_type'] == 'rss' else NewsSiteSpider

        for source in sources:
            if source.should_crawl():
                self.stdout.write(
                    self.style.SUCCESS(f'Starting crawler for {source.name}')
                )
                process.crawl(spider_class, source_id=source.id)
            else:
                self.stdout.write(
                    self.style.WARNING(f'Skipping {source.name} - not due for crawl')
                )

        # Start the crawling process
        process.start()
        self.stdout.write(
            self.style.SUCCESS('Crawling completed')
        ) 