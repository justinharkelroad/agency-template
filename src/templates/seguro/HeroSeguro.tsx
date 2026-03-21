import { Phone, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * SEGURO Hero — Dark editorial with massive uppercase typography
 * Full-width charcoal background, bold headline, orange accent CTAs
 * Sharp 0px radius, automotive/editorial feel
 * Inspired by: Seguro / Kinetic Authority
 */
export default function HeroSeguro() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* Hero overlay gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />

      {/* Background hero image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt={`${config.agencyName} — serving ${config.address.city}, ${config.address.state}`}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 min-h-[85vh] flex flex-col justify-center">
        <div className="animate-[fadeSlideUp_800ms_ease-out_both] max-w-3xl">
          {/* Award badge */}
          <div className="flex items-center gap-2 mb-8">
            <Award size={16} className="text-[var(--color-accent)]" />
            <span className="text-white/70 text-xs font-[family-name:var(--font-body)] uppercase tracking-[3px]">
              Award-Winning Insurance Agency
            </span>
          </div>

          {/* Massive editorial headline */}
          <h1
            className="font-[family-name:var(--font-heading)] font-bold text-white uppercase tracking-tight leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            {config.address.city}
            <br />
            <span className="text-[var(--color-accent)]">Insurance</span>
            <br />
            Agency
          </h1>

          <p className="font-[family-name:var(--font-body)] text-white/60 text-base mb-10 max-w-lg">
            {config.tagline}. {config.agencyName} provides comprehensive auto, home, life, and business
            coverage for {config.address.city} and surrounding areas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-sm uppercase tracking-wider transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              Get A Quote
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-sm uppercase tracking-wider transition-all hover:bg-white/10"
            >
              <Phone size={16} />
              Call {config.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Trust indicators bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm font-[family-name:var(--font-body)]">
              5.0 Rating
            </span>
          </div>
          <div className="text-white/40 text-sm font-[family-name:var(--font-body)]">
            {config.officeHours} · Serving {config.address.city}, {config.address.state}
          </div>
        </div>
      </div>
    </section>
  );
}
