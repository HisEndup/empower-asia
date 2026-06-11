import { useState } from 'react';
import { Play, Youtube } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  category: string;
}

const CATEGORIES = ['All', 'Training & Teaching', 'Sermons & Talks', 'Movement Updates', 'Prayer', '10 Jesus Stories'];

const VIDEOS: Video[] = [
  // Training & Teaching
  { id: 'EcHpuU6h5iQ', title: 'Barriers and Bridges of Buddhist: OT & NT Influence on Southern & Northern Buddhism', category: 'Training & Teaching' },
  { id: 'vgIkJXq9oJY', title: '(English) Barriers and Bridges according to BBB Movement — By Jay Pratt', category: 'Training & Teaching' },
  { id: '17JUoP7PV9o', title: 'Barriers and Bridges according to BBB Movement — By Jay Pratt', category: 'Training & Teaching' },
  { id: '33qPtIcgZ0I', title: '(Chinese) Barriers and Bridges according to BBB Movement — By Jay Pratt', category: 'Training & Teaching' },
  { id: 'vZQBtQlsAxA', title: 'The 8 Commands of Jesus Christ', category: 'Training & Teaching' },
  { id: 'f4r38eXBPIQ', title: 'The 8 Commands of Jesus Christ (Session 2)', category: 'Training & Teaching' },
  { id: 'jlkHfV0h3Y8', title: 'Finding Persons of Peace', category: 'Training & Teaching' },
  { id: 'vZcAe_Nr9uQ', title: 'Providing Just Obey Jesus Training — Back to Jerusalem Movement Leaders', category: 'Training & Teaching' },
  { id: 'eBZezc44Yd8', title: 'Jay Shares Jesus 10-10-10 Strategy with Pst. Peter Xu\'s B2J Movement Leaders', category: 'Training & Teaching' },
  // Sermons & Talks
  { id: 'iUIYbYRblA0', title: 'Special Guest Jay Pratt', category: 'Sermons & Talks' },
  { id: 'LpI7un7dLgc', title: 'Great Commission', category: 'Sermons & Talks' },
  { id: 'hONhsJLFU8I', title: 'Jay Shares at Lifepointe Church Brownsville', category: 'Sermons & Talks' },
  { id: '1PsyceZCcxQ', title: 'Jay Shares with Grace Church', category: 'Sermons & Talks' },
  { id: 'yzNgl0ZpZ_w', title: 'Jay Sharing at FBC Bethany Oklahoma', category: 'Sermons & Talks' },
  { id: 'Oz8ybD-QfrY', title: 'Jay Gives Brief Movement Synopsis and Update', category: 'Sermons & Talks' },
  // Movement Updates
  { id: '0h78g4eOFi8', title: 'March 23, 2026 Movement Update', category: 'Movement Updates' },
  { id: 'K82jkmNlGTw', title: 'Dec 29, 2025 Movement Update', category: 'Movement Updates' },
  { id: 'f5n_LioasYA', title: 'Testimonies from Movement Teams', category: 'Movement Updates' },
  // Prayer
  { id: '5DAOuOYbmQg', title: 'Jan 13 Prayer for Muslim World (English)', category: 'Prayer' },
  { id: 'cthlCBKvwd0', title: 'Jan 13 Prayer for Muslim World (Chinese)', category: 'Prayer' },
  // 10 Jesus Stories
  { id: 'Uh3Np0OG5ws', title: 'Story 1 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: '5u6optwCYUU', title: 'Story 2 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: 'XPK_b37JMR0', title: 'Story 3 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: '1bUmVmOtA8M', title: 'Story 4 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: 'zJQBAviclyA', title: 'Story 5 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: '2fC8j6YTe5Q', title: 'Story 6 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: 'sRYVWfYARys', title: 'Story 7 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: 'Ocs8Gbv40-0', title: 'Story 8 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: 'BunRvwFg2e4', title: 'Story 9 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
  { id: 'G6KtWo_JLsM', title: 'Story 10 | Pwo Karen 10 Jesus Stories', category: '10 Jesus Stories' },
];

const FEATURED_ID = 'iUIYbYRblA0';

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className="group rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="relative w-full h-full block focus:outline-none"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumb}
              alt={video.title}
              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-xl">
                <Play size={22} className="ml-1 fill-gray-900 text-gray-900" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{video.category}</span>
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 flex-1">{video.title}</h3>
        {!playing && (
          <button
            onClick={() => setPlaying(true)}
            className="mt-3 text-xs text-gray-400 hover:text-white transition-colors text-left"
          >
            Watch now &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

export default function TrainingVideosPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [featuredPlaying, setFeaturedPlaying] = useState(false);

  const featured = VIDEOS.find(v => v.id === FEATURED_ID)!;
  const filtered = activeCategory === 'All'
    ? VIDEOS.filter(v => v.id !== FEATURED_ID)
    : VIDEOS.filter(v => v.category === activeCategory && v.id !== FEATURED_ID);

  const featuredThumb = `https://img.youtube.com/vi/${FEATURED_ID}/maxresdefault.jpg`;

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-10 sm:pb-12 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Resources</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">Training Videos &amp; Sermons</h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-5 sm:mb-6">
            Teaching, sermons, movement updates, and Pwo Karen Gospel stories from the Empower Asia YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/channel/UC48abrZoi7eyjbccGwy-M7A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors text-sm"
          >
            <Youtube size={16} /> Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* Featured video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-12">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-5">Featured</p>
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-2xl">
          {featuredPlaying ? (
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${FEATURED_ID}?autoplay=1&rel=0`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <button
              onClick={() => setFeaturedPlaying(true)}
              className="group relative block w-full focus:outline-none"
              aria-label={`Play ${featured.title}`}
            >
              <div className="aspect-video">
                <img
                  src={featuredThumb}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-2xl">
                  <Play size={30} className="ml-1.5 fill-gray-900 text-gray-900" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">{featured.category}</span>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mt-1 max-w-2xl leading-snug">{featured.title}</h2>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* Category filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-white text-gray-950'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Video grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-500 text-center py-16">No videos in this category yet.</p>
        )}
      </section>
    </div>
  );
}
