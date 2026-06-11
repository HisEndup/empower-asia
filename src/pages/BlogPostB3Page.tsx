import type { Page } from '../App';
import NewsletterSignup from '../components/NewsletterSignup';

const SCHEDULE = [
  { flag: '🇧🇹', country: 'Bhutan (BTT)', time: '6:00 – 7:00 PM' },
  { flag: '🇮🇳', country: 'India (IST)', time: '5:30 – 6:30 PM' },
  { flag: '🇳🇵', country: 'Nepal (NPT)', time: '5:45 – 6:45 PM' },
  { flag: '🇱🇰', country: 'Sri Lanka (IST)', time: '5:30 – 6:30 PM' },
  { flag: '🇲🇲', country: 'Myanmar (MMT)', time: '6:30 – 7:30 PM' },
  { flag: '🇹🇭', country: 'Thailand (ICT)', time: '7:00 – 8:00 PM' },
  { flag: '🇺🇸', country: 'USA (Eastern)', time: '8:00 – 9:00 AM' },
  { flag: '🇺🇸', country: 'USA (Central)', time: '7:00 – 8:00 AM' },
];

export default function BlogPostB3Page({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-0 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
          <button
            onClick={() => onNavigate('blog')}
            className="text-blue-400 text-sm font-semibold mb-6 inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors"
          >
            &larr; Back to Stories
          </button>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 bg-blue-900 text-blue-300 text-xs font-bold rounded-full uppercase tracking-wider">
              Prayer
            </span>
            <span className="text-gray-500 text-sm">April 2026 &middot; 5 min read</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
            B3 Prayer Movement: Interceding for the Buddhist World
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A growing community of believers united to intercede for 500 million Buddhist souls across Asia.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-4xl mx-auto px-6 -mt-0">
        <img
          src="/B3_Prayer.jpg"
          alt="B3 Prayer Movement — Interceding for the Buddhist World"
          className="w-full rounded-3xl shadow-2xl object-cover"
          style={{ maxHeight: '520px', objectPosition: 'top' }}
        />
      </div>

      {/* Article body */}
      <article className="py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10 text-gray-700 leading-relaxed text-base sm:text-lg">

          <p>
            Across the globe, nearly 500 million people follow Buddhism, yet only an estimated 3–5% are believers from a Buddhist background. This gap represents one of the most significant mission fields of our time — millions who have yet to encounter the life-transforming message of Jesus Christ.
          </p>
          <p>
            The B3 Prayer Movement was born out of this burden. We are a growing community of believers committed to standing in the gap through consistent, focused, and Spirit-led prayer for Buddhist nations, people groups, and leaders.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Global Movement United in Prayer</h2>
            <p>
              What began as a small initiative has now become a multi-nation prayer movement, bringing together believers from the United States, Myanmar, Thailand, Bhutan, India, and other parts of Asia. Despite differences in geography, culture, and time zones, we are united by one calling:
            </p>
            <blockquote className="border-l-4 border-blue-800 pl-6 my-6 italic text-gray-600 text-xl">
              "To intercede for the Buddhist world until every people group has access to the Gospel."
            </blockquote>
            <p>
              Every Wednesday and Friday, we gather online to seek God together. These are not just meetings — they are moments of alignment with God's heart for the nations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Pray For</h2>
            <p className="mb-4">Our prayer times are intentional and mission-focused. Together, we intercede for:</p>
            <ul className="space-y-3">
              {[
                'Unreached Buddhist people groups who have little or no access to the Gospel',
                'Nations where the Gospel is restricted, asking God to open doors',
                'Local believers and underground churches, especially those facing persecution',
                'Raising of leaders, disciple-makers, and church planters',
                'Spiritual breakthrough, revival, and transformation across communities',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-800 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We believe prayer is not a secondary activity — it is the foundation of every lasting movement of God.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the Buddhist World?</h2>
            <p className="mb-4">
              Many Buddhist communities are deeply rooted in tradition, culture, and worldview systems that make Gospel engagement both sensitive and challenging. In many regions, believers are few, churches are small or hidden, and resources are limited.
            </p>
            <p className="mb-4">Yet, we believe this:</p>
            <blockquote className="border-l-4 border-blue-800 pl-6 my-6 italic text-gray-600 text-xl">
              "No heart is unreachable. No nation is beyond God's power."
            </blockquote>
            <p>
              As we pray, we are already seeing God move — strengthening believers, opening relationships, and raising a new generation of leaders passionate about sharing Christ.
            </p>
          </div>

          {/* Schedule card */}
          <div className="bg-gray-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-8 pt-8 pb-4 text-center">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Join Us Online</p>
              <h3 className="text-2xl font-bold text-white mb-2">Weekly Prayer Schedule</h3>
              <p className="text-gray-400 mb-5">Every Wednesday &amp; Friday</p>
              <a
                href="https://meet.google.com/vua-pzms-jcd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white font-bold rounded-full hover:bg-blue-700 transition-colors text-sm"
              >
                Join Google Meet &rarr;
              </a>
            </div>
            <div className="px-8 pb-8 mt-6 space-y-2">
              {SCHEDULE.map((row) => (
                <div key={row.country} className="flex items-center justify-between bg-white/5 rounded-xl px-3 sm:px-5 py-3 sm:py-3.5 gap-2">
                  <span className="text-white font-medium flex items-center gap-2 text-sm sm:text-base min-w-0">
                    <span className="text-base sm:text-xl shrink-0">{row.flag}</span>
                    <span className="truncate">{row.country}</span>
                  </span>
                  <span className="text-blue-300 font-semibold text-xs sm:text-sm shrink-0">{row.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Join the Movement</h2>
            <p className="mb-8">
              You are invited to be part of what God is doing. Whether you are an intercessor, a supporter, or someone with a heart for missions, there is a place for you in this movement.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">🙏</div>
                <h4 className="font-bold text-gray-900 mb-2">Join Weekly Prayer</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Stand with us in intercession for the Buddhist world. Every Wednesday &amp; Friday.
                </p>
                <a
                  href="mailto:b3prayermovement@gmail.com"
                  className="text-blue-800 text-sm font-bold hover:underline"
                >
                  b3prayermovement@gmail.com
                </a>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">📩</div>
                <h4 className="font-bold text-gray-900 mb-2">Subscribe for Updates</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Stay connected with testimonies, prayer requests, and updates from the field.
                </p>
                <a
                  href="#newsletter"
                  className="text-blue-800 text-sm font-bold hover:underline"
                >
                  Subscribe below
                </a>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">💝</div>
                <h4 className="font-bold text-gray-900 mb-2">Support the Mission</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Your generosity helps us continue outreach, training, and equipping leaders across nations.
                </p>
                <button
                  onClick={() => onNavigate('give')}
                  className="text-blue-800 text-sm font-bold hover:underline"
                >
                  Donate here &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Moving Forward Together</h2>
            <p className="mb-4">
              The vision is clear: to see the Gospel reach every Buddhist people group, to raise leaders, and to witness multiplying movements of disciples and churches across nations.
            </p>
            <p className="mb-6">
              This is not the work of one person or one nation — it is a global calling. And it begins with prayer.
            </p>
            <blockquote className="italic text-blue-900 text-xl border-l-0 pl-0">
              "Ask of Me, and I will give you the nations as your inheritance." — Psalm 2:8
            </blockquote>
            <p className="mt-4 text-gray-600">
              Let us ask. Let us seek. Let us stand together — until the Buddhist world knows Him.
            </p>
          </div>

        </div>
      </article>

      <NewsletterSignup />
    </div>
  );
}
