const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// The specific article mentioned by the user
const TARGET_ARTICLE = {
  title: "The Browser Company launches a $20 monthly subscription for its AI-powered browser",
  url: "https://techcrunch.com/2025/08/06/the-browser-company-launches-a-20-monthly-subscription-for-its-ai-powered-browser/",
  config: {
    country: 'usa',
    category: 'technology',
    feedName: 'techcrunch',
    url: 'https://techcrunch.com/feed/'
  }
};

// Additional test articles to compare extraction quality
const TEST_ARTICLES = [
  {
    title: "The Browser Company launches a $20 monthly subscription for its AI-powered browser",
    url: "https://techcrunch.com/2025/08/06/the-browser-company-launches-a-20-monthly-subscription-for-its-ai-powered-browser/",
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    }
  },
  {
    title: "Apple's Vision Pro gets a major update with visionOS 2",
    url: "https://techcrunch.com/2025/08/06/apples-vision-pro-gets-a-major-update-with-visionos-2/",
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    }
  },
  {
    title: "OpenAI's GPT-4o mini is now available to all users",
    url: "https://techcrunch.com/2025/08/06/openais-gpt-4o-mini-is-now-available-to-all-users/",
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    }
  }
];

async function testHealthEndpoint() {
  try {
    const response = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check passed:', response.data);
    return true;
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
    return false;
  }
}

async function testContentExtraction(article) {
  try {
    console.log(`\n🔍 Testing content extraction for: ${article.title}`);
    console.log(`📄 URL: ${article.url}`);
    
    const response = await axios.post(`${BASE_URL}/content/extract?url=${encodeURIComponent(article.url)}`, article.config);
    const content = response.data;
    
    console.log(`📊 Content length: ${content.length} characters`);
    console.log(`📝 Content preview (first 500 chars):`);
    console.log(content.substring(0, 500) + (content.length > 500 ? '...' : ''));
    
    // Analyze content quality
    const hasContent = content.length > 100;
    const hasParagraphs = content.includes('<p>') || content.includes('\n\n');
    const hasSentences = content.includes('.') && content.includes(' ');
    
    console.log(`\n📈 Content Quality Analysis:`);
    console.log(`   - Has substantial content (>100 chars): ${hasContent ? '✅' : '❌'}`);
    console.log(`   - Has paragraphs: ${hasParagraphs ? '✅' : '❌'}`);
    console.log(`   - Has sentences: ${hasSentences ? '✅' : '❌'}`);
    
    return {
      success: true,
      content,
      length: content.length,
      hasContent,
      hasParagraphs,
      hasSentences
    };
  } catch (error) {
    console.log(`❌ Content extraction failed: ${error.message}`);
    return {
      success: false,
      error: error.message
    };
  }
}

async function testPostExtraction(article) {
  try {
    console.log(`\n🔍 Testing post extraction for: ${article.title}`);
    
    const response = await axios.post(`${BASE_URL}/post/extract?url=${encodeURIComponent(article.url)}`, article.config);
    const postData = response.data;
    
    console.log(`📊 Extracted Post Data:`);
    console.log(`   - Title: ${postData.title || 'N/A'}`);
    console.log(`   - Content length: ${postData.content?.length || 0} characters`);
    console.log(`   - Description: ${postData.description || 'N/A'}`);
    console.log(`   - Tags: ${postData.tags?.length || 0} tags`);
    
    if (postData.tags && postData.tags.length > 0) {
      console.log(`   - Tag list: ${postData.tags.join(', ')}`);
    }
    
    // Analyze extraction quality
    const hasTitle = postData.title && postData.title.length > 0;
    const hasContent = postData.content && postData.content.length > 100;
    const hasDescription = postData.description && postData.description.length > 0;
    const hasTags = postData.tags && postData.tags.length > 0;
    
    console.log(`\n📈 Extraction Quality Analysis:`);
    console.log(`   - Has title: ${hasTitle ? '✅' : '❌'}`);
    console.log(`   - Has content: ${hasContent ? '✅' : '❌'}`);
    console.log(`   - Has description: ${hasDescription ? '✅' : '❌'}`);
    console.log(`   - Has tags: ${hasTags ? '✅' : '❌'}`);
    
    return {
      success: true,
      postData,
      hasTitle,
      hasContent,
      hasDescription,
      hasTags
    };
  } catch (error) {
    console.log(`❌ Post extraction failed: ${error.message}`);
    return {
      success: false,
      error: error.message
    };
  }
}

async function runFocusedTests() {
  console.log('🚀 Starting focused content extraction tests...\n');
  
  // Wait for server to be ready
  console.log('⏳ Waiting for server to be ready...');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Test health endpoint
  const healthOk = await testHealthEndpoint();
  if (!healthOk) {
    console.log('❌ Server not ready, exiting...');
    return;
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('🎯 FOCUSED TESTING: Content Extraction Quality Analysis');
  console.log('='.repeat(80));
  
  let totalTests = 0;
  let successfulTests = 0;
  let successfulContentExtractions = 0;
  let successfulPostExtractions = 0;
  
  for (const article of TEST_ARTICLES) {
    totalTests += 2; // Content extraction + Post extraction
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📰 ARTICLE: ${article.title}`);
    console.log(`${'='.repeat(60)}`);
    
    // Test content extraction
    const contentResult = await testContentExtraction(article);
    if (contentResult.success) {
      successfulTests++;
      successfulContentExtractions++;
    }
    
    // Test post extraction
    const postResult = await testPostExtraction(article);
    if (postResult.success) {
      successfulTests++;
      successfulPostExtractions++;
    }
    
    // Add delay between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total tests: ${totalTests}`);
  console.log(`Successful tests: ${successfulTests}`);
  console.log(`Success rate: ${((successfulTests / totalTests) * 100).toFixed(1)}%`);
  console.log(`Content extractions: ${successfulContentExtractions}/${TEST_ARTICLES.length}`);
  console.log(`Post extractions: ${successfulPostExtractions}/${TEST_ARTICLES.length}`);
  
  // Special focus on the target article
  console.log('\n' + '='.repeat(80));
  console.log('🎯 TARGET ARTICLE ANALYSIS');
  console.log('='.repeat(80));
  
  const targetArticle = TEST_ARTICLES[0];
  console.log(`Article: ${targetArticle.title}`);
  console.log(`URL: ${targetArticle.url}`);
  
  // Detailed analysis of target article
  const targetContentResult = await testContentExtraction(targetArticle);
  const targetPostResult = await testPostExtraction(targetArticle);
  
  if (targetContentResult.success && targetPostResult.success) {
    console.log('\n📋 DETAILED ANALYSIS:');
    console.log(`Content length: ${targetContentResult.length} characters`);
    console.log(`Content quality: ${targetContentResult.hasContent ? 'Good' : 'Poor'}`);
    console.log(`Tags found: ${targetPostResult.postData.tags?.length || 0}`);
    
    if (targetPostResult.postData.tags && targetPostResult.postData.tags.length > 0) {
      console.log(`Tag suggestions: ${targetPostResult.postData.tags.join(', ')}`);
    } else {
      console.log('⚠️  No tags detected - this needs improvement');
    }
  }
}

// Run the tests
runFocusedTests().catch(console.error); 