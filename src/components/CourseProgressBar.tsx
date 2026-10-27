export default function CourseProgressBar({ percent, done, total }: { percent: number; done: number; total: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="font-bold text-white">{percent}% complete</span>
        <span className="text-gray-400">
          {done} of {total} lessons
        </span>
      </div>
      <div
        className="h-2.5 rounded-full bg-white/10 overflow-hidden"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Course progress"
      >
        <div className="h-full rounded-full bg-blue-500 transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
