
export interface NewsSource {
  name: string;
  domain: string;
  rss_feeds: string[];
}

export interface CountryData {
  name: string;
  language: string;
  sources: NewsSource[];
}

export interface NewsSourcesChunk {
  [countryCode: string]: CountryData;
}

/**
 * 
News sources for countries chunk 19

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "UG": {
        "name": "Uganda",
        "language": "en",  // English
        "sources": [
            {
                "name": "Daily Monitor",
                "domain": "monitor.co.ug",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "New Vision",
                "domain": "newvision.co.ug",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Observer",
                "domain": "observer.ug",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda Radio Network",
                "domain": "ugandaradionetwork.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda Broadcasting Corporation",
                "domain": "ubc.go.ug",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda News",
                "domain": "ugandanews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda Times",
                "domain": "ugandatimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda Herald",
                "domain": "ugandaherald.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda Observer",
                "domain": "ugandaobserver.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uganda Daily",
                "domain": "ugandadaily.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
    "UA": {
        "name": "Ukraine",
        "language": "uk",  // Ukrainian
        "sources": [
            {
                "name": "Ukrinform",
                "domain": "ukrinform.net",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Interfax-Ukraine",
                "domain": "interfax.com.ua",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "UNIAN",
                "domain": "unian.ua",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Ukrayinska Pravda",
                "domain": "pravda.com.ua",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Dzerkalo Tyzhnia",
                "domain": "zn.ua",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Hromadske",
                "domain": "hromadske.ua",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Radio Free Europe/Radio Liberty",
                "domain": "rferl.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "BBC Ukraine",
                "domain": "bbc.com/ukrainian",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Suspilne",
                "domain": "suspilne.media",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "1+1",
                "domain": "1plus1.ua",
                "rss_feeds": ["https://1plus1.ua/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
    "AE": {
        "name": "United Arab Emirates",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Emirates News Agency",
                "domain": "wam.ae",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Gulf News",
                "domain": "gulfnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The National",
                "domain": "thenational.ae",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Khaleej Times",
                "domain": "khaleejtimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Emirates 24/7",
                "domain": "emirates247.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Al Bayan",
                "domain": "albayan.ae",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Al Ittihad",
                "domain": "alittihad.ae",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Al Khaleej",
                "domain": "alkhaleej.ae",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Dubai Media Inc",
                "domain": "dubaimediainc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Abu Dhabi Media",
                "domain": "admedia.ae",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Voice of America Arabic",
                "domain": "voanews.com",
                "rss_feeds": ["https://www.voanews.com/api/zq$omekvi_"],
            },
            {
                "name": "Radio Free Europe Arabic",
                "domain": "rferl.org",
                "rss_feeds": ["https://www.rferl.org/api/zq$omekvi_"],
            },
            {
                "name": "Reuters Middle East",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/peopleNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
        ],
    },
    "GB": {
        "name": "United Kingdom",
        "language": "en",  // English
        "sources": [
            {
                "name": "BBC News",
                "domain": "bbc.com/news",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Times",
                "domain": "thetimes.co.uk",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Independent",
                "domain": "independent.co.uk",
                "rss_feeds": ["https://www.independent.co.uk/rss"],
            },
            {
                "name": "Daily Mail",
                "domain": "dailymail.co.uk",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Telegraph",
                "domain": "telegraph.co.uk",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Sky News",
                "domain": "news.sky.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "ITV News",
                "domain": "itv.com/news",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Channel 4 News",
                "domain": "channel4.com/news",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "US": {
        "name": "United States",
        "language": "en",  // English
        "sources": [
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Fox News",
                "domain": "foxnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "UY": {
        "name": "Uruguay",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Pais Uruguay",
                "domain": "elpais.com.uy",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "El Observador",
                "domain": "elobservador.com.uy",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "La Republica",
                "domain": "larepublica.com.uy",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Montevideo Portal",
                "domain": "montevideo.com.uy",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uruguay News",
                "domain": "uruguaynews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uruguay Times",
                "domain": "uruguaytimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uruguay Herald",
                "domain": "uruguayherald.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uruguay Observer",
                "domain": "uruguayobserver.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uruguay Daily",
                "domain": "uruguaydaily.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uruguay Press",
                "domain": "uruguaypress.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
    "UZ": {
        "name": "Uzbekistan",
        "language": "uz",  // Uzbek
        "sources": [
            {
                "name": "Uzbekistan National News Agency",
                "domain": "uza.uz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan News",
                "domain": "uzbekistannews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Times",
                "domain": "uzbekistantimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Herald",
                "domain": "uzbekistanherald.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Observer",
                "domain": "uzbekistanobserver.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Daily",
                "domain": "uzbekistandaily.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Press",
                "domain": "uzbekistanpress.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Tribune",
                "domain": "uzbekistantribune.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Broadcasting",
                "domain": "mtrk.uz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Uzbekistan Radio",
                "domain": "radio.uz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
    "VU": {
        "name": "Vanuatu",
        "language": "en",  // English
        "sources": [
            {
                "name": "Vanuatu Broadcasting and Television Corporation",
                "domain": "vbv.com.vu",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Daily Post",
                "domain": "dailypost.vu",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu News",
                "domain": "vanuatunews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Times",
                "domain": "vanuatutimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Herald",
                "domain": "vanuatuherald.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Observer",
                "domain": "vanuatuobserver.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Daily",
                "domain": "vanuatudaily.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Press",
                "domain": "vanuatupress.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Tribune",
                "domain": "vanuatutribune.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vanuatu Government",
                "domain": "vanuatu.gov.vu",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
    "VA": {
        "name": "Vatican City",
        "language": "la",  // Latin
        "sources": [
            {
                "name": "Vatican News",
                "domain": "vaticannews.va",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "L'Osservatore Romano",
                "domain": "osservatoreromano.va",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Radio",
                "domain": "vaticanradio.va",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Television Center",
                "domain": "ctv.va",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Information Service",
                "domain": "vis.va",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican News Agency",
                "domain": "vaticannewsagency.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Times",
                "domain": "vaticantimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Herald",
                "domain": "vaticanherald.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Observer",
                "domain": "vaticanobserver.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Vatican Daily",
                "domain": "vaticandaily.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
    "VE": {
        "name": "Venezuela",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Venezolana de Television",
                "domain": "vtv.gob.ve",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela News",
                "domain": "venezuelanews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Times",
                "domain": "venezuelatimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Herald",
                "domain": "venezuelaherald.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Observer",
                "domain": "venezuelaobserver.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Daily",
                "domain": "venezueladaily.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Press",
                "domain": "venezuelapress.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Tribune",
                "domain": "venezuelatribune.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Broadcasting",
                "domain": "venezuelabroadcasting.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Venezuela Radio",
                "domain": "venezuelaradio.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cybersecurityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/windNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.euronews.com/rss/technology"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/technology/feed"],
            },
        ],
    },
}


/**
 * Return the news sources for this chunk
 */
export function getChunkSources(): NewsSourcesChunk {
  return NEWS_SOURCES_CHUNK;
}
