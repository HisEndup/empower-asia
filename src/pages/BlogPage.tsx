import type { Page } from '../App';

interface Post {
  slug: Page;
  title: string;
  category: string;
  source: string;
  date: string;
  image: string;
}

const POSTS: Post[] = [
  {
    slug: 'blog-b3',
    title: 'B3 Prayer Movement: Interceding for the Buddhist World',
    category: 'Prayer',
    source: 'Empower Asia',
    date: 'April 26, 2026',
    image: '/B3_Prayer.jpg',
  },
];

export default function BlogPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [featured, ...rest] = POSTS;

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Featured post — full-width image card with text overlay */}
        <button
          onClick={() => onNavigate(featured.slug)}
          className="group w-full text-left relative rounded-2xl sm:rounded-3xl overflow-hidden block mb-8 sm:mb-10 focus:outline-none h-64 sm:h-80 md:h-[440px]"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3">
              {featured.category}
            </p>
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-2 sm:mb-3 max-w-3xl">
              {featured.title}
            </h2>
            <p className="text-white/60 text-xs sm:text-sm">{featured.date}</p>
          </div>
        </button>

        {/* Grid of remaining posts */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            {rest.map((post) => (
              <button
                key={post.slug}
                onClick={() => onNavigate(post.slug)}
                className="group text-left focus:outline-none"
              >
                <div className="rounded-2xl overflow-hidden mb-4 h-56 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-400 text-xs mb-2">
                  {post.category}, {post.source} &middot; {post.date}
                </p>
                <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-blue-800 transition-colors">
                  {post.title}
                </h3>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
