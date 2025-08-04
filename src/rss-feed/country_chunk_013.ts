
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
News sources for countries chunk 13

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "NR": {
        "name": "Nauru",
        "language": "na",  // Nauruan
        "sources": [
            {
                "name": "Nauru Media Bureau",
                "domain": "naurugov.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Nauru Broadcasting Service",
                "domain": "nbs.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nauru",
                "domain": "radionauru.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Nauru News",
                "domain": "nauru-news.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Pacific Islands News Association",
                "domain": "pina.com.fj",
                "rss_feeds": ["https://www.pina.com.fj/feed/"],
            },
            {
                "name": "Pacific Media Network",
                "domain": "pacificmedianetwork.org",
                "rss_feeds": ["https://pacificmedianetwork.org/feed/"],
            },
            {
                "name": "Radio Pasifik",
                "domain": "radiopasifik.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Te Uekera",
                "domain": "radioteuekera.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nauru One",
                "domain": "radionauruone.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nauru Two",
                "domain": "radionauru2.nr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "NP": {
        "name": "Nepal",
        "language": "ne",  // Nepali
        "sources": [
            {
                "name": "Rastriya Samachar Samiti",
                "domain": "rss.gov.np",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The Kathmandu Post",
                "domain": "kathmandupost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The Himalayan Times",
                "domain": "thehimalayantimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Nepal News",
                "domain": "nepalnews.com",
                "rss_feeds": ["https://nepalnews.com/feed/"],
            },
            {
                "name": "Nepal Television",
                "domain": "ntv.org.np",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nepal",
                "domain": "radionepal.gov.np",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Kantipur",
                "domain": "radiokantipur.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Annapurna",
                "domain": "radioannapurna.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Sagarmatha",
                "domain": "radiosagarmatha.org.np",
                "rss_feeds": ["https://radiosagarmatha.org.np/feed/"],
            },
            {
                "name": "Radio Nepal FM",
                "domain": "radionepalfm.gov.np",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "NL": {
        "name": "Netherlands",
        "language": "nl",  // Dutch
        "sources": [
            {
                "name": "NRC Handelsblad",
                "domain": "nrc.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "De Volkskrant",
                "domain": "volkskrant.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Trouw",
                "domain": "trouw.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Het Parool",
                "domain": "parool.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Algemeen Dagblad",
                "domain": "ad.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Nederlandse Publieke Omroep",
                "domain": "npostart.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {"name": "NOS", "domain": "nos.nl", "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"]},
            {
                "name": "Radio 1",
                "domain": "radio1.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio 2",
                "domain": "radio2.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio 3FM",
                "domain": "3fm.nl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "NZ": {
        "name": "New Zealand",
        "language": "en",  // English
        "sources": [
            {
                "name": "The New Zealand Herald",
                "domain": "nzherald.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Stuff",
                "domain": "stuff.co.nz",
                "rss_feeds": ["https://www.stuff.co.nz/feed/"],
            },
            {
                "name": "The Dominion Post",
                "domain": "stuff.co.nz/dominion-post",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The Press",
                "domain": "stuff.co.nz/the-press",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio New Zealand",
                "domain": "rnz.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "New Zealand Broadcasting Corporation",
                "domain": "nzbc.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Live",
                "domain": "radiolive.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The Rock",
                "domain": "therock.net.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "ZM",
                "domain": "zm.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The Edge",
                "domain": "theedge.co.nz",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "NI": {
        "name": "Nicaragua",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Nuevo Diario",
                "domain": "elnuevodiario.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "La Prensa",
                "domain": "laprensa.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Confidencial",
                "domain": "confidencial.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Nicaragua News",
                "domain": "nicaraguanews.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Canal 2",
                "domain": "canal2.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nicaragua",
                "domain": "radionicaragua.com.ni",
                "rss_feeds": ["https://radionicaragua.com.ni/feed/"],
            },
            {
                "name": "Radio Corporación",
                "domain": "radiocorporacion.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio La Primerísima",
                "domain": "radiolaprimerisima.com",
                "rss_feeds": ["https://radiolaprimerisima.com/feed/"],
            },
            {
                "name": "Radio Ya",
                "domain": "radioya.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Camoapa",
                "domain": "radiocamoapa.com.ni",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "El País",
                "domain": "elpais.com",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.es",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC España",
                "domain": "abc.es",
                "rss_feeds": ["https://www.abc.es/rss/feeds/abc_Internacional.xml"],
            },
            {
                "name": "La Vanguardia",
                "domain": "lavanguardia.com",
                "rss_feeds": ["https://www.lavanguardia.com/rss/internacional.xml"],
            },
            {
                "name": "El Periódico",
                "domain": "elperiodico.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "20 Minutos",
                "domain": "20minutos.es",
                "rss_feeds": ["https://www.20minutos.es/rss/internacional/"],
            },
            {
                "name": "Público",
                "domain": "publico.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "La Razón",
                "domain": "larazon.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "El Confidencial",
                "domain": "elconfidencial.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "El Independiente",
                "domain": "elindependiente.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
        ],
    },
    "NE": {
        "name": "Niger",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Agence Nigérienne de Presse",
                "domain": "anp.ne",
                "rss_feeds": ["https://www.anp.ne/feed/"],
            },
            {
                "name": "Le Sahel",
                "domain": "lesahel.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Le Républicain",
                "domain": "lerepublicain-niger.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Niger News",
                "domain": "nigernews.ne",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Office de Radiodiffusion Télévision du Niger",
                "domain": "ortn.ne",
                "rss_feeds": ["https://www.ortn.ne/feed/"],
            },
            {
                "name": "Radio Niger",
                "domain": "radioniger.ne",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Anfani",
                "domain": "radioanfani.ne",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio R&M",
                "domain": "radiorandm.ne",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Tambara",
                "domain": "radiotambara.ne",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Sarounia",
                "domain": "radiosarounia.ne",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Le Monde",
                "domain": "lemonde.fr",
                "rss_feeds": ["https://www.lemonde.fr/rss/une.xml"],
            },
            {
                "name": "Le Figaro",
                "domain": "lefigaro.fr",
                "rss_feeds": ["https://www.lefigaro.fr/rss/figaro_actualites.xml"],
            },
            {
                "name": "Libération",
                "domain": "liberation.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "L'Équipe",
                "domain": "lequipe.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Le Parisien",
                "domain": "leparisien.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "L'Express",
                "domain": "lexpress.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Le Point",
                "domain": "lepoint.fr",
                "rss_feeds": ["https://www.lepoint.fr/rss.xml"],
            },
            {
                "name": "L'Obs",
                "domain": "nouvelobs.com",
                "rss_feeds": ["https://www.nouvelobs.com/rss.xml"],
            },
            {
                "name": "Marianne",
                "domain": "marianne.net",
                "rss_feeds": ["https://www.marianne.net/rss.xml"],
            },
            {
                "name": "Valeurs Actuelles",
                "domain": "valeursactuelles.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
        ],
    },
    "NG": {
        "name": "Nigeria",
        "language": "en",  // English
        "sources": [
            {
                "name": "Nigerian News Agency",
                "domain": "nan.ng",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The Guardian",
                "domain": "guardian.ng",
                "rss_feeds": ["https://guardian.ng/feed/"],
            },
            {
                "name": "Vanguard",
                "domain": "vanguardngr.com",
                "rss_feeds": ["https://www.vanguardngr.com/feed/"],
            },
            {
                "name": "This Day",
                "domain": "thisdaylive.com",
                "rss_feeds": ["https://www.thisdaylive.com/feed/"],
            },
            {
                "name": "The Punch",
                "domain": "punchng.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Nigerian Television Authority",
                "domain": "nta.ng",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nigeria",
                "domain": "radionigeria.gov.ng",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Continental",
                "domain": "radiocontinental.com.ng",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio One",
                "domain": "radioone.com.ng",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Cool FM",
                "domain": "coolfm.ng",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "MK": {
        "name": "North Macedonia",
        "language": "mk",  // Macedonian
        "sources": [
            {
                "name": "Macedonian Information Agency",
                "domain": "mia.mk",
                "rss_feeds": ["https://mia.mk/feed/"],
            },
            {
                "name": "Makedonska Radio Televizija",
                "domain": "mrt.com.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Skopje",
                "domain": "radioskopje.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Kanal 77",
                "domain": "kanal77.com.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Antenna 5",
                "domain": "antenna5.com.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Free Macedonia",
                "domain": "radiofreemacedonia.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Ohrid",
                "domain": "radioohrid.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Bitola",
                "domain": "radiobitola.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Kumanovo",
                "domain": "radiokumanovo.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Stip",
                "domain": "radiostip.mk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "NO": {
        "name": "Norway",
        "language": "no",  // Norwegian
        "sources": [
            {
                "name": "Aftenposten",
                "domain": "aftenposten.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {"name": "VG", "domain": "vg.no", "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"]},
            {
                "name": "Dagbladet",
                "domain": "dagbladet.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NRK",
                "domain": "nrk.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "TV 2",
                "domain": "tv2.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Norge",
                "domain": "radionorge.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {"name": "P4", "domain": "p4.no", "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"]},
            {
                "name": "Radio 1",
                "domain": "radio1.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nova",
                "domain": "radionova.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Rock",
                "domain": "radiorock.no",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Guardian",
                "domain": "theguardian.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "The New York Times",
                "domain": "nytimes.com",
                "rss_feeds": ["https://feeds.ap.org/ap/APEntertainmentNews"],
            },
            {
                "name": "The Washington Post",
                "domain": "washingtonpost.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Los Angeles Times",
                "domain": "latimes.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/culture.xml"],
            },
            {
                "name": "USA Today",
                "domain": "usatoday.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "NPR News",
                "domain": "npr.org",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
            },
            {
                "name": "PBS NewsHour",
                "domain": "pbs.org",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/iodineNews"
                ],
            },
            {
                "name": "ABC News",
                "domain": "abcnews.go.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "CBS News",
                "domain": "cbsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/miningNews"],
            },
            {
                "name": "NBC News",
                "domain": "nbcnews.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
        ],
    },
    "OM": {
        "name": "Oman",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Oman News Agency",
                "domain": "ona.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Oman Daily Observer",
                "domain": "omanobserver.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Times of Oman",
                "domain": "timesofoman.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Al-Watan",
                "domain": "alwatan.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Oman Radio and Television",
                "domain": "ort.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Oman",
                "domain": "radiooman.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Muscat",
                "domain": "radiomuscat.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Salalah",
                "domain": "radiosalalah.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Sohar",
                "domain": "radiosohar.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "Radio Nizwa",
                "domain": "radionizwa.om",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/business.xml"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/cobaltNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/goldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/hydrogenNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/iodineNews"],
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
