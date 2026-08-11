import { useState } from 'react';
import { Mail, ExternalLink, X } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const TEAM: {
  name: string;
  role: string;
  bio: string;
  initial: string;
  photo?: string;
  email?: string;
  website?: string;
  objectPosition?: string;
}[] = [
  {
    name: 'Jay & Anna Pratt',
    role: 'CEO / Founder',
    bio: 'Jay was trained by Dr. George Patterson, widely acknowledged as the father of the modern Church Planting Movement. He has devoted over twenty years to ministry in Burma and is based in Thailand, where he coaches leaders of ten house church movements serving Buddhist populations.',
    email: 'prattjay@gmail.com',
    photo: '/Jay_and_Anna_.webp',
    initial: 'J',
  },
  {
    name: 'Bradley Jones',
    role: 'Board Secretary',
    bio: 'West Tennessee business owner and agricultural specialist serving as Secretary of the Translation Movement Board. He has served on multiple boards of Tennessee-based companies and government organizations.',
    email: 'bjjonesfarms@gmail.com',
    photo: '/Bradly_Jones.webp',
    initial: 'B',
  },
  {
    name: 'Kirsty Jones',
    role: 'Board Member',
    bio: 'Kirsty Jones is a businesswoman, an active disciple maker and educator in her community of Haywood County, Tennessee. Her first mission trip was to Asia and she now serves as the Empower Asia Board Secretary and on several other boards.',
    photo: '/Kirsty_Jones.webp',
    initial: 'K',
    objectPosition: 'center',
  },
  {
    name: 'Misty Kline',
    role: 'Digital Bible Engagement Specialist',
    bio: 'With over a decade of experience in ministry across Asia, Misty is deeply committed to advancing the gospel. She serves immigrant families and students in Oklahoma.',
    email: 'mistynkline@gmail.com',
    photo: '/Misty.webp',
    initial: 'M',
  },
  {
    name: 'Ni Ni',
    role: 'DMS Director',
    bio: 'Former school teacher and daughter of Major TKO who catalyzed house church movements across five Myanmar regions. Her house church network includes approximately 350,000 baptized believers. Holds degrees from Yangon University and Union Seminary in Japan.',
    photo: '/Nini.webp',
    website: 'http://www.dmsmm.org',
    initial: 'N',
  },
  {
    name: 'John Kyaw Nyein',
    role: 'DMS Pastoral Care, IT & Translation Trainer',
    bio: 'IT specialist for Paratext, DBL, and YouVersion. Pastor in training from a Buddhist background who has led numerous conversions and catalyzed a movement of 743 house churches.',
    website: 'http://www.dmsmm.org',
    photo: '/John_Kyaw.webp',
    initial: 'J',
  },
  {
    name: 'Barnabas Prathumrat',
    role: 'Sunshine/Sonlight Foundation — Founder & CEO',
    bio: 'Under his leadership, 80 churches have been established in 2024 and 2025. Oversees New Testament translation into fifteen languages across Thailand.',
    website: 'https://sonlightfoundation.moww.space/',
    initial: 'B',
  },
  {
    name: 'Pastor Xu',
    role: 'Back to Jerusalem Movement Leader',
    bio: 'Pastor Peter Xu leads 20 million believers in China and directs the Back To Jerusalem Movement, equipping 100,000 Chinese missionaries across Asia.',
    photo: '/Pastor_Xu.webp',
    initial: 'P',
  },
  {
    name: 'Charles Rumkup',
    role: 'Bhutanese House Church Movement',
    bio: 'Catalyst of the Bhutanese movement, actively translating the Bible into five languages in Bhutan and surrounding countries.',
    initial: 'A',
  },
  {
    name: 'Sithu Kyaw',
    role: 'In-Country Trainer (ICT)',
    bio: 'Regional Translation Trainer for China and Thailand with fifteen years of Church-Centric Bible Translation training experience.',
    website: 'http://www.dmsmm.org',
    photo: '/Sithu_Kyaw.webp',
    initial: 'S',
  },
  {
    name: 'Iva Prathumrat',
    role: 'In-Country Trainer (ICT)',
    bio: 'Oral Bible Translation Trainer and Thai Prayer Coordinator.',
    photo: '/Iva_Prathumrat.webp',
    initial: 'I',
  },
  {
    name: 'Irane Prathumrat',
    role: 'In-Country Trainer (ICT)',
    bio: 'Oral Bible Translation Trainer and Mother Tongue Translator for SPV Thai Translation. Five-year missionary to Malaysia and Co-Founder of Sonrise House Church Movement.',
    photo: '/Irane_Prathumrat.webp',
    initial: 'I',
  },
];

type Member = (typeof TEAM)[0];

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-colors"
        >
          <X size={15} className="text-white" />
        </button>

        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-56 sm:h-64 object-cover object-top"
            style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
          />
        ) : (
          <div className="w-full h-44 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-7xl font-black text-gray-500">{member.initial}</span>
          </div>
        )}

        <div className="p-5 sm:p-7">
          <h2 className="text-xl font-bold text-gray-900 mb-0.5">{member.name}</h2>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{member.role}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
          <div className="flex flex-col gap-2">
            {member.email && (
              <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
                <Mail size={13} /> {member.email}
              </a>
            )}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
                <ExternalLink size={13} /> {member.website.replace(/^https?:\/\//, '')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">Meet the Team</h1>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Indigenous leaders, translators, church planters, and supporters united around one mission — God's Word for every people.
          </p>
          <p className="text-gray-500 text-xs mt-3">Tap a card to learn more</p>
        </div>
      </section>

      {/* Portrait Grid */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {TEAM.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelected(member)}
                className="group relative w-full text-left focus:outline-none rounded-xl sm:rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all duration-500"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Background */}
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-black text-gray-500">{member.initial}</span>
                  </div>
                )}

                {/* Bottom gradient always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* Hover — full overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-400" />

                {/* Name / role bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-white font-bold text-xs sm:text-sm leading-snug">{member.name}</p>
                  <p className="text-white/55 text-[10px] sm:text-xs mt-0.5 leading-tight">{member.role}</p>
                  {/* Bio on hover */}
                  <p className="text-white/80 text-[10px] sm:text-xs leading-relaxed mt-2 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {member.bio}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}

      <NewsletterSignup />
    </div>
  );
}
