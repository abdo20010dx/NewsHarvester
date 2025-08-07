import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import { parseString } from 'xml2js';
import * as cheerio from 'cheerio';

// Types for our dynamic system
export interface RSSFeedConfig {
  country: string;
  category: string;
  feedName: string;
  url: string;
}

export interface RSSStructure {
  itemTag: string;
  titleTag: string;
  linkTag: string;
  descriptionTag: string;
  pubDateTag: string;
  authorTag?: string;
  categoryTag?: string;
  imageTag?: string;
}

export interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  category?: string;
  image?: string;
  content?: string;
  videoUrl?: string;
  tags?: string[];
  readTime?: string;
  socialShares?: {
    facebook?: number;
    twitter?: number;
    linkedin?: number;
  };
  metadata?: {
    wordCount?: number;
    language?: string;
    lastModified?: string;
    canonicalUrl?: string;
  };
}

export interface HTMLStructure {
  contentSelectors: string[];
  titleSelector?: string;
  authorSelector?: string;
  dateSelector?: string;
  imageSelector?: string;
  videoSelector?: string;
  descriptionSelector?: string;
  categorySelector?: string;
  tagsSelector?: string;
  readTimeSelector?: string;
  socialShareSelector?: string;
}

export interface FeedMetadata {
  country: string;
  category: string;
  feedName: string;
  structure: RSSStructure;
  lastUpdated: string;
  sampleArticles: Article[];
}

export interface HTMLMetadata {
  country: string;
  category: string;
  feedName: string;
  structure: HTMLStructure;
  lastUpdated: string;
  sampleContent: string;
}

export interface ExtractedPostData {
  title: string;
  content: string;
  description: string;
  author?: string;
  publishDate?: string;
  lastModified?: string;
  image?: string;
  videoUrl?: string;
  category?: string;
  tags: string[];
  readTime?: string;
  wordCount?: number;
  language?: string;
  canonicalUrl?: string;
  socialShares?: {
    facebook?: number;
    twitter?: number;
    linkedin?: number;
  };
  metadata?: {
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  };
}

/**
 * Smart RSS Feed Parser - Dynamically detects RSS structure and extracts articles
 */
export class SmartRSSParser {
  private static readonly CACHE_DIR = path.join(process.cwd(), 'cache');
  private static readonly STRUCTURES_DIR = path.join(process.cwd(), 'structures');

