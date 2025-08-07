# NewsHarvester API Documentation

This API provides smart, dynamic RSS feed processing and content extraction capabilities using advanced pattern recognition and machine learning techniques.

## Base URL
```
http://localhost:3000
```

## Authentication
Currently, no authentication is required for these endpoints.

## Endpoints

### Health Check
**GET** `/health`

Check if the API is running properly.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

---

### Get Sample Feed Configurations
**GET** `/feeds/sample`

Get predefined RSS feed configurations for testing.

**Response:**
```json
[
  {
    "country": "usa",
    "category": "technology",
    "feedName": "techcrunch",
    "url": "https://techcrunch.com/feed/"
  },
  {
    "country": "usa",
    "category": "news",
    "feedName": "reuters",
    "url": "https://feeds.reuters.com/reuters/topNews"
  },
  {
    "country": "usa",
    "category": "business",
    "feedName": "bloomberg",
    "url": "https://feeds.bloomberg.com/politics/news.rss"
  }
]
```

---

### Process Single RSS Feed
**POST** `/rss/process`

Process a single RSS feed and extract basic article information.

**Request Body:**
```json
{
  "country": "usa",
  "category": "technology",
  "feedName": "techcrunch",
  "url": "https://techcrunch.com/feed/"
}
```

**Response:**
```json
[
  {
    "title": "Article Title",
    "link": "https://example.com/article",
    "description": "Article description...",
    "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT",
    "author": "John Doe",
    "category": "Technology",
    "image": "https://example.com/image.jpg"
  }
]
```

---

### Harvest News with Full Content
**POST** `/rss/harvest`

Process RSS feed and extract full article content from each link.

**Request Body:**
```json
{
  "country": "usa",
  "category": "technology",
  "feedName": "techcrunch",
  "url": "https://techcrunch.com/feed/"
}
```

**Response:**
```json
[
  {
    "title": "Article Title",
    "link": "https://example.com/article",
    "description": "Article description...",
    "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT",
    "author": "John Doe",
    "category": "Technology",
    "image": "https://example.com/image.jpg",
    "content": "Full article content extracted from the webpage..."
  }
]
```

---

### Process Multiple RSS Feeds
**POST** `/rss/process-multiple`

Process multiple RSS feeds simultaneously.

**Request Body:**
```json
[
  {
    "country": "usa",
    "category": "technology",
    "feedName": "techcrunch",
    "url": "https://techcrunch.com/feed/"
  },
  {
    "country": "usa",
    "category": "news",
    "feedName": "reuters",
    "url": "https://feeds.reuters.com/reuters/topNews"
  }
]
```

**Response:**
```json
{
  "usa-technology-techcrunch": [
    {
      "title": "TechCrunch Article",
      "link": "https://techcrunch.com/article",
      "description": "Description...",
      "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
    }
  ],
  "usa-news-reuters": [
    {
      "title": "Reuters Article",
      "link": "https://reuters.com/article",
      "description": "Description...",
      "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
    }
  ]
}
```

---

### Extract Content from URL
**POST** `/content/extract`

Extract content from a specific URL using smart HTML parsing.

**Request Body:**
```json
{
  "country": "usa",
  "category": "technology",
  "feedName": "example",
  "url": "https://example.com"
}
```

**Query Parameters:**
- `url` (required): The URL to extract content from

**Example Request:**
```
POST /content/extract?url=https://techcrunch.com/2024/01/01/example-article/
```

**Response:**
```json
{
  "content": "Extracted article content...",
  "length": 1500
}
```

---

### Process All Sample Feeds
**GET** `/feeds/process-all`

Process all predefined sample feeds and return results.

**Response:**
```json
{
  "usa-technology-techcrunch": [
    {
      "title": "TechCrunch Article",
      "link": "https://techcrunch.com/article",
      "description": "Description...",
      "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
    }
  ],
  "usa-news-reuters": [
    {
      "title": "Reuters Article",
      "link": "https://reuters.com/article",
      "description": "Description...",
      "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
    }
  ],
  "usa-business-bloomberg": [
    {
      "title": "Bloomberg Article",
      "link": "https://bloomberg.com/article",
      "description": "Description...",
      "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
    }
  ]
}
```

