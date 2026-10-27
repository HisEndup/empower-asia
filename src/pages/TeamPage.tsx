import { Link } from 'react-router-dom';
import { Mail, ExternalLink, Heart } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

type TeamMember = {
  name: string;
  role?: string;
  bio: string;
  image?: string;
  imagePosition?: string;
  email?: string;
  website?: string;
  giveButton?: boolean;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Jay Judson & Anna',
    role: 'CEO / Founder',
    bio: 'Jay was trained by Dr. George Patterson, widely acknowledged as the father of the modern Church Planting Movement. He has devoted over twenty years to ministry in Burma and is based in Thailand, where he coaches leaders of ten house church movements serving Buddhist populations.',
    email: 'prattjay@gmail.com',
    image: '/Jay_and_Anna_.webp',
    giveButton: true,
  },
  {
    name: 'Bradley Jones',
    role: 'Board Secretary',
    bio: 'West Tennessee business owner and agricultural specialist serving as Secretary of the Translation Movement Board. He has served on multiple boards of Tennessee-based companies and government organizations.',
    email: 'bjjonesfarms@gmail.com',
    image: '/Bradly_Jones.webp',
  },
  {
    name: 'Kirsty Jones',
    role: 'Board Member',
    bio: 'Kirsty Jones is a businesswoman, an active disciple maker and educator in her community of Haywood County, Tennessee. Her first mission trip was to Asia and she now serves as the Empower Asia Board Secretary and on several other boards.',
    image: '/Kirsty_Jones.webp',
    imagePosition: 'center',
  },
  {
    name: 'Misty Kline',
    role: 'Digital Bible Engagement Specialist',
    bio: 'With over a decade of experience in ministry across Asia, Misty is deeply committed to advancing the gospel. She serves immigrant families and students in Oklahoma.',
    email: 'mistynkline@gmail.com',
    image: '/Misty.webp',
  },
  {
    name: 'Ying & Grace Kai',
    bio: 'Ying & Grace the church planters and pastors became trainers and catalysts for Church-Planting Movements. He called his process of making disciples “Training for Trainers” (T4T). “Trainer” conveys the idea of someone who both grows in his loving obedience to Jesus and passes on what he learns to others through witness and training. Ying and Grace continue to train movement leaders across the world.',
    email: 'bbbcpm@gmail.com',
    image: '/Ying_and_Grace_Kai.webp',
    imagePosition: 'center 60%',
    giveButton: true,
  },
  {
    name: 'Ni Ni',
    role: 'DMS Director',
    bio: 'Former school teacher and daughter of Major TKO who catalyzed house church movements across five Myanmar regions. Her house church network includes approximately 350,000 baptized believers. Holds degrees from Yangon University and Union Seminary in Japan.',
    image: '/Nini.webp',
    website: 'http://www.dmsmm.org',
  },
  {
    name: 'John Kyaw Nyein',
    role: 'DMS Pastoral Care, IT & Translation Trainer',
    bio: 'IT specialist for Paratext, DBL, and YouVersion. Pastor in training from a Buddhist background who has led numerous conversions and catalyzed a movement of 743 house churches.',
    website: 'http://www.dmsmm.org',
    image: '/John_Kyaw.webp',
  },
  {
    name: 'Barnabas Prathumrat',
    role: 'Sunshine/Sonlight Foundation — Founder & CEO',
    bio: 'Under his leadership, 80 churches have been established in 2024 and 2025. Oversees New Testament translation into fifteen languages across Thailand.',
    website: 'https://sonlightfoundation.moww.space/',
  },
  {
    name: 'Pastor Xu',
    role: 'Back to Jerusalem Movement Leader',
    bio: 'Pastor Peter Xu leads 20 million believers in China and directs the Back To Jerusalem Movement, equipping 100,000 Chinese missionaries across Asia.',
    image: '/Pastor_Xu.webp',
  },
  {
    name: 'Charles',
    role: 'Bhutanese House Church Movement',
    bio: 'Catalyst of the Bhutanese movement, actively translating the Bible into five languages in Bhutan and surrounding countries.',
  },
  {
    name: 'Sithu Kyaw',
    role: 'In-Country Trainer (ICT)',
    bio: 'Regional Translation Trainer for China and Thailand with fifteen years of Church-Centric Bible Translation training experience.',
    website: 'http://www.dmsmm.org',
    image: '/Sithu_Kyaw.webp',
  },
  {
    name: 'Iva Prathumrat',
    role: 'In-Country Trainer (ICT)',
    bio: 'Oral Bible Translation Trainer and Thai Prayer Coordinator.',
    image: '/Iva_Prathumrat.webp',
  },
  {
    name: 'Irane Prathumrat',
    role: 'In-Country Trainer (ICT)',
    bio: 'Oral Bible Translation Trainer and Mother Tongue Translator for SPV Thai Translation. Five-year missionary to Malaysia and Co-Founder of Sonrise House Church Movement.',
    image: '/Irane_Prathumrat.webp',
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col">
      <div className="w-full h-[280px] rounded-lg overflow-hidden bg-gray-100">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <span className="text-6xl font-black text-gray-500">{member.name.charAt(0)}</span>
          </div>
        )}
      </div>

      <h2 className="mt-5 text-lg font-bold text-gray-950 leading-snug">{member.name}</h2>
      {member.role && (
        <p className="mt-1 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">{member.role}</p>
      )}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{member.bio}</p>

      {(member.email || member.website) && (
        <div className="mt-4 flex flex-col gap-1.5">
          {member.email && (
            <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline break-all">
              <Mail size={13} className="shrink-0" /> {member.email}
            </a>
          )}
          {member.website && (
            <a href={member.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline break-all">
              <ExternalLink size={13} className="shrink-0" /> {member.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          )}
        </div>
      )}

      {member.giveButton && (
        <Link
          to="/give"
          className="mt-5 self-start inline-flex items-center gap-2 px-5 py-2.5 bg-gray-950 text-white text-sm font-semibold rounded-full hover:bg-black transition-colors"
        >
          <Heart size={14} className="shrink-0" /> Give Now
        </Link>
      )}
    </article>
  );
}

export default function TeamPage() {
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
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
