@echo off
echo Starting NewsHarvester on port 8500...
echo.
echo You can change the port by setting DJANGO_PORT environment variable
echo Example: set DJANGO_PORT=8000 && run_server.bat
echo.
venv\Scripts\activate
python run_server.py
pause 