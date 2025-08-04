/**
 * Combined RSS Feed Data
 * 
 * This file contains all RSS feed chunks combined into a single data structure.
 * All 20 Python files have been converted and merged here.
 */

export interface NewsSource {
  name: string;
  domain: string;
  rss_feeds: string[];
}

export interface CountryData {
  name: string;
  language: string;
  sources: NewsSource[];
}

export interface NewsSourcesChunk {
  [countryCode: string]: CountryData;
}

export interface AllNewsSources {
  [chunkKey: string]: NewsSourcesChunk;
}

// Import all individual chunks
import { NEWS_SOURCES_CHUNK as chunk001 } from './country_chunk_001';
import { NEWS_SOURCES_CHUNK as chunk002 } from './country_chunk_002';
import { NEWS_SOURCES_CHUNK as chunk003 } from './country_chunk_003';
import { NEWS_SOURCES_CHUNK as chunk004 } from './country_chunk_004';
import { NEWS_SOURCES_CHUNK as chunk005 } from './country_chunk_005';
import { NEWS_SOURCES_CHUNK as chunk006 } from './country_chunk_006';
import { NEWS_SOURCES_CHUNK as chunk007 } from './country_chunk_007';
import { NEWS_SOURCES_CHUNK as chunk008 } from './country_chunk_008';
import { NEWS_SOURCES_CHUNK as chunk009 } from './country_chunk_009';
import { NEWS_SOURCES_CHUNK as chunk010 } from './country_chunk_010';
import { NEWS_SOURCES_CHUNK as chunk011 } from './country_chunk_011';
import { NEWS_SOURCES_CHUNK as chunk012 } from './country_chunk_012';
import { NEWS_SOURCES_CHUNK as chunk013 } from './country_chunk_013';
import { NEWS_SOURCES_CHUNK as chunk014 } from './country_chunk_014';
import { NEWS_SOURCES_CHUNK as chunk015 } from './country_chunk_015';
import { NEWS_SOURCES_CHUNK as chunk016 } from './country_chunk_016';
import { NEWS_SOURCES_CHUNK as chunk017 } from './country_chunk_017';
import { NEWS_SOURCES_CHUNK as chunk018 } from './country_chunk_018';
import { NEWS_SOURCES_CHUNK as chunk019 } from './country_chunk_019';
import { NEWS_SOURCES_CHUNK as chunk020 } from './country_chunk_020';

// Combined RSS feed data from all chunks
export const RSS_FEED_DATA: AllNewsSources = {
  chunk001,
  chunk002,
  chunk003,
  chunk004,
  chunk005,
  chunk006,
  chunk007,
  chunk008,
  chunk009,
  chunk010,
  chunk011,
  chunk012,
  chunk013,
  chunk014,
  chunk015,
  chunk016,
  chunk017,
  chunk018,
  chunk019,
  chunk020,
};

// Helper functions
export function getAllNewsSources(): AllNewsSources {
  return RSS_FEED_DATA;
}

export function getChunk(chunkNumber: number): NewsSourcesChunk | null {
  const chunkKey = `chunk${chunkNumber.toString().padStart(3, '0')}` as keyof typeof RSS_FEED_DATA;
  return RSS_FEED_DATA[chunkKey] || null;
}

export function getCountryNewsSources(countryCode: string): CountryData | null {
  for (const chunkKey in RSS_FEED_DATA) {
    const chunk = RSS_FEED_DATA[chunkKey];
    if (chunk[countryCode]) {
      return chunk[countryCode];
    }
  }
  return null;
}

export function getCountryRSSFeeds(countryCode: string): string[] {
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

export function findSourcesByDomain(domain: string) {
  const results: Array<{countryCode: string, source: any}> = [];
  
  for (const chunkKey in RSS_FEED_DATA) {
    const chunk = RSS_FEED_DATA[chunkKey];
    
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

export function getAllCountriesAndLanguages() {
  const countries: Record<string, string> = {};
  
  for (const chunkKey in RSS_FEED_DATA) {
    const chunk = RSS_FEED_DATA[chunkKey];
    
    for (const countryCode in chunk) {
      countries[countryCode] = chunk[countryCode].language;
    }
  }
  
  return countries;
} 