---

### Quick Test Endpoint
**GET** `/test/techcrunch`

Quick test endpoint that processes TechCrunch RSS feed.

**Response:**
```json
[
  {
    "title": "TechCrunch Article",
    "link": "https://techcrunch.com/article",
    "description": "Description...",
    "pubDate": "Mon, 01 Jan 2024 12:00:00 GMT"
  }
]
```

## Data Models

### RSSFeedConfig
```typescript
interface RSSFeedConfig {
  country: string;      // Country code (e.g., "usa", "uk")
  category: string;     // Content category (e.g., "technology", "news")
  feedName: string;     // Feed identifier (e.g., "techcrunch", "reuters")
  url: string;          // RSS feed URL
}
```

### Article
```typescript
interface Article {
  title: string;        // Article title
  link: string;         // Article URL
  description: string;  // Article description/summary
  pubDate: string;      // Publication date
  author?: string;      // Author name (optional)
  category?: string;    // Article category (optional)
  image?: string;       // Featured image URL (optional)
  content?: string;     // Full article content (optional)
}
```

## Error Handling

All endpoints return appropriate HTTP status codes:

- **200**: Success
- **400**: Bad Request (invalid input)
- **500**: Internal Server Error

Error responses include a message describing the issue:

```json
{
  "message": "Error description",
  "error": "Error type",
  "statusCode": 400
}
```

## Rate Limiting

Currently, no rate limiting is implemented. However, please be respectful of RSS feed providers and avoid making excessive requests.

## Caching

The system automatically caches detected RSS and HTML structures for improved performance:

- **RSS Structures**: Cached for 7 days
- **HTML Structures**: Cached for 30 days

## Testing

You can test the API using the provided test script:

```bash
node test-global-methods.js
```

Or use curl commands:

```bash
# Health check
curl http://localhost:3000/health

# Get sample configs
curl http://localhost:3000/feeds/sample

# Process single feed
curl -X POST http://localhost:3000/rss/process \
  -H "Content-Type: application/json" \
  -d '{"country":"usa","category":"technology","feedName":"techcrunch","url":"https://techcrunch.com/feed/"}'
```

## Smart Features

### Dynamic RSS Structure Detection
The API automatically detects RSS feed structures using pattern recognition, making it compatible with any RSS feed format.

### Intelligent Content Extraction
Uses advanced algorithms to extract meaningful content from HTML pages, filtering out navigation, ads, and other non-content elements.

### Error Resilience
Individual feed failures don't stop batch processing, and the system includes automatic retries for network requests.

### Performance Optimization
- Structure caching for faster subsequent requests
- Parallel processing for multiple feeds
- Memory-efficient content handling

## Examples

### Using cURL

```bash
# Process TechCrunch feed
curl -X POST http://localhost:3000/rss/process \
  -H "Content-Type: application/json" \
  -d '{
    "country": "usa",
    "category": "technology",
    "feedName": "techcrunch",
    "url": "https://techcrunch.com/feed/"
  }'

# Extract content from URL
curl -X POST "http://localhost:3000/content/extract?url=https://example.com/article" \
  -H "Content-Type: application/json" \
  -d '{
    "country": "usa",
    "category": "technology",
    "feedName": "example",
    "url": "https://example.com"
  }'
```

### Using JavaScript/Fetch

```javascript
// Process RSS feed
const response = await fetch('http://localhost:3000/rss/process', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    country: 'usa',
    category: 'technology',
    feedName: 'techcrunch',
    url: 'https://techcrunch.com/feed/'
  })
});

const articles = await response.json();
console.log('Found', articles.length, 'articles');
```

## Support

For issues or questions, check the console logs for detailed error messages and refer to the `src/util/README.md` file for implementation details. 