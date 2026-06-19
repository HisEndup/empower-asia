import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Volume2 } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import { client } from '../lib/sanityClient';

interface SanityLanguage {
  _id: string;
  name: string;
  region?: string;
  slug: { current: string };
  pdfFile?: { asset: { url: string } };
  audioFile?: { asset: { url: string } };
}

const LANGUAGES_QUERY = `*[_type == "language"] | order(name asc) {
  _id, name, region, slug,
  pdfFile { asset-> { url } },
  audioFile { asset-> { url } }
}`;

export default function TenStoriesPage() {
  const navigate = useNavigate();
  const [languages, setLanguages] = useState<SanityLanguage[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    client.fetch<SanityLanguage[]>(LANGUAGES_QUERY)
      .then((data) => { if (data) setLanguages(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() =>
    languages.filter((l) =>
      !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      (l.region || '').toLowerCase().includes(search.toLowerCase())
    ), [languages, search]);

  return (
    <div>
      {/* Hero — untouched */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Featured Resource</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">10 Stories of Jesus</h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            A Gospel-centered resource designed to effectively share the message of Christ among Buddhist communities through visual storytelling.
          </p>
        </div>
      </section>

      {/* Hero image — untouched */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <img
          src="/Image.webp"
          alt="Communities receiving 10 Stories of Jesus"
          className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover h-48 sm:h-72 md:h-[400px]"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* About — untouched */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              10 Stories of Jesus is a Gospel-centered resource designed to effectively share the message of Christ among Buddhist communities through visual storytelling and simple, easy-to-understand narratives. In regions where literacy may be limited and traditional text-based approaches are less effective, this resource uses carefully selected images alongside powerful stories from the life of Jesus to communicate truth in a way that is both engaging and memorable.
            </p>
            <p>
              Each story highlights key moments from the Gospels — revealing who Jesus is, His love for people, His power to heal and forgive, and His invitation to follow Him. By presenting these truths through culturally sensitive storytelling, "10 Stories of Jesus" creates a bridge for Buddhist audiences to hear and understand the Gospel in a meaningful and relatable way.
            </p>
            <p>
              This resource is especially valuable for oral learners, new believers, and those hearing about Jesus for the first time. It equips missionaries, church leaders, and disciple-makers with a simple yet powerful tool to start conversations, share testimonies, and lead others step-by-step toward a deeper understanding of Christ. The use of images helps reinforce memory, making it easier for individuals and groups to retell the stories and pass them on within their own communities.
            </p>
            <p>
              Available in multiple languages and designed for easy distribution, "10 Stories of Jesus" can be shared digitally or in print — making it accessible across different regions and people groups. Whether used in small groups, one-on-one discipleship, or outreach settings, this resource supports the multiplication of the Gospel by empowering believers to confidently share the message of Jesus in a way that connects with the hearts and culture of Buddhist people.
            </p>
          </div>
        </div>
      </section>

      {/* Language grid — new Sanity-powered section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Available Languages</h2>
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search languages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {loading && (
            <p className="text-gray-400 text-sm text-center py-12">Loading languages...</p>
          )}

          {!loading && filtered.length === 0 && (
            <p className="text-gray-400 text-sm text-center py-12">
              {languages.length === 0
                ? 'No languages added yet. Add them in Sanity Studio.'
                : 'No languages match your search.'}
            </p>
          )}

          {filtered.length > 0 && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filtered.map((lang) => (
                <button
                  key={lang._id}
                  onClick={() => navigate(`/ten-stories/${lang.slug.current}`)}
                  className="flex flex-col gap-2 px-5 py-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all text-left group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {lang.name}
                    </span>
                    <div className="flex gap-1 shrink-0 mt-0.5">
                      {lang.pdfFile && (
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                          <FileText size={10} /> PDF
                        </span>
                      )}
                      {lang.audioFile && (
                        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">
                          <Volume2 size={10} /> Audio
                        </span>
                      )}
                    </div>
                  </div>
                  {lang.region && (
                    <span className="text-gray-400 text-xs">{lang.region}</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
