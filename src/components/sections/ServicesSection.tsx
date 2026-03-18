import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection() {
  return (
    <section className="py-[var(--section-padding)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="uppercase text-[var(--color-accent)] tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm">
            Our Services
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--color-text)] mt-3 mb-4">
            Insurance Coverage in {config.address.city}, {config.address.state}
          </h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            We offer comprehensive insurance solutions to protect every part of your life.
            Serving {config.address.city} and {config.serviceAreas.slice(0, 3).join(', ')}.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Conversion CTA after services */}
        <div className="mt-12 text-center">
          <p className="text-[var(--color-text-light)] mb-4">
            Not sure what coverage you need? We'll help you figure it out — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-semibold transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.02]"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 text-[var(--color-primary)] font-[family-name:var(--font-body)] font-semibold hover:underline"
            >
              <Phone size={18} />
              Or call: {config.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
