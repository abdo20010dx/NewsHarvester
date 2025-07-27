# NewsHarvester — MSN.com Edition

A comprehensive news harvesting, enrichment, and indexing system for MSN.com with robust crawling, NLP processing, and search capabilities.

## 🚀 Features

- **Live News Crawler**: Fetches latest news from MSN.com every 15 minutes
- **Historical Archive Crawler**: Crawls all past news with checkpoint functionality
- **NLP Pipeline**: Entity extraction, sentiment analysis, and embeddings generation
- **PostgreSQL Database**: Robust data storage with Django ORM and full-text search
- **Vector Search**: Optional pgvector integration for embeddings
- **RESTful API**: Complete API for accessing harvested news data
- **Scheduled Pipeline**: Automated orchestration of all components

## 📋 Prerequisites

- Python 3.8+
- PostgreSQL 12+
- Redis (optional, for Celery)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NewsHarvester
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Install spaCy language model**
   ```bash
   python -m spacy download en_core_web_sm
   ```

4. **Setup PostgreSQL**
   ```sql
   -- Create database and schema
   CREATE DATABASE postgres;
   CREATE SCHEMA twitto;
   
   -- Install pgvector extension (optional, for embeddings)
   CREATE EXTENSION IF NOT EXISTS vector;
   ```

5. **Setup PostgreSQL Extensions** (optional)
   ```sql
   -- Install pgvector for vector search (optional)
   CREATE EXTENSION IF NOT EXISTS vector;
   ```

## ⚙️ Configuration

### Database Configuration
The project is configured for:
- **Database**: `postgres`
- **Schema**: `twitto`
- **User**: `postgres`
- **Password**: `passaword`

Update `newsharvester/settings.py` if needed.

### Environment Variables
Create a `.env` file (optional):
```env
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=passaword
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

## 🗄️ Database Setup

1. **Run Django migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

2. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

## 🕷️ Crawlers

### Live News Spider
Fetches latest news from MSN.com every 15 minutes.

```bash
# Run live crawler manually
scrapy crawl msn_live
```

### Historical Spider
Crawls all past news with checkpoint functionality.

```bash
# Run historical crawler manually
scrapy crawl msn_historical
```

## 🔧 NLP Processing

### Process Articles
```bash
# Process a batch of articles
python -c "from nlp.processor import process_article_batch; process_article_batch(20)"

# Process a single article
python -c "from nlp.processor import process_single_article; process_single_article('article-uuid')"
```

### NLP Features
- **Entity Extraction**: People, places, organizations
- **Sentiment Analysis**: Positive, negative, neutral
- **Language Detection**: Automatic language identification
- **Embeddings**: Vector representations for similarity search

## 🔍 PostgreSQL Search

### Search Articles
```bash
# Search articles using PostgreSQL full-text search
python -c "from indexer.postgres_client import search_articles; print(search_articles('technology news'))"

# Get recent articles
python -c "from indexer.postgres_client import get_recent_articles; print(get_recent_articles(10))"

# Get article statistics
python -c "from indexer.postgres_client import get_article_statistics; print(get_article_statistics())"
```

## 🚀 Pipeline Orchestration

### Run Single Pipeline
```bash
python pipeline/pipeline.py --mode single
```

### Run Historical Pipeline
```bash
python pipeline/pipeline.py --mode historical
```

### Run Scheduled Pipeline
```bash
python pipeline/pipeline.py --mode scheduler
```

### Get Pipeline Statistics
```bash
python pipeline/pipeline.py --stats
```

## 📊 API Endpoints

Start the Django development server:
```bash
python manage.py runserver
```

### Available Endpoints

- `GET /api/articles/` - List all articles with pagination
- `GET /api/articles/<uuid>/` - Get article details
- `GET /api/search/?q=<query>` - Search articles
- `GET /api/categories/` - List all categories
- `GET /api/countries/` - List all countries

### Example API Usage
```bash
# Get articles
curl "http://localhost:8000/api/articles/?page=1&limit=10"

# Search articles
curl "http://localhost:8000/api/search/?q=technology&category=Technology"

# Get article details
curl "http://localhost:8000/api/articles/123e4567-e89b-12d3-a456-426614174000/"
```

## 📁 Project Structure

```
NewsHarvester/
├── newsharvester/          # Django project settings
├── news/                   # Django app with models and views
├── crawlers/               # Scrapy crawlers
│   ├── spiders/           # MSN.com spiders
│   ├── items.py           # Scrapy items
│   ├── pipelines.py       # Data processing pipelines
│   └── middlewares.py     # Scrapy middlewares
├── nlp/                   # NLP processing
│   └── processor.py       # NLP pipeline
├── indexer/               # PostgreSQL search integration
│   └── postgres_client.py # PostgreSQL client
├── pipeline/              # Pipeline orchestration
│   └── pipeline.py        # Main pipeline
├── logs/                  # Log files
├── requirements.txt       # Python dependencies
├── scrapy.cfg            # Scrapy configuration
└── manage.py             # Django management
```

## 🔄 Scheduled Jobs

The pipeline includes automated scheduling:

- **Live Crawler**: Every 15 minutes
- **NLP Processing**: Every 5 minutes
- **Indexing**: Every 5 minutes
- **Historical Crawler**: Daily at 2:00 AM
- **Data Cleanup**: Weekly on Sunday at 3:00 AM

## 📈 Monitoring

### Logs
- Pipeline logs: `logs/pipeline.log`
- Django logs: `logs/newsharvester.log`
- Scrapy logs: Console output

### Statistics
```bash
# Get comprehensive statistics
python pipeline/pipeline.py --stats
```

## 🛡️ Error Handling

- **Duplicate Detection**: Automatic deduplication by content hash
- **Checkpoint System**: Resume historical crawling from last position
- **Error Recovery**: Failed articles marked for retry
- **Graceful Degradation**: System continues if components fail

## 🔧 Customization

### Adding New Categories
Update `crawlers/spiders/msn_live_spider.py` and `msn_historical_spider.py`:
```python
start_urls = [
    # Add new URLs here
    'https://www.msn.com/en-us/news/your-category',
]
```

### Modifying NLP Models
Update `nlp/processor.py`:
```python
# Change spaCy model
model_name = 'en_core_web_lg'  # Larger model

# Change sentiment model
self.sentiment_analyzer = pipeline(
    "sentiment-analysis",
    model="your-custom-model"
)
```

### Custom Elasticsearch Mapping
Update `indexer/es_client.py` in the `create_index_if_not_exists` method.

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check database credentials in settings.py

2. **PostgreSQL Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in settings.py
   - Verify schema 'twitto' exists

3. **NLP Model Loading Error**
   - Install spaCy model: `python -m spacy download en_core_web_sm`
   - Check available disk space

4. **Scrapy Crawler Issues**
   - Check MSN.com robots.txt compliance
   - Verify network connectivity
   - Review logs for specific error messages

### Performance Tuning

- **Database**: Add indexes for frequently queried fields
- **PostgreSQL**: Optimize full-text search with proper indexes
- **Crawling**: Modify `DOWNLOAD_DELAY` and `CONCURRENT_REQUESTS`
- **NLP**: Use smaller models for faster processing

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the logs in the `logs/` directory
- Review the troubleshooting section
- Create an issue in the repository

---

**Note**: This system is designed for educational and research purposes. Please respect MSN.com's terms of service and robots.txt when using the crawlers.