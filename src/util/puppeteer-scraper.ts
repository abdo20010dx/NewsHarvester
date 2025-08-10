import * as puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

export interface PuppeteerScrapingOptions {
    waitForSelector?: string;
    scrollToBottom?: boolean;
    scrollDelay?: number;
    scrollStep?: number;
    waitForNetworkIdle?: boolean;
    timeout?: number;
    userAgent?: string;
    viewport?: { width: number; height: number };
    extraHeaders?: Record<string, string>;
    disableImages?: boolean;
    disableCSS?: boolean;
    disableJavaScript?: boolean;
}

export interface ScrapedContent {
    title?: string;
    content?: string;
    images?: string[];
    author?: string;
    publishedDate?: string;
    description?: string;
    keywords?: string[];
    html?: string;
    metadata?: Record<string, any>;
}

export class PuppeteerScraper {
    private browser: puppeteer.Browser | null = null;
    private page: puppeteer.Page | null = null;

    // Chrome arguments for better performance and stealth
    private readonly chromeArgs = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding',
        '--disable-features=TranslateUI',
        '--disable-ipc-flooding-protection',
        '--disable-default-apps',
        '--disable-extensions',
        '--disable-plugins',
        '--disable-images',
        '--disable-javascript',
        '--disable-css',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
        '--disable-background-networking',
        '--disable-sync',
        '--disable-translate',
        '--hide-scrollbars',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-pings',
        '--password-store=basic',
        '--use-gl=swiftshader',
        '--use-mock-keychain',
        '--disable-blink-features=AutomationControlled',
        '--disable-features=site-per-process',
        '--disable-site-isolation-trials',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor',
        '--disable-background-networking',
        '--disable-sync',
        '--disable-translate',
        '--hide-scrollbars',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-pings',
        '--password-store=basic',
        '--use-gl=swiftshader',
        '--use-mock-keychain',
    ];

    constructor() { }

    async initialize(options: PuppeteerScrapingOptions = {}): Promise<void> {
        if (this.browser) {
            await this.cleanup();
        }

        const launchOptions: puppeteer.LaunchOptions = {
            headless: true,
            args: this.chromeArgs,
            timeout: options.timeout || 30000,
        };

        // Remove disabled features from args
        if (options.disableImages) {
            launchOptions.args = launchOptions.args?.filter(arg => !arg.includes('disable-images'));
        }
        if (options.disableCSS) {
            launchOptions.args = launchOptions.args?.filter(arg => !arg.includes('disable-css'));
        }
        if (options.disableJavaScript) {
            launchOptions.args = launchOptions.args?.filter(arg => !arg.includes('disable-javascript'));
        }

        this.browser = await puppeteer.launch(launchOptions);
        this.page = await this.browser.newPage();

        // Set user agent
        if (options.userAgent) {
            await this.page.setUserAgent(options.userAgent);
        } else {
            await this.page.setUserAgent(
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            );
        }

        // Set viewport
        if (options.viewport) {
            await this.page.setViewport(options.viewport);
        } else {
            await this.page.setViewport({ width: 1920, height: 1080 });
        }

        // Set extra headers
        if (options.extraHeaders) {
            await this.page.setExtraHTTPHeaders(options.extraHeaders);
        }

        // Set default timeout
        this.page.setDefaultTimeout(options.timeout || 30000);
        this.page.setDefaultNavigationTimeout(options.timeout || 30000);

        // Intercept requests to block unnecessary resources
        await this.page.setRequestInterception(true);
        this.page.on('request', (req) => {
            const resourceType = req.resourceType();
            if (options.disableImages && resourceType === 'image') {
                req.abort();
            } else if (options.disableCSS && resourceType === 'stylesheet') {
                req.abort();
            } else if (options.disableJavaScript && resourceType === 'script') {
                req.abort();
            } else if (['font', 'media'].includes(resourceType)) {
                req.abort();
            } else {
                req.continue();
            }
        });
    }

    async scrapeArticle(url: string, options: PuppeteerScrapingOptions = {}): Promise<ScrapedContent> {
        if (!this.page) {
            await this.initialize(options);
        }

        try {
            console.log(`Scraping article: ${url}`);

            // Navigate to the page
            await this.page!.goto(url, {
                waitUntil: options.waitForNetworkIdle ? 'networkidle2' : 'domcontentloaded',
                timeout: options.timeout || 30000
            });

            // Wait for specific selector if provided
            if (options.waitForSelector) {
                await this.page!.waitForSelector(options.waitForSelector, { timeout: options.timeout || 30000 });
            }

            // Scroll to bottom if requested
            if (options.scrollToBottom) {
                await this.autoScroll(options.scrollDelay || 1000, options.scrollStep || 500);
            }

            // Get the page content
            const html = await this.page!.content();
            const $ = cheerio.load(html);

            // Extract content using multiple strategies
            const scrapedContent: ScrapedContent = {
                html,
                title: this.extractTitle($),
                content: this.extractContent($),
                images: this.extractImages($),
                author: this.extractAuthor($),
                publishedDate: this.extractPublishedDate($),
                description: this.extractDescription($),
                keywords: this.extractKeywords($),
                metadata: this.extractMetadata($),
            };

            return scrapedContent;
        } catch (error) {
            console.error(`Error scraping article ${url}:`, error);
            throw error;
        }
    }

    private async autoScroll(scrollDelay: number, scrollStep: number): Promise<void> {
        await this.page!.evaluate(async (delay, step) => {
            await new Promise<void>((resolve) => {
                let totalHeight = 0;
                const distance = step;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, delay);
            });
        }, scrollDelay, scrollStep);
    }

    private extractTitle($: cheerio.CheerioAPI): string | undefined {
        // Multiple strategies for title extraction
        const titleSelectors = [
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

        for (const selector of titleSelectors) {
            const element = $(selector);
            if (element.length > 0) {
                const title = element.first().text().trim();
                if (title && title.length > 0) {
                    return title;
                }
            }
        }

        return undefined;
    }

    private extractContent($: cheerio.CheerioAPI): string | undefined {
        // Multiple strategies for content extraction
        const contentSelectors = [
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

        for (const selector of contentSelectors) {
            const element = $(selector);
            if (element.length > 0) {
                // Remove unwanted elements
                element.find('script, style, nav, header, footer, .advertisement, .ads, .sidebar').remove();

                const content = element.text().trim();
                if (content && content.length > 100) { // Minimum content length
                    return content;
                }
            }
        }

        // Fallback: try to find the largest text block
        const paragraphs = $('p');
        if (paragraphs.length > 0) {
            const content = paragraphs.map((_, el) => $(el).text().trim()).get().join('\n\n');
            if (content && content.length > 100) {
                return content;
            }
        }

        return undefined;
    }

    private extractImages($: cheerio.CheerioAPI): string[] {
        const images: string[] = [];

        // Look for images in various contexts
        const imageSelectors = [
            'img[src]',
            '.article-content img',
            '.post-content img',
            '.entry-content img',
            'article img',
            '.story-body img',
        ];

        for (const selector of imageSelectors) {
            $(selector).each((_, element) => {
                const src = $(element).attr('src');
                const dataSrc = $(element).attr('data-src');
                const srcset = $(element).attr('srcset');

                if (src && src.startsWith('http')) {
                    images.push(src);
                } else if (dataSrc && dataSrc.startsWith('http')) {
                    images.push(dataSrc);
                } else if (srcset) {
                    // Extract first image from srcset
                    const firstImage = srcset.split(',')[0].split(' ')[0];
                    if (firstImage && firstImage.startsWith('http')) {
                        images.push(firstImage);
                    }
                }
            });
        }

        // Remove duplicates and return
        return [...new Set(images)];
    }

    private extractAuthor($: cheerio.CheerioAPI): string | undefined {
        const authorSelectors = [
            '.author',
            '.byline',
            '.author-name',
            '.post-author',
            '.article-author',
            '[rel="author"]',
            '[property="article:author"]',
            '[name="author"]',
        ];

        for (const selector of authorSelectors) {
            const element = $(selector);
            if (element.length > 0) {
                const author = element.first().text().trim();
                if (author && author.length > 0) {
                    return author;
                }
            }
        }

        return undefined;
    }

    private extractPublishedDate($: cheerio.CheerioAPI): string | undefined {
        const dateSelectors = [
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

        for (const selector of dateSelectors) {
            const element = $(selector);
            if (element.length > 0) {
                const date = element.attr('datetime') || element.text().trim();
                if (date && date.length > 0) {
                    return date;
                }
            }
        }

        return undefined;
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

        // Extract from meta keywords
        const metaKeywords = $('[name="keywords"]').attr('content');
        if (metaKeywords) {
            keywords.push(...metaKeywords.split(',').map(k => k.trim()));
        }

        // Extract from article tags
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

        // Extract all meta tags
        $('meta').each((_, element) => {
            const name = $(element).attr('name') || $(element).attr('property');
            const content = $(element).attr('content');
            if (name && content) {
                metadata[name] = content;
            }
        });

        // Extract Open Graph data
        $('[property^="og:"]').each((_, element) => {
            const property = $(element).attr('property');
            const content = $(element).attr('content');
            if (property && content) {
                metadata[property] = content;
            }
        });

        // Extract Twitter Card data
        $('[name^="twitter:"]').each((_, element) => {
            const name = $(element).attr('name');
            const content = $(element).attr('content');
            if (name && content) {
                metadata[name] = content;
            }
        });

        return metadata;
    }

    async takeScreenshot(url: string, outputPath: string, options: PuppeteerScrapingOptions = {}): Promise<void> {
        if (!this.page) {
            await this.initialize(options);
        }

        try {
            await this.page!.goto(url, {
                waitUntil: options.waitForNetworkIdle ? 'networkidle2' : 'domcontentloaded',
                timeout: options.timeout || 30000
            });

            if (options.waitForSelector) {
                await this.page!.waitForSelector(options.waitForSelector, { timeout: options.timeout || 30000 });
            }

            if (options.scrollToBottom) {
                await this.autoScroll(options.scrollDelay || 1000, options.scrollStep || 500);
            }

            await this.page!.screenshot({
                path: outputPath as `${string}.png`,
                fullPage: true,
                type: 'png'
            });

            console.log(`Screenshot saved to: ${outputPath}`);
        } catch (error) {
            console.error(`Error taking screenshot of ${url}:`, error);
            throw error;
        }
    }

    async getPageInfo(url: string, options: PuppeteerScrapingOptions = {}): Promise<any> {
        if (!this.page) {
            await this.initialize(options);
        }

        try {
            await this.page!.goto(url, {
                waitUntil: options.waitForNetworkIdle ? 'networkidle2' : 'domcontentloaded',
                timeout: options.timeout || 30000
            });

            const pageInfo = await this.page!.evaluate(() => {
                return {
                    title: document.title,
                    url: window.location.href,
                    description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
                    keywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content'),
                    viewport: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                    },
                    scrollHeight: document.body.scrollHeight,
                    scrollWidth: document.body.scrollWidth,
                    readyState: document.readyState,
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                    cookies: document.cookie,
                    localStorage: Object.keys(localStorage),
                    sessionStorage: Object.keys(sessionStorage),
                };
            });

            return pageInfo;
        } catch (error) {
            console.error(`Error getting page info for ${url}:`, error);
            throw error;
        }
    }

    async cleanup(): Promise<void> {
        if (this.page) {
            await this.page.close();
            this.page = null;
        }
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
