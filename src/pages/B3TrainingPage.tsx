import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Repeat, Play, CheckCircle2, Circle, RotateCcw } from 'lucide-react';
import CourseProgressBar from '../components/CourseProgressBar';
import { CHAPTERS, LESSONS, lessonPath, useCourseProgress } from '../lib/b3Course';

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
  const { completed, isComplete, percent, nextLesson, reset } = useCourseProgress();
  const started = completed.length > 0;
  const finished = completed.length === LESSONS.length;

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">B3 Training · Online Course</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Just Obey Yeshua Training
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
            A free, self-paced video course on obedience-based discipleship. Work through {LESSONS.length} lessons recorded
            from Just Obey Yeshua trainings we have led in years past. Watch, put what you learn into practice, and pass it
            on to others.
          </p>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 max-w-3xl">
            <CourseProgressBar percent={percent} done={completed.length} total={LESSONS.length} />
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <Link
                to={lessonPath(nextLesson.n)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                <Play size={16} className="fill-gray-950" />
                {finished ? 'Watch Again' : started ? `Continue: Lesson ${nextLesson.n}` : 'Start Course'}
              </Link>
              {started && (
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <RotateCcw size={14} /> Reset progress
                </button>
              )}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Your progress is saved in this browser. No sign-up needed.
            </p>
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
              {chapter.lessons.map((lesson) => {
                const done = isComplete(lesson.n);
                return (
                  <Link
                    key={lesson.id}
                    to={lessonPath(lesson.n)}
                    className="group rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <div className="relative aspect-video bg-black overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${lesson.id}/hqdefault.jpg`}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-xl">
                          <Play size={22} className="ml-1 fill-gray-900 text-gray-900" />
                        </div>
                      </div>
                      {done && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-green-600 px-2.5 py-1 text-xs font-bold text-white">
                          <CheckCircle2 size={13} /> Completed
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{chapter.title}</span>
                        <h3 className="mt-1 text-white text-sm font-semibold leading-snug">{lesson.title}</h3>
                      </div>
                      {done ? (
                        <CheckCircle2 size={22} className="shrink-0 text-green-500" aria-label="Completed" />
                      ) : (
                        <Circle size={22} className="shrink-0 text-gray-600" strokeDasharray="4 3" aria-label="Not started" />
                      )}
                    </div>
                  </Link>
                );
              })}
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
