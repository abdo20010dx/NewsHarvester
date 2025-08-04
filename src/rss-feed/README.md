# RSS Feed Chunks - TypeScript Conversion

This directory contains TypeScript versions of the original Python RSS feed chunks. All 20 Python files from the `rss feed` directory have been converted to TypeScript with the same content structure.

## File Structure

- `country_chunk_001.ts` to `country_chunk_020.ts` - Individual chunk files
- `rss-feed.ts` - **Combined file with all chunks in one place** ⭐
- `index.ts` - Main export file with all chunks and helper functions
- `example-usage.ts` - Examples showing how to use the individual chunks
- `example-combined.ts` - Examples showing how to use the combined file
- `README.md` - This documentation file

## ⭐ **Combined RSS Feed File** (`rss-feed.ts`)

The main file you'll want to use is `rss-feed.ts`, which combines all 20 chunks into a single, easy-to-import file:

```typescript
import { 
  getAllNewsSources, 
  getChunk, 
  getCountryNewsSources,
  getCountryRSSFeeds,
  RSS_FEED_DATA 
} from './rss-feed/rss-feed';
```

### Benefits of the Combined File

1. **Single Import** - Import everything from one file
2. **Better Performance** - No need to load multiple files
3. **Easier Management** - All data in one place
4. **Type Safety** - Full TypeScript interfaces
5. **Helper Functions** - Built-in utility functions

## TypeScript Interfaces

Each file exports the following interfaces:

```typescript
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
```

## Usage

### Basic Import (Recommended)

```typescript
import { getAllNewsSources, getChunk, NewsSourcesChunk } from './rss-feed/rss-feed';
```

### Get All News Sources

```typescript
const allSources = getAllNewsSources();
console.log('Total chunks:', Object.keys(allSources).length);
```

### Get Specific Chunk

```typescript
const chunk1 = getChunk(1); // Returns chunk001
const chunk20 = getChunk(20); // Returns chunk020
```

### Get News Sources for a Country

```typescript
import { getCountryNewsSources } from './rss-feed/rss-feed';

const afghanistanSources = getCountryNewsSources('AF');
if (afghanistanSources) {
  console.log(`Country: ${afghanistanSources.name}`);
  console.log(`Language: ${afghanistanSources.language}`);
  console.log(`Number of sources: ${afghanistanSources.sources.length}`);
}
```

### Get All RSS Feeds for a Country

```typescript
import { getCountryRSSFeeds } from './rss-feed/rss-feed';

const afghanistanFeeds = getCountryRSSFeeds('AF');
console.log(`Total RSS feeds: ${afghanistanFeeds.length}`);
```

### Search by Domain

```typescript
import { findSourcesByDomain } from './rss-feed/rss-feed';

const bbcSources = findSourcesByDomain('bbc.com');
console.log(`Found ${bbcSources.length} sources with bbc.com domain`);
```

### Direct Access to Data

```typescript
import { RSS_FEED_DATA } from './rss-feed/rss-feed';

// Access any chunk directly
const chunk1 = RSS_FEED_DATA.chunk001;
const afghanistan = RSS_FEED_DATA.chunk001.AF;
```

## Conversion Details

The Python files were converted to TypeScript with the following changes:

1. **Docstrings** → **JSDoc comments**
2. **Python comments (#)** → **TypeScript comments (//)**
3. **Python dictionaries** → **TypeScript objects with interfaces**
4. **Python functions** → **TypeScript functions with proper typing**
5. **Python imports/exports** → **TypeScript ES6 modules**

## Original Python Structure

Each original Python file contained:
- A docstring describing the chunk
- A `NEWS_SOURCES_CHUNK` dictionary with country news sources
- A `get_chunk_sources()` function that returns the dictionary

## TypeScript Structure

Each converted TypeScript file contains:
- TypeScript interfaces for type safety
- A `NEWS_SOURCES_CHUNK` constant with proper typing
- A `getChunkSources()` function that returns the typed data
- ES6 module exports

## Benefits of TypeScript Conversion

1. **Type Safety** - Compile-time type checking
2. **Better IDE Support** - IntelliSense and autocomplete
3. **Easier Refactoring** - IDE can help with changes
4. **Documentation** - Interfaces serve as documentation
5. **Modern JavaScript** - Can be compiled to modern JS
6. **Better Integration** - Works seamlessly with NestJS and other TypeScript projects

## Running Examples

To see the examples in action, you can run:

```bash
# Compile and run the combined example
npx tsc src/rss-feed/example-combined.ts --outDir dist
node dist/rss-feed/example-combined.js
```

## Integration with NestJS

Since this is a NestJS project, you can easily import and use the combined RSS feed in your services:

```typescript
import { Injectable } from '@nestjs/common';
import { getAllNewsSources, getChunk, getCountryNewsSources } from './rss-feed/rss-feed';

@Injectable()
export class NewsService {
  getAllSources() {
    return getAllNewsSources();
  }
  
  getSourcesForChunk(chunkNumber: number) {
    return getChunk(chunkNumber);
  }
  
  getSourcesForCountry(countryCode: string) {
    return getCountryNewsSources(countryCode);
  }
}
```

## Data Statistics

The combined RSS feed contains:
- **20 chunks** of country data
- **Hundreds of countries** with news sources
- **Thousands of RSS feeds** from news sources worldwide
- **Multiple languages** supported
- **Comprehensive coverage** of global news sources 