#!/usr/bin/env python3
"""
Final verification script to confirm all 195 countries have news sources
"""

import sys
import os

# Add the data directory to the path
sys.path.append('data')

try:
    from news_sources_comprehensive_generated import NEWS_SOURCES, get_all_supported_countries
    from countries import COUNTRIES
    
    def verify_completion():
        """Verify that all countries have news sources"""
        print("=== FINAL VERIFICATION ===")
        print()
        
        # Get all countries from the comprehensive file
        supported_countries = set(get_all_supported_countries())
        all_countries = set(COUNTRIES.keys())
        
        print(f"📊 STATISTICS:")
        print(f"  Total countries in COUNTRIES: {len(all_countries)}")
        print(f"  Countries with news sources: {len(supported_countries)}")
        print(f"  Completion rate: {len(supported_countries)/len(all_countries)*100:.1f}%")
        print()
        
        # Check for missing countries
        missing_countries = all_countries - supported_countries
        extra_countries = supported_countries - all_countries
        
        if missing_countries:
            print(f"❌ MISSING COUNTRIES ({len(missing_countries)}):")
            for country_code in sorted(missing_countries):
                print(f"  - {country_code}: {COUNTRIES[country_code]}")
            print()
        else:
            print("✅ ALL COUNTRIES HAVE NEWS SOURCES!")
            print()
        
        if extra_countries:
            print(f"⚠️  EXTRA COUNTRIES ({len(extra_countries)}):")
            for country_code in sorted(extra_countries):
                print(f"  - {country_code}")
            print()
        
        # Check source counts
        total_sources = 0
        countries_with_sources = 0
        
        for country_code, country_data in NEWS_SOURCES.items():
            if country_data['sources']:
                countries_with_sources += 1
                total_sources += len(country_data['sources'])
        
        print(f"📰 SOURCE STATISTICS:")
        print(f"  Countries with sources: {countries_with_sources}")
        print(f"  Total news sources: {total_sources}")
        print(f"  Average sources per country: {total_sources/countries_with_sources:.1f}")
        print()
        
        # Check language distribution
        languages = {}
        for country_data in NEWS_SOURCES.values():
            lang = country_data.get('language', 'unknown')
            languages[lang] = languages.get(lang, 0) + 1
        
        print(f"🌍 LANGUAGE DISTRIBUTION:")
        for lang, count in sorted(languages.items(), key=lambda x: x[1], reverse=True):
            print(f"  {lang}: {count} countries")
        print()
        
        if not missing_countries and not extra_countries:
            print("🎉 SUCCESS! All 195 countries have been successfully populated with news sources!")
            print("📁 The comprehensive file is ready at: data/news_sources_comprehensive_generated.py")
            return True
        else:
            print("⚠️  There are still some issues to resolve.")
            return False
    
    if __name__ == "__main__":
        success = verify_completion()
        sys.exit(0 if success else 1)

except ImportError as e:
    print(f"❌ Error importing modules: {e}")
    print("Make sure you're running this from the project root directory.")
    sys.exit(1)
except Exception as e:
    print(f"❌ Unexpected error: {e}")
    sys.exit(1) 