import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import ServicesSection from '../components/sections/ServicesSection';
import CTABanner from '../components/sections/CTABanner';

export default function ServicesPage() {
  return (
    <>
      <SEOHead title={`Our Services | ${config.agencyName}`} path="/services" />
      {/* Page header banner */}
      <section className="bg-[var(--color-primary)] pt-28 pb-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
            Our Services
          </h1>
        </div>
      </section>
      <ServicesSection />
      {/* Carriers section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-text)] mb-6">
            We Represent
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {config.carriers.map((carrier) => (
              <span
                key={carrier}
                className="text-[var(--color-text-light)] text-lg font-medium bg-[var(--color-surface)] px-6 py-3 rounded-lg border border-[var(--color-border)]"
              >
                {carrier}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
