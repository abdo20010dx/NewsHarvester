
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
News sources for countries chunk 16

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "SN": {
        "name": "Senegal",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Le Soleil",
                "domain": "lesoleil.sn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sud Quotidien",
                "domain": "sudonline.sn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "L'Observateur",
                "domain": "lobservateur.sn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Le Quotidien",
                "domain": "lequotidien.sn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Walf Fadjri",
                "domain": "walf-groupe.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seneweb",
                "domain": "seneweb.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Dakar Actu",
                "domain": "dakaractu.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Senegal News",
                "domain": "senegalnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Agence de Presse Senegalaise",
                "domain": "aps.sn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Radio Senegal",
                "domain": "rts.sn",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "Le Monde",
                "domain": "lemonde.fr",
                "rss_feeds": ["https://www.afp.com/en/news/science/feed"],
            },
            {
                "name": "Le Figaro",
                "domain": "lefigaro.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Libération",
                "domain": "liberation.fr",
                "rss_feeds": ["https://www.liberation.fr/rss/"],
            },
            {
                "name": "L'Équipe",
                "domain": "lequipe.fr",
                "rss_feeds": ["https://www.lequipe.fr/rss/actu_rss.xml"],
            },
            {
                "name": "Le Parisien",
                "domain": "leparisien.fr",
                "rss_feeds": ["https://www.leparisien.fr/rss.xml"],
            },
            {
                "name": "L'Express",
                "domain": "lexpress.fr",
                "rss_feeds": ["https://www.lexpress.fr/rss/alaune.xml"],
            },
            {
                "name": "Le Point",
                "domain": "lepoint.fr",
                "rss_feeds": ["https://feeds.reuters.com/reuters/taxNews"],
            },
            {
                "name": "L'Obs",
                "domain": "nouvelobs.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/plutoniumNews"],
            },
            {
                "name": "Marianne",
                "domain": "marianne.net",
                "rss_feeds": ["https://www.euronews.com/rss/arts"],
            },
            {
                "name": "Valeurs Actuelles",
                "domain": "valeursactuelles.com",
                "rss_feeds": ["https://www.valeursactuelles.com/rss.xml"],
            },
        ],
    },
    "RS": {
        "name": "Serbia",
        "language": "sr",  // Serbian
        "sources": [
            {
                "name": "Blic",
                "domain": "blic.rs",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Politika",
                "domain": "politika.rs",
                "rss_feeds": ["https://www.politika.rs/rss"],
            },
            {
                "name": "Danas",
                "domain": "danas.rs",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Nova.rs",
                "domain": "nova.rs",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Kurir",
                "domain": "kurir.rs",
                "rss_feeds": ["https://www.kurir.rs/rss"],
            },
            {
                "name": "Tanjug",
                "domain": "tanjug.rs",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {"name": "Beta", "domain": "beta.rs", "rss_feeds": ["https://beta.rs/rss"]},
            {
                "name": "RTS",
                "domain": "rts.rs",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "N1",
                "domain": "n1info.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "B92",
                "domain": "b92.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SC": {
        "name": "Seychelles",
        "language": "en",  // English
        "sources": [
            {
                "name": "Seychelles News Agency",
                "domain": "seychellesnewsagency.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Nation",
                "domain": "nation.sc",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Today in Seychelles",
                "domain": "todayinseychelles.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Broadcasting Corporation",
                "domain": "sbc.sc",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles News",
                "domain": "seychellesnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Times",
                "domain": "seychellestimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Herald",
                "domain": "seychellesherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Observer",
                "domain": "seychellesobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Daily",
                "domain": "seychellesdaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Seychelles Press",
                "domain": "seychellespress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SL": {
        "name": "Sierra Leone",
        "language": "en",  // English
        "sources": [
            {
                "name": "Awoko",
                "domain": "awoko.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone Telegraph",
                "domain": "thesierraleonetelegraph.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Concord Times",
                "domain": "concordtimes.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Express Media",
                "domain": "sierraexpressmedia.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone News",
                "domain": "sierraleonenews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone Broadcasting Corporation",
                "domain": "slbc.sl",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone Times",
                "domain": "sierraleonetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone Herald",
                "domain": "sierraleoneherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone Observer",
                "domain": "sierraleoneobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Sierra Leone Daily",
                "domain": "sierraleonedaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SG": {
        "name": "Singapore",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Straits Times",
                "domain": "straitstimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Channel News Asia",
                "domain": "channelnewsasia.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Today Online",
                "domain": "todayonline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Yahoo Singapore",
                "domain": "sg.yahoo.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "The Business Times",
                "domain": "businesstimes.com.sg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Lianhe Zaobao",
                "domain": "zaobao.com.sg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Lianhe Wanbao",
                "domain": "wanbao.com.sg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Shin Min Daily News",
                "domain": "shinmin.sg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Berita Harian",
                "domain": "beritaharian.sg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Tamil Murasu",
                "domain": "tamilmurasu.com.sg",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SK": {
        "name": "Slovakia",
        "language": "sk",  // Slovak
        "sources": [
            {
                "name": "SME",
                "domain": "sme.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Pravda",
                "domain": "pravda.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Hospodarske noviny",
                "domain": "hnonline.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Dennik N",
                "domain": "dennikn.sk",
                "rss_feeds": ["https://dennikn.sk/rss"],
            },
            {
                "name": "Aktuality.sk",
                "domain": "aktuality.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "TA3",
                "domain": "ta3.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "RTVS",
                "domain": "rtvs.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "TASR",
                "domain": "tasr.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "SITA",
                "domain": "sita.sk",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Slovak Spectator",
                "domain": "spectator.sme.sk",
                "rss_feeds": ["https://spectator.sme.sk/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SI": {
        "name": "Slovenia",
        "language": "sl",  // Slovenian
        "sources": [
            {
                "name": "Delo",
                "domain": "delo.si",
                "rss_feeds": ["https://www.delo.si/rss"],
            },
            {
                "name": "Vecer",
                "domain": "vecer.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Dnevnik",
                "domain": "dnevnik.si",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Finance",
                "domain": "finance.si",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "RTV Slovenija",
                "domain": "rtvslo.si",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "STA",
                "domain": "sta.si",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Slovenia Times",
                "domain": "sloveniatimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Slovenia News",
                "domain": "slovenianews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Slovenia Herald",
                "domain": "sloveniaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Slovenia Observer",
                "domain": "sloveniaobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SB": {
        "name": "Solomon Islands",
        "language": "en",  // English
        "sources": [
            {
                "name": "Solomon Islands Broadcasting Corporation",
                "domain": "sibconline.com.sb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Star",
                "domain": "solomonstarnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Times Online",
                "domain": "solomontimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands News",
                "domain": "solomonislandsnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands Government",
                "domain": "solomons.gov.sb",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands Times",
                "domain": "solomonislandstimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands Herald",
                "domain": "solomonislandsherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands Observer",
                "domain": "solomonislandsobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands Daily",
                "domain": "solomonislandsdaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Solomon Islands Press",
                "domain": "solomonislandspress.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
        ],
    },
    "SO": {
        "name": "Somalia",
        "language": "so",  // Somali
        "sources": [
            {
                "name": "Radio Mogadishu",
                "domain": "radiomogadishu.so",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somali National News Agency",
                "domain": "sonna.so",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Hiiraan Online",
                "domain": "hiiraan.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Garowe Online",
                "domain": "garoweonline.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somalia News",
                "domain": "somaliaradio.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somalia Times",
                "domain": "somaliaradio.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somalia Herald",
                "domain": "somaliaherald.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somalia Observer",
                "domain": "somaliaobserver.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somalia Daily",
                "domain": "somaliadaily.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Somalia Press",
                "domain": "somaliaradio.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/business/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://feeds.reuters.com/reuters/plutoniumNews"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/taxNews"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
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
                "rss_feeds": ["https://feeds.reuters.com/reuters/plutoniumNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/business/rss.xml"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
        ],
    },
    "ZA": {
        "name": "South Africa",
        "language": "en",  // English
        "sources": [
            {
                "name": "News24",
                "domain": "news24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Times Live",
                "domain": "timeslive.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Mail & Guardian",
                "domain": "mg.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Business Day",
                "domain": "businesslive.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Daily Maverick",
                "domain": "dailymaverick.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "IOL",
                "domain": "iol.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "The Citizen",
                "domain": "citizen.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "SABC News",
                "domain": "sabcnews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "eNCA",
                "domain": "enca.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "South African Broadcasting Corporation",
                "domain": "sabc.co.za",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "The New Yorker",
                "domain": "newyorker.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/coperniciumNews"],
            },
            {
                "name": "Harper's Magazine",
                "domain": "harpers.org",
                "rss_feeds": ["https://www.france24.com/en/entertainment/rss"],
            },
            {
                "name": "The Nation",
                "domain": "thenation.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/fleroviumNews"],
            },
            {
                "name": "Mother Jones",
                "domain": "motherjones.com",
                "rss_feeds": ["https://www.afp.com/en/news/sports/feed"],
            },
            {
                "name": "The Progressive",
                "domain": "progressive.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "In These Times",
                "domain": "inthesetimes.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Jacobin",
                "domain": "jacobin.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/blockchainNews"],
            },
            {
                "name": "Dissent",
                "domain": "dissentmagazine.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/topNews"],
            },
            {
                "name": "The Baffler",
                "domain": "thebaffler.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
            },
            {
                "name": "Current Affairs",
                "domain": "currentaffairs.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/investmentNews"],
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
