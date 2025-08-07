# Smart Global Methods for NewsHarvester

This module provides smart, dynamic methods for processing RSS feeds and extracting content from HTML pages. The methods are designed to be completely dynamic and can handle any RSS feed structure or HTML content automatically.

## Features

- **Dynamic RSS Structure Detection**: Automatically detects RSS feed structure using pattern recognition
- **Smart HTML Content Extraction**: Intelligently extracts content from HTML pages
- **Caching System**: Saves detected structures for future use to improve performance
- **Error Handling**: Robust error handling with retries and fallbacks
- **Batch Processing**: Process multiple feeds efficiently
- **Type Safety**: Full TypeScript support with comprehensive interfaces

## Classes and Interfaces

### Core Interfaces

```typescript
interface RSSFeedConfig {
  country: string;
  category: string;
  feedName: string;
  url: string;
}

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  category?: string;
  image?: string;
  content?: string;
}

interface RSSStructure {
  itemTag: string;
  titleTag: string;
  linkTag: string;
  descriptionTag: string;
  pubDateTag: string;
  authorTag?: string;
  categoryTag?: string;
  imageTag?: string;
}

interface HTMLStructure {
  contentSelectors: string[];
  titleSelector?: string;
  authorSelector?: string;
  dateSelector?: string;
  imageSelector?: string;
}
```

### Main Classes

#### 1. SmartRSSParser

Handles RSS feed processing with dynamic structure detection.

```typescript
// Process a single RSS feed
const config: RSSFeedConfig = {
  country: 'usa',
  category: 'technology',
  feedName: 'techcrunch',
  url: 'https://techcrunch.com/feed/'
};

const articles = await SmartRSSParser.processRSSFeed(config);
```

**Key Methods:**
- `processRSSFeed(config: RSSFeedConfig): Promise<Article[]>` - Main method to process RSS feeds
- `detectRSSStructure(xmlContent: string): RSSStructure` - Dynamically detects RSS structure
- `extractArticles(xmlContent: string, structure: RSSStructure): Article[]` - Extracts articles using detected structure

#### 2. SmartHTMLParser

Handles HTML content extraction with intelligent structure detection.

```typescript
// Extract content from a URL
const content = await SmartHTMLParser.processHTMLContent(config, 'https://example.com/article');
```

**Key Methods:**
- `processHTMLContent(config: RSSFeedConfig, url: string): Promise<string>` - Main method to extract HTML content
- `detectHTMLStructure(htmlContent: string): HTMLStructure` - Dynamically detects HTML structure
- `extractContent(htmlContent: string, structure: HTMLStructure): string` - Extracts content using detected structure

#### 3. NewsHarvester

Main orchestrator class that combines RSS and HTML processing.

```typescript
// Process RSS feed and extract full content
const articles = await NewsHarvester.harvestNews(config);

// Process multiple feeds
const results = await NewsHarvester.harvestMultipleFeeds(configs);
```

**Key Methods:**
- `harvestNews(config: RSSFeedConfig): Promise<Article[]>` - Process RSS feed and extract full content
- `harvestMultipleFeeds(configs: RSSFeedConfig[]): Promise<Map<string, Article[]>>` - Process multiple feeds

## Usage Examples

### Basic RSS Feed Processing

```typescript
import { SmartRSSParser, RSSFeedConfig } from './global-methods';

const config: RSSFeedConfig = {
  country: 'usa',
  category: 'technology',
  feedName: 'techcrunch',
  url: 'https://techcrunch.com/feed/'
};

try {
  const articles = await SmartRSSParser.processRSSFeed(config);
  console.log(`Found ${articles.length} articles`);
  
  articles.forEach(article => {
    console.log(`Title: ${article.title}`);
    console.log(`Link: ${article.link}`);
    console.log(`Description: ${article.description}`);
  });
} catch (error) {
  console.error('Error processing RSS feed:', error);
}
```

### Full Content Extraction

