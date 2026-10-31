import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, MapPin, Phone, Mail, Facebook } from 'lucide-react';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import ProcessPage from './pages/ProcessPage';
import BeliefPage from './pages/BeliefPage';
import TranslationsPage from './pages/TranslationsPage';
import TenStoriesPage from './pages/TenStoriesPage';
import MovementVideoPage from './pages/MovementVideoPage';
import TeamPage from './pages/TeamPage';
import GivePage from './pages/GivePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import LanguageStoryPage from './pages/LanguageStoryPage';
import B3PrayerPage from './pages/B3PrayerPage';
import B3StoriesPage from './pages/B3StoriesPage';
import BridgePage from './pages/BridgePage';
import ContactPage from './pages/ContactPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import TrainingVideosPage from './pages/TrainingVideosPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import NotFoundPage from './pages/NotFoundPage';
import B3TrainingPage from './pages/B3TrainingPage';
import B3LessonPage from './pages/B3LessonPage';
import { PAGE_PATHS, PAGE_META, applyPageMeta, type Page } from './lib/routes';

export { PAGE_PATHS, type Page };

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
  { label: 'Bible Translations', page: 'translations' },
  { label: 'Contact', page: 'contact' },
  {
    label: 'Resources',
    children: [
      { label: 'B3 Stories', page: 'b3-stories' },
      { label: 'Just Obey Jesus Training', page: 'just-obey-jesus-training' },
      { label: 'Movement Video', page: 'movement-video' },
      { label: 'Training Videos & Sermons', page: 'training-videos' },
      { label: 'Case Studies', page: 'case-studies' },
      { label: 'Blog', page: 'blog' },
    ],
  },
];

function Navigation({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenus = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
    setOpenMobileSection(null);
  };

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
        !isHome || scrolled || menuOpen
          ? 'bg-gray-950/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" onClick={closeMenus} className="flex items-center gap-3" aria-label="Empower Asia home">
          <img
            src="/qt=q_95.webp"
            alt="Empower Asia"
            className="h-12 w-12 sm:h-13 sm:w-13 lg:h-14 lg:w-14 rounded-full object-cover ring-1 ring-white/60"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white text-sm font-bold tracking-tight">Empower Asia</span>
            <span className="text-white/60 text-xs">Bible Translation Movement</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative">
              {'page' in link ? (
                <Link
                  to={PAGE_PATHS[link.page]}
                  onClick={closeMenus}
                  className="text-sm font-semibold text-white hover:text-gray-300 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                    className="flex items-center gap-1 text-sm font-semibold text-white hover:text-gray-300 transition-colors py-2"
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={PAGE_PATHS[child.page]}
                          onClick={closeMenus}
                          className="block w-full text-left px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-950 transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <Link
            to={PAGE_PATHS.give}
            onClick={closeMenus}
            className="px-5 py-2.5 bg-white text-gray-950 text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Give Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => { setMenuOpen(!menuOpen); setOpenMobileSection(null); }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
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
                <Link
                  to={PAGE_PATHS[link.page]}
                  onClick={closeMenus}
                  className="block w-full text-left px-6 py-4 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleMobileSection(link.label)}
                    aria-expanded={openMobileSection === link.label}
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
                        <Link
                          key={child.label}
                          to={PAGE_PATHS[child.page]}
                          onClick={closeMenus}
                          className="block w-full text-left px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-white/10 ml-4"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="px-6 py-4">
            <Link
              to={PAGE_PATHS.give}
              onClick={closeMenus}
              className="block text-center w-full py-3 bg-white text-gray-950 font-bold rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Give Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14">
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
                  <Link to={PAGE_PATHS[p]} className="hover:text-white transition-colors">
                    {l}
                  </Link>
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
                  ['Just Obey Jesus Training', 'just-obey-jesus-training'],
                  ['Movement Video', 'movement-video'],
                  ['Training Videos & Sermons', 'training-videos'],
                  ['Case Studies', 'case-studies'],
                  ['Blog', 'blog'],
                  ['Contact Us', 'contact'],
                ] as [string, Page][]
              ).map(([l, p]) => (
                <li key={l}>
                  <Link to={PAGE_PATHS[p]} className="hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/b3-prayer-movement" className="hover:text-white transition-colors">
                  Pray
                </Link>
              </li>
              <li>
                <a href="http://www.dmsmm.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  DMS Association
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              {(
                [
                  ['Privacy Policy', 'privacy-policy'],
                  ['Cookies Policy', 'cookies-policy'],
                  ['Terms of Service', 'terms-of-service'],
                  ['Statement of Beliefs', 'beliefs'],
                ] as [string, Page][]
              ).map(([l, p]) => (
                <li key={l}>
                  <Link to={PAGE_PATHS[p]} className="hover:text-white transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
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
            <Link to={PAGE_PATHS['privacy-policy']} className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to={PAGE_PATHS['terms-of-service']} className="hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link to={PAGE_PATHS['cookies-policy']} className="hover:text-gray-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Page title, description and canonical URL. Blog posts and the 404 page set their own.
  useEffect(() => {
    const path = location.pathname.replace(/(.)\/$/, '$1');
    const meta = PAGE_META[path];
    if (meta) applyPageMeta(path, meta.title, meta.description);
  }, [location.pathname]);

  const onNavigate = (page: Page) => {
    navigate(PAGE_PATHS[page]);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/beliefs" element={<BeliefPage />} />
          <Route path="/translations" element={<TranslationsPage />} />
          <Route path="/movement-video" element={<MovementVideoPage />} />
          <Route path="/give" element={<GivePage />} />
          <Route path="/blog" element={<BlogPage onNavigate={onNavigate} />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/cookie" element={<Navigate to="/cookies-policy" replace />} />
          <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
          <Route path="/training-videos" element={<TrainingVideosPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/b3-prayer-movement" element={<B3PrayerPage />} />
          <Route path="/b3-stories" element={<B3StoriesPage />} />
          <Route path="/just-obey-jesus-training" element={<B3TrainingPage />} />
          <Route path="/just-obey-jesus-training/lesson/:n" element={<B3LessonPage />} />
          <Route path="/b3-training/*" element={<Navigate to="/just-obey-jesus-training" replace />} />
          <Route path="/b3-stories/bridges/:slug" element={<BridgePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
