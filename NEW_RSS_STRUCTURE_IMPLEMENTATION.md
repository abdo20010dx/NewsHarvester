# New RSS Feed Structure Implementation

## Overview

The RSS feed system has been completely restructured to work with individual feed folders organized by country, with proper file management for caching responses and HTML examples.

## New Structure

### Directory Organization
```
src/rss-feed/
├── usa/
│   ├── new-york-times/
│   │   ├── new-york-times-rss-categories.json
│   │   ├── rss-response-example.xml
│   │   └── url-article-html-example.html
│   ├── washington-post/
│   │   ├── washington-post-rss-categories.json
│   │   ├── rss-response-example.xml
│   │   └── url-article-html-example.html
│   └── ... (18 more feeds)
├── uk/
├── canada/
└── ... (other countries)
```

### File Structure for Each Feed

#### 1. `{feed-name}-rss-categories.json`
Contains all RSS categories and URLs for the feed:
```json
{
  "feedName": "techcrunch",
  "displayName": "TechCrunch",
  "urls": [
    {
      "category": "technology",
      "url": "https://techcrunch.com/feed/"
    },
    {
      "category": "startups",
      "url": "https://techcrunch.com/tag/startups/feed/"
    },
    {
      "category": "ai",
      "url": "https://techcrunch.com/tag/artificial-intelligence/feed/"
    }
  ]
}
```

#### 2. `rss-response-example.xml`
Cached RSS response from the feed. This file is:
- Created when first fetching RSS data
- Updated if parsing fails (structure changes)
- Used to avoid repeated API calls
- Can be XML or JSON format (automatically detected)

#### 3. `url-article-html-example.html`
Cached HTML response from an article URL. This file is:
- Created when first extracting article content
- Updated if content extraction fails (structure changes)
- Used to understand HTML structure for content extraction
- Helps identify where article content, images, and metadata are located

## USA News Feeds Created

20 major USA news feeds have been implemented:

### Traditional News Sources
1. **New York Times** - 10 categories (news, world, politics, business, technology, science, health, sports, arts, opinion)
2. **Washington Post** - 7 categories (news, world, politics, business, technology, sports, opinion)
3. **Los Angeles Times** - 7 categories (news, world, politics, business, technology, sports, opinion)
4. **Chicago Tribune** - 4 categories (news, politics, business, sports)
5. **Baltimore Sun** - 3 categories (news, business, sports)
6. **Denver Post** - 3 categories (news, business, sports)

### Technology News Sources
7. **TechCrunch** - 3 categories (technology, startups, ai)
8. **The Verge** - 3 categories (technology, science, culture)
9. **Wired** - 3 categories (technology, science, business)
10. **Ars Technica** - 3 categories (technology, science, business)
11. **Engadget** - 3 categories (technology, gaming, automotive)
12. **Gizmodo** - 3 categories (technology, science, gaming)
13. **Mashable** - 3 categories (technology, entertainment, science)
14. **VentureBeat** - 3 categories (technology, ai, gaming)

### Major News Networks
15. **Reuters** - 4 categories (news, world, business, technology)
16. **Bloomberg** - 3 categories (business, technology, politics)
17. **CNN** - 4 categories (news, world, business, technology)
18. **NBC News** - 4 categories (news, world, business, technology)
19. **ABC News** - 4 categories (news, world, business, technology)
20. **USA Today** - 4 categories (news, world, business, technology)

**Total: 81 RSS feed configurations across 20 feeds**

## Service Updates

### SpiderAggregatorService Changes

#### 1. New File Management Methods
- `processRSSFeedWithFileManagement()` - Handles RSS feed processing with caching
- `extractArticleContentWithFileManagement()` - Handles HTML content extraction with caching

#### 2. Updated RSS Feed Discovery
- `getRSSFeedsForCountry()` - Now scans individual feed folders instead of a single JSON file
- Automatically discovers all feeds in a country folder
- Parses category files to build RSS feed configurations

#### 3. Smart Caching System
- **RSS Responses**: Cached as XML or JSON files
- **HTML Content**: Cached as HTML files
- **Error Recovery**: Automatically refetches and recaches if parsing fails
- **Structure Detection**: Uses cached examples to understand content structure

## Benefits of New Structure

### 1. **Modularity**
- Each feed is self-contained in its own folder
- Easy to add/remove individual feeds
- No need to modify a central configuration file

### 2. **Caching & Performance**
- RSS responses are cached to avoid repeated API calls
- HTML examples are cached to understand content structure
- Faster subsequent requests using cached data

### 3. **Error Recovery**
- If RSS structure changes, cached response is updated
- If HTML structure changes, cached example is updated
- Graceful degradation when feeds are unavailable

### 4. **Scalability**
- Easy to add new countries and feeds
- Each feed can have its own structure and configuration
- No central bottleneck for feed management

### 5. **Maintenance**
- Clear separation of concerns
- Easy to debug individual feed issues
- Simple to update feed URLs or categories

## Usage

### API Endpoint
The existing API endpoint remains the same:
```
GET /news/usa
```

### Response Format
The response format is unchanged and follows the `AggregatedNewsResponseDto` structure:
```json
{
  "totalArticles": 25,
  "feeds": {
    "techcrunch": {
      "articleCount": 10,
      "articles": [...]
    },
    "new-york-times": {
      "articleCount": 15,
      "articles": [...]
    }
  }
}
```

## File Management Logic

### RSS Response Caching
1. **Check Cache**: Look for `rss-response-example.xml` or `rss-response-example.json`
2. **Parse Cache**: Try to parse cached response
3. **Fetch Fresh**: If cache missing or invalid, fetch from RSS URL
4. **Save Cache**: Save response as XML or JSON based on content type
5. **Process**: Use SmartRSSParser to extract articles

### HTML Content Caching
1. **Check Cache**: Look for `url-article-html-example.html`
2. **Validate Cache**: Ensure HTML content is not empty
3. **Fetch Fresh**: If cache missing or invalid, fetch from article URL
4. **Save Cache**: Save HTML response
5. **Extract**: Use SmartHTMLParser to extract article content

### Error Handling
- **RSS Fetch Failures**: Log error and continue with other feeds
- **HTML Fetch Failures**: Log error and return basic article data
- **Parsing Failures**: Update cache with fresh data and retry
- **Structure Changes**: Automatically detect and update cached examples

## Future Enhancements

### 1. **Additional Countries**
- Easy to add new country folders
- Follow the same structure as USA feeds
- Automatic discovery by the service

### 2. **Feed Categories**
- Each feed can have multiple categories
- Categories are automatically discovered from RSS categories files
- Easy to add new categories to existing feeds

### 3. **Content Extraction**
- Improved HTML structure detection
- Better metadata extraction
- Enhanced image and video detection

### 4. **Performance Optimization**
- Background cache updates
- Intelligent cache invalidation
- Parallel feed processing

## Implementation Status

✅ **Completed**
- 20 USA news feeds created
- Service updated to use new structure
- File management system implemented
- Caching and error recovery working
- All feeds properly structured and tested

✅ **Ready for Production**
- All 81 RSS feed configurations working
- Service integration tested and verified
- Error handling and recovery implemented
- Performance optimized with caching

The new RSS feed structure is now fully implemented and ready for use with the `/news/usa` endpoint!
