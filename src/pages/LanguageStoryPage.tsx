import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Volume2, FileText, BookOpen } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client } from '../lib/sanityClient';

interface SanityLanguage {
  _id: string;
  name: string;
  region?: string;
  slug: { current: string };
  pdfFile?: { asset: { url: string; originalFilename?: string } };
  audioFile?: { asset: { url: string; originalFilename?: string } };
  storyContent?: unknown[];
}

const LANGUAGE_QUERY = `*[_type == "language" && slug.current == $slug][0] {
  _id, name, region, slug,
  pdfFile { asset-> { url, originalFilename } },
  audioFile { asset-> { url, originalFilename } },
  storyContent[] {
    ...,
    _type == "image" => { ..., asset-> { url } }
  }
}`;

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset?: { url: string }; alt?: string; caption?: string } }) => {
      const url = value?.asset?.url;
      if (!url) return null;
      return (
        <figure className="my-8">
          <img src={url} alt={value.alt ?? ''} className="w-full rounded-xl shadow-md" />
          {value.caption && (
            <figcaption className="text-center text-gray-400 text-sm mt-2">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h1>,
    h2: ({ children }: { children?: React.ReactNode }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{children}</h2>,
    h3: ({ children }: { children?: React.ReactNode }) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">{children}</h3>,
    normal: ({ children }: { children?: React.ReactNode }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-blue-300 pl-5 italic text-gray-600 my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="list-decimal pl-6 mb-4 space-y-1 text-gray-700">{children}</ol>,
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
        {children}
      </a>
    ),
  },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

export default function LanguageStoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [lang, setLang] = useState<SanityLanguage | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    client.fetch<SanityLanguage>(LANGUAGE_QUERY, { slug })
      .then((data) => { if (data) setLang(data); else setNotFound(true); })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="pt-40 pb-20 text-center text-gray-400">Loading...</div>;
  }

  if (notFound || !lang) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="text-gray-500 mb-6">Language not found.</p>
        <button onClick={() => navigate('/ten-stories')} className="text-blue-800 font-semibold hover:underline">
          ← Back to 10 Stories of Jesus
        </button>
      </div>
    );
  }

  const pdfUrl = lang.pdfFile?.asset?.url;
  const audioUrl = lang.audioFile?.asset?.url;

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-gray-950 pt-32 sm:pt-40 pb-10 sm:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <button
            onClick={() => navigate('/ten-stories')}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to 10 Stories of Jesus
          </button>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">10 Stories of Jesus</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">{lang.name}</h1>
          {lang.region && <p className="text-gray-400 text-base mt-1">{lang.region}</p>}

          {/* Availability badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {pdfUrl && (
              <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                <FileText size={11} /> PDF Available
              </span>
            )}
            {audioUrl && (
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full">
                <Volume2 size={11} /> Audio Available
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ── MOBILE LAYOUT ── */}
      {isMobile && (
        <section className="py-8 px-4 bg-white">
          <div className="max-w-sm mx-auto flex flex-col gap-4">

            {pdfUrl && (
              <>
                {/* Read PDF — primary CTA */}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-blue-900 text-white font-bold text-lg rounded-2xl active:bg-blue-800 transition-colors shadow-lg"
                >
                  <BookOpen size={22} />
                  Read PDF
                </a>

                {/* Download PDF — secondary */}
                <a
                  href={pdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-gray-100 text-gray-900 font-bold text-base rounded-2xl active:bg-gray-200 transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </>
            )}

            {!pdfUrl && (
              <div className="text-center py-10 text-gray-400">
                No PDF available for this language yet.
              </div>
            )}

            {/* Mobile audio player */}
            {audioUrl && (
              <div className="mt-2 bg-gray-950 rounded-2xl p-5">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5">
                  <Volume2 size={12} /> Audio
                </p>
                <audio
                  controls
                  controlsList="nodownload"
                  className="w-full"
                  preload="metadata"
                  style={{ width: '100%', minHeight: '54px' }}
                >
                  <source src={audioUrl} type="audio/mpeg" />
                  <source src={audioUrl} type="audio/mp4" />
                  Your browser does not support audio playback.
                </audio>
                <a
                  href={audioUrl}
                  download
                  className="mt-3 flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white text-sm font-semibold rounded-xl active:bg-white/20 transition-colors"
                >
                  <Download size={14} /> Save Audio
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── DESKTOP / TABLET LAYOUT ── */}
      {!isMobile && (
        <>
          {/* Audio player */}
          {audioUrl && (
            <section className="bg-gray-900 py-6 border-b border-gray-800">
              <div className="max-w-4xl mx-auto px-6">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Volume2 size={12} /> Audio
                </p>
                <audio
                  controls
                  className="w-full"
                  preload="metadata"
                  style={{ colorScheme: 'dark' }}
                >
                  <source src={audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </section>
          )}

          {/* PDF viewer */}
          {pdfUrl ? (
            <section className="py-8 bg-gray-100">
              <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <FileText size={12} /> Document
                  </p>
                  <a
                    href={pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-black transition-colors"
                  >
                    <Download size={13} /> Download PDF
                  </a>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                  <iframe
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                    width="100%"
                    style={{ height: '800px' }}
                    title={`${lang.name} — 10 Stories of Jesus`}
                  />
                </div>
                <p className="text-center text-gray-400 text-xs mt-4">
                  If the PDF doesn't load,{' '}
                  <a href={pdfUrl} download target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Download PDF
                  </a>{' '}
                  to read offline.
                </p>
              </div>
            </section>
          ) : (
            <section className="py-20 text-center">
              <p className="text-gray-400">No PDF available for this language yet.</p>
            </section>
          )}
        </>
      )}

      {/* Story Content (Portable Text) */}
      {lang.storyContent && lang.storyContent.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <PortableText value={lang.storyContent as Parameters<typeof PortableText>[0]['value']} components={portableTextComponents} />
          </div>
        </section>
      )}
    </div>
  );
}