  /**
   * Initialize directories for caching and structure storage
   */
  private static ensureDirectories(): void {
    [this.CACHE_DIR, this.STRUCTURES_DIR].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  /**
   * Fetch RSS feed content with error handling and retries
   */
  private static async fetchRSSContent(url: string, retries = 3): Promise<string> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(url, {
          timeout: 10000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; NewsHarvester/1.0)',
          },
        });
        return response.data;
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
    throw new Error(`Failed to fetch RSS content from ${url} after ${retries} retries`);
  }

  /**
   * Dynamically detect RSS structure using pattern recognition
   */
  private static detectRSSStructure(xmlContent: string): RSSStructure {
    const structure: RSSStructure = {
      itemTag: '',
      titleTag: '',
      linkTag: '',
      descriptionTag: '',
      pubDateTag: '',
    };

    // Common RSS item patterns
    const itemPatterns = [
      /<item[^>]*>([\s\S]*?)<\/item>/gi,
      /<entry[^>]*>([\s\S]*?)<\/entry>/gi,
      /<article[^>]*>([\s\S]*?)<\/article>/gi,
    ];

    let itemContent = '';
    for (const pattern of itemPatterns) {
      const matches = xmlContent.match(pattern);
      if (matches && matches.length > 0) {
        itemContent = matches[0];
        structure.itemTag = pattern.source.match(/<(\w+)/)?.[1] || 'item';
        break;
      }
    }

    if (!itemContent) {
      throw new Error('No RSS item structure detected');
    }

    // Detect common tag patterns
    const tagPatterns = {
      title: /<(title|name|headline)[^>]*>([^<]+)<\/\1>/gi,
      link: /<(link|url|href)[^>]*>([^<]+)<\/\1>/gi,
      description: /<(description|summary|content|excerpt)[^>]*>([^<]+)<\/\1>/gi,
      pubDate: /<(pubDate|date|published|time)[^>]*>([^<]+)<\/\1>/gi,
      author: /<(author|creator|writer)[^>]*>([^<]+)<\/\1>/gi,
      category: /<(category|tag|section)[^>]*>([^<]+)<\/\1>/gi,
      image: /<(image|img|thumbnail|media:content)[^>]*>([^<]+)<\/\1>/gi,
    };

    // Find the most common tags
    for (const [key, pattern] of Object.entries(tagPatterns)) {
      const matches = itemContent.match(pattern);
      if (matches && matches.length > 0) {
        const tagName = matches[0].match(/<(\w+)/)?.[1];
        if (tagName) {
          structure[`${key}Tag` as keyof RSSStructure] = tagName;
        }
      }
    }

    // Fallback to common RSS tag names if not detected
    if (!structure.titleTag) structure.titleTag = 'title';
    if (!structure.linkTag) structure.linkTag = 'link';
    if (!structure.descriptionTag) structure.descriptionTag = 'description';
    if (!structure.pubDateTag) structure.pubDateTag = 'pubDate';

    return structure;
  }

  /**
   * Extract articles from RSS content using detected structure
   */
  private static extractArticles(xmlContent: string, structure: RSSStructure): Article[] {
    const articles: Article[] = [];
    const itemRegex = new RegExp(`<${structure.itemTag}[^>]*>([\\s\\S]*?)<\\/${structure.itemTag}>`, 'gi');
    const items = xmlContent.match(itemRegex) || [];

    for (const item of items) {
      const article: Article = {
        title: '',
        link: '',
        description: '',
        pubDate: '',
      };

      // Extract title
      const titleRegex = new RegExp(`<${structure.titleTag}[^>]*>([^<]+)<\\/${structure.titleTag}>`, 'i');
      const titleMatch = item.match(titleRegex);
      if (titleMatch) article.title = titleMatch[1].trim();

      // Extract link
      const linkRegex = new RegExp(`<${structure.linkTag}[^>]*>([^<]+)<\\/${structure.linkTag}>`, 'i');
      const linkMatch = item.match(linkRegex);
      if (linkMatch) article.link = linkMatch[1].trim();

      // Extract description
      const descRegex = new RegExp(`<${structure.descriptionTag}[^>]*>([^<]+)<\\/${structure.descriptionTag}>`, 'i');
      const descMatch = item.match(descRegex);
      if (descMatch) article.description = descMatch[1].trim();

      // Extract publication date
      const dateRegex = new RegExp(`<${structure.pubDateTag}[^>]*>([^<]+)<\\/${structure.pubDateTag}>`, 'i');
      const dateMatch = item.match(dateRegex);
      if (dateMatch) article.pubDate = dateMatch[1].trim();

      // Extract optional fields
      if (structure.authorTag) {
        const authorRegex = new RegExp(`<${structure.authorTag}[^>]*>([^<]+)<\\/${structure.authorTag}>`, 'i');
        const authorMatch = item.match(authorRegex);
        if (authorMatch) article.author = authorMatch[1].trim();
      }

      if (structure.categoryTag) {
        const categoryRegex = new RegExp(`<${structure.categoryTag}[^>]*>([^<]+)<\\/${structure.categoryTag}>`, 'i');
        const categoryMatch = item.match(categoryRegex);
        if (categoryMatch) article.category = categoryMatch[1].trim();
      }

      if (structure.imageTag) {
        const imageRegex = new RegExp(`<${structure.imageTag}[^>]*>([^<]+)<\\/${structure.imageTag}>`, 'i');
        const imageMatch = item.match(imageRegex);
        if (imageMatch) article.image = imageMatch[1].trim();
      }

      // Only add articles with at least title and link
      if (article.title && article.link) {
        articles.push(article);
      }
    }

    return articles;
  }

  /**
   * Save RSS structure for future use
   */
  private static saveRSSStructure(config: RSSFeedConfig, structure: RSSStructure, articles: Article[]): void {
    this.ensureDirectories();
    
    const metadata: FeedMetadata = {
      country: config.country,
      category: config.category,
      feedName: config.feedName,
      structure,
      lastUpdated: new Date().toISOString(),
      sampleArticles: articles.slice(0, 3), // Save first 3 articles as samples
    };

    const filename = `${config.country}-${config.category}-${config.feedName}-rss-structure.json`;
    const filepath = path.join(this.STRUCTURES_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(metadata, null, 2));
  }

  /**
   * Load cached RSS structure if available
   */
  private static loadRSSStructure(config: RSSFeedConfig): RSSStructure | null {
    this.ensureDirectories();
    
    const filename = `${config.country}-${config.category}-${config.feedName}-rss-structure.json`;
    const filepath = path.join(this.STRUCTURES_DIR, filename);
    
    if (fs.existsSync(filepath)) {
      try {
        const metadata: FeedMetadata = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        // Check if structure is not too old (7 days)
        const lastUpdated = new Date(metadata.lastUpdated);
        const daysDiff = (Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysDiff < 7) {
          return metadata.structure;
        }
      } catch (error) {
        console.warn(`Failed to load cached structure for ${filename}:`, error);
      }
    }
    
    return null;
  }

  /**
   * Main method to process RSS feed
   */
  public static async processRSSFeed(config: RSSFeedConfig): Promise<Article[]> {
    try {
      // Try to load cached structure first
      let structure = this.loadRSSStructure(config);
      
      if (!structure) {
        // Fetch and detect structure
        const xmlContent = await this.fetchRSSContent(config.url);
        structure = this.detectRSSStructure(xmlContent);
      }

      // Extract articles using the structure
      const xmlContent = await this.fetchRSSContent(config.url);
      const articles = this.extractArticles(xmlContent, structure);

      // Save structure for future use
      this.saveRSSStructure(config, structure, articles);

      return articles;
    } catch (error) {
      console.error(`Error processing RSS feed ${config.url}:`, error);
      // Return empty array instead of throwing to allow graceful degradation
      return [];
    }
  }
}

/**
 * Smart HTML Parser - Dynamically detects HTML structure and extracts content
 */
export class SmartHTMLParser {
  private static readonly HTML_CACHE_DIR = path.join(process.cwd(), 'html-cache');

  /**
   * Initialize HTML cache directory
   */
  private static ensureDirectories(): void {
    if (!fs.existsSync(this.HTML_CACHE_DIR)) {
      fs.mkdirSync(this.HTML_CACHE_DIR, { recursive: true });
    }
  }

