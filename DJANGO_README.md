# NewsHarvester Django Project

This Django project provides a comprehensive news harvesting and management system with PostgreSQL database integration.

## Features

- **User Management**: Custom User model with extended fields
- **News Articles**: Complete post/article management with metadata
- **User Interactions**: Likes, comments, shares (Imotions)
- **Session Management**: User session tracking
- **News Sources**: Management of RSS feeds and news sources
- **Crawl Jobs**: Tracking of news crawling operations
- **Django Admin**: Full admin interface for all models

## Database Models

### Core Models

1. **User** - Extended Django User model with additional fields
2. **Post** - News articles with comprehensive metadata
3. **Immotion** - User interactions (likes, comments, shares)
4. **Session** - User session management
5. **Auth** - Authentication tokens

### News Harvesting Models

6. **NewsSource** - RSS feeds and news sources by country
7. **CrawlJob** - Tracking of news crawling operations

## Setup Instructions

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Database Configuration

Update `news_harvester_django/settings.py` with your PostgreSQL credentials:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "twitto",
        "USER": "postgres",
        "PASSWORD": "password",
        "HOST": "localhost",
        "PORT": "5432",
        "OPTIONS": {
            "options": "-c search_path=twitto"
        }
    }
}
```

### 3. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Create Superuser

```bash
python manage.py createsuperuser
```

### 5. Populate News Sources

Import news sources from the country chunks:

```bash
# Import all chunks
python manage.py populate_news_sources

# Import specific chunk
python manage.py populate_news_sources --chunk 1

# Clear existing and reimport
python manage.py populate_news_sources --clear
```

### 6. Run Development Server

```bash
python manage.py runserver
```

## Model Structure

### User Model
- Extends Django's AbstractUser
- Additional fields: fname, lname, address, age, phone, image, language, country
- Uses email as the primary identifier

### Post Model
- Comprehensive news article storage
- Fields for content, metadata, analysis, and processing status
- Virtual properties for likes, dislikes, comments, shares
- Full-text search capabilities
- Geographic and demographic tagging

### Immotion Model
- User interactions with posts
- Like/dislike system (1 for like, -1 for dislike, 0 for neutral)
- Comments and sharing functionality
- Unique constraint on user-post combinations

### NewsSource Model
- RSS feed management
- Country and language categorization
- Active/inactive status tracking
- Imported from country chunks

### CrawlJob Model
- Tracking of news crawling operations
- Status monitoring (pending, running, completed, failed, cancelled)
- Article count tracking
- Error handling and reporting

## Admin Interface

Access the Django admin at `/admin/` to manage:

- Users and their profiles
- News articles and their metadata
- User interactions and comments
- News sources and RSS feeds
- Crawl jobs and their status

## Management Commands

### populate_news_sources
Imports news sources from the country chunk files:

```bash
python manage.py populate_news_sources [--chunk N] [--clear]
```

Options:
- `--chunk N`: Process specific chunk number (1-20)
- `--clear`: Clear existing news sources before importing

## Database Schema

The project uses PostgreSQL with the following key features:

- **JSON Fields**: For arrays and complex data (tags, categories, entities)
- **Indexes**: Optimized for common queries (pub_date, source_country, etc.)
- **Foreign Keys**: Proper relationships between models
- **Unique Constraints**: Content hash, user-post combinations
- **Timestamps**: Created, updated, and deleted timestamps

## Integration with Existing System

This Django project is designed to work alongside the existing:

- **TypeORM Backend**: Compatible database schema
- **Next.js Frontend**: Can be extended with Django REST Framework
- **Country Chunks**: Direct import of news sources
- **NewsHarvester**: Enhanced with Django ORM capabilities

## Development

### Adding New Models

1. Create the model in `twitto_models/models.py`
2. Register it in `twitto_models/admin.py`
3. Create and run migrations
4. Update documentation

### Custom Management Commands

Add new commands in `twitto_models/management/commands/`

### API Development

Consider adding Django REST Framework for API endpoints:

```bash
pip install djangorestframework
```

## Production Deployment

For production deployment:

1. Set `DEBUG = False` in settings
2. Configure proper database credentials
3. Set up static file serving
4. Configure proper security settings
5. Use environment variables for sensitive data

## Contributing

1. Follow Django coding standards
2. Add tests for new functionality
3. Update documentation
4. Use meaningful commit messages

## License

This project is part of the Twitto news platform. 