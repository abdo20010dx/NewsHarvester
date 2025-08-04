
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
News sources for countries chunk 17

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "SS": {
        "name": "South Sudan",
        "language": "en",  // English
        "sources": [
            {
                "name": "Eye Radio",
                "domain": "eyeradio.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Radio Miraya",
                "domain": "radiomiraya.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan News Agency",
                "domain": "ssna.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sudan Tribune",
                "domain": "sudantribune.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan News",
                "domain": "southsudannews.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan Times",
                "domain": "southsudantimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan Herald",
                "domain": "southsudanherald.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan Observer",
                "domain": "southsudanobserver.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan Daily",
                "domain": "southsudandaily.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "South Sudan Press",
                "domain": "southsudanpress.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Scientific American",
                "domain": "scientificamerican.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Nature",
                "domain": "nature.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Science",
                "domain": "science.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "New Scientist",
                "domain": "newscientist.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Popular Science",
                "domain": "popsci.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Wired",
                "domain": "wired.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tradeNews"],
            },
            {
                "name": "MIT Technology Review",
                "domain": "technologyreview.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "Ars Technica",
                "domain": "arstechnica.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
            {
                "name": "The Verge",
                "domain": "theverge.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "TechCrunch",
                "domain": "techcrunch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
        ],
    },
    "ES": {
        "name": "Spain",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Pais",
                "domain": "elpais.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "ABC",
                "domain": "abc.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "La Vanguardia",
                "domain": "lavanguardia.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "El Periodico",
                "domain": "elperiodico.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "20 Minutos",
                "domain": "20minutos.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "El Confidencial",
                "domain": "elconfidencial.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "RTVE",
                "domain": "rtve.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "EFE",
                "domain": "efe.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Agencia EFE",
                "domain": "efe.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "El País",
                "domain": "elpais.com",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/tradeNews"
                ],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.es",
                "rss_feeds": [
                    "https://www.afp.com/en/news/health/feed"
                ],
            },
            {
                "name": "ABC España",
                "domain": "abc.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment/feeds/abc_Internacional.xml"],
            },
            {
                "name": "La Vanguardia",
                "domain": "lavanguardia.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment/internacional.xml"],
            },
            {
                "name": "El Periódico",
                "domain": "elperiodico.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "20 Minutos",
                "domain": "20minutos.es",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment/internacional/"],
            },
            {
                "name": "Público",
                "domain": "publico.es",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/education.xml"],
            },
            {
                "name": "La Razón",
                "domain": "larazon.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "El Confidencial",
                "domain": "elconfidencial.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment/internacional/"],
            },
            {
                "name": "El Independiente",
                "domain": "elindependiente.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
        ],
    },
    "LK": {
        "name": "Sri Lanka",
        "language": "si",  // Sinhala
        "sources": [
            {
                "name": "Daily News",
                "domain": "dailynews.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "The Island",
                "domain": "island.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sunday Observer",
                "domain": "sundayobserver.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Daily Mirror",
                "domain": "dailymirror.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Lanka Business Online",
                "domain": "lankabusinessonline.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sri Lanka Broadcasting Corporation",
                "domain": "slbc.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "News First",
                "domain": "newsfirst.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Ada Derana",
                "domain": "adaderana.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Hiru News",
                "domain": "hirunews.lk",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Lanka News Web",
                "domain": "lankanewsweb.net",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Scientific American",
                "domain": "scientificamerican.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Nature",
                "domain": "nature.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Science",
                "domain": "science.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "New Scientist",
                "domain": "newscientist.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Popular Science",
                "domain": "popsci.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Wired",
                "domain": "wired.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tradeNews"],
            },
            {
                "name": "MIT Technology Review",
                "domain": "technologyreview.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "Ars Technica",
                "domain": "arstechnica.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
            {
                "name": "The Verge",
                "domain": "theverge.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "TechCrunch",
                "domain": "techcrunch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
        ],
    },
    "SD": {
        "name": "Sudan",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Sudan News Agency",
                "domain": "suna-sd.net",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Al-Sudani",
                "domain": "alsudani.info",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Al-Rayaam",
                "domain": "rayaam.info",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Al-Ahdath",
                "domain": "alahdath.net",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sudan Tribune",
                "domain": "sudantribune.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Radio Omdurman",
                "domain": "radioomdurman.net",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sudan Vision",
                "domain": "sudanvisiondaily.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sudan Times",
                "domain": "sudantimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sudan Herald",
                "domain": "sudanherald.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sudan Observer",
                "domain": "sudanobserver.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.ap.org/ap/APArtsNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/scotland/rss.xml"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/health/feed"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
        ],
    },
    "SR": {
        "name": "Suriname",
        "language": "nl",  // Dutch
        "sources": [
            {
                "name": "De Ware Tijd",
                "domain": "dwtonline.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Herald",
                "domain": "surinameherald.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Starnieuws",
                "domain": "starnieuws.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Times",
                "domain": "surinametimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname News",
                "domain": "surinamenews.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Broadcasting Corporation",
                "domain": "sbc.sr",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Daily",
                "domain": "surinamedaily.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Press",
                "domain": "surinamepress.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Observer",
                "domain": "surinameobserver.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Suriname Tribune",
                "domain": "surinametribune.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "NRC Handelsblad",
                "domain": "nrc.nl",
                "rss_feeds": ["https://www.nrc.nl/feed/"],
            },
            {
                "name": "De Volkskrant",
                "domain": "volkskrant.nl",
                "rss_feeds": ["https://www.volkskrant.nl/feed/"],
            },
            {
                "name": "Trouw",
                "domain": "trouw.nl",
                "rss_feeds": ["https://www.trouw.nl/feed/"],
            },
            {
                "name": "Het Parool",
                "domain": "parool.nl",
                "rss_feeds": ["https://www.parool.nl/feed/"],
            },
            {
                "name": "Algemeen Dagblad",
                "domain": "ad.nl",
                "rss_feeds": ["https://www.ad.nl/feed/"],
            },
            {
                "name": "Nederlandse Publieke Omroep",
                "domain": "npostart.nl",
                "rss_feeds": ["https://www.npostart.nl/feed/"],
            },
            {"name": "NOS", "domain": "nos.nl", "rss_feeds": ["https://nos.nl/feed/"]},
            {
                "name": "Radio 1",
                "domain": "radio1.nl",
                "rss_feeds": ["https://radio1.nl/feed/"],
            },
            {
                "name": "Radio 2",
                "domain": "radio2.nl",
                "rss_feeds": ["https://radio2.nl/feed/"],
            },
            {
                "name": "Radio 3FM",
                "domain": "3fm.nl",
                "rss_feeds": ["https://3fm.nl/feed/"],
            },
        ],
    },
    "SE": {
        "name": "Sweden",
        "language": "sv",  // Swedish
        "sources": [
            {
                "name": "Dagens Nyheter",
                "domain": "dn.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Svenska Dagbladet",
                "domain": "svd.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Aftonbladet",
                "domain": "aftonbladet.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Expressen",
                "domain": "expressen.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Göteborgs-Posten",
                "domain": "gp.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "SVT Nyheter",
                "domain": "svt.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sveriges Radio",
                "domain": "sverigesradio.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "TT Nyhetsbyran",
                "domain": "tt.se",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Sydsvenskan",
                "domain": "sydsvenskan.se",
                "rss_feeds": ["https://www.sydsvenskan.se/rss"],
            },
            {
                "name": "Dagens Industri",
                "domain": "di.se",
                "rss_feeds": ["https://www.di.se/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Scientific American",
                "domain": "scientificamerican.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Nature",
                "domain": "nature.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Science",
                "domain": "science.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "New Scientist",
                "domain": "newscientist.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Popular Science",
                "domain": "popsci.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Wired",
                "domain": "wired.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tradeNews"],
            },
            {
                "name": "MIT Technology Review",
                "domain": "technologyreview.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "Ars Technica",
                "domain": "arstechnica.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
            {
                "name": "The Verge",
                "domain": "theverge.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "TechCrunch",
                "domain": "techcrunch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
        ],
    },
    "CH": {
        "name": "Switzerland",
        "language": "de",  // German (primary)
        "sources": [
            {
                "name": "Neue Zurcher Zeitung",
                "domain": "nzz.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tages-Anzeiger",
                "domain": "tagesanzeiger.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Blick",
                "domain": "blick.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Le Temps",
                "domain": "letemps.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Corriere del Ticino",
                "domain": "cdt.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Swiss Broadcasting Corporation",
                "domain": "swissinfo.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "SRF",
                "domain": "srf.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "RTS",
                "domain": "rts.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "RSI",
                "domain": "rsi.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "ATS",
                "domain": "ats.ch",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Der Spiegel",
                "domain": "spiegel.de",
                "rss_feeds": ["https://www.spiegel.de/international/index.rss"],
            },
            {
                "name": "Die Zeit",
                "domain": "zeit.de",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Süddeutsche Zeitung",
                "domain": "sueddeutsche.de",
                "rss_feeds": ["https://rss.sueddeutsche.de/rss/Topthemen"],
            },
            {
                "name": "Frankfurter Allgemeine",
                "domain": "faz.net",
                "rss_feeds": ["https://www.faz.net/rss/aktuell/"],
            },
            {
                "name": "Die Welt",
                "domain": "welt.de",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tagesschau",
                "domain": "tagesschau.de",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "ARD",
                "domain": "ard.de",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "ZDF",
                "domain": "zdf.de",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Bild",
                "domain": "bild.de",
                "rss_feeds": [
                    "https://www.euronews.com/rss/entertainment"
                ],
            },
        ],
    },
    "SY": {
        "name": "Syria",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Syrian Arab News Agency",
                "domain": "sana.sy",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Al-Watan",
                "domain": "alwatan.sy",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tishreen",
                "domain": "tishreen.news.sy",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Al-Baath",
                "domain": "albaath.news.sy",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Syria Times",
                "domain": "syriatimes.sy",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Syria News",
                "domain": "syrianews.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Syria Herald",
                "domain": "syriaherald.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Syria Observer",
                "domain": "syriaobserver.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Syria Daily",
                "domain": "syriadaily.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Syria Press",
                "domain": "syriapress.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.ap.org/ap/APArtsNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/scotland/rss.xml"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/health/feed"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
        ],
    },
    "TW": {
        "name": "Taiwan",
        "language": "zh",  // Chinese (Traditional)
        "sources": [
            {
                "name": "Central News Agency",
                "domain": "cna.com.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Taipei Times",
                "domain": "taipeitimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "China Times",
                "domain": "chinatimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Liberty Times",
                "domain": "ltn.com.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Apple Daily Taiwan",
                "domain": "appledaily.com.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "United Daily News",
                "domain": "udn.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Taiwan News",
                "domain": "taiwannews.com.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Public Television Service",
                "domain": "pts.org.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Taiwan Broadcasting System",
                "domain": "tbs.org.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Focus Taiwan",
                "domain": "focustaiwan.tw",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Scientific American",
                "domain": "scientificamerican.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Nature",
                "domain": "nature.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Science",
                "domain": "science.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "New Scientist",
                "domain": "newscientist.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Popular Science",
                "domain": "popsci.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Wired",
                "domain": "wired.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tradeNews"],
            },
            {
                "name": "MIT Technology Review",
                "domain": "technologyreview.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "Ars Technica",
                "domain": "arstechnica.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
            {
                "name": "The Verge",
                "domain": "theverge.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "TechCrunch",
                "domain": "techcrunch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
        ],
    },
    "TJ": {
        "name": "Tajikistan",
        "language": "tg",  // Tajik
        "sources": [
            {
                "name": "Khovar",
                "domain": "khovar.tj",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Asia Plus",
                "domain": "asiaplustj.info",
                "rss_feeds": ["https://www.asiaplustj.info/rss"],
            },
            {
                "name": "Avesta",
                "domain": "avesta.tj",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan News",
                "domain": "tajikistannews.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan Times",
                "domain": "tajikistantimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan Herald",
                "domain": "tajikistanherald.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan Observer",
                "domain": "tajikistanobserver.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan Daily",
                "domain": "tajikistandaily.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan Press",
                "domain": "tajikistanpress.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Tajikistan Tribune",
                "domain": "tajikistantribune.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Scientific American",
                "domain": "scientificamerican.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Nature",
                "domain": "nature.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Science",
                "domain": "science.org",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "New Scientist",
                "domain": "newscientist.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Popular Science",
                "domain": "popsci.com",
                "rss_feeds": ["https://www.euronews.com/rss/entertainment"],
            },
            {
                "name": "Wired",
                "domain": "wired.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/tradeNews"],
            },
            {
                "name": "MIT Technology Review",
                "domain": "technologyreview.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "Ars Technica",
                "domain": "arstechnica.com",
                "rss_feeds": ["https://www.france24.com/en/politics/rss"],
            },
            {
                "name": "The Verge",
                "domain": "theverge.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
            },
            {
                "name": "TechCrunch",
                "domain": "techcrunch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/uraniumNews"],
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
