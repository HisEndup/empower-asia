import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, MapPin, Phone, Mail, Facebook } from 'lucide-react';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import ProcessPage from './pages/ProcessPage';
import BeliefsPage from './pages/BeliefsPage';
import TranslationsPage from './pages/TranslationsPage';
import TenStoriesPage from './pages/TenStoriesPage';
import MovementVideoPage from './pages/MovementVideoPage';
import TeamPage from './pages/TeamPage';
import GivePage from './pages/GivePage';
import BlogPage from './pages/BlogPage';
import BlogPostB3Page from './pages/BlogPostB3Page';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import TrainingVideosPage from './pages/TrainingVideosPage';

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
  | 'blog-b3'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'cookie'
  | 'training-videos';

type NavItem =
  | { label: string; page: Page }
  | { label: string; children: { label: string; page: Page }[] };

const NAV_LINKS: NavItem[] = [
  {
    label: 'About Us',
    children: [
      { label: 'Our Team', page: 'team' },
      { label: 'Our Story', page: 'story' },
      { label: 'Our Process', page: 'process' },
      { label: 'Our Beliefs', page: 'beliefs' },
    ],
  },
  {
    label: 'Bible Translations',
    children: [
      { label: 'Bible Translations', page: 'translations' },
      { label: '10 Stories of Jesus', page: 'ten-stories' },
    ],
  },
  { label: 'Blog', page: 'blog' },
  { label: 'Contact', page: 'contact' },
  {
    label: 'Resources',
    children: [
      { label: 'Movement Video', page: 'movement-video' },
      { label: 'Training Videos & Sermons', page: 'training-videos' },
    ],
  },
];

function Navigation({
  onNavigate,
  currentPage,
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  onNavigate: (p: Page) => void;
  currentPage: Page;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileSection = (label: string) => {
    setOpenMobileSection((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        currentPage !== 'home' || scrolled || menuOpen
          ? 'bg-gray-950/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button onClick={() => { onNavigate('home'); setMenuOpen(false); }} className="flex items-center gap-3">
          <img
            src="/qt=q_95.webp"
            alt="Empower Asia"
            className="h-12 w-12 sm:h-13 sm:w-13 lg:h-14 lg:w-14 rounded-full object-cover ring-1 ring-white/60"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white text-sm font-bold tracking-tight">Empower Asia</span>
            <span className="text-white/60 text-xs">Bible Translation Movement</span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative">
              {'page' in link ? (
                <button
                  onClick={() => { onNavigate(link.page); setOpenDropdown(null); }}
                  className="text-sm font-semibold text-white hover:text-gray-300 transition-colors py-2"
                >
                  {link.label}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 text-sm font-semibold text-white hover:text-gray-300 transition-colors py-2"
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 py-2">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => { onNavigate(child.page); setOpenDropdown(null); }}
                          className="w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-950 transition-colors font-medium"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <button
            onClick={() => onNavigate('give')}
            className="px-5 py-2.5 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Give Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => { setMenuOpen(!menuOpen); setOpenMobileSection(null); }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-950 border-t border-white/10 divide-y divide-white/10">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              {'page' in link ? (
                <button
                  onClick={() => { onNavigate(link.page); setMenuOpen(false); }}
                  className="w-full text-left px-6 py-4 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <>
                  <button
                    onClick={() => toggleMobileSection(link.label)}
                    className="w-full flex items-center justify-between px-6 py-4 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 text-gray-400 ${openMobileSection === link.label ? 'rotate-90' : ''}`}
                    />
                  </button>
                  {openMobileSection === link.label && (
                    <div className="bg-white/5 border-t border-white/10">
                      {link.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => { onNavigate(child.page); setMenuOpen(false); setOpenMobileSection(null); }}
                          className="w-full text-left px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-white/10 ml-4"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="px-6 py-4">
            <button
              onClick={() => { onNavigate('give'); setMenuOpen(false); }}
              className="w-full py-3 bg-white text-gray-950 font-bold rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Give Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/qt=q_95.webp" alt="Empower Asia" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-white font-bold text-base leading-tight">Empower Asia</div>
                <div className="text-gray-500 text-xs">Bible Translation Movement</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering indigenous translators to bring God's Word to every people since 2004.
            </p>
            <p className="text-xs text-gray-600 mb-4">501(c)(3) &middot; EIN 93-2153630</p>
            <a
              href="https://www.facebook.com/share/1CDQsUokKe/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
              <span className="text-sm">Follow on Facebook</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">About</h4>
            <ul className="space-y-3 text-sm">
              {(
                [
                  ['Our Team', 'team'],
                  ['Our Story', 'story'],
                  ['Our Process', 'process'],
                  ['Our Beliefs', 'beliefs'],
                ] as [string, Page][]
              ).map(([l, p]) => (
                <li key={l}>
                  <button onClick={() => onNavigate(p)} className="hover:text-white transition-colors text-left">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm">
              {(
                [
                  ['Bible Translations', 'translations'],
                  ['10 Stories of Jesus', 'ten-stories'],
                  ['Movement Video', 'movement-video'],
                  ['Training Videos & Sermons', 'training-videos'],
                  ['Blog', 'blog'],
                  ['Contact Us', 'contact'],
                ] as [string, Page][]
              ).map(([l, p]) => (
                <li key={l}>
                  <button onClick={() => onNavigate(p)} className="hover:text-white transition-colors text-left">
                    {l}
                  </button>
                </li>
              ))}
              <li>
                <a href="http://www.dmsmm.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  DMS Association
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gray-400 mt-0.5 shrink-0" />
                <span>76 Small Road<br />Brownsville, TN 38012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gray-400 shrink-0" />
                <a href="tel:8289642916" className="hover:text-white transition-colors">828-964-2916</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gray-400 shrink-0 mt-0.5" />
                <a href="mailto:shwemyodaw@protonmail.com" className="hover:text-white transition-colors break-all text-xs">
                  shwemyodaw@protonmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <span>&copy; {new Date().getFullYear()} Empower Asia Bible Translation Movement. All Rights Reserved.</span>
          <div className="flex gap-6 flex-wrap justify-center sm:justify-end">
            <button onClick={() => onNavigate('privacy')} className="hover:text-gray-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-gray-400 transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('cookie')} className="hover:text-gray-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation
        onNavigate={handleNavigate}
        currentPage={currentPage}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'story' && <StoryPage />}
        {currentPage === 'process' && <ProcessPage />}
        {currentPage === 'beliefs' && <BeliefsPage />}
        {currentPage === 'translations' && <TranslationsPage />}
        {currentPage === 'ten-stories' && <TenStoriesPage />}
        {currentPage === 'movement-video' && <MovementVideoPage />}
        {currentPage === 'give' && <GivePage />}
        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
        {currentPage === 'blog-b3' && <BlogPostB3Page onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'terms' && <TermsPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'cookie' && <CookiePage />}
        {currentPage === 'training-videos' && <TrainingVideosPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
