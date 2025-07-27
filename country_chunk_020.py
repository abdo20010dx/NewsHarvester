"""
News sources for countries chunk 20
"""

NEWS_SOURCES_CHUNK = {
    'VN': {
        'name': 'Vietnam',
        'language': 'vi',  # Vietnamese
        'sources': [
            {'name': 'VnExpress', 'domain': 'vnexpress.net', 'rss_feeds': ['https://vnexpress.net/rss']},
            {'name': 'Tuổi Trẻ', 'domain': 'tuoitre.vn', 'rss_feeds': ['https://tuoitre.vn/rss']},
            {'name': 'Thanh Niên', 'domain': 'thanhnien.vn', 'rss_feeds': ['https://thanhnien.vn/rss']},
            {'name': 'Vietnam News', 'domain': 'vietnamnews.vn', 'rss_feeds': ['https://vietnamnews.vn/rss']},
            {'name': 'VietnamNet', 'domain': 'vietnamnet.vn', 'rss_feeds': ['https://vietnamnet.vn/rss']},
            {'name': 'Dân Trí', 'domain': 'dantri.com.vn', 'rss_feeds': ['https://dantri.com.vn/rss']},
            {'name': 'VOV', 'domain': 'vov.vn', 'rss_feeds': ['https://vov.vn/rss']},
            {'name': 'Vietnam Plus', 'domain': 'vietnamplus.vn', 'rss_feeds': ['https://vietnamplus.vn/rss']},
            {'name': 'Saigon Times', 'domain': 'thesaigontimes.vn', 'rss_feeds': ['https://thesaigontimes.vn/rss']},
            {'name': 'Vietnam Investment Review', 'domain': 'vir.com.vn', 'rss_feeds': ['https://vir.com.vn/rss']}
        ]
    },
    'YE': {
        'name': 'Yemen',
        'language': 'ar',  # Arabic
        'sources': [
            {'name': 'Yemen Times', 'domain': 'yementimes.com', 'rss_feeds': ['https://yementimes.com/feed/']},
            {'name': 'Yemen Observer', 'domain': 'yemenobserver.com', 'rss_feeds': ['https://yemenobserver.com/feed/']},
            {'name': 'Saba News Agency', 'domain': 'sabanews.net', 'rss_feeds': ['https://sabanews.net/feed/']},
            {'name': 'Yemen Post', 'domain': 'yemenpost.net', 'rss_feeds': ['https://yemenpost.net/feed/']},
            {'name': 'Al-Masdar Online', 'domain': 'almasdaronline.com', 'rss_feeds': ['https://almasdaronline.com/feed/']},
            {'name': 'Yemen News Agency', 'domain': 'sabanews.net', 'rss_feeds': ['https://sabanews.net/feed/']},
            {'name': 'Al-Thawra', 'domain': 'althawra-news.net', 'rss_feeds': ['https://althawra-news.net/feed/']},
            {'name': 'Yemen Now', 'domain': 'yemennow.net', 'rss_feeds': ['https://yemennow.net/feed/']},
            {'name': 'Yemen Extra', 'domain': 'yemenextra.net', 'rss_feeds': ['https://yemenextra.net/feed/']},
            {'name': 'Yemen Monitor', 'domain': 'yemenmonitor.com', 'rss_feeds': ['https://yemenmonitor.com/feed/']}
        ]
    },
    'ZM': {
        'name': 'Zambia',
        'language': 'en',  # English
        'sources': [
            {'name': 'Zambia Daily Mail', 'domain': 'daily-mail.co.zm', 'rss_feeds': ['https://daily-mail.co.zm/feed/']},
            {'name': 'Times of Zambia', 'domain': 'times.co.zm', 'rss_feeds': ['https://times.co.zm/feed/']},
            {'name': 'Lusaka Times', 'domain': 'lusakatimes.com', 'rss_feeds': ['https://lusakatimes.com/feed/']},
            {'name': 'Zambia Reports', 'domain': 'zambiareports.com', 'rss_feeds': ['https://zambiareports.com/feed/']},
            {'name': 'Zambia Watchdog', 'domain': 'zambiawatchdog.com', 'rss_feeds': ['https://zambiawatchdog.com/feed/']},
            {'name': 'Zambian Observer', 'domain': 'zambianobserver.com', 'rss_feeds': ['https://zambianobserver.com/feed/']},
            {'name': 'Zambia News', 'domain': 'zambianews.com', 'rss_feeds': ['https://zambianews.com/feed/']},
            {'name': 'Zambia Today', 'domain': 'zambiatoday.com', 'rss_feeds': ['https://zambiatoday.com/feed/']},
            {'name': 'Zambia Daily Nation', 'domain': 'zambiadailynation.com', 'rss_feeds': ['https://zambiadailynation.com/feed/']},
            {'name': 'Zambia Business Times', 'domain': 'zambiabusinesstimes.com', 'rss_feeds': ['https://zambiabusinesstimes.com/feed/']}
        ]
    },
    'ZW': {
        'name': 'Zimbabwe',
        'language': 'en',  # English
        'sources': [
            {'name': 'The Herald', 'domain': 'herald.co.zw', 'rss_feeds': ['https://herald.co.zw/feed/']},
            {'name': 'NewsDay', 'domain': 'newsday.co.zw', 'rss_feeds': ['https://newsday.co.zw/feed/']},
            {'name': 'The Chronicle', 'domain': 'chronicle.co.zw', 'rss_feeds': ['https://chronicle.co.zw/feed/']},
            {'name': 'Zimbabwe Independent', 'domain': 'theindependent.co.zw', 'rss_feeds': ['https://theindependent.co.zw/feed/']},
            {'name': 'Daily News', 'domain': 'dailynews.co.zw', 'rss_feeds': ['https://dailynews.co.zw/feed/']},
            {'name': 'Zimbabwe Standard', 'domain': 'thestandard.co.zw', 'rss_feeds': ['https://thestandard.co.zw/feed/']},
            {'name': 'Zimbabwe Mail', 'domain': 'zimbabwemail.com', 'rss_feeds': ['https://zimbabwemail.com/feed/']},
            {'name': 'Zimbabwe Today', 'domain': 'zimbabwetoday.com', 'rss_feeds': ['https://zimbabwetoday.com/feed/']},
            {'name': 'Zimbabwe News', 'domain': 'zimbabwenews.net', 'rss_feeds': ['https://zimbabwenews.net/feed/']},
            {'name': 'Zimbabwe Broadcasting Corporation', 'domain': 'zbc.co.zw', 'rss_feeds': ['https://zbc.co.zw/feed/']}
        ]
    },
}

def get_chunk_sources():
    """Return the news sources for this chunk"""
    return NEWS_SOURCES_CHUNK
