const { SpiderAggregatorService } = require('./dist/spider-aggregator/spider-aggregator.service');

async function testServiceDirectly() {
    console.log('🧪 Testing SpiderAggregatorService directly...\n');

    try {
        const service = new SpiderAggregatorService();

        // Test country normalization
        console.log('📍 Testing country normalization:');
        const testCountries = ['usa', 'US', 'United States', 'uk', 'UK', 'United Kingdom'];

        for (const country of testCountries) {
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
                    }
                }
            } catch (error) {
                console.log(`❌ ${country} -> Error: ${error.message}`);
            }
        }

    } catch (error) {
        console.error('❌ Test failed:', error.message);
    }
}

// Run the test
testServiceDirectly(); 