#!/usr/bin/env python3
"""
Check the status of country chunks to see which ones have been populated
"""

import os
import importlib

def check_chunk_status():
    """Check which chunks have news sources and which are empty"""
    chunk_files = [f for f in os.listdir('.') if f.startswith('country_chunk_') and f.endswith('.py')]
    chunk_files.sort()
    
    populated_chunks = []
    empty_chunks = []
    
    for chunk_file in chunk_files:
        chunk_name = chunk_file[:-3]  # Remove .py
        
        try:
            # Import the chunk
            module = importlib.import_module(chunk_name)
            chunk_sources = module.get_chunk_sources()
            
            # Check if any sources have been added
            has_sources = False
            for country_code, country_data in chunk_sources.items():
                if country_data['sources']:
                    has_sources = True
                    break
            
            if has_sources:
                populated_chunks.append(chunk_file)
            else:
                empty_chunks.append(chunk_file)
                
        except Exception as e:
            print(f"Error processing {chunk_file}: {e}")
            empty_chunks.append(chunk_file)
    
    print("=== COUNTRY CHUNK STATUS ===")
    print(f"\n✅ POPULATED CHUNKS ({len(populated_chunks)}):")
    for chunk in populated_chunks:
        print(f"  - {chunk}")
    
    print(f"\n❌ EMPTY CHUNKS ({len(empty_chunks)}):")
    for chunk in empty_chunks:
        print(f"  - {chunk}")
    
    print(f"\n📊 SUMMARY:")
    print(f"  Total chunks: {len(chunk_files)}")
    print(f"  Populated: {len(populated_chunks)}")
    print(f"  Empty: {len(empty_chunks)}")
    print(f"  Progress: {len(populated_chunks)/len(chunk_files)*100:.1f}%")
    
    if empty_chunks:
        print(f"\n🎯 NEXT STEPS:")
        print(f"  1. Edit {empty_chunks[0]} to add news sources")
        print(f"  2. Run 'python generate_all_countries.py' to combine")
        print(f"  3. Repeat for remaining chunks")

if __name__ == "__main__":
    check_chunk_status() 