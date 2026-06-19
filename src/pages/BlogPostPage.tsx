import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client, urlFor, type SanityPost } from '../lib/sanityClient';
import NewsletterSignup from '../components/NewsletterSignup';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, author, publishedAt, mainImage, excerpt, body, category
}`;

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          className="w-full rounded-xl"
        />
        {value.caption && (
          <figcaption className="text-center text-gray-400 text-sm mt-2">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-black text-gray-900 mt-10 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-2">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-800 pl-6 italic text-gray-600 my-6">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-1 text-gray-700">{children}</ol>,
  },
};

function formatDate(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    client.fetch<SanityPost>(POST_QUERY, { slug })
      .then((data) => {
        if (data) setPost(data);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="pt-40 pb-20 text-center text-gray-400">Loading...</div>;
  }

  if (notFound || !post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="text-gray-500 mb-6">Post not found.</p>
        <button onClick={() => navigate('/blog')} className="text-blue-800 font-semibold hover:underline">
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-0 bg-gray-950">
        {post.mainImage && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={urlFor(post.mainImage).width(1600).url()}
              alt={(post.mainImage as any).alt || post.title}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>
          {post.category && (
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">{post.category}</p>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm">
            {[post.author, formatDate(post.publishedAt)].filter(Boolean).join(' · ')}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {post.excerpt && (
            <p className="text-xl text-gray-500 leading-relaxed mb-8 pb-8 border-b border-gray-100">
              {post.excerpt}
            </p>
          )}
          {Array.isArray(post.body) && (
            <PortableText value={post.body as any} components={portableTextComponents} />
          )}
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
