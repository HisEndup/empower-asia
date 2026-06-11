import NewsletterSignup from '../components/NewsletterSignup';

const MYANMAR_TRANSLATIONS = [
  'TPV-RV (Thamma Pitakadaw)',
  'Cumtu/Sumtu (Chin)',
  'Ekai (Chin)',
  'Songlai (Chin)',
  'Laitu (Chin)',
  'Danu',
  'Dannau',
  'Dawei',
  'Intha',
  'Kadu',
  'Kanan',
  'Geko Karen',
  'Paku Karen',
  'Mobwa Karen',
  'Khun',
  'Lahta',
  'Marmagyi',
  'Musselmani Burmese',
  'Akyaung Ari (Naga)',
  'Northern-Rakhine',
  'Riang Lai',
  'Rohingya',
  'Samtao',
  'Shwe Palaung',
  'Southern-Rakhine',
  'Taungyo',
  'Thet',
  'TaiLaing',
];

const THAILAND_TRANSLATIONS = [
  'Tai Song (Lao Song)',
  'Mpi',
  'Yoy',
  'Yong',
  'Nyaw',
  'Nyahkur',
  'Kui (Nyeu)',
  'Moken',
  'Moklen',
  'Saek',
  'Aheu',
  'Phrae Pwo Karen',
  'Mlabri',
  'Khuen',
];

export default function TranslationsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Bible Translations</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We have initiated 47 Bible translations across 5 countries, reaching people groups who previously had no access to Scripture in their heart language.
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">47</div>
              <div className="text-lg font-semibold text-gray-900">Bible Translation Projects</div>
              <div className="text-sm text-gray-600 mt-2">Initiated in 3 years across 5 countries</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">75</div>
              <div className="text-lg font-semibold text-gray-900">Picture Bible Translations</div>
              <div className="text-sm text-gray-600 mt-2">Available in 12 Buddhist-region countries</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">5</div>
              <div className="text-lg font-semibold text-gray-900">Countries Active</div>
              <div className="text-sm text-gray-600 mt-2">Myanmar, Thailand, China, and beyond</div>
            </div>
          </div>
        </div>
      </section>

      {/* Myanmar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Myanmar (Burma)</h2>
            <p className="text-lg text-gray-600">
              23 language groups now have Scripture. From the Chin hills to the coasts, God's Word is taking root.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {MYANMAR_TRANSLATIONS.map((lang) => (
              <div key={lang} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="text-gray-700">{lang}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-8 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Sama Pitaka Version (SPV)</h3>
            <p className="text-gray-600 leading-relaxed">
              The first indigenous Burmese Bible translation (2006-2016), created specifically for Buddhist-background believers. The SPV has been translated into over 40 languages and serves as a model for church-centric translation work.
            </p>
          </div>
        </div>
      </section>

      {/* Thailand */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Thailand</h2>
            <p className="text-lg text-gray-600">
              14 language projects underway, with 15 New Testament translation initiatives launched since 2022.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {THAILAND_TRANSLATIONS.map((lang) => (
              <div key={lang} className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="text-gray-700">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Continued Expansion (2022-2025)</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In just three years, Empower Asia has expanded to 25 additional languages across 10 Buddhist-majority countries. The movement continues to accelerate as more churches recognize the power of God's Word in their own languages.
          </p>

          <div className="bg-white rounded-2xl p-8 border-l-4 border-amber-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Milestones</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span className="text-gray-700"><strong>Gospel of Luke Translations:</strong> Completed into 26 Burmese languages (2022-2023).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span className="text-gray-700"><strong>New Testament Projects:</strong> 15 NT translation projects initiated in Thailand.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span className="text-gray-700"><strong>Bible.com Distribution:</strong> All translations available for reading and listening on Bible.com.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold mt-1">✓</span>
                <span className="text-gray-700"><strong>Myanmar Evangelical Alliance:</strong> Official acceptance of Empower Asia translations as authoritative Bible versions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Access Translations</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            All Empower Asia translations are publicly available through Bible.com. You can read, listen, and share these Scriptures freely with believers and seekers throughout Asia.
          </p>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <p className="text-gray-700">
              Visit <a href="https://bible.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 font-semibold hover:underline">Bible.com</a> to explore available translations, or contact us for information about printing physical Bibles for your community.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
