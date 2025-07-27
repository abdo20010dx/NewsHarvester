#!/usr/bin/env python3
"""
Setup script for NewsHarvester — MSN.com Edition
"""

import os
import sys
import subprocess
import logging
from pathlib import Path

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def run_command(command, description):
    """Run a command and handle errors"""
    logger.info(f"Running: {description}")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        logger.info(f"✓ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        logger.error(f"✗ {description} failed: {e.stderr}")
        return False


def check_python_version():
    """Check if Python version is compatible"""
    if sys.version_info < (3, 8):
        logger.error("Python 3.8+ is required")
        return False
    logger.info(f"✓ Python {sys.version_info.major}.{sys.version_info.minor} detected")
    return True


def install_dependencies():
    """Install Python dependencies"""
    logger.info("Installing Python dependencies...")
    return run_command("pip install -r requirements.txt", "Installing requirements.txt")


def install_spacy_model():
    """Install spaCy language model"""
    logger.info("Installing spaCy language model...")
    return run_command("python -m spacy download en_core_web_sm", "Installing spaCy model")


def create_directories():
    """Create necessary directories"""
    directories = ['logs', 'data']
    for directory in directories:
        Path(directory).mkdir(exist_ok=True)
        logger.info(f"✓ Created directory: {directory}")


def setup_django():
    """Setup Django database"""
    logger.info("Setting up Django database...")
    
    # Make migrations
    if not run_command("python manage.py makemigrations", "Creating Django migrations"):
        return False
    
    # Run migrations
    if not run_command("python manage.py migrate", "Running Django migrations"):
        return False
    
    logger.info("✓ Django database setup completed")
    return True


def check_database_connection():
    """Check database connection"""
    logger.info("Checking database connection...")
    try:
        import django
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
        django.setup()
        
        from django.db import connection
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
        
        logger.info("✓ Database connection successful")
        return True
    except Exception as e:
        logger.error(f"✗ Database connection failed: {e}")
        logger.error("Please ensure PostgreSQL is running and configured correctly")
        return False


def create_superuser():
    """Create Django superuser"""
    logger.info("Creating Django superuser...")
    return run_command("python manage.py createsuperuser --noinput", "Creating superuser")


def test_components():
    """Test individual components"""
    logger.info("Testing components...")
    
    # Test Django
    try:
        import django
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
        django.setup()
        logger.info("✓ Django setup successful")
    except Exception as e:
        logger.error(f"✗ Django setup failed: {e}")
        return False
    
    # Test spaCy
    try:
        import spacy
        nlp = spacy.load("en_core_web_sm")
        logger.info("✓ spaCy model loaded successfully")
    except Exception as e:
        logger.error(f"✗ spaCy model loading failed: {e}")
        return False
    
    # Test transformers
    try:
        from transformers import pipeline
        logger.info("✓ Transformers library available")
    except Exception as e:
        logger.error(f"✗ Transformers library failed: {e}")
        return False
    
    # Test sentence transformers
    try:
        from sentence_transformers import SentenceTransformer
        logger.info("✓ Sentence transformers available")
    except Exception as e:
        logger.error(f"✗ Sentence transformers failed: {e}")
        return False
    
    return True


def main():
    """Main setup function"""
    logger.info("🚀 Setting up NewsHarvester — MSN.com Edition")
    
    # Check Python version
    if not check_python_version():
        sys.exit(1)
    
    # Create directories
    create_directories()
    
    # Install dependencies
    if not install_dependencies():
        logger.error("Failed to install dependencies")
        sys.exit(1)
    
    # Install spaCy model
    if not install_spacy_model():
        logger.error("Failed to install spaCy model")
        sys.exit(1)
    
    # Test components
    if not test_components():
        logger.error("Component testing failed")
        sys.exit(1)
    
    # Setup Django
    if not setup_django():
        logger.error("Django setup failed")
        sys.exit(1)
    
    # Check database connection
    if not check_database_connection():
        logger.error("Database connection failed")
        sys.exit(1)
    
    # Create superuser
    create_superuser()
    
    logger.info("🎉 Setup completed successfully!")
    logger.info("\n📋 Next steps:")
    logger.info("1. Start PostgreSQL and Elasticsearch")
    logger.info("2. Run: python manage.py runserver")
    logger.info("3. Run: python pipeline/pipeline.py --mode single")
    logger.info("4. Access API at: http://localhost:8000/api/")
    logger.info("5. Access admin at: http://localhost:8000/admin/")


if __name__ == "__main__":
    main() 