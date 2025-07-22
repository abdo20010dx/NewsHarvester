#!/usr/bin/env python
"""
Setup script for NewsHarvester project.
This script helps users set up the project quickly.
"""

import os
import sys
import subprocess
import shutil
from pathlib import Path


def run_command(command, description):
    """Run a shell command and handle errors."""
    print(f"🔄 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ {description} failed: {e.stderr}")
        return False


def check_python_version():
    """Check if Python version is compatible."""
    if sys.version_info < (3, 11):
        print("❌ Python 3.11 or higher is required")
        return False
    print(f"✅ Python {sys.version_info.major}.{sys.version_info.minor} detected")
    return True


def setup_virtual_environment():
    """Create and activate virtual environment."""
    if os.path.exists("venv"):
        print("✅ Virtual environment already exists")
        return True
    
    return run_command("python -m venv venv", "Creating virtual environment")


def install_dependencies():
    """Install Python dependencies."""
    # Determine the correct pip command
    if os.name == 'nt':  # Windows
        pip_cmd = "venv\\Scripts\\pip"
    else:  # Unix/Linux/Mac
        pip_cmd = "venv/bin/pip"
    
    return run_command(f"{pip_cmd} install -r requirements.txt", "Installing dependencies")


def download_spacy_model():
    """Download spaCy model."""
    if os.name == 'nt':  # Windows
        python_cmd = "venv\\Scripts\\python"
    else:  # Unix/Linux/Mac
        python_cmd = "venv/bin/python"
    
    return run_command(f"{python_cmd} -m spacy download en_core_web_sm", "Downloading spaCy model")


def setup_environment_file():
    """Create .env file from template."""
    if os.path.exists(".env"):
        print("✅ .env file already exists")
        return True
    
    if os.path.exists("env.example"):
        shutil.copy("env.example", ".env")
        print("✅ Created .env file from template")
        print("⚠️  Please edit .env file with your configuration")
        return True
    else:
        print("❌ env.example file not found")
        return False


def setup_database():
    """Setup database and run migrations."""
    if os.name == 'nt':  # Windows
        python_cmd = "venv\\Scripts\\python"
    else:  # Unix/Linux/Mac
        python_cmd = "venv/bin/python"
    
    # Set Django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
    
    # Run migrations
    return run_command(f"{python_cmd} manage.py migrate", "Running database migrations")


def create_superuser():
    """Create a superuser account."""
    print("🔄 Creating superuser account...")
    print("Please enter the following information:")
    
    if os.name == 'nt':  # Windows
        python_cmd = "venv\\Scripts\\python"
    else:  # Unix/Linux/Mac
        python_cmd = "venv/bin/python"
    
    try:
        subprocess.run(f"{python_cmd} manage.py createsuperuser", shell=True, check=True)
        print("✅ Superuser created successfully")
        return True
    except subprocess.CalledProcessError:
        print("⚠️  Superuser creation skipped or failed")
        return True  # Don't fail the setup for this


def create_sample_data():
    """Create sample news sources."""
    print("🔄 Creating sample news sources...")
    
    if os.name == 'nt':  # Windows
        python_cmd = "venv\\Scripts\\python"
    else:  # Unix/Linux/Mac
        python_cmd = "venv/bin/python"
    
    sample_sources = [
        {
            "name": "TechCrunch",
            "domain": "techcrunch.com",
            "url": "https://techcrunch.com",
            "rss_feed": "https://techcrunch.com/feed/",
            "language": "en",
            "priority": 1
        },
        {
            "name": "BBC News",
            "domain": "bbc.com",
            "url": "https://www.bbc.com/news",
            "rss_feed": "https://feeds.bbci.co.uk/news/rss.xml",
            "language": "en",
            "priority": 2
        }
    ]
    
    # Create a management command to add sample sources
    sample_script = """
import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsharvester.settings')
django.setup()

from crawlers.models import NewsSource

sources_data = [
    {
        "name": "TechCrunch",
        "domain": "techcrunch.com",
        "url": "https://techcrunch.com",
        "rss_feed": "https://techcrunch.com/feed/",
        "language": "en",
        "priority": 1
    },
    {
        "name": "BBC News",
        "domain": "bbc.com",
        "url": "https://www.bbc.com/news",
        "rss_feed": "https://feeds.bbci.co.uk/news/rss.xml",
        "language": "en",
        "priority": 2
    }
]

for source_data in sources_data:
    source, created = NewsSource.objects.get_or_create(
        name=source_data["name"],
        defaults=source_data
    )
    if created:
        print(f"Created source: {source.name}")
    else:
        print(f"Source already exists: {source.name}")
"""
    
    with open("create_sample_data.py", "w") as f:
        f.write(sample_script)
    
    try:
        subprocess.run(f"{python_cmd} create_sample_data.py", shell=True, check=True)
        os.remove("create_sample_data.py")
        print("✅ Sample data created successfully")
        return True
    except subprocess.CalledProcessError:
        print("⚠️  Sample data creation failed")
        return True


def main():
    """Main setup function."""
    print("🚀 Welcome to NewsHarvester Setup!")
    print("=" * 50)
    
    # Check Python version
    if not check_python_version():
        sys.exit(1)
    
    # Setup steps
    steps = [
        ("Virtual Environment", setup_virtual_environment),
        ("Dependencies", install_dependencies),
        ("spaCy Model", download_spacy_model),
        ("Environment File", setup_environment_file),
        ("Database", setup_database),
        ("Superuser", create_superuser),
        ("Sample Data", create_sample_data),
    ]
    
    for step_name, step_func in steps:
        if not step_func():
            print(f"❌ Setup failed at: {step_name}")
            sys.exit(1)
    
    print("\n" + "=" * 50)
    print("🎉 NewsHarvester setup completed successfully!")
    print("\nNext steps:")
    print("1. Edit .env file with your configuration")
    print("2. Start the development server:")
    print("   - Windows: venv\\Scripts\\python manage.py runserver")
    print("   - Unix/Linux/Mac: venv/bin/python manage.py runserver")
    print("3. Access the application:")
    print("   - Django Admin: http://localhost:8000/admin/")
    print("   - API: http://localhost:8000/api/")
    print("\nFor more information, see the README.md file.")


if __name__ == "__main__":
    main() 