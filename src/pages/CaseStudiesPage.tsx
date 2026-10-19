import { useState } from 'react';
import { FileText, Calendar, User, Headphones, Youtube } from 'lucide-react';

interface CaseStudy {
  category: string;
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  summary: string;
  stats?: { value: string; label: string }[];
  pdfUrl: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    category: 'Church Planting Movement',
    title: 'From Institutional Church to Church Planting Movement',
    author: 'Pastor Jimmy Tam — Sunrise Christian Community, Alhambra, CA',
    date: 'October 2017',
    summary:
      'In 2015, Sunrise Christian Community began a journey to transform from a conventional attractional church into a Church Planting Movement. Within 12 months, 60% of the congregation became active disciple makers, 7 house churches were planted, 7 seeker groups started, and 9 people were baptized — a dramatic shift from just 5–7 baptisms per year over the previous 14 years.',
    stats: [
      { value: '50 → 60%', label: 'Members Active' },
      { value: '7', label: 'House Churches' },
      { value: '7', label: 'Seeker Groups' },
      { value: '9', label: 'Baptisms in 6 Months' },
    ],
    pdfUrl:
      '/Case_Study_1.pdf',
  },
  {
    category: 'Micro-Church Network',
    title: 'Multiplying Micro-Church Networks: The Nevius Method',
    subtitle: 'A Prophetic Voice and Vision for the Korean Church',
    summary:
      'This case study examines the Nevius Method — a revolutionary approach to church planting that transformed Korea into one of the most evangelized nations in Asia. By focusing on systematic Bible study, lay leadership, and self-supporting indigenous churches, the Nevius Method produced a multiplying micro-church network that became a prophetic model for movements worldwide.',
    stats: [
      { value: '2 Weeks', label: 'in Korea' },
      { value: '50+ Years', label: 'of Impact' },
      { value: 'Millions', label: 'of Believers' },
      { value: 'Indigenous', label: '& Self-Supporting' },
    ],
    pdfUrl: '/Case_Study_2.pdf',
  },
  {
    category: 'Podcast',
    title: 'Jay Judson — Engaging Missions Podcast',
    subtitle: 'Stories and Insights from the Mission Field',
    summary:
      'A compelling missions conversation featuring Jay Judson sharing firsthand insights on engaging communities with the Gospel across Asia. This resource explores practical strategies for cross-cultural mission work, disciple making, and church planting movements in the Buddhist world.',
    pdfUrl: '/Case_Study_3.pdf',
  },
  {
    category: 'Historical Case Study',
    title: 'Church Planting Movements in Early America',
    subtitle: 'Lessons from the First Great Awakening',
    summary:
      "This historical case study examines how the early American church experienced explosive multiplication through grassroots movements, circuit riders, and lay-led gatherings — long before modern missions methodology existed. The patterns that emerged in early America offer timeless principles for today's church planting movements across Asia and the Buddhist world.",
    pdfUrl: '/Case_Study_4.pdf',
  },
  {
    category: 'Church Leadership',
    title: 'George Patterson on Opposition to Multiplying Micro-Church Networks',
    subtitle: 'Navigating Resistance in Church Planting Movements',
    summary:
      'Veteran missionary George Patterson addresses the common opposition and resistance faced when establishing multiplying micro-church networks. Drawing from decades of field experience, Patterson provides practical wisdom for leaders navigating institutional pushback, cultural barriers, and theological objections while maintaining movement momentum.',
    pdfUrl: '/Case_Study_5.pdf',
  },
  {
    category: 'Buddhist Background Believers',
    title: "How God is Multiplying Networks of House Churches Through the Buddhist Background Believers' Movement",
    summary:
      'A firsthand account of how God is moving powerfully among Buddhist Background Believers (BBBs) across Asia, multiplying networks of house churches through indigenous leaders. This case study documents the growth of a grassroots movement where former Buddhists are becoming church planters, reaching their own communities with the Gospel through culturally rooted discipleship and oral storytelling.',
    stats: [
      { value: 'BBBs', label: 'Buddhist Background Believers' },
      { value: 'House Church', label: 'Networks' },
      { value: 'Indigenous', label: 'Leaders' },
      { value: 'Multiplying', label: 'Movement' },
    ],
    pdfUrl: '/Case_Study_6.pdf',
  },
  {
    category: 'Myanmar CPM Assessment',
    title: 'Summary of Myanmar Church Planting Movement Assessment',
    summary:
      "A comprehensive assessment of the Church Planting Movement (CPM) in Myanmar, documenting verified growth, methodology, and the multiplication of disciples and churches across the country. This report provides an independent evaluation of movement health, leadership development, and the reproducibility of the model across Myanmar's diverse ethnic and linguistic communities.",
    stats: [
      { value: 'Myanmar', label: 'Country' },
      { value: 'CPM', label: 'Assessment' },
      { value: 'Verified', label: 'Growth' },
      { value: 'Indigenous', label: 'Leadership' },
    ],
    pdfUrl: '/Case_Study_7.pdf',
  },
  {
    category: 'CPM Assessment',
    title: 'Smith CPM Assessment',
    summary:
      'An independent assessment of a Church Planting Movement evaluating the authenticity, health, and reproducibility of disciple-making and church multiplication. This report applies rigorous CPM evaluation criteria to verify movement claims, examine leadership structures, and assess long-term sustainability — providing a model for how movements can be accountable and credible.',
    stats: [
      { value: 'Independent', label: 'Assessment' },
      { value: 'CPM', label: 'Verification' },
      { value: 'Movement', label: 'Health' },
      { value: 'Reproducible', label: 'Model' },
    ],
    pdfUrl: '/Case_Study_8.pdf',
  },
  {
    category: 'Movement Catalysis',
    title: 'Dealing with Hindrances in Catalyzing Micro-Church Movements',
    summary:
      'A practical guide addressing the most common obstacles encountered when catalyzing Micro-Church Movements (MCM). This case study identifies key hindrances — cultural, institutional, theological, and relational — and provides field-tested strategies for overcoming them. Essential reading for movement leaders and missionaries working to multiply house churches in resistant contexts.',
    stats: [
      { value: 'Micro-Church', label: 'Movements' },
      { value: 'Obstacle', label: 'Analysis' },
      { value: 'Field-Tested', label: 'Strategies' },
      { value: 'Movement', label: 'Catalysis' },
    ],
    pdfUrl: '/Case_Study_9.pdf',
  },
  {
    category: 'Podcast',
    title: 'Church Planting & Multiplication with Jay Judson',
    subtitle: 'Episode 016 — Engaging Missions Podcast',
    summary:
      'Jay Judson joins the Engaging Missions Podcast to discuss church planting and multiplication movements across Asia. Drawing from years of field experience, Jay shares how indigenous leaders are multiplying disciples and house churches in the Buddhist world — and what Western churches can learn from these movements.',
    pdfUrl: 'https://podcasts.apple.com/us/podcast/em016-church-planting-multiplication-with-jay-judson/id859735709?i=1000493381703',
  },
  {
    category: 'Podcast',
    title: 'Engaging Missions — Jay Judson Interview',
    subtitle: 'July 3, 2014',
    summary:
      'Jay Judson sits down with Engaging Missions to discuss church planting and multiplication movements across Asia. A foundational conversation on how indigenous leaders are multiplying disciples and house churches in the Buddhist world.',
    pdfUrl: 'https://podcasts.apple.com/us/podcast/em016-church-planting-multiplication-with-jay-judson/id859735709?i=1000493381703',
  },
  {
    category: 'Testimony',
    title: "Jay's Testimony and Life Story",
    summary:
      "Jay Judson shares his personal testimony and life story — how God called him from his background into a life of church planting and multiplication movements across Asia. A powerful account of faith, obedience, and the transforming work of God in one person's life that sparked a movement.",
    pdfUrl: 'https://youtu.be/DX3xJpfbmI4',
  },
  {
    category: 'Myanmar Movement',
    title: 'Jay Shares About the Myanmar Movement',
    summary:
      "Jay Judson shares firsthand about the remarkable Church Planting Movement taking place in Myanmar — how indigenous leaders are being equipped, disciples are multiplying, and house churches are spreading across the country. A compelling firsthand account of God moving powerfully in one of Asia's most spiritually diverse nations.",
    pdfUrl: 'https://youtu.be/9K6eidwZekA',
  },
  {
    category: 'Podcast',
    title: "It's a Beautiful Thing to See Someone Fall Passionately in Love with Jesus",
    subtitle: 'Engaging Missions Podcast — Episode 097, 2015',
    summary:
      'Jay Judson returns to the Engaging Missions Podcast to share moving stories of people across Asia falling passionately in love with Jesus. A deeply encouraging conversation about what happens when the Gospel takes root in unlikely places and transforms lives from the inside out.',
    pdfUrl: 'https://metacast.app/podcast/engaging-missions/udIIZkfB/em097-it-s-a-beautiful-thing-to-see-someone-fall-passionately-in-love-with-jesus-with-jay-judson/dybRRyjq',
  },
];

