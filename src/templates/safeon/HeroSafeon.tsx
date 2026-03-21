import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

/**
 * SAFEON Hero — Friendly serif headline with floating cards
 * Editorial serif typography + geometric sans body
 * Navy pill CTAs, gold accents, rounded card collage right
 * Inspired by: Safeon / Editorial Guardian
 */
export default function HeroSafeon() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[85vh] py-20 lg:py-0">
          {/* Left — Editorial content */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_both]">
            <h1
              className="font-[family-name:var(--font-heading)] text-[var(--color-text)] mb-6 leading-[1.15]"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
            >
              Dive into peace of{' '}
              <span className="relative inline-block">
                mind
                {/* Decorative squiggle underline */}
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 5 Q 12.5 0, 25 5 T 50 5 T 75 5 T 100 5" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
                </svg>
              </span>
              , we got you{' '}
              <span className="inline-flex items-center gap-1">
                <ShieldCheck size={28} className="text-[var(--color-primary)] inline" />
                secured
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[var(--color-text-light)] text-sm font-[family-name:var(--font-body)]">
                Secured by
              </span>
              <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] text-sm tracking-wide">
                {config.agencyName}
              </span>
            </div>

            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-light)] text-base mb-8 max-w-md">
              Your safety net for today&apos;s plans and tomorrow&apos;s security. {config.tagline}.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-7 py-3.5 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[var(--color-text)] text-sm font-medium group"
              >
                <span className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Phone size={16} className="text-[var(--color-accent)]" />
                </span>
                Call {config.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right — Floating card collage */}
          <div className="relative animate-[fadeSlideUp_800ms_ease-out_200ms_both]">
            {/* Main image card */}
            <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={config.heroImage}
                alt={`${config.agencyName} — serving ${config.address.city}, ${config.address.state}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating "Reliable Protection" badge */}
            <div className="absolute -top-4 right-4 bg-white rounded-[var(--radius-card)] shadow-md px-4 py-3 hidden lg:flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <ShieldCheck size={16} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <p className="text-[var(--color-text)] text-xs font-semibold font-[family-name:var(--font-body)]">
                  Reliable
                </p>
                <p className="text-[var(--color-text-light)] text-[10px] font-[family-name:var(--font-body)]">
                  Protection
                </p>
              </div>
            </div>

            {/* Floating stats card bottom-left */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-[var(--radius-card)] shadow-md px-5 py-3 hidden lg:block">
              <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] text-xl">
                {config.yearsInBusiness}+
              </p>
              <p className="text-[var(--color-text-light)] text-xs font-[family-name:var(--font-body)]">
                Years Serving {config.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {config.services.slice(0, 4).map((svc) => (
              <span key={svc.title} className="text-[var(--color-text-light)] font-[family-name:var(--font-body)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                {svc.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
