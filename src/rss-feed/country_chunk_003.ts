
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
News sources for countries chunk 3

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "BO": {
        "name": "Bolivia",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Los Tiempos",
                "domain": "lostiempos.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "El Deber",
                "domain": "eldeber.com.bo",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "La Razón",
                "domain": "la-razon.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Página Siete",
                "domain": "paginasiete.bo",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "El Diario",
                "domain": "eldiario.net",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Correo del Sur",
                "domain": "correodelsur.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Opinión",
                "domain": "opinion.com.bo",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Agencia Boliviana de Información",
                "domain": "abi.bo",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Bolivia TV",
                "domain": "boliviatv.bo",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Fides",
                "domain": "radiofides.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BA": {
        "name": "Bosnia and Herzegovina",
        "language": "bs",  // Bosnian
        "sources": [
            {
                "name": "Dnevni Avaz",
                "domain": "avaz.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Oslobođenje",
                "domain": "oslobodjenje.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Nezavisne Novine",
                "domain": "nezavisne.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Glas Srpske",
                "domain": "glassrpske.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Faktor",
                "domain": "faktor.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Klix",
                "domain": "klix.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "BHRT",
                "domain": "bhrt.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "RTRS",
                "domain": "rtrs.tv",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Federalna TV",
                "domain": "federalna.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Sarajevo",
                "domain": "radiosarajevo.ba",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BW": {
        "name": "Botswana",
        "language": "en",  // English
        "sources": [
            {
                "name": "Mmegi",
                "domain": "mmegi.bw",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Botswana Guardian",
                "domain": "guardian.co.bw",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "The Voice",
                "domain": "thevoicebw.com",
                "rss_feeds": ["https://thevoicebw.com/feed/"],
            },
            {
                "name": "Botswana Daily News",
                "domain": "dailynews.gov.bw",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Sunday Standard",
                "domain": "sundaystandard.info",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Botswana Gazette",
                "domain": "gazettebw.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Botswana Television",
                "domain": "btv.co.bw",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Botswana",
                "domain": "rb.co.bw",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Gabz FM",
                "domain": "gabzfm.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Yarona FM",
                "domain": "yarona.co.bw",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BR": {
        "name": "Brazil",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Globo",
                "domain": "globo.com",
                "rss_feeds": ["https://g1.globo.com/rss/g1/"],
            },
            {
                "name": "Folha de S.Paulo",
                "domain": "folha.uol.com.br",
                "rss_feeds": ["https://feeds.folha.uol.com.br/emcimadahora/rss091.xml"],
            },
            {
                "name": "Estadão",
                "domain": "estadao.com.br",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "O Globo",
                "domain": "oglobo.globo.com",
                "rss_feeds": ["https://oglobo.globo.com/rss.xml"],
            },
            {
                "name": "Veja",
                "domain": "veja.abril.com.br",
                "rss_feeds": ["https://veja.abril.com.br/feed/"],
            },
            {
                "name": "Época",
                "domain": "epoca.globo.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "IstoÉ",
                "domain": "istoedinheiro.com.br",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Exame",
                "domain": "exame.com",
                "rss_feeds": ["https://exame.com/feed/"],
            },
            {
                "name": "Valor Econômico",
                "domain": "valor.com.br",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Correio Braziliense",
                "domain": "correiobraziliense.com.br",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BN": {
        "name": "Brunei",
        "language": "ms",  // Malay
        "sources": [
            {
                "name": "Borneo Bulletin",
                "domain": "borneobulletin.com.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "The Brunei Times",
                "domain": "bt.com.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Media Permata",
                "domain": "mediapermata.com.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Pelita Brunei",
                "domain": "pelitabrunei.gov.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Televisyen Brunei",
                "domain": "rtb.gov.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Brunei News",
                "domain": "bruneinews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Brunei FM",
                "domain": "bruneifm.gov.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "KRISTAL FM",
                "domain": "kristalfm.gov.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "PELANGI FM",
                "domain": "pelangifm.gov.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "HARMONI FM",
                "domain": "harmonifm.gov.bn",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BG": {
        "name": "Bulgaria",
        "language": "bg",  // Bulgarian
        "sources": [
            {
                "name": "Dnevnik",
                "domain": "dnevnik.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Capital",
                "domain": "capital.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Sega",
                "domain": "sega.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Trud",
                "domain": "trud.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "24 Chasa",
                "domain": "24chasa.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Nova TV",
                "domain": "nova.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {"name": "bTV", "domain": "btv.bg", "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"]},
            {"name": "BNT", "domain": "bnt.bg", "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"]},
            {"name": "BNR", "domain": "bnr.bg", "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"]},
            {
                "name": "Darik Radio",
                "domain": "darik.bg",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BF": {
        "name": "Burkina Faso",
        "language": "fr",  // French
        "sources": [
            {
                "name": "Sidwaya",
                "domain": "sidwaya.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "L'Observateur Paalga",
                "domain": "observateur.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Le Pays",
                "domain": "lepays.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "L'Express du Faso",
                "domain": "lexpressdufaso.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Le Quotidien",
                "domain": "lequotidien.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "RTB",
                "domain": "rtb.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Oméga",
                "domain": "radioomega.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Horizon",
                "domain": "radiohorizon.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Pulsar",
                "domain": "radiopulsar.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Savane",
                "domain": "radiosavane.bf",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "BI": {
        "name": "Burundi",
        "language": "rn",  // Kirundi
        "sources": [
            {
                "name": "Le Renouveau",
                "domain": "renouveau.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Iwacu",
                "domain": "iwacu-burundi.org",
                "rss_feeds": ["https://www.iwacu-burundi.org/feed/"],
            },
            {
                "name": "RTNB",
                "domain": "rtnb.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Isanganiro",
                "domain": "isanganiro.org",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Bonesha",
                "domain": "bonesha.fm",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Publique Africaine",
                "domain": "rpa.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio CCIB FM+",
                "domain": "ccibfm.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Rema FM",
                "domain": "remafm.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Umwizero",
                "domain": "umwizero.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Radio Culture",
                "domain": "radioculture.bi",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
            },
        ],
    },
    "KH": {
        "name": "Cambodia",
        "language": "km",  // Khmer
        "sources": [
            {
                "name": "The Phnom Penh Post",
                "domain": "phnompenhpost.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "The Cambodia Daily",
                "domain": "cambodiadaily.com",
                "rss_feeds": ["https://www.cambodiadaily.com/feed/"],
            },
            {
                "name": "Khmer Times",
                "domain": "khmertimeskh.com",
                "rss_feeds": ["https://www.khmertimeskh.com/feed/"],
            },
            {
                "name": "Kampuchea Thmey",
                "domain": "kampucheathmey.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Rasmei Kampuchea",
                "domain": "rasmeinews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Koh Santepheap",
                "domain": "kohsantepheapdaily.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Cambodia News",
                "domain": "cambodianews.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "National Television of Kampuchea",
                "domain": "tvk.gov.kh",
                "rss_feeds": ["https://www.tvk.gov.kh/feed/"],
            },
            {
                "name": "National Radio of Cambodia",
                "domain": "rnk.gov.kh",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "Bayon TV",
                "domain": "bayontv.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://www.xinhuanet.com/english/rss/science.xml"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/virtualRealityNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://www.euronews.com/rss/science/world"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/england/glasgow/rss.xml"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/reuters/scienceNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.euronews.com/rss/science"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://www.afp.com/en/news/culture/feed"],
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
