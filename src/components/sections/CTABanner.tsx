import { Phone } from 'lucide-react';
import config from '../../config';
import InlineQuoteForm from '../conversion/InlineQuoteForm';

/**
 * CTA Banner — appears near the bottom of most pages.
 * Dark background, inline quote form + phone CTA.
 * This is the secondary conversion point on every page.
 */
export default function CTABanner() {
  return (
    <section className="bg-[var(--color-primary)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Messaging */}
          <div className="text-center lg:text-left">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white mb-4">
              Ready to Protect What Matters?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-white/80 text-lg mb-6 max-w-lg mx-auto lg:mx-0">
              Get a personalized quote in minutes. No obligation, no pressure — just honest answers from a local agent in {config.address.city}.
            </p>

            {/* Phone CTA — big and prominent */}
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center gap-3 text-white group"
            >
              <span className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </span>
              <span>
                <span className="block text-white/60 text-sm font-[family-name:var(--font-body)]">Call us directly</span>
                <span className="block text-white text-xl font-semibold font-[family-name:var(--font-body)]">{config.phoneDisplay}</span>
              </span>
            </a>

            <p className="text-white/50 text-sm mt-4 font-[family-name:var(--font-body)]">
              {config.officeHours}
            </p>
          </div>

          {/* Right — Inline Quote Form */}
          <div>
            <InlineQuoteForm variant="card" />
          </div>
        </div>
      </div>
    </section>
  );
}
