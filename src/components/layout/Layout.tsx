import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SchemaOrg from '../seo/SchemaOrg';
import StickyMobileCTA from '../conversion/StickyMobileCTA';
import config from '../../config';

export default function Layout() {
  const { pathname } = useLocation();

  // Set template data attribute on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-template', config.template);

    // Also inject CSS color variables from config so they override defaults
    const root = document.documentElement.style;
    root.setProperty('--color-primary', config.colors.primary);
    root.setProperty('--color-secondary', config.colors.secondary);
    root.setProperty('--color-accent', config.colors.accent);
    root.setProperty('--color-bg', config.colors.background);
    root.setProperty('--color-text', config.colors.text);
    root.setProperty('--color-text-light', config.colors.textLight);

    // Compute derived colors
    root.setProperty('--color-primary-light', `${config.colors.primary}18`);
    root.setProperty('--color-accent-hover', adjustBrightness(config.colors.accent, -15));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SchemaOrg />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Mobile sticky CTA — always visible on mobile, pb-safe for the bar */}
      <StickyMobileCTA />
      {/* Bottom padding spacer for mobile sticky bar */}
      <div className="h-[60px] md:hidden" />
    </>
  );
}

/** Darken/lighten a hex color by a percentage */
function adjustBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, ((num >> 16) & 0xff) + Math.round(2.55 * percent)));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + Math.round(2.55 * percent)));
  const b = Math.min(255, Math.max(0, (num & 0xff) + Math.round(2.55 * percent)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
