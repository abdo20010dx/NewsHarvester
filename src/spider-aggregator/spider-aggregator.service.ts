import { Injectable } from '@nestjs/common';
import { CreateSpiderAggregatorDto } from './dto/create-spider-aggregator.dto';
import { UpdateSpiderAggregatorDto } from './dto/update-spider-aggregator.dto';
import { SmartRSSParser, SmartHTMLParser, RSSFeedConfig, Article } from '../util/global-methods';
import { AggregatedNewsResponseDto } from './dto/aggregated-news-response.dto';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class SpiderAggregatorService {
  private readonly RSS_FEEDS_BASE_PATH = path.join(process.cwd(), 'src', 'rss-feed');

  create(createSpiderAggregatorDto: CreateSpiderAggregatorDto) {
    return 'This action adds a new spiderAggregator';
  }

  findAll() {
    return `This action returns all spiderAggregator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spiderAggregator`;
  }

  update(id: number, updateSpiderAggregatorDto: UpdateSpiderAggregatorDto) {
    return `This action updates a #${id} spiderAggregator`;
  }

  remove(id: number) {
    return `This action removes a #${id} spiderAggregator`;
  }

  /**
   * Get top stories from RSS feeds for a specific country
   */
  async getTopStoriesByCountry(country: string): Promise<AggregatedNewsResponseDto> {
    try {
      // Normalize country name
      const normalizedCountry = this.normalizeCountryName(country);

      // Get RSS feeds for the country
      const rssFeeds = await this.getRSSFeedsForCountry(normalizedCountry);

      if (rssFeeds.length === 0) {
        return {
          totalArticles: 0,
          feeds: {},
        };
      }

      // Process each RSS feed and extract articles with full content
      const feedsData: AggregatedNewsResponseDto['feeds'] = {};

      for (const feedConfig of rssFeeds) {
        try {
          // Get articles from RSS feed with file management
          const articles = await this.processRSSFeedWithFileManagement(feedConfig);

          // Take only top stories (first 10 articles)
          const topArticles = articles.slice(0, 10);

          // Enrich articles with full content from HTML
          const enrichedArticles = await Promise.all(
            topArticles.map(async (article) => {
              try {
                if (article.link) {
                  // Extract full content and metadata from HTML with file management
                  const postData = await this.extractArticleContentWithFileManagement(feedConfig, article.link);

                  return {
                    title: article.title || postData.title,
                    image: article.image || postData.image,
                    description: article.description || postData.description,
                    pubDate: article.pubDate,
                    content: postData.content,
                    url: article.link,
                    videoUrl: postData.videoUrl,
                    author: article.author || postData.author,
                    category: article.category || postData.category,
                    tags: postData.tags,
                    readTime: postData.readTime,
                    wordCount: postData.wordCount,
                    language: postData.language,
                    canonicalUrl: postData.canonicalUrl,
                    socialShares: postData.socialShares,
                    metadata: postData.metadata,
                  };
                }
                return {
                  title: article.title,
                  image: article.image,
                  description: article.description,
                  pubDate: article.pubDate,
                  content: '',
                  url: article.link,
                  videoUrl: undefined,
                  author: article.author,
                  category: article.category,
                  tags: [],
                  readTime: undefined,
                  wordCount: undefined,
                  language: undefined,
                  canonicalUrl: undefined,
                  socialShares: undefined,
                  metadata: undefined,
                };
              } catch (error) {
                console.warn(`Failed to extract content for article: ${article.title}`, error);
                return {
                  title: article.title,
                  image: article.image,
                  description: article.description,
                  pubDate: article.pubDate,
                  content: '',
                  url: article.link,
                  videoUrl: undefined,
                  author: article.author,
                  category: article.category,
                  tags: [],
                  readTime: undefined,
                  wordCount: undefined,
                  language: undefined,
                  canonicalUrl: undefined,
                  socialShares: undefined,
                  metadata: undefined,
                };
              }
            })
          );

          // Add to feeds data
          feedsData[feedConfig.feedName] = {
            articleCount: enrichedArticles.length,
            articles: enrichedArticles,
          };
        } catch (error) {
          console.error(`Failed to process RSS feed: ${feedConfig.feedName}`, error);
          // Continue with other feeds even if one fails
        }
      }

      // Calculate total articles across all feeds
      const totalArticles = Object.values(feedsData).reduce((total, feed) => total + feed.articleCount, 0);

      return {
        totalArticles,
        feeds: feedsData
      };
    } catch (error) {
      console.error(`Error getting top stories for country: ${country}`, error);
      throw new Error(`Failed to get top stories for country: ${country}`);
    }
  }

  /**
   * Process RSS feed with file management for caching responses
   */
  private async processRSSFeedWithFileManagement(feedConfig: RSSFeedConfig): Promise<Article[]> {
    const feedFolder = path.join(this.RSS_FEEDS_BASE_PATH, feedConfig.country, feedConfig.feedName);
    const rssResponseFile = path.join(feedFolder, 'rss-response-example.xml');
    const rssResponseJsonFile = path.join(feedFolder, 'rss-response-example.json');

    try {
      // Try to read cached RSS response first
      let rssData: any = null;
      let isXml = true;

      if (fs.existsSync(rssResponseFile)) {
        try {
          const xmlContent = fs.readFileSync(rssResponseFile, 'utf8');
          // Use the existing SmartRSSParser method
          return await SmartRSSParser.processRSSFeed(feedConfig);
        } catch (error) {
          console.warn(`Failed to parse cached XML, will fetch fresh data: ${error}`);
        }
      } else if (fs.existsSync(rssResponseJsonFile)) {
        try {
          const jsonContent = fs.readFileSync(rssResponseJsonFile, 'utf8');
          rssData = JSON.parse(jsonContent);
          isXml = false;
        } catch (error) {
          console.warn(`Failed to parse cached JSON, will fetch fresh data: ${error}`);
        }
      }

      // If no cached data or parsing failed, fetch fresh data
      if (!rssData) {
        console.log(`Fetching fresh RSS data for ${feedConfig.feedName} - ${feedConfig.category}`);

        try {
          const response = await axios.get(feedConfig.url, {
            timeout: 10000,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
          });

          const contentType = response.headers['content-type'] || '';
          isXml = contentType.includes('xml') || response.data.toString().trim().startsWith('<?xml');

          if (isXml) {
            // Save XML response
            fs.writeFileSync(rssResponseFile, response.data);
          } else {
            // Save JSON response
            fs.writeFileSync(rssResponseJsonFile, JSON.stringify(response.data, null, 2));
          }

          console.log(`Successfully cached RSS response for ${feedConfig.feedName} - ${feedConfig.category}`);
        } catch (error) {
          console.error(`Failed to fetch RSS data for ${feedConfig.feedName} - ${feedConfig.category}:`, error);
          throw error;
        }
      }

      // Use the existing SmartRSSParser method
      return await SmartRSSParser.processRSSFeed(feedConfig);
    } catch (error) {
      console.error(`Error processing RSS feed with file management: ${feedConfig.feedName}`, error);
      throw error;
    }
  }

  /**
   * Extract article content with file management for caching HTML responses
   */
  private async extractArticleContentWithFileManagement(feedConfig: RSSFeedConfig, articleUrl: string): Promise<any> {
    const feedFolder = path.join(this.RSS_FEEDS_BASE_PATH, feedConfig.country, feedConfig.feedName);
    const htmlExampleFile = path.join(feedFolder, 'url-article-html-example.html');

    try {
      // Try to read cached HTML first
      let htmlContent: string | null = null;

      if (fs.existsSync(htmlExampleFile)) {
        try {
          htmlContent = fs.readFileSync(htmlExampleFile, 'utf8');
          // Check if the HTML is valid and not empty
          if (htmlContent.trim().length === 0) {
            htmlContent = null;
          }
        } catch (error) {
          console.warn(`Failed to read cached HTML, will fetch fresh data: ${error}`);
        }
      }

      // If no cached HTML or it's invalid, fetch fresh data
      if (!htmlContent) {
        console.log(`Fetching fresh HTML for ${feedConfig.feedName} - ${articleUrl}`);

        try {
          // Try enhanced Puppeteer-based extraction first
          try {
            const { EnhancedHTMLParser } = await import('../util/enhanced-html-parser.js');
            const enhancedParser = new EnhancedHTMLParser();

            const enhancedFeedConfig = {
              name: feedConfig.feedName,
              displayName: feedConfig.feedName,
              categories: [{ name: feedConfig.category, url: feedConfig.url }]
            };

            const enhancedResult = await enhancedParser.extractPostData(enhancedFeedConfig, articleUrl, {
              usePuppeteer: true,
              puppeteerOptions: {
                waitForNetworkIdle: true,
                timeout: 30000,
                scrollToBottom: true,
                scrollDelay: 1000,
                disableImages: false, // Keep images for better content extraction
              },
              fallbackToAxios: true,
              retryAttempts: 3,
            });

            // Save the HTML content for future use (if available in the result)
            // Note: The enhanced result doesn't include HTML directly, so we'll save it separately if needed
            console.log(`Successfully extracted content with Puppeteer for ${feedConfig.feedName}`);

            await enhancedParser.cleanup();
            return enhancedResult;
          } catch (puppeteerError) {
            console.warn(`Puppeteer extraction failed for ${feedConfig.feedName}, falling back to axios:`, puppeteerError);
          }

          // Fallback to axios
          const response = await axios.get(articleUrl, {
            timeout: 15000,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
              'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.5',
              'Accept-Encoding': 'gzip, deflate',
              'Connection': 'keep-alive',
              'Upgrade-Insecure-Requests': '1',
            }
          });

          htmlContent = response.data;

          // Save HTML response
          if (htmlContent) {
            fs.writeFileSync(htmlExampleFile, htmlContent);
            console.log(`Successfully cached HTML with axios for ${feedConfig.feedName}`);
          }
        } catch (error) {
          console.error(`Failed to fetch HTML for ${feedConfig.feedName} - ${articleUrl}:`, error);
          throw error;
        }
      }

      // Use the existing SmartHTMLParser method as final fallback
      return await SmartHTMLParser.extractPostData(feedConfig, articleUrl);
    } catch (error) {
      console.error(`Error extracting article content with file management: ${feedConfig.feedName}`, error);
      throw error;
    }
  }

  /**
   * Normalize country name to match our data format
   * Enhanced to support country codes, abbreviations, and all targeted countries
   */
  private normalizeCountryName(country: string): string {
    const countryMap: { [key: string]: string } = {
      // United States variations
      'usa': 'usa',
      'us': 'usa',
      'united states': 'usa',
      'united states of america': 'usa',
      'america': 'usa',
      'states': 'usa',

      // United Kingdom variations
      'uk': 'uk',
      'united kingdom': 'uk',
      'great britain': 'uk',
      'england': 'uk',
      'britain': 'uk',
      'gb': 'uk',

      // Canada
      'canada': 'canada',
      'ca': 'canada',

      // Germany variations
      'germany': 'germany',
      'deutschland': 'germany',
      'de': 'germany',

      // France
      'france': 'france',
      'fr': 'france',

      // Australia
      'australia': 'australia',
      'au': 'australia',
      'oz': 'australia',

      // Japan
      'japan': 'japan',
      'jp': 'japan',
      'nippon': 'japan',

      // India
      'india': 'india',
      'in': 'india',
      'bharat': 'india',

      // Brazil variations
      'brazil': 'brazil',
      'brasil': 'brazil',
      'br': 'brazil',

      // Indonesia
      'indonesia': 'indonesia',
      'id': 'indonesia',

      // Mexico
      'mexico': 'mexico',
      'mx': 'mexico',

      // Italy variations
      'italy': 'italy',
      'italia': 'italy',
      'it': 'italy',

      // Spain variations
      'spain': 'spain',
      'espana': 'spain',
      'es': 'spain',

      // South Korea variations
      'south korea': 'south korea',
      'korea': 'south korea',
      'korean': 'south korea',
      'kr': 'south korea',
      'rok': 'south korea',

      // Netherlands variations
      'netherlands': 'netherlands',
      'holland': 'netherlands',
      'nl': 'netherlands',
      'nederland': 'netherlands',

      // Russia
      'russia': 'russia',
      'ru': 'russia',
      'russian federation': 'russia',

      // Turkey
      'turkey': 'turkey',
      'tr': 'turkey',
      'türkiye': 'turkey',

      // Argentina
      'argentina': 'argentina',
      'ar': 'argentina',

      // South Africa
      'south africa': 'south africa',
      'za': 'south africa',
      'rsa': 'south africa',

      // Philippines
      'philippines': 'philippines',
      'ph': 'philippines',
      'filipinas': 'philippines',

      // Vietnam
      'vietnam': 'vietnam',
      'vn': 'vietnam',
      'viet nam': 'vietnam',

      // Poland
      'poland': 'poland',
      'pl': 'poland',
      'polska': 'poland',

      // Thailand
      'thailand': 'thailand',
      'th': 'thailand',
      'siam': 'thailand',

      // Malaysia
      'malaysia': 'malaysia',
      'my': 'malaysia',

      // Nigeria
      'nigeria': 'nigeria',
      'ng': 'nigeria',

      // Bangladesh
      'bangladesh': 'bangladesh',
      'bd': 'bangladesh',

      // Pakistan
      'pakistan': 'pakistan',
      'pk': 'pakistan',

      // Egypt
      'egypt': 'egypt',
      'eg': 'egypt',
      'misr': 'egypt',

      // Colombia
      'colombia': 'colombia',
      'co': 'colombia',

      // Chile
      'chile': 'chile',
      'cl': 'chile',

      // New Zealand
      'new zealand': 'new zealand',
      'nz': 'new zealand',

      // Sweden
      'sweden': 'sweden',
      'se': 'sweden',
      'sverige': 'sweden',

      // Norway
      'norway': 'norway',
      'no': 'norway',
      'norge': 'norway',

      // Switzerland
      'switzerland': 'switzerland',
      'ch': 'switzerland',
      'schweiz': 'switzerland',
      'suisse': 'switzerland',

      // Belgium
      'belgium': 'belgium',
      'be': 'belgium',
      'belgique': 'belgium',
      'belgië': 'belgium',

      // Austria
      'austria': 'austria',
      'at': 'austria',
      'österreich': 'austria',

      // Ireland
      'ireland': 'ireland',
      'ie': 'ireland',
      'eire': 'ireland',

      // Singapore
      'singapore': 'singapore',
      'sg': 'singapore',

      // Denmark
      'denmark': 'denmark',
      'dk': 'denmark',
      'danmark': 'denmark',

      // Finland
      'finland': 'finland',
      'fi': 'finland',
      'suomi': 'finland',

      // Saudi Arabia
      'saudi arabia': 'saudi arabia',
      'sa': 'saudi arabia',
      'ksa': 'saudi arabia',

      // UAE variations
      'uae': 'uae',
      'united arab emirates': 'uae',
      'emirates': 'uae',
      'ae': 'uae',

      // Hong Kong
      'hong kong': 'hong kong',
      'hk': 'hong kong',

      // Czech Republic variations
      'czech republic': 'czech republic',
      'czechia': 'czech republic',
      'cz': 'czech republic',
      'czech': 'czech republic',

      // Portugal
      'portugal': 'portugal',
      'pt': 'portugal',

      // Romania
      'romania': 'romania',
      'ro': 'romania',
      'românia': 'romania',

      // Hungary
      'hungary': 'hungary',
      'hu': 'hungary',
      'magyarország': 'hungary',

      // Greece
      'greece': 'greece',
      'gr': 'greece',
      'hellas': 'greece',
      'ελλάδα': 'greece',

      // Ukraine
      'ukraine': 'ukraine',
      'ua': 'ukraine',
      'ukraina': 'ukraine',

      // Kenya
      'kenya': 'kenya',
      'ke': 'kenya',

      // Morocco
      'morocco': 'morocco',
      'ma': 'morocco',
      'al-maghrib': 'morocco',

      // Algeria
      'algeria': 'algeria',
      'dz': 'algeria',
      'al-jaza\'ir': 'algeria',

      // Peru
      'peru': 'peru',
      'pe': 'peru',

      // Ethiopia
      'ethiopia': 'ethiopia',
      'et': 'ethiopia',

      // Iraq
      'iraq': 'iraq',
      'iq': 'iraq',
      'al-iraq': 'iraq',

      // Uzbekistan
      'uzbekistan': 'uzbekistan',
      'uz': 'uzbekistan',

      // Myanmar
      'myanmar': 'myanmar',
      'mm': 'myanmar',
      'burma': 'myanmar',

      // Kazakhstan
      'kazakhstan': 'kazakhstan',
      'kz': 'kazakhstan',

      // Angola
      'angola': 'angola',
      'ao': 'angola',

      // Tanzania
      'tanzania': 'tanzania',
      'tz': 'tanzania',

      // Uganda
      'uganda': 'uganda',
      'ug': 'uganda',

      // Sudan
      'sudan': 'sudan',
      'sd': 'sudan',

      // Ghana
      'ghana': 'ghana',
      'gh': 'ghana',

      // Afghanistan
      'afghanistan': 'afghanistan',
      'af': 'afghanistan',

      // Nepal
      'nepal': 'nepal',
      'np': 'nepal',

      // Cameroon
      'cameroon': 'cameroon',
      'cm': 'cameroon',

      // Ivory Coast
      'ivory coast': 'ivory coast',
      'côte d\'ivoire': 'ivory coast',
      'ci': 'ivory coast',

      // Senegal
      'senegal': 'senegal',
      'sn': 'senegal',

      // Paraguay
      'paraguay': 'paraguay',
      'py': 'paraguay',

      // Bolivia
      'bolivia': 'bolivia',
      'bo': 'bolivia',

      // Dominican Republic
      'dominican republic': 'dominican republic',
      'do': 'dominican republic',
      'republica dominicana': 'dominican republic',

      // Ecuador
      'ecuador': 'ecuador',
      'ec': 'ecuador',

      // Costa Rica
      'costa rica': 'costa rica',
      'cr': 'costa rica',

      // Panama
      'panama': 'panama',
      'pa': 'panama',
      'panamá': 'panama',

      // Kuwait
      'kuwait': 'kuwait',
      'kw': 'kuwait',
      'al-kuwait': 'kuwait',

      // Qatar
      'qatar': 'qatar',
      'qa': 'qatar',

      // Oman
      'oman': 'oman',
      'om': 'oman',

      // Bahrain
      'bahrain': 'bahrain',
      'bh': 'bahrain',
      'al-bahrain': 'bahrain',

      // Slovakia
      'slovakia': 'slovakia',
      'sk': 'slovakia',
      'slovensko': 'slovakia',

      // Bulgaria
      'bulgaria': 'bulgaria',
      'bg': 'bulgaria',
      'bălgariya': 'bulgaria',

      // Croatia
      'croatia': 'croatia',
      'hr': 'croatia',
      'hrvatska': 'croatia',

      // Slovenia
      'slovenia': 'slovenia',
      'si': 'slovenia',
      'slovenija': 'slovenia',

      // Lithuania
      'lithuania': 'lithuania',
      'lt': 'lithuania',
      'lietuva': 'lithuania',

      // Latvia
      'latvia': 'latvia',
      'lv': 'latvia',
      'latvija': 'latvia',

      // Estonia
      'estonia': 'estonia',
      'ee': 'estonia',
      'eesti': 'estonia',

      // Serbia
      'serbia': 'serbia',
      'rs': 'serbia',
      'srbija': 'serbia',

      // Bosnia & Herzegovina
      'bosnia and herzegovina': 'bosnia and herzegovina',
      'bosnia & herzegovina': 'bosnia and herzegovina',
      'bosnia': 'bosnia and herzegovina',
      'ba': 'bosnia and herzegovina',

      // North Macedonia
      'north macedonia': 'north macedonia',
      'mk': 'north macedonia',
      'macedonia': 'north macedonia',

      // Montenegro
      'montenegro': 'montenegro',
      'me': 'montenegro',
      'crna gora': 'montenegro',

      // Luxembourg
      'luxembourg': 'luxembourg',
      'lu': 'luxembourg',
      'lëtzebuerg': 'luxembourg',

      // Malta
      'malta': 'malta',
      'mt': 'malta',

      // Cyprus
      'cyprus': 'cyprus',
      'cy': 'cyprus',
      'kýpros': 'cyprus',

      // Iceland
      'iceland': 'iceland',
      'is': 'iceland',
      'ísland': 'iceland',

      // Monaco
      'monaco': 'monaco',
      'mc': 'monaco',

      // Liechtenstein
      'liechtenstein': 'liechtenstein',
      'li': 'liechtenstein',

      // Andorra
      'andorra': 'andorra',
      'ad': 'andorra',

      // San Marino
      'san marino': 'san marino',
      'sm': 'san marino',

      // Maldives
      'maldives': 'maldives',
      'mv': 'maldives',

      // Brunei
      'brunei': 'brunei',
      'bn': 'brunei',
    };

    const normalized = country.toLowerCase().trim();
    return countryMap[normalized] || normalized;
  }

  /**
   * Get RSS feeds for a specific country
   */
  private async getRSSFeedsForCountry(country: string): Promise<RSSFeedConfig[]> {
    try {
      // Check if RSS feeds base directory exists
      if (!fs.existsSync(this.RSS_FEEDS_BASE_PATH)) {
        console.warn('RSS feeds base directory not found, returning empty array');
        return [];
      }

      const countryFolder = path.join(this.RSS_FEEDS_BASE_PATH, country);
      if (!fs.existsSync(countryFolder)) {
        console.warn(`No feeds found for country: ${country}`);
        return [];
      }

      const feeds: RSSFeedConfig[] = [];
      const feedFolders = fs.readdirSync(countryFolder, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      for (const feedFolder of feedFolders) {
        const categoriesFile = path.join(countryFolder, feedFolder, `${feedFolder}-rss-categories.json`);

        if (fs.existsSync(categoriesFile)) {
          try {
            const categoriesData = JSON.parse(fs.readFileSync(categoriesFile, 'utf8'));

            if (categoriesData.urls && Array.isArray(categoriesData.urls)) {
              for (const urlConfig of categoriesData.urls) {
                feeds.push({
                  country: country,
                  category: urlConfig.category || 'general',
                  feedName: categoriesData.feedName || feedFolder,
                  url: urlConfig.url,
                });
              }
            }
          } catch (error) {
            console.warn(`Failed to parse categories file for ${feedFolder}:`, error);
          }
        }
      }

      return feeds;
    } catch (error) {
      console.error(`Error reading RSS feeds for country ${country}:`, error);
      return [];
    }
  }
}
