import { ExternalLink } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const LANGUAGES = [
  'English', 'Burmese', 'Kanan', 'Southern-Rakhine', 'Danu', 'Shan',
  'Taungyo', 'Marmagyi', 'Chin-Ekai', 'TaiLaing', 'Thet', 'Chin-Cumtu (Sumtu)',
  'Intha', 'Pwo Karen (Eastern)', 'Lahta', 'Northern-Rakhine', 'Chin-Songlai',
  'Dawei', 'Kadu', 'Khun', 'Samtao', 'Dannau', "Karen (S'gaw)", 'Lisu',
];

const BASE_URL = 'https://empowerasia.org/10-stories-of-jesus';

export default function TenStoriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Featured Resource</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">10 Stories of Jesus</h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            A Gospel-centered resource designed to effectively share the message of Christ among Buddhist communities through visual storytelling.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <img
          src="/Image.webp"
          alt="Communities receiving 10 Stories of Jesus"
          className="w-full rounded-2xl sm:rounded-3xl shadow-2xl object-cover h-48 sm:h-72 md:h-[400px]"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* About */}
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

      {/* Language list */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Available Languages</h2>
            <a
              href={BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-black transition-colors"
            >
              View All <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {LANGUAGES.map((lang) => (
              <a
                key={lang}
                href={BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 bg-white border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <span className="font-medium text-gray-800 group-hover:text-blue-900">{lang}</span>
                <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-600 shrink-0" />
              </a>
            ))}
          </div>

          <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center">
            <p className="text-blue-100 mb-5 leading-relaxed">
              All language versions are freely available to read, listen to, and share on the Empower Asia website.
            </p>
            <a
              href={BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors"
            >
              Open 10 Stories of Jesus <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
