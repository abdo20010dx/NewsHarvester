#!/usr/bin/env python
"""
Script to run the NewsHarvester Django server with configurable port.
"""
import os
import sys
import django
from django.core.management import execute_from_command_line

def main():
    # Set default port if not in environment
    port = os.getenv('DJANGO_PORT', '8500')
    
    # Set up Django
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
    django.setup()
    
    # Run the server
    sys.argv = ['manage.py', 'runserver', f'0.0.0.0:{port}']
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main() 