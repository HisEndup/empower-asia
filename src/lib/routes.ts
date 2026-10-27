export const SITE_URL = 'https://www.empowerasia.org';
export const SITE_NAME = 'Empower Asia';
export const DEFAULT_DESCRIPTION =
  "Empower Asia is a Movement Led Bible Translation initiative bringing God's Word to every language and people group across Asia.";

export type Page =
  | 'home'
  | 'team'
  | 'story'
  | 'process'
  | 'beliefs'
  | 'translations'
  | 'ten-stories'
  | 'movement-video'
  | 'give'
  | 'blog'
  | 'contact'
  | 'privacy-policy'
  | 'cookies-policy'
  | 'terms-of-service'
  | 'training-videos'
  | 'case-studies'
  | 'b3-stories'
  | 'b3-training';

export const PAGE_PATHS: Record<Page, string> = {
  home: '/',
  team: '/team',
  story: '/story',
  process: '/process',
  beliefs: '/beliefs',
  translations: '/translations',
  'ten-stories': '/ten-stories',
  'movement-video': '/movement-video',
  give: '/give',
  blog: '/blog',
  contact: '/contact',
  'privacy-policy': '/privacy-policy',
  'cookies-policy': '/cookies-policy',
  'terms-of-service': '/terms-of-service',
  'training-videos': '/training-videos',
  'case-studies': '/case-studies',
  'b3-stories': '/b3-stories',
  'b3-training': '/b3-training',
};

// Per-route <title> and meta description. Keep in sync with public/sitemap.xml.
export const PAGE_META: Record<string, { title: string; description?: string }> = {
  '/': { title: 'Empower Asia | Movement Led Bible Translation' },
  '/team': {
    title: 'Our Team',
    description: 'Meet the indigenous leaders, translators, church planters and board members behind Empower Asia.',
  },
  '/story': {
    title: 'Our Story',
    description: 'How ten Gospel stories in 2004 sparked a house church movement across the Buddhist world of Asia.',
  },
  '/process': {
    title: 'Our Process',
    description: 'Our 8-step, church-centric Bible translation process led by indigenous mother-tongue translators.',
  },
  '/beliefs': { title: 'Our Beliefs', description: 'The statement of beliefs of Empower Asia Bible Translation Movement.' },
  '/translations': {
    title: 'Bible Translations',
    description: "Bible translation projects bringing God's Word to Bible-less language groups across Burma, Thailand and beyond.",
  },
  '/movement-video': { title: 'Movement Video', description: 'See what God is doing across the Buddhist world of Asia.' },
  '/give': {
    title: 'Give',
    description: 'Support Bible translation across the Buddhist world. Empower Asia is a 501(c)(3) nonprofit; gifts are tax-deductible.',
  },
  '/blog': { title: 'Blog', description: 'News, stories and updates from the Empower Asia Bible translation movement.' },
  '/contact': { title: 'Contact Us', description: 'Get in touch with Empower Asia Bible Translation Movement.' },
  '/privacy-policy': { title: 'Privacy Policy' },
  '/cookies-policy': { title: 'Cookies Policy' },
  '/terms-of-service': { title: 'Terms of Service' },
  '/training-videos': {
    title: 'Training Videos & Sermons',
    description: 'Training videos, teaching and sermons from the Empower Asia movement.',
  },
  '/case-studies': { title: 'Case Studies', description: 'Case studies and research from house church movements among Buddhist peoples.' },
  '/b3-prayer-movement': { title: 'B3 Prayer Movement', description: 'Join the B3 Prayer Movement in praying for the Buddhist world.' },
  '/b3-training': {
    title: 'B3 Training: Just Obey Yeshua',
    description: 'Just Obey Yeshua Training: a free, self-paced video course on obedience-based discipleship and multiplying house churches.',
  },
  '/b3-stories': { title: 'B3 Stories', description: 'Gospel stories and bridges for sharing Christ in Buddhist communities.' },
};

export function formatTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

function setMeta(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

// Updates the document title, description, canonical and social tags for the current page.
export function applyPageMeta(path: string, title: string, description = DEFAULT_DESCRIPTION) {
  const fullTitle = formatTitle(title);
  const url = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));
  document.title = fullTitle;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('link[rel="canonical"]', 'href', url);
  setMeta('meta[property="og:title"]', 'content', fullTitle);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[name="twitter:title"]', 'content', fullTitle);
  setMeta('meta[name="twitter:description"]', 'content', description);
}
