# NewsHarvester API Documentation

## 🚀 Overview

NewsHarvester is a comprehensive news aggregation API that extracts top stories from RSS feeds and enriches them with full content from HTML articles. The API provides detailed article metadata, social media shares, and original URLs.

## 📚 Swagger Documentation

### Accessing the API Documentation

Once the application is running, you can access the Swagger documentation at:

```
http://localhost:3000/api
```

### API Endpoints

#### 1. Get Top Stories by Country

**Endpoint:** `GET /spider-aggregator/news/{country}`

**Description:** Retrieves top stories from RSS feeds for a specific country. The API aggregates news from multiple RSS feeds, extracts full content from HTML articles, and returns comprehensive article data including metadata, social shares, and original URLs.

**Parameters:**
- `country` (path parameter): Country name, code, or abbreviation (e.g., usa, us, united states, uk, gb, canada, ca, germany, de, etc.)

**Supported Countries and Variations:**
The API supports all countries from the targeted countries list with multiple input variations:

**Major Countries:**
- `usa`, `us`, `united states`, `united states of america`, `america`, `states` - United States
- `uk`, `united kingdom`, `great britain`, `england`, `britain`, `gb` - United Kingdom
- `canada`, `ca` - Canada
- `germany`, `deutschland`, `de` - Germany
- `france`, `fr` - France
- `australia`, `au`, `oz` - Australia
- `japan`, `jp`, `nippon` - Japan
- `india`, `in`, `bharat` - India
- `brazil`, `brasil`, `br` - Brazil
- `indonesia`, `id` - Indonesia
- `mexico`, `mx` - Mexico
- `italy`, `italia`, `it` - Italy
- `spain`, `espana`, `es` - Spain
- `south korea`, `korea`, `korean`, `kr`, `rok` - South Korea
- `netherlands`, `holland`, `nl`, `nederland` - Netherlands
- `russia`, `ru`, `russian federation` - Russia
- `turkey`, `tr`, `türkiye` - Turkey
- `argentina`, `ar` - Argentina
- `south africa`, `za`, `rsa` - South Africa
- `philippines`, `ph`, `filipinas` - Philippines
- `vietnam`, `vn`, `viet nam` - Vietnam
- `poland`, `pl`, `polska` - Poland
- `thailand`, `th`, `siam` - Thailand
- `malaysia`, `my` - Malaysia
- `nigeria`, `ng` - Nigeria
- `bangladesh`, `bd` - Bangladesh
- `pakistan`, `pk` - Pakistan
- `egypt`, `eg`, `misr` - Egypt

**European Countries:**
- `sweden`, `se`, `sverige` - Sweden
- `norway`, `no`, `norge` - Norway
- `switzerland`, `ch`, `schweiz`, `suisse` - Switzerland
- `belgium`, `be`, `belgique`, `belgië` - Belgium
- `austria`, `at`, `österreich` - Austria
- `ireland`, `ie`, `eire` - Ireland
- `singapore`, `sg` - Singapore
- `denmark`, `dk`, `danmark` - Denmark
- `finland`, `fi`, `suomi` - Finland
- `saudi arabia`, `sa`, `ksa` - Saudi Arabia
- `uae`, `united arab emirates`, `emirates`, `ae` - United Arab Emirates
- `hong kong`, `hk` - Hong Kong
- `czech republic`, `czechia`, `cz`, `czech` - Czech Republic
- `portugal`, `pt` - Portugal
- `romania`, `ro`, `românia` - Romania
- `hungary`, `hu`, `magyarország` - Hungary
- `greece`, `gr`, `hellas`, `ελλάδα` - Greece
- `ukraine`, `ua`, `ukraina` - Ukraine

**African Countries:**
- `kenya`, `ke` - Kenya
- `morocco`, `ma`, `al-maghrib` - Morocco
- `algeria`, `dz`, `al-jaza'ir` - Algeria
- `peru`, `pe` - Peru
- `ethiopia`, `et` - Ethiopia
- `iraq`, `iq`, `al-iraq` - Iraq
- `uzbekistan`, `uz` - Uzbekistan
- `myanmar`, `mm`, `burma` - Myanmar
- `kazakhstan`, `kz` - Kazakhstan
- `angola`, `ao` - Angola
- `tanzania`, `tz` - Tanzania
- `uganda`, `ug` - Uganda
- `sudan`, `sd` - Sudan
- `ghana`, `gh` - Ghana
- `afghanistan`, `af` - Afghanistan
- `nepal`, `np` - Nepal
- `cameroon`, `cm` - Cameroon
- `ivory coast`, `côte d'ivoire`, `ci` - Ivory Coast
- `senegal`, `sn` - Senegal

