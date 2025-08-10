import * as cheerio from 'cheerio';
import { PuppeteerScraper, PuppeteerScrapingOptions, ScrapedContent } from './puppeteer-scraper';
import { ArticleDto } from '../spider-aggregator/dto/aggregated-news-response.dto';

export interface RSSFeedConfig {
    name: string;
    displayName: string;
    categories: Array<{
        name: string;
        url: string;
    }>;
}

export interface EnhancedExtractionOptions {
    usePuppeteer?: boolean;
    puppeteerOptions?: PuppeteerScrapingOptions;
    fallbackToAxios?: boolean;
    retryAttempts?: number;
    retryDelay?: number;
    contentSelectors?: string[];
    titleSelectors?: string[];
    imageSelectors?: string[];
    authorSelectors?: string[];
    dateSelectors?: string[];
    customExtractors?: {
        title?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
        content?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
        images?: (html: string, $: cheerio.CheerioAPI) => string[] | undefined;
        author?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
        date?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
    };
}

export class EnhancedHTMLParser {
    private puppeteerScraper: PuppeteerScraper | null = null;

    constructor() { }

    async extractPostData(
        feedConfig: RSSFeedConfig,
        articleUrl: string,
        options: EnhancedExtractionOptions = {}
    ): Promise<Partial<ArticleDto>> {
        const {
            usePuppeteer = true,
            puppeteerOptions = {},
            fallbackToAxios = true,
            retryAttempts = 3,
            retryDelay = 1000,
            contentSelectors = [],
            titleSelectors = [],
            imageSelectors = [],
            authorSelectors = [],
            dateSelectors = [],
            customExtractors = {},
        } = options;

        let scrapedContent: ScrapedContent | null = null;
        let error: Error | null = null;

        // Try Puppeteer first if enabled
        if (usePuppeteer) {
            try {
                scrapedContent = await this.extractWithPuppeteer(articleUrl, {
                    ...puppeteerOptions,
                    customSelectors: {
                        content: contentSelectors,
                        title: titleSelectors,
                        images: imageSelectors,
                        author: authorSelectors,
                        date: dateSelectors,
                    },
                    customExtractors,
                });
            } catch (puppeteerError) {
                console.warn(`Puppeteer extraction failed for ${articleUrl}:`, puppeteerError);
                error = puppeteerError as Error;
            }
        }

        // Fallback to axios if Puppeteer failed or is disabled
        if (!scrapedContent && fallbackToAxios) {
            try {
                scrapedContent = await this.extractWithAxios(articleUrl, {
                    retryAttempts,
                    retryDelay,
                    customSelectors: {
                        content: contentSelectors,
                        title: titleSelectors,
                        images: imageSelectors,
                        author: authorSelectors,
                        date: dateSelectors,
                    },
                    customExtractors,
                });
            } catch (axiosError) {
                console.error(`Axios extraction also failed for ${articleUrl}:`, axiosError);
                throw axiosError;
            }
        }

        if (!scrapedContent) {
            throw error || new Error(`Failed to extract content from ${articleUrl}`);
        }

        // Convert to ArticleDto format
        return this.convertToArticleDto(scrapedContent, articleUrl, feedConfig);
    }

    private async extractWithPuppeteer(
        url: string,
        options: PuppeteerScrapingOptions & {
            customSelectors?: {
                content?: string[];
                title?: string[];
                images?: string[];
                author?: string[];
                date?: string[];
            };
            customExtractors?: {
                title?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
                content?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
                images?: (html: string, $: cheerio.CheerioAPI) => string[] | undefined;
                author?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
                date?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
            };
        }
    ): Promise<ScrapedContent> {
        if (!this.puppeteerScraper) {
            this.puppeteerScraper = new PuppeteerScraper();
        }

        const scrapedContent = await this.puppeteerScraper.scrapeArticle(url, options);

        // Apply custom extractors if provided
        if (options.customExtractors) {
            const $ = cheerio.load(scrapedContent.html || '');

            if (options.customExtractors.title) {
                const customTitle = options.customExtractors.title(scrapedContent.html || '', $);
                if (customTitle) scrapedContent.title = customTitle;
            }

            if (options.customExtractors.content) {
                const customContent = options.customExtractors.content(scrapedContent.html || '', $);
                if (customContent) scrapedContent.content = customContent;
            }

            if (options.customExtractors.images) {
                const customImages = options.customExtractors.images(scrapedContent.html || '', $);
                if (customImages) scrapedContent.images = customImages;
            }

            if (options.customExtractors.author) {
                const customAuthor = options.customExtractors.author(scrapedContent.html || '', $);
                if (customAuthor) scrapedContent.author = customAuthor;
            }

            if (options.customExtractors.date) {
                const customDate = options.customExtractors.date(scrapedContent.html || '', $);
                if (customDate) scrapedContent.publishedDate = customDate;
            }
        }

        return scrapedContent;
    }

