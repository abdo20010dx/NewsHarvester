/**
 * Example usage of the combined RSS feed file
 */

import { 
  getAllNewsSources, 
  getChunk, 
  getCountryNewsSources,
  getCountryRSSFeeds,
  findSourcesByDomain,
  getAllCountriesAndLanguages,
  RSS_FEED_DATA
} from './rss-feed';

// Example 1: Get all news sources
console.log('=== Combined RSS Feed Usage Examples ===\n');

console.log('1. Getting all news sources:');
const allSources = getAllNewsSources();
console.log(`Total chunks: ${Object.keys(allSources).length}`);
console.log(`Available chunks: ${Object.keys(allSources).join(', ')}`);

// Example 2: Get a specific chunk
console.log('\n2. Getting specific chunk:');
const chunk1 = getChunk(1);
if (chunk1) {
  console.log(`Chunk 1 contains ${Object.keys(chunk1).length} countries`);
  console.log(`Countries in chunk 1: ${Object.keys(chunk1).join(', ')}`);
}

// Example 3: Get news sources for a specific country
console.log('\n3. Getting news sources for Afghanistan (AF):');
const afghanistanSources = getCountryNewsSources('AF');
if (afghanistanSources) {
  console.log(`Country: ${afghanistanSources.name}`);
  console.log(`Language: ${afghanistanSources.language}`);
  console.log(`Number of sources: ${afghanistanSources.sources.length}`);
  console.log(`First source: ${afghanistanSources.sources[0].name} (${afghanistanSources.sources[0].domain})`);
}

// Example 4: Get all RSS feeds for a country
console.log('\n4. Getting all RSS feeds for Afghanistan:');
const afghanistanFeeds = getCountryRSSFeeds('AF');
console.log(`Total RSS feeds: ${afghanistanFeeds.length}`);
console.log(`First 3 feeds:`, afghanistanFeeds.slice(0, 3));

// Example 5: Search by domain
console.log('\n5. Finding sources by domain (bbc.com):');
const bbcSources = findSourcesByDomain('bbc.com');
console.log(`Found ${bbcSources.length} sources with bbc.com domain`);

// Example 6: Get all countries and languages
console.log('\n6. Getting all countries and languages:');
const countries = getAllCountriesAndLanguages();
console.log(`Total countries: ${Object.keys(countries).length}`);
console.log('Sample countries:', Object.entries(countries).slice(0, 5));

// Example 7: Direct access to RSS_FEED_DATA
console.log('\n7. Direct access to RSS_FEED_DATA:');
console.log(`Total chunks in RSS_FEED_DATA: ${Object.keys(RSS_FEED_DATA).length}`);
console.log(`Countries in chunk001: ${Object.keys(RSS_FEED_DATA.chunk001).length}`);

// Example 8: Count total RSS feeds across all chunks
console.log('\n8. Counting total RSS feeds across all chunks:');
let totalFeeds = 0;
let totalCountries = 0;
let totalSources = 0;

for (const chunkKey in RSS_FEED_DATA) {
  const chunk = RSS_FEED_DATA[chunkKey];
  totalCountries += Object.keys(chunk).length;
  
  for (const countryCode in chunk) {
    const countryData = chunk[countryCode];
    totalSources += countryData.sources.length;
    
    countryData.sources.forEach(source => {
      totalFeeds += source.rss_feeds.length;
    });
  }
}

console.log(`Total countries: ${totalCountries}`);
console.log(`Total news sources: ${totalSources}`);
console.log(`Total RSS feeds: ${totalFeeds}`);

export {
  getAllNewsSources,
  getChunk,
  getCountryNewsSources,
  getCountryRSSFeeds,
  findSourcesByDomain,
  getAllCountriesAndLanguages
}; 