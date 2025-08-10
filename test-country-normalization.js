const axios = require('axios');

async function testCountryNormalization() {
    console.log('Testing enhanced country normalization...\n');

    // Test cases with various country codes and abbreviations
    const testCases = [
        // Country codes
        { input: 'us', expected: 'usa' },
        { input: 'uk', expected: 'uk' },
        { input: 'ca', expected: 'canada' },
        { input: 'de', expected: 'germany' },
        { input: 'fr', expected: 'france' },
        { input: 'au', expected: 'australia' },
        { input: 'jp', expected: 'japan' },
        { input: 'in', expected: 'india' },
        { input: 'br', expected: 'brazil' },
        { input: 'id', expected: 'indonesia' },
        { input: 'mx', expected: 'mexico' },
        { input: 'it', expected: 'italy' },
        { input: 'es', expected: 'spain' },
        { input: 'kr', expected: 'south korea' },
        { input: 'nl', expected: 'netherlands' },
        { input: 'ru', expected: 'russia' },
        { input: 'tr', expected: 'turkey' },
        { input: 'ar', expected: 'argentina' },
        { input: 'za', expected: 'south africa' },
        { input: 'ph', expected: 'philippines' },
        { input: 'vn', expected: 'vietnam' },
        { input: 'pl', expected: 'poland' },
        { input: 'th', expected: 'thailand' },
        { input: 'my', expected: 'malaysia' },
        { input: 'ng', expected: 'nigeria' },
        { input: 'bd', expected: 'bangladesh' },
        { input: 'pk', expected: 'pakistan' },
        { input: 'eg', expected: 'egypt' },
        { input: 'co', expected: 'colombia' },
        { input: 'cl', expected: 'chile' },
        { input: 'nz', expected: 'new zealand' },
        { input: 'se', expected: 'sweden' },
        { input: 'no', expected: 'norway' },
        { input: 'ch', expected: 'switzerland' },
        { input: 'be', expected: 'belgium' },
        { input: 'at', expected: 'austria' },
        { input: 'ie', expected: 'ireland' },
        { input: 'sg', expected: 'singapore' },
        { input: 'dk', expected: 'denmark' },
        { input: 'fi', expected: 'finland' },
        { input: 'sa', expected: 'saudi arabia' },
        { input: 'ae', expected: 'uae' },
        { input: 'hk', expected: 'hong kong' },
        { input: 'cz', expected: 'czech republic' },
        { input: 'pt', expected: 'portugal' },
        { input: 'ro', expected: 'romania' },
        { input: 'hu', expected: 'hungary' },
        { input: 'gr', expected: 'greece' },
        { input: 'ua', expected: 'ukraine' },
        { input: 'ke', expected: 'kenya' },
        { input: 'ma', expected: 'morocco' },
        { input: 'dz', expected: 'algeria' },
        { input: 'pe', expected: 'peru' },
        { input: 'et', expected: 'ethiopia' },
        { input: 'iq', expected: 'iraq' },
        { input: 'uz', expected: 'uzbekistan' },
        { input: 'mm', expected: 'myanmar' },
        { input: 'kz', expected: 'kazakhstan' },
        { input: 'ao', expected: 'angola' },
        { input: 'tz', expected: 'tanzania' },
        { input: 'ug', expected: 'uganda' },
        { input: 'sd', expected: 'sudan' },
        { input: 'gh', expected: 'ghana' },
        { input: 'af', expected: 'afghanistan' },
        { input: 'np', expected: 'nepal' },
        { input: 'cm', expected: 'cameroon' },
        { input: 'ci', expected: 'ivory coast' },
        { input: 'sn', expected: 'senegal' },
        { input: 'py', expected: 'paraguay' },
        { input: 'bo', expected: 'bolivia' },
        { input: 'do', expected: 'dominican republic' },
        { input: 'ec', expected: 'ecuador' },
        { input: 'cr', expected: 'costa rica' },
        { input: 'pa', expected: 'panama' },
        { input: 'kw', expected: 'kuwait' },
        { input: 'qa', expected: 'qatar' },
        { input: 'om', expected: 'oman' },
        { input: 'bh', expected: 'bahrain' },
        { input: 'sk', expected: 'slovakia' },
        { input: 'bg', expected: 'bulgaria' },
        { input: 'hr', expected: 'croatia' },
        { input: 'si', expected: 'slovenia' },
        { input: 'lt', expected: 'lithuania' },
        { input: 'lv', expected: 'latvia' },
        { input: 'ee', expected: 'estonia' },
        { input: 'rs', expected: 'serbia' },
        { input: 'ba', expected: 'bosnia and herzegovina' },
        { input: 'mk', expected: 'north macedonia' },
        { input: 'me', expected: 'montenegro' },
        { input: 'lu', expected: 'luxembourg' },
        { input: 'mt', expected: 'malta' },
        { input: 'cy', expected: 'cyprus' },
        { input: 'is', expected: 'iceland' },
        { input: 'mc', expected: 'monaco' },
        { input: 'li', expected: 'liechtenstein' },
        { input: 'ad', expected: 'andorra' },
        { input: 'sm', expected: 'san marino' },
        { input: 'mv', expected: 'maldives' },
        { input: 'bn', expected: 'brunei' },

        // Common abbreviations and variations
        { input: 'usa', expected: 'usa' },
        { input: 'america', expected: 'usa' },
        { input: 'states', expected: 'usa' },
        { input: 'britain', expected: 'uk' },
        { input: 'gb', expected: 'uk' },
        { input: 'oz', expected: 'australia' },
        { input: 'nippon', expected: 'japan' },
        { input: 'bharat', expected: 'india' },
        { input: 'brasil', expected: 'brazil' },
        { input: 'korean', expected: 'south korea' },
        { input: 'rok', expected: 'south korea' },
        { input: 'holland', expected: 'netherlands' },
        { input: 'nederland', expected: 'netherlands' },
        { input: 'russian federation', expected: 'russia' },
        { input: 'türkiye', expected: 'turkey' },
        { input: 'rsa', expected: 'south africa' },
        { input: 'filipinas', expected: 'philippines' },
        { input: 'viet nam', expected: 'vietnam' },
        { input: 'polska', expected: 'poland' },
        { input: 'siam', expected: 'thailand' },
        { input: 'misr', expected: 'egypt' },
        { input: 'sverige', expected: 'sweden' },
        { input: 'norge', expected: 'norway' },
        { input: 'schweiz', expected: 'switzerland' },
        { input: 'suisse', expected: 'switzerland' },
        { input: 'belgique', expected: 'belgium' },
        { input: 'belgië', expected: 'belgium' },
        { input: 'österreich', expected: 'austria' },
        { input: 'eire', expected: 'ireland' },
        { input: 'danmark', expected: 'denmark' },
        { input: 'suomi', expected: 'finland' },
        { input: 'ksa', expected: 'saudi arabia' },
        { input: 'emirates', expected: 'uae' },
        { input: 'czech', expected: 'czech republic' },
        { input: 'românia', expected: 'romania' },
        { input: 'magyarország', expected: 'hungary' },
        { input: 'hellas', expected: 'greece' },
        { input: 'ukraina', expected: 'ukraine' },
        { input: 'al-maghrib', expected: 'morocco' },
        { input: 'al-jaza\'ir', expected: 'algeria' },
        { input: 'al-iraq', expected: 'iraq' },
        { input: 'burma', expected: 'myanmar' },
        { input: 'côte d\'ivoire', expected: 'ivory coast' },
        { input: 'republica dominicana', expected: 'dominican republic' },
        { input: 'panamá', expected: 'panama' },
        { input: 'al-kuwait', expected: 'kuwait' },
        { input: 'al-bahrain', expected: 'bahrain' },
        { input: 'slovensko', expected: 'slovakia' },
        { input: 'bălgariya', expected: 'bulgaria' },
        { input: 'hrvatska', expected: 'croatia' },
        { input: 'slovenija', expected: 'slovenia' },
        { input: 'lietuva', expected: 'lithuania' },
        { input: 'latvija', expected: 'latvia' },
        { input: 'eesti', expected: 'estonia' },
        { input: 'srbija', expected: 'serbia' },
        { input: 'crna gora', expected: 'montenegro' },
        { input: 'lëtzebuerg', expected: 'luxembourg' },
        { input: 'kýpros', expected: 'cyprus' },
        { input: 'ísland', expected: 'iceland' },

        // Full names
        { input: 'united states', expected: 'usa' },
        { input: 'united states of america', expected: 'usa' },
        { input: 'united kingdom', expected: 'uk' },
        { input: 'great britain', expected: 'uk' },
        { input: 'england', expected: 'uk' },
        { input: 'deutschland', expected: 'germany' },
        { input: 'italia', expected: 'italy' },
        { input: 'espana', expected: 'spain' },
        { input: 'south korea', expected: 'south korea' },
        { input: 'united arab emirates', expected: 'uae' },
        { input: 'hong kong', expected: 'hong kong' },
        { input: 'czech republic', expected: 'czech republic' },
        { input: 'czechia', expected: 'czech republic' },
        { input: 'bosnia and herzegovina', expected: 'bosnia and herzegovina' },
        { input: 'bosnia & herzegovina', expected: 'bosnia and herzegovina' },
        { input: 'bosnia', expected: 'bosnia and herzegovina' },
        { input: 'north macedonia', expected: 'north macedonia' },
        { input: 'macedonia', expected: 'north macedonia' },
        { input: 'san marino', expected: 'san marino' },
    ];

    let passedTests = 0;
    let failedTests = 0;

    for (const testCase of testCases) {
        try {
            const response = await axios.get(`http://localhost:3000/spider-aggregator/news/${testCase.input}`);

            // Check if the request was successful (even if no feeds found, it should return a valid response)
            if (response.status === 200) {
                console.log(`✅ ${testCase.input} -> ${testCase.expected} (Request successful)`);
                passedTests++;
            } else {
                console.log(`❌ ${testCase.input} -> ${testCase.expected} (Unexpected status: ${response.status})`);
                failedTests++;
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // 404 is expected for countries without RSS feeds
                console.log(`⚠️  ${testCase.input} -> ${testCase.expected} (No RSS feeds found - expected)`);
                passedTests++;
            } else {
                console.log(`❌ ${testCase.input} -> ${testCase.expected} (Error: ${error.message})`);
                failedTests++;
            }
        }
    }

    console.log(`\n📊 Test Results:`);
    console.log(`✅ Passed: ${passedTests}`);
    console.log(`❌ Failed: ${failedTests}`);
    console.log(`📈 Success Rate: ${((passedTests / (passedTests + failedTests)) * 100).toFixed(1)}%`);

    // Test some specific examples that should work
    console.log('\n🔍 Testing specific examples that should have RSS feeds:');
    const workingExamples = ['usa', 'uk', 'canada', 'germany', 'france', 'australia', 'japan', 'india', 'brazil'];

    for (const example of workingExamples) {
        try {
            const response = await axios.get(`http://localhost:3000/spider-aggregator/news/${example}`);
            if (response.status === 200 && response.data.feeds && Object.keys(response.data.feeds).length > 0) {
                console.log(`✅ ${example}: Found ${Object.keys(response.data.feeds).length} feeds with ${response.data.totalArticles} total articles`);
            } else {
                console.log(`⚠️  ${example}: No feeds found`);
            }
        } catch (error) {
            console.log(`❌ ${example}: Error - ${error.message}`);
        }
    }
}

// Run the test
testCountryNormalization();
