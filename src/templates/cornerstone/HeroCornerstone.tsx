import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * CORNERSTONE Hero — PREMIUM: Magazine editorial
 * Full-width hero with heroImage background, deep forest green overlay
 * Elegant serif headline, warm cream text, copper CTA
 * Asymmetric layout — text offset to left with generous whitespace
 */
export default function HeroCornerstone() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt={`${config.agencyName} — serving ${config.address.city}, ${config.address.state}`}
          className="w-full h-full object-cover"
        />
        {/* Deep forest green overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 45, 30, 0.92), rgba(25, 50, 35, 0.85))',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="max-w-2xl">
          {/* Editorial label */}
          <span
            className="inline-block uppercase tracking-[4px] font-[family-name:var(--font-body)] font-medium text-xs mb-8"
            style={{ color: '#B87333' }}
          >
            Est. {new Date().getFullYear() - config.yearsInBusiness} · {config.address.city}, {config.address.state}
          </span>

          {/* Main headline — elegant serif */}
          <h1
            className="font-[family-name:var(--font-heading)] font-normal mb-8 leading-[1.1]"
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
              color: '#FFF8F0',
            }}
          >
            Your Story.
            <br />
            Our Shield.
          </h1>

          {/* Pull-quote style tagline */}
          <div
            className="border-l-2 pl-6 mb-10 max-w-lg"
            style={{ borderColor: '#B87333' }}
          >
            <p
              className="font-[family-name:var(--font-body)] text-lg leading-relaxed italic"
              style={{ color: 'rgba(255, 248, 240, 0.8)' }}
            >
              {config.tagline}. For {config.yearsInBusiness} years, {config.agencyName} has been the trusted name families count on — because your peace of mind is our legacy.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:scale-[1.02]"
              style={{
                backgroundColor: '#B87333',
                color: '#FFF8F0',
              }}
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-white/10"
              style={{
                border: '1px solid rgba(255, 248, 240, 0.3)',
                color: '#FFF8F0',
              }}
            >
              <Phone size={18} />
              {config.phoneDisplay}
            </a>
          </div>

          <p
            className="font-[family-name:var(--font-body)] text-sm"
            style={{ color: 'rgba(255, 248, 240, 0.5)' }}
          >
            Serving {config.address.city} and surrounding communities · {config.services.length}+ lines of coverage
          </p>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #B87333, transparent)' }}
      />
    </section>
  );
}
