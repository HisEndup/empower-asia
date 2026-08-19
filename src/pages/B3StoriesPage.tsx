import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import { client } from '../lib/sanityClient';

interface Bridge {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  pdfFile?: { asset: { url: string } };
  order?: number;
}

const BRIDGES_QUERY = `*[_type == "bridge"] | order(order asc) [0..3] {
  _id, title, slug, excerpt,
  pdfFile { asset-> { url } },
  order
}`;

export default function B3StoriesPage() {
  const navigate = useNavigate();
  const [bridges, setBridges] = useState<Bridge[]>([]);

  useEffect(() => {
    client.fetch<Bridge[]>(BRIDGES_QUERY)
      .then((data) => { if (data) setBridges(data); })
      .catch(() => {});
  }, []);

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-gray-950 text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, #7c3aed 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">B3 Stories</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Resources to Reach<br className="hidden sm:block" /> the Buddhist World
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            "To see movements of multiplying churches, with priority in the Buddhist world."
          </p>
        </div>
      </section>

      {/* Section 1 — 10 Stories of Jesus */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                Bible Storying
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-5">
                10 Stories of Jesus
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                A carefully selected set of ten Gospel stories that introduce Jesus to Buddhist communities
                through oral storytelling — a method deeply rooted in Asian culture. These stories are
                translated into local languages to be memorized, told, and retold across villages and families.
              </p>
              <a
                href="https://www.b3stories.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
              >
                Explore the Stories <ArrowRight size={16} />
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center shadow-inner">
                <BookOpen size={64} className="text-amber-400 mb-4" />
                <p className="text-amber-700 font-bold text-lg">10 Stories</p>
                <p className="text-amber-600 text-sm">of Jesus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Bridges for Buddhists */}
      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 text-white/70 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Evangelism Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Bridges for Buddhists
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Thoughtful resources designed to build bridges between Buddhist thought and the Gospel of Jesus Christ.
            </p>
            <a
              href="https://www.b3stories.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-950 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Visit Bridges for Buddhists <ArrowRight size={16} />
            </a>
          </div>

          {bridges.length === 0 ? (
            <p className="text-center text-white/40 text-sm py-12">Resources coming soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bridges.map((bridge) => (
                <div
                  key={bridge._id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-white font-bold text-lg mb-3 leading-snug">{bridge.title}</h3>
                  {bridge.excerpt && (
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{bridge.excerpt}</p>
                  )}
                  <div className="flex flex-col gap-2 mt-auto">
                    <button
                      onClick={() => { navigate(`/b3-stories/bridges/${bridge.slug.current}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="w-full py-2 px-4 bg-white text-gray-950 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Learn More
                    </button>
                    {bridge.pdfFile?.asset?.url && (
                      <a
                        href={bridge.pdfFile.asset.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                      >
                        <Download size={14} /> Download PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
