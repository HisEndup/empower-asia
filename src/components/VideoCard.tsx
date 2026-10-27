import { useState } from 'react';
import { Play } from 'lucide-react';

// YouTube card that shows the thumbnail and only loads the player when clicked.
export default function VideoCard({ id, title, label }: { id: string; title: string; label: string }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="group rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative aspect-video bg-black overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full block focus:outline-none"
            aria-label={`Play ${title}`}
          >
            <img
              src={thumb}
              alt={title}
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
        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{label}</span>
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 flex-1">{title}</h3>
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
