import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import type { Page } from '../App';
import { sanityClient, urlFor, type SanityPost } from '../lib/sanityClient';

const FALLBACK_POSTS: (SanityPost & { fallbackImage?: string })[] = [];

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, author, publishedAt, mainImage, excerpt, category
}`;

function formatDate(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPage(_: { onNavigate: (p: Page) => void }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<(SanityPost & { fallbackImage?: string })[]>(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    sanityClient.fetch<SanityPost[]>(POSTS_QUERY)
      .then((data) => { if (data && data.length > 0) setPosts(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const cats = posts.map((p) => p.category).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(cats))];
  }, [posts]);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
        (p.excerpt || '').toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [posts, activeCategory, search]);

  const getImage = (post: SanityPost & { fallbackImage?: string }) => {
    if (post.mainImage) return urlFor(post.mainImage).width(1200).url();
    return (post as any).fallbackImage || '/B3_Prayer.jpg';
  };

  const handleClick = (post: SanityPost & { fallbackImage?: string }) => {
    navigate(`/blog/${post.slug.current}`);
  };

  const [featured, ...rest] = filtered;

  return (
    <div className="bg-white min-h-screen">

      {/* Page header */}
      <section className="bg-gray-950 pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3">Stories & Updates</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Blog</h1>

          {/* Search */}
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/15 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
      </section>

      {/* Category filters */}
      <div className="border-b border-gray-100 bg-white sticky top-16 lg:top-20 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-gray-950 text-white'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {loading && filtered.length === 0 && (
          <p className="text-gray-400 text-center py-20">Loading posts...</p>
        )}

        {!loading && filtered.length === 0 && (
          <p className="text-gray-400 text-center py-20">No posts found.</p>
        )}

        {/* Featured post */}
        {featured && (
          <button
            onClick={() => handleClick(featured)}
            className="group w-full text-left relative rounded-2xl sm:rounded-3xl overflow-hidden block mb-10 focus:outline-none"
          >
            <div className="h-72 sm:h-96 md:h-[520px] relative">
              <img
                src={getImage(featured)}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-12">
                {featured.category && (
                  <span className="inline-block bg-white/20 backdrop-blur text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    {featured.category}
                  </span>
                )}
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3 max-w-3xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-3 line-clamp-2 hidden sm:block">
                    {featured.excerpt}
                  </p>
                )}
                <p className="text-white/50 text-xs sm:text-sm">
                  {[featured.author, formatDate(featured.publishedAt)].filter(Boolean).join(' · ')}
                </p>
              </div>
            </div>
          </button>
        )}

        {/* 2-column grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-8">
            {rest.map((post) => (
              <button
                key={post._id}
                onClick={() => handleClick(post)}
                className="group text-left focus:outline-none"
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-4 h-52 sm:h-60 relative">
                  <img
                    src={getImage(post)}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.category && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/50 backdrop-blur text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>
                {/* Meta */}
                <p className="text-gray-400 text-xs mb-2">
                  {[post.author, formatDate(post.publishedAt)].filter(Boolean).join(' · ')}
                </p>
                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-blue-800 transition-colors mb-2">
                  {post.title}
                </h3>
                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
