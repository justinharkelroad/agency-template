import { Phone } from 'lucide-react';
import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import ServicesSection from '../components/sections/ServicesSection';
import CTABanner from '../components/sections/CTABanner';
import ClickToCall from '../components/ui/ClickToCall';

export default function ServicesPage() {
  const serviceNames = config.services.map(s => s.title.toLowerCase()).join(', ');

  return (
    <>
      <SEOHead
        title={`Insurance Services in ${config.address.city}, ${config.address.state} | ${config.agencyName}`}
        description={`${config.agencyName} offers ${serviceNames} in ${config.address.city}, ${config.address.state}. Compare rates from top carriers. Call ${config.phoneDisplay} for a free quote.`}
        path="/services"
      />
      {/* Page header banner with call CTA */}
      <section className="bg-[var(--color-primary)] pt-28 pb-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-3">
            Insurance Services
          </h1>
          <p className="text-white/70 font-[family-name:var(--font-body)] mb-4">
            Comprehensive coverage for {config.address.city} families and businesses
          </p>
          <a
            href={`tel:${config.phone}`}
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold font-[family-name:var(--font-body)] hover:underline"
          >
            <Phone size={18} />
            Call for a free quote: {config.phoneDisplay}
          </a>
        </div>
      </section>
      <ServicesSection />
      {/* Carriers section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-text)] mb-2">
            We Represent
          </h2>
          <p className="text-[var(--color-text-light)] text-sm mb-6 font-[family-name:var(--font-body)]">
            We shop multiple carriers to find you the best rate
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {config.carriers.map((carrier) => (
              <span
                key={carrier}
                className="text-[var(--color-text-light)] text-lg font-medium bg-[var(--color-surface)] px-6 py-3 rounded-[var(--radius-card)] border border-[var(--color-border)]"
              >
                {carrier}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
      <ClickToCall variant="floating" />
    </>
  );
}
