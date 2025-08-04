/**
 * Example usage of the converted RSS feed chunks
 */

import { 
  getAllNewsSources, 
  getChunk, 
  chunkGetters,
  NewsSourcesChunk,
  CountryData 
} from './index';

// Example 1: Get all news sources from all chunks
function getAllNewsSourcesExample() {
  const allSources = getAllNewsSources();
  console.log('Total chunks:', Object.keys(allSources).length);
  
  // Get the first chunk
  const firstChunk = allSources.chunk001;
  console.log('Countries in first chunk:', Object.keys(firstChunk));
  
  return allSources;
}

// Example 2: Get a specific chunk by number
function getSpecificChunkExample(chunkNumber: number) {
  const chunk = getChunk(chunkNumber);
  if (chunk) {
    console.log(`Chunk ${chunkNumber} contains countries:`, Object.keys(chunk));
    return chunk;
  } else {
    console.log(`Chunk ${chunkNumber} not found`);
    return null;
  }
}

// Example 3: Get news sources for a specific country
function getCountryNewsSources(countryCode: string): CountryData | null {
  const allSources = getAllNewsSources();
  
  for (const chunkKey in allSources) {
    const chunk = allSources[chunkKey as keyof typeof allSources];
    if (chunk[countryCode]) {
      return chunk[countryCode];
    }
  }
  
  return null;
}

// Example 4: Get all RSS feeds for a specific country
function getCountryRSSFeeds(countryCode: string): string[] {
  const countryData = getCountryNewsSources(countryCode);
  if (!countryData) {
    return [];
  }
  
  const allFeeds: string[] = [];
  countryData.sources.forEach(source => {
    allFeeds.push(...source.rss_feeds);
  });
  
  return allFeeds;
}

// Example 5: Search for news sources by domain
function findSourcesByDomain(domain: string) {
  const allSources = getAllNewsSources();
  const results: Array<{countryCode: string, source: any}> = [];
  
  for (const chunkKey in allSources) {
    const chunk = allSources[chunkKey as keyof typeof allSources];
    
    for (const countryCode in chunk) {
      const countryData = chunk[countryCode];
      const matchingSources = countryData.sources.filter(source => 
        source.domain.includes(domain)
      );
      
      matchingSources.forEach(source => {
        results.push({ countryCode, source });
      });
    }
  }
  
  return results;
}

// Example 6: Get all countries and their languages
function getAllCountriesAndLanguages() {
  const allSources = getAllNewsSources();
  const countries: Record<string, string> = {};
  
  for (const chunkKey in allSources) {
    const chunk = allSources[chunkKey as keyof typeof allSources];
    
    for (const countryCode in chunk) {
      countries[countryCode] = chunk[countryCode].language;
    }
  }
  
  return countries;
}

// Example usage
console.log('=== RSS Feed Chunks Usage Examples ===\n');

// Example 1
console.log('1. Getting all news sources:');
const allSources = getAllNewsSourcesExample();
console.log('');

// Example 2
console.log('2. Getting specific chunk:');
const chunk1 = getSpecificChunkExample(1);
console.log('');

// Example 3
console.log('3. Getting news sources for Afghanistan (AF):');
const afghanistanSources = getCountryNewsSources('AF');
if (afghanistanSources) {
  console.log(`Country: ${afghanistanSources.name}`);
  console.log(`Language: ${afghanistanSources.language}`);
  console.log(`Number of sources: ${afghanistanSources.sources.length}`);
}
console.log('');

// Example 4
console.log('4. Getting all RSS feeds for Afghanistan:');
const afghanistanFeeds = getCountryRSSFeeds('AF');
console.log(`Total RSS feeds: ${afghanistanFeeds.length}`);
console.log('First 3 feeds:', afghanistanFeeds.slice(0, 3));
console.log('');

// Example 5
console.log('5. Finding sources by domain (bbc.com):');
const bbcSources = findSourcesByDomain('bbc.com');
console.log(`Found ${bbcSources.length} sources with bbc.com domain`);
console.log('');

// Example 6
console.log('6. Getting all countries and languages:');
const countries = getAllCountriesAndLanguages();
console.log(`Total countries: ${Object.keys(countries).length}`);
console.log('Sample countries:', Object.entries(countries).slice(0, 5));

export {
  getAllNewsSourcesExample,
  getSpecificChunkExample,
  getCountryNewsSources,
  getCountryRSSFeeds,
  findSourcesByDomain,
  getAllCountriesAndLanguages
}; 