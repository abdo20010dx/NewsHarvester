
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
News sources for countries chunk 2

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "AZ": {
        "name": "Azerbaijan",
        "language": "az",  // Azerbaijani
        "sources": [
            {
                "name": "AzTV",
                "domain": "aztv.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "ANS TV",
                "domain": "ans.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Azərbaycan 24",
                "domain": "azerbaycan24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Report.az",
                "domain": "report.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "APA.az",
                "domain": "apa.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Trend.az",
                "domain": "trend.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "AzərTac",
                "domain": "azertag.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Xalq Qəzeti",
                "domain": "xalqqazeti.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Yeni Azərbaycan",
                "domain": "yeniazerbaycan.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Azərbaycan Dövlət İnformasiya Agentliyi",
                "domain": "azertac.az",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BS": {
        "name": "Bahamas",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Nassau Guardian",
                "domain": "thenassauguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "The Tribune",
                "domain": "tribune242.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahamas News Network",
                "domain": "bahamasnews.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahamas Local",
                "domain": "bahamaslocal.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahamas Chronicle",
                "domain": "bahamaschronicle.com",
                "rss_feeds": ["https://bahamaschronicle.com/feed/"],
            },
            {
                "name": "Caribbean News Now",
                "domain": "caribbeannewsnow.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml/technology"],
            },
            {
                "name": "Caribbean Media Corporation",
                "domain": "cmc.bb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Caribbean 360",
                "domain": "caribbean360.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Loop Caribbean News",
                "domain": "loopnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Caribbean Journal",
                "domain": "caribjournal.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BH": {
        "name": "Bahrain",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Al-Wasat",
                "domain": "alwasatnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Al-Ayam",
                "domain": "alayam.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Akhbar Al Khaleej",
                "domain": "akhbar-alkhaleej.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahrain News Agency",
                "domain": "bna.bh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Gulf Daily News",
                "domain": "gulf-daily-news.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahrain Mirror",
                "domain": "bahrainmirror.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Al-Bilad",
                "domain": "albiladpress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Al-Watan",
                "domain": "alwatannews.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahrain This Week",
                "domain": "bahrainthisweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bahrain Confidential",
                "domain": "bahrainconfidential.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml/world"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.afp.com/en/news/world/feed"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/ar/news/feed"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/arabic/rss/world.xml"],
            },
        ],
    },
    "BD": {
        "name": "Bangladesh",
        "language": "bn",  // Bengali
        "sources": [
            {
                "name": "Prothom Alo",
                "domain": "prothomalo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "The Daily Star",
                "domain": "thedailystar.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Dhaka Tribune",
                "domain": "dhakatribune.com",
                "rss_feeds": ["https://www.dhakatribune.com/feed/"],
            },
            {
                "name": "New Age",
                "domain": "newagebd.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "The Independent",
                "domain": "theindependentbd.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bangladesh Sangbad Sangstha",
                "domain": "bssnews.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "United News of Bangladesh",
                "domain": "unb.com.bd",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bangla News 24",
                "domain": "banglanews24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "NTV Online",
                "domain": "ntvbd.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Channel 24",
                "domain": "channel24bd.tv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BB": {
        "name": "Barbados",
        "language": "en",  // English
        "sources": [
            {
                "name": "Nation News",
                "domain": "nationnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Barbados Today",
                "domain": "barbadostoday.bb",
                "rss_feeds": ["https://barbadostoday.bb/feed/"],
            },
            {
                "name": "The Barbados Advocate",
                "domain": "barbadosadvocate.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Caribbean Broadcasting Corporation",
                "domain": "cbc.bb",
                "rss_feeds": ["https://www.cbc.bb/feed/"],
            },
            {
                "name": "Caribbean News Now",
                "domain": "caribbeannewsnow.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml/technology"],
            },
            {
                "name": "Caribbean Media Corporation",
                "domain": "cmc.bb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Caribbean 360",
                "domain": "caribbean360.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Loop Caribbean News",
                "domain": "loopnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Caribbean Life News",
                "domain": "caribbeanlifenews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/business/rss.xml"],
            },
            {
                "name": "Caribbean Journal",
                "domain": "caribjournal.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BY": {
        "name": "Belarus",
        "language": "be",  // Belarusian
        "sources": [
            {
                "name": "Belta",
                "domain": "belta.by",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "TUT.BY",
                "domain": "tut.by",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Onliner",
                "domain": "onliner.by",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Naviny.by",
                "domain": "naviny.by",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Charter 97",
                "domain": "charter97.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Nasha Niva",
                "domain": "nn.by",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Belsat",
                "domain": "belsat.eu",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Radio Free Europe",
                "domain": "svaboda.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Euroradio",
                "domain": "euroradio.fm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Radio Liberty",
                "domain": "svaboda.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BE": {
        "name": "Belgium",
        "language": "nl",  // Dutch
        "sources": [
            {
                "name": "VRT Nieuws",
                "domain": "vrt.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "De Standaard",
                "domain": "standaard.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Het Laatste Nieuws",
                "domain": "hln.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "De Morgen",
                "domain": "demorgen.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Het Nieuwsblad",
                "domain": "nieuwsblad.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Gazet van Antwerpen",
                "domain": "gva.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Het Belang van Limburg",
                "domain": "hbvl.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "RTBF",
                "domain": "rtbf.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Le Soir",
                "domain": "lesoir.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "La Libre Belgique",
                "domain": "lalibre.be",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BZ": {
        "name": "Belize",
        "language": "en",  // English
        "sources": [
            {
                "name": "The San Pedro Sun",
                "domain": "sanpedrosun.com",
                "rss_feeds": ["https://www.sanpedrosun.com/feed/"],
            },
            {
                "name": "Amandala",
                "domain": "amandala.com.bz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "The Reporter",
                "domain": "reporter.bz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Breaking Belize News",
                "domain": "breakingbelizenews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Love FM",
                "domain": "lovefm.com",
                "rss_feeds": ["https://lovefm.com/feed/"],
            },
            {
                "name": "Caribbean News Now",
                "domain": "caribbeannewsnow.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml/technology"],
            },
            {
                "name": "Caribbean Media Corporation",
                "domain": "cmc.bb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Caribbean 360",
                "domain": "caribbean360.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Loop Caribbean News",
                "domain": "loopnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Caribbean Journal",
                "domain": "caribjournal.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BJ": {
        "name": "Benin",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Agence Bénin Presse",
                "domain": "abp.bj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "La Nation",
                "domain": "lanationbenin.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Le Matinal",
                "domain": "lematinal.bj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Fraternité",
                "domain": "fraternitebj.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "L'Événement Précis",
                "domain": "levenementprecis.com",
                "rss_feeds": ["https://levenementprecis.com/feed/"],
            },
            {
                "name": "24 Heures au Bénin",
                "domain": "24haubenin.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bénin Web TV",
                "domain": "beninwebtv.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "ORTB",
                "domain": "ortb.bj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Radio Bénin",
                "domain": "radiobenin.bj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Télé Bénin",
                "domain": "telebenin.bj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
            },
        ],
    },
    "BT": {
        "name": "Bhutan",
        "language": "dz",  // Dzongkha
        "sources": [
            {
                "name": "Kuensel",
                "domain": "kuenselonline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bhutan Broadcasting Service",
                "domain": "bbs.bt",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "The Bhutanese",
                "domain": "thebhutanese.bt",
                "rss_feeds": ["https://thebhutanese.bt/feed/"],
            },
            {
                "name": "Business Bhutan",
                "domain": "businessbhutan.bt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bhutan Times",
                "domain": "bhutantimes.bt",
                "rss_feeds": ["https://bhutantimes.bt/feed/"],
            },
            {
                "name": "Bhutan Observer",
                "domain": "bhutanobserver.bt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Drukpa",
                "domain": "drukpa.bt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Bhutan News Network",
                "domain": "bbs.bt",
                "rss_feeds": ["https://feeds.ap.org/ap/APTechnologyNews"],
            },
            {
                "name": "Radio Valley",
                "domain": "radiovalley.bt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Centennial Radio",
                "domain": "centennialradio.bt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/health.xml"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/americiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bondsNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tariffsNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/edinburgh/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/augmentedRealityNews"],
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
