import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import ContactForm from '../components/ui/ContactForm';
import ClickToCall from '../components/ui/ClickToCall';

export default function ContactPage() {
  return (
    <>
      <SEOHead title={`Contact Us | ${config.agencyName}`} path="/contact" />
      {/* Page header banner */}
      <section className="bg-[var(--color-primary)] pt-28 pb-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-[var(--section-padding)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Form */}
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-text)] mb-6">
                Get a Free Quote
              </h2>
              <ContactForm />
            </div>

            {/* Right — Contact info + Map */}
            <div className="space-y-8">
              <div className="bg-[var(--color-surface)] rounded-xl p-8 border border-[var(--color-border)] space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <p className="text-[var(--color-text)]">{config.address.full}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[var(--color-accent)] mt-1 flex-shrink-0" />
                  <a
                    href={`tel:${config.phone}`}
                    className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
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

              {/* Google Maps embed */}
              <div className="rounded-lg overflow-hidden aspect-video">
                <iframe
                  src={config.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${config.agencyName} location on Google Maps`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClickToCall variant="floating" />
    </>
  );
}
