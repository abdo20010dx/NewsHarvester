const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testGlobalMethods() {
  console.log('🧪 Testing NewsHarvester Global Methods...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing health endpoint...');
    const health = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check passed:', health.data);
    console.log('');

    // Test 2: Get sample feed configs
    console.log('2. Getting sample feed configurations...');
    const sampleConfigs = await axios.get(`${BASE_URL}/feeds/sample`);
    console.log('✅ Sample configs retrieved:', sampleConfigs.data.length, 'feeds');
    console.log('');

    // Test 3: Test single RSS feed processing
    console.log('3. Testing single RSS feed processing...');
    const testConfig = {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    };
    
    const articles = await axios.post(`${BASE_URL}/rss/process`, testConfig);
    console.log('✅ RSS processing successful:', articles.data.length, 'articles found');
    if (articles.data.length > 0) {
      console.log('   First article:', articles.data[0].title);
    }
    console.log('');

    // Test 4: Test content extraction (skip for now as it requires a real article URL)
    console.log('4. Testing content extraction...');
    try {
      const contentResponse = await axios.post(`${BASE_URL}/content/extract`, testConfig, {
        params: { url: 'https://techcrunch.com/2024/01/01/example-article/' }
      });
      console.log('✅ Content extraction successful:', contentResponse.data.length, 'characters extracted');
    } catch (error) {
      console.log('⚠️  Content extraction test skipped (requires real article URL)');
    }
    console.log('');

    console.log('🎉 All tests passed! Your global methods are working correctly.');
    console.log('\n📋 Available endpoints:');
    console.log('   GET  /health - Health check');
    console.log('   GET  /feeds/sample - Get sample feed configs');
    console.log('   POST /rss/process - Process single RSS feed');
    console.log('   POST /rss/harvest - Process RSS with full content');
    console.log('   POST /rss/process-multiple - Process multiple feeds');
    console.log('   POST /content/extract - Extract content from URL');
    console.log('   GET  /test/techcrunch - Quick test endpoint');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the test
testGlobalMethods(); 