**Americas:**
- `colombia`, `co` - Colombia
- `chile`, `cl` - Chile
- `new zealand`, `nz` - New Zealand
- `paraguay`, `py` - Paraguay
- `bolivia`, `bo` - Bolivia
- `dominican republic`, `do`, `republica dominicana` - Dominican Republic
- `ecuador`, `ec` - Ecuador
- `costa rica`, `cr` - Costa Rica
- `panama`, `pa`, `panamá` - Panama

**Middle East:**
- `kuwait`, `kw`, `al-kuwait` - Kuwait
- `qatar`, `qa` - Qatar
- `oman`, `om` - Oman
- `bahrain`, `bh`, `al-bahrain` - Bahrain

**Eastern Europe:**
- `slovakia`, `sk`, `slovensko` - Slovakia
- `bulgaria`, `bg`, `bălgariya` - Bulgaria
- `croatia`, `hr`, `hrvatska` - Croatia
- `slovenia`, `si`, `slovenija` - Slovenia
- `lithuania`, `lt`, `lietuva` - Lithuania
- `latvia`, `lv`, `latvija` - Latvia
- `estonia`, `ee`, `eesti` - Estonia
- `serbia`, `rs`, `srbija` - Serbia
- `bosnia and herzegovina`, `bosnia & herzegovina`, `bosnia`, `ba` - Bosnia & Herzegovina
- `north macedonia`, `mk`, `macedonia` - North Macedonia
- `montenegro`, `me`, `crna gora` - Montenegro
- `luxembourg`, `lu`, `lëtzebuerg` - Luxembourg
- `malta`, `mt` - Malta
- `cyprus`, `cy`, `kýpros` - Cyprus
- `iceland`, `is`, `ísland` - Iceland
- `monaco`, `mc` - Monaco
- `liechtenstein`, `li` - Liechtenstein
- `andorra`, `ad` - Andorra
- `san marino`, `sm` - San Marino
- `maldives`, `mv` - Maldives
- `brunei`, `bn` - Brunei

**Note:** The API accepts various input formats including ISO country codes, common abbreviations, native language names, and full country names. All inputs are case-insensitive and will be normalized to the standard country identifier.

**Response Format:**
```json
{
  "totalArticles": 25,  // Total number of articles across all feeds
  "feeds": {
    "feed-name": {
      "articleCount": 10,  // Number of articles in this specific feed
      "articles": [
        {
          "title": "Article Title",
          "image": "image_url",
          "description": "Article description",
          "pubDate": "Publication date",
          "content": "Full extracted content",
          "url": "https://original-article-url.com",
          "videoUrl": "video_url_if_exists",
          "author": "Author name",
          "category": "Category",
          "tags": ["tag1", "tag2"],
          "readTime": "5 min read",
          "wordCount": 250,
          "language": "en",
          "canonicalUrl": "canonical_url",
          "socialShares": {
            "facebook": 150,
            "twitter": 89,
            "linkedin": 45
          },
          "metadata": {
            "ogTitle": "Open Graph title",
            "ogDescription": "Open Graph description",
            "ogImage": "Open Graph image",
            "ogType": "article",
            "twitterCard": "summary_large_image",
            "twitterTitle": "Twitter title",
            "twitterDescription": "Twitter description",
            "twitterImage": "Twitter image"
          }
        }
      ]
    }
  }
}
```

**Example Request:**
```bash
curl -X GET "http://localhost:3000/spider-aggregator/news/usa" \
  -H "Content-Type: application/json"
```

