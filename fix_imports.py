#!/usr/bin/env python
"""
Script to fix all MSNArticleItem imports in old spiders
"""
import os
import re

def fix_imports_in_file(file_path):
    """Fix imports in a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace MSNArticleItem imports
        content = re.sub(
            r'from \.\.items import MSNArticleItem',
            'from ..items import NewsItem',
            content
        )
        
        # Replace MSNArticleItem usage
        content = re.sub(
            r'MSNArticleItem\(\)',
            'NewsItem()',
            content
        )
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✓ Fixed {file_path}")
        
    except Exception as e:
        print(f"✗ Error fixing {file_path}: {e}")

def main():
    """Main function"""
    spiders_dir = "crawlers/spiders"
    
    # List of files to fix
    files_to_fix = [
        "crawlers/spiders/msn_api_spider.py",
        "crawlers/spiders/msn_rss_spider.py",
        "crawlers/spiders/msn_selenium_spider.py",
        "crawlers/spiders/rss_spider.py",
        "crawlers/spiders/simple_test_spider.py",
        "crawlers/spiders/msn_modern_spider.py",
        "crawlers/spiders/msn_live_spider.py",
        "crawlers/spiders/test_spider.py",
        "crawlers/spiders/msn_historical_spider.py",
        "crawlers/spiders/msn_debug_spider.py",
        "crawlers/spiders/msn_comprehensive_spider.py",
        "final_test.py"
    ]
    
    print("Fixing MSNArticleItem imports...")
    
    for file_path in files_to_fix:
        if os.path.exists(file_path):
            fix_imports_in_file(file_path)
        else:
            print(f"- Skipping {file_path} (not found)")
    
    print("\nImport fixes completed!")

if __name__ == "__main__":
    main() 