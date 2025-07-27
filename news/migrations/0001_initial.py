# Generated manually for NewsHarvester

from django.db import migrations, models
import django.contrib.postgres.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NewsArticle',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('article_id', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('link', models.TextField(blank=True, null=True, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('pub_date', models.DateTimeField(blank=True, null=True)),
                ('image_url', models.TextField(blank=True, null=True)),
                ('video_url', models.CharField(blank=True, max_length=255, null=True)),
                ('source_id', models.CharField(blank=True, max_length=255, null=True)),
                ('source_name', models.CharField(blank=True, max_length=255, null=True)),
                ('source_priority', models.BigIntegerField(blank=True, null=True)),
                ('keywords', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), blank=True, default=list, size=None)),
                ('creator', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), blank=True, default=list, size=None)),
                ('country', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), blank=True, default=list, size=None)),
                ('category', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), blank=True, default=list, size=None)),
                ('topics', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), blank=True, default=list, size=None)),
                ('language', models.CharField(blank=True, max_length=20, null=True)),
                ('entities', models.JSONField(blank=True, default=list, null=True)),
                ('sentiment', models.CharField(blank=True, max_length=50, null=True)),
                ('sentiment_score', models.FloatField(blank=True, null=True)),
                ('embedding', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), blank=True, null=True, size=None)),
                ('content_hash', models.CharField(blank=True, max_length=64, null=True, unique=True)),
                ('processing_status', models.CharField(choices=[('raw', 'Raw'), ('processed', 'Processed'), ('error', 'Error')], default='raw', max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'news_article',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='CrawlCheckpoint',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('spider_name', models.CharField(max_length=100)),
                ('last_page', models.IntegerField(default=0)),
                ('last_url', models.TextField(blank=True, null=True)),
                ('category', models.CharField(blank=True, max_length=100, null=True)),
                ('country', models.CharField(blank=True, max_length=100, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'crawl_checkpoint',
            },
        ),
        migrations.AlterUniqueTogether(
            name='crawlcheckpoint',
            unique_together={('spider_name', 'category', 'country')},
        ),
    ]
