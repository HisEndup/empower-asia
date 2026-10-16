import { BookOpen } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-10 sm:pb-12 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Resources</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">Case Studies</h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Real stories of God's Word transforming lives and communities across Asia.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="rounded-3xl bg-gray-900 border border-white/10 px-6 py-16 sm:py-20 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
            <BookOpen size={28} className="text-blue-400" />
          </div>
          <span className="inline-block bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Coming Soon
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Stories are on their way</h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            We're gathering case studies from translation and storying teams across Asia. Check back soon to
            read how communities are encountering Jesus through Scripture in their heart language.
          </p>
        </div>
      </section>
    </div>
  );
}
