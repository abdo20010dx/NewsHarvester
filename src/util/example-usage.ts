import { 
  SmartRSSParser, 
  SmartHTMLParser, 
  NewsHarvester, 
  RSSFeedConfig, 
  Article 
} from './global-methods';

/**
 * Example usage of the smart global methods
 */
export class ExampleUsage {
  
  /**
   * Example: Process a single RSS feed
   */
  static async processSingleFeed(): Promise<void> {
    const config: RSSFeedConfig = {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    };

    try {
      console.log('Processing RSS feed...');
      const articles = await SmartRSSParser.processRSSFeed(config);
      console.log(`Found ${articles.length} articles`);
      
      // Display first few articles
      articles.slice(0, 3).forEach((article, index) => {
        console.log(`\nArticle ${index + 1}:`);
        console.log(`Title: ${article.title}`);
        console.log(`Link: ${article.link}`);
        console.log(`Description: ${article.description.substring(0, 100)}...`);
      });
    } catch (error) {
      console.error('Error processing RSS feed:', error);
    }
  }

  /**
   * Example: Process RSS feed and extract full content
   */
  static async processFeedWithFullContent(): Promise<void> {
    const config: RSSFeedConfig = {
      country: 'usa',
      category: 'news',
      feedName: 'reuters',
      url: 'https://feeds.reuters.com/reuters/topNews'
    };

    try {
      console.log('Processing RSS feed with full content extraction...');
      const articles = await NewsHarvester.harvestNews(config);
      console.log(`Found ${articles.length} articles with full content`);
      
      // Display first article with full content
      if (articles.length > 0) {
        const article = articles[0];
        console.log(`\nFirst Article:`);
        console.log(`Title: ${article.title}`);
        console.log(`Link: ${article.link}`);
        console.log(`Content length: ${article.content?.length || 0} characters`);
        if (article.content) {
          console.log(`Content preview: ${article.content.substring(0, 200)}...`);
        }
      }
    } catch (error) {
      console.error('Error processing feed with full content:', error);
    }
  }

  /**
   * Example: Process multiple RSS feeds
   */
  static async processMultipleFeeds(): Promise<void> {
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
      },
      {
        country: 'usa',
        category: 'business',
        feedName: 'bloomberg',
        url: 'https://feeds.bloomberg.com/politics/news.rss'
      }
    ];

    try {
      console.log('Processing multiple RSS feeds...');
      const results = await NewsHarvester.harvestMultipleFeeds(configs);
      
      results.forEach((articles, key) => {
        console.log(`\n${key}: ${articles.length} articles`);
        if (articles.length > 0) {
          console.log(`First article: ${articles[0].title}`);
        }
      });
    } catch (error) {
      console.error('Error processing multiple feeds:', error);
    }
  }

  /**
   * Example: Extract content from a specific URL
   */
  static async extractContentFromURL(): Promise<void> {
    const config: RSSFeedConfig = {
      country: 'usa',
      category: 'technology',
      feedName: 'example',
      url: 'https://example.com'
    };

    const url = 'https://techcrunch.com/2024/01/01/example-article/';

    try {
      console.log('Extracting content from URL...');
      const content = await SmartHTMLParser.processHTMLContent(config, url);
      console.log(`Extracted content length: ${content.length} characters`);
      console.log(`Content preview: ${content.substring(0, 300)}...`);
    } catch (error) {
      console.error('Error extracting content from URL:', error);
    }
  }

  /**
   * Example: Batch process feeds with error handling
   */
  static async batchProcessFeeds(): Promise<void> {
    const feedConfigs: RSSFeedConfig[] = [
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

    const results: { [key: string]: Article[] } = {};

    for (const config of feedConfigs) {
      try {
        console.log(`Processing ${config.feedName}...`);
        const articles = await NewsHarvester.harvestNews(config);
        const key = `${config.country}-${config.category}-${config.feedName}`;
        results[key] = articles;
        console.log(`✓ ${config.feedName}: ${articles.length} articles`);
      } catch (error) {
        console.error(`✗ ${config.feedName}: Failed to process`, error);
        const key = `${config.country}-${config.category}-${config.feedName}`;
        results[key] = [];
      }
    }

    // Summary
    console.log('\n=== Processing Summary ===');
    Object.entries(results).forEach(([key, articles]) => {
      console.log(`${key}: ${articles.length} articles`);
    });
  }
}

// Export for use in other files
export default ExampleUsage; 