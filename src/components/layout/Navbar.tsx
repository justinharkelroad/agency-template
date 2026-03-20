import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import config from '../../config';
import { trackConversion } from '../seo/GoogleAnalytics';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Get a Quote' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const activeLinkClass = 'underline decoration-[var(--color-accent)] decoration-2 underline-offset-4';

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-[var(--color-primary)] shadow-md'
            : 'bg-[var(--color-primary)]/80 backdrop-blur-md'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={config.logo}
              alt={`${config.agencyName} logo`}
              className="h-9 md:h-12 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="text-white font-[family-name:var(--font-heading)] text-lg md:text-xl">
              {config.agencyName}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-[family-name:var(--font-body)] font-medium transition-colors duration-300 text-white hover:text-white/80 ${
                    isActive ? activeLinkClass : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {/* Click-to-call button in nav */}
            <a
              href={`tel:${config.phone}`}
              onClick={() => trackConversion('call')}
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white rounded-[var(--radius-btn)] px-4 py-2 font-[family-name:var(--font-body)] font-semibold transition-all duration-200 hover:bg-[var(--color-accent-hover)]"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">{config.phoneDisplay}</span>
              <span className="lg:hidden">Call</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-[var(--color-primary)] flex flex-col"
        >
          <div className="flex items-center justify-between px-4 h-16">
            <span className="text-white font-[family-name:var(--font-heading)] text-lg">
              {config.agencyName}
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-white text-2xl font-[family-name:var(--font-body)] font-medium ${
                    isActive ? activeLinkClass : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="pb-12 text-center space-y-4">
            {/* Prominent call button in mobile menu */}
            <a
              href={`tel:${config.phone}`}
              onClick={() => trackConversion('call')}
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white rounded-[var(--radius-btn)] px-8 py-4 font-semibold text-lg"
            >
              <Phone size={22} />
              Call {config.phoneDisplay}
            </a>
            <p className="text-white/70 text-sm">{config.address.full}</p>
            <p className="text-white/50 text-xs">{config.officeHours}</p>
          </div>
        </div>
      )}
    </>
  );
}
