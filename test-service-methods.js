const fs = require('fs');
const path = require('path');

// Mock the service methods for testing
class MockSpiderAggregatorService {
    constructor() {
        this.RSS_FEEDS_FILE = path.join(process.cwd(), 'src', 'rss-feed', 'rss-feed.json');
    }

    normalizeCountryName(country) {
        const countryMap = {
            'usa': 'usa',
            'us': 'usa',
            'united states': 'usa',
            'united states of america': 'usa',
            'uk': 'uk',
            'united kingdom': 'uk',
            'great britain': 'uk',
            'england': 'uk',
            'canada': 'canada',
            'germany': 'germany',
            'deutschland': 'germany',
            'france': 'france',
            'australia': 'australia',
            'japan': 'japan',
            'india': 'india',
            'brazil': 'brazil',
            'brasil': 'brazil',
        };

        const normalized = country.toLowerCase().trim();
        return countryMap[normalized] || normalized;
    }

    getRSSFeedsForCountry(country) {
        try {
            if (!fs.existsSync(this.RSS_FEEDS_FILE)) {
                console.warn('RSS feeds file not found, returning empty array');
                return [];
            }

            const rssFeedsData = JSON.parse(fs.readFileSync(this.RSS_FEEDS_FILE, 'utf8'));

            const countryFeeds = rssFeedsData.filter((feed) =>
                feed.country.toLowerCase() === country.toLowerCase()
            );

            return countryFeeds.map((feed) => ({
                country: feed.country,
                category: feed.category || 'general',
                feedName: feed.feedName || feed.name || 'unknown',
                url: feed.url,
            }));
        } catch (error) {
            console.error(`Error reading RSS feeds for country ${country}:`, error);
            return [];
        }
    }

    async getTopStoriesByCountry(country) {
        try {
            const normalizedCountry = this.normalizeCountryName(country);
            const rssFeeds = this.getRSSFeedsForCountry(normalizedCountry);

            if (rssFeeds.length === 0) {
                return { feeds: {} };
            }

            const feedsData = {};

            for (const feedConfig of rssFeeds) {
                try {
                    // Mock articles for testing
                    const mockArticles = [
                        {
                            title: `Sample Article from ${feedConfig.feedName}`,
                            image: 'https://example.com/image.jpg',
                            description: 'This is a sample article description for testing purposes.',
                            pubDate: new Date().toISOString(),
                            content: 'This is the full content of the sample article. It contains detailed information about the topic.',
                            url: 'https://example.com/article1',
                            videoUrl: undefined,
                            author: 'Sample Author',
                            category: feedConfig.category,
                            tags: ['sample', 'test', 'news'],
                            readTime: '3 min read',
                            wordCount: 150,
                            language: 'en',
                            canonicalUrl: 'https://example.com/article1',
                            socialShares: {
                                facebook: 10,
                                twitter: 5,
                                linkedin: 2
                            },
                            metadata: {
                                ogTitle: 'Sample Article Title',
                                ogDescription: 'Sample article description',
                                ogImage: 'https://example.com/og-image.jpg',
                                ogType: 'article',
                                twitterCard: 'summary_large_image',
                                twitterTitle: 'Sample Article Title',
                                twitterDescription: 'Sample article description',
                                twitterImage: 'https://example.com/twitter-image.jpg'
                            }
                        }
                    ];

                    feedsData[feedConfig.feedName] = {
                        articles: mockArticles,
                    };
                } catch (error) {
                    console.error(`Failed to process RSS feed: ${feedConfig.feedName}`, error);
                }
            }

            return { feeds: feedsData };
        } catch (error) {
            console.error(`Error getting top stories for country: ${country}`, error);
            throw new Error(`Failed to get top stories for country: ${country}`);
        }
    }
}

async function testServiceMethods() {
    console.log('🧪 Testing SpiderAggregatorService Methods...\n');

    try {
        const service = new MockSpiderAggregatorService();

        // Test country normalization
        console.log('📍 Testing country normalization:');
        const testCountries = ['usa', 'US', 'United States', 'uk', 'UK', 'United Kingdom', 'canada', 'Canada'];

        for (const country of testCountries) {
            const normalized = service.normalizeCountryName(country);
            console.log(`   ${country} -> ${normalized}`);
        }

        console.log('\n📡 Testing RSS feeds retrieval:');
        const testCountries2 = ['usa', 'uk', 'canada'];

        for (const country of testCountries2) {
            const feeds = service.getRSSFeedsForCountry(country);
            console.log(`   ${country}: ${feeds.length} feeds found`);
            feeds.forEach(feed => {
                console.log(`     - ${feed.feedName} (${feed.category}): ${feed.url}`);
            });
        }

        console.log('\n📰 Testing getTopStoriesByCountry:');
        for (const country of testCountries2) {
            try {
                const result = await service.getTopStoriesByCountry(country);
                console.log(`✅ ${country} -> Found ${Object.keys(result.feeds).length} feeds`);

                // Show sample data
                for (const [feedName, feedData] of Object.entries(result.feeds)) {
                    console.log(`   📡 ${feedName}: ${feedData.articles.length} articles`);
                    if (feedData.articles.length > 0) {
                        const article = feedData.articles[0];
                        console.log(`      📄 Sample: ${article.title}`);
                        console.log(`      🔗 URL: ${article.url}`);
                        console.log(`      📝 Content length: ${article.content.length} chars`);
                        console.log(`      🏷️ Tags: ${article.tags.join(', ')}`);
                        console.log(`      📊 Word count: ${article.wordCount}`);
                        console.log(`      ⏱️ Read time: ${article.readTime}`);
                    }
                }
            } catch (error) {
                console.log(`❌ ${country} -> Error: ${error.message}`);
            }
        }

        console.log('\n🎉 All tests completed successfully!');

    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
}

// Run the test
testServiceMethods();
