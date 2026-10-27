import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Repeat, Youtube } from 'lucide-react';
import VideoCard from '../components/VideoCard';

type Lesson = { n: number; id: string };

// Recorded sessions from past Just Obey Yeshua trainings (Empower Asia YouTube channel).
const CHAPTERS: { title: string; lessons: Lesson[] }[] = [
  {
    title: 'Chapter 1',
    lessons: [
      { n: 1, id: 'je8V5SyooQU' },
      { n: 2, id: '9xT7n2_BzNs' },
      { n: 3, id: 'JKlATK4y9Ak' },
    ],
  },
  {
    title: 'Chapter 2',
    lessons: [
      { n: 4, id: 'LkLZlXfIPrM' },
      { n: 5, id: 'aFE0YjT4OMQ' },
      { n: 6, id: 'fDGDX2gHLlg' },
    ],
  },
  {
    title: 'Chapter 3',
    lessons: [
      { n: 7, id: 'iI2YtT_nGgw' },
      { n: 8, id: '0Z37M-vBetQ' },
      { n: 9, id: 'VtuxKhkHN1o' },
    ],
  },
  {
    title: 'Chapter 4',
    lessons: [{ n: 10, id: 'DorHL0oIfsQ' }],
  },
];

const LESSON_COUNT = CHAPTERS.reduce((sum, c) => sum + c.lessons.length, 0);

const PILLARS = [
  {
    icon: BookOpen,
    title: 'Rooted in Scripture',
    desc: 'Every session goes back to the Word, learning what Yeshua commanded and how His first disciples lived it out.',
  },
  {
    icon: Users,
    title: 'Obedience-Based Discipleship',
    desc: 'The goal is not just knowing more, but simply obeying Yeshua in everyday life and helping others do the same.',
  },
  {
    icon: Repeat,
    title: 'Made to Multiply',
    desc: 'Disciples who obey make disciples, and simple house churches start new house churches. That is how movements grow.',
  },
];

export default function B3TrainingPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">B3 Training</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Just Obey Yeshua Training
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-6 sm:mb-8">
            A self-paced video course on obedience-based discipleship. Learn at your own pace with {LESSON_COUNT} lessons
            recorded from Just Obey Yeshua trainings we have led in years past. Watch, put what you learn into practice,
            and pass it on to others.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#lessons"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Lesson 1 <ArrowRight size={16} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC48abrZoi7eyjbccGwy-M7A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors text-sm sm:text-base"
            >
              <Youtube size={16} /> Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* About the training */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <Icon size={22} className="text-blue-400 mb-4" />
              <h2 className="text-white font-bold text-base mb-2">{title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mt-6 max-w-3xl">
          These videos come from live trainings, so some are older and some are new. Check back regularly for updates and
          new lessons.
        </p>
      </section>

      {/* Lessons */}
      <section id="lessons" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 scroll-mt-24">
        {CHAPTERS.map((chapter) => (
          <div key={chapter.title} className="mb-12 sm:mb-16 last:mb-0">
            <div className="flex items-end justify-between border-b border-white/15 pb-3 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{chapter.title}</h2>
              <span className="text-gray-500 text-sm">
                {chapter.lessons.length} {chapter.lessons.length === 1 ? 'Lesson' : 'Lessons'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {chapter.lessons.map((lesson) => (
                <VideoCard
                  key={lesson.id}
                  id={lesson.id}
                  title={`Lesson ${lesson.n}: Just Obey Yeshua`}
                  label={chapter.title}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Want to bring this training to your church?</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            We'd love to hear how you are putting these lessons into practice, or help you host a Just Obey Yeshua
            training for your leaders.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