// Podcast is pinned as the third tab; the rest follow CASE_STUDIES order
const CATEGORIES = (() => {
  const rest = Array.from(new Set(CASE_STUDIES.map((study) => study.category))).filter((c) => c !== 'Podcast');
  return ['All', rest[0], 'Podcast', ...rest.slice(1)];
})();

function CaseStudyCard({ study }: { study: CaseStudy }) {
  // Apple Podcasts links are podcasts.apple.com/.../podcast/..., so check both parts
  const isPodcast = study.pdfUrl.includes('apple.com/') && study.pdfUrl.includes('podcast');
  const isYouTube = study.pdfUrl.includes('youtu');
  const isPdf = study.pdfUrl.toLowerCase().endsWith('.pdf');

  return (
    <article className="h-full flex flex-col rounded-3xl bg-gray-900 border border-white/10 p-6 sm:p-8">
      <span className="self-start inline-block bg-blue-500/15 text-blue-300 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
        {study.category}
      </span>
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5 leading-tight">{study.title}</h2>
      {study.subtitle && <p className="text-lg sm:text-xl text-gray-400 italic -mt-2 mb-5">{study.subtitle}</p>}
      {(study.author || study.date) && (
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-sm text-gray-400 mb-6">
          {study.author && (
            <span className="inline-flex items-center gap-2">
              <User size={14} className="text-gray-500 shrink-0" /> {study.author}
            </span>
          )}
          {study.date && (
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} className="text-gray-500 shrink-0" /> {study.date}
            </span>
          )}
        </div>
      )}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">{study.summary}</p>
      {study.stats && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          {study.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 text-center">
              <p className="text-lg sm:text-xl font-extrabold text-white mb-1 break-words hyphens-auto">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-auto">
        <a
          href={study.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-200 transition-colors"
        >
          {isPodcast ? (
            <>
              <Headphones size={16} /> Listen on Apple Podcasts
            </>
          ) : isYouTube ? (
            <>
              <Youtube size={16} /> Watch on YouTube
            </>
          ) : isPdf ? (
            <>
              <FileText size={16} /> Read Full PDF
            </>
          ) : (
            <>
              <Headphones size={16} /> Listen to Podcast
            </>
          )}
        </a>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((study) => study.category === activeCategory);

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-10 sm:pb-12 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Case Studies</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Stories of Transformation
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Real stories of God's Word transforming lives and communities across Asia.
          </p>
        </div>
      </section>

      {/* Category filters */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-white text-gray-950'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 pt-8 pb-16">
          {filtered.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </section>
    </div>
  );
}
