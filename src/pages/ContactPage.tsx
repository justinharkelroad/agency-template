import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import ContactForm from '../components/ui/ContactForm';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title={`Contact ${config.agencyName} | Free Insurance Quote in ${config.address.city}, ${config.address.state}`}
        description={`Contact ${config.agencyName} for a free insurance quote. Located at ${config.address.full}. Call ${config.phoneDisplay} or fill out our form for fast, personalized service.`}
        path="/contact"
      />
      {/* Page header with immediate phone CTA */}
      <section className="bg-[var(--color-primary)] pt-28 pb-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-white/70 font-[family-name:var(--font-body)] mb-5 max-w-lg mx-auto">
            Fill out the form below or call us directly. We respond within the hour during business hours.
          </p>
          {/* Prominent click-to-call */}
          <a
            href={`tel:${config.phone}`}
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold text-lg transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
          >
            <Phone size={22} />
            Call Now: {config.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="py-[var(--section-padding)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Form */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-text)] mb-2">
                Request a Quote Online
              </h2>
              <p className="text-[var(--color-text-light)] text-sm mb-6 font-[family-name:var(--font-body)]">
                Takes about 2 minutes. We'll get back to you fast.
              </p>
              <ContactForm />
            </div>

            {/* Right — Contact info + Map */}
            <div className="space-y-8">
              <div className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-8 border border-[var(--color-border)] space-y-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-[var(--color-text)]">
                  Visit Our Office
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-[var(--color-text)]">{config.address.full}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <a
                    href={`tel:${config.phone}`}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors font-semibold"
                  >
                    {config.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <a
                    href={`mailto:${config.email}`}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {config.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-[var(--color-text)]">{config.officeHours}</p>
                </div>
              </div>

              {/* Service areas — SEO */}
              <div className="bg-[var(--color-surface)] rounded-[var(--radius-card)] p-8 border border-[var(--color-border)]">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-[var(--color-text)] mb-3">
                  Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-[var(--radius-btn)] text-sm font-medium">
                    {config.address.city}
                  </span>
                  {config.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-[var(--color-primary)]/5 text-[var(--color-text-light)] px-3 py-1 rounded-[var(--radius-btn)] text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-[var(--radius-card)] overflow-hidden aspect-video">
                <iframe
                  src={config.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${config.agencyName} location in ${config.address.city}, ${config.address.state}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
