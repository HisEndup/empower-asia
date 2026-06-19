import { ChevronRight, ArrowRight } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import type { Page } from '../App';

const STATS = [
  { value: '47', label: 'Bible Translations', sub: 'Started in 3 years across 5 countries' },
  { value: '75', label: 'Picture Bibles', sub: 'In 12 Buddhist-world countries' },
  { value: '41,932', label: 'House Churches', sub: 'Catalyzed in Burma (2004–2026)' },
  { value: '389,780', label: 'Baptisms Recorded', sub: 'Since 2004' },
];

const CARDS = [
  {
    title: 'Our Story',
    desc: 'A movement born in 2004 from ten Gospel stories — now 41,000+ house churches across Asia.',
    img: '/IMG_5491.jpg',
    page: 'story' as Page,
  },
  {
    title: 'Bible Translations',
    desc: 'Providing God\'s Word to 47 Bible-less language groups across Burma, Thailand, and beyond.',
    img: '/Approach.webp',
    page: 'translations' as Page,
  },
  {
    title: 'Watch the Movement',
    desc: 'See what God is doing across the Buddhist world — 500,000 believers and growing.',
    img: '/Image.webp',
    page: 'movement-video' as Page,
  },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Identify', desc: 'Find Bible-less language groups within Buddhist church networks.' },
  { n: '02', title: 'Equip', desc: 'Train indigenous mother-tongue translators from within the community.' },
  { n: '03', title: 'Translate', desc: 'An 8-step church-centric process using LangQuest and Paratext.' },
  { n: '04', title: 'Multiply', desc: 'Church leaders choose the next language and restart the cycle.' },
];

export default function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] sm:min-h-screen overflow-hidden">
        {/* Background photo */}
        <img
          src="/IMG_5491.jpg"
          alt="Baptism in Myanmar"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6">
          <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-6">
            Church-Centric Bible Translation Movement
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight sm:leading-[0.92] tracking-tight mb-4 sm:mb-8 max-w-4xl drop-shadow-lg">
            God's Word.<br />Every People.
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white/85 max-w-xl mb-6 sm:mb-10 leading-relaxed drop-shadow px-2">
            Empowering indigenous translators to bring Scripture to every people across the Buddhist world of Asia.
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs sm:max-w-none sm:flex-row sm:gap-4 sm:justify-center">
            <button
              onClick={() => onNavigate('story')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Learn Our Story <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('movement-video')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/15 backdrop-blur border border-white/40 text-white font-semibold rounded-full hover:bg-white/25 transition-all text-sm sm:text-base"
            >
              Watch the Video
            </button>
          </div>
        </div>

        {/* Bottom-left video badge — hidden on mobile to avoid overlap */}
        <button
          onClick={() => onNavigate('movement-video')}
          className="hidden sm:flex absolute bottom-8 left-6 items-center gap-3 bg-gray-950/80 backdrop-blur-sm text-white rounded-2xl px-4 py-3 hover:bg-gray-900 transition-colors z-10"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-4 h-4 ml-0.5 fill-gray-900">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xs font-bold">Empower Asia</div>
            <div className="text-xs text-white/70">Movement Video</div>
          </div>
        </button>
      </section>

      {/* ── 3 IMAGE CARDS (YWAM-style) ── */}
      <section className="py-8 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {CARDS.map((card) => (
              <button
                key={card.title}
                onClick={() => onNavigate(card.page)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-56 sm:h-72 md:h-[400px] text-left focus:outline-none"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-7">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">{card.title}</h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed hidden sm:block">{card.desc}</p>
                  <div className="mt-2 sm:mt-4 inline-flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight size={13} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gray-950 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
                <div className="text-xs text-gray-500 hidden sm:block">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION STATEMENT ── */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">Our Vision</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 leading-tight mb-6 sm:mb-8">
            Eradicating Bible Poverty<br />Across the Buddhist World.
          </h2>
          <p className="text-gray-500 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Hundreds of people groups in Myanmar, Thailand, China, and beyond still lack God's Word in their heart language. Empower Asia is changing that — one translation at a time, led by indigenous believers.
          </p>
          <button
            onClick={() => onNavigate('process')}
            className="inline-flex items-center gap-2 text-gray-900 font-semibold text-base border-b-2 border-gray-900 pb-0.5 hover:border-gray-500 hover:text-gray-500 transition-colors"
          >
            See Our 8-Step Process <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* ── MOVEMENT VIDEO ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Our Movement Video</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950">See What God Is Doing in Asia.</h2>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/QQx95MpJxy0"
              title="Empower Asia Movement Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">Church-Centric Translation</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-4 sm:mb-6">
                Permission to translate.<br />Permission to reach.
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Founded in 2022, Empower Asia identifies, equips, and supports indigenous Bible translators — building on the movement Major Tun Kyaw Oo and Jay Pratt began in 2004.
              </p>
              <button
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gray-950 text-white font-semibold rounded-full hover:bg-black transition-colors"
              >
                Read Our Story <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {PROCESS_STEPS.map((step) => (
                <div key={step.n} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="text-3xl font-black text-gray-200 mb-3">{step.n}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH PHOTO BANNER ── */}
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[320px] overflow-hidden">
        <img
          src="/IMG_5491.jpg"
          alt="Baptism in Myanmar"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-950/65" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Burma Revival</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">
            41,932 house churches.<br />389,780 baptisms.
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed px-2">
            Your support enables Buddhist Background Believers to communicate the Good News of Christ to the entire Buddhist world.
          </p>
          <a
            href="mailto:shwemyodaw@protonmail.com"
            className="inline-flex items-center gap-2 px-9 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Partner With Us <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ── 10 STORIES ── */}
      <section className="py-16 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/Image.webp"
                alt="10 Stories of Jesus community"
                className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-[400px] object-cover"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-gray-950 text-white rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-xl max-w-[80px] sm:max-w-none">
                <div className="text-xl sm:text-3xl font-black">75</div>
                <div className="text-xs font-medium text-gray-400 mt-1">Languages<br />Translated</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Featured Resource</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-4 sm:mb-6">
                10 Stories of Jesus.
              </h2>
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4 sm:mb-5">
                A Gospel-centered resource designed to effectively share the message of Christ among Buddhist communities through visual storytelling and simple, easy-to-understand narratives.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Available in multiple languages and designed for easy distribution — shared digitally or in print — making it accessible across different regions and people groups.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('ten-stories')}
                  className="px-5 sm:px-7 py-3 sm:py-3.5 bg-gray-950 text-white font-semibold rounded-full hover:bg-black transition-colors text-sm sm:text-base"
                >
                  Explore the Stories
                </button>
                <button
                  onClick={() => onNavigate('translations')}
                  className="px-5 sm:px-7 py-3 sm:py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-colors text-sm sm:text-base"
                >
                  All Translations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
