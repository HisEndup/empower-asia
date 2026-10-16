import { FileText, Calendar, User } from 'lucide-react';

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
    category: 'Missions Podcast',
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
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="rounded-3xl bg-gray-900 border border-white/10 p-6 sm:p-10">
      <span className="inline-block bg-blue-500/15 text-blue-300 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
        {study.category}
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">{study.title}</h2>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {study.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      <a
        href={study.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-200 transition-colors"
      >
        <FileText size={16} /> Read Full PDF
      </a>
    </article>
  );
}

export default function CaseStudiesPage() {
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

      {/* Case studies */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 space-y-8">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.title} study={study} />
        ))}
      </section>
    </div>
  );
}
