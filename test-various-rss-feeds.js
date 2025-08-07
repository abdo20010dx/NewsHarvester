const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Various RSS feeds to test with different structures and content types
const RSS_FEEDS = [
  {
    name: 'TechCrunch',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'techcrunch',
      url: 'https://techcrunch.com/feed/'
    },
    testUrl: 'https://techcrunch.com/2025/08/06/the-browser-company-launches-a-20-monthly-subscription-for-its-ai-powered-browser/'
  },
  {
    name: 'BBC News',
    config: {
      country: 'uk',
      category: 'news',
      feedName: 'bbc-news',
      url: 'https://feeds.bbci.co.uk/news/rss.xml'
    },
    testUrl: 'https://www.bbc.com/news/world-us-canada-67856789'
  },
  {
    name: 'Reuters Technology',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'reuters-tech',
      url: 'https://feeds.reuters.com/reuters/technologyNews'
    },
    testUrl: 'https://www.reuters.com/technology/'
  },
  {
    name: 'The Verge',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'the-verge',
      url: 'https://www.theverge.com/rss/index.xml'
    },
    testUrl: 'https://www.theverge.com/2025/1/15/24041241/'
  },
  {
    name: 'Ars Technica',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'ars-technica',
      url: 'https://feeds.arstechnica.com/arstechnica/index'
    },
    testUrl: 'https://arstechnica.com/'
  },
  {
    name: 'Wired',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'wired',
      url: 'https://www.wired.com/feed/rss'
    },
    testUrl: 'https://www.wired.com/'
  },
  {
    name: 'Engadget',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'engadget',
      url: 'https://www.engadget.com/rss.xml'
    },
    testUrl: 'https://www.engadget.com/'
  },
  {
    name: 'Mashable',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'mashable',
      url: 'https://feeds.mashable.com/Mashable'
    },
    testUrl: 'https://mashable.com/'
  },
  {
    name: 'Gizmodo',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'gizmodo',
      url: 'https://gizmodo.com/rss'
    },
    testUrl: 'https://gizmodo.com/'
  },
  {
    name: 'VentureBeat',
    config: {
      country: 'usa',
      category: 'technology',
      feedName: 'venturebeat',
      url: 'https://venturebeat.com/feed/'
    },
    testUrl: 'https://venturebeat.com/'
  }
];

async function testHealthEndpoint() {
  console.log('🏥 Testing health endpoint...');
  try {
    const health = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health check passed:', health.data.status);
    return true;
  } catch (error) {
    console.error('❌ Health check failed:', error.message);
    return false;
  }
}

async function testRSSFeedProcessing(feed) {
  console.log(`\n📡 Testing RSS feed processing: ${feed.name}`);
  try {
    const response = await axios.post(`${BASE_URL}/rss/process`, feed.config);
    const articles = response.data;
    
    console.log(`✅ RSS processing successful: ${articles.length} articles found`);
    
    if (articles.length > 0) {
      console.log(`📰 Sample articles:`);
      articles.slice(0, 3).forEach((article, index) => {
        console.log(`   ${index + 1}. ${article.title.substring(0, 60)}...`);
        console.log(`      Link: ${article.link}`);
        console.log(`      Date: ${article.pubDate}`);
      });
    }
    
    return articles;
  } catch (error) {
    console.error(`❌ RSS processing failed for ${feed.name}:`, error.message);
    return [];
  }
}

async function testPostExtraction(feed) {
  console.log(`\n🔍 Testing post extraction: ${feed.name}`);
  try {
    const response = await axios.post(`${BASE_URL}/post/extract?url=${encodeURIComponent(feed.testUrl)}`, feed.config);
    const postData = response.data;
    
    console.log(`✅ Post extraction successful:`);
    console.log(`   Title: ${postData.title || 'N/A'}`);
    console.log(`   Content length: ${postData.content?.length || 0} characters`);
    console.log(`   Description: ${postData.description || 'N/A'}`);
    console.log(`   Tags: ${postData.tags?.length || 0} tags`);
    
    if (postData.tags && postData.tags.length > 0) {
      console.log(`   Sample tags: ${postData.tags.slice(0, 5).join(', ')}`);
    }
    
    return postData;
  } catch (error) {
    console.error(`❌ Post extraction failed for ${feed.name}:`, error.message);
    return null;
  }
}

async function testContentExtraction(feed) {
  console.log(`\n📄 Testing content extraction: ${feed.name}`);
  try {
    const response = await axios.post(`${BASE_URL}/content/extract?url=${encodeURIComponent(feed.testUrl)}`, feed.config);
    const content = response.data;
    
    console.log(`✅ Content extraction successful:`);
    console.log(`   Content length: ${content.length} characters`);
    console.log(`   Content preview: ${content.substring(0, 200)}...`);
    
    return content;
  } catch (error) {
    console.error(`❌ Content extraction failed for ${feed.name}:`, error.message);
    return '';
  }
}

