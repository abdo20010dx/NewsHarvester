/**
 * RSS Feed Chunks Index
 * 
 * This file exports all the country news source chunks for easy importing.
 */

// Import all chunk modules
import { NEWS_SOURCES_CHUNK as chunk001, getChunkSources as getChunk001 } from './country_chunk_001';
import { NEWS_SOURCES_CHUNK as chunk002, getChunkSources as getChunk002 } from './country_chunk_002';
import { NEWS_SOURCES_CHUNK as chunk003, getChunkSources as getChunk003 } from './country_chunk_003';
import { NEWS_SOURCES_CHUNK as chunk004, getChunkSources as getChunk004 } from './country_chunk_004';
import { NEWS_SOURCES_CHUNK as chunk005, getChunkSources as getChunk005 } from './country_chunk_005';
import { NEWS_SOURCES_CHUNK as chunk006, getChunkSources as getChunk006 } from './country_chunk_006';
import { NEWS_SOURCES_CHUNK as chunk007, getChunkSources as getChunk007 } from './country_chunk_007';
import { NEWS_SOURCES_CHUNK as chunk008, getChunkSources as getChunk008 } from './country_chunk_008';
import { NEWS_SOURCES_CHUNK as chunk009, getChunkSources as getChunk009 } from './country_chunk_009';
import { NEWS_SOURCES_CHUNK as chunk010, getChunkSources as getChunk010 } from './country_chunk_010';
import { NEWS_SOURCES_CHUNK as chunk011, getChunkSources as getChunk011 } from './country_chunk_011';
import { NEWS_SOURCES_CHUNK as chunk012, getChunkSources as getChunk012 } from './country_chunk_012';
import { NEWS_SOURCES_CHUNK as chunk013, getChunkSources as getChunk013 } from './country_chunk_013';
import { NEWS_SOURCES_CHUNK as chunk014, getChunkSources as getChunk014 } from './country_chunk_014';
import { NEWS_SOURCES_CHUNK as chunk015, getChunkSources as getChunk015 } from './country_chunk_015';
import { NEWS_SOURCES_CHUNK as chunk016, getChunkSources as getChunk016 } from './country_chunk_016';
import { NEWS_SOURCES_CHUNK as chunk017, getChunkSources as getChunk017 } from './country_chunk_017';
import { NEWS_SOURCES_CHUNK as chunk018, getChunkSources as getChunk018 } from './country_chunk_018';
import { NEWS_SOURCES_CHUNK as chunk019, getChunkSources as getChunk019 } from './country_chunk_019';
import { NEWS_SOURCES_CHUNK as chunk020, getChunkSources as getChunk020 } from './country_chunk_020';

// Export all chunks as a combined object
export const ALL_NEWS_SOURCES = {
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

// Export individual chunk getters
export const chunkGetters = {
  getChunk001,
  getChunk002,
  getChunk003,
  getChunk004,
  getChunk005,
  getChunk006,
  getChunk007,
  getChunk008,
  getChunk009,
  getChunk010,
  getChunk011,
  getChunk012,
  getChunk013,
  getChunk014,
  getChunk015,
  getChunk016,
  getChunk017,
  getChunk018,
  getChunk019,
  getChunk020,
};

// Re-export the interfaces for convenience
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

// Helper function to get all news sources combined
export function getAllNewsSources(): Record<string, NewsSourcesChunk> {
  return ALL_NEWS_SOURCES;
}

// Helper function to get a specific chunk
export function getChunk(chunkNumber: number): NewsSourcesChunk | null {
  const chunkKey = `chunk${chunkNumber.toString().padStart(3, '0')}` as keyof typeof ALL_NEWS_SOURCES;
  return ALL_NEWS_SOURCES[chunkKey] || null;
} 