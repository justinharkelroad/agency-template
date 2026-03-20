import { Phone, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * VANGUARD Hero — ELITE: Kinetic/wild
 * Full viewport height, midnight black background
 * Electric violet gradient accent, neon lime CTA
 * Bold dramatic headline, service pills, high-contrast
 */
export default function HeroVanguard() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Violet gradient accent */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(124, 58, 237, 0.25), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(124, 58, 237, 0.15), transparent 50%)',
        }}
      />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="max-w-3xl">
          {/* Agency badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10">
            <Shield size={14} style={{ color: '#7C3AED' }} />
            <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[3px]" style={{ color: '#7C3AED' }}>
              {config.agencyName}
            </span>
          </div>

          {/* Dramatic headline */}
          <h1 className="font-[family-name:var(--font-heading)] font-bold mb-8 leading-[1.05]">
            <span
              className="block"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                color: '#FFFFFF',
              }}
            >
              We don&apos;t sell insurance.
            </span>
            <span
              className="block mt-2"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                background: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We sell peace of mind.
            </span>
          </h1>

          <p
            className="font-[family-name:var(--font-body)] text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            {config.tagline}. {config.yearsInBusiness} years of bold protection for {config.address.city} families who refuse to settle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-[1rem] transition-all duration-200 hover:scale-[1.03]"
              style={{
                backgroundColor: '#84CC16',
                color: '#0A0A0A',
                boxShadow: '0 0 20px rgba(132, 204, 22, 0.3)',
              }}
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-white/5"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              <Phone size={18} />
              {config.phoneDisplay}
            </a>
          </div>

          {/* Service pills — ghost border style */}
          <div className="flex flex-wrap gap-3">
            {(config.services || []).map((service) => (
              <span
                key={service.title}
                className="inline-flex items-center px-4 py-2 rounded-full font-[family-name:var(--font-body)] text-sm transition-colors hover:bg-white/5"
                style={{
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {service.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
