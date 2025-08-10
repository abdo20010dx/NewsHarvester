const axios = require('axios');

async function testNewRSSStructure() {
    console.log('Testing new RSS feed structure...\n');

    try {
        // Test with USA to see the new structure in action
        console.log('🔍 Testing USA news feeds with new structure:');
        const response = await axios.get('http://localhost:3000/spider-aggregator/news/usa');

        if (response.status === 200) {
            console.log('✅ Request successful');
            console.log(`📊 Total articles: ${response.data.totalArticles}`);

            const feeds = response.data.feeds;
            if (feeds && Object.keys(feeds).length > 0) {
                console.log(`📰 Found ${Object.keys(feeds).length} feeds:`);

                Object.keys(feeds).forEach(feedName => {
                    const feed = feeds[feedName];
                    console.log(`  📋 ${feedName}: ${feed.articleCount} articles`);

                    // Show first few articles to verify content
                    if (feed.articles && feed.articles.length > 0) {
                        console.log(`    📄 Sample articles:`);
                        feed.articles.slice(0, 2).forEach((article, index) => {
                            console.log(`      ${index + 1}. ${article.title}`);
                            console.log(`         Category: ${article.category || 'N/A'}`);
                            console.log(`         URL: ${article.url}`);
                        });
                    }
                });
            } else {
                console.log('⚠️  No feeds found in response');
            }
        } else {
            console.log(`❌ Unexpected status: ${response.status}`);
        }

    } catch (error) {
        console.error('❌ Error testing new RSS structure:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }

    // Test different countries to see the structure
    console.log('\n🌍 Testing different countries:');
    const testCountries = ['uk', 'canada', 'germany', 'france'];

    for (const country of testCountries) {
        try {
            const response = await axios.get(`http://localhost:3000/spider-aggregator/news/${country}`);
            if (response.status === 200) {
                const feeds = response.data.feeds;
                const feedCount = feeds ? Object.keys(feeds).length : 0;
                console.log(`✅ ${country}: ${feedCount} feeds, ${response.data.totalArticles} total articles`);
            } else {
                console.log(`⚠️  ${country}: Status ${response.status}`);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log(`⚠️  ${country}: No RSS feeds found (expected)`);
            } else {
                console.log(`❌ ${country}: Error - ${error.message}`);
            }
        }
    }

    // Test the RSS feed configuration directly
    console.log('\n📋 Testing RSS feed configuration structure:');
    try {
        const fs = require('fs');
        const path = require('path');
        const rssFile = path.join(process.cwd(), 'src', 'rss-feed', 'rss-feed.json');

        if (fs.existsSync(rssFile)) {
            const rssData = JSON.parse(fs.readFileSync(rssFile, 'utf8'));
            console.log(`✅ RSS file loaded successfully`);
            console.log(`📊 Total countries: ${rssData.length}`);

            // Show USA structure
            const usaData = rssData.find(item => item.country === 'usa');
            if (usaData) {
                console.log(`🇺🇸 USA feeds: ${usaData.feeds.length} news sources`);
                usaData.feeds.forEach(feed => {
                    console.log(`  📰 ${feed.feedName}: ${feed.urls.length} categories`);
                    feed.urls.forEach(urlConfig => {
                        console.log(`    - ${urlConfig.category}: ${urlConfig.url}`);
                    });
                });
            }
        } else {
            console.log('❌ RSS file not found');
        }
    } catch (error) {
        console.error('❌ Error reading RSS file:', error.message);
    }
}

// Run the test
testNewRSSStructure();
