import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client } from '../lib/sanityClient';

interface BridgeDetail {
  _id: string;
  title: string;
  content?: unknown[];
  pdfFile?: { asset: { url: string } };
}

const BRIDGE_QUERY = `*[_type == "bridge" && slug.current == $slug][0] {
  _id, title, content,
  pdfFile { asset-> { url } }
}`;

export default function BridgePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [bridge, setBridge] = useState<BridgeDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    client.fetch<BridgeDetail>(BRIDGE_QUERY, { slug })
      .then((data) => { setBridge(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  const pdfUrl = bridge?.pdfFile?.asset?.url;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">

        <button
          onClick={() => { navigate('/b3-stories'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm font-medium mb-10 transition-colors"
        >
          <ArrowLeft size={16} /> Back to B3 Stories
        </button>

        {loading && <p className="text-gray-400 text-center py-20">Loading…</p>}

        {!loading && !bridge && (
          <p className="text-gray-500 text-center py-20">Resource not found.</p>
        )}

        {bridge && (
          <>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-6 leading-tight">
              {bridge.title}
            </h1>

            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-950 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors mb-10"
              >
                <Download size={15} /> Download PDF
              </a>
            )}

            {bridge.content && bridge.content.length > 0 && (
              <div className="prose prose-lg prose-gray max-w-none">
                <PortableText value={bridge.content as Parameters<typeof PortableText>[0]['value']} />
              </div>
            )}

            {pdfUrl && (
              <div className="mt-14 pt-10 border-t border-gray-100">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-950 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Download size={15} /> Download PDF
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
