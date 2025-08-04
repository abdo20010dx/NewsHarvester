
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
News sources for countries chunk 12

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "MX": {
        "name": "Mexico",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Universal",
                "domain": "eluniversal.com.mx",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reforma",
                "domain": "reforma.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "La Jornada",
                "domain": "jornada.com.mx",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Excélsior",
                "domain": "excelsior.com.mx",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Milenio",
                "domain": "milenio.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Televisa",
                "domain": "televisa.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "TV Azteca",
                "domain": "tvazteca.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Fórmula",
                "domain": "radioformula.com.mx",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Red",
                "domain": "radiorede.com.mx",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Centro",
                "domain": "radiocentro.com.mx",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "FM": {
        "name": "Micronesia",
        "language": "en",  // English
        "sources": [
            {
                "name": "Micronesia News",
                "domain": "micronesia-news.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Kaselehlie Press",
                "domain": "kpress.info",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Micronesia Broadcasting Corporation",
                "domain": "mbc.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Pohnpei",
                "domain": "radiopohnpei.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Chuuk",
                "domain": "radiochuuk.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Yap",
                "domain": "radioyap.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Kosrae",
                "domain": "radiokosrae.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Weno",
                "domain": "radioweno.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Kolonia",
                "domain": "radiokolonia.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Tofol",
                "domain": "radiotofol.fm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "MD": {
        "name": "Moldova",
        "language": "ro",  // Romanian
        "sources": [
            {
                "name": "Moldpres",
                "domain": "moldpres.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Teleradio-Moldova",
                "domain": "trm.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Moldova",
                "domain": "radiomoldova.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Antena C",
                "domain": "antena-c.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Vocea Basarabiei",
                "domain": "voceabasarabiei.md",
                "rss_feeds": ["https://voceabasarabiei.md/feed/"],
            },
            {
                "name": "Radio Orhei",
                "domain": "radioorhei.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Balti",
                "domain": "radiobalt.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Cahul",
                "domain": "radiocahul.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Comrat",
                "domain": "radiocomrat.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Tiraspol",
                "domain": "radiotiraspol.md",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "MC": {
        "name": "Monaco",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Monaco Info",
                "domain": "monaco-info.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Monaco Matin",
                "domain": "monacomatin.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Monte Carlo",
                "domain": "rmc.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Monaco Radio",
                "domain": "monacoradio.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Monaco",
                "domain": "radiomonaco.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Riviera",
                "domain": "radioriviera.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Azur",
                "domain": "radioazur.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Côte d'Azur",
                "domain": "radiocotedazur.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Monaco 1",
                "domain": "radiomonaco1.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Monaco 2",
                "domain": "radiomonaco2.mc",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "MN": {
        "name": "Mongolia",
        "language": "mn",  // Mongolian
        "sources": [
            {
                "name": "Montsame",
                "domain": "montsame.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Mongol News",
                "domain": "mongolnews.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Mongolian National Broadcaster",
                "domain": "mnb.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Mongolia",
                "domain": "radiomongolia.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Ulaanbaatar",
                "domain": "radioulaanbaatar.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Darkhan",
                "domain": "radiodarkhan.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Erdenet",
                "domain": "radioerdenet.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Choibalsan",
                "domain": "radiochoibalsan.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Khovd",
                "domain": "radiokhovd.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Bayan-Ulgii",
                "domain": "radiobayanulgii.mn",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "ME": {
        "name": "Montenegro",
        "language": "cnr",  // Montenegrin
        "sources": [
            {
                "name": "Radio Televizija Crne Gore",
                "domain": "rtcg.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Crne Gore",
                "domain": "radiocg.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Antena M",
                "domain": "antenam.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio D",
                "domain": "radiod.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Budva",
                "domain": "radiobudva.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Herceg Novi",
                "domain": "radiohercegnovi.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Kotor",
                "domain": "radiokotor.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Nikšić",
                "domain": "radioniksic.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Pljevlja",
                "domain": "radiopljevlja.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Podgorica",
                "domain": "radiopodgorica.me",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "MA": {
        "name": "Morocco",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Maghreb Arabe Presse",
                "domain": "map.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al-Ahdath Al-Maghribiya",
                "domain": "alahdath.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al-Massae",
                "domain": "almassae.press.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Assabah",
                "domain": "assabah.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Société Nationale de Radiodiffusion et de Télévision",
                "domain": "snm.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Maroc",
                "domain": "radiomaroc.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio 2M",
                "domain": "radio2m.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Aswat",
                "domain": "radioaswat.ma",
                "rss_feeds": ["https://radioaswat.ma/feed/"],
            },
            {
                "name": "Radio MFM",
                "domain": "radiomfm.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Hit Radio",
                "domain": "hitradio.ma",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
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
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fluorineNews"],
            },
        ],
    },
    "MZ": {
        "name": "Mozambique",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Agência de Informação de Moçambique",
                "domain": "aim.org.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Notícias",
                "domain": "jornalnoticias.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "O País",
                "domain": "opais.co.mz",
                "rss_feeds": ["https://opais.co.mz/feed/"],
            },
            {
                "name": "Diário de Moçambique",
                "domain": "diariodemocambique.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Televisão de Moçambique",
                "domain": "tvm.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Rádio Moçambique",
                "domain": "radiomocambique.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Rádio Cidade",
                "domain": "radiocidade.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Rádio Miramar",
                "domain": "radiomiramar.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Rádio Mais",
                "domain": "radiomais.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Rádio Moçambique FM",
                "domain": "radiomocambiquefm.co.mz",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "MM": {
        "name": "Myanmar",
        "language": "my",  // Burmese
        "sources": [
            {
                "name": "Myanmar News Agency",
                "domain": "mna.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Myanmar Alin",
                "domain": "myanmaralin.com.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Kyemon",
                "domain": "kyemon.com.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Myawaddy",
                "domain": "myawaddy.com.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Myanmar Radio and Television",
                "domain": "mrtv.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Myanmar",
                "domain": "radiomyanmar.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Yangon",
                "domain": "radioyangon.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Mandalay",
                "domain": "radiomandalay.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Mawlamyine",
                "domain": "radiomawlamyine.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Taunggyi",
                "domain": "radiotaunggyi.gov.mm",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "NA": {
        "name": "Namibia",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Namibian",
                "domain": "namibian.com.na",
                "rss_feeds": ["https://www.namibian.com.na/feed/"],
            },
            {
                "name": "New Era",
                "domain": "newera.com.na",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Namibia Press Agency",
                "domain": "nampa.org",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Namibia Broadcasting Corporation",
                "domain": "nbc.na",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Namibia",
                "domain": "radionamibia.na",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Energy",
                "domain": "energy100fm.com",
                "rss_feeds": ["https://energy100fm.com/feed/"],
            },
            {
                "name": "Radio 99",
                "domain": "radio99.na",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Wave",
                "domain": "radiowave.com.na",
                "rss_feeds": ["https://radiowave.com.na/feed/"],
            },
            {
                "name": "Radio Kudu",
                "domain": "radiokudu.na",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Omulunga",
                "domain": "radioomulunga.na",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "LS": {
        "name": "Lesotho",
        "language": "en",  // English
        "sources": [
            {
                "name": "Lesotho Times",
                "domain": "lestimes.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Public Eye",
                "domain": "publiceye.co.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Sunday Express",
                "domain": "sundayexpress.co.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Lesotho Broadcasting Service",
                "domain": "lbs.org.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Lesotho",
                "domain": "radiolesotho.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio 2000",
                "domain": "radio2000.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio 1",
                "domain": "radio1.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio 2",
                "domain": "radio2.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio 3",
                "domain": "radio3.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio 4",
                "domain": "radio4.ls",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "LR": {
        "name": "Liberia",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Daily Observer",
                "domain": "liberianobserver.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "FrontPage Africa",
                "domain": "frontpageafricaonline.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "The New Dawn",
                "domain": "thenewdawnliberia.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Liberia Broadcasting System",
                "domain": "lbsliberia.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Liberia",
                "domain": "radioliberia.lr",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Veritas",
                "domain": "radioveritas.lr",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio ELWA",
                "domain": "radioelwa.lr",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Monrovia",
                "domain": "radiomonrovia.lr",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Bong",
                "domain": "radiobong.lr",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Nimba",
                "domain": "radionimba.lr",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "LY": {
        "name": "Libya",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Libya News Agency",
                "domain": "lana.gov.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al-Wasat",
                "domain": "alwasat.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Libya Al-Ahrar",
                "domain": "libyaalahrar.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Libya Al-Mostakbal",
                "domain": "libyaalmostakbal.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Libya Al-Watan",
                "domain": "libyaalwatan.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Libya Broadcasting Corporation",
                "domain": "lbc.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Libya",
                "domain": "radiolibya.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Tripoli",
                "domain": "radiotripoli.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Benghazi",
                "domain": "radiobenghazi.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Misrata",
                "domain": "radiomisrata.ly",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
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
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fluorineNews"],
            },
        ],
    },
    "LI": {
        "name": "Liechtenstein",
        "language": "de",  // German
        "sources": [
            {
                "name": "Liechtensteiner Vaterland",
                "domain": "vaterland.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Liechtensteiner Volksblatt",
                "domain": "volksblatt.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Liechtenstein",
                "domain": "radio.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "1 FL TV",
                "domain": "1fl.tv",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Liechtenstein News",
                "domain": "liechtenstein.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio L",
                "domain": "radiol.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Vaduz",
                "domain": "radiovaduz.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Schaan",
                "domain": "radioschaan.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Balzers",
                "domain": "radiobalzers.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Triesen",
                "domain": "radiotriesen.li",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
        ],
    },
    "LT": {
        "name": "Lithuania",
        "language": "lt",  // Lithuanian
        "sources": [
            {
                "name": "Lietuvos Rytas",
                "domain": "lr.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Lietuvos Žinios",
                "domain": "lzinios.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Kauno Diena",
                "domain": "kauno.diena.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Verslo Žinios",
                "domain": "vz.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Lietuvos Nacionalinis Radijas ir Televizija",
                "domain": "lrt.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "TV3 Lithuania",
                "domain": "tv3.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "LNK",
                "domain": "lnk.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Lietuva",
                "domain": "radiolietuva.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Žinių Radijas",
                "domain": "zinios.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Radio Marija",
                "domain": "marija.lt",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/nickelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/culture.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/world.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/arts/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/sanctionsNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
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