```typescript
import { NewsHarvester, RSSFeedConfig } from './global-methods';

const config: RSSFeedConfig = {
  country: 'usa',
  category: 'news',
  feedName: 'reuters',
  url: 'https://feeds.reuters.com/reuters/topNews'
};

try {
  const articles = await NewsHarvester.harvestNews(config);
  
  articles.forEach(article => {
    console.log(`Title: ${article.title}`);
    console.log(`Full Content: ${article.content?.substring(0, 200)}...`);
  });
} catch (error) {
  console.error('Error harvesting news:', error);
}
```

### Batch Processing Multiple Feeds

```typescript
import { NewsHarvester, RSSFeedConfig } from './global-methods';

const configs: RSSFeedConfig[] = [
  {
    country: 'usa',
    category: 'technology',
    feedName: 'techcrunch',
    url: 'https://techcrunch.com/feed/'
  },
  {
    country: 'usa',
    category: 'news',
    feedName: 'reuters',
    url: 'https://feeds.reuters.com/reuters/topNews'
  }
];

try {
  const results = await NewsHarvester.harvestMultipleFeeds(configs);
  
  results.forEach((articles, key) => {
    console.log(`${key}: ${articles.length} articles`);
  });
} catch (error) {
  console.error('Error processing multiple feeds:', error);
}
```

### HTML Content Extraction

```typescript
import { SmartHTMLParser, RSSFeedConfig } from './global-methods';

const config: RSSFeedConfig = {
  country: 'usa',
  category: 'technology',
  feedName: 'example',
  url: 'https://example.com'
};

const url = 'https://techcrunch.com/2024/01/01/example-article/';

try {
  const content = await SmartHTMLParser.processHTMLContent(config, url);
  console.log(`Extracted content: ${content.substring(0, 300)}...`);
} catch (error) {
  console.error('Error extracting content:', error);
}
```

## Caching System

The system automatically caches detected structures to improve performance:

- **RSS Structures**: Cached for 7 days
- **HTML Structures**: Cached for 30 days
- **Cache Location**: `./cache/` and `./structures/` directories

## Error Handling

The methods include robust error handling:

- **Retries**: Automatic retries for network requests (3 attempts)
- **Fallbacks**: Graceful degradation when structures can't be detected
- **Logging**: Comprehensive error logging for debugging
- **Graceful Failures**: Individual feed failures don't stop batch processing

## Performance Features

- **Structure Caching**: Detected structures are saved and reused
- **Batch Processing**: Efficient processing of multiple feeds
- **Parallel Processing**: HTML content extraction runs in parallel
- **Memory Efficient**: Streams content when possible

## Dependencies

- `axios`: HTTP client for fetching RSS and HTML content
- `xml2js`: XML parsing for RSS feeds
- `fs`: File system operations for caching
- `path`: Path utilities for file operations

## Installation

```bash
npm install axios xml2js @types/xml2js
```

## TypeScript Support

All methods are fully typed with TypeScript interfaces:

```typescript
// Import types
import { 
  RSSFeedConfig, 
  Article, 
  RSSStructure, 
  HTMLStructure 
} from './global-methods';

// Use with full type safety
const config: RSSFeedConfig = {
  country: 'usa',
  category: 'technology',
  feedName: 'techcrunch',
  url: 'https://techcrunch.com/feed/'
};

const articles: Article[] = await SmartRSSParser.processRSSFeed(config);
```

## Best Practices

1. **Error Handling**: Always wrap calls in try-catch blocks
2. **Batch Processing**: Use `harvestMultipleFeeds` for multiple feeds
3. **Caching**: Let the system cache structures automatically
4. **Rate Limiting**: Be respectful of RSS feed providers
5. **Monitoring**: Check logs for any processing errors

## Troubleshooting

### Common Issues

1. **Network Errors**: Check internet connection and feed URLs
2. **Structure Detection**: Some feeds may have unusual structures
3. **Content Extraction**: Some websites may block content extraction
4. **Rate Limiting**: Some feeds may have rate limits

### Debug Mode

Enable debug logging by checking console output for detailed error messages.

## Contributing

When adding new features:

1. Maintain backward compatibility
2. Add comprehensive error handling
3. Include TypeScript types
4. Add tests for new functionality
5. Update documentation 