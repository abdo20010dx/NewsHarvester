
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
News sources for countries chunk 5

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "CG": {
        "name": "Congo",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Les Dépêches de Brazzaville",
                "domain": "lesdepechesdebrazzaville.fr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "La Semaine Africaine",
                "domain": "lasemaineafricaine.net",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Congo Site",
                "domain": "congosite.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Congo",
                "domain": "rtc.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Brazzaville",
                "domain": "radiobrazzaville.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Pointe-Noire",
                "domain": "radiopointenoire.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Dolisie",
                "domain": "radiodolisie.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Nkayi",
                "domain": "radionkayi.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Owando",
                "domain": "radioowando.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Impfondo",
                "domain": "radioimpfondo.cg",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "CD": {
        "name": "Democratic Republic of the Congo",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Le Potentiel",
                "domain": "lepotentiel.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Le Phare",
                "domain": "lephare.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Le Soft",
                "domain": "lesoft.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Okapi",
                "domain": "radiookapi.net",
                "rss_feeds": ["https://www.radiookapi.net/feed/"],
            },
            {
                "name": "Radio Télévision Nationale Congolaise",
                "domain": "rtnc.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Maendeleo",
                "domain": "radiomaendeleo.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Maria",
                "domain": "radiomaria.cd",
                "rss_feeds": ["https://www.radiomaria.cd/feed/"],
            },
            {
                "name": "Radio Top Congo",
                "domain": "radiotopcongo.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Liberté",
                "domain": "radioliberte.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Candip",
                "domain": "radiocandip.cd",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "CI": {
        "name": "Côte d'Ivoire",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Fraternité Matin",
                "domain": "fratmat.info",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Le Patriote",
                "domain": "lepatriote.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "L'Inter",
                "domain": "linter.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Soir Info",
                "domain": "soirinfo.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "RTI",
                "domain": "rti.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Côte d'Ivoire",
                "domain": "rti.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Télévision Ivoirienne",
                "domain": "rti.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Yopougon",
                "domain": "radioyopougon.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Abidjan",
                "domain": "radioabidjan.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Bouaké",
                "domain": "radiobouake.ci",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "HR": {
        "name": "Croatia",
        "language": "hr",  // Croatian
        "sources": [
            {
                "name": "Jutarnji List",
                "domain": "jutarnji.hr",
                "rss_feeds": ["https://www.jutarnji.hr/feed/"],
            },
            {
                "name": "Večernji List",
                "domain": "vecernji.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "24sata",
                "domain": "24sata.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Novi List",
                "domain": "novilist.hr",
                "rss_feeds": ["https://www.novilist.hr/feed/"],
            },
            {
                "name": "Slobodna Dalmacija",
                "domain": "slobodnadalmacija.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "HRT",
                "domain": "hrt.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "RTL Hrvatska",
                "domain": "rtl.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Nova TV",
                "domain": "nova.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio 101",
                "domain": "radio101.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Sljeme",
                "domain": "radiosljeme.hr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "CU": {
        "name": "Cuba",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Granma",
                "domain": "granma.cu",
                "rss_feeds": ["https://www.granma.cu/feed/"],
            },
            {
                "name": "Juventud Rebelde",
                "domain": "juventudrebelde.cu",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Trabajadores",
                "domain": "trabajadores.cu",
                "rss_feeds": ["https://www.trabajadores.cu/feed/"],
            },
            {
                "name": "Cubadebate",
                "domain": "cubadebate.cu",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Habana Cuba",
                "domain": "radiohc.cu",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Rebelde",
                "domain": "radiorebelde.cu",
                "rss_feeds": ["https://www.radiorebelde.cu/feed/"],
            },
            {
                "name": "Radio Progreso",
                "domain": "radioprogreso.cu",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Reloj",
                "domain": "radioreloj.cu",
                "rss_feeds": ["https://www.radioreloj.cu/feed/"],
            },
            {
                "name": "Radio Taíno",
                "domain": "radiotaino.cu",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Enciclopedia",
                "domain": "radioenciclopedia.cu",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "CY": {
        "name": "Cyprus",
        "language": "el",  // Greek
        "sources": [
            {
                "name": "Phileleftheros",
                "domain": "phileleftheros.gr",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Politis",
                "domain": "politis.com.cy",
                "rss_feeds": ["https://www.politis.com.cy/feed/"],
            },
            {
                "name": "Simerini",
                "domain": "simerini.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Cyprus Mail",
                "domain": "cyprus-mail.com",
                "rss_feeds": ["https://cyprus-mail.com/feed/"],
            },
            {
                "name": "Cyprus Broadcasting Corporation",
                "domain": "cybc.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Proto",
                "domain": "radioproto.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Astra",
                "domain": "radioastra.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Logos",
                "domain": "radiologos.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Paphos",
                "domain": "radiopaphos.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Larnaca",
                "domain": "radiolarnaca.com.cy",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "CZ": {
        "name": "Czech Republic",
        "language": "cs",  // Czech
        "sources": [
            {
                "name": "Mladá fronta DNES",
                "domain": "idnes.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Lidové noviny",
                "domain": "lidovky.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Právo",
                "domain": "novinky.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Hospodářské noviny",
                "domain": "ihned.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Česká televize",
                "domain": "ceskatelevize.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Český rozhlas",
                "domain": "rozhlas.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radiožurnál",
                "domain": "radiozurnal.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Dvojka",
                "domain": "dvojka.rozhlas.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Vltava",
                "domain": "vltava.rozhlas.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Plus",
                "domain": "plus.rozhlas.cz",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "DK": {
        "name": "Denmark",
        "language": "da",  // Danish
        "sources": [
            {
                "name": "Berlingske",
                "domain": "berlingske.dk",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Politiken",
                "domain": "politiken.dk",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Jyllands-Posten",
                "domain": "jyllands-posten.dk",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Ekstra Bladet",
                "domain": "ekstrabladet.dk",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {"name": "DR", "domain": "dr.dk", "rss_feeds": ["https://www.france24.com/en/rss"]},
            {
                "name": "TV 2",
                "domain": "tv2.dk",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "DR P1",
                "domain": "dr.dk/p1",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "DR P2",
                "domain": "dr.dk/p2",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "DR P3",
                "domain": "dr.dk/p3",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "DR P4",
                "domain": "dr.dk/p4",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
            },
        ],
    },
    "DJ": {
        "name": "Djibouti",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "La Nation",
                "domain": "nation.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al-Qarn",
                "domain": "alqarn.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Télévision de Djibouti",
                "domain": "rtd.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Djibouti",
                "domain": "radiodjibouti.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Télévision de Djibouti",
                "domain": "tvdjibouti.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Al-Raya",
                "domain": "radioalraya.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Al-Watan",
                "domain": "radioalwatan.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Al-Sharq",
                "domain": "radioalsharq.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Al-Khalij",
                "domain": "radioalkhalij.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Al-Bahr",
                "domain": "radioalbahr.dj",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.ap.org/ap/APEducationNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/arts"],
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
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
        ],
    },
    "DO": {
        "name": "Dominican Republic",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Listín Diario",
                "domain": "listindiario.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "El Caribe",
                "domain": "elcaribe.com.do",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Hoy",
                "domain": "hoy.com.do",
                "rss_feeds": ["https://hoy.com.do/feed/"],
            },
            {
                "name": "El Día",
                "domain": "eldia.com.do",
                "rss_feeds": ["https://eldia.com.do/feed/"],
            },
            {
                "name": "Diario Libre",
                "domain": "diariolibre.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Corporación Estatal de Radio y Televisión",
                "domain": "certv.gob.do",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Televisión Dominicana",
                "domain": "rtvd.gob.do",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Santo Domingo",
                "domain": "radiosantodomingo.do",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio Santiago",
                "domain": "radiosantiago.do",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Radio San Pedro",
                "domain": "radiosanpedro.do",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews/science"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/commoditiesNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/health/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["need to be populated with proper rss of same country and edit feed name to be related to rss"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/technology.xml"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/batteryNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-business"],
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
