
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
News sources for countries chunk 15

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "RO": {
        "name": "Romania",
        "language": "ro",  // Romanian
        "sources": [
            {
                "name": "Digi24",
                "domain": "digi24.ro",
                "rss_feeds": ["https://www.digi24.ro/rss"],
            },
            {
                "name": "Realitatea TV",
                "domain": "realitatea.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "HotNews",
                "domain": "hotnews.ro",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Gandul",
                "domain": "gandul.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Romania Libera",
                "domain": "romanialibera.ro",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Adevarul",
                "domain": "adevarul.ro",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Evenimentul Zilei",
                "domain": "evz.ro",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Jurnalul National",
                "domain": "jurnalul.ro",
                "rss_feeds": ["https://jurnalul.ro/rss"],
            },
            {
                "name": "Ziare.com",
                "domain": "ziare.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Mediafax",
                "domain": "mediafax.ro",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "RU": {
        "name": "Russia",
        "language": "ru",  // Russian
        "sources": [
            {
                "name": "TASS",
                "domain": "tass.com",
                "rss_feeds": ["https://tass.com/rss/v2.xml"],
            },
            {
                "name": "RIA Novosti",
                "domain": "ria.ru",
                "rss_feeds": ["https://ria.ru/export/rss2/index.xml"],
            },
            {
                "name": "Interfax",
                "domain": "interfax.ru",
                "rss_feeds": ["https://www.interfax.ru/rss.asp"],
            },
            {
                "name": "Kommersant",
                "domain": "kommersant.ru",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Vedomosti",
                "domain": "vedomosti.ru",
                "rss_feeds": ["https://www.vedomosti.ru/rss/news"],
            },
            {
                "name": "RBK",
                "domain": "rbc.ru",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Lenta.ru",
                "domain": "lenta.ru",
                "rss_feeds": ["https://lenta.ru/rss"],
            },
            {
                "name": "Gazeta.ru",
                "domain": "gazeta.ru",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {"name": "Izvestia", "domain": "iz.ru", "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"]},
            {
                "name": "Rossiyskaya Gazeta",
                "domain": "rg.ru",
                "rss_feeds": ["https://rg.ru/xml/index.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "RW": {
        "name": "Rwanda",
        "language": "en",  // English (official language)
        "sources": [
            {
                "name": "The New Times",
                "domain": "newtimes.co.rw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Rwanda Today",
                "domain": "rwandatoday.africa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "KT Press",
                "domain": "ktpress.rw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Igihe",
                "domain": "igihe.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Rwanda Broadcasting Agency",
                "domain": "rba.co.rw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Rwanda News Agency",
                "domain": "rnanews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Chronicles",
                "domain": "chronicles.rw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Rwanda Dispatch",
                "domain": "rwandadispatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Taarifa",
                "domain": "taarifa.rw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Rwanda Eye",
                "domain": "rwandaeye.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "KN": {
        "name": "Saint Kitts and Nevis",
        "language": "en",  // English
        "sources": [
            {
                "name": "SKN Vibes",
                "domain": "sknvibes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The St. Kitts-Nevis Observer",
                "domain": "thestkittsnevisobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "WINN FM",
                "domain": "winnfm.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "ZIZ Broadcasting",
                "domain": "zizonline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Nevis Pages",
                "domain": "nevispages.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Labour Spokesman",
                "domain": "labourspokesman.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Caribbean News Now",
                "domain": "caribbeannewsnow.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Kitts & Nevis Information Service",
                "domain": "sknis.kn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Nevis News",
                "domain": "nevisnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Democrat",
                "domain": "thedemocrat.kn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "LC": {
        "name": "Saint Lucia",
        "language": "en",  // English
        "sources": [
            {
                "name": "St. Lucia News Online",
                "domain": "stlucianewsonline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "HTS Channel 4",
                "domain": "htsstlucia.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Lucia Times",
                "domain": "stluciatimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Voice",
                "domain": "thevoiceslu.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Lucia Star",
                "domain": "stluciastar.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Caribbean Broadcasting Network",
                "domain": "cbnstlucia.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Lucia News",
                "domain": "stlucianews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Lucia Information Service",
                "domain": "stlucia.gov.lc",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Lucia Mirror",
                "domain": "stluciamirror.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Lucia Herald",
                "domain": "stluciaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "VC": {
        "name": "Saint Vincent and the Grenadines",
        "language": "en",  // English
        "sources": [
            {
                "name": "Searchlight",
                "domain": "searchlight.vc",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The News",
                "domain": "thevincentian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Vincent Times",
                "domain": "stvincenttimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "iWitness News",
                "domain": "iwnsvg.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Vincent and the Grenadines Information Service",
                "domain": "svgis.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "NBC Radio",
                "domain": "nbcsvg.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Vincent Broadcasting Corporation",
                "domain": "svgbc.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Vincent News",
                "domain": "stvincentnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Vincent Herald",
                "domain": "stvincentherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "St. Vincent Observer",
                "domain": "stvincentobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "WS": {
        "name": "Samoa",
        "language": "en",  // English
        "sources": [
            {
                "name": "Samoa Observer",
                "domain": "samoaobserver.ws",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa News",
                "domain": "samoanews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Talamua",
                "domain": "talamua.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa Global News",
                "domain": "samoaglobalnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Radio New Zealand Pacific",
                "domain": "rnz.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa Government",
                "domain": "samoagovt.ws",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa Times",
                "domain": "samoanews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa News Network",
                "domain": "samoa-news.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa Daily News",
                "domain": "samoanews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Samoa Broadcasting Corporation",
                "domain": "sbc.ws",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Time Magazine",
                "domain": "time.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Newsweek",
                "domain": "newsweek.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "The Atlantic",
                "domain": "theatlantic.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Foreign Policy",
                "domain": "foreignpolicy.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/liverpool/rss.xml"],
            },
            {
                "name": "Foreign Affairs",
                "domain": "foreignaffairs.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
            },
            {
                "name": "The Diplomat",
                "domain": "thediplomat.com",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "World Politics Review",
                "domain": "worldpoliticsreview.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/automotiveNews"],
            },
            {
                "name": "Project Syndicate",
                "domain": "project-syndicate.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/businessNews"],
            },
            {
                "name": "Open Democracy",
                "domain": "opendemocracy.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Global Voices",
                "domain": "globalvoices.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
        ],
    },
    "SM": {
        "name": "San Marino",
        "language": "it",  // Italian
        "sources": [
            {
                "name": "San Marino RTV",
                "domain": "sanmarinortv.sm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Notizie",
                "domain": "sanmarinonotizie.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Fixing",
                "domain": "sanmarinofixing.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Republic",
                "domain": "sanmarinorepublic.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino News",
                "domain": "sanmarinonews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Government",
                "domain": "gov.sm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Herald",
                "domain": "sanmarinoherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Times",
                "domain": "sanmarinotimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Daily",
                "domain": "sanmarinodaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "San Marino Press",
                "domain": "sanmarinopress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Corriere della Sera",
                "domain": "corriere.it",
                "rss_feeds": ["https://www.corriere.it/rss/esteri.xml"],
            },
            {
                "name": "La Repubblica",
                "domain": "repubblica.it",
                "rss_feeds": ["https://www.repubblica.it/rss/esteri/rss2.0.xml"],
            },
            {
                "name": "La Stampa",
                "domain": "lastampa.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Il Sole 24 Ore",
                "domain": "ilsole24ore.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "ANSA",
                "domain": "ansa.it",
                "rss_feeds": ["https://www.ansa.it/sito/ansait_rss.xml"],
            },
            {
                "name": "AGI",
                "domain": "agi.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Adnkronos",
                "domain": "adnkronos.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Il Messaggero",
                "domain": "ilmessaggero.it",
                "rss_feeds": ["https://www.ilmessaggero.it/rss/esteri.xml"],
            },
            {
                "name": "Il Giornale",
                "domain": "ilgiornale.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Libero",
                "domain": "liberoquotidiano.it",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
        ],
    },
    "ST": {
        "name": "Sao Tome and Principe",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Tela Non",
                "domain": "telanon.info",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome and Principe News",
                "domain": "saotomeandprincipe.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Digital",
                "domain": "saotomedigital.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome News",
                "domain": "saotomenews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Government",
                "domain": "gov.st",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Times",
                "domain": "saotometimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Herald",
                "domain": "saotomeherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Observer",
                "domain": "saotomeobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Daily",
                "domain": "saotomedaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sao Tome Press",
                "domain": "saotomepress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Público",
                "domain": "publico.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Diário de Notícias",
                "domain": "dn.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Jornal de Notícias",
                "domain": "jn.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Correio da Manhã",
                "domain": "cmjornal.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Expresso",
                "domain": "expresso.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Sábado",
                "domain": "sabado.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Visão",
                "domain": "visao.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Observador",
                "domain": "observador.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Jornal Económico",
                "domain": "jornaleconomico.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Dinheiro Vivo",
                "domain": "dinheirovivo.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
        ],
    },
    "SA": {
        "name": "Saudi Arabia",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Saudi Press Agency",
                "domain": "spa.gov.sa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Al Arabiya",
                "domain": "alarabiya.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "Okaz",
                "domain": "okaz.com.sa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Al Riyadh",
                "domain": "alriyadh.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Al Hayat",
                "domain": "alhayat.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Al Watan",
                "domain": "alwatan.com.sa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Saudi Gazette",
                "domain": "saudigazette.com.sa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Arab News",
                "domain": "arabnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            {
                "name": "Al Eqtisadiah",
                "domain": "aleqt.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/dronesNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/sodiumNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://www.france24.com/en/sports/rss"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.france24.com/en/business/rss"],
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