**Example Response:**
```json
{
  "totalArticles": 25,  // Total number of articles across all feeds
  "feeds": {
    "techcrunch": {
      "articleCount": 10,  // Number of articles in this specific feed
      "articles": [
        {
          "title": "Latest Technology News from TechCrunch",
          "image": "https://example.com/tech-image.jpg",
          "description": "This is a sample article about the latest developments in technology and innovation.",
          "pubDate": "2024-08-08T01:15:00.000Z",
          "content": "This is the full content of the article. It contains detailed information about the latest technology trends...",
          "url": "https://techcrunch.com/article/latest-tech-news",
          "videoUrl": "https://www.youtube.com/embed/sample-video",
          "author": "Tech Reporter",
          "category": "technology",
          "tags": ["technology", "AI", "innovation", "tech news", "digital transformation"],
          "readTime": "5 min read",
          "wordCount": 250,
          "language": "en",
          "canonicalUrl": "https://techcrunch.com/article/latest-tech-news",
          "socialShares": {
            "facebook": 150,
            "twitter": 89,
            "linkedin": 45
          },
          "metadata": {
            "ogTitle": "Latest Technology News and Trends",
            "ogDescription": "Discover the latest developments in technology and innovation",
            "ogImage": "https://example.com/og-tech-image.jpg",
            "ogType": "article",
            "twitterCard": "summary_large_image",
            "twitterTitle": "Latest Technology News and Trends",
            "twitterDescription": "Discover the latest developments in technology and innovation",
            "twitterImage": "https://example.com/twitter-tech-image.jpg"
          }
        }
      ]
    }
  }
}
```

#### 2. Other Endpoints

The API also includes standard CRUD operations for spider aggregators:

- `POST /spider-aggregator` - Create a new spider aggregator
- `GET /spider-aggregator` - Get all spider aggregators
- `GET /spider-aggregator/{id}` - Get a spider aggregator by ID
- `PATCH /spider-aggregator/{id}` - Update a spider aggregator
- `DELETE /spider-aggregator/{id}` - Delete a spider aggregator

## 🔧 Setup and Installation

### Prerequisites

- Node.js v18.16.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NewsHarvester
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. Start the development server:
```bash
npm run start:dev
```

5. Access the Swagger documentation:
```
http://localhost:3000/api
```

## 📊 Features

### ✅ Implemented Features

- **Country-based RSS Feed Aggregation**: Dynamically finds and processes RSS feeds for different countries
- **Article Content Extraction**: Extracts full content from HTML articles using smart parsing
- **Original URL Inclusion**: Each article includes the original URL for direct access
- **Social Media Data**: Facebook, Twitter, and LinkedIn share counts
- **Open Graph & Twitter Metadata**: Complete metadata for social sharing
- **Article Tags**: Categorized tags for better content discovery
- **Read Time & Word Count**: User engagement metrics
- **Video URL Support**: Optional video content when available
- **Author Information**: Article attribution
- **Category Classification**: Content categorization
- **Comprehensive API Documentation**: Full Swagger/OpenAPI documentation

### 🎯 Key Benefits

1. **Comprehensive Content**: Full article content extraction from HTML
2. **Rich Metadata**: Social shares, tags, read time, and more
3. **Original URLs**: Direct access to source articles
4. **Country Support**: 100+ countries with various name formats
5. **Error Handling**: Graceful degradation if individual feeds fail
6. **API Documentation**: Complete Swagger documentation for easy integration

## 🚀 Usage Examples

### JavaScript/Node.js

```javascript
const axios = require('axios');

async function getTopStories(country) {
  try {
    const response = await axios.get(`http://localhost:3000/spider-aggregator/news/${country}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top stories:', error.message);
  }
}

// Example usage
getTopStories('usa').then(data => {
  console.log('Top stories:', data);
});
```

### Python

```python
import requests

def get_top_stories(country):
    try:
        response = requests.get(f'http://localhost:3000/spider-aggregator/news/{country}')
        return response.json()
    except Exception as e:
        print(f'Error fetching top stories: {e}')

# Example usage
data = get_top_stories('usa')
print('Top stories:', data)
```

### cURL

```bash
# Get top stories for USA
curl -X GET "http://localhost:3000/spider-aggregator/news/usa" \
  -H "Content-Type: application/json"

# Get top stories for UK
curl -X GET "http://localhost:3000/spider-aggregator/news/uk" \
  -H "Content-Type: application/json"

# Get top stories for Canada
curl -X GET "http://localhost:3000/spider-aggregator/news/canada" \
  -H "Content-Type: application/json"
```

## 🔍 Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid country parameter
- **404 Not Found**: No RSS feeds found for the specified country
- **500 Internal Server Error**: Error during content extraction

## 📝 Notes

- The API automatically normalizes country names (e.g., "USA", "United States", "us" all map to "usa")
- RSS feeds are cached for performance
- Content extraction includes fallback mechanisms for different HTML structures
- The API returns up to 10 top stories per feed
- All timestamps are in ISO 8601 format

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
