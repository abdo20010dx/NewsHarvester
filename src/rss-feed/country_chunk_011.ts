
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
News sources for countries chunk 11

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "KW": {
        "name": "Kuwait",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Kuwait News Agency",
                "domain": "kuna.net.kw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Al-Qabas",
                "domain": "alqabas.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Al-Rai",
                "domain": "alraimedia.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Al-Watan",
                "domain": "alwatan.kuwait.tt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Kuwait Times",
                "domain": "kuwaittimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Kuwait Radio and Television Corporation",
                "domain": "krtv.gov.kw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Kuwait",
                "domain": "radiokuwait.kw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Fann",
                "domain": "radiofann.kw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Hala",
                "domain": "radiohala.kw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Rotana",
                "domain": "rotana.kw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/derry/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://www.afp.com/en/news/health/feed"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
        ],
    },
    "KG": {
        "name": "Kyrgyzstan",
        "language": "ky",  // Kyrgyz
        "sources": [
            {
                "name": "Kabar News Agency",
                "domain": "kabar.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {"name": "24.kg", "domain": "24.kg", "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"]},
            {
                "name": "Kloop",
                "domain": "kloop.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Vecherniy Bishkek",
                "domain": "vb.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Slovo Kyrgyzstana",
                "domain": "slovo.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Kyrgyz National Television and Radio Broadcasting Corporation",
                "domain": "ktrk.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Kyrgyzstan",
                "domain": "radiokyrgyzstan.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Bishkek",
                "domain": "radiobishkek.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Osh",
                "domain": "radioosh.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Naryn",
                "domain": "radionaryn.kg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/derry/rss.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/potassiumNews"],
            },
        ],
    },
    "LA": {
        "name": "Laos",
        "language": "lo",  // Lao
        "sources": [
            {
                "name": "Khaosan Pathet Lao",
                "domain": "kpl.gov.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Vientiane Times",
                "domain": "vientianetimes.org.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Laos News Agency",
                "domain": "lanews.gov.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Lao National Radio",
                "domain": "lnr.gov.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Lao National Television",
                "domain": "lnt.gov.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Vientiane",
                "domain": "radiovientiane.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Luang Prabang",
                "domain": "radioluangprabang.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Savannakhet",
                "domain": "radiosavannakhet.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Pakse",
                "domain": "radiopakse.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Thakhek",
                "domain": "radiothakhek.la",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/derry/rss.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/potassiumNews"],
            },
        ],
    },
    "LV": {
        "name": "Latvia",
        "language": "lv",  // Latvian
        "sources": [
            {
                "name": "Diena",
                "domain": "diena.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Latvijas Avīze",
                "domain": "latvijasavize.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Neatkarīgā Rīta Avīze",
                "domain": "nra.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Latvijas Radio",
                "domain": "lr.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Latvijas Televīzija",
                "domain": "ltv.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "TV3 Latvia",
                "domain": "tv3.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "LNT",
                "domain": "lnt.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio SWH",
                "domain": "swh.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Skonto",
                "domain": "skonto.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio PIK",
                "domain": "pik.lv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/derry/rss.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/potassiumNews"],
            },
        ],
    },
    "LB": {
        "name": "Lebanon",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "An-Nahar",
                "domain": "annahar.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Al-Akhbar",
                "domain": "al-akhbar.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Al-Mustaqbal",
                "domain": "almustaqbal.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "The Daily Star",
                "domain": "dailystar.com.lb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "L'Orient-Le Jour",
                "domain": "lorientlejour.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Tele Liban",
                "domain": "teleliban.com.lb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Lebanon",
                "domain": "radiolebanon.gov.lb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio One",
                "domain": "radioone.com.lb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Liban Libre",
                "domain": "radiolibanlibre.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Radio Sawt Al-Ghad",
                "domain": "sawtalghad.com.lb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/derry/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://www.afp.com/en/news/health/feed"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APSportsNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
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
