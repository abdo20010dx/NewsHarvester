
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
News sources for countries chunk 7

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "FR": {
        "name": "France",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Le Monde",
                "domain": "lemonde.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Le Figaro",
                "domain": "lefigaro.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Libération",
                "domain": "liberation.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "L'Équipe",
                "domain": "lequipe.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Les Échos",
                "domain": "lesechos.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "France Télévisions",
                "domain": "francetvinfo.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "TF1",
                "domain": "tf1.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "France 2",
                "domain": "france2.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio France",
                "domain": "radiofrance.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Europe 1",
                "domain": "europe1.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
        ],
    },
    "GA": {
        "name": "Gabon",
        "language": "fr",  // French
        "sources": [
            {
                "name": "L'Union",
                "domain": "union.sonapresse.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Gabon Review",
                "domain": "gabonreview.com",
                "rss_feeds": ["https://www.gabonreview.com/feed/"],
            },
            {
                "name": "Gabon Media Time",
                "domain": "gabonmediatime.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Télévision Gabonaise",
                "domain": "rtg.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Gabon",
                "domain": "radiogabon.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Libreville",
                "domain": "radiolibreville.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Port-Gentil",
                "domain": "radioportgentil.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Franceville",
                "domain": "radiofranceville.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Oyem",
                "domain": "radiooyem.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Lambaréné",
                "domain": "radiolambarene.ga",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
        ],
    },
    "GM": {
        "name": "Gambia",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Point",
                "domain": "thepoint.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Foroyaa",
                "domain": "foroyaa.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Daily Observer",
                "domain": "observer.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Gambia Radio and Television Services",
                "domain": "grts.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Gambia",
                "domain": "radiogambia.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 1 FM",
                "domain": "radio1.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 2 FM",
                "domain": "radio2.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 3 FM",
                "domain": "radio3.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 4 FM",
                "domain": "radio4.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 5 FM",
                "domain": "radio5.gm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
        ],
    },
    "GE": {
        "name": "Georgia",
        "language": "ka",  // Georgian
        "sources": [
            {
                "name": "Rustavi 2",
                "domain": "rustavi2.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Imedi TV",
                "domain": "imedinews.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Georgian Public Broadcaster",
                "domain": "1tv.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Liberty",
                "domain": "radiotavisupleba.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Imedi",
                "domain": "radioimedinews.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Fortuna",
                "domain": "radiofortuna.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 202",
                "domain": "radio202.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Green Wave",
                "domain": "greenwave.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Arda",
                "domain": "radioarda.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Hereti",
                "domain": "radiohereti.ge",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
        ],
    },
    "DE": {
        "name": "Germany",
        "language": "de",  // German
        "sources": [
            {
                "name": "Der Spiegel",
                "domain": "spiegel.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Die Zeit",
                "domain": "zeit.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Süddeutsche Zeitung",
                "domain": "sueddeutsche.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Frankfurter Allgemeine",
                "domain": "faz.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Die Welt",
                "domain": "welt.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "ARD",
                "domain": "ard.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "ZDF",
                "domain": "zdf.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Deutschlandfunk",
                "domain": "deutschlandfunk.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Deutschlandfunk Kultur",
                "domain": "deutschlandfunkkultur.de",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Voice of America",
                "domain": "voanews.com",
                "rss_feeds": ["https://www.voanews.com/api/zq$omekvi_"],
            },
        ],
    },
    "GH": {
        "name": "Ghana",
        "language": "en",  // English
        "sources": [
            {
                "name": "Daily Graphic",
                "domain": "graphic.com.gh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Ghanaian Times",
                "domain": "ghanaiantimes.com.gh",
                "rss_feeds": ["https://ghanaiantimes.com.gh/feed/"],
            },
            {
                "name": "Daily Guide",
                "domain": "dailyguideafrica.com",
                "rss_feeds": ["https://dailyguideafrica.com/feed/"],
            },
            {
                "name": "Ghana Broadcasting Corporation",
                "domain": "gbcghana.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Ghana",
                "domain": "radioghana.gh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Gold",
                "domain": "radiogoldlive.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Peace",
                "domain": "radiopeace.gh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Univers",
                "domain": "radiounivers.gh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio XYZ",
                "domain": "radioxyz.gh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Adom",
                "domain": "radioadom.gh",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
        ],
    },
    "GR": {
        "name": "Greece",
        "language": "el",  // Greek
        "sources": [
            {
                "name": "Kathimerini",
                "domain": "kathimerini.gr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Ta Nea",
                "domain": "tanea.gr",
                "rss_feeds": ["https://www.tanea.gr/feed/"],
            },
            {
                "name": "To Vima",
                "domain": "tovima.gr",
                "rss_feeds": ["https://www.tovima.gr/feed/"],
            },
            {
                "name": "Eleftherotypia",
                "domain": "enet.gr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "ERT",
                "domain": "ert.gr",
                "rss_feeds": ["https://www.ert.gr/feed/"],
            },
            {
                "name": "Mega TV",
                "domain": "megatv.com",
                "rss_feeds": ["https://www.megatv.com/feed/"],
            },
            {
                "name": "ANT1",
                "domain": "ant1news.gr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio 24/7",
                "domain": "radio247.gr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Athina 9.84",
                "domain": "athina984.gr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Thessaloniki",
                "domain": "radio-thessaloniki.gr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
        ],
    },
    "GT": {
        "name": "Guatemala",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Prensa Libre",
                "domain": "prensalibre.com",
                "rss_feeds": ["https://www.prensalibre.com/feed/"],
            },
            {
                "name": "El Periódico",
                "domain": "elperiodico.com.gt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Siglo 21",
                "domain": "siglo21.com.gt",
                "rss_feeds": ["https://www.siglo21.com.gt/feed/"],
            },
            {
                "name": "La Hora",
                "domain": "lahora.gt",
                "rss_feeds": ["https://lahora.gt/feed/"],
            },
            {
                "name": "Radio Televisión Guatemala",
                "domain": "rtg.gob.gt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Nacional TGW",
                "domain": "radiotgw.gob.gt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Sonora",
                "domain": "radiosonora.gt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Punto",
                "domain": "radiopunto.gt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Femenina",
                "domain": "radiofemenina.gt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Radio Emisoras Unidas",
                "domain": "emisorasunidas.com",
                "rss_feeds": ["https://www.emisorasunidas.com/feed/"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/actiniumNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/magnesiumNews/science"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/london/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-wirtschaft"],
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
