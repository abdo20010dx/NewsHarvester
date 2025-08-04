
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
News sources for countries chunk 20

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "VN": {
        "name": "Vietnam",
        "language": "vi",  // Vietnamese
        "sources": [
            {
                "name": "VnExpress",
                "domain": "vnexpress.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Tuổi Trẻ",
                "domain": "tuoitre.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Thanh Niên",
                "domain": "thanhnien.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Vietnam News",
                "domain": "vietnamnews.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "VietnamNet",
                "domain": "vietnamnet.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Dân Trí",
                "domain": "dantri.com.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {"name": "VOV", "domain": "vov.vn", "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"]},
            {
                "name": "Vietnam Plus",
                "domain": "vietnamplus.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Saigon Times",
                "domain": "thesaigontimes.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Vietnam Investment Review",
                "domain": "vir.com.vn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/politics/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fashion"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/hydrogenNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
        ],
    },
    "YE": {
        "name": "Yemen",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Yemen Times",
                "domain": "yementimes.com",
                "rss_feeds": ["https://yementimes.com/feed/"],
            },
            {
                "name": "Yemen Observer",
                "domain": "yemenobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Saba News Agency",
                "domain": "sabanews.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Yemen Post",
                "domain": "yemenpost.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Al-Masdar Online",
                "domain": "almasdaronline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Yemen News Agency",
                "domain": "sabanews.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Al-Thawra",
                "domain": "althawra-news.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Yemen Now",
                "domain": "yemennow.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Yemen Extra",
                "domain": "yemenextra.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Yemen Monitor",
                "domain": "yemenmonitor.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/hydrogenNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APBusinessNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lithiumNews"],
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
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fossilFuelsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
        ],
    },
    "ZM": {
        "name": "Zambia",
        "language": "en",  // English
        "sources": [
            {
                "name": "Zambia Daily Mail",
                "domain": "daily-mail.co.zm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Times of Zambia",
                "domain": "times.co.zm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Lusaka Times",
                "domain": "lusakatimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zambia Reports",
                "domain": "zambiareports.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zambia Watchdog",
                "domain": "zambiawatchdog.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zambian Observer",
                "domain": "zambianobserver.com",
                "rss_feeds": ["https://zambianobserver.com/feed/"],
            },
            {
                "name": "Zambia News",
                "domain": "zambianews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zambia Today",
                "domain": "zambiatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zambia Daily Nation",
                "domain": "zambiadailynation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zambia Business Times",
                "domain": "zambiabusinesstimes.com",
                "rss_feeds": ["https://zambiabusinesstimes.com/feed/"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/politics/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fashion"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/hydrogenNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
        ],
    },
    "ZW": {
        "name": "Zimbabwe",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Herald",
                "domain": "herald.co.zw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "NewsDay",
                "domain": "newsday.co.zw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "The Chronicle",
                "domain": "chronicle.co.zw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zimbabwe Independent",
                "domain": "theindependent.co.zw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Daily News",
                "domain": "dailynews.co.zw",
                "rss_feeds": ["https://dailynews.co.zw/feed/"],
            },
            {
                "name": "Zimbabwe Standard",
                "domain": "thestandard.co.zw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zimbabwe Mail",
                "domain": "zimbabwemail.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zimbabwe Today",
                "domain": "zimbabwetoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zimbabwe News",
                "domain": "zimbabwenews.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "Zimbabwe Broadcasting Corporation",
                "domain": "zbc.co.zw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roboticsNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/politics/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fashion"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/hydrogenNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
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
