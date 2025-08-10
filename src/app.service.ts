import { Injectable } from '@nestjs/common';
import {
  NewsHarvester,
  SmartRSSParser,
  SmartHTMLParser,
  RSSFeedConfig,
  Article,
  ExtractedPostData
} from './util/global-methods';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NewsHarvester API is running!';
  }

  /**
   * Process a single RSS feed using smart global methods
   */
  async processRSSFeed(config: RSSFeedConfig): Promise<Article[]> {
    try {
      console.log(`Processing RSS feed: ${config.feedName}`);
      const articles = await SmartRSSParser.processRSSFeed(config);
      console.log(`Found ${articles.length} articles from ${config.feedName}`);
      return articles;
    } catch (error) {
      console.error(`Error processing RSS feed ${config.feedName}:`, error);
      throw error;
    }
  }

  /**
   * Process RSS feed and extract full content
   */
  async harvestNewsWithFullContent(config: RSSFeedConfig): Promise<Article[]> {
    try {
      console.log(`Harvesting news with full content: ${config.feedName}`);
      const articles = await NewsHarvester.harvestNews(config);
      console.log(`Harvested ${articles.length} articles with full content from ${config.feedName}`);
      return articles;
    } catch (error) {
      console.error(`Error harvesting news from ${config.feedName}:`, error);
      throw error;
    }
  }

  /**
   * Process multiple RSS feeds
   */
  async processMultipleFeeds(configs: RSSFeedConfig[]): Promise<Map<string, Article[]>> {
    try {
      console.log(`Processing ${configs.length} RSS feeds`);
      const results = await NewsHarvester.harvestMultipleFeeds(configs);

      // Log summary
      results.forEach((articles, key) => {
        console.log(`${key}: ${articles.length} articles`);
      });

      return results;
    } catch (error) {
      console.error('Error processing multiple feeds:', error);
      throw error;
    }
  }

  /**
   * Extract content from a specific URL
   */
  async extractContentFromURL(config: RSSFeedConfig, url: string): Promise<string> {
    try {
      console.log(`Extracting content from: ${url}`);
      const content = await SmartHTMLParser.processHTMLContent(config, url);
      console.log(`Extracted ${content.length} characters from ${url}`);
      return content;
    } catch (error) {
      console.error(`Error extracting content from ${url}:`, error);
      throw error;
    }
  }

  /**
   * Extract comprehensive post data from a specific URL
   */
  async extractPostDataFromURL(config: RSSFeedConfig, url: string): Promise<ExtractedPostData> {
    try {
      console.log(`Extracting comprehensive post data from: ${url}`);
      const postData = await SmartHTMLParser.extractPostData(config, url);
      console.log(`Extracted post data: ${postData.title} (${postData.wordCount} words)`);
      return postData;
    } catch (error) {
      console.error(`Error extracting post data from ${url}:`, error);
      throw error;
    }
  }

  /**
   * Get sample RSS feed configurations
   */
  getSampleFeedConfigs(): RSSFeedConfig[] {
    return [
      {
        country: 'usa',
        category: 'technology',
        feedName: 'new-york-times',
        url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml'
      },
      {
        country: 'usa',
        category: 'news',
        feedName: 'washington-post',
        url: 'https://feeds.washingtonpost.com/rss/national'
      },
      {
        country: 'usa',
        category: 'business',
        feedName: 'wall-street-journal',
        url: 'https://feeds.wsj.com/rss/WSJcomMarkets'
      }
    ];
  }

  /**
   * Process all sample feeds
   */
  async processAllSampleFeeds(): Promise<Map<string, Article[]>> {
    const configs = this.getSampleFeedConfigs();
    return await this.processMultipleFeeds(configs);
  }
}