    private async extractWithAxios(
        url: string,
        options: {
            retryAttempts: number;
            retryDelay: number;
            customSelectors?: {
                content?: string[];
                title?: string[];
                images?: string[];
                author?: string[];
                date?: string[];
            };
            customExtractors?: {
                title?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
                content?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
                images?: (html: string, $: cheerio.CheerioAPI) => string[] | undefined;
                author?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
                date?: (html: string, $: cheerio.CheerioAPI) => string | undefined;
            };
        }
    ): Promise<ScrapedContent> {
        const axios = require('axios');
        let lastError: Error;

        for (let attempt = 0; attempt < options.retryAttempts; attempt++) {
            try {
                const response = await axios.get(url, {
                    timeout: 30000,
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                        'Accept-Language': 'en-US,en;q=0.5',
                        'Accept-Encoding': 'gzip, deflate',
                        'Connection': 'keep-alive',
                        'Upgrade-Insecure-Requests': '1',
                    },
                });

                const html = response.data;
                const $ = cheerio.load(html);

                const scrapedContent: ScrapedContent = {
                    html,
                    title: this.extractWithCustomSelectors($, 'title', options.customSelectors?.title),
                    content: this.extractWithCustomSelectors($, 'content', options.customSelectors?.content),
                    images: this.extractImagesWithCustomSelectors($, options.customSelectors?.images),
                    author: this.extractWithCustomSelectors($, 'author', options.customSelectors?.author),
                    publishedDate: this.extractWithCustomSelectors($, 'date', options.customSelectors?.date),
                    description: this.extractDescription($),
                    keywords: this.extractKeywords($),
                    metadata: this.extractMetadata($),
                };

                // Apply custom extractors if provided
                if (options.customExtractors) {
                    if (options.customExtractors.title) {
                        const customTitle = options.customExtractors.title(html, $);
                        if (customTitle) scrapedContent.title = customTitle;
                    }

                    if (options.customExtractors.content) {
                        const customContent = options.customExtractors.content(html, $);
                        if (customContent) scrapedContent.content = customContent;
                    }

                    if (options.customExtractors.images) {
                        const customImages = options.customExtractors.images(html, $);
                        if (customImages) scrapedContent.images = customImages;
                    }

                    if (options.customExtractors.author) {
                        const customAuthor = options.customExtractors.author(html, $);
                        if (customAuthor) scrapedContent.author = customAuthor;
                    }

                    if (options.customExtractors.date) {
                        const customDate = options.customExtractors.date(html, $);
                        if (customDate) scrapedContent.publishedDate = customDate;
                    }
                }

                return scrapedContent;
            } catch (error) {
                lastError = error as Error;
                if (attempt < options.retryAttempts - 1) {
                    await new Promise(resolve => setTimeout(resolve, options.retryDelay));
                }
            }
        }

