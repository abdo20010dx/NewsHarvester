# Country Chunks System for News Sources

This system divides the work of creating news sources for all 195 countries into manageable chunks.

## How It Works

1. **Chunk Creation**: The `generate_all_countries.py` script creates 20 chunk files, each containing 10 countries (except the last one which has 4).

2. **Manual Population**: You edit each chunk file to add actual news sources for the countries in that chunk.

3. **Combination**: Run the script again to combine all chunks into a comprehensive file.

## Files

- `generate_all_countries.py` - Main script to create and combine chunks
- `check_chunk_status.py` - Helper script to see progress
- `country_chunk_001.py` to `country_chunk_020.py` - Individual country chunks
- `data/news_sources_comprehensive_generated.py` - Final combined file

## Current Status

✅ **Chunk 1**: Afghanistan, Albania, Algeria, Andorra, Angola, Antigua and Barbuda, Argentina, Armenia, Australia, Austria

❌ **Chunks 2-20**: Need to be populated

## How to Continue

1. **Check Status**: Run `python check_chunk_status.py` to see progress

2. **Edit Next Chunk**: Open `country_chunk_002.py` and add news sources for:
   - Azerbaijan (AZ)
   - Bahamas (BS) 
   - Bahrain (BH)
   - Bangladesh (BD)
   - Barbados (BB)
   - Belarus (BY)
   - Belgium (BE)
   - Belize (BZ)
   - Benin (BJ)
   - Bhutan (BT)

3. **Combine**: Run `python generate_all_countries.py` to update the comprehensive file

4. **Repeat**: Continue with chunks 3, 4, 5, etc.

## Example Structure

Each country should have:
```python
'COUNTRY_CODE': {
    'name': 'Country Name',
    'language': 'language_code',  # e.g., 'en', 'es', 'fr', 'de', etc.
    'sources': [
        {
            'name': 'News Source Name',
            'domain': 'domain.com',
            'rss_feeds': ['https://domain.com/rss']
        },
        # ... more sources (aim for 10 per country)
    ]
}
```

## Progress Tracking

- **Total Countries**: 195
- **Current Progress**: 5.0% (1/20 chunks complete)
- **Countries Done**: 10
- **Countries Remaining**: 185

## Tips

- Use appropriate language codes for each country
- Aim for 10 major news sources per country
- Include RSS feeds when available
- Focus on major national news outlets
- Consider both print and broadcast media 