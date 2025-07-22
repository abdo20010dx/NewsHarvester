from django.core.management.base import BaseCommand
from crawlers.models import NewsSource
from django.utils import timezone

class Command(BaseCommand):
    help = 'Setup sample news sources, countries, and categories'

    def handle(self, *args, **options):
        self.stdout.write('Setting up sample news sources...')
        
        # Sample news sources with different countries and categories
        sources_data = [
            # US News Sources
            {
                'name': 'CNN',
                'domain': 'cnn.com',
                'url': 'https://www.cnn.com',
                'rss_feed': 'http://rss.cnn.com/rss/edition.rss',
                'priority': 1,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 1800,  # 30 minutes
            },
            {
                'name': 'BBC News',
                'domain': 'bbc.com',
                'url': 'https://www.bbc.com/news',
                'rss_feed': 'http://feeds.bbci.co.uk/news/rss.xml',
                'priority': 1,
                'language': 'en',
                'country': 'GB',
                'crawl_interval': 1800,
            },
            {
                'name': 'Reuters',
                'domain': 'reuters.com',
                'url': 'https://www.reuters.com',
                'rss_feed': 'http://feeds.reuters.com/reuters/topNews',
                'priority': 1,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 1800,
            },
            {
                'name': 'The New York Times',
                'domain': 'nytimes.com',
                'url': 'https://www.nytimes.com',
                'rss_feed': 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
                'priority': 1,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 3600,
            },
            {
                'name': 'The Guardian',
                'domain': 'theguardian.com',
                'url': 'https://www.theguardian.com',
                'rss_feed': 'https://www.theguardian.com/world/rss',
                'priority': 1,
                'language': 'en',
                'country': 'GB',
                'crawl_interval': 3600,
            },
            
            # Technology News
            {
                'name': 'TechCrunch',
                'domain': 'techcrunch.com',
                'url': 'https://techcrunch.com',
                'rss_feed': 'https://techcrunch.com/feed/',
                'priority': 2,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 1800,
            },
            {
                'name': 'The Verge',
                'domain': 'theverge.com',
                'url': 'https://www.theverge.com',
                'rss_feed': 'https://www.theverge.com/rss/index.xml',
                'priority': 2,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 1800,
            },
            {
                'name': 'Ars Technica',
                'domain': 'arstechnica.com',
                'url': 'https://arstechnica.com',
                'rss_feed': 'https://feeds.arstechnica.com/arstechnica/index',
                'priority': 2,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 3600,
            },
            
            # Business News
            {
                'name': 'Bloomberg',
                'domain': 'bloomberg.com',
                'url': 'https://www.bloomberg.com',
                'rss_feed': 'https://feeds.bloomberg.com/markets/news.rss',
                'priority': 2,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 1800,
            },
            {
                'name': 'Financial Times',
                'domain': 'ft.com',
                'url': 'https://www.ft.com',
                'rss_feed': 'https://www.ft.com/world?format=rss',
                'priority': 2,
                'language': 'en',
                'country': 'GB',
                'crawl_interval': 3600,
            },
            
            # European News
            {
                'name': 'Deutsche Welle',
                'domain': 'dw.com',
                'url': 'https://www.dw.com',
                'rss_feed': 'https://rss.dw.com/xml/rss-de-all',
                'priority': 2,
                'language': 'en',
                'country': 'DE',
                'crawl_interval': 3600,
            },
            {
                'name': 'Le Monde',
                'domain': 'lemonde.fr',
                'url': 'https://www.lemonde.fr',
                'rss_feed': 'https://www.lemonde.fr/rss/une.xml',
                'priority': 2,
                'language': 'fr',
                'country': 'FR',
                'crawl_interval': 3600,
            },
            
            # Asian News
            {
                'name': 'Al Jazeera',
                'domain': 'aljazeera.com',
                'url': 'https://www.aljazeera.com',
                'rss_feed': 'https://www.aljazeera.com/xml/rss/all.xml',
                'priority': 2,
                'language': 'en',
                'country': 'QA',
                'crawl_interval': 3600,
            },
            {
                'name': 'South China Morning Post',
                'domain': 'scmp.com',
                'url': 'https://www.scmp.com',
                'rss_feed': 'https://www.scmp.com/rss/91/feed',
                'priority': 2,
                'language': 'en',
                'country': 'HK',
                'crawl_interval': 3600,
            },
            
            # Sports News
            {
                'name': 'ESPN',
                'domain': 'espn.com',
                'url': 'https://www.espn.com',
                'rss_feed': 'https://www.espn.com/espn/rss/news',
                'priority': 3,
                'language': 'en',
                'country': 'US',
                'crawl_interval': 1800,
            },
            
            # Science News
            {
                'name': 'Nature',
                'domain': 'nature.com',
                'url': 'https://www.nature.com',
                'rss_feed': 'https://www.nature.com/nature.rss',
                'priority': 3,
                'language': 'en',
                'country': 'GB',
                'crawl_interval': 7200,  # 2 hours
            },
        ]
        
        # Create or update news sources
        created_count = 0
        updated_count = 0
        
        for source_data in sources_data:
            source, created = NewsSource.objects.get_or_create(
                domain=source_data['domain'],
                defaults=source_data
            )
            
            if created:
                created_count += 1
                self.stdout.write(f'Created: {source.name}')
            else:
                # Update existing source
                for key, value in source_data.items():
                    setattr(source, key, value)
                source.save()
                updated_count += 1
                self.stdout.write(f'Updated: {source.name}')
        
        self.stdout.write(
            self.style.SUCCESS(
                f'Setup completed! Created {created_count} sources, updated {updated_count} sources'
            )
        )
        
        # Display summary by country
        self.stdout.write('\n📊 News Sources by Country:')
        countries = NewsSource.objects.values_list('country', flat=True).distinct()
        for country in countries:
            if country:
                count = NewsSource.objects.filter(country=country).count()
                self.stdout.write(f'  {country}: {count} sources')
        
        # Display summary by language
        self.stdout.write('\n🌍 News Sources by Language:')
        languages = NewsSource.objects.values_list('language', flat=True).distinct()
        for lang in languages:
            if lang:
                count = NewsSource.objects.filter(language=lang).count()
                self.stdout.write(f'  {lang}: {count} sources')
        
        # Display priority distribution
        self.stdout.write('\n⭐ Priority Distribution:')
        priorities = NewsSource.objects.values_list('priority', flat=True).distinct()
        for priority in sorted(priorities):
            count = NewsSource.objects.filter(priority=priority).count()
            self.stdout.write(f'  Priority {priority}: {count} sources') 