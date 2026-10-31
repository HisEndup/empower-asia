import { useCallback, useEffect, useState } from 'react';

export type Lesson = { n: number; id: string; title: string };
export type Chapter = { title: string; lessons: Lesson[] };

const lesson = (n: number, id: string): Lesson => ({ n, id, title: `Lesson ${n}: Just Obey Jesus` });

// Recorded sessions from past Just Obey Jesus trainings (Empower Asia YouTube channel).
export const CHAPTERS: Chapter[] = [
  { title: 'Chapter 1', lessons: [lesson(1, 'je8V5SyooQU'), lesson(2, '9xT7n2_BzNs'), lesson(3, 'JKlATK4y9Ak')] },
  { title: 'Chapter 2', lessons: [lesson(4, 'LkLZlXfIPrM'), lesson(5, 'aFE0YjT4OMQ'), lesson(6, 'fDGDX2gHLlg')] },
  { title: 'Chapter 3', lessons: [lesson(7, 'iI2YtT_nGgw'), lesson(8, '0Z37M-vBetQ'), lesson(9, 'VtuxKhkHN1o')] },
  { title: 'Chapter 4', lessons: [lesson(10, 'DorHL0oIfsQ')] },
];

export const LESSONS: Lesson[] = CHAPTERS.flatMap((c) => c.lessons);
export const COURSE_PATH = '/just-obey-jesus-training';
export const lessonPath = (n: number) => `${COURSE_PATH}/lesson/${n}`;

// Key kept from the page's original /b3-training name so existing progress carries over.
const STORAGE_KEY = 'b3-training-progress';
const CHANGE_EVENT = 'b3-training-progress-change';

// Progress lives in this browser only; storage can be unavailable (private mode), so fail quietly.
function readCompleted(): number[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter((n) => LESSONS.some((l) => l.n === n)) : [];
  } catch {
    return [];
  }
}

function writeCompleted(completed: number[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  } catch {
    // Progress just won't persist.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useCourseProgress() {
  const [completed, setCompleted] = useState<number[]>(readCompleted);

  useEffect(() => {
    const sync = () => setCompleted(readCompleted());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const setComplete = useCallback((n: number, done: boolean) => {
    const current = readCompleted().filter((x) => x !== n);
    writeCompleted(done ? [...current, n] : current);
  }, []);

  const reset = useCallback(() => writeCompleted([]), []);

  const isComplete = (n: number) => completed.includes(n);
  const percent = Math.round((completed.length / LESSONS.length) * 100);
  const nextLesson = LESSONS.find((l) => !completed.includes(l.n)) ?? LESSONS[0];

  return { completed, isComplete, setComplete, reset, percent, nextLesson };
}
