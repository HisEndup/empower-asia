import { ExternalLink } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const STATS = [
  { value: '41,932', label: 'House Churches', desc: 'Established through the DMS movement' },
  { value: '500,000', label: 'Believers', desc: 'From Buddhist backgrounds reached' },
  { value: '47', label: 'Bible Translations', desc: 'Initiated across 5 countries' },
  { value: '250M+', label: 'Buddhist Adherents', desc: 'In our target region' },
];

const PILLARS = [
  {
    title: 'House Church Movement',
    body: 'Our ministry has catalyzed the establishment of more than 41,000 house churches, resulting in approximately 500,000 believers from Buddhist backgrounds. As a house church movement, we have also initiated a church-centric Bible translation movement in order to more effectively reach unreached populations throughout Asia.',
  },
  {
    title: 'Better Bible Translating',
    body: 'We have launched a new Bible Translation Movement dedicated to translating the Word of God into forty-seven languages across Burma and other regions of Asia.',
  },
  {
    title: 'Partnering with Experts',
    body: 'We engage only qualified experts to equip and support indigenous churches. We are now employing a translation methodology that is more readily understood by Burmese audiences than previous approaches.',
  },
  {
    title: 'Quality-assured Process',
    body: 'The Bible is the Word of God; therefore, the utmost care is exercised throughout our eight-step translation process to ensure the highest standards of quality and accuracy.',
  },
];

const RESOURCES = [
  {
    title: '10 Stories of Jesus',
    desc: 'Life-changing Gospel accounts translated into 24 languages across the Buddhist world. Available to read and listen to for free.',
    type: 'Resource',
    href: 'https://www.b3stories.com',
  },
  {
    title: 'Training Materials',
    desc: 'Church-centric Bible translation training resources used to equip indigenous translators and church planters across Asia.',
    type: 'Resource',
    href: 'https://empowerasia.org/our-resources',
  },
  {
    title: 'Barriers to Sharing the Gospel with Buddhists',
    desc: '"Barriers that Hinder Buddhists from Understanding the Gospel and Bridges" — a comprehensive guide for outreach and evangelism in Buddhist contexts.',
    type: 'PDF Download',
    href: '/Barriers_that_Hinder_Buddhists_understanding_t.pdf',
  },
];

export default function MovementVideoPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Our Resources</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Movement</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            See the movement God has built — over 41,000 house churches, 500,000 believers, and 47 Bible translations across the Buddhist world of Asia.
          </p>
        </div>
      </section>

      {/* Video Player */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
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

      {/* Full-bleed group photo with stat overlay */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="/Image.webp"
          alt="Empower Asia movement partners"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-950/65" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-3">Burma Revival</p>
          <h2 className="text-3xl md:text-5xl font-black mb-3">41,932 house churches.</h2>
          <p className="text-gray-300 text-lg">389,780 baptisms recorded since 2004.</p>
        </div>
      </section>

      {/* Movement Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">The Movement</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Empower Asia Movement</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-12">
            <p>
              The Empower Asia ministry is seeing one of the largest breakthroughs among the 250 million Buddhist people group. Most mission organizations in the Buddhist world work under traditional churches and institutions that primarily focus on growth by addition and not by multiplication. But our ministry has catalyzed over 41,932 house churches with 389,780 Buddhist background believers thanks to our efficient and effective methods of coaching and house church planting.
            </p>
            <p>
              The Empower Asia Movement has now started the Church Centric Bible Translation Movement to translate the Bible into 47 languages in Asia using their own terminology in their own native languages. While other methods have been utilized to translate the bible outside of the church, we are using the bride of Christ from indigenous churches and therefore not monopolizing the efforts of traditional churches. So far we have translated the following languages listed and available on the YouVersion app.
            </p>
            <p>
              Empower Asia aspires to see this Church Centric Bible Translation Movement spread the gospel all throughout Asia, provide new bible translations, and establish new house churches all in their native languages!
            </p>
          </div>

          {/* Four pillars */}
          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="text-3xl font-black text-gray-200 mb-3">0{i + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Stats */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10 text-center">The Movement at a Glance</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
                <div className="text-xs text-gray-500">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Additional Resources</h2>
          <div className="space-y-6">
            {RESOURCES.map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{r.type}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{r.desc}</p>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-black transition-colors"
                >
                  Access Resource <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share the Movement</h2>
          <p className="text-gray-600 mb-8">Help spread the word about what God is doing across the Buddhist world.</p>
          <a
            href="https://www.facebook.com/share/1CDQsUokKe/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition-colors"
          >
            Share on Facebook <ExternalLink size={15} />
          </a>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
