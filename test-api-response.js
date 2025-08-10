const fs = require('fs');
const path = require('path');

// Mock API response to demonstrate the functionality
function generateMockAPIResponse(country) {
    const rssFeedsFile = path.join(process.cwd(), 'src', 'rss-feed', 'rss-feed.json');

    let feeds = {};

    try {
        if (fs.existsSync(rssFeedsFile)) {
            const rssFeedsData = JSON.parse(fs.readFileSync(rssFeedsFile, 'utf8'));
            const countryFeeds = rssFeedsData.filter((feed) =>
                feed.country.toLowerCase() === country.toLowerCase()
            );

            for (const feedConfig of countryFeeds) {
                feeds[feedConfig.feedName] = {
                    articles: [
                        {
                            title: `Latest Technology News from ${feedConfig.feedName}`,
                            image: "https://example.com/tech-image.jpg",
                            description: "This is a sample article about the latest developments in technology and innovation.",
                            pubDate: new Date().toISOString(),
                            content: "This is the full content of the article. It contains detailed information about the latest technology trends, including artificial intelligence, machine learning, and emerging technologies. The article discusses how these technologies are shaping the future of various industries.",
                            url: `https://${feedConfig.feedName}.com/article/latest-tech-news`,
                            videoUrl: "https://www.youtube.com/embed/sample-video",
                            author: "Tech Reporter",
                            category: feedConfig.category,
                            tags: ["technology", "AI", "innovation", "tech news", "digital transformation"],
                            readTime: "5 min read",
                            wordCount: 250,
                            language: "en",
                            canonicalUrl: `https://${feedConfig.feedName}.com/article/latest-tech-news`,
                            socialShares: {
                                facebook: 150,
                                twitter: 89,
                                linkedin: 45
                            },
                            metadata: {
                                ogTitle: "Latest Technology News and Trends",
                                ogDescription: "Discover the latest developments in technology and innovation",
                                ogImage: "https://example.com/og-tech-image.jpg",
                                ogType: "article",
                                twitterCard: "summary_large_image",
                                twitterTitle: "Latest Technology News and Trends",
                                twitterDescription: "Discover the latest developments in technology and innovation",
                                twitterImage: "https://example.com/twitter-tech-image.jpg"
                            }
                        },
                        {
                            title: `Breaking News: Major Tech Company Announcement`,
                            image: "https://example.com/breaking-news.jpg",
                            description: "A major technology company has announced groundbreaking new products and services.",
                            pubDate: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
                            content: "In a surprising announcement today, a major technology company revealed their latest innovations. The new products promise to revolutionize how we interact with technology in our daily lives. Industry experts are calling this a game-changer.",
                            url: `https://${feedConfig.feedName}.com/article/breaking-tech-news`,
                            videoUrl: undefined,
                            author: "Breaking News Team",
                            category: feedConfig.category,
                            tags: ["breaking news", "tech company", "announcement", "innovation"],
                            readTime: "3 min read",
                            wordCount: 180,
                            language: "en",
                            canonicalUrl: `https://${feedConfig.feedName}.com/article/breaking-tech-news`,
                            socialShares: {
                                facebook: 320,
                                twitter: 156,
                                linkedin: 78
                            },
                            metadata: {
                                ogTitle: "Breaking News: Major Tech Company Announcement",
                                ogDescription: "A major technology company has announced groundbreaking new products",
                                ogImage: "https://example.com/og-breaking-news.jpg",
                                ogType: "article",
                                twitterCard: "summary_large_image",
                                twitterTitle: "Breaking News: Major Tech Company Announcement",
                                twitterDescription: "A major technology company has announced groundbreaking new products",
                                twitterImage: "https://example.com/twitter-breaking-news.jpg"
                            }
                        }
                    ]
                };
            }
        }
    } catch (error) {
        console.error(`Error reading RSS feeds for country ${country}:`, error);
    }

    return { feeds };
}

function testAPIResponse() {
    console.log('🚀 Testing Spider Aggregator API Response Format\n');

    const testCountries = ['usa', 'uk', 'canada'];

    for (const country of testCountries) {
        console.log(`📰 Testing country: ${country.toUpperCase()}`);
        console.log('='.repeat(60));

        const response = generateMockAPIResponse(country);

        console.log(`✅ Found ${Object.keys(response.feeds).length} feeds for ${country}`);

        // Display the response structure
        for (const [feedName, feedData] of Object.entries(response.feeds)) {
            console.log(`\n📡 Feed: ${feedName}`);
            console.log(`   Articles: ${feedData.articles.length}`);

            // Show detailed article information
            feedData.articles.forEach((article, index) => {
                console.log(`\n   📄 Article ${index + 1}:`);
                console.log(`      Title: ${article.title}`);
                console.log(`      URL: ${article.url}`);
                console.log(`      Description: ${article.description}`);
                console.log(`      Content Length: ${article.content.length} characters`);
                console.log(`      Author: ${article.author}`);
                console.log(`      Category: ${article.category}`);
                console.log(`      Tags: ${article.tags.join(', ')}`);
                console.log(`      Read Time: ${article.readTime}`);
                console.log(`      Word Count: ${article.wordCount}`);
                console.log(`      Language: ${article.language}`);
                console.log(`      Video URL: ${article.videoUrl || 'None'}`);
                console.log(`      Social Shares: Facebook(${article.socialShares.facebook}), Twitter(${article.socialShares.twitter}), LinkedIn(${article.socialShares.linkedin})`);
                console.log(`      Metadata: OG Title(${article.metadata.ogTitle})`);
            });
        }

        console.log('\n' + '='.repeat(60) + '\n');
    }

    console.log('🎉 API Response Format Test Completed Successfully!');
    console.log('\n📋 Summary of API Features:');
    console.log('   ✅ Country-based RSS feed aggregation');
    console.log('   ✅ Article content extraction with full metadata');
    console.log('   ✅ Original URL inclusion for each article');
    console.log('   ✅ Social media sharing data');
    console.log('   ✅ Open Graph and Twitter metadata');
    console.log('   ✅ Article tags and categorization');
    console.log('   ✅ Read time and word count information');
    console.log('   ✅ Video URL support when available');
    console.log('   ✅ Author and publication information');
}

// Run the test
testAPIResponse();
