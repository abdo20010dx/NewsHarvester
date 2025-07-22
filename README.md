# NewsHarvester

A comprehensive news harvesting and analysis platform built with Django, Scrapy, and NLP technologies. NewsHarvester crawls news sources, processes articles with natural language processing, and provides a rich API for accessing enriched news data.

## 🚀 Features

- **Web Crawling**: Automated crawling of news websites and RSS feeds using Scrapy
- **NLP Processing**: Advanced text analysis including:
  - Named Entity Recognition (NER)
  - Sentiment Analysis
  - Language Detection
  - Topic Classification
  - Text Embeddings for similarity search
- **RESTful API**: Complete API for accessing articles and NLP results
- **Deduplication**: Automatic detection and filtering of duplicate articles
- **Scalable Architecture**: Built with Django, PostgreSQL, and Elasticsearch
- **Docker Support**: Easy deployment with Docker Compose

## 🏗️ Architecture

```
NewsHarvester/
├── newsharvester/          # Django project settings
├── articles/              # News article models and API
├── crawlers/              # Scrapy spiders and crawling logic
├── nlp_processor/         # NLP processing and analysis
├── pipeline.py           # Main orchestration pipeline
└── docker-compose.yml    # Docker deployment
```

## 🛠️ Technology Stack

- **Backend**: Django 4.2, Django REST Framework
- **Database**: PostgreSQL with pgvector extension
- **Search**: Elasticsearch
- **Crawling**: Scrapy, BeautifulSoup, requests
- **NLP**: spaCy, Transformers, Sentence Transformers
- **Task Queue**: Celery with Redis
- **Deployment**: Docker, Docker Compose

## 📋 Prerequisites

- Python 3.11+
- PostgreSQL 15+
- Redis
- Elasticsearch 8.11+
- Docker & Docker Compose (optional)

## 🚀 Quick Start

### Option 1: Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NewsHarvester
   ```

2. **Start services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Run migrations**
   ```bash
   docker-compose exec web python manage.py migrate
   ```

4. **Create superuser**
   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```

5. **Access the application**
   - Django Admin: http://localhost:8000/admin/
   - API: http://localhost:8000/api/

### Option 2: Local Development

1. **Clone and setup**
   ```bash
   git clone <repository-url>
   cd NewsHarvester
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. **Setup environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Setup database**
   ```bash
   # Install PostgreSQL and create database
   createdb newsharvester
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Download spaCy model**
   ```bash
   python -m spacy download en_core_web_sm
   ```

6. **Start the application**
   ```bash
   python manage.py runserver
   ```

## 📊 API Endpoints

### Articles API
- `GET /api/articles/` - List all articles
- `GET /api/articles/{id}/` - Get specific article
- `GET /api/articles/recent/` - Get recent articles
- `GET /api/articles/trending/` - Get trending articles
- `GET /api/articles/by_sentiment/` - Get articles by sentiment
- `GET /api/articles/unprocessed/` - Get unprocessed articles
- `POST /api/articles/{id}/reprocess/` - Reprocess article

### Crawlers API
- `GET /api/crawlers/sources/` - List news sources
- `POST /api/crawlers/sources/{id}/start_crawl/` - Start crawling
- `GET /api/crawlers/sources/due_for_crawl/` - Get sources due for crawling
- `GET /api/crawlers/sessions/` - List crawl sessions

### NLP API
- `POST /api/nlp/processing/process_batch/` - Process articles with NLP
- `POST /api/nlp/processing/{id}/process_article/` - Process specific article
- `GET /api/nlp/processing/stats/` - Get processing statistics
- `GET /api/nlp/similarity/{id}/similar_articles/` - Find similar articles
- `GET /api/nlp/similarity/by_topic/` - Find articles by topic
- `GET /api/nlp/similarity/by_entity/` - Find articles by entity

## 🕷️ Adding News Sources

1. **Via Django Admin**
   - Go to http://localhost:8000/admin/
   - Navigate to "Crawlers" > "News sources"
   - Add a new source with RSS feed or website URL

2. **Via API**
   ```bash
   curl -X POST http://localhost:8000/api/crawlers/sources/ \
     -H "Content-Type: application/json" \
     -d '{
       "name": "TechCrunch",
       "domain": "techcrunch.com",
       "url": "https://techcrunch.com",
       "rss_feed": "https://techcrunch.com/feed/",
       "language": "en",
       "priority": 1
     }'
   ```

## 🔄 Running the Pipeline

### Manual Pipeline Execution
```bash
# Run full pipeline for all sources
python pipeline.py --full

# Run scheduled pipeline (only due sources)
python pipeline.py --scheduled

# Run for specific sources
python pipeline.py --source-ids 1 2 3

# Clean up old data
python pipeline.py --cleanup 30
```

### Django Management Commands
```bash
# Run crawlers
python manage.py run_crawler --all
python manage.py run_crawler --source-id 1

# Process articles with NLP
python manage.py shell
>>> from nlp_processor.services import NLPProcessingService
>>> NLPProcessingService.process_unprocessed_articles()
```

## 🧠 NLP Features

### Named Entity Recognition
Extracts people, organizations, locations, and other entities from articles.

### Sentiment Analysis
Classifies articles as positive, negative, or neutral with confidence scores.

### Topic Classification
Automatically categorizes articles into topics like:
- Politics
- Technology
- Business
- Sports
- Entertainment
- Health
- Science

### Similarity Search
Find similar articles using vector embeddings and cosine similarity.

## 📈 Monitoring and Analytics

### Pipeline Statistics
```bash
curl http://localhost:8000/api/articles/stats/
```

### NLP Processing Stats
```bash
curl http://localhost:8000/api/nlp/processing/stats/
```

### Crawl Session History
```bash
curl http://localhost:8000/api/crawlers/sessions/recent/
```

## 🔧 Configuration

### Environment Variables
- `DB_NAME`, `DB_USER`, `DB_PASSWORD` - Database configuration
- `ELASTICSEARCH_HOST`, `ELASTICSEARCH_PORT` - Elasticsearch settings
- `REDIS_URL` - Redis connection for Celery
- `CRAWLER_DELAY` - Delay between crawler requests
- `SPACY_MODEL` - spaCy model to use

### Crawler Settings
Configure crawler behavior in `crawlers/models.py`:
- Crawl intervals
- Custom CSS selectors
- Rate limiting
- User agents

## 🚀 Production Deployment

1. **Update settings for production**
   ```python
   DEBUG = False
   ALLOWED_HOSTS = ['your-domain.com']
   ```

2. **Setup SSL/TLS certificates**

3. **Configure database backups**

4. **Setup monitoring and logging**

5. **Use production-grade servers**
   - Gunicorn for Django
   - Nginx as reverse proxy
   - Supervisor for process management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the API endpoints

## 🔮 Roadmap

- [ ] Advanced topic modeling
- [ ] Multi-language support
- [ ] Real-time streaming
- [ ] Advanced analytics dashboard
- [ ] Machine learning model training
- [ ] API rate limiting and authentication
- [ ] Webhook notifications
- [ ] Export functionality