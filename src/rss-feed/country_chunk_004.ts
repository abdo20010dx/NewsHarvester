
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
News sources for countries chunk 4

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "CM": {
        "name": "Cameroon",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Cameroon Tribune",
                "domain": "cameroon-tribune.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Le Messager",
                "domain": "lemessager.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Mutations",
                "domain": "mutations-online.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Le Jour",
                "domain": "lejour.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "La Nouvelle Expression",
                "domain": "lanouvelleexpression.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CRTV",
                "domain": "crtv.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Yaoundé",
                "domain": "radioyaounde.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Douala",
                "domain": "radiodouala.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Bafoussam",
                "domain": "radiobafoussam.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Garoua",
                "domain": "radiogaroua.cm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "CA": {
        "name": "Canada",
        "language": "en",  // English
        "sources": [
            {
                "name": "CBC News",
                "domain": "cbc.ca",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CTV News",
                "domain": "ctvnews.ca",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/lawrenciumNews"
                ],
            },
            {
                "name": "Global News",
                "domain": "globalnews.ca",
                "rss_feeds": ["https://globalnews.ca/feed/"],
            },
            {
                "name": "The Globe and Mail",
                "domain": "theglobeandmail.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "National Post",
                "domain": "nationalpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Toronto Star",
                "domain": "thestar.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Montreal Gazette",
                "domain": "montrealgazette.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Vancouver Sun",
                "domain": "vancouversun.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Calgary Herald",
                "domain": "calgaryherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Ottawa Citizen",
                "domain": "ottawacitizen.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "CV": {
        "name": "Cabo Verde",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "A Nação",
                "domain": "anacao.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Expresso das Ilhas",
                "domain": "expressodasilhas.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "A Semana",
                "domain": "asemana.publ.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Inforpress",
                "domain": "inforpress.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "RTC",
                "domain": "rtc.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio de Cabo Verde",
                "domain": "rtc.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Televisão de Cabo Verde",
                "domain": "rtc.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Praia",
                "domain": "radiopraia.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Barlavento",
                "domain": "radiobarlavento.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Sotavento",
                "domain": "radiosotavento.cv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "CF": {
        "name": "Central African Republic",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Le Confident",
                "domain": "leconfident.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Ndeke Luka",
                "domain": "radiondekeluka.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Centrafrique",
                "domain": "radiocentrafrique.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Télévision Centrafricaine",
                "domain": "tvcentrafrique.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Notre Dame",
                "domain": "radionotredame.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Be Oko",
                "domain": "radiobeoko.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Lengo Songo",
                "domain": "radiolengosongo.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Bangui",
                "domain": "radiobangui.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Zoukpana",
                "domain": "radiozoukpana.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Voix de la Paix",
                "domain": "radiovoixdelapaix.cf",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "TD": {
        "name": "Chad",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Al-Watan",
                "domain": "alwatan.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Le Progrès",
                "domain": "leprogres.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Notre Temps",
                "domain": "notretemps.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Tchad",
                "domain": "radiotchad.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Télé Tchad",
                "domain": "teletchad.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio FM Liberté",
                "domain": "fmliberte.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Dja FM",
                "domain": "dja.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Brakos",
                "domain": "brakos.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Sila",
                "domain": "sila.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Ouaddaï",
                "domain": "ouaddai.td",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.reuters.com/reuters/xenonNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/acquisitionsNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/scotland/rss.xml"],
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
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
        ],
    },
    "CL": {
        "name": "Chile",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Mercurio",
                "domain": "elmercurio.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "La Tercera",
                "domain": "latercera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "La Nación",
                "domain": "lanacion.cl",
                "rss_feeds": ["https://www.lanacion.cl/feed/"],
            },
            {
                "name": "El Mostrador",
                "domain": "elmostrador.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Cooperativa",
                "domain": "cooperativa.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "TVN",
                "domain": "tvn.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Canal 13",
                "domain": "canal13.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Mega",
                "domain": "mega.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Chilevisión",
                "domain": "chilevision.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Bío Bío",
                "domain": "biobiochile.cl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "CN": {
        "name": "China",
        "language": "zh",  // Chinese
        "sources": [
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "People's Daily",
                "domain": "people.com.cn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "China Daily",
                "domain": "chinadaily.com.cn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Global Times",
                "domain": "globaltimes.cn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "South China Morning Post",
                "domain": "scmp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "China Central Television",
                "domain": "cctv.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "China Radio International",
                "domain": "cri.cn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "China News Service",
                "domain": "chinanews.com.cn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Sina News",
                "domain": "news.sina.com.cn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Sohu News",
                "domain": "news.sohu.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "CO": {
        "name": "Colombia",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Tiempo",
                "domain": "eltiempo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "El Espectador",
                "domain": "elespectador.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "El País",
                "domain": "elpais.com.co",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "La República",
                "domain": "larepublica.co",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Portafolio",
                "domain": "portafolio.co",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Caracol Noticias",
                "domain": "caracol.com.co",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "RCN Noticias",
                "domain": "rcnradio.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Noticiascaracol",
                "domain": "noticiascaracol.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Noticiasrcn",
                "domain": "noticiasrcn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "W Radio",
                "domain": "wradio.com.co",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
        ],
    },
    "KM": {
        "name": "Comoros",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Al-Watwan",
                "domain": "alwatwan.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "La Gazette des Comores",
                "domain": "lagazettedescomores.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Comores Infos",
                "domain": "comores-infos.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Comores",
                "domain": "radiocomores.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Télévision Nationale des Comores",
                "domain": "tnc.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Mwezi",
                "domain": "radiomwezi.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Ngazidja",
                "domain": "radiongazidja.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Mwali",
                "domain": "radiomwali.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Ndzuwani",
                "domain": "radiondzuwani.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Dounia",
                "domain": "radiodounia.km",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.reuters.com/reuters/xenonNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/acquisitionsNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/scotland/rss.xml"],
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
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
        ],
    },
    "CR": {
        "name": "Costa Rica",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "La Nación",
                "domain": "nacion.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "La República",
                "domain": "larepublica.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "El Financiero",
                "domain": "elfinancierocr.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CRHoy",
                "domain": "crhoy.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Teletica",
                "domain": "teletica.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Repretel",
                "domain": "repretel.com",
                "rss_feeds": ["https://www.repretel.com/feed/"],
            },
            {
                "name": "Canal 7",
                "domain": "canal7costarica.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Reloj",
                "domain": "radioreloj.cr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Columbia",
                "domain": "radiocolumbia.cr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "Radio Monumental",
                "domain": "radiomonumental.cr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/lawrenciumNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/sports.xml"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/fashion/rss.xml"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APCultureNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/rss.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APLifestyleNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/sports.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/entertainment.xml"],
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