  /**
   * Fetch HTML content with error handling
   */
  private static async fetchHTMLContent(url: string, retries = 3): Promise<string> {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get(url, {
          timeout: 15000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; NewsHarvester/1.0)',
          },
        });
        return response.data;
      } catch (error) {
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
    throw new Error(`Failed to fetch HTML content from ${url} after ${retries} retries`);
  }

  /**
   * Dynamically detect comprehensive HTML structure using cheerio
   */
  private static detectHTMLStructure(htmlContent: string): HTMLStructure {
    const structure: HTMLStructure = {
      contentSelectors: [],
    };

    try {
      const $ = cheerio.load(htmlContent);
      
      // Remove unwanted elements for cleaner analysis
      $('script, style, nav, header, footer, aside, .ad, .ads, .advertisement, .social-share, .comments, .related-posts').remove();
      
      // ===== CONTENT SELECTORS =====
      const contentSelectors = [
        'article',
        'main',
        '.content',
        '.post-content',
        '.entry-content',
        '.article-content',
        '.story-content',
        '[role="main"]',
        '.main-content',
        '.post-body',
        '.article-body',
        '.post-text',
        '.entry-text',
        '.article-text',
        '.content-body',
        '.article-body',
        '.post-body',
        '.entry-body',
        '.story-body',
        '.content-area',
        '.main-article',
        '.post-main',
        '.article-main',
        '.content-main',
        '.text-content',
        '.article-text',
        '.post-text',
        '.entry-text',
        '.story-text'
      ];

      // Find the best content area
      for (const selector of contentSelectors) {
        const elements = $(selector);
        if (elements.length > 0) {
          const text = elements.text().trim();
          if (text.length > 300) {
            structure.contentSelectors.push(selector);
            break;
          }
        }
      }

      // Fallback: find div with most text
      if (structure.contentSelectors.length === 0) {
        let maxLength = 0;
        let bestSelector = '';

        $('div').each((i, elem) => {
          const text = $(elem).text().trim();
          if (text.length > maxLength && text.length > 200) {
            maxLength = text.length;
            bestSelector = `div:nth-child(${i + 1})`;
          }
        });

        if (bestSelector) {
          structure.contentSelectors.push(bestSelector);
        }
      }

      // ===== TITLE SELECTORS =====
      const titleSelectors = [
        'h1',
        '.title',
        '.headline',
        '.post-title',
        '.entry-title',
        '.article-title',
        'title',
        '[property="og:title"]',
        '[name="twitter:title"]'
      ];

      for (const selector of titleSelectors) {
        const title = $(selector).first().text().trim();
        if (title && title.length > 10) {
          structure.titleSelector = selector;
          break;
        }
      }

      // ===== AUTHOR SELECTORS =====
      const authorSelectors = [
        '.author',
        '.byline',
        '.post-author',
        '.entry-author',
        '.article-author',
        '[rel="author"]',
        '[class*="author"]',
        '[class*="byline"]'
      ];

      for (const selector of authorSelectors) {
        const author = $(selector).first().text().trim();
        if (author && author.length > 2) {
          structure.authorSelector = selector;
          break;
        }
      }

      // ===== DATE SELECTORS =====
      const dateSelectors = [
        '.date',
        '.published',
        '.post-date',
        '.entry-date',
        '.article-date',
        'time',
        '[datetime]',
        '[class*="date"]',
        '[class*="time"]'
      ];

      for (const selector of dateSelectors) {
        const date = $(selector).first().text().trim();
        if (date && date.length > 5) {
          structure.dateSelector = selector;
          break;
        }
      }

      // ===== IMAGE SELECTORS =====
      const imageSelectors = [
        '.featured-image',
        '.post-image',
        '.entry-image',
        '.article-image',
        '.hero-image',
        '.main-image',
        'img[class*="featured"]',
        'img[class*="hero"]',
        'img[class*="main"]'
      ];

      for (const selector of imageSelectors) {
        const img = $(selector).first();
        if (img.length > 0) {
          structure.imageSelector = selector;
          break;
        }
      }

      // ===== VIDEO SELECTORS =====
      const videoSelectors = [
        'video',
        'iframe[src*="youtube"]',
        'iframe[src*="vimeo"]',
        'iframe[src*="dailymotion"]',
        '.video',
        '.post-video',
        '.article-video',
        '[class*="video"]'
      ];

      for (const selector of videoSelectors) {
        const video = $(selector).first();
        if (video.length > 0) {
          structure.videoSelector = selector;
          break;
        }
      }

      // ===== DESCRIPTION SELECTORS =====
      const descriptionSelectors = [
        '.description',
        '.excerpt',
        '.summary',
        '.post-excerpt',
        '.entry-summary',
        '.article-summary',
        '[property="og:description"]',
        '[name="description"]',
        '[name="twitter:description"]'
      ];

      for (const selector of descriptionSelectors) {
        const desc = $(selector).first().text().trim();
        if (desc && desc.length > 20) {
          structure.descriptionSelector = selector;
          break;
        }
      }

      // ===== CATEGORY SELECTORS =====
      const categorySelectors = [
        '.category',
        '.categories',
        '.post-category',
        '.entry-category',
        '.article-category',
        '[class*="category"]',
        '.breadcrumb'
      ];

      for (const selector of categorySelectors) {
        const category = $(selector).first().text().trim();
        if (category && category.length > 2) {
          structure.categorySelector = selector;
          break;
        }
      }

      // ===== TAGS SELECTORS =====
      const tagsSelectors = [
        '.tags',
        '.post-tags',
        '.entry-tags',
        '.article-tags',
        '[class*="tags"]',
        '.tag-cloud'
      ];

      for (const selector of tagsSelectors) {
        const tags = $(selector).first();
        if (tags.length > 0) {
          structure.tagsSelector = selector;
          break;
        }
      }

      // ===== READ TIME SELECTORS =====
      const readTimeSelectors = [
        '.read-time',
        '.reading-time',
        '.time-to-read',
        '[class*="read-time"]',
        '[class*="reading-time"]'
      ];

      for (const selector of readTimeSelectors) {
        const readTime = $(selector).first().text().trim();
        if (readTime && readTime.length > 0) {
          structure.readTimeSelector = selector;
          break;
        }
      }

      // ===== SOCIAL SHARE SELECTORS =====
      const socialShareSelectors = [
        '.social-share',
        '.share-buttons',
        '.social-buttons',
        '[class*="share"]',
        '[class*="social"]'
      ];

      for (const selector of socialShareSelectors) {
        const social = $(selector).first();
        if (social.length > 0) {
          structure.socialShareSelector = selector;
          break;
        }
      }

    } catch (error) {
      console.warn('Error detecting HTML structure with cheerio:', error);
      // Fallback to basic detection
      const contentPatterns = [
        /<article[^>]*>([\s\S]*?)<\/article>/gi,
        /<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi,
        /<main[^>]*>([\s\S]*?)<\/main>/gi,
      ];

      for (const pattern of contentPatterns) {
        const matches = htmlContent.match(pattern);
        if (matches && matches.length > 0) {
          const content = matches[0];
          const textLength = content.replace(/<[^>]*>/g, '').trim().length;
          if (textLength > 200) {
            structure.contentSelectors.push(pattern.source);
            break;
          }
        }
      }
    }

    return structure;
  }

  /**
   * Extract comprehensive post data from HTML using cheerio
   */
  private static extractPostDataFromHTML(htmlContent: string, structure: HTMLStructure): ExtractedPostData {
    try {
      const $ = cheerio.load(htmlContent);
      
      // Remove unwanted elements
      $('script, style, nav, header, footer, aside, .ad, .ads, .advertisement, .social-share, .comments, .related-posts').remove();
      
      const postData: ExtractedPostData = {
        title: '',
        content: '',
        description: '',
        tags: [],
      };

      // ===== EXTRACT TITLE =====
      if (structure.titleSelector) {
        const titleElement = $(structure.titleSelector).first();
        postData.title = titleElement.text().trim();
        
        // Fallback to meta tags if no title found
        if (!postData.title) {
          postData.title = $('meta[property="og:title"]').attr('content') || 
                          $('meta[name="twitter:title"]').attr('content') || 
                          $('title').text().trim();
        }
      }

      // ===== EXTRACT CONTENT =====
      // Enhanced content extraction with multiple strategies
      let contentExtracted = false;
      
      // Strategy 1: Use detected content selectors
      for (const selector of structure.contentSelectors) {
        const elements = $(selector);
        if (elements.length > 0) {
          const content = elements.text()
            .replace(/\s+/g, ' ')
            .trim();
          
          if (content.length > 300) {
            postData.content = content;
            contentExtracted = true;
            break;
          }
        }
      }
      
      // Strategy 2: Enhanced paragraph extraction
      if (!contentExtracted || postData.content.length < 300) {
        const paragraphs = $('p, .paragraph, .text, .content-text');
        const texts: string[] = [];
        
        paragraphs.each((i, elem) => {
          const text = $(elem).text().trim();
          // More lenient length check for better content capture
          if (text.length > 20 && !text.includes('Subscribe') && !text.includes('Newsletter')) {
            texts.push(text);
          }
        });
        
        const paragraphContent = texts.join(' ').replace(/\s+/g, ' ').trim();
        if (paragraphContent.length > postData.content.length) {
          postData.content = paragraphContent;
          contentExtracted = true;
        }
      }
      
      // Strategy 3: Extract from article body or main content areas
      if (!contentExtracted || postData.content.length < 300) {
        const contentAreas = [
          'article .content',
          'article .body',
          'article .text',
          '.post-content .entry-content',
          '.article-content .content',
          'main .content',
          'main .body',
          '.content-body',
          '.article-body',
          '.post-body'
        ];
        
        for (const areaSelector of contentAreas) {
          const area = $(areaSelector);
          if (area.length > 0) {
            const content = area.text().replace(/\s+/g, ' ').trim();
            if (content.length > 300) {
              postData.content = content;
              contentExtracted = true;
              break;
            }
          }
        }
      }
      
      // Strategy 4: Extract from divs with substantial text content
      if (!contentExtracted || postData.content.length < 300) {
        let maxLength = 0;
        let bestContent = '';
        
        $('div').each((i, elem) => {
          const text = $(elem).text().replace(/\s+/g, ' ').trim();
          // Check for substantial content without navigation/ad elements
          if (text.length > maxLength && 
              text.length > 200 && 
              !$(elem).hasClass('nav') && 
              !$(elem).hasClass('header') && 
              !$(elem).hasClass('footer') && 
              !$(elem).hasClass('sidebar') &&
              !$(elem).hasClass('ad') &&
              !$(elem).hasClass('ads') &&
              !$(elem).hasClass('advertisement')) {
            maxLength = text.length;
            bestContent = text;
          }
        });
        
        if (bestContent.length > postData.content.length) {
          postData.content = bestContent;
        }
      }

      // ===== EXTRACT DESCRIPTION =====
      if (structure.descriptionSelector) {
        postData.description = $(structure.descriptionSelector).first().text().trim();
      }
      
      // Fallback to meta tags
      if (!postData.description) {
        postData.description = $('meta[property="og:description"]').attr('content') || 
                              $('meta[name="description"]').attr('content') || 
                              $('meta[name="twitter:description"]').attr('content') || 
                              postData.content.substring(0, 200) + '...';
      }

      // ===== EXTRACT AUTHOR =====
      if (structure.authorSelector) {
        postData.author = $(structure.authorSelector).first().text().trim();
      }

      // ===== EXTRACT DATES =====
      if (structure.dateSelector) {
        const dateElement = $(structure.dateSelector).first();
        postData.publishDate = dateElement.attr('datetime') || dateElement.text().trim();
      }

      // ===== EXTRACT IMAGE =====
      if (structure.imageSelector) {
        const imgElement = $(structure.imageSelector).first();
        postData.image = imgElement.attr('src') || imgElement.attr('data-src');
      }
      
      // Fallback to meta tags
      if (!postData.image) {
        postData.image = $('meta[property="og:image"]').attr('content') || 
                        $('meta[name="twitter:image"]').attr('content');
      }

      // ===== EXTRACT VIDEO URL =====
      if (structure.videoSelector) {
        const videoElement = $(structure.videoSelector).first();
        if (videoElement.is('iframe')) {
          postData.videoUrl = videoElement.attr('src');
        } else if (videoElement.is('video')) {
          const source = videoElement.find('source').first();
          postData.videoUrl = source.attr('src');
        }
      }

      // ===== EXTRACT CATEGORY =====
      if (structure.categorySelector) {
        postData.category = $(structure.categorySelector).first().text().trim();
      }

      // ===== EXTRACT TAGS =====
      // Enhanced tag extraction with multiple strategies
      
      // Strategy 1: Use detected tags selector
      if (structure.tagsSelector) {
        const tagsElement = $(structure.tagsSelector);
        tagsElement.find('a, span, .tag, .tags-item, .tag-item').each((i, elem) => {
          const tag = $(elem).text().trim();
          if (tag && tag.length > 0 && !postData.tags.includes(tag)) {
            postData.tags.push(tag);
          }
        });
      }
      
      // Strategy 2: Extract from common tag patterns
      const tagSelectors = [
        '.tags a',
        '.post-tags a',
        '.entry-tags a',
        '.article-tags a',
        '.tag-cloud a',
        '.tags span',
        '.post-tags span',
        '.entry-tags span',
        '.article-tags span',
        '[class*="tag"] a',
        '[class*="tags"] a',
        '.tag-item',
        '.tags-item',
        '.tag-link',
        '.tags-link'
      ];
      
      for (const selector of tagSelectors) {
        $(selector).each((i, elem) => {
          const tag = $(elem).text().trim();
          if (tag && tag.length > 0 && !postData.tags.includes(tag)) {
            postData.tags.push(tag);
          }
        });
      }
      
      // Strategy 3: Extract from meta tags
      const metaTags = [
        $('meta[name="keywords"]').attr('content'),
        $('meta[property="article:tag"]').attr('content'),
        $('meta[name="news_keywords"]').attr('content')
      ].filter(Boolean);
      
      for (const metaTag of metaTags) {
        if (metaTag) {
          const tags = metaTag.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
          for (const tag of tags) {
            if (!postData.tags.includes(tag)) {
              postData.tags.push(tag);
            }
          }
        }
      }
      
      // Strategy 4: Extract from structured data (JSON-LD)
      $('script[type="application/ld+json"]').each((i, elem) => {
        try {
          const jsonData = JSON.parse($(elem).html() || '{}');
          if (jsonData.keywords && Array.isArray(jsonData.keywords)) {
            for (const keyword of jsonData.keywords) {
              if (keyword && !postData.tags.includes(keyword)) {
                postData.tags.push(keyword);
              }
            }
          }
          if (jsonData.about && Array.isArray(jsonData.about)) {
            for (const about of jsonData.about) {
              if (about && !postData.tags.includes(about)) {
                postData.tags.push(about);
              }
            }
          }
        } catch (error) {
          // Ignore JSON parsing errors
        }
      });
      
      // Strategy 5: Extract from category and topic elements
      const categorySelectors = [
        '.category',
        '.categories',
        '.topic',
        '.topics',
        '.section',
        '.sections',
        '.breadcrumb a',
        '.breadcrumbs a'
      ];
      
      for (const selector of categorySelectors) {
        $(selector).each((i, elem) => {
          const category = $(elem).text().trim();
          if (category && category.length > 0 && !postData.tags.includes(category)) {
            postData.tags.push(category);
          }
        });
      }
      
      // Strategy 6: Enhanced content-based tag generation
      if (postData.content && postData.tags.length < 10) {
        // Extract entities and key terms from content
        const contentLower = postData.content.toLowerCase();
        
        // Company and product names
        const companyPatterns = [
          /the browser company/gi,
          /browser company/gi,
          /dia\s+browser/gi,
          /dia\s+pro/gi,
          /openai/gi,
          /microsoft/gi,
          /google/gi,
          /apple/gi,
          /amazon/gi,
          /meta/gi,
          /facebook/gi
        ];
        
        for (const pattern of companyPatterns) {
          const matches = contentLower.match(pattern);
          if (matches) {
            const company = matches[0].replace(/\s+/g, ' ').trim();
            if (!postData.tags.includes(company)) {
              postData.tags.push(company);
            }
          }
        }
        
        // Technology and feature terms
        const techTerms = [
          'artificial intelligence', 'ai', 'machine learning', 'ml', 'deep learning',
          'blockchain', 'cryptocurrency', 'bitcoin', 'ethereum', 'web3', 'metaverse',
          'virtual reality', 'vr', 'augmented reality', 'ar', 'cloud computing',
          'cybersecurity', 'privacy', 'data', 'analytics', 'big data', 'iot',
          'internet of things', '5g', '6g', 'mobile', 'app', 'software', 'hardware',
          'startup', 'venture capital', 'funding', 'investment', 'acquisition',
          'merger', 'ipo', 'technology', 'tech', 'innovation', 'digital',
          'automation', 'robotics', 'drones', 'autonomous', 'electric', 'sustainable',
          'renewable', 'green', 'climate', 'energy', 'fintech', 'healthtech',
          'edtech', 'ecommerce', 'retail', 'marketing', 'advertising', 'social media',
          'browser', 'web browser', 'subscription', 'pro', 'premium', 'chat',
          'ai-powered', 'ai features', 'monthly subscription', 'paid tier',
          'usage limits', 'unlimited access', 'skills features'
        ];
        
        const foundTechTerms = techTerms.filter(term => 
          contentLower.includes(term.toLowerCase())
        );
        
        for (const term of foundTechTerms.slice(0, 5)) {
          if (!postData.tags.includes(term)) {
            postData.tags.push(term);
          }
        }
        
        // Extract key phrases and concepts
        const keyPhrases = [
          'subscription plan',
          'monthly subscription',
          'ai-powered browser',
          'browser features',
          'chat features',
          'skills features',
          'usage limits',
          'free tier',
          'paid tier',
          'pro subscription',
          'unlimited access'
        ];
        
        const foundPhrases = keyPhrases.filter(phrase => 
          contentLower.includes(phrase.toLowerCase())
        );
        
        for (const phrase of foundPhrases.slice(0, 3)) {
          if (!postData.tags.includes(phrase)) {
            postData.tags.push(phrase);
          }
        }
        
        // Extract monetary values and pricing
        const pricePattern = /\$(\d+(?:\.\d{2})?)\s*(?:per\s+)?(?:month|monthly|year|yearly)/gi;
        const priceMatches = contentLower.match(pricePattern);
        if (priceMatches) {
          for (const price of priceMatches.slice(0, 2)) {
            if (!postData.tags.includes(price)) {
              postData.tags.push(price);
            }
          }
        }
        
        // Extract industry-specific terms
        const industryTerms = [
          'saas', 'software as a service', 'b2b', 'b2c', 'enterprise',
          'consumer', 'productivity', 'collaboration', 'communication',
          'development', 'programming', 'coding', 'web development',
          'frontend', 'backend', 'full-stack', 'api', 'integration'
        ];
        
        const foundIndustryTerms = industryTerms.filter(term => 
          contentLower.includes(term.toLowerCase())
        );
        
        for (const term of foundIndustryTerms.slice(0, 3)) {
          if (!postData.tags.includes(term)) {
            postData.tags.push(term);
          }
        }
      }
      
      // Strategy 7: Extract from article title analysis
      if (postData.title && postData.tags.length < 15) {
        const titleLower = postData.title.toLowerCase();
        
        // Extract key entities from title
        const titleEntities = [
          'browser company',
          'dia',
          'subscription',
          'ai-powered',
          'browser',
          'monthly',
          'pro'
        ];
        
        for (const entity of titleEntities) {
          if (titleLower.includes(entity) && !postData.tags.includes(entity)) {
            postData.tags.push(entity);
          }
        }
      }
      
      // Strategy 8: Extract from URL path and structure
      const url = $('link[rel="canonical"]').attr('href') || '';
      if (url) {
        const urlPath = url.split('/').filter(segment => segment.length > 0);
        const relevantSegments = urlPath.filter(segment => 
          segment.length > 2 && 
          !segment.includes('.') && 
          !segment.includes('www') &&
          !segment.includes('http')
        );
        
        for (const segment of relevantSegments.slice(0, 3)) {
          const cleanSegment = segment.replace(/[-_]/g, ' ').trim();
          if (cleanSegment.length > 2 && !postData.tags.includes(cleanSegment)) {
            postData.tags.push(cleanSegment);
          }
        }
      }
      
      // Strategy 9: Extract from author and publication info
      if (postData.author && !postData.tags.includes(postData.author)) {
        postData.tags.push(postData.author);
      }
      
      // Strategy 10: Extract from publication name
      const publicationName = $('meta[property="og:site_name"]').attr('content') || 
                            $('meta[name="application-name"]').attr('content') ||
                            $('title').text().split('|')[0]?.trim() ||
                            $('title').text().split('-')[0]?.trim();
      
      if (publicationName && !postData.tags.includes(publicationName)) {
        postData.tags.push(publicationName);
      }
      
      // Clean up tags - remove duplicates and normalize
      postData.tags = [...new Set(postData.tags.map(tag => tag.trim()).filter(tag => tag.length > 0))];
      
      // Enhanced tag filtering and prioritization
      if (postData.tags.length > 0) {
        // Filter out irrelevant tags (article titles, long sentences, etc.)
        const filteredTags = postData.tags.filter(tag => {
          const tagLower = tag.toLowerCase();
          
          // Remove tags that are too long (likely article titles)
          if (tag.length > 50) return false;
          
          // Remove tags that are just author names (common pattern with first and last name)
          if (/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(tag) && tag.length > 10) return false;
          
          // Remove tags that are just author names (more comprehensive pattern)
          if (/^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+$/.test(tag)) return false;
          
          // Remove tags that contain common author name patterns
          if (tagLower.includes('dominic') || tagLower.includes('madori') || tagLower.includes('davis')) {
            if (tag.length > 15) return false;
          }
          
          // Remove tags that are common author names (first name + last name pattern)
          const commonAuthorNames = ['anthony ha', 'dominic-madori davis', 'rebecca bellan', 'aisha malik', 'amanda silberling'];
          if (commonAuthorNames.includes(tagLower)) return false;
          
          // Remove tags that are just other article titles
          if (tagLower.includes('launches') || tagLower.includes('announces') || tagLower.includes('releases')) {
            if (tag.length > 30) return false;
          }
          
          // Remove tags that are just publication names (unless it's the main one)
          if (tagLower === 'techcrunch' && postData.tags.filter(t => t.toLowerCase() === 'techcrunch').length > 1) return false;
          
          // Remove tags that are clearly other article titles (containing action words)
          if (tagLower.includes('raises') || tagLower.includes('launches') || tagLower.includes('announces') || 
              tagLower.includes('releases') || tagLower.includes('gets') || tagLower.includes('points to')) {
            if (tag.length > 25) return false;
          }
          
          // Remove tags that are just author names (common pattern with first and last name)
          if (/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(tag) && tag.length > 10) return false;
          
          return true;
        });
        
        // Prioritize relevant tags
        const priorityTags = filteredTags.filter(tag => {
          const tagLower = tag.toLowerCase();
          const titleLower = postData.title.toLowerCase();
          
          // High priority: tags that appear in title
          if (titleLower.includes(tagLower) && tagLower.length > 2) return true;
          
          // High priority: tech-related terms
          const techTerms = ['ai', 'browser', 'subscription', 'tech', 'technology', 'software', 'app', 'artificial intelligence', 'machine learning', 'web', 'internet', 'digital', 'innovation'];
          if (techTerms.some(term => tagLower.includes(term))) return true;
          
          // Medium priority: company/product names
          const companyTerms = ['browser company', 'dia', 'openai', 'microsoft', 'google', 'apple', 'amazon', 'meta'];
          if (companyTerms.some(term => tagLower.includes(term))) return true;
          
          return false;
        });
        
        const otherTags = filteredTags.filter(tag => !priorityTags.includes(tag));
        
        // Combine and limit to 15 tags
        postData.tags = [...priorityTags, ...otherTags].slice(0, 15);
      }

      // ===== EXTRACT READ TIME =====
      if (structure.readTimeSelector) {
        postData.readTime = $(structure.readTimeSelector).first().text().trim();
      }

      // ===== EXTRACT METADATA =====
      // Word count
      postData.wordCount = postData.content.split(/\s+/).length;
      
      // Language
      postData.language = $('html').attr('lang') || 
                         $('meta[http-equiv="content-language"]').attr('content');
      
      // Canonical URL
      postData.canonicalUrl = $('link[rel="canonical"]').attr('href');

      // ===== EXTRACT SOCIAL SHARES =====
      if (structure.socialShareSelector) {
        const socialElement = $(structure.socialShareSelector);
        postData.socialShares = {};
        
        // Extract share counts if available
        const facebookCount = socialElement.find('[data-facebook-count], .facebook-count').text();
        const twitterCount = socialElement.find('[data-twitter-count], .twitter-count').text();
        const linkedinCount = socialElement.find('[data-linkedin-count], .linkedin-count').text();
        
        if (facebookCount) postData.socialShares.facebook = parseInt(facebookCount);
        if (twitterCount) postData.socialShares.twitter = parseInt(twitterCount);
        if (linkedinCount) postData.socialShares.linkedin = parseInt(linkedinCount);
      }

      // ===== EXTRACT OPEN GRAPH & TWITTER METADATA =====
      postData.metadata = {
        ogTitle: $('meta[property="og:title"]').attr('content'),
        ogDescription: $('meta[property="og:description"]').attr('content'),
        ogImage: $('meta[property="og:image"]').attr('content'),
        ogType: $('meta[property="og:type"]').attr('content'),
        twitterCard: $('meta[name="twitter:card"]').attr('content'),
        twitterTitle: $('meta[name="twitter:title"]').attr('content'),
        twitterDescription: $('meta[name="twitter:description"]').attr('content'),
        twitterImage: $('meta[name="twitter:image"]').attr('content'),
      };

      return postData;
      
    } catch (error) {
      console.warn('Error extracting post data with cheerio:', error);
      
      // Fallback to basic content extraction
      return {
        title: '',
        content: this.extractContent(htmlContent, structure),
        description: '',
        tags: [],
      };
    }
  }

  /**
   * Extract content from HTML using cheerio for better parsing (legacy method)
   */
  private static extractContent(htmlContent: string, structure: HTMLStructure): string {
    try {
      const postData = this.extractPostDataFromHTML(htmlContent, structure);
      return postData.content || '';
    } catch (error) {
      console.error('Error extracting content:', error);
      return '';
    }
  }

  /**
   * Save HTML structure for future use
   */
  private static saveHTMLStructure(config: RSSFeedConfig, structure: HTMLStructure, content: string): void {
    this.ensureDirectories();
    
    const metadata: HTMLMetadata = {
      country: config.country,
      category: config.category,
      feedName: config.feedName,
      structure,
      lastUpdated: new Date().toISOString(),
      sampleContent: content.substring(0, 1000), // Save first 1000 chars as sample
    };

    const filename = `${config.country}-${config.category}-${config.feedName}-html-structure.json`;
    const filepath = path.join(this.HTML_CACHE_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(metadata, null, 2));
  }

  /**
   * Load cached HTML structure if available
   */
  private static loadHTMLStructure(config: RSSFeedConfig): HTMLStructure | null {
    this.ensureDirectories();
    
    const filename = `${config.country}-${config.category}-${config.feedName}-html-structure.json`;
    const filepath = path.join(this.HTML_CACHE_DIR, filename);
    
    if (fs.existsSync(filepath)) {
      try {
        const metadata: HTMLMetadata = JSON.parse(fs.readFileSync(filepath, 'utf8'));
        // Check if structure is not too old (30 days for HTML)
        const lastUpdated = new Date(metadata.lastUpdated);
        const daysDiff = (Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysDiff < 30) {
          return metadata.structure;
        }
      } catch (error) {
        console.warn(`Failed to load cached HTML structure for ${filename}:`, error);
      }
    }
    
    return null;
  }

  /**
   * Main method to process HTML content
   */
  public static async processHTMLContent(config: RSSFeedConfig, url: string): Promise<string> {
    try {
      // Try to load cached structure first
      let structure = this.loadHTMLStructure(config);
      
      if (!structure) {
        // Fetch and detect structure
        const htmlContent = await this.fetchHTMLContent(url);
        structure = this.detectHTMLStructure(htmlContent);
      }

      // Extract content using the structure
      const htmlContent = await this.fetchHTMLContent(url);
      const content = this.extractContent(htmlContent, structure);

      // Save structure for future use
      this.saveHTMLStructure(config, structure, content);

      return content;
    } catch (error) {
      console.error(`Error processing HTML content from ${url}:`, error);
      // Return empty string instead of throwing to allow graceful degradation
      return '';
    }
  }

  /**
   * Extract comprehensive post data from HTML content
   */
  public static async extractPostData(config: RSSFeedConfig, url: string): Promise<ExtractedPostData> {
    try {
      // Try to load cached structure first
      let structure = this.loadHTMLStructure(config);
      
      if (!structure) {
        // Fetch and detect structure
        const htmlContent = await this.fetchHTMLContent(url);
        structure = this.detectHTMLStructure(htmlContent);
      }

      // Extract comprehensive post data using the structure
      const htmlContent = await this.fetchHTMLContent(url);
      const postData = this.extractPostDataFromHTML(htmlContent, structure);

      // Save structure for future use
      this.saveHTMLStructure(config, structure, postData.content);

      return postData;
    } catch (error) {
      console.error(`Error extracting post data from ${url}:`, error);
      // Return default post data instead of throwing to allow graceful degradation
      return {
        title: 'Error extracting content',
        content: '',
        description: 'Failed to extract content from this URL',
        tags: []
      };
    }
  }
}

