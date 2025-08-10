const axios = require('axios');

async function testArticleCounts() {
    try {
        console.log('Testing article counts in news/country endpoint...\n');

        // Test with USA (should have multiple feeds)
        const response = await axios.get('http://localhost:3000/spider-aggregator/news/usa');

        console.log('Response structure:');
        console.log(JSON.stringify(response.data, null, 2));

        // Verify the new fields exist
        if (response.data.totalArticles !== undefined) {
            console.log(`\n✅ Total articles: ${response.data.totalArticles}`);
        } else {
            console.log('\n❌ totalArticles field missing');
        }

        // Check each feed for articleCount
        const feeds = response.data.feeds;
        if (feeds) {
            console.log('\nFeed article counts:');
            Object.keys(feeds).forEach(feedName => {
                const feed = feeds[feedName];
                if (feed.articleCount !== undefined) {
                    console.log(`  ${feedName}: ${feed.articleCount} articles`);
                } else {
                    console.log(`  ❌ ${feedName}: articleCount field missing`);
                }
            });
        }

        // Verify total matches sum of individual counts
        if (feeds && response.data.totalArticles !== undefined) {
            const calculatedTotal = Object.values(feeds).reduce((total, feed) => total + (feed.articleCount || 0), 0);
            if (calculatedTotal === response.data.totalArticles) {
                console.log(`\n✅ Total articles (${response.data.totalArticles}) matches sum of individual feeds (${calculatedTotal})`);
            } else {
                console.log(`\n❌ Total articles (${response.data.totalArticles}) does not match sum of individual feeds (${calculatedTotal})`);
            }
        }

    } catch (error) {
        console.error('Error testing article counts:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        }
    }
}

// Run the test
testArticleCounts();
