import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * SUMMIT Hero — PREMIUM: Apple-minimal
 * Massive whitespace, centered single statement
 * Warm gray background, clean sans-serif, pill-shaped CTA
 * Minimal — headline, one line of sub-text, one button
 */
export default function HeroSummit() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center min-h-screen"
      style={{ backgroundColor: '#F5F3EF' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-28">
        {/* Agency name — subtle */}
        <span
          className="inline-block uppercase tracking-[5px] font-[family-name:var(--font-body)] font-medium text-xs mb-12"
          style={{ color: '#9CA3AF' }}
        >
          {config.agencyName}
        </span>

        {/* Main headline — massive clean type */}
        <h1
          className="font-[family-name:var(--font-heading)] font-semibold mb-8 leading-[1.05]"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            color: '#2C2C2C',
          }}
        >
          {config.tagline || 'Insurance, Simplified.'}
        </h1>

        {/* Single line sub-text */}
        <p
          className="font-[family-name:var(--font-body)] text-xl mb-14 max-w-xl mx-auto leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          {config.yearsInBusiness} years of protecting families in {config.address.city}. One conversation is all it takes.
        </p>

        {/* Single pill-shaped CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          style={{
            backgroundColor: '#E8913A',
            color: '#FFFFFF',
            boxShadow: '0 4px 14px rgba(232, 145, 58, 0.3)',
          }}
        >
          Get Started
          <ArrowRight size={18} />
        </Link>

        {/* Subtle supporting info */}
        <p
          className="font-[family-name:var(--font-body)] text-sm mt-8"
          style={{ color: '#9CA3AF' }}
        >
          Free quote · No obligation · {config.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
