
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
News sources for countries chunk 9

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "IN": {
        "name": "India",
        "language": "hi",  // Hindi
        "sources": [
            {
                "name": "The Times of India",
                "domain": "timesofindia.indiatimes.com",
                "rss_feeds": [
                    "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
                ],
            },
            {
                "name": "The Hindu",
                "domain": "thehindu.com",
                "rss_feeds": ["https://www.thehindu.com/news/national/?service=rss"],
            },
            {
                "name": "Hindustan Times",
                "domain": "hindustantimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "The Indian Express",
                "domain": "indianexpress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "NDTV",
                "domain": "ndtv.com",
                "rss_feeds": ["https://feeds.feedburner.com/ndtvnews-top-stories"],
            },
            {
                "name": "Doordarshan",
                "domain": "ddnews.gov.in",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "All India Radio",
                "domain": "newsonair.gov.in",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Zee News",
                "domain": "zeenews.india.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Times Now",
                "domain": "timesnownews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "CNN-News18",
                "domain": "news18.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "ID": {
        "name": "Indonesia",
        "language": "id",  // Indonesian
        "sources": [
            {
                "name": "Kompas",
                "domain": "kompas.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Detik",
                "domain": "detik.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Tempo",
                "domain": "tempo.co",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Antara",
                "domain": "antaranews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Republika",
                "domain": "republika.co.id",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "TVRI",
                "domain": "tvri.go.id",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "RRI",
                "domain": "rri.co.id",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Metro TV",
                "domain": "metrotvnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "SCTV",
                "domain": "liputan6.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "RCTI",
                "domain": "rctiplus.id",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "IR": {
        "name": "Iran",
        "language": "fa",  // Persian
        "sources": [
            {
                "name": "Islamic Republic News Agency",
                "domain": "irna.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Tehran Times",
                "domain": "tehrantimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Iran Daily",
                "domain": "iran-daily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Islamic Republic of Iran Broadcasting",
                "domain": "irib.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Iran",
                "domain": "radioiran.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Tehran",
                "domain": "radiotehran.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Isfahan",
                "domain": "radioisfahan.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Mashhad",
                "domain": "radiomashhad.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Shiraz",
                "domain": "radioshiraz.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Tabriz",
                "domain": "radiotabriz.ir",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Persian",
                "domain": "bbc.com/persian",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Voice of America Persian",
                "domain": "voanews.com",
                "rss_feeds": ["https://www.voanews.com/api/zq$omekvi_"],
            },
            {
                "name": "Radio Free Europe Persian",
                "domain": "rferl.org",
                "rss_feeds": ["https://www.rferl.org/api/zq$omekvi_"],
            },
            {
                "name": "Deutsche Welle Persian",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "France 24 Persian",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Al Jazeera Persian",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-culture"],
            },
            {
                "name": "Reuters Middle East",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "IQ": {
        "name": "Iraq",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Iraqi News Agency",
                "domain": "ina.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Al-Sabah",
                "domain": "alsabaah.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Al-Zaman",
                "domain": "azzaman.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Al-Mada",
                "domain": "almadapaper.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Iraqi Media Network",
                "domain": "imn.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Iraq",
                "domain": "radioiraq.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Baghdad",
                "domain": "radiobaghdad.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Basra",
                "domain": "radiobasra.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Mosul",
                "domain": "radiomosul.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Najaf",
                "domain": "radionajaf.iq",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-culture"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/telecomsNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
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
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/uk/rss.xml"],
            },
        ],
    },
    "IE": {
        "name": "Ireland",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Irish Times",
                "domain": "irishtimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Irish Independent",
                "domain": "independent.ie",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "The Irish Examiner",
                "domain": "irishexaminer.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "RTÉ",
                "domain": "rte.ie",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Virgin Media Television",
                "domain": "virginmediatelevision.ie",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "TG4",
                "domain": "tg4.ie",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Newstalk",
                "domain": "newstalk.com",
                "rss_feeds": ["https://www.newstalk.com/feed/"],
            },
            {
                "name": "Today FM",
                "domain": "todayfm.com",
                "rss_feeds": ["https://www.todayfm.com/feed/"],
            },
            {
                "name": "Radio 1",
                "domain": "rte.ie/radio1",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "2FM",
                "domain": "rte.ie/2fm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "IL": {
        "name": "Israel",
        "language": "he",  // Hebrew
        "sources": [
            {
                "name": "Yedioth Ahronoth",
                "domain": "ynetnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Haaretz",
                "domain": "haaretz.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "The Jerusalem Post",
                "domain": "jpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Israel Broadcasting Corporation",
                "domain": "kan.org.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Galei Tzahal",
                "domain": "glz.co.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Kol Israel",
                "domain": "kolisrael.co.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Tel Aviv",
                "domain": "radiotelaviv.co.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Jerusalem",
                "domain": "radiojerusalem.co.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Haifa",
                "domain": "radiohaifa.co.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Beersheba",
                "domain": "radiobeersheba.co.il",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "IT": {
        "name": "Italy",
        "language": "it",  // Italian
        "sources": [
            {
                "name": "Corriere della Sera",
                "domain": "corriere.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "La Repubblica",
                "domain": "repubblica.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "La Stampa",
                "domain": "lastampa.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Il Sole 24 Ore",
                "domain": "ilsole24ore.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "RAI",
                "domain": "rai.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio 1",
                "domain": "radio1.rai.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio 2",
                "domain": "radio2.rai.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio 3",
                "domain": "radio3.rai.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio 24",
                "domain": "radio24.ilsole24ore.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Capital",
                "domain": "capital.it",
                "rss_feeds": ["https://www.capital.it/feed/"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/ironOreNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/swansea/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fermiumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "JM": {
        "name": "Jamaica",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Gleaner",
                "domain": "jamaica-gleaner.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Jamaica Observer",
                "domain": "jamaicaobserver.com",
                "rss_feeds": ["https://www.jamaicaobserver.com/feed/"],
            },
            {
                "name": "The Jamaica Star",
                "domain": "jamaica-star.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Jamaica Information Service",
                "domain": "jis.gov.jm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Jamaica",
                "domain": "rjrnewsonline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Nationwide Radio",
                "domain": "nationwideradiojm.com",
                "rss_feeds": ["https://nationwideradiojm.com/feed/"],
            },
            {
                "name": "Power 106 FM",
                "domain": "power106.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Hot 102 FM",
                "domain": "hot102fm.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Irie FM",
                "domain": "iriefm.net",
                "rss_feeds": ["https://iriefm.net/feed/"],
            },
            {
                "name": "Zip 103 FM",
                "domain": "zip103fm.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Asahi Shimbun",
                "domain": "asahi.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Mainichi Shimbun",
                "domain": "mainichi.jp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Nikkei",
                "domain": "nikkei.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Sankei Shimbun",
                "domain": "sankei.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "NHK",
                "domain": "nhk.or.jp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "TBS",
                "domain": "tbs.co.jp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Fuji TV",
                "domain": "fujitv.co.jp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Nippon Hoso Kyokai",
                "domain": "nhk.or.jp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Tokyo FM",
                "domain": "tfm.co.jp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "JO": {
        "name": "Jordan",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Al-Rai",
                "domain": "alrai.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Ad-Dustour",
                "domain": "addustour.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Al-Ghad",
                "domain": "alghad.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Jordan Times",
                "domain": "jordantimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Jordan Radio and Television Corporation",
                "domain": "jrtv.gov.jo",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Jordan",
                "domain": "radiojordan.gov.jo",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Fann",
                "domain": "radiofann.jo",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Hala",
                "domain": "radiohala.jo",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Rotana",
                "domain": "rotana.jo",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Sawt Al-Ghad",
                "domain": "sawtalghad.jo",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Kazakhstanskaya Pravda",
                "domain": "kazpravda.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Egemen Qazaqstan",
                "domain": "egemen.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Khabar Agency",
                "domain": "khabar.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Kazakhstan Radio and Television Corporation",
                "domain": "qazaqstan.tv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Kazakhstan",
                "domain": "radio.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Shalkar",
                "domain": "shalkar.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Astana",
                "domain": "radioastana.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Almaty",
                "domain": "radioalmaty.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Shymkent",
                "domain": "radioshymkent.kz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "KE": {
        "name": "Kenya",
        "language": "sw",  // Swahili
        "sources": [
            {
                "name": "Daily Nation",
                "domain": "nation.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "The Standard",
                "domain": "standardmedia.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "The Star",
                "domain": "the-star.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Kenya News Agency",
                "domain": "kanakenya.go.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Kenya Broadcasting Corporation",
                "domain": "kbc.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Citizen",
                "domain": "citizentv.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Jambo",
                "domain": "radiojambo.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Maisha",
                "domain": "radiomaisha.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio One",
                "domain": "radioone.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio 2FM",
                "domain": "radio2fm.co.ke",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Kiribati",
                "domain": "radiokiribati.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Te Uekera",
                "domain": "teuekera.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Kiribati News",
                "domain": "kiribati-news.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Pacific Islands News Association",
                "domain": "pina.com.fj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Pacific Media Network",
                "domain": "pacificmedianetwork.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Pasifik",
                "domain": "radiopasifik.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Te Uekera",
                "domain": "radioteuekera.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Kiribati One",
                "domain": "radiokiribatione.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Kiribati Two",
                "domain": "radiokiribati2.ki",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "KP": {
        "name": "North Korea",
        "language": "ko",  // Korean
        "sources": [
            {
                "name": "Korean Central News Agency",
                "domain": "kcna.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Rodong Sinmun",
                "domain": "rodong.rep.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Minju Choson",
                "domain": "minju.rep.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Korean Central Television",
                "domain": "tv.rep.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Korean Central Broadcasting Station",
                "domain": "radio.rep.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Pyongyang Broadcasting Station",
                "domain": "pyongyang.rep.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Pyongyang",
                "domain": "radiopyongyang.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Voice of Korea",
                "domain": "vok.rep.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Korea",
                "domain": "radiokorea.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Radio Pyongyang FM",
                "domain": "pyongyangfm.kp",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
        ],
    },
    "KR": {
        "name": "South Korea",
        "language": "ko",  // Korean
        "sources": [
            {
                "name": "Chosun Ilbo",
                "domain": "chosun.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "JoongAng Ilbo",
                "domain": "joongang.co.kr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Dong-A Ilbo",
                "domain": "donga.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Hankyoreh",
                "domain": "hani.co.kr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "Korea Herald",
                "domain": "koreaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "KBS",
                "domain": "kbs.co.kr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "MBC",
                "domain": "imbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "SBS",
                "domain": "sbs.co.kr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "KBS Radio",
                "domain": "kbs.co.kr/radio",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
            },
            {
                "name": "MBC Radio",
                "domain": "imbc.com/radio",
                "rss_feeds": ["https://feeds.reuters.com/reuters/mediaNews"],
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
