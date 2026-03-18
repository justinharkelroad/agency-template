import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';
import InlineQuoteForm from '../../components/conversion/InlineQuoteForm';

/**
 * MOMENTUM Hero — Bold oversized type + photo collage grid
 * Energetic, modern, colorful
 * Inspired by: Trust/Secured + Opndoo Studio
 */
export default function HeroMomentum() {
  const images = config.galleryImages || [config.heroImage];

  return (
    <section className="relative bg-[var(--color-surface)] overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Bold Typography */}
          <div className="animate-[fadeSlideUp_800ms_ease-out_both]">
            <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-[var(--radius-btn)] px-4 py-1.5 text-sm font-semibold font-[family-name:var(--font-body)] mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Trusted in {config.address.city}, {config.address.state}
            </span>

            <h1
              className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] mb-6 leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Protect What
              <br />
              <span className="text-[var(--color-accent)]">Matters Most</span>
              <br />
              To You
            </h1>

            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-light)] text-lg mb-8 max-w-md leading-relaxed">
              {config.tagline}. Compare coverage, customize your plan, and get insured — all with a local agent who knows your name.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-[1rem] transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02] shadow-lg shadow-[var(--color-accent)]/25"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${config.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-[1rem] transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white"
              >
                <Phone size={18} />
                {config.phoneDisplay}
              </a>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {config.services.slice(0, 4).map((service) => (
                <span
                  key={service.title}
                  className="bg-white border border-[var(--color-border)] rounded-[var(--radius-btn)] px-4 py-2 text-sm font-[family-name:var(--font-body)] text-[var(--color-text-light)]"
                >
                  {service.title}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Photo Collage Grid */}
          <div className="relative animate-[fadeSlideUp_800ms_ease-out_300ms_both]">
            <div className="grid grid-cols-3 gap-3">
              {/* Row 1 */}
              <div className="col-span-2 row-span-2 rounded-[var(--radius-card)] overflow-hidden aspect-square">
                <img
                  src={images[0] || config.heroImage}
                  alt={`${config.agencyName} clients`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[var(--radius-card)] overflow-hidden aspect-square">
                <img
                  src={images[1] || config.heroImage}
                  alt="Happy family"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[var(--radius-card)] overflow-hidden aspect-square">
                <img
                  src={images[2] || config.heroImage}
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Row 2 */}
              <div className="rounded-[var(--radius-card)] overflow-hidden aspect-square">
                <img
                  src={images[3] || config.heroImage}
                  alt="Insurance protection"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Social Proof Block */}
              <div className="bg-[var(--color-accent)] rounded-[var(--radius-card)] flex flex-col items-center justify-center p-3 text-center">
                <span className="text-white font-[family-name:var(--font-heading)] font-bold text-xl">
                  {config.yearsInBusiness}+
                </span>
                <span className="text-white/80 text-xs font-[family-name:var(--font-body)]">
                  Years Serving<br />{config.address.city}
                </span>
              </div>
              <div className="rounded-[var(--radius-card)] overflow-hidden aspect-square">
                <img
                  src={images[4] || config.heroImage}
                  alt="Local community"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Quote Form Section — below the fold but right there */}
      <div className="bg-[var(--color-primary)] py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <h2 className="font-[family-name:var(--font-heading)] text-white text-2xl font-bold">
              Get Your Quote in 30 Seconds
            </h2>
            <p className="text-white/70 text-sm mt-1">No obligation. No spam. Just a fast quote.</p>
          </div>
          <InlineQuoteForm variant="dark" />
        </div>
      </div>
    </section>
  );
}
