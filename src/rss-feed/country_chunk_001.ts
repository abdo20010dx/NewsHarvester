
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
News sources for countries chunk 1

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "AF": {
        "name": "Afghanistan",
        "language": "ps",  // Pashto
        "sources": [
            {
                "name": "TOLOnews",
                "domain": "tolonews.com",
                "rss_feeds": ["https://tolonews.com/rss.xml"],
            },
            {
                "name": "Ariana News",
                "domain": "ariananews.af",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Khaama Press",
                "domain": "khaama.com",
                "rss_feeds": ["https://www.khaama.com/feed/"],
            },
            {
                "name": "Pajhwok Afghan News",
                "domain": "pajhwok.com",
                "rss_feeds": ["https://pajhwok.com/feed/"],
            },
            {
                "name": "Afghanistan Times",
                "domain": "afghanistantimes.af",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Daily Outlook Afghanistan",
                "domain": "outlookafghanistan.net",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Hasht-e Subh",
                "domain": "8am.af",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Etilaat Roz",
                "domain": "etilaatroz.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Afghan Voice Agency",
                "domain": "avapress.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Bakhtar News Agency",
                "domain": "bakhtarnews.af",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Persian",
                "domain": "bbc.com/persian",
                "rss_feeds": ["https://feeds.bbci.co.uk/persian/rss.xml"],
            },
            {
                "name": "Voice of America Dari",
                "domain": "voanews.com",
                "rss_feeds": ["https://www.voanews.com/api/zq$omekvi_"],
            },
            {
                "name": "Radio Free Europe",
                "domain": "rferl.org",
                "rss_feeds": ["https://www.rferl.org/api/zq$omekvi_"],
            },
            {
                "name": "Deutsche Welle Persian",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24 Persian",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AL": {
        "name": "Albania",
        "language": "sq",  // Albanian
        "sources": [
            {
                "name": "Top Channel",
                "domain": "top-channel.tv",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Klan TV",
                "domain": "klan.al",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "RTSH",
                "domain": "rtsh.al",
                "rss_feeds": ["https://rtsh.al/feed/"],
            },
            {
                "name": "Ora News",
                "domain": "oranews.tv",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "News 24",
                "domain": "news24.al",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Albanian Daily News",
                "domain": "albaniandailynews.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Balkan Insight",
                "domain": "balkaninsight.com",
                "rss_feeds": ["https://balkaninsight.com/feed/"],
            },
            {
                "name": "Exit News",
                "domain": "exit.al",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Gazeta Shqip",
                "domain": "gazeta-shqip.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Koha",
                "domain": "koha.net",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "DZ": {
        "name": "Algeria",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "El Watan",
                "domain": "elwatan.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Liberté",
                "domain": "liberte-algerie.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "El Khabar",
                "domain": "elkhabar.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Echorouk",
                "domain": "echorouknews.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Algérie Presse Service",
                "domain": "aps.dz",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "TSA",
                "domain": "tsa-algerie.com",
                "rss_feeds": ["https://www.tsa-algerie.com/feed/"],
            },
            {
                "name": "Algérie 360",
                "domain": "algerie360.com",
                "rss_feeds": ["https://www.algerie360.com/feed/"],
            },
            {
                "name": "Le Soir d'Algérie",
                "domain": "lesoirdalgerie.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Algérie Focus",
                "domain": "algerie-focus.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Maghreb Emergent",
                "domain": "maghrebemergent.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Arabic",
                "domain": "bbc.com/arabic",
                "rss_feeds": ["https://feeds.bbci.co.uk/arabic/rss.xml"],
            },
            {
                "name": "Al Jazeera Arabic",
                "domain": "aljazeera.net",
                "rss_feeds": ["https://www.aljazeera.net/rss"],
            },
            {
                "name": "France 24 Arabic",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/ar/rss"],
            },
            {
                "name": "Deutsche Welle Arabic",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-ar-all"],
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
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AD": {
        "name": "Andorra",
        "language": "ca",  // Catalan
        "sources": [
            {
                "name": "Diari d'Andorra",
                "domain": "diariandorra.ad",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "El Periòdic d'Andorra",
                "domain": "elperiodic.ad",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Bondia",
                "domain": "bondia.ad",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Andorra Difusió",
                "domain": "rtva.ad",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Radio Andorra",
                "domain": "radioandorra.ad",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Andorra TV",
                "domain": "andorratv.ad",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Catalunya Ràdio",
                "domain": "ccma.cat",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "TV3 Catalunya",
                "domain": "ccma.cat",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Ara",
                "domain": "ara.cat",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "El Punt Avui",
                "domain": "elpuntavui.cat",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AO": {
        "name": "Angola",
        "language": "pt",  // Portuguese
        "sources": [
            {
                "name": "Jornal de Angola",
                "domain": "jornaldeangola.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "O País",
                "domain": "opais.co.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Expansão",
                "domain": "expansao.co.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Angola Press",
                "domain": "angop.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Televisão Pública de Angola",
                "domain": "tpa.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Rádio Nacional de Angola",
                "domain": "rna.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Rádio Mais",
                "domain": "radiomais.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Rádio Despertar",
                "domain": "radiodespertar.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Rádio Ecclesia",
                "domain": "radioecclesia.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Rádio 5",
                "domain": "radio5.ao",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AG": {
        "name": "Antigua and Barbuda",
        "language": "en",  // English
        "sources": [
            {
                "name": "Antigua Observer",
                "domain": "antiguaobserver.com",
                "rss_feeds": ["https://antiguaobserver.com/feed/"],
            },
            {
                "name": "Antigua Sun",
                "domain": "antiguasun.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Caribbean News Now",
                "domain": "caribbeannewsnow.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Caribbean Media Corporation",
                "domain": "cmc.bb",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Caribbean 360",
                "domain": "caribbean360.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Loop Caribbean News",
                "domain": "loopnews.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Caribbean Journal",
                "domain": "caribjournal.com",
                "rss_feeds": ["https://www.caribjournal.com/feed/"],
            },
            {
                "name": "Caribbean Life News",
                "domain": "caribbeanlifenews.com",
                "rss_feeds": ["https://caribbeanlifenews.com/feed/"],
            },
            {
                "name": "Caribbean News Service",
                "domain": "caribbeannewsservice.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Caribbean Broadcasting Union",
                "domain": "cbu.org.bb",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AM": {
        "name": "Armenia",
        "language": "hy",  // Armenian
        "sources": [
            {
                "name": "Armenpress",
                "domain": "armenpress.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Public Radio of Armenia",
                "domain": "armradio.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Public Television of Armenia",
                "domain": "1tv.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "News.am",
                "domain": "news.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Panorama.am",
                "domain": "panorama.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Aravot",
                "domain": "aravot.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Azatutyun",
                "domain": "azatutyun.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Hetq",
                "domain": "hetq.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Civilnet",
                "domain": "civilnet.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Epress",
                "domain": "epress.am",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AR": {
        "name": "Argentina",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Clarín",
                "domain": "clarin.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "La Nación",
                "domain": "lanacion.com.ar",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Página/12",
                "domain": "pagina12.com.ar",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Infobae",
                "domain": "infobae.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Télam",
                "domain": "telam.com.ar",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Ámbito",
                "domain": "ambito.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Perfil",
                "domain": "perfil.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "El Cronista",
                "domain": "cronista.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Buenos Aires Herald",
                "domain": "buenosairesherald.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "La Voz del Interior",
                "domain": "lavoz.com.ar",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AU": {
        "name": "Australia",
        "language": "en",  // English
        "sources": [
            {
                "name": "ABC News",
                "domain": "abc.net.au",
                "rss_feeds": ["https://www.abc.net.au/news/feed/45910/rss.xml"],
            },
            {
                "name": "Sydney Morning Herald",
                "domain": "smh.com.au",
                "rss_feeds": ["https://www.smh.com.au/rss/feed.xml"],
            },
            {
                "name": "The Age",
                "domain": "theage.com.au",
                "rss_feeds": ["https://www.theage.com.au/rss/feed.xml"],
            },
            {
                "name": "The Australian",
                "domain": "theaustralian.com.au",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "News.com.au",
                "domain": "news.com.au",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Nine News",
                "domain": "9news.com.au",
                "rss_feeds": ["https://www.9news.com.au/rss"],
            },
            {
                "name": "7NEWS",
                "domain": "7news.com.au",
                "rss_feeds": ["https://7news.com.au/feed"],
            },
            {
                "name": "SBS News",
                "domain": "sbs.com.au",
                "rss_feeds": ["https://www.sbs.com.au/news/feed"],
            },
            {
                "name": "The West Australian",
                "domain": "thewest.com.au",
                "rss_feeds": ["https://thewest.com.au/feed"],
            },
            {
                "name": "Brisbane Times",
                "domain": "brisbanetimes.com.au",
                "rss_feeds": ["https://www.brisbanetimes.com.au/rss/feed.xml"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
        ],
    },
    "AT": {
        "name": "Austria",
        "language": "de",  // German
        "sources": [
            {
                "name": "Der Standard",
                "domain": "derstandard.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Die Presse",
                "domain": "diepresse.com",
                "rss_feeds": ["https://www.diepresse.com/rss"],
            },
            {
                "name": "Kurier",
                "domain": "kurier.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Kronen Zeitung",
                "domain": "krone.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {"name": "ORF", "domain": "orf.at", "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"]},
            {
                "name": "Salzburger Nachrichten",
                "domain": "sn.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Tiroler Tageszeitung",
                "domain": "tt.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Kleine Zeitung",
                "domain": "kleinezeitung.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Österreich",
                "domain": "oe24.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Heute",
                "domain": "heute.at",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "CNN International",
                "domain": "cnn.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Euronews",
                "domain": "euronews.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/supplyChainNews"],
            },
            {
                "name": "Deutsche Welle",
                "domain": "dw.com",
                "rss_feeds": ["https://feeds.reuters.com/reuters/berylliumNews"],
            },
            {
                "name": "France 24",
                "domain": "france24.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/northern_ireland/rss.xml"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Xinhua News Agency",
                "domain": "xinhuanet.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
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