        throw lastError!;
    }

    private extractWithCustomSelectors(
        $: cheerio.CheerioAPI,
        type: string,
        customSelectors?: string[]
    ): string | undefined {
        const defaultSelectors = this.getDefaultSelectors(type);
        const selectors = customSelectors && customSelectors.length > 0
            ? [...customSelectors, ...defaultSelectors]
            : defaultSelectors;

        for (const selector of selectors) {
            const element = $(selector);
            if (element.length > 0) {
                const text = element.first().text().trim();
                if (text && text.length > 0) {
                    return text;
                }
            }
        }

        return undefined;
    }

    private extractImagesWithCustomSelectors(
        $: cheerio.CheerioAPI,
        customSelectors?: string[]
    ): string[] {
        const images: string[] = [];
        const defaultSelectors = this.getDefaultSelectors('images');
        const selectors = customSelectors && customSelectors.length > 0
            ? [...customSelectors, ...defaultSelectors]
            : defaultSelectors;

        for (const selector of selectors) {
            $(selector).each((_, element) => {
                const src = $(element).attr('src');
                const dataSrc = $(element).attr('data-src');
                const srcset = $(element).attr('srcset');

                if (src && src.startsWith('http')) {
                    images.push(src);
                } else if (dataSrc && dataSrc.startsWith('http')) {
                    images.push(dataSrc);
                } else if (srcset) {
                    const firstImage = srcset.split(',')[0].split(' ')[0];
                    if (firstImage && firstImage.startsWith('http')) {
                        images.push(firstImage);
                    }
                }
            });
        }

        return [...new Set(images)];
    }

    private getDefaultSelectors(type: string): string[] {
        switch (type) {
            case 'title':
                return [
                    'h1',
                    'h1.article-title',
                    'h1.post-title',
                    '.article-title',
                    '.post-title',
                    '.entry-title',
                    'title',
                    '[property="og:title"]',
                    '[name="twitter:title"]',
                ];
            case 'content':
                return [
                    'article',
                    '.article-content',
                    '.post-content',
                    '.entry-content',
                    '.content',
                    '.story-body',
                    '.article-body',
                    '.post-body',
                    '[role="main"]',
                    'main',
                ];
            case 'images':
                return [
                    'img[src]',
                    '.article-content img',
                    '.post-content img',
                    '.entry-content img',
                    'article img',
                    '.story-body img',
                ];
            case 'author':
                return [
                    '.author',
                    '.byline',
                    '.author-name',
                    '.post-author',
                    '.article-author',
                    '[rel="author"]',
                    '[property="article:author"]',
                    '[name="author"]',
                ];
            case 'date':
                return [
                    '.published-date',
                    '.post-date',
                    '.article-date',
                    '.entry-date',
                    'time[datetime]',
                    '[property="article:published_time"]',
                    '[property="og:published_time"]',
                    '.date',
                    '.timestamp',
                ];
            default:
                return [];
        }
    }

    private extractDescription($: cheerio.CheerioAPI): string | undefined {
        const descriptionSelectors = [
            '[name="description"]',
            '[property="og:description"]',
            '[name="twitter:description"]',
            '.article-description',
            '.post-excerpt',
            '.entry-summary',
        ];

        for (const selector of descriptionSelectors) {
            const element = $(selector);
            if (element.length > 0) {
                const description = element.attr('content') || element.text().trim();
                if (description && description.length > 0) {
                    return description;
                }
            }
        }

        return undefined;
    }

    private extractKeywords($: cheerio.CheerioAPI): string[] {
        const keywords: string[] = [];

        const metaKeywords = $('[name="keywords"]').attr('content');
        if (metaKeywords) {
            keywords.push(...metaKeywords.split(',').map(k => k.trim()));
        }

        const tagSelectors = [
            '.tags a',
            '.categories a',
            '.article-tags a',
            '.post-tags a',
            '.entry-tags a',
        ];

        for (const selector of tagSelectors) {
            $(selector).each((_, element) => {
                const tag = $(element).text().trim();
                if (tag && tag.length > 0) {
                    keywords.push(tag);
                }
            });
        }

        return [...new Set(keywords)];
    }

    private extractMetadata($: cheerio.CheerioAPI): Record<string, any> {
        const metadata: Record<string, any> = {};

        $('meta').each((_, element) => {
            const name = $(element).attr('name') || $(element).attr('property');
            const content = $(element).attr('content');
            if (name && content) {
                metadata[name] = content;
            }
        });

        $('[property^="og:"]').each((_, element) => {
            const property = $(element).attr('property');
            const content = $(element).attr('content');
            if (property && content) {
                metadata[property] = content;
            }
        });

        $('[name^="twitter:"]').each((_, element) => {
            const name = $(element).attr('name');
            const content = $(element).attr('content');
            if (name && content) {
                metadata[name] = content;
            }
        });

        return metadata;
    }

    private convertToArticleDto(
        scrapedContent: ScrapedContent,
        articleUrl: string,
        feedConfig: RSSFeedConfig
    ): Partial<ArticleDto> {
        return {
            title: scrapedContent.title || 'No title available',
            description: scrapedContent.description || scrapedContent.content?.substring(0, 200) || 'No description available',
            url: articleUrl,
            image: scrapedContent.images?.[0] || undefined,
            pubDate: scrapedContent.publishedDate ? new Date(scrapedContent.publishedDate).toISOString() : new Date().toISOString(),
            author: scrapedContent.author || 'Unknown',
            content: scrapedContent.content || '',
            tags: scrapedContent.keywords || [],
            metadata: {
                ogTitle: scrapedContent.metadata?.['og:title'],
                ogDescription: scrapedContent.metadata?.['og:description'],
                ogImage: scrapedContent.metadata?.['og:image'],
                ogType: scrapedContent.metadata?.['og:type'],
                twitterCard: scrapedContent.metadata?.['twitter:card'],
                twitterTitle: scrapedContent.metadata?.['twitter:title'],
                twitterDescription: scrapedContent.metadata?.['twitter:description'],
                twitterImage: scrapedContent.metadata?.['twitter:image'],
            }
        };
    }

    async cleanup(): Promise<void> {
        if (this.puppeteerScraper) {
            await this.puppeteerScraper.cleanup();
            this.puppeteerScraper = null;
        }
    }
}