/**
 * Main orchestrator class that combines RSS and HTML processing
 */
export class NewsHarvester {
  /**
   * Process a complete RSS feed and extract full content
   */
  public static async harvestNews(config: RSSFeedConfig): Promise<Article[]> {
    try {
      // Step 1: Process RSS feed
      const articles = await SmartRSSParser.processRSSFeed(config);
      
      // Step 2: For each article, fetch and extract full content
      const enrichedArticles = await Promise.all(
        articles.map(async (article) => {
          try {
            if (article.link) {
              const fullContent = await SmartHTMLParser.processHTMLContent(config, article.link);
              return { ...article, content: fullContent };
            }
            return article;
          } catch (error) {
            console.warn(`Failed to extract content for article: ${article.title}`, error);
            return article;
          }
        })
      );

      return enrichedArticles;
    } catch (error) {
      console.error(`Error harvesting news for ${config.feedName}:`, error);
      throw error;
    }
  }

  /**
   * Process multiple RSS feeds
   */
  public static async harvestMultipleFeeds(configs: RSSFeedConfig[]): Promise<Map<string, Article[]>> {
    const results = new Map<string, Article[]>();
    
    for (const config of configs) {
      try {
        const articles = await this.harvestNews(config);
        const key = `${config.country}-${config.category}-${config.feedName}`;
        results.set(key, articles);
      } catch (error) {
        console.error(`Failed to process feed: ${config.feedName}`, error);
        results.set(`${config.country}-${config.category}-${config.feedName}`, []);
      }
    }
    
    return results;
  }
}

// Export utility functions for easy access
export const globalMethods = {
  SmartRSSParser,
  SmartHTMLParser,
  NewsHarvester,
};
