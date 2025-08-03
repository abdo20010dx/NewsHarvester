#!/usr/bin/env python
"""
Script to generate SQL DDL from Django models
"""

import os
import sys
import django
from django.conf import settings
from django.core.management import execute_from_command_line

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'news_harvester_django.settings')
django.setup()

from django.core.management import call_command
from io import StringIO


def generate_ddl():
    """Generate SQL DDL for all models"""
    
    # Create a StringIO object to capture the output
    output = StringIO()
    
    # Generate SQL for all models
    call_command('sqlmigrate', 'twitto_models', '0001', stdout=output)
    
    # Get the SQL
    sql = output.getvalue()
    output.close()
    
    # Write to file
    with open('django_models_ddl.sql', 'w', encoding='utf-8') as f:
        f.write("-- Django Models DDL\n")
        f.write("-- Generated from Django models\n\n")
        f.write(sql)
    
    print("DDL generated successfully in 'django_models_ddl.sql'")


def show_model_info():
    """Show information about the models"""
    from django.apps import apps
    from twitto_models.models import User, Post, Immotion, Session, Auth, NewsSource, CrawlJob
    
    models = [User, Post, Immotion, Session, Auth, NewsSource, CrawlJob]
    
    print("Django Models Information:")
    print("=" * 50)
    
    for model in models:
        print(f"\nModel: {model.__name__}")
        print(f"Table: {model._meta.db_table}")
        print(f"Fields:")
        
        for field in model._meta.fields:
            field_type = type(field).__name__
            nullable = "NULL" if field.null else "NOT NULL"
            print(f"  - {field.name}: {field_type} ({nullable})")
        
        if model._meta.many_to_many:
            print(f"Many-to-Many Fields:")
            for field in model._meta.many_to_many:
                print(f"  - {field.name}: {field.related_model.__name__}")


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == '--info':
        show_model_info()
    else:
        generate_ddl() 