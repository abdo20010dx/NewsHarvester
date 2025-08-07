import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { RSSFeedConfig, Article, ExtractedPostData } from './util/global-methods';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Process a single RSS feed
   */
  @Post('rss/process')
  async processRSSFeed(@Body() config: RSSFeedConfig): Promise<Article[]> {
    return await this.appService.processRSSFeed(config);
  }

  /**
   * Process RSS feed and extract full content
   */
  @Post('rss/harvest')
  async harvestNewsWithFullContent(@Body() config: RSSFeedConfig): Promise<Article[]> {
    return await this.appService.harvestNewsWithFullContent(config);
  }

  /**
   * Process multiple RSS feeds
   */
  @Post('rss/process-multiple')
  async processMultipleFeeds(@Body() configs: RSSFeedConfig[]): Promise<any> {
    const results = await this.appService.processMultipleFeeds(configs);
    
    // Convert Map to object for JSON response
    const response: { [key: string]: Article[] } = {};
    results.forEach((articles, key) => {
      response[key] = articles;
    });
    
    return response;
  }

  /**
   * Process multiple RSS feeds (alias for batch processing)
   */
  @Post('rss/batch')
  async batchProcessFeeds(@Body() body: { feeds: RSSFeedConfig[] }): Promise<any> {
    const results = await this.appService.processMultipleFeeds(body.feeds);
    
    // Convert Map to object for JSON response
    const response: { [key: string]: Article[] } = {};
    results.forEach((articles, key) => {
      response[key] = articles;
    });
    
    return response;
  }

  /**
   * Extract content from a specific URL
   */
  @Post('content/extract')
  async extractContentFromURL(
    @Body() config: RSSFeedConfig,
    @Query('url') url: string
  ): Promise<string> {
    try {
      if (!url) {
        throw new Error('URL parameter is required');
      }
      
      const content = await this.appService.extractContentFromURL(config, url);
      return content;
    } catch (error) {
      console.error('Content extraction error:', error);
      throw error;
    }
  }

  /**
   * Extract comprehensive post data from a specific URL
   */
  @Post('post/extract')
  async extractPostDataFromURL(
    @Body() config: RSSFeedConfig,
    @Query('url') url: string
  ): Promise<ExtractedPostData> {
    try {
      if (!url) {
        throw new Error('URL parameter is required');
      }
      
      const postData = await this.appService.extractPostDataFromURL(config, url);
      return postData;
    } catch (error) {
      console.error('Post data extraction error:', error);
      throw error;
    }
  }

  /**
   * Get sample feed configurations
   */
  @Get('feeds/sample')
  getSampleFeedConfigs(): RSSFeedConfig[] {
    return this.appService.getSampleFeedConfigs();
  }

  /**
   * Process all sample feeds
   */
  @Get('feeds/process-all')
  async processAllSampleFeeds(): Promise<any> {
    const results = await this.appService.processAllSampleFeeds();
    
    // Convert Map to object for JSON response
    const response: { [key: string]: Article[] } = {};
    results.forEach((articles, key) => {
      response[key] = articles;
    });
    
    return response;
  }

  /**
   * Quick test endpoint with a single feed
   */
  @Get('test/techcrunch')
  async testTechCrunch(): Promise<Article[]> {
    const config: RSSFeedConfig = {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    };
    
    return await this.appService.processRSSFeed(config);
  }

  /**
   * Health check endpoint
   */
  @Get('health')
  health(): { status: string; timestamp: string } {
    return {
      status: 'OK',
      timestamp: new Date().toISOString()
    };
  }
}
