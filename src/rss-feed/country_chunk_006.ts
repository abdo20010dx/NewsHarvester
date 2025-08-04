
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
News sources for countries chunk 6

 */

export const NEWS_SOURCES_CHUNK: NewsSourcesChunk = {
    "DM": {
        "name": "Dominica",
        "language": "en",  // English
        "sources": [
            {
                "name": "The Sun Dominica",
                "domain": "sundominica.com",
                "rss_feeds": ["https://sundominica.com/feed/"],
            },
            {
                "name": "Dominica News Online",
                "domain": "dominicanewsonline.com",
                "rss_feeds": ["https://dominicanewsonline.com/feed/"],
            },
            {
                "name": "Dominica Vibes",
                "domain": "dominica-vibes.com",
                "rss_feeds": ["https://dominica-vibes.com/feed/"],
            },
            {
                "name": "Dominica Broadcasting Corporation",
                "domain": "dbcradio.dm",
                "rss_feeds": ["https://dbcradio.dm/feed/"],
            },
            {
                "name": "Radio Dominica",
                "domain": "radiodominica.dm",
                "rss_feeds": ["https://radiodominica.dm/feed/"],
            },
            {
                "name": "Caribbean News Now",
                "domain": "caribbeannewsnow.com",
                "rss_feeds": ["https://caribbeannewsnow.com/feed/"],
            },
            {
                "name": "Caribbean Media Corporation",
                "domain": "cmc.bb",
                "rss_feeds": ["https://cmc.bb/feed/"],
            },
            {
                "name": "Caribbean 360",
                "domain": "caribbean360.com",
                "rss_feeds": ["https://caribbean360.com/feed/"],
            },
            {
                "name": "Loop Caribbean News",
                "domain": "loopnews.com",
                "rss_feeds": ["https://loopnews.com/feed/"],
            },
            {
                "name": "Caribbean Journal",
                "domain": "caribjournal.com",
                "rss_feeds": ["https://caribjournal.com/feed/"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC World News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "CNN World News",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition.rss"],
            },
            {
                "name": "Euronews World",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=en&name=news"],
            },
            {
                "name": "Deutsche Welle English",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-all"],
            },
            {
                "name": "France 24 English",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press World",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news-hub/rss"],
            },
            {
                "name": "Xinhua World News",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/english/rss/world.xml"],
            },
        ],
    },
    "EC": {
        "name": "Ecuador",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "El Comercio",
                "domain": "elcomercio.com",
                "rss_feeds": ["https://www.elcomercio.com/feed/"],
            },
            {
                "name": "El Universo",
                "domain": "eluniverso.com",
                "rss_feeds": ["https://www.eluniverso.com/rss/feed.xml"],
            },
            {
                "name": "La Hora",
                "domain": "lahora.com.ec",
                "rss_feeds": ["https://lahora.com.ec/feed/"],
            },
            {
                "name": "El Telégrafo",
                "domain": "eltelegrafo.com.ec",
                "rss_feeds": ["https://www.eltelegrafo.com.ec/feed/"],
            },
            {
                "name": "Expreso",
                "domain": "expreso.ec",
                "rss_feeds": ["https://expreso.ec/feed/"],
            },
            {
                "name": "Ecuavisa",
                "domain": "ecuavisa.com",
                "rss_feeds": ["https://www.ecuavisa.com/feed/"],
            },
            {
                "name": "Teleamazonas",
                "domain": "teleamazonas.com",
                "rss_feeds": ["https://teleamazonas.com/feed/"],
            },
            {
                "name": "TC Televisión",
                "domain": "tctelevision.com",
                "rss_feeds": ["https://tctelevision.com/feed/"],
            },
            {
                "name": "Radio Quito",
                "domain": "radioquito.ec",
                "rss_feeds": ["https://radioquito.ec/feed/"],
            },
            {
                "name": "Radio Sucre",
                "domain": "radiosucre.ec",
                "rss_feeds": ["https://radiosucre.ec/feed/"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Mundo",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/mundo/rss.xml"],
            },
            {
                "name": "CNN en Español",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition_americas.rss"],
            },
            {
                "name": "Euronews Español",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=es&name=news"],
            },
            {
                "name": "Deutsche Welle Español",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-es-all"],
            },
            {
                "name": "France 24 Español",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/es/rss"],
            },
            {
                "name": "Al Jazeera Español",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters Latinoamérica",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press Latinoamérica",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/es/news-hub/rss"],
            },
            {
                "name": "Xinhua Latinoamérica",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/spanish/rss/world.xml"],
            },
        ],
    },
    "EG": {
        "name": "Egypt",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Al-Ahram",
                "domain": "ahram.org.eg",
                "rss_feeds": ["https://english.ahram.org.eg/rss.aspx"],
            },
            {
                "name": "Al-Masry Al-Youm",
                "domain": "almasryalyoum.com",
                "rss_feeds": ["https://www.almasryalyoum.com/rss/rssfeed"],
            },
            {
                "name": "Al-Wafd",
                "domain": "alwafd.news",
                "rss_feeds": ["https://alwafd.news/rss"],
            },
            {
                "name": "Al-Shorouk",
                "domain": "shorouknews.com",
                "rss_feeds": ["https://www.shorouknews.com/rss"],
            },
            {
                "name": "Egypt Today",
                "domain": "egypttoday.com",
                "rss_feeds": ["https://www.egypttoday.com/rss"],
            },
            {
                "name": "Egyptian Radio and Television Union",
                "domain": "ertu.org",
                "rss_feeds": ["https://ertu.org/rss"],
            },
            {
                "name": "Radio Cairo",
                "domain": "radiocairo.eg",
                "rss_feeds": ["https://radiocairo.eg/rss"],
            },
            {
                "name": "Radio Alexandria",
                "domain": "radioalexandria.eg",
                "rss_feeds": ["https://radioalexandria.eg/rss"],
            },
            {
                "name": "Radio Aswan",
                "domain": "radioaswan.eg",
                "rss_feeds": ["https://radioaswan.eg/rss"],
            },
            {
                "name": "Radio Luxor",
                "domain": "radioluxor.eg",
                "rss_feeds": ["https://radioluxor.eg/rss"],
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
                "name": "Associated Press Middle East",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse Arabic",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/ar/news-hub/rss"],
            },
            {
                "name": "Xinhua Middle East",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/arabic/rss/world.xml"],
            },
        ],
    },
    "SV": {
        "name": "El Salvador",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "La Prensa Gráfica",
                "domain": "laprensagrafica.com",
                "rss_feeds": ["https://www.laprensagrafica.com/rss"],
            },
            {
                "name": "El Diario de Hoy",
                "domain": "eldiariodehoy.com",
                "rss_feeds": ["https://www.eldiariodehoy.com/rss"],
            },
            {
                "name": "El Mundo",
                "domain": "elmundo.sv",
                "rss_feeds": ["https://elmundo.sv/rss"],
            },
            {
                "name": "La Noticia",
                "domain": "lanoticia.sv",
                "rss_feeds": ["https://lanoticia.sv/rss"],
            },
            {
                "name": "Radio Nacional de El Salvador",
                "domain": "radionacional.sv",
                "rss_feeds": ["https://radionacional.sv/rss"],
            },
            {
                "name": "Radio YSUCA",
                "domain": "ysuca.sv",
                "rss_feeds": ["https://ysuca.sv/rss"],
            },
            {
                "name": "Radio Femenina",
                "domain": "radiofemenina.sv",
                "rss_feeds": ["https://radiofemenina.sv/rss"],
            },
            {
                "name": "Radio Cadena YSKL",
                "domain": "cadena.yskl.sv",
                "rss_feeds": ["https://cadena.yskl.sv/rss"],
            },
            {
                "name": "Radio Vox",
                "domain": "radiovox.sv",
                "rss_feeds": ["https://radiovox.sv/rss"],
            },
            {
                "name": "Radio El Salvador",
                "domain": "radioelsalvador.sv",
                "rss_feeds": ["https://radioelsalvador.sv/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Mundo",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/mundo/rss.xml"],
            },
            {
                "name": "CNN en Español",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition_americas.rss"],
            },
            {
                "name": "Euronews Español",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=es&name=news"],
            },
            {
                "name": "Deutsche Welle Español",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-es-all"],
            },
            {
                "name": "France 24 Español",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/es/rss"],
            },
            {
                "name": "Al Jazeera Español",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters Latinoamérica",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press Latinoamérica",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/es/news-hub/rss"],
            },
            {
                "name": "Xinhua Latinoamérica",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/spanish/rss/world.xml"],
            },
        ],
    },
    "GQ": {
        "name": "Equatorial Guinea",
        "language": "es",  // Spanish
        "sources": [
            {
                "name": "Guinea Ecuatorial Press",
                "domain": "gepress.org",
                "rss_feeds": ["https://gepress.org/rss"],
            },
            {
                "name": "Radio Televisión de Guinea Ecuatorial",
                "domain": "rtvge.gq",
                "rss_feeds": ["https://rtvge.gq/rss"],
            },
            {
                "name": "Radio Nacional de Guinea Ecuatorial",
                "domain": "radionacional.gq",
                "rss_feeds": ["https://radionacional.gq/rss"],
            },
            {
                "name": "Radio Malabo",
                "domain": "radiomalabo.gq",
                "rss_feeds": ["https://radiomalabo.gq/rss"],
            },
            {
                "name": "Radio Bata",
                "domain": "radiobata.gq",
                "rss_feeds": ["https://radiobata.gq/rss"],
            },
            {
                "name": "Radio Mongomo",
                "domain": "radiomongomo.gq",
                "rss_feeds": ["https://radiomongomo.gq/rss"],
            },
            {
                "name": "Radio Ebebiyin",
                "domain": "radioebebiyin.gq",
                "rss_feeds": ["https://radioebebiyin.gq/rss"],
            },
            {
                "name": "Radio Evinayong",
                "domain": "radioevinayong.gq",
                "rss_feeds": ["https://radioevinayong.gq/rss"],
            },
            {
                "name": "Radio Luba",
                "domain": "radioluba.gq",
                "rss_feeds": ["https://radioluba.gq/rss"],
            },
            {
                "name": "Radio Annobón",
                "domain": "radioannobon.gq",
                "rss_feeds": ["https://radioannobon.gq/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC Mundo",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/mundo/rss.xml"],
            },
            {
                "name": "CNN en Español",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition_americas.rss"],
            },
            {
                "name": "Euronews Español",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=es&name=news"],
            },
            {
                "name": "Deutsche Welle Español",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-es-all"],
            },
            {
                "name": "France 24 Español",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/es/rss"],
            },
            {
                "name": "Al Jazeera Español",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters Latinoamérica",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press Latinoamérica",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/es/news-hub/rss"],
            },
            {
                "name": "Xinhua Latinoamérica",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/spanish/rss/world.xml"],
            },
        ],
    },
    "ER": {
        "name": "Eritrea",
        "language": "ar",  // Arabic
        "sources": [
            {
                "name": "Eritrea Profile",
                "domain": "eritrea-profile.com",
                "rss_feeds": ["https://eritrea-profile.com/rss"],
            },
            {
                "name": "Shabait",
                "domain": "shabait.com",
                "rss_feeds": ["https://shabait.com/rss"],
            },
            {
                "name": "Radio Eri",
                "domain": "radioeri.er",
                "rss_feeds": ["https://radioeri.er/rss"],
            },
            {
                "name": "Eri-TV",
                "domain": "eritv.er",
                "rss_feeds": ["https://eritv.er/rss"],
            },
            {
                "name": "Radio Dimtsi Hafash",
                "domain": "dimtsihafash.er",
                "rss_feeds": ["https://dimtsihafash.er/rss"],
            },
            {
                "name": "Radio Zara",
                "domain": "radiozara.er",
                "rss_feeds": ["https://radiozara.er/rss"],
            },
            {
                "name": "Radio Haddas",
                "domain": "radiohaddas.er",
                "rss_feeds": ["https://radiohaddas.er/rss"],
            },
            {
                "name": "Radio Sawa",
                "domain": "radiosawa.er",
                "rss_feeds": ["https://radiosawa.er/rss"],
            },
            {
                "name": "Radio Asmara",
                "domain": "radioasmara.er",
                "rss_feeds": ["https://radioasmara.er/rss"],
            },
            {
                "name": "Radio Massawa",
                "domain": "radiomassawa.er",
                "rss_feeds": ["https://radiomassawa.er/rss"],
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
                "name": "Associated Press Middle East",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse Arabic",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/ar/news-hub/rss"],
            },
            {
                "name": "Xinhua Middle East",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/arabic/rss/world.xml"],
            },
        ],
    },
    "EE": {
        "name": "Estonia",
        "language": "et",  // Estonian
        "sources": [
            {
                "name": "Postimees",
                "domain": "postimees.ee",
                "rss_feeds": ["https://www.postimees.ee/rss"],
            },
            {
                "name": "Eesti Päevaleht",
                "domain": "epl.delfi.ee",
                "rss_feeds": ["https://epl.delfi.ee/rss"],
            },
            {
                "name": "Õhtuleht",
                "domain": "ohtuleht.ee",
                "rss_feeds": ["https://www.ohtuleht.ee/rss"],
            },
            {
                "name": "Maaleht",
                "domain": "maaleht.delfi.ee",
                "rss_feeds": ["https://maaleht.delfi.ee/rss"],
            },
            {
                "name": "Eesti Rahvusringhääling",
                "domain": "err.ee",
                "rss_feeds": ["https://www.err.ee/rss"],
            },
            {
                "name": "Kuku Raadio",
                "domain": "kuku.ee",
                "rss_feeds": ["https://kuku.ee/rss"],
            },
            {
                "name": "Vikerraadio",
                "domain": "vikerraadio.err.ee",
                "rss_feeds": ["https://vikerraadio.err.ee/rss"],
            },
            {
                "name": "Raadio 2",
                "domain": "raadio2.err.ee",
                "rss_feeds": ["https://raadio2.err.ee/rss"],
            },
            {
                "name": "Klassikaraadio",
                "domain": "klassikaraadio.err.ee",
                "rss_feeds": ["https://klassikaraadio.err.ee/rss"],
            },
            {
                "name": "Raadio 4",
                "domain": "raadio4.err.ee",
                "rss_feeds": ["https://raadio4.err.ee/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC World News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "CNN World News",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition.rss"],
            },
            {
                "name": "Euronews World",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=en&name=news"],
            },
            {
                "name": "Deutsche Welle English",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-all"],
            },
            {
                "name": "France 24 English",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press World",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news-hub/rss"],
            },
            {
                "name": "Xinhua World News",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/english/rss/world.xml"],
            },
        ],
    },
    "ET": {
        "name": "Ethiopia",
        "language": "am",  // Amharic
        "sources": [
            {
                "name": "Ethiopian News Agency",
                "domain": "ena.et",
                "rss_feeds": ["https://ena.et/rss"],
            },
            {
                "name": "The Ethiopian Herald",
                "domain": "ethpress.gov.et",
                "rss_feeds": ["https://ethpress.gov.et/rss"],
            },
            {
                "name": "Addis Fortune",
                "domain": "addisfortune.net",
                "rss_feeds": ["https://addisfortune.net/rss"],
            },
            {
                "name": "The Reporter",
                "domain": "thereporterethiopia.com",
                "rss_feeds": ["https://www.thereporterethiopia.com/feed/"],
            },
            {
                "name": "Ethiopian Broadcasting Corporation",
                "domain": "ebc.et",
                "rss_feeds": ["https://ebc.et/rss"],
            },
            {
                "name": "Radio Ethiopia",
                "domain": "radioethiopia.et",
                "rss_feeds": ["https://radioethiopia.et/rss"],
            },
            {
                "name": "Radio Fana",
                "domain": "radiofana.et",
                "rss_feeds": ["https://radiofana.et/rss"],
            },
            {
                "name": "Radio Sheger",
                "domain": "radiosheger.et",
                "rss_feeds": ["https://radiosheger.et/rss"],
            },
            {
                "name": "Radio Zami",
                "domain": "radiozami.et",
                "rss_feeds": ["https://radiozami.et/rss"],
            },
            {
                "name": "Radio Abay",
                "domain": "radioabay.et",
                "rss_feeds": ["https://radioabay.et/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC World News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "CNN World News",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition.rss"],
            },
            {
                "name": "Euronews World",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=en&name=news"],
            },
            {
                "name": "Deutsche Welle English",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-all"],
            },
            {
                "name": "France 24 English",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press World",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news-hub/rss"],
            },
            {
                "name": "Xinhua World News",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/english/rss/world.xml"],
            },
        ],
    },
    "FJ": {
        "name": "Fiji",
        "language": "en",  // English
        "sources": [
            {
                "name": "Fiji Times",
                "domain": "fijitimes.com",
                "rss_feeds": ["https://www.fijitimes.com/rss"],
            },
            {
                "name": "Fiji Sun",
                "domain": "fijisun.com.fj",
                "rss_feeds": ["https://fijisun.com.fj/feed/"],
            },
            {
                "name": "Fiji Village",
                "domain": "fijivillage.com",
                "rss_feeds": ["https://www.fijivillage.com/rss"],
            },
            {
                "name": "Fiji Broadcasting Corporation",
                "domain": "fbc.com.fj",
                "rss_feeds": ["https://fbc.com.fj/rss"],
            },
            {
                "name": "Radio Fiji One",
                "domain": "radiofiji.one",
                "rss_feeds": ["https://radiofiji.one/rss"],
            },
            {
                "name": "Radio Fiji Two",
                "domain": "radiofiji.two",
                "rss_feeds": ["https://radiofiji.two/rss"],
            },
            {
                "name": "Radio Mirchi",
                "domain": "radiomirchi.fj",
                "rss_feeds": ["https://radiomirchi.fj/rss"],
            },
            {
                "name": "Radio Sargam",
                "domain": "radiosargam.fj",
                "rss_feeds": ["https://radiosargam.fj/rss"],
            },
            {
                "name": "Radio Navtarang",
                "domain": "radionavtarang.fj",
                "rss_feeds": ["https://radionavtarang.fj/rss"],
            },
            {
                "name": "Radio Gold",
                "domain": "radiogold.fj",
                "rss_feeds": ["https://radiogold.fj/rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC World News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "CNN World News",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition.rss"],
            },
            {
                "name": "Euronews World",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=en&name=news"],
            },
            {
                "name": "Deutsche Welle English",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-all"],
            },
            {
                "name": "France 24 English",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press World",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news-hub/rss"],
            },
            {
                "name": "Xinhua World News",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/english/rss/world.xml"],
            },
        ],
    },
    "FI": {
        "name": "Finland",
        "language": "fi",  // Finnish
        "sources": [
            {
                "name": "Helsingin Sanomat",
                "domain": "hs.fi",
                "rss_feeds": ["https://www.hs.fi/rss/tuoreimmat.xml"],
            },
            {
                "name": "Ilta-Sanomat",
                "domain": "is.fi",
                "rss_feeds": ["https://www.is.fi/rss/tuoreimmat.xml"],
            },
            {
                "name": "Iltalehti",
                "domain": "iltalehti.fi",
                "rss_feeds": ["https://www.iltalehti.fi/rss/uutiset.xml"],
            },
            {
                "name": "Aamulehti",
                "domain": "aamulehti.fi",
                "rss_feeds": ["https://www.aamulehti.fi/rss/uutiset.xml"],
            },
            {
                "name": "Turun Sanomat",
                "domain": "ts.fi",
                "rss_feeds": ["https://www.ts.fi/rss/uutiset.xml"],
            },
            {
                "name": "Yle",
                "domain": "yle.fi",
                "rss_feeds": ["https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET"]
            },
            {
                "name": "Yle Radio 1",
                "domain": "yle.fi/radio1",
                "rss_feeds": ["https://feeds.yle.fi/radio1/v1/recent.rss"],
            },
            {
                "name": "Yle Radio Suomi",
                "domain": "yle.fi/radiosuomi",
                "rss_feeds": ["https://feeds.yle.fi/radiosuomi/v1/recent.rss"],
            },
            {
                "name": "Yle Puhe",
                "domain": "yle.fi/puhe",
                "rss_feeds": ["https://feeds.yle.fi/puhe/v1/recent.rss"],
            },
            {
                "name": "Yle Vega",
                "domain": "yle.fi/vega",
                "rss_feeds": ["https://feeds.yle.fi/vega/v1/recent.rss"],
            },
            // Additional 10 popular RSS feeds
            {
                "name": "BBC World News",
                "domain": "bbc.com",
                "rss_feeds": ["https://feeds.bbci.co.uk/news/world/rss.xml"],
            },
            {
                "name": "CNN World News",
                "domain": "cnn.com",
                "rss_feeds": ["http://rss.cnn.com/rss/edition.rss"],
            },
            {
                "name": "Euronews World",
                "domain": "euronews.com",
                "rss_feeds": ["https://www.euronews.com/rss?format=mrss&level=theme&lang=en&name=news"],
            },
            {
                "name": "Deutsche Welle English",
                "domain": "dw.com",
                "rss_feeds": ["https://rss.dw.com/xml/rss-de-all"],
            },
            {
                "name": "France 24 English",
                "domain": "france24.com",
                "rss_feeds": ["https://www.france24.com/en/rss"],
            },
            {
                "name": "Al Jazeera English",
                "domain": "aljazeera.com",
                "rss_feeds": ["https://www.aljazeera.com/xml/rss/all.xml"],
            },
            {
                "name": "Reuters World News",
                "domain": "reuters.com",
                "rss_feeds": ["https://feeds.reuters.com/Reuters/worldNews"],
            },
            {
                "name": "Associated Press World",
                "domain": "ap.org",
                "rss_feeds": ["https://feeds.ap.org/ap/APWorldNews"],
            },
            {
                "name": "Agence France-Presse",
                "domain": "afp.com",
                "rss_feeds": ["https://www.afp.com/en/news-hub/rss"],
            },
            {
                "name": "Xinhua World News",
                "domain": "xinhuanet.com",
                "rss_feeds": ["http://www.xinhuanet.com/english/rss/world.xml"],
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
