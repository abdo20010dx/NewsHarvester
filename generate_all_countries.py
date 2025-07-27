#!/usr/bin/env python3
"""
Generate comprehensive news sources for all 195 countries
This script imports country data in chunks and combines them into a complete file
"""

import os
import json
from data.countries import COUNTRIES

def create_country_chunks():
    """Create separate files for each country with basic structure"""
    countries_list = list(COUNTRIES.items())
    chunk_size = 10  # Process 10 countries at a time
    
    for i in range(0, len(countries_list), chunk_size):
        chunk = countries_list[i:i + chunk_size]
        chunk_num = i // chunk_size + 1
        
        filename = f"country_chunk_{chunk_num:03d}.py"
        
        # Only create if file doesn't exist
        if not os.path.exists(filename):
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(f'"""\nNews sources for countries chunk {chunk_num}\n"""\n\n')
                f.write('NEWS_SOURCES_CHUNK = {\n')
                
                for iso_code, country_name in chunk:
                    f.write(f"    '{iso_code}': {{\n")
                    f.write(f"        'name': '{country_name}',\n")
                    f.write(f"        'language': 'en',  # Default language\n")
                    f.write(f"        'sources': [\n")
                    f.write(f"            # TODO: Add top 10 news sources for {country_name}\n")
                    f.write(f"            # Example structure:\n")
                    f.write(f"            # {{'name': 'Source Name', 'domain': 'domain.com', 'rss_feeds': ['https://domain.com/rss']}}\n")
                    f.write(f"        ]\n")
                    f.write(f"    }},\n")
                
                f.write('}\n\n')
                f.write('def get_chunk_sources():\n')
                f.write('    """Return the news sources for this chunk"""\n')
                f.write('    return NEWS_SOURCES_CHUNK\n')
            
            print(f"Created {filename} with {len(chunk)} countries")
        else:
            print(f"Skipped {filename} - already exists")

def combine_all_chunks():
    """Combine all country chunks into a comprehensive file"""
    all_sources = {}
    
    # Find all chunk files
    chunk_files = [f for f in os.listdir('.') if f.startswith('country_chunk_') and f.endswith('.py')]
    chunk_files.sort()
    
    for chunk_file in chunk_files:
        print(f"Processing {chunk_file}...")
        
        # Import the chunk
        chunk_name = chunk_file[:-3]  # Remove .py
        exec(f"import {chunk_name}")
        chunk_sources = eval(f"{chunk_name}.get_chunk_sources()")
        
        all_sources.update(chunk_sources)
    
    # Write the comprehensive file
    with open('data/news_sources_comprehensive_generated.py', 'w', encoding='utf-8') as f:
        f.write('"""\nComprehensive news sources for ALL 195 countries in the world\nGenerated automatically by generate_all_countries.py\n"""\n\n')
        f.write('NEWS_SOURCES = {\n')
        
        for iso_code, country_data in all_sources.items():
            f.write(f"    '{iso_code}': {{\n")
            f.write(f"        'name': '{country_data['name']}',\n")
            f.write(f"        'language': '{country_data['language']}',\n")
            f.write(f"        'sources': [\n")
            
            for source in country_data['sources']:
                # Escape apostrophes in source names
                source_name = source['name'].replace("'", "\\'")
                f.write(f"            {{'name': '{source_name}', 'domain': '{source['domain']}', 'rss_feeds': {source['rss_feeds']}}},\n")
            
            f.write(f"        ]\n")
            f.write(f"    }},\n")
        
        f.write('}\n\n')
        f.write('def get_sources_for_country(country_code):\n')
        f.write('    """Get news sources for a specific country"""\n')
        f.write('    return NEWS_SOURCES.get(country_code.upper(), {})\n\n')
        f.write('def get_all_supported_countries():\n')
        f.write('    """Get list of all countries with news sources configured"""\n')
        f.write('    return list(NEWS_SOURCES.keys())\n\n')
        f.write('def get_source_by_domain(domain):\n')
        f.write('    """Find source by domain name"""\n')
        f.write('    for country_code, country_data in NEWS_SOURCES.items():\n')
        f.write('        for source in country_data[\'sources\']:\n')
        f.write('            if source[\'domain\'] == domain:\n')
        f.write('                return source, country_code\n')
        f.write('    return None, None\n')
    
    print(f"Generated comprehensive file with {len(all_sources)} countries")

def main():
    """Main function to generate all country news sources"""
    print("Starting generation of news sources for all 195 countries...")
    
    # Step 1: Create country chunks (only if they don't exist)
    print("\nStep 1: Creating country chunks...")
    create_country_chunks()
    
    # Step 2: Combine all chunks
    print("\nStep 2: Combining all chunks...")
    combine_all_chunks()
    
    print("\nGeneration complete!")
    print("Next steps:")
    print("1. Edit each country_chunk_*.py file to add actual news sources")
    print("2. Run this script again to combine them")
    print("3. The final file will be data/news_sources_comprehensive_generated.py")

if __name__ == "__main__":
    main()
