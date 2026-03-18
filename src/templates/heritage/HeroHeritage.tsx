import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * HERITAGE Hero — Split layout
 * Headline + CTA left, large photo right
 * Stats bar below (years, families, rating)
 * Inspired by: Xoom Quotes + Dansk
 */
export default function HeroHeritage() {
  const stats = [
    { value: `${config.yearsInBusiness}+`, label: 'Years of Experience' },
    { value: '2,000+', label: 'Families Protected' },
    { value: 'A+', label: 'BBB Rating' },
  ];

  return (
    <section className="relative bg-[var(--color-surface)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] py-28 lg:py-0">
          {/* Left — Content */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_both]">
            <span className="inline-block uppercase text-[var(--color-accent)] tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm mb-4">
              Trusted Local Agency
            </span>
            <h1
              className="font-[family-name:var(--font-heading)] font-normal text-[var(--color-text)] mb-5 leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
            >
              Your Trusted Insurance Partner in {config.address.city}
            </h1>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-light)] text-lg mb-8 max-w-lg">
              {config.tagline}. Personalized coverage for auto, home, life, and business — from a neighbor who cares.
            </p>

            {/* CTA Buttons — conversion priority */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-7 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-7 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-[1rem] transition-all duration-200 hover:opacity-90"
              >
                <Phone size={18} />
                Call {config.phoneDisplay}
              </a>
            </div>
            <p className="text-[var(--color-text-light)] text-sm">
              {config.officeHours} · Serving {config.address.city}, {config.address.state} & surrounding areas
            </p>
          </div>

          {/* Right — Image */}
          <div className="relative animate-[fadeSlideUp_800ms_ease-out_200ms_both]">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={config.heroImage}
                alt={`${config.agencyName} — serving ${config.address.city}, ${config.address.state}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dot pattern */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/20 py-6 md:py-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-2">
                <div className="font-[family-name:var(--font-heading)] text-white text-2xl md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs md:text-sm mt-1 font-[family-name:var(--font-body)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
