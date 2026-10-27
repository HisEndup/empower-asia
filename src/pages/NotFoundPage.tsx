import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatTitle } from '../lib/routes';

export default function NotFoundPage() {
  // Keep unknown URLs out of search results (the SPA rewrite still serves them with a 200).
  useEffect(() => {
    document.title = formatTitle('Page Not Found');
    const robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute('content');
    robots?.setAttribute('content', 'noindex, follow');
    return () => {
      if (previous) robots?.setAttribute('content', previous);
    };
  }, []);

  return (
    <section className="pt-40 pb-28 bg-gray-950 min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">Page not found</h1>
        <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-gray-950 font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Back to Home <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white/15 border border-white/40 text-white font-semibold rounded-full hover:bg-white/25 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