async function testBatchProcessing() {
  console.log(`\n🔄 Testing batch processing...`);
  try {
    const feeds = RSS_FEEDS.map(feed => feed.config);
    const response = await axios.post(`${BASE_URL}/rss/batch`, { feeds });
    const results = response.data;
    
    console.log(`✅ Batch processing successful:`);
    Object.keys(results).forEach(key => {
      const articles = results[key];
      console.log(`   ${key}: ${articles.length} articles`);
    });
    
    return results;
  } catch (error) {
    console.error(`❌ Batch processing failed:`, error.message);
    return {};
  }
}

async function runComprehensiveTests() {
  console.log('🚀 Starting comprehensive RSS and HTML extraction tests...\n');
  
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
  console.log('🎯 COMPREHENSIVE TESTING: RSS Feeds + HTML Extraction');
  console.log('='.repeat(80));
  
  let totalTests = 0;
  let successfulTests = 0;
  let successfulRSSProcessing = 0;
  let successfulPostExtractions = 0;
  let successfulContentExtractions = 0;
  
  const results = {
    feeds: [],
    summary: {
      totalFeeds: RSS_FEEDS.length,
      successfulRSS: 0,
      successfulPostExtraction: 0,
      successfulContentExtraction: 0,
      averageContentLength: 0,
      averageTagsPerArticle: 0
    }
  };
  
  for (const feed of RSS_FEEDS) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`📰 FEED: ${feed.name}`);
    console.log(`${'='.repeat(60)}`);
    
    const feedResult = {
      name: feed.name,
      config: feed.config,
      rssProcessing: false,
      postExtraction: false,
      contentExtraction: false,
      articlesCount: 0,
      contentLength: 0,
      tagsCount: 0
    };
    
    // Test RSS feed processing
    totalTests++;
    const articles = await testRSSFeedProcessing(feed);
    if (articles.length > 0) {
      successfulTests++;
      successfulRSSProcessing++;
      feedResult.rssProcessing = true;
      feedResult.articlesCount = articles.length;
    }
    
    // Test post extraction
    totalTests++;
    const postData = await testPostExtraction(feed);
    if (postData && postData.content && postData.content.length > 0) {
      successfulTests++;
      successfulPostExtractions++;
      feedResult.postExtraction = true;
      feedResult.contentLength = postData.content.length;
      feedResult.tagsCount = postData.tags?.length || 0;
    }
    
    // Test content extraction
    totalTests++;
    const content = await testContentExtraction(feed);
    if (content && content.length > 0) {
      successfulTests++;
      successfulContentExtractions++;
      feedResult.contentExtraction = true;
    }
    
    results.feeds.push(feedResult);
    
    // Add delay between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Calculate summary statistics
  const successfulFeeds = results.feeds.filter(f => f.rssProcessing);
  const successfulPostExtractionsList = results.feeds.filter(f => f.postExtraction);
  const successfulContentExtractionsList = results.feeds.filter(f => f.contentExtraction);
  
  results.summary.successfulRSS = successfulFeeds.length;
  results.summary.successfulPostExtraction = successfulPostExtractionsList.length;
  results.summary.successfulContentExtraction = successfulContentExtractionsList.length;
  
  // Calculate averages
  const contentLengths = successfulPostExtractionsList.map(f => f.contentLength).filter(l => l > 0);
  const tagCounts = successfulPostExtractionsList.map(f => f.tagsCount).filter(t => t > 0);
  
  results.summary.averageContentLength = contentLengths.length > 0 
    ? Math.round(contentLengths.reduce((a, b) => a + b, 0) / contentLengths.length)
    : 0;
  
  results.summary.averageTagsPerArticle = tagCounts.length > 0
    ? Math.round(tagCounts.reduce((a, b) => a + b, 0) / tagCounts.length)
    : 0;
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log('📊 COMPREHENSIVE TEST SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total feeds tested: ${RSS_FEEDS.length}`);
  console.log(`Successful RSS processing: ${successfulRSSProcessing}/${RSS_FEEDS.length}`);
  console.log(`Successful post extractions: ${successfulPostExtractions}/${RSS_FEEDS.length}`);
  console.log(`Successful content extractions: ${successfulContentExtractions}/${RSS_FEEDS.length}`);
  console.log(`Overall success rate: ${((successfulTests / totalTests) * 100).toFixed(1)}%`);
  console.log(`Average content length: ${results.summary.averageContentLength} characters`);
  console.log(`Average tags per article: ${results.summary.averageTagsPerArticle} tags`);
  
  // Detailed results
  console.log('\n' + '='.repeat(80));
  console.log('📋 DETAILED RESULTS BY FEED');
  console.log('='.repeat(80));
  
  results.feeds.forEach(feed => {
    const status = [
      feed.rssProcessing ? '✅' : '❌',
      feed.postExtraction ? '✅' : '❌',
      feed.contentExtraction ? '✅' : '❌'
    ].join(' ');
    
    console.log(`${status} ${feed.name.padEnd(15)} | RSS: ${feed.articlesCount.toString().padStart(3)} articles | Content: ${feed.contentLength.toString().padStart(5)} chars | Tags: ${feed.tagsCount.toString().padStart(2)} tags`);
  });
  
  // Test batch processing
  console.log('\n' + '='.repeat(80));
  console.log('🔄 BATCH PROCESSING TEST');
  console.log('='.repeat(80));
  await testBatchProcessing();
  
  return results;
}

// Run the tests
runComprehensiveTests().catch(console.error); 