
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
News sources for countries chunk 14

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "PK": {
        "name": "Pakistan",
        "language": "ur",  // Urdu
        "sources": [
            {
                "name": "Associated Press of Pakistan",
                "domain": "app.com.pk",
                "rss_feeds": ["https://www.app.com.pk/feed/"],
            },
            {
                "name": "Dawn",
                "domain": "dawn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "The News International",
                "domain": "thenews.com.pk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Express Tribune",
                "domain": "tribune.com.pk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Pakistan Television Corporation",
                "domain": "ptv.com.pk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Pakistan",
                "domain": "radio.gov.pk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio FM 101",
                "domain": "fm101.pk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio City FM 89",
                "domain": "cityfm89.com",
                "rss_feeds": ["https://cityfm89.com/feed/"],
            },
            {
                "name": "Radio Power 99",
                "domain": "power99.com.pk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Samaa",
                "domain": "samaa.tv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Bloomberg",
                "domain": "bloomberg.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reuters Business",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "CNBC",
                "domain": "cnbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "MarketWatch",
                "domain": "marketwatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Yahoo Finance",
                "domain": "finance.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Forbes",
                "domain": "forbes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Fortune",
                "domain": "fortune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "PW": {
        "name": "Palau",
        "language": "pau",  // Palauan
        "sources": [
            {
                "name": "Palau Media Council",
                "domain": "palaumedia.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Tia Belau",
                "domain": "tiabelau.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Palau Broadcasting Corporation",
                "domain": "pbc.pw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Palau",
                "domain": "radiopalau.pw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Palau News",
                "domain": "palaunews.pw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Pacific Islands News Association",
                "domain": "pina.com.fj",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Pacific Media Network",
                "domain": "pacificmedianetwork.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/livermoriumNews"],
            },
            {
                "name": "Radio Pasifik",
                "domain": "radiopasifik.pw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Te Uekera",
                "domain": "radioteuekera.pw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Palau One",
                "domain": "radiopalauone.pw",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Bloomberg",
                "domain": "bloomberg.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reuters Business",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "CNBC",
                "domain": "cnbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "MarketWatch",
                "domain": "marketwatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Yahoo Finance",
                "domain": "finance.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Forbes",
                "domain": "forbes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Fortune",
                "domain": "fortune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "PA": {
        "name": "Panama",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "La Prensa",
                "domain": "prensa.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "El Panamá América",
                "domain": "panamaamerica.com.pa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "La Estrella de Panamá",
                "domain": "laestrella.com.pa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Crítica",
                "domain": "critica.com.pa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Sistema Estatal de Radio y Televisión",
                "domain": "sertv.gob.pa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Panamá",
                "domain": "radiopanama.com.pa",
                "rss_feeds": ["https://radiopanama.com.pa/feed/"],
            },
            {
                "name": "Radio KW Continente",
                "domain": "kwcontinente.com",
                "rss_feeds": ["https://kwcontinente.com/feed/"],
            },
            {
                "name": "Radio Exitosa",
                "domain": "radioexitosa.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Panamá América",
                "domain": "radiopanamaamerica.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio RPC",
                "domain": "rpcradio.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "El País",
                "domain": "elpais.com",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/autosNews"
                ],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.es",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/defenseNews"
                ],
            },
            {
                "name": "ABC España",
                "domain": "abc.es",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "La Vanguardia",
                "domain": "lavanguardia.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/politics/rss.xml"],
            },
            {
                "name": "El Periódico",
                "domain": "elperiodico.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "20 Minutos",
                "domain": "20minutos.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Público",
                "domain": "publico.es",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/manchester/rss.xml"],
            },
            {
                "name": "La Razón",
                "domain": "larazon.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "El Confidencial",
                "domain": "elconfidencial.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "El Independiente",
                "domain": "elindependiente.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/oganessonNews"],
            },
        ],
    },
    "PG": {
        "name": "Papua New Guinea",
        "language": "en",  // English
        "sources": [
            {
                "name": "Papua New Guinea Post-Courier",
                "domain": "postcourier.com.pg",
                "rss_feeds": ["https://postcourier.com.pg/feed/"],
            },
            {
                "name": "The National",
                "domain": "thenational.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "NBC PNG",
                "domain": "nbc.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio PNG",
                "domain": "radiopng.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Morobe",
                "domain": "radiomorobe.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio East New Britain",
                "domain": "radioenb.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Western Highlands",
                "domain": "radiowh.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Southern Highlands",
                "domain": "radiosh.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Gulf",
                "domain": "radiogulf.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Central",
                "domain": "radiocentral.com.pg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Bloomberg",
                "domain": "bloomberg.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reuters Business",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "CNBC",
                "domain": "cnbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "MarketWatch",
                "domain": "marketwatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Yahoo Finance",
                "domain": "finance.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Forbes",
                "domain": "forbes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Fortune",
                "domain": "fortune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "PY": {
        "name": "Paraguay",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "ABC Color",
                "domain": "abc.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Última Hora",
                "domain": "ultimahora.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "La Nación",
                "domain": "lanacion.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Hoy",
                "domain": "hoy.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Nacional del Paraguay",
                "domain": "radionacional.gov.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Ñandutí",
                "domain": "nanduti.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Cardinal",
                "domain": "radiocardinal.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio 1º de Marzo",
                "domain": "radio1demarzo.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Cáritas",
                "domain": "radiocaritas.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Viva",
                "domain": "radioviva.com.py",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "El País",
                "domain": "elpais.com",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/autosNews"
                ],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.es",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/defenseNews"
                ],
            },
            {
                "name": "ABC España",
                "domain": "abc.es",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "La Vanguardia",
                "domain": "lavanguardia.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/politics/rss.xml"],
            },
            {
                "name": "El Periódico",
                "domain": "elperiodico.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "20 Minutos",
                "domain": "20minutos.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Público",
                "domain": "publico.es",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/manchester/rss.xml"],
            },
            {
                "name": "La Razón",
                "domain": "larazon.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "El Confidencial",
                "domain": "elconfidencial.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "El Independiente",
                "domain": "elindependiente.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/oganessonNews"],
            },
        ],
    },
    "PE": {
        "name": "Peru",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Comercio",
                "domain": "elcomercio.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "La República",
                "domain": "larepublica.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Perú 21",
                "domain": "peru21.pe",
                "rss_feeds": ["https://peru21.pe/feed/"],
            },
            {
                "name": "Correo",
                "domain": "correo.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Andina",
                "domain": "andina.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Instituto Nacional de Radio y Televisión del Perú",
                "domain": "tvperu.gob.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Nacional del Perú",
                "domain": "radionacional.com.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Programas del Perú",
                "domain": "rpp.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Capital",
                "domain": "radiocapital.com.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Moda",
                "domain": "radiomoda.com.pe",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "El País",
                "domain": "elpais.com",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/autosNews"
                ],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.es",
                "rss_feeds": [
                    "https://feeds.reuters.com/reuters/defenseNews"
                ],
            },
            {
                "name": "ABC España",
                "domain": "abc.es",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "La Vanguardia",
                "domain": "lavanguardia.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/politics/rss.xml"],
            },
            {
                "name": "El Periódico",
                "domain": "elperiodico.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "20 Minutos",
                "domain": "20minutos.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "Público",
                "domain": "publico.es",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/manchester/rss.xml"],
            },
            {
                "name": "La Razón",
                "domain": "larazon.es",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
            },
            {
                "name": "El Confidencial",
                "domain": "elconfidencial.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/bankruptcyNews"],
            },
            {
                "name": "El Independiente",
                "domain": "elindependiente.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/oganessonNews"],
            },
        ],
    },
    "PH": {
        "name": "Philippines",
        "language": "tl",  // Tagalog
        "sources": [
            {
                "name": "Philippine News Agency",
                "domain": "pna.gov.ph",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Philippine Daily Inquirer",
                "domain": "inquirer.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "The Philippine Star",
                "domain": "philstar.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Manila Bulletin",
                "domain": "mb.com.ph",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "ABS-CBN News",
                "domain": "news.abs-cbn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "GMA News",
                "domain": "gmanews.tv",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Pilipinas",
                "domain": "radiopilipinas.gov.ph",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "DZMM",
                "domain": "dzmm.com.ph",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "DZBB",
                "domain": "dzbb.com.ph",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "DZRH",
                "domain": "dzrh.com.ph",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Bloomberg",
                "domain": "bloomberg.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reuters Business",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "CNBC",
                "domain": "cnbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "MarketWatch",
                "domain": "marketwatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Yahoo Finance",
                "domain": "finance.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Forbes",
                "domain": "forbes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Fortune",
                "domain": "fortune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "PL": {
        "name": "Poland",
        "language": "pl",  // Polish
        "sources": [
            {
                "name": "Gazeta Wyborcza",
                "domain": "wyborcza.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rzeczpospolita",
                "domain": "rp.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Polskie Radio",
                "domain": "polskieradio.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "TVP",
                "domain": "tvp.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Polsat",
                "domain": "polsat.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Zet",
                "domain": "radiozet.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Eska",
                "domain": "eska.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio RMF FM",
                "domain": "rmf.fm",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Maryja",
                "domain": "radiomaryja.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio TOK FM",
                "domain": "tokfm.pl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Bloomberg",
                "domain": "bloomberg.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reuters Business",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "CNBC",
                "domain": "cnbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "MarketWatch",
                "domain": "marketwatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Yahoo Finance",
                "domain": "finance.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Forbes",
                "domain": "forbes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Fortune",
                "domain": "fortune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "PT": {
        "name": "Portugal",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Público",
                "domain": "publico.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Diário de Notícias",
                "domain": "dn.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Jornal de Notícias",
                "domain": "jn.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Correio da Manhã",
                "domain": "cmjornal.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rádio e Televisão de Portugal",
                "domain": "rtp.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rádio Renascença",
                "domain": "rr.sapo.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rádio Comercial",
                "domain": "radiocomercial.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rádio Nova",
                "domain": "radionova.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rádio Cidade",
                "domain": "radiocidade.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Rádio Clube Português",
                "domain": "radioclube.pt",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The Economist",
                "domain": "economist.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Financial Times",
                "domain": "ft.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/defenseNews"],
            },
            {
                "name": "The Wall Street Journal",
                "domain": "wsj.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Bloomberg",
                "domain": "bloomberg.com",
                "rss_feeds": ["https://www.euronews.com/rss/business"],
            },
            {
                "name": "Reuters Business",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "CNBC",
                "domain": "cnbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "MarketWatch",
                "domain": "marketwatch.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Yahoo Finance",
                "domain": "finance.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Forbes",
                "domain": "forbes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Fortune",
                "domain": "fortune.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
        ],
    },
    "QA": {
        "name": "Qatar",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Qatar News Agency",
                "domain": "qna.org.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Al-Raya",
                "domain": "raya.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Al-Watan",
                "domain": "al-watan.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Al-Sharq",
                "domain": "al-sharq.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Qatar Radio and Television Corporation",
                "domain": "qrt.com.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Qatar",
                "domain": "radioqatar.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Doha",
                "domain": "radiodoha.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Al-Rayyan",
                "domain": "radioalrayyan.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Al-Khor",
                "domain": "radioalkhor.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            {
                "name": "Radio Al-Wakrah",
                "domain": "radioalwakrah.qa",
                "rss_feeds": ["https://feeds.reuters.com/reuters/autosNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/politics.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://www.afp.com/en/news/politics/feed"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.euronews.com/rss/sports"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/railwayNews"],
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
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/entertainment.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/neptuniumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/palladiumNews"],
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
