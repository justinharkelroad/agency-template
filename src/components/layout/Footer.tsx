import { Link } from 'react-router-dom';
import { Facebook, Globe, Instagram, Linkedin } from 'lucide-react';
import config from '../../config';

const socialIcons: Record<string, typeof Facebook> = {
  facebook: Facebook,
  google: Globe,
  instagram: Instagram,
  linkedin: Linkedin,
};

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
  { to: '/contact', label: 'Get a Free Quote' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Agency Info */}
          <div className="space-y-3">
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4">
              {config.agencyName}
            </h3>
            <p className="text-white/70 text-sm">{config.address.full}</p>
            <p>
              <a
                href={`tel:${config.phone}`}
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                {config.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${config.email}`}
                className="text-white/70 text-sm hover:text-white transition-colors"
              >
                {config.email}
              </a>
            </p>
            <p className="text-white/70 text-sm">{config.officeHours}</p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-6">
              {Object.entries(config.social).map(([platform, url]) => {
                if (!url) return null;
                const Icon = socialIcons[platform];
                if (!Icon) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={`Visit us on ${platform}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wide mb-2">
                We Represent
              </p>
              <div className="flex flex-wrap gap-3">
                {config.carriers.map((carrier) => (
                  <span
                    key={carrier}
                    className="text-white/60 text-sm bg-white/5 px-3 py-1 rounded"
                  >
                    {carrier}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} {config.agencyName}. All rights reserved.
          </p>
          <a href="#" className="text-white/50 text-sm hover:text-white/70 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
