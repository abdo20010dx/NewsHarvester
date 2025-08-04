
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
News sources for countries chunk 10

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "JM": {
        "name": "Jamaica",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Gleaner",
                "domain": "jamaica-gleaner.com",
                "rss_feeds": ["https://jamaica-gleaner.com/feed/"],
            },
            {
                "name": "The Jamaica Observer",
                "domain": "jamaicaobserver.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Jamaica Information Service",
                "domain": "jis.gov.jm",
                "rss_feeds": ["https://jis.gov.jm/feed/"],
            },
            {
                "name": "Radio Jamaica",
                "domain": "radiojamaica.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Nationwide Radio",
                "domain": "nationwideradiojm.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Power 106 FM",
                "domain": "power106.com",
                "rss_feeds": ["https://www.power106.com/feed/"],
            },
            {
                "name": "Irie FM",
                "domain": "iriefm.net",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Hot 102 FM",
                "domain": "hot102fm.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Fame FM",
                "domain": "famefm.net",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Zip FM",
                "domain": "zipfm.net",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APPoliticsNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/world/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/restructuringNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nuclearNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
        ],
    },
    "JP": {
        "name": "Japan",
        "language": "ja",  // Japanese
        "sources": [
            {
                "name": "Yomiuri Shimbun",
                "domain": "yomiuri.co.jp",
                "rss_feeds": ["https://www.yomiuri.co.jp/feed/"],
            },
            {
                "name": "Asahi Shimbun",
                "domain": "asahi.com",
                "rss_feeds": ["https://www.asahi.com/feed/"],
            },
            {
                "name": "Mainichi Shimbun",
                "domain": "mainichi.jp",
                "rss_feeds": ["https://mainichi.jp/feed/"],
            },
            {
                "name": "Nikkei",
                "domain": "nikkei.com",
                "rss_feeds": ["https://www.nikkei.com/feed/"],
            },
            {
                "name": "NHK",
                "domain": "nhk.or.jp",
                "rss_feeds": ["https://www.nhk.or.jp/feed/"],
            },
            {
                "name": "NHK Radio 1",
                "domain": "nhk.or.jp/radio1",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "NHK Radio 2",
                "domain": "nhk.or.jp/radio2",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "NHK FM",
                "domain": "nhk.or.jp/fm",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "TBS Radio",
                "domain": "tbsradio.jp",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "J-Wave",
                "domain": "j-wave.co.jp",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APPoliticsNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/world/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/restructuringNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nuclearNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
        ],
    },
    "JO": {
        "name": "Jordan",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Jordan Times",
                "domain": "jordantimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Al-Rai",
                "domain": "alrai.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Ad-Dustour",
                "domain": "addustour.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Jordan Radio and Television Corporation",
                "domain": "jrtv.gov.jo",
                "rss_feeds": ["https://www.jrtv.gov.jo/feed/"],
            },
            {
                "name": "Radio Jordan",
                "domain": "radiojordan.jo",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Amman",
                "domain": "radioamman.jo",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Al-Balad",
                "domain": "radiobalad.jo",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Fann",
                "domain": "radiofann.jo",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Hala",
                "domain": "radiohala.jo",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Rotana",
                "domain": "radiorotana.jo",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/solarNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.afp.com/en/news/business/feed"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
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
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/business/feed"],
            },
        ],
    },
    "KZ": {
        "name": "Kazakhstan",
        "language": "kk",  // Kazakh
        "sources": [
            {
                "name": "Kazinform",
                "domain": "inform.kz",
                "rss_feeds": ["https://www.inform.kz/feed/"],
            },
            {
                "name": "Kazakhstan Today",
                "domain": "kt.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Tengrinews",
                "domain": "tengrinews.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Khabar Agency",
                "domain": "khabar.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Kazakh Radio",
                "domain": "kazakhradio.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Kazakhstan",
                "domain": "radiokazakhstan.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Astana",
                "domain": "radioastana.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Almaty",
                "domain": "radioalmaty.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Shymkent",
                "domain": "radioshymkent.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Aktobe",
                "domain": "radioaktobe.kz",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APPoliticsNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/world/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/restructuringNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nuclearNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
        ],
    },
    "KE": {
        "name": "Kenya",
        "language": "en",  // English
        "sources": [
            {
                "name": "Daily Nation",
                "domain": "nation.co.ke",
                "rss_feeds": ["https://nation.co.ke/feed/"],
            },
            {
                "name": "The Standard",
                "domain": "standardmedia.co.ke",
                "rss_feeds": ["https://www.standardmedia.co.ke/feed/"],
            },
            {
                "name": "The Star",
                "domain": "the-star.co.ke",
                "rss_feeds": ["https://www.the-star.co.ke/feed/"],
            },
            {
                "name": "Kenya Broadcasting Corporation",
                "domain": "kbc.co.ke",
                "rss_feeds": ["https://www.kbc.co.ke/feed/"],
            },
            {
                "name": "Radio Kenya",
                "domain": "radiokenya.ke",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Jambo",
                "domain": "radiojambo.co.ke",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Citizen",
                "domain": "citizentv.co.ke",
                "rss_feeds": ["https://citizentv.co.ke/feed/"],
            },
            {
                "name": "Radio Maisha",
                "domain": "radiomaisha.co.ke",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Taifa",
                "domain": "radiotaifa.ke",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Inooro",
                "domain": "radioinooro.ke",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APPoliticsNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/world/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/restructuringNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nuclearNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
            },
        ],
    },
    "KI": {
        "name": "Kiribati",
        "language": "en",  // English
        "sources": [
            {
                "name": "Kiribati Broadcasting and Publications Authority",
                "domain": "kbpa.gov.ki",
                "rss_feeds": ["https://www.kbpa.gov.ki/feed/"],
            },
            {
                "name": "Radio Kiribati",
                "domain": "radiokiribati.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Tarawa",
                "domain": "radiotarawa.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Betio",
                "domain": "radiobetio.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Abaiang",
                "domain": "radioabaiang.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Maiana",
                "domain": "radiomaiana.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Abemama",
                "domain": "radioabemama.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Nonouti",
                "domain": "radiononouti.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Tabiteuea",
                "domain": "radiotabiteuea.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Radio Beru",
                "domain": "radioberu.ki",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APPoliticsNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/world/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/restructuringNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/business.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nuclearNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bohriumNews"],
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
