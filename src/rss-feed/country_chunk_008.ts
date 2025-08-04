
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
News sources for countries chunk 8

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "GN": {
        "name": "Guinea",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Guinée News",
                "domain": "guineenews.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Guinée Matin",
                "domain": "guineematin.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Mosaiqueguinee",
                "domain": "mosaiqueguinee.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Télévision Guinéenne",
                "domain": "rtg.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Guinée",
                "domain": "radioguinee.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Rurale",
                "domain": "radiorurale.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Conakry",
                "domain": "radioconakry.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Kankan",
                "domain": "radiokankan.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Kindia",
                "domain": "radiokindia.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Labé",
                "domain": "radiolabe.gn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
        ],
    },
    "GW": {
        "name": "Guinea-Bissau",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Agência de Notícias da Guiné-Bissau",
                "domain": "ang.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Jornal da Guiné-Bissau",
                "domain": "jornalgb.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Televisão da Guiné-Bissau",
                "domain": "rtgb.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Nacional da Guiné-Bissau",
                "domain": "radionacional.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Bissau",
                "domain": "radiobissau.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Bombolom",
                "domain": "radiobombolom.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Pindjiguiti",
                "domain": "radiopindjiguiti.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Sol Mansi",
                "domain": "radiosolmansi.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Voz da Guiné",
                "domain": "radiovozguine.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rádio Comercial",
                "domain": "radiocomercial.gw",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
        ],
    },
    "GY": {
        "name": "Guyana",
        "language": "en",  // English
        "sources": [
            {
                "name": "Stabroek News",
                "domain": "stabroeknews.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Kaieteur News",
                "domain": "kaieteurnewsonline.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Guyana Chronicle",
                "domain": "guyanachronicle.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Demerara Waves",
                "domain": "demerarawaves.com",
                "rss_feeds": ["https://demerarawaves.com/feed/"],
            },
            {
                "name": "Guyana Broadcasting Corporation",
                "domain": "gbc.gy",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Guyana",
                "domain": "radioguyana.gy",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Paiwomak",
                "domain": "radiopaiwomak.gy",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Lethem",
                "domain": "radiolethem.gy",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Mabaruma",
                "domain": "radiomabaruma.gy",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Anna Regina",
                "domain": "radioannaregina.gy",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
        ],
    },
    "HT": {
        "name": "Haiti",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Le Nouvelliste",
                "domain": "lenouvelliste.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Le Matin",
                "domain": "lematinhaiti.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Haiti Libre",
                "domain": "haitilibre.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Télévision Nationale d'Haïti",
                "domain": "rtnh.ht",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Métropole",
                "domain": "metropole.ht",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Kiskeya",
                "domain": "radiokiskeya.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Caraïbes",
                "domain": "radiocaraibes.ht",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Signal FM",
                "domain": "signalfmhaiti.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Vision 2000",
                "domain": "radiovision2000.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Galaxie",
                "domain": "radiogalaxie.ht",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
        ],
    },
    "HN": {
        "name": "Honduras",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Heraldo",
                "domain": "elheraldo.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "La Prensa",
                "domain": "laprensa.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "La Tribuna",
                "domain": "latribuna.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "El Tiempo",
                "domain": "tiempo.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Nacional de Honduras",
                "domain": "radionacional.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio HRN",
                "domain": "radiohrn.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio América",
                "domain": "radioamerica.hn",
                "rss_feeds": ["https://www.radioamerica.hn/feed/"],
            },
            {
                "name": "Radio Progreso",
                "domain": "radioprogreso.hn",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Globo",
                "domain": "radioglobohonduras.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Radio Cadena Voces",
                "domain": "cadena-voces.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
        ],
    },
    "HU": {
        "name": "Hungary",
        "language": "hu",  // Hungarian
        "sources": [
            {
                "name": "Népszabadság",
                "domain": "nepszabadsag.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Magyar Nemzet",
                "domain": "magyarnemzet.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Népszava",
                "domain": "nepszava.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Magyar Hírlap",
                "domain": "magyarhirlap.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "MTI",
                "domain": "mti.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Magyar Televízió",
                "domain": "mtva.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Magyar Rádió",
                "domain": "radio.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Kossuth Rádió",
                "domain": "kossuthradio.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Petőfi Rádió",
                "domain": "petofilive.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Bartók Rádió",
                "domain": "bartokradio.hu",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
        ],
    },
    "IS": {
        "name": "Iceland",
        "language": "is",  // Icelandic
        "sources": [
            {
                "name": "Morgunblaðið",
                "domain": "mbl.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Fréttablaðið",
                "domain": "frettabladid.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Vísir",
                "domain": "visir.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "RÚV",
                "domain": "ruv.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rás 1",
                "domain": "ras1.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rás 2",
                "domain": "ras2.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rondó",
                "domain": "rondo.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "X-ið",
                "domain": "xid.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Klasík",
                "domain": "klasik.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Rás 1 Ró",
                "domain": "ras1ro.is",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/travelNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/roentgeniumNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/entertainment/feed"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/creditNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/metaverseNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/wales/rss.xml"],
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
