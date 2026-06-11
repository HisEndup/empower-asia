import NewsletterSignup from '../components/NewsletterSignup';

const PARTNERSHIPS = [
  {
    name: 'DMS Association',
    url: 'http://www.dmsmm.org',
    desc: '36,000+ house churches and 350,000–500,000 Buddhist background believers.',
  },
  {
    name: 'Sunshine/Sonrise Foundations',
    url: '#',
    desc: '80 churches launched 2024–2025 through foundation support.',
  },
  {
    name: 'Global Church Alliance of Sri Lanka',
    url: '#',
    desc: '1,500 house churches established since 2015.',
  },
  {
    name: 'Back to Jerusalem Movement',
    url: '#',
    desc: 'Mobilizing missionary support and prayer networks across Asia.',
  },
  {
    name: 'Frontier Harvest Ministries',
    url: 'https://obedience.life/bible-translation-movement',
    desc: 'Supporting translation infrastructure and church planting.',
  },
  {
    name: 'Bhutan Buddhist Background House Church Movement',
    url: '#',
    desc: "Expanding God's Word into the Himalayan Buddhist kingdom.",
  },
];

const MILESTONES = [
  { year: '2004', event: 'Major TKO and Jay Pratt translate 10 Jesus Stories into Burmese and Rakhine; distributed to 39 newly formed house churches.' },
  { year: '2006', event: 'First indigenous Burmese Bible translation project (Sama Pitaka Version) begins under Major TKO.' },
  { year: '2007', event: 'Major TKO establishes dedicated translation team producing a meaning-based translation of the Gospels and Acts for DMS house churches.' },
  { year: '2012', event: '10 Jesus Stories Picture Bible translated into 40 languages of the Buddhist world.' },
  { year: '2016', event: 'Sama Pitaka Version (SPV) completed — the first indigenous Burmese Bible, spanning 40+ languages.' },
  { year: '2022', event: '10 Jesus Stories completed in 75 Bible-less languages across 12 countries. 15 New Testament projects initiated in Thailand. Empower Asia formally founded.' },
  { year: '2022–2023', event: 'Gospel of Luke translated into 26 Burmese languages. Translations uploaded to YouVersion / Digital Bible Library.' },
  { year: '2022–2025', event: 'Expansion to 25 additional languages across 10 Buddhist-majority countries. 41,932 house churches catalyzed. 389,780 baptisms recorded.' },
];

export default function StoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Story of Empower Asia</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            A movement that began with ten Gospel stories and thirty-nine house churches — and has since catalyzed over 41,000 congregations across the Buddhist world.
          </p>
        </div>
      </section>

      {/* Founding Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-blue-50 border-l-4 border-blue-700 rounded-2xl p-10 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              "Empower Asia exists to identify, equip, and support indigenous Bible Translators into Bible-less languages."
            </p>
            <p className="text-gray-500 text-sm mt-3">— Founded 2022</p>
          </div>

          {/* Major TKO — portrait + bio */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Major Tun Kyaw Oo (1936–2022)</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In 2004, Major Tun Kyaw Oo (TKO) and Jay Pratt translated ten Jesus Stories into Burmese and Rakhine, distributing them to thirty-nine newly established house churches. This simple act of obedience sparked what would become one of the largest church movements among Buddhist peoples in history.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                By 2007, Major TKO had established a dedicated translation team producing a meaning-based translation of the Gospels and Acts for DMS house churches — which eventually grew to over 41,932 congregations. The "Sama Pitaka Version (SPV)" has been translated into over 40 languages of the Buddhist world.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Empower Asia was founded in 2022 to continue and scale the work Major TKO began — formalizing the infrastructure to identify, equip, and support indigenous translators across the entire Buddhist world.
              </p>
            </div>
            <div className="relative">
              <img
                src="/MAJOR_TUN_KYAW_OO_(TKO).webp"
                alt="Major Tun Kyaw Oo"
                className="w-full rounded-3xl object-cover object-top shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute bottom-0 left-0 right-0 rounded-b-3xl bg-gradient-to-t from-gray-950/80 to-transparent px-6 py-5">
                <p className="text-white font-bold text-base">Major Tun Kyaw Oo</p>
                <p className="text-gray-300 text-sm">Founder &middot; 1936–2022</p>
              </div>
            </div>
          </div>

          {/* Approach image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/Approach.webp"
              alt="Empower Asia movement partners in training"
              className="w-full h-72 md:h-96 object-cover object-center"
            />
            <div className="bg-gray-50 border border-t-0 border-gray-100 rounded-b-3xl px-8 py-5">
              <p className="text-gray-500 text-sm text-center">Translator training session — Empower Asia movement partners gathered across Asia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-14">Timeline of the Movement</h2>
          <div className="space-y-0">
            {MILESTONES.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  {i < MILESTONES.length - 1 && <div className="w-0.5 flex-1 bg-blue-200 my-1" />}
                </div>
                <div className="pb-10">
                  <div className="text-blue-700 text-sm font-bold mb-1">{m.year}</div>
                  <p className="text-gray-700 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Movement Partnerships</h2>
          <p className="text-gray-500 text-lg mb-10">
            Empower Asia works alongside these organizations to expand the reach of God's Word across Asia.
          </p>

          {/* Partnership gathering photo */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
            <img
              src="/Image.webp"
              alt="Empower Asia movement partners gathered"
              className="w-full h-64 md:h-80 object-cover object-center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PARTNERSHIPS.map((p) => (
              <div key={p.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                {p.url !== '#' && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 text-sm font-semibold hover:underline">
                    Visit Website &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
