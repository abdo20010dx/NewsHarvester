#!/usr/bin/env python3
"""
AI Service for NewsHarvester
Provides AI-powered content extraction and processing capabilities
"""
from flask import Flask, request, jsonify
import requests
import re
from bs4 import BeautifulSoup
import logging
from urllib.parse import urlparse
import json

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

class AIContentExtractor:
    """AI-powered content extraction using various AI services"""
    
    def __init__(self):
        # You can configure different AI services here
        self.openai_api_key = None  # Set your OpenAI API key
        self.anthropic_api_key = None  # Set your Anthropic API key
        self.local_ai_url = "http://localhost:11434/api/generate"  # Local Ollama
        
    def extract_content(self, html, url, task='extract_content'):
        """Extract content using AI"""
        try:
            if task == 'extract_content':
                return self._extract_article_content(html, url)
            elif task == 'extract_title':
                return self._extract_title(html, url)
            elif task == 'extract_description':
                return self._extract_description(html, url)
            elif task == 'extract_image':
                return self._extract_image(html, url)
            elif task == 'extract_author':
                return self._extract_author(html, url)
            else:
                return self._fallback_extraction(html, url, task)
        except Exception as e:
            logger.error(f"AI extraction error: {e}")
            return self._fallback_extraction(html, url, task)
    
    def process_content(self, content, title):
        """Process content using AI for sentiment, entities, etc."""
        try:
            return {
                'sentiment': self._analyze_sentiment(content),
                'sentiment_score': self._calculate_sentiment_score(content),
                'entities': self._extract_entities(content),
                'keywords': self._extract_keywords(content),
                'topics': self._classify_topics(content),
                'summary': self._generate_summary(content),
                'readability_score': self._calculate_readability(content),
                'word_count': len(content.split())
            }
        except Exception as e:
            logger.error(f"AI processing error: {e}")
            return {
                'sentiment': 'neutral',
                'sentiment_score': 0.0,
                'entities': [],
                'keywords': [],
                'topics': [],
                'summary': '',
                'readability_score': 0.0,
                'word_count': len(content.split())
            }
    
    def _extract_article_content(self, html, url):
        """Extract main article content using AI"""
        try:
            # Parse HTML
            soup = BeautifulSoup(html, 'html.parser')
            
            # Remove script and style elements
            for script in soup(["script", "style"]):
                script.decompose()
            
            # Get text content
            text = soup.get_text()
            
            # Use AI to identify the main content
            prompt = f"""
            Extract the main article content from this HTML. 
            URL: {url}
            HTML: {html[:5000]}...
            
            Return only the main article text, excluding navigation, ads, and other non-content elements.
            """
            
            # Try local AI first (Ollama)
            try:
                response = requests.post(
                    self.local_ai_url,
                    json={
                        "model": "llama2",
                        "prompt": prompt,
                        "stream": False
                    },
                    timeout=30
                )
                
                if response.status_code == 200:
                    result = response.json()
                    content = result.get('response', '')
                    if content and len(content) > 100:
                        return content
            except:
                pass
            
            # Fallback to rule-based extraction
            return self._rule_based_content_extraction(soup, url)
            
        except Exception as e:
            logger.error(f"Content extraction error: {e}")
            return None
    
    def _extract_title(self, html, url):
        """Extract article title using AI"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Try traditional selectors first
            title_selectors = [
                'h1',
                '[data-testid="headline"]',
                '.headline',
                '.article-title',
                'title'
            ]
            
            for selector in title_selectors:
                title_elem = soup.select_one(selector)
                if title_elem:
                    title = title_elem.get_text().strip()
                    if len(title) > 10:
                        return title
            
            # Use AI as fallback
            prompt = f"""
            Extract the main article title from this HTML.
            URL: {url}
            HTML: {html[:2000]}...
            
            Return only the title, nothing else.
            """
            
            try:
                response = requests.post(
                    self.local_ai_url,
                    json={
                        "model": "llama2",
                        "prompt": prompt,
                        "stream": False
                    },
                    timeout=30
                )
                
                if response.status_code == 200:
                    result = response.json()
                    title = result.get('response', '').strip()
                    if title and len(title) > 5:
                        return title
            except:
                pass
            
            return None
            
        except Exception as e:
            logger.error(f"Title extraction error: {e}")
            return None
    
    def _extract_description(self, html, url):
        """Extract article description using AI"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Try meta tags first
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            if meta_desc and meta_desc.get('content'):
                return meta_desc['content'].strip()
            
            # Use AI as fallback
            prompt = f"""
            Extract a brief description (2-3 sentences) of this article.
            URL: {url}
            HTML: {html[:3000]}...
            
            Return only the description, nothing else.
            """
            
            try:
                response = requests.post(
                    self.local_ai_url,
                    json={
                        "model": "llama2",
                        "prompt": prompt,
                        "stream": False
                    },
                    timeout=30
                )
                
                if response.status_code == 200:
                    result = response.json()
                    desc = result.get('response', '').strip()
                    if desc and len(desc) > 20:
                        return desc
            except:
                pass
            
            return None
            
        except Exception as e:
            logger.error(f"Description extraction error: {e}")
            return None
    
    def _extract_image(self, html, url):
        """Extract main article image using AI"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Try traditional selectors first
            img_selectors = [
                'meta[property="og:image"]',
                'meta[name="twitter:image"]',
                '.article-image img',
                '.story-image img',
                '.main-image img'
            ]
            
            for selector in img_selectors:
                img_elem = soup.select_one(selector)
                if img_elem:
                    img_url = img_elem.get('content') or img_elem.get('src')
                    if img_url:
                        return img_url
            
            # Use AI to find the best image
            prompt = f"""
            Find the main article image URL from this HTML.
            URL: {url}
            HTML: {html[:2000]}...
            
            Return only the image URL, nothing else.
            """
            
            try:
                response = requests.post(
                    self.local_ai_url,
                    json={
                        "model": "llama2",
                        "prompt": prompt,
                        "stream": False
                    },
                    timeout=30
                )
                
                if response.status_code == 200:
                    result = response.json()
                    img_url = result.get('response', '').strip()
                    if img_url and img_url.startswith('http'):
                        return img_url
            except:
                pass
            
            return None
            
        except Exception as e:
            logger.error(f"Image extraction error: {e}")
            return None
    
    def _extract_author(self, html, url):
        """Extract article author using AI"""
        try:
            soup = BeautifulSoup(html, 'html.parser')
            
            # Try traditional selectors first
            author_selectors = [
                '.author',
                '.byline',
                '[data-testid="author"]',
                'meta[name="author"]'
            ]
            
            for selector in author_selectors:
                author_elem = soup.select_one(selector)
                if author_elem:
                    author = author_elem.get_text().strip() or author_elem.get('content', '').strip()
                    if author and len(author) > 2:
                        return author
            
            # Use AI as fallback
            prompt = f"""
            Extract the author name from this article.
            URL: {url}
            HTML: {html[:2000]}...
            
            Return only the author name, nothing else.
            """
            
            try:
                response = requests.post(
                    self.local_ai_url,
                    json={
                        "model": "llama2",
                        "prompt": prompt,
                        "stream": False
                    },
                    timeout=30
                )
                
                if response.status_code == 200:
                    result = response.json()
                    author = result.get('response', '').strip()
                    if author and len(author) > 2:
                        return author
            except:
                pass
            
            return None
            
        except Exception as e:
            logger.error(f"Author extraction error: {e}")
            return None
    
    def _rule_based_content_extraction(self, soup, url):
        """Rule-based content extraction as fallback"""
        domain = urlparse(url).netloc
        
        # Site-specific rules
        if 'bbc.com' in domain or 'bbc.co.uk' in domain:
            selectors = [
                '[data-component="text-block"] p',
                '[data-component="text-block"] div',
                '.article-body p',
                '.story-body p'
            ]
        elif 'msn.com' in domain:
            selectors = [
                '[data-testid="content"] p',
                '.article-content p',
                '.content p'
            ]
        else:
            selectors = [
                'article p',
                '.article-content p',
                '.content p',
                '.article-body p',
                '.story-body p',
                'p'
            ]
        
        content_parts = []
        for selector in selectors:
            elements = soup.select(selector)
            for element in elements:
                text = element.get_text().strip()
                if (len(text) > 50 and 
                    not text.startswith('©') and 
                    not text.startswith('Follow') and
                    not text.startswith('Share')):
                    content_parts.append(text)
                    if len(' '.join(content_parts)) > 1000:
                        break
            if content_parts:
                break
        
        return ' '.join(content_parts) if content_parts else None
    
    def _fallback_extraction(self, html, url, task):
        """Fallback extraction method"""
        soup = BeautifulSoup(html, 'html.parser')
        
        if task == 'extract_content':
            return self._rule_based_content_extraction(soup, url)
        elif task == 'extract_title':
            title_elem = soup.find('h1') or soup.find('title')
            return title_elem.get_text().strip() if title_elem else None
        elif task == 'extract_description':
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            return meta_desc.get('content', '').strip() if meta_desc else None
        elif task == 'extract_image':
            og_image = soup.find('meta', attrs={'property': 'og:image'})
            return og_image.get('content') if og_image else None
        elif task == 'extract_author':
            author_elem = soup.find(class_='author') or soup.find(class_='byline')
            return author_elem.get_text().strip() if author_elem else None
        
        return None
    
    def _analyze_sentiment(self, content):
        """Analyze content sentiment using AI"""
        try:
            prompt = f"""
            Analyze the sentiment of this text and return only one word: positive, negative, or neutral.
            
            Text: {content[:1000]}
            """
            
            response = requests.post(
                self.local_ai_url,
                json={
                    "model": "llama2",
                    "prompt": prompt,
                    "stream": False
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                sentiment = result.get('response', '').strip().lower()
                if sentiment in ['positive', 'negative', 'neutral']:
                    return sentiment
            
            return 'neutral'
            
        except Exception as e:
            logger.error(f"Sentiment analysis error: {e}")
            return 'neutral'
    
    def _calculate_sentiment_score(self, content):
        """Calculate sentiment score (-1 to 1)"""
        try:
            sentiment = self._analyze_sentiment(content)
            if sentiment == 'positive':
                return 0.7
            elif sentiment == 'negative':
                return -0.7
            else:
                return 0.0
        except:
            return 0.0
    
    def _extract_entities(self, content):
        """Extract named entities from content"""
        try:
            prompt = f"""
            Extract named entities (people, places, organizations) from this text.
            Return as a JSON array of strings.
            
            Text: {content[:1000]}
            """
            
            response = requests.post(
                self.local_ai_url,
                json={
                    "model": "llama2",
                    "prompt": prompt,
                    "stream": False
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                entities_text = result.get('response', '[]')
                try:
                    return json.loads(entities_text)
                except:
                    pass
            
            return []
            
        except Exception as e:
            logger.error(f"Entity extraction error: {e}")
            return []
    
    def _extract_keywords(self, content):
        """Extract keywords from content"""
        try:
            prompt = f"""
            Extract 10 most important keywords from this text.
            Return as a JSON array of strings.
            
            Text: {content[:1000]}
            """
            
            response = requests.post(
                self.local_ai_url,
                json={
                    "model": "llama2",
                    "prompt": prompt,
                    "stream": False
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                keywords_text = result.get('response', '[]')
                try:
                    return json.loads(keywords_text)
                except:
                    pass
            
            return []
            
        except Exception as e:
            logger.error(f"Keyword extraction error: {e}")
            return []
    
    def _classify_topics(self, content):
        """Classify content topics"""
        try:
            prompt = f"""
            Classify this text into 3-5 topics.
            Return as a JSON array of strings.
            
            Text: {content[:1000]}
            """
            
            response = requests.post(
                self.local_ai_url,
                json={
                    "model": "llama2",
                    "prompt": prompt,
                    "stream": False
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                topics_text = result.get('response', '[]')
                try:
                    return json.loads(topics_text)
                except:
                    pass
            
            return []
            
        except Exception as e:
            logger.error(f"Topic classification error: {e}")
            return []
    
    def _generate_summary(self, content):
        """Generate a summary of the content"""
        try:
            prompt = f"""
            Generate a 2-3 sentence summary of this text.
            
            Text: {content[:1500]}
            """
            
            response = requests.post(
                self.local_ai_url,
                json={
                    "model": "llama2",
                    "prompt": prompt,
                    "stream": False
                },
                timeout=30
            )
            
            if response.status_code == 200:
                result = response.json()
                summary = result.get('response', '').strip()
                if summary and len(summary) > 20:
                    return summary
            
            return ''
            
        except Exception as e:
            logger.error(f"Summary generation error: {e}")
            return ''
    
    def _calculate_readability(self, content):
        """Calculate readability score"""
        try:
            # Simple Flesch Reading Ease approximation
            sentences = len(re.split(r'[.!?]+', content))
            words = len(content.split())
            syllables = len(re.findall(r'[aeiouy]+', content.lower()))
            
            if sentences > 0 and words > 0:
                score = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words))
                return max(0, min(100, score))
            
            return 50.0
            
        except Exception as e:
            logger.error(f"Readability calculation error: {e}")
            return 50.0

# Initialize AI extractor
ai_extractor = AIContentExtractor()

@app.route('/ai/extract-content', methods=['POST'])
def extract_content():
    """AI content extraction endpoint"""
    try:
        data = request.get_json()
        url = data.get('url', '')
        html = data.get('html', '')
        domain = data.get('domain', '')
        task = data.get('task', 'extract_content')
        
        logger.info(f"AI extraction request for {url} - task: {task}")
        
        result = ai_extractor.extract_content(html, url, task)
        
        if task == 'extract_content':
            return jsonify({'content': result})
        elif task == 'extract_title':
            return jsonify({'title': result})
        elif task == 'extract_description':
            return jsonify({'description': result})
        elif task == 'extract_image':
            return jsonify({'image_url': result})
        elif task == 'extract_author':
            return jsonify({'author': result})
        else:
            return jsonify({'result': result})
            
    except Exception as e:
        logger.error(f"Extraction endpoint error: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/ai/process-content', methods=['POST'])
def process_content():
    """AI content processing endpoint"""
    try:
        data = request.get_json()
        content = data.get('content', '')
        title = data.get('title', '')
        
        logger.info(f"AI processing request for content length: {len(content)}")
        
        result = ai_extractor.process_content(content, title)
        
        return jsonify(result)
        
    except Exception as e:
        logger.error(f"Processing endpoint error: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'ai-enhanced-spider'})

if __name__ == '__main__':
    logger.info("Starting AI Service for NewsHarvester...")
    app.run(host='0.0.0.0', port=8000, debug=True) 