const axios = require('axios');

async function testSpiderAggregator() {
    try {
        console.log('🚀 Testing Spider Aggregator API...\n');

        // Test with different countries
        const countries = ['usa', 'uk', 'canada'];

        for (const country of countries) {
            console.log(`📰 Testing country: ${country.toUpperCase()}`);
            console.log('='.repeat(50));

            try {
                const response = await axios.get(`http://localhost:3000/spider-aggregator/news/${country}`);

                console.log(`✅ Success! Found ${Object.keys(response.data.feeds).length} feeds`);

                // Display feed information
                for (const [feedName, feedData] of Object.entries(response.data.feeds)) {
                    console.log(`\n📡 Feed: ${feedName}`);
                    console.log(`   Articles: ${feedData.articles.length}`);

                    // Show first article details
                    if (feedData.articles.length > 0) {
                        const firstArticle = feedData.articles[0];
                        console.log(`   📄 First Article:`);
                        console.log(`      Title: ${firstArticle.title}`);
                        console.log(`      URL: ${firstArticle.url}`);
                        console.log(`      Description: ${firstArticle.description.substring(0, 100)}...`);
                        console.log(`      Content Length: ${firstArticle.content.length} characters`);
                        console.log(`      Tags: ${firstArticle.tags?.slice(0, 5).join(', ') || 'None'}`);
                        console.log(`      Word Count: ${firstArticle.wordCount || 'N/A'}`);
                        console.log(`      Read Time: ${firstArticle.readTime || 'N/A'}`);
                    }
                }

            } catch (error) {
                console.log(`❌ Error for ${country}: ${error.message}`);
            }

            console.log('\n' + '='.repeat(50) + '\n');
        }

    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
}

// Run the test
testSpiderAggregator(); 