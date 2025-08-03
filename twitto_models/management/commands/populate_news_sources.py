from django.core.management.base import BaseCommand
from django.db import transaction
from twitto_models.models import NewsSource
import importlib
import os


class Command(BaseCommand):
    help = 'Populate news sources from country chunks'

    def add_arguments(self, parser):
        parser.add_argument(
            '--chunk',
            type=int,
            help='Specific chunk number to process (1-20)',
        )
        parser.add_argument(
            '--clear',
            action='store_true',
            help='Clear existing news sources before importing',
        )

    def handle(self, *args, **options):
        chunk_number = options.get('chunk')
        clear_existing = options.get('clear')

        if clear_existing:
            self.stdout.write('Clearing existing news sources...')
            NewsSource.objects.all().delete()
            self.stdout.write(self.style.SUCCESS('Existing news sources cleared.'))

        if chunk_number:
            # Process specific chunk
            self.process_chunk(chunk_number)
        else:
            # Process all chunks
            for chunk_num in range(1, 21):
                self.process_chunk(chunk_num)

        self.stdout.write(self.style.SUCCESS('News sources population completed!'))

    def process_chunk(self, chunk_number):
        """Process a specific country chunk"""
        try:
            # Import the chunk module
            module_name = f'country_chunk_{chunk_number:03d}'
            chunk_module = importlib.import_module(module_name)
            
            # Get the NEWS_SOURCES_CHUNK dictionary
            news_sources_chunk = chunk_module.NEWS_SOURCES_CHUNK
            
            self.stdout.write(f'Processing chunk {chunk_number}...')
            
            with transaction.atomic():
                for country_code, country_data in news_sources_chunk.items():
                    country_name = country_data['name']
                    language = country_data['language']
                    sources = country_data['sources']
                    
                    for source in sources:
                        source_name = source['name']
                        domain = source['domain']
                        rss_feeds = source['rss_feeds']
                        
                        # Create or update the news source
                        news_source, created = NewsSource.objects.get_or_create(
                            domain=domain,
                            country_code=country_code,
                            defaults={
                                'name': source_name,
                                'country_name': country_name,
                                'language': language,
                                'rss_feeds': rss_feeds,
                                'is_active': True,
                            }
                        )
                        
                        if created:
                            self.stdout.write(f'  Created: {source_name} ({country_code})')
                        else:
                            # Update existing source
                            news_source.name = source_name
                            news_source.country_name = country_name
                            news_source.language = language
                            news_source.rss_feeds = rss_feeds
                            news_source.save()
                            self.stdout.write(f'  Updated: {source_name} ({country_code})')
            
            self.stdout.write(self.style.SUCCESS(f'Chunk {chunk_number} processed successfully.'))
            
        except ImportError:
            self.stdout.write(self.style.WARNING(f'Chunk {chunk_number} module not found.'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error processing chunk {chunk_number}: {str(e)}')) 