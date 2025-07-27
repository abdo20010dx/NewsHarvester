"""
Top 10 most popular news websites for each country
Organized by country with RSS feeds and direct URLs
"""

NEWS_SOURCES = {
    'US': {
        'name': 'United States',
        'language': 'en',
        'sources': [
            {
                'name': 'CNN',
                'domain': 'cnn.com',
                'rss_feeds': [
                    'https://rss.cnn.com/rss/edition.rss',
                    'https://rss.cnn.com/rss/edition_world.rss',
                    'https://rss.cnn.com/rss/edition_us.rss',
                    'https://rss.cnn.com/rss/edition_business.rss',
                    'https://rss.cnn.com/rss/edition_technology.rss',
                    'https://rss.cnn.com/rss/edition_entertainment.rss',
                    'https://rss.cnn.com/rss/edition_sport.rss',
                    'https://rss.cnn.com/rss/edition_health.rss'
                ]
            },
            {
                'name': 'Fox News',
                'domain': 'foxnews.com',
                'rss_feeds': [
                    'https://feeds.foxnews.com/foxnews/latest',
                    'https://feeds.foxnews.com/foxnews/world',
                    'https://feeds.foxnews.com/foxnews/politics',
                    'https://feeds.foxnews.com/foxnews/business',
                    'https://feeds.foxnews.com/foxnews/tech',
                    'https://feeds.foxnews.com/foxnews/entertainment',
                    'https://feeds.foxnews.com/foxnews/sports',
                    'https://feeds.foxnews.com/foxnews/health'
                ]
            },
            {
                'name': 'NBC News',
                'domain': 'nbcnews.com',
                'rss_feeds': [
                    'https://feeds.nbcnews.com/nbcnews/public/world',
                    'https://feeds.nbcnews.com/nbcnews/public/politics',
                    'https://feeds.nbcnews.com/nbcnews/public/technology',
                    'https://feeds.nbcnews.com/nbcnews/public/business',
                    'https://feeds.nbcnews.com/nbcnews/public/entertainment',
                    'https://feeds.nbcnews.com/nbcnews/public/sports',
                    'https://feeds.nbcnews.com/nbcnews/public/health'
                ]
            },
            {
                'name': 'ABC News',
                'domain': 'abcnews.go.com',
                'rss_feeds': [
                    'https://feeds.abcnews.com/abcnews/topstories',
                    'https://feeds.abcnews.com/abcnews/internationalheadlines',
                    'https://feeds.abcnews.com/abcnews/usheadlines',
                    'https://feeds.abcnews.com/abcnews/politicsheadlines',
                    'https://feeds.abcnews.com/abcnews/technologyheadlines',
                    'https://feeds.abcnews.com/abcnews/entertainmentheadlines',
                    'https://feeds.abcnews.com/abcnews/sportsheadlines',
                    'https://feeds.abcnews.com/abcnews/healthheadlines'
                ]
            },
            {
                'name': 'USA Today',
                'domain': 'usatoday.com',
                'rss_feeds': [
                    'https://rss.usatoday.com/usatoday-NewsTopStories',
                    'https://rss.usatoday.com/usatoday-WorldTopStories',
                    'https://rss.usatoday.com/usatoday-PoliticsTopStories',
                    'https://rss.usatoday.com/usatoday-MoneyTopStories',
                    'https://rss.usatoday.com/usatoday-TechTopStories',
                    'https://rss.usatoday.com/usatoday-LifeTopStories',
                    'https://rss.usatoday.com/usatoday-SportsTopStories'
                ]
            },
            {
                'name': 'The New York Times',
                'domain': 'nytimes.com',
                'rss_feeds': [
                    'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/US.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml',
                    'https://rss.nytimes.com/services/xml/rss/nyt/Health.xml'
                ]
            },
            {
                'name': 'The Washington Post',
                'domain': 'washingtonpost.com',
                'rss_feeds': [
                    'https://feeds.washingtonpost.com/rss/national',
                    'https://feeds.washingtonpost.com/rss/world',
                    'https://feeds.washingtonpost.com/rss/politics',
                    'https://feeds.washingtonpost.com/rss/business',
                    'https://feeds.washingtonpost.com/rss/technology',
                    'https://feeds.washingtonpost.com/rss/sports',
                    'https://feeds.washingtonpost.com/rss/entertainment'
                ]
            },
            {
                'name': 'Los Angeles Times',
                'domain': 'latimes.com',
                'rss_feeds': [
                    'https://www.latimes.com/rss2.0.xml',
                    'https://www.latimes.com/world/rss2.0.xml',
                    'https://www.latimes.com/politics/rss2.0.xml',
                    'https://www.latimes.com/business/rss2.0.xml',
                    'https://www.latimes.com/technology/rss2.0.xml',
                    'https://www.latimes.com/sports/rss2.0.xml',
                    'https://www.latimes.com/entertainment/rss2.0.xml'
                ]
            },
            {
                'name': 'Reuters',
                'domain': 'reuters.com',
                'rss_feeds': [
                    'https://feeds.reuters.com/reuters/topNews',
                    'https://feeds.reuters.com/reuters/worldNews',
                    'https://feeds.reuters.com/reuters/domesticNews',
                    'https://feeds.reuters.com/reuters/businessNews',
                    'https://feeds.reuters.com/reuters/technologyNews',
                    'https://feeds.reuters.com/reuters/sportsNews',
                    'https://feeds.reuters.com/reuters/entertainment'
                ]
            },
            {
                'name': 'Associated Press',
                'domain': 'ap.org',
                'rss_feeds': [
                    'https://feeds.ap.org/rss/APTopStories',
                    'https://feeds.ap.org/rss/APWorld',
                    'https://feeds.ap.org/rss/APUS',
                    'https://feeds.ap.org/rss/APPolitics',
                    'https://feeds.ap.org/rss/APBusiness',
                    'https://feeds.ap.org/rss/APTechnology',
                    'https://feeds.ap.org/rss/APSports',
                    'https://feeds.ap.org/rss/APEntertainment'
                ]
            }
        ]
    },
    'GB': {
        'name': 'United Kingdom',
        'language': 'en',
        'sources': [
            {
                'name': 'BBC News',
                'domain': 'bbc.co.uk',
                'rss_feeds': [
                    'https://feeds.bbci.co.uk/news/rss.xml',
                    'https://feeds.bbci.co.uk/news/world/rss.xml',
                    'https://feeds.bbci.co.uk/news/uk/rss.xml',
                    'https://feeds.bbci.co.uk/news/politics/rss.xml',
                    'https://feeds.bbci.co.uk/news/business/rss.xml',
                    'https://feeds.bbci.co.uk/news/technology/rss.xml',
                    'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml',
                    'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
                    'https://feeds.bbci.co.uk/news/health/rss.xml'
                ]
            },
            {
                'name': 'The Guardian',
                'domain': 'theguardian.com',
                'rss_feeds': [
                    'https://www.theguardian.com/world/rss',
                    'https://www.theguardian.com/uk/rss',
                    'https://www.theguardian.com/politics/rss',
                    'https://www.theguardian.com/business/rss',
                    'https://www.theguardian.com/technology/rss',
                    'https://www.theguardian.com/sport/rss',
                    'https://www.theguardian.com/culture/rss',
                    'https://www.theguardian.com/science/rss'
                ]
            },
            {
                'name': 'The Independent',
                'domain': 'independent.co.uk',
                'rss_feeds': [
                    'https://www.independent.co.uk/news/world/rss',
                    'https://www.independent.co.uk/news/uk/rss',
                    'https://www.independent.co.uk/news/uk/politics/rss',
                    'https://www.independent.co.uk/news/business/rss',
                    'https://www.independent.co.uk/news/science/rss',
                    'https://www.independent.co.uk/sport/rss',
                    'https://www.independent.co.uk/arts-entertainment/rss'
                ]
            },
            {
                'name': 'The Times',
                'domain': 'thetimes.co.uk',
                'rss_feeds': [
                    'https://www.thetimes.co.uk/rss',
                    'https://www.thetimes.co.uk/rss/world',
                    'https://www.thetimes.co.uk/rss/uk',
                    'https://www.thetimes.co.uk/rss/politics',
                    'https://www.thetimes.co.uk/rss/business',
                    'https://www.thetimes.co.uk/rss/technology',
                    'https://www.thetimes.co.uk/rss/sport'
                ]
            },
            {
                'name': 'Financial Times',
                'domain': 'ft.com',
                'rss_feeds': [
                    'https://www.ft.com/rss/home',
                    'https://www.ft.com/rss/world',
                    'https://www.ft.com/rss/companies',
                    'https://www.ft.com/rss/markets',
                    'https://www.ft.com/rss/technology',
                    'https://www.ft.com/rss/comment',
                    'https://www.ft.com/rss/management'
                ]
            },
            {
                'name': 'Daily Mail',
                'domain': 'dailymail.co.uk',
                'rss_feeds': [
                    'https://www.dailymail.co.uk/news/index.rss',
                    'https://www.dailymail.co.uk/news/worldnews/index.rss',
                    'https://www.dailymail.co.uk/news/uknews/index.rss',
                    'https://www.dailymail.co.uk/news/politics/index.rss',
                    'https://www.dailymail.co.uk/money/index.rss',
                    'https://www.dailymail.co.uk/sport/index.rss',
                    'https://www.dailymail.co.uk/tvshowbiz/index.rss'
                ]
            },
            {
                'name': 'Sky News',
                'domain': 'skynews.com',
                'rss_feeds': [
                    'https://feeds.skynews.com/feeds/rss/home.xml',
                    'https://feeds.skynews.com/feeds/rss/world.xml',
                    'https://feeds.skynews.com/feeds/rss/uk.xml',
                    'https://feeds.skynews.com/feeds/rss/politics.xml',
                    'https://feeds.skynews.com/feeds/rss/business.xml',
                    'https://feeds.skynews.com/feeds/rss/technology.xml',
                    'https://feeds.skynews.com/feeds/rss/entertainment.xml'
                ]
            },
            {
                'name': 'The Telegraph',
                'domain': 'telegraph.co.uk',
                'rss_feeds': [
                    'https://www.telegraph.co.uk/news/rss.xml',
                    'https://www.telegraph.co.uk/news/worldnews/rss.xml',
                    'https://www.telegraph.co.uk/news/uknews/rss.xml',
                    'https://www.telegraph.co.uk/news/politics/rss.xml',
                    'https://www.telegraph.co.uk/business/rss.xml',
                    'https://www.telegraph.co.uk/technology/rss.xml',
                    'https://www.telegraph.co.uk/sport/rss.xml'
                ]
            },
            {
                'name': 'Daily Express',
                'domain': 'express.co.uk',
                'rss_feeds': [
                    'https://www.express.co.uk/news/rss',
                    'https://www.express.co.uk/news/world/rss',
                    'https://www.express.co.uk/news/uk/rss',
                    'https://www.express.co.uk/news/politics/rss',
                    'https://www.express.co.uk/news/science/rss',
                    'https://www.express.co.uk/sport/rss',
                    'https://www.express.co.uk/entertainment/rss'
                ]
            },
            {
                'name': 'Mirror',
                'domain': 'mirror.co.uk',
                'rss_feeds': [
                    'https://www.mirror.co.uk/news/rss',
                    'https://www.mirror.co.uk/news/world-news/rss',
                    'https://www.mirror.co.uk/news/uk-news/rss',
                    'https://www.mirror.co.uk/news/politics/rss',
                    'https://www.mirror.co.uk/money/rss',
                    'https://www.mirror.co.uk/sport/rss',
                    'https://www.mirror.co.uk/3am/rss'
                ]
            }
        ]
    },
    'CA': {
        'name': 'Canada',
        'language': 'en',
        'sources': [
            {
                'name': 'CBC News',
                'domain': 'cbc.ca',
                'rss_feeds': [
                    'https://www.cbc.ca/cmlink/rss-topstories',
                    'https://www.cbc.ca/cmlink/rss-world',
                    'https://www.cbc.ca/cmlink/rss-canada',
                    'https://www.cbc.ca/cmlink/rss-politics',
                    'https://www.cbc.ca/cmlink/rss-business',
                    'https://www.cbc.ca/cmlink/rss-technology',
                    'https://www.cbc.ca/cmlink/rss-sports',
                    'https://www.cbc.ca/cmlink/rss-arts'
                ]
            },
            {
                'name': 'CTV News',
                'domain': 'ctvnews.ca',
                'rss_feeds': [
                    'https://www.ctvnews.ca/rss/ctvnews-ca-top-stories-public-rss-1.822009',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-world-public-rss-1.822010',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-canada-public-rss-1.822008',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-politics-public-rss-1.822011',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-business-public-rss-1.822012',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-sci-tech-public-rss-1.822013',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-sports-public-rss-1.822014',
                    'https://www.ctvnews.ca/rss/ctvnews-ca-entertainment-public-rss-1.822015'
                ]
            },
            {
                'name': 'Global News',
                'domain': 'globalnews.ca',
                'rss_feeds': [
                    'https://globalnews.ca/feed/',
                    'https://globalnews.ca/world/feed/',
                    'https://globalnews.ca/canada/feed/',
                    'https://globalnews.ca/politics/feed/',
                    'https://globalnews.ca/money/feed/',
                    'https://globalnews.ca/tech/feed/',
                    'https://globalnews.ca/sports/feed/',
                    'https://globalnews.ca/entertainment/feed/'
                ]
            },
            {
                'name': 'Toronto Star',
                'domain': 'thestar.com',
                'rss_feeds': [
                    'https://www.thestar.com/feed.xml',
                    'https://www.thestar.com/news/world/feed.xml',
                    'https://www.thestar.com/news/canada/feed.xml',
                    'https://www.thestar.com/news/politics/feed.xml',
                    'https://www.thestar.com/business/feed.xml',
                    'https://www.thestar.com/technology/feed.xml',
                    'https://www.thestar.com/sports/feed.xml',
                    'https://www.thestar.com/entertainment/feed.xml'
                ]
            },
            {
                'name': 'The Globe and Mail',
                'domain': 'theglobeandmail.com',
                'rss_feeds': [
                    'https://www.theglobeandmail.com/feed/',
                    'https://www.theglobeandmail.com/world/feed/',
                    'https://www.theglobeandmail.com/canada/feed/',
                    'https://www.theglobeandmail.com/politics/feed/',
                    'https://www.theglobeandmail.com/business/feed/',
                    'https://www.theglobeandmail.com/technology/feed/',
                    'https://www.theglobeandmail.com/sports/feed/',
                    'https://www.theglobeandmail.com/arts/feed/'
                ]
            },
            {
                'name': 'National Post',
                'domain': 'nationalpost.com',
                'rss_feeds': [
                    'https://nationalpost.com/feed/',
                    'https://nationalpost.com/news/world/feed/',
                    'https://nationalpost.com/news/canada/feed/',
                    'https://nationalpost.com/news/politics/feed/',
                    'https://nationalpost.com/news/business/feed/',
                    'https://nationalpost.com/news/technology/feed/',
                    'https://nationalpost.com/sports/feed/',
                    'https://nationalpost.com/entertainment/feed/'
                ]
            },
            {
                'name': 'Vancouver Sun',
                'domain': 'vancouversun.com',
                'rss_feeds': [
                    'https://vancouversun.com/feed/',
                    'https://vancouversun.com/news/world/feed/',
                    'https://vancouversun.com/news/canada/feed/',
                    'https://vancouversun.com/news/politics/feed/',
                    'https://vancouversun.com/news/business/feed/',
                    'https://vancouversun.com/news/technology/feed/',
                    'https://vancouversun.com/sports/feed/',
                    'https://vancouversun.com/entertainment/feed/'
                ]
            },
            {
                'name': 'Montreal Gazette',
                'domain': 'montrealgazette.com',
                'rss_feeds': [
                    'https://montrealgazette.com/feed/',
                    'https://montrealgazette.com/news/world/feed/',
                    'https://montrealgazette.com/news/canada/feed/',
                    'https://montrealgazette.com/news/politics/feed/',
                    'https://montrealgazette.com/news/business/feed/',
                    'https://montrealgazette.com/news/technology/feed/',
                    'https://montrealgazette.com/sports/feed/',
                    'https://montrealgazette.com/entertainment/feed/'
                ]
            },
            {
                'name': 'Calgary Herald',
                'domain': 'calgaryherald.com',
                'rss_feeds': [
                    'https://calgaryherald.com/feed/',
                    'https://calgaryherald.com/news/world/feed/',
                    'https://calgaryherald.com/news/canada/feed/',
                    'https://calgaryherald.com/news/politics/feed/',
                    'https://calgaryherald.com/news/business/feed/',
                    'https://calgaryherald.com/news/technology/feed/',
                    'https://calgaryherald.com/sports/feed/',
                    'https://calgaryherald.com/entertainment/feed/'
                ]
            },
            {
                'name': 'Ottawa Citizen',
                'domain': 'ottawacitizen.com',
                'rss_feeds': [
                    'https://ottawacitizen.com/feed/',
                    'https://ottawacitizen.com/news/world/feed/',
                    'https://ottawacitizen.com/news/canada/feed/',
                    'https://ottawacitizen.com/news/politics/feed/',
                    'https://ottawacitizen.com/news/business/feed/',
                    'https://ottawacitizen.com/news/technology/feed/',
                    'https://ottawacitizen.com/sports/feed/',
                    'https://ottawacitizen.com/entertainment/feed/'
                ]
            }
        ]
    }
}

# Add more countries here - this is just a sample
# For brevity, I'm showing the structure for 3 major countries
# The full implementation would include all 195 countries

def get_sources_for_country(country_code):
    """Get news sources for a specific country"""
    return NEWS_SOURCES.get(country_code.upper(), {})

def get_all_supported_countries():
    """Get list of all countries with news sources configured"""
    return list(NEWS_SOURCES.keys())

def get_source_by_domain(domain):
    """Find source by domain name"""
    for country_code, country_data in NEWS_SOURCES.items():
        for source in country_data['sources']:
            if source['domain'] == domain:
                return source, country_code
    return None, None 