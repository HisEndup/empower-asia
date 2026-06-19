import { useState, useEffect } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { client, urlFor } from '../lib/sanityClient';
import NewsletterSignup from '../components/NewsletterSignup';

interface PrayerFlyer {
  _id: string;
  title: string;
  flyer?: { asset: { url: string }; alt?: string };
  downloadLink?: string;
}

const FLYER_QUERY = `*[_type == "prayerFlyer"] | order(_createdAt desc) [0] {
  _id, title,
  flyer { asset-> { url }, alt },
  downloadLink
}`;

const SCHEDULE = [
  { flag: '🇧🇹', country: 'Bhutan (BTT)', time: '6:00 – 7:00 PM' },
  { flag: '🇮🇳', country: 'India (IST)', time: '5:30 – 6:30 PM' },
  { flag: '🇳🇵', country: 'Nepal (NPT)', time: '5:45 – 6:45 PM' },
  { flag: '🇱🇰', country: 'Sri Lanka (IST)', time: '5:30 – 6:30 PM' },
  { flag: '🇲🇲', country: 'Myanmar (MMT)', time: '6:30 – 7:30 PM' },
  { flag: '🇹🇭', country: 'Thailand (ICT)', time: '7:00 – 8:00 PM' },
  { flag: '🇺🇸', country: 'USA (Eastern Time)', time: '8:00 – 9:00 AM' },
  { flag: '🇺🇸', country: 'USA (Central Time)', time: '7:00 – 8:00 AM' },
];

const PRAYER_POINTS = [
  'Unreached Buddhist people groups',
  'Nations where the Gospel is restricted',
  'Local believers and underground churches',
  'Raising of leaders, disciple-makers, and church planters',
  'Spiritual breakthrough, revival, and transformation',
];

export default function B3PrayerPage() {
  const [flyer, setFlyer] = useState<PrayerFlyer | null>(null);

  useEffect(() => {
    client.fetch<PrayerFlyer>(FLYER_QUERY)
      .then((data) => { if (data) setFlyer(data); })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden bg-gray-950">
        <img
          src="/B3_Prayer.jpg"
          alt="B3 Prayer Movement"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-28 sm:pt-44 pb-16 px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Prayer Movement</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-lg">
            B3 Prayer Movement
          </h1>
          <p className="text-lg sm:text-2xl text-white/80 font-light mb-8 max-w-xl">
            Interceding for the Buddhist World
          </p>
          <a
            href="https://meet.google.com/vua-pzms-jcd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg text-base"
          >
            Join Weekly Prayer <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* ── OPENING STAT ── */}
      <section className="bg-blue-900 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white text-lg sm:text-2xl md:text-3xl font-semibold leading-relaxed">
            Nearly <span className="text-blue-300 font-black">500 million people</span> follow Buddhism, yet only{' '}
            <span className="text-blue-300 font-black">3–5%</span> are believers from a Buddhist background.
          </p>
        </div>
      </section>

      {/* ── GLOBAL MOVEMENT ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">United in Prayer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
            A Global Movement United in Prayer
          </h2>
          <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
            <p>
              The B3 Prayer Movement unites believers across the USA, Myanmar, Thailand, Bhutan, India, and throughout Asia in weekly intercession for the Buddhist world. Every Wednesday and Friday, followers of Jesus gather — across time zones and borders — to pray for the nations that have yet to hear the Good News.
            </p>
            <p>
              This is not just a prayer meeting. It is a movement of ordinary believers standing in the gap for hundreds of unreached people groups — believing that God hears and answers the prayers of His people.
            </p>
          </div>
          <blockquote className="border-l-4 border-blue-700 pl-6 py-2">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 italic leading-snug">
              "To intercede for the Buddhist world until every people group has access to the Gospel."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── WHAT WE PRAY FOR ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Our Intercession</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 mb-10">What We Pray For</h2>
          <div className="space-y-4">
            {PRAYER_POINTS.map((point, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-800 text-base sm:text-lg font-medium leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THE BUDDHIST WORLD ── */}
      <section className="py-16 sm:py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Our Conviction</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
            Why the Buddhist World?
          </h2>
          <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
            <p>
              The Buddhist world represents one of the largest unreached populations on earth. Billions live in countries where Christianity has little or no presence, where sharing the Gospel carries risk, and where generations have passed without hearing the name of Jesus.
            </p>
            <p>
              But God is moving. Underground churches are multiplying. Indigenous translators are bringing Scripture to Bible-less languages. And a growing prayer movement is standing in the gap — believing for a great harvest.
            </p>
          </div>
          <blockquote className="border-l-4 border-blue-500 pl-6 py-2">
            <p className="text-2xl sm:text-3xl font-black text-white italic leading-snug">
              "No heart is unreachable. No nation is beyond God's power."
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── MOVING FORWARD ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">A Call to Prayer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 mb-8">Moving Forward Together</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-8 py-8 mb-8">
            <p className="text-blue-900 text-lg sm:text-xl italic font-semibold leading-relaxed mb-3">
              "Ask of Me, and I will give you the nations as your inheritance."
            </p>
            <p className="text-blue-700 text-sm font-bold uppercase tracking-widest">— Psalm 2:8</p>
          </div>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Let us ask. Let us seek. Let us stand together — until the Buddhist world knows Him.
          </p>
        </div>
      </section>

      {/* ── PRAYER FLYER (Sanity) ── */}
      {flyer && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Resources</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-950 mb-8">{flyer.title}</h2>
            {flyer.flyer && (
              <img
                src={urlFor(flyer.flyer as any).width(800).url()}
                alt={flyer.flyer.alt || flyer.title}
                className="w-full rounded-2xl shadow-xl border border-gray-200 mb-6"
              />
            )}
            {flyer.downloadLink && (
              <a
                href={flyer.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-950 text-white font-bold rounded-full hover:bg-black transition-colors"
              >
                <Download size={16} /> Download Flyer
              </a>
            )}
          </div>
        </section>
      )}

      {/* ── WEEKLY SCHEDULE ── */}
      <section className="py-16 sm:py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Join Us</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              B3 Prayer Movement – Weekly Prayer Schedule
            </h2>
            <p className="text-gray-400 text-base">Every Wednesday &amp; Friday</p>
          </div>

          {/* Timezone grid */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 mb-8">
            {SCHEDULE.map((s, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 sm:px-7 py-4 ${
                  i < SCHEDULE.length - 1 ? 'border-b border-gray-800' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.flag}</span>
                  <span className="text-white text-sm sm:text-base font-medium">{s.country}</span>
                </div>
                <span className="text-blue-300 text-sm sm:text-base font-bold tabular-nums">{s.time}</span>
              </div>
            ))}
          </div>

          {/* Google Meet CTA */}
          <div className="text-center">
            <a
              href="https://meet.google.com/vua-pzms-jcd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full hover:bg-blue-500 transition-colors shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Join Google Meet →
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Free to join. No account required.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
