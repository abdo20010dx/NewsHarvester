
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
News sources for countries chunk 18

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "TZ": {
        "name": "Tanzania",
        "language": "sw",  // Swahili
        "sources": [
            {
                "name": "The Citizen",
                "domain": "thecitizen.co.tz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Daily News",
                "domain": "dailynews.co.tz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "The Guardian",
                "domain": "ippmedia.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Mwananchi",
                "domain": "mwananchi.co.tz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tanzania Broadcasting Corporation",
                "domain": "tbc.go.tz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tanzania News Agency",
                "domain": "tanzania.go.tz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tanzania Times",
                "domain": "tanzaniatimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tanzania Herald",
                "domain": "tanzaniaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tanzania Observer",
                "domain": "tanzaniaobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tanzania Daily",
                "domain": "tanzaniadaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TH": {
        "name": "Thailand",
        "language": "th",  // Thai
        "sources": [
            {
                "name": "Bangkok Post",
                "domain": "bangkokpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "The Nation",
                "domain": "nationthailand.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Thai PBS",
                "domain": "thaipbs.or.th",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Thai News Agency",
                "domain": "tna.mcot.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Khaosod English",
                "domain": "khaosodenglish.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Prachatai",
                "domain": "prachatai.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Thai Rath",
                "domain": "thairath.co.th",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Matichon",
                "domain": "matichon.co.th",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Daily News",
                "domain": "dailynews.co.th",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Kom Chad Luek",
                "domain": "komchadluek.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TL": {
        "name": "Timor-Leste",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Timor Post",
                "domain": "timorpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Suara Timor Lorosae",
                "domain": "suaratimorlorosae.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste News",
                "domain": "timorleste.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Times",
                "domain": "timorlestetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Herald",
                "domain": "timorlesteherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Observer",
                "domain": "timorlesteobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Daily",
                "domain": "timorlestedaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Press",
                "domain": "timorlestepress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Tribune",
                "domain": "timorlestetribune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Timor-Leste Broadcasting Corporation",
                "domain": "rtl.tl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TG": {
        "name": "Togo",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Togo Presse",
                "domain": "togopresse.tg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Republic of Togo",
                "domain": "republicoftogo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo News",
                "domain": "togonews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Times",
                "domain": "togotimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Herald",
                "domain": "togoherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Observer",
                "domain": "togoobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Daily",
                "domain": "togodaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Press",
                "domain": "togopress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Tribune",
                "domain": "togotribune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Togo Broadcasting Corporation",
                "domain": "tbc.tg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TO": {
        "name": "Tonga",
        "language": "en",  // English
        "sources": [
            {
                "name": "Tonga Broadcasting Commission",
                "domain": "tbc.to",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Matangi Tonga",
                "domain": "matangitonga.to",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga News",
                "domain": "tonganews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Times",
                "domain": "tongatimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Herald",
                "domain": "tongaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Observer",
                "domain": "tongaobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Daily",
                "domain": "tongadaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Press",
                "domain": "tongapress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Tribune",
                "domain": "tongatribune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tonga Government",
                "domain": "tonga.gov.to",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TT": {
        "name": "Trinidad and Tobago",
        "language": "en",  // English
        "sources": [
            {
                "name": "Trinidad and Tobago Newsday",
                "domain": "newsday.co.tt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad Express",
                "domain": "trinidadexpress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad Guardian",
                "domain": "guardian.co.tt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago Broadcasting Corporation",
                "domain": "ttbc.org.tt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago News",
                "domain": "ttnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago Times",
                "domain": "tttimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago Herald",
                "domain": "ttherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago Observer",
                "domain": "ttobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago Daily",
                "domain": "ttdaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Trinidad and Tobago Press",
                "domain": "ttpress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TN": {
        "name": "Tunisia",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Tunis Afrique Presse",
                "domain": "tap.info.tn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Al-Sabah",
                "domain": "assabah.com.tn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Al-Chourouk",
                "domain": "alchourouk.com",
                "rss_feeds": ["https://www.alchourouk.com/rss"],
            },
            {
                "name": "Al-Akhbar",
                "domain": "alakhbar.tn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tunisia News",
                "domain": "tunisianews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tunisia Times",
                "domain": "tunisiatimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tunisia Herald",
                "domain": "tunisiaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tunisia Observer",
                "domain": "tunisiaobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tunisia Daily",
                "domain": "tunisiadaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tunisia Press",
                "domain": "tunisiapress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
        ],
    },
    "TR": {
        "name": "Turkey",
        "language": "tr",  // Turkish
        "sources": [
            {
                "name": "Anadolu Agency",
                "domain": "aa.com.tr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Hurriyet",
                "domain": "hurriyet.com.tr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Milliyet",
                "domain": "milliyet.com.tr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Sabah",
                "domain": "sabah.com.tr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Cumhuriyet",
                "domain": "cumhuriyet.com.tr",
                "rss_feeds": ["https://www.cumhuriyet.com.tr/rss"],
            },
            {
                "name": "TRT Haber",
                "domain": "trthaber.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "NTV",
                "domain": "ntv.com.tr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN Turk",
                "domain": "cnnturk.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Haberturk",
                "domain": "haberturk.com",
                "rss_feeds": ["https://www.haberturk.com/rss"],
            },
            {
                "name": "Sozcu",
                "domain": "sozcu.com.tr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TM": {
        "name": "Turkmenistan",
        "language": "tk",  // Turkmen
        "sources": [
            {
                "name": "Turkmenistan State News Agency",
                "domain": "tdh.gov.tm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan News",
                "domain": "turkmenistannews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Times",
                "domain": "turkmenistantimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Herald",
                "domain": "turkmenistanherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Observer",
                "domain": "turkmenistanobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Daily",
                "domain": "turkmenistandaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Press",
                "domain": "turkmenistanpress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Tribune",
                "domain": "turkmenistantribune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Broadcasting",
                "domain": "tmb.gov.tm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Turkmenistan Radio",
                "domain": "radio.gov.tm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "TV": {
        "name": "Tuvalu",
        "language": "en",  // English
        "sources": [
            {
                "name": "Tuvalu Broadcasting Corporation",
                "domain": "tbc.tv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu News",
                "domain": "tuvalunews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Times",
                "domain": "tuvalutimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Herald",
                "domain": "tuvaluherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Observer",
                "domain": "tuvaluobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Daily",
                "domain": "tuvaludaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Press",
                "domain": "tuvalupress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Tribune",
                "domain": "tuvalutribune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Government",
                "domain": "tuvalu.gov.tv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "Tuvalu Pacific",
                "domain": "tuvalupacific.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/importNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-en-all/science"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/dundee/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neonNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/chromiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berkeliumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nihoniumNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
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
