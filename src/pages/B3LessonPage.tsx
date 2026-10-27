import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronLeft } from 'lucide-react';
import CourseProgressBar from '../components/CourseProgressBar';
import { CHAPTERS, COURSE_PATH, LESSONS, lessonPath, useCourseProgress } from '../lib/b3Course';
import { applyPageMeta } from '../lib/routes';

// Minimal slice of the YouTube IFrame Player API that we use.
type YTPlayer = { destroy: () => void };
type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      playerVars?: Record<string, number>;
      events?: { onStateChange?: (e: { data: number }) => void };
    },
  ) => YTPlayer;
  PlayerState: { ENDED: number };
};
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let ytApi: Promise<YTNamespace> | null = null;
function loadYouTubeApi(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!ytApi) {
    ytApi = new Promise((resolve) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve(window.YT!);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.head.appendChild(script);
    });
  }
  return ytApi;
}

// Embeds the video and reports when it has been watched to the end.
function LessonPlayer({ videoId, onEnded }: { videoId: string; onEnded: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;

  useEffect(() => {
    const mount = mountRef.current;
    let player: YTPlayer | null = null;
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !mount) return;
      const el = document.createElement('div');
      mount.appendChild(el);
      player = new YT.Player(el, {
        videoId,
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        events: {
          onStateChange: (e) => {
            if (e.data === YT.PlayerState.ENDED) onEndedRef.current();
          },
        },
      });
    });
    return () => {
      cancelled = true;
      player?.destroy();
      if (mount) mount.innerHTML = '';
    };
  }, [videoId]);

  return <div ref={mountRef} className="absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full" />;
}

export default function B3LessonPage() {
  const { n } = useParams<{ n: string }>();
  const lessonNumber = Number(n);
  const index = LESSONS.findIndex((l) => l.n === lessonNumber);
  const lesson = LESSONS[index];
  const { completed, isComplete, setComplete, percent } = useCourseProgress();

  useEffect(() => {
    if (lesson) {
      applyPageMeta(
        lessonPath(lesson.n),
        `${lesson.title} | B3 Training`,
        `Lesson ${lesson.n} of the free Just Obey Yeshua Training video course on obedience-based discipleship.`,
      );
    }
  }, [lesson]);

  if (!lesson) return <Navigate to={COURSE_PATH} replace />;

  const prev = LESSONS[index - 1];
  const next = LESSONS[index + 1];
  const chapter = CHAPTERS.find((c) => c.lessons.includes(lesson))!;
  const done = isComplete(lesson.n);
  const finished = completed.length === LESSONS.length;

  return (
    <div className="bg-gray-950 min-h-screen pt-16 lg:pt-20">
      <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr]">
        {/* Course content sidebar */}
        <aside className="order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto">
          <div className="p-5 sm:p-6">
            <Link
              to={COURSE_PATH}
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mb-5"
            >
              <ChevronLeft size={16} /> Course overview
            </Link>
            <h2 className="text-xl font-bold text-white mb-4">Course Content</h2>
            <CourseProgressBar percent={percent} done={completed.length} total={LESSONS.length} />
          </div>

          <nav aria-label="Course lessons" className="pb-8">
            {CHAPTERS.map((c) => (
              <div key={c.title} className="mb-2">
                <h3 className="px-5 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider text-gray-500">{c.title}</h3>
                <ul>
                  {c.lessons.map((l) => {
                    const current = l.n === lesson.n;
                    const lDone = isComplete(l.n);
                    return (
                      <li
                        key={l.n}
                        className={`flex items-center gap-3 px-5 sm:px-6 py-2.5 border-l-2 ${
                          current ? 'bg-white/10 border-blue-500' : 'border-transparent hover:bg-white/5'
                        }`}
                      >
                        <button
                          onClick={() => setComplete(l.n, !lDone)}
                          aria-label={lDone ? `Mark ${l.title} as not complete` : `Mark ${l.title} as complete`}
                          aria-pressed={lDone}
                          className={`shrink-0 w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            lDone ? 'bg-green-600 border-green-600 text-white' : 'border-gray-500 hover:border-white'
                          }`}
                        >
                          {lDone && <Check size={14} strokeWidth={3} />}
                        </button>
                        <Link
                          to={lessonPath(l.n)}
                          aria-current={current ? 'page' : undefined}
                          className="flex items-center gap-3 min-w-0 flex-1"
                        >
                          <img
                            src={`https://img.youtube.com/vi/${l.id}/mqdefault.jpg`}
                            alt=""
                            className="w-16 aspect-video object-cover rounded shrink-0"
                            loading="lazy"
                          />
                          <span className={`text-sm leading-snug ${current ? 'text-white font-semibold' : 'text-gray-300'}`}>
                            {l.title}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Lesson */}
        <main className="order-1 lg:order-2 px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <LessonPlayer key={lesson.id} videoId={lesson.id} onEnded={() => setComplete(lesson.n, true)} />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
                  {chapter.title} · Lesson {index + 1} of {LESSONS.length}
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">{lesson.title}</h1>
              </div>
              <button
                onClick={() => setComplete(lesson.n, !done)}
                aria-pressed={done}
                className={`shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  done ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-white text-gray-950 hover:bg-gray-100'
                }`}
              >
                {done ? (
                  <>
                    <CheckCircle2 size={16} /> Completed
                  </>
                ) : (
                  <>
                    <Check size={16} /> Mark as complete
                  </>
                )}
              </button>
            </div>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-2xl">
              Lessons are marked complete automatically when you finish the video. Your progress is saved in this
              browser.
            </p>

            {finished && (
              <div className="mt-6 rounded-2xl border border-green-600/40 bg-green-600/10 p-5">
                <p className="text-white font-bold">You've completed the Just Obey Yeshua Training!</p>
                <p className="text-gray-300 text-sm mt-1">
                  Now pass it on.{' '}
                  <Link to="/contact" className="text-blue-400 font-semibold hover:underline">
                    Contact us
                  </Link>{' '}
                  to host a training for your church or leaders.
                </p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              {prev ? (
                <Link
                  to={lessonPath(prev.n)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                >
                  <ArrowLeft size={16} /> Previous
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={lessonPath(next.n)}
                  onClick={() => setComplete(lesson.n, true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-950 hover:bg-gray-100 text-sm font-bold transition-colors"
                >
                  Complete &amp; Next <ArrowRight size={16} />
                </Link>
              ) : (
                <Link
                  to={COURSE_PATH}
                  onClick={() => setComplete(lesson.n, true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-950 hover:bg-gray-100 text-sm font-bold transition-colors"
                >
                  Finish Course <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
