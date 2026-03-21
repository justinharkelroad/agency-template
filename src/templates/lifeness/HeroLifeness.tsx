import { Phone, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * LIFENESS Hero — Split layout with purple accent panel
 * Purple bg container left (headline + CTA), photo right
 * Floating stat card, trust logo bar below
 * Inspired by: Lifeness.co / Indigo Trust
 */
export default function HeroLifeness() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center min-h-[85vh]">
          {/* Left — Purple container with content */}
          <div className="relative animate-[fadeSlideUp_800ms_ease-out_both]">
            <div
              className="rounded-[var(--radius-lg)] p-8 sm:p-10 lg:p-12 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
            >
              <span className="inline-block bg-white/20 text-white text-xs font-semibold font-[family-name:var(--font-body)] px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                Your Local Insurance Agency
              </span>

              <h1
                className="font-[family-name:var(--font-heading)] font-bold text-white mb-4 leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Intelligent insurance for {config.address.city} families
              </h1>

              <p className="font-[family-name:var(--font-body)] text-white/80 text-base mb-8 max-w-md">
                {config.tagline}. Personalized coverage for auto, home, life, and business — from a neighbor who cares.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1a1a2e] text-white px-6 py-3.5 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-sm transition-all hover:bg-[#2a2a3e] hover:scale-[1.02]"
                >
                  Get Started
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${config.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-6 py-3.5 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-sm backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Phone size={16} />
                  Call {config.phoneDisplay}
                </a>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 right-6 bg-white rounded-[var(--radius-card)] shadow-lg px-5 py-3 hidden lg:block">
                <p className="text-[var(--color-text-light)] text-xs font-[family-name:var(--font-body)]">
                  Families Protected
                </p>
                <p className="text-[var(--color-primary)] font-[family-name:var(--font-heading)] font-bold text-lg">
                  2,000+
                </p>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative animate-[fadeSlideUp_800ms_ease-out_200ms_both]">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src={config.heroImage}
                alt={`${config.agencyName} — serving ${config.address.city}, ${config.address.state}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge top-right */}
            <div className="absolute -top-3 -right-3 bg-white rounded-[var(--radius-card)] shadow-md px-4 py-2.5 hidden lg:flex items-center gap-2">
              <Shield size={18} className="text-[var(--color-primary)]" />
              <div>
                <p className="text-[var(--color-text)] text-xs font-semibold font-[family-name:var(--font-body)]">
                  Reliable Protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust / Stats Bar */}
      <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 overflow-x-auto gap-8">
            <p className="text-[var(--color-text-light)] text-sm font-[family-name:var(--font-body)] whitespace-nowrap">
              Secured by <span className="font-semibold text-[var(--color-text)]">{config.agencyName}</span>
            </p>
            <div className="flex items-center gap-8">
              {[
                { value: `${config.yearsInBusiness}+`, label: 'Years' },
                { value: '2,000+', label: 'Families' },
                { value: 'A+', label: 'BBB Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center whitespace-nowrap">
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] text-lg">
                    {stat.value}
                  </span>
                  <span className="text-[var(--color-text-light)] text-xs ml-1 font-[family-name:var(--font-body)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
