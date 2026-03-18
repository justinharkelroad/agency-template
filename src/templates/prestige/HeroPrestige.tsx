import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * PRESTIGE Hero — Full-width image in rounded container
 * Warm, editorial, premium feel
 * Inspired by: Salute
 */
export default function HeroPrestige() {
  return (
    <section className="relative bg-[var(--color-surface)] pt-20 pb-0 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
        {/* Rounded hero container with background image */}
        <div className="relative rounded-[1.5rem] overflow-hidden min-h-[80vh] flex items-end">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${config.heroImage})` }}
          />
          {/* Gradient overlay — bottom-heavy for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          {/* Content — positioned at bottom */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-12 lg:pb-16 pt-40">
            <div className="max-w-3xl animate-[fadeSlideUp_800ms_ease-out_both]">
              <span className="inline-block text-white/70 text-sm font-[family-name:var(--font-body)] tracking-wide mb-4 border border-white/20 rounded-[var(--radius-btn)] px-4 py-1.5">
                Your family, your community, our commitment to care.
              </span>

              <h1
                className="font-[family-name:var(--font-heading)] font-normal text-white mb-6 leading-[1.1]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Your Family Deserves<br />
                The Best Protection
              </h1>

              <p className="font-[family-name:var(--font-body)] text-white/80 text-lg mb-8 max-w-xl">
                {config.agencyName} — serving {config.address.city} families for {config.yearsInBusiness} years with personalized insurance solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
                >
                  Get Your Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${config.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-white/25"
                >
                  <Phone size={18} />
                  Talk to Us: {config.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About teaser strip below hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-3 flex-shrink-0" />
          <div>
            <span className="text-[var(--color-text-light)] text-sm font-[family-name:var(--font-body)] uppercase tracking-wide">
              About {config.agencyName}
            </span>
            <p className="font-[family-name:var(--font-heading)] text-[var(--color-text)] text-xl md:text-2xl mt-2 max-w-2xl leading-relaxed">
              {config.aboutText.split('\n\n')[0]?.slice(0, 200)}...
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium mt-3 hover:underline"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
