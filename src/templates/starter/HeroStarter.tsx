import { Phone, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';
import InlineQuoteForm from '../../components/conversion/InlineQuoteForm';

export default function HeroStarter() {
  return (
    <section className="bg-[var(--color-surface)]">
      {/* Hero — split layout: headline left, form right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — headline and trust signals */}
          <div>
            <h1
              className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-text)] mb-4 leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              {config.address.city}&apos;s Trusted Insurance Agency
            </h1>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-light)] text-lg mb-6 max-w-md leading-relaxed">
              {config.tagline}. Get a free quote in minutes — or call us now.
            </p>

            {/* Big click-to-call */}
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-8 py-5 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[var(--color-accent)]/25 mb-8"
            >
              <Phone size={24} />
              Call {config.phoneDisplay}
            </a>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 text-sm font-[family-name:var(--font-body)]">
              <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                <Shield size={18} className="text-[var(--color-accent)]" />
                <span>{config.yearsInBusiness}+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                <Clock size={18} className="text-[var(--color-accent)]" />
                <span>Free Quotes in Minutes</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-light)]">
                <Users size={18} className="text-[var(--color-accent)]" />
                <span>Locally Owned & Operated</span>
              </div>
            </div>
          </div>

          {/* Right — quote form */}
          <div>
            <InlineQuoteForm variant="card" />
          </div>
        </div>
      </div>

      {/* Services strip — minimal, just shows what they cover */}
      <div className="bg-[var(--color-primary)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold text-center mb-6">
            Coverage We Offer
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {config.services.map((service) => (
              <span
                key={service.title}
                className="bg-white/10 border border-white/20 text-white rounded-[var(--radius-btn)] px-4 py-2 text-sm font-[family-name:var(--font-body)]"
              >
                {service.title}
              </span>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-[family-name:var(--font-body)] font-medium transition-colors"
            >
              <Phone size={16} />
              Call {config.phoneDisplay} for a free quote on any coverage
            </a>
          </div>
        </div>
      </div>

      {/* Social proof — just 2-3 quick trust points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--color-accent)] font-[family-name:var(--font-heading)] mb-1">
              {config.yearsInBusiness}+
            </div>
            <div className="text-sm text-[var(--color-text-light)] font-[family-name:var(--font-body)]">
              Years Serving {config.address.city}
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--color-accent)] font-[family-name:var(--font-heading)] mb-1">
              {config.carriers.length || '5'}+
            </div>
            <div className="text-sm text-[var(--color-text-light)] font-[family-name:var(--font-body)]">
              Insurance Carriers
            </div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--color-accent)] font-[family-name:var(--font-heading)] mb-1">
              5-Star
            </div>
            <div className="text-sm text-[var(--color-text-light)] font-[family-name:var(--font-body)]">
              Rated on Google
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-8 pb-4">
          <h3 className="font-[family-name:var(--font-heading)] text-[var(--color-text)] text-2xl font-bold mb-3">
            Ready to Save on Insurance?
          </h3>
          <p className="text-[var(--color-text-light)] font-[family-name:var(--font-body)] mb-5">
            Call us now or fill out the form above for a free, no-obligation quote.
          </p>
          <a
            href={`tel:${config.phone}`}
            className="inline-flex items-center gap-3 bg-[var(--color-accent)] text-white px-10 py-5 rounded-[var(--radius-btn)] font-[family-name:var(--font-body)] font-bold text-xl transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[var(--color-accent)]/25"
          >
            <Phone size={24} />
            {config.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
