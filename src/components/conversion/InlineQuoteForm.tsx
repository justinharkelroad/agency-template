import { useState, type FormEvent } from 'react';
import { Phone } from 'lucide-react';
import config from '../../config';

interface InlineQuoteFormProps {
  /** Visual variant for different template contexts */
  variant?: 'light' | 'dark' | 'card';
}

/**
 * Short 4-field lead capture form for embedding in hero sections
 * and homepage CTAs. This is the primary lead capture tool.
 *
 * Fields: Name, Phone, Insurance Type, ZIP
 */
export default function InlineQuoteForm({ variant = 'light' }: InlineQuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    // Include agency context so the agent knows which lead this is
    data.append('agency', config.agencyName);
    data.append('source', 'inline-quote-form');

    try {
      const res = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            event_category: 'lead',
            event_label: 'quote_form_submit',
            value: 1,
          });
        }
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const isDark = variant === 'dark';
  const isCard = variant === 'card';

  const inputClasses = isDark
    ? 'w-full bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-[var(--radius-sm)] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]'
    : 'w-full bg-white border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-light)] rounded-[var(--radius-sm)] py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]';

  const labelClasses = isDark
    ? 'block text-sm font-medium text-white/80 mb-1 font-[family-name:var(--font-body)]'
    : 'block text-sm font-medium text-[var(--color-text)] mb-1 font-[family-name:var(--font-body)]';

  if (submitted) {
    return (
      <div className={`text-center py-8 ${isCard ? 'bg-white rounded-[var(--radius-lg)] p-8 shadow-lg' : ''}`}>
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`font-[family-name:var(--font-heading)] text-xl mb-2 ${isDark ? 'text-white' : 'text-[var(--color-text)]'}`}>
          We'll Be Right With You!
        </h3>
        <p className={`text-sm mb-3 ${isDark ? 'text-white/70' : 'text-[var(--color-text-light)]'}`}>
          Expect a call within the hour during business hours.
        </p>
        <a
          href={`tel:${config.phone}`}
          className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
        >
          <Phone size={16} />
          Or call us now: {config.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={isCard ? 'bg-white rounded-[var(--radius-lg)] p-6 md:p-8 shadow-lg' : ''}
    >
      {isCard && (
        <h3 className="font-[family-name:var(--font-heading)] text-xl text-[var(--color-text)] mb-1">
          Get Your Free Quote
        </h3>
      )}
      {isCard && (
        <p className="text-[var(--color-text-light)] text-sm mb-5">
          Takes 30 seconds. We'll call you back fast.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="iq-name" className={labelClasses}>Name</label>
          <input
            type="text"
            id="iq-name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="iq-phone" className={labelClasses}>Phone</label>
          <input
            type="tel"
            id="iq-phone"
            name="phone"
            required
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="iq-type" className={labelClasses}>Insurance Type</label>
          <select
            id="iq-type"
            name="insurance-type"
            className={`${inputClasses} ${isDark ? 'bg-white/10' : 'bg-white'}`}
          >
            <option value="">Select type...</option>
            {config.services.map((s) => (
              <option key={s.title} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="iq-zip" className={labelClasses}>ZIP Code</label>
          <input
            type="text"
            id="iq-zip"
            name="zip"
            required
            maxLength={5}
            placeholder={config.address.zip}
            className={inputClasses}
          />
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm mt-2">
          Something went wrong. Call us at{' '}
          <a href={`tel:${config.phone}`} className="underline">{config.phoneDisplay}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-4 bg-[var(--color-accent)] text-white py-3.5 rounded-[var(--radius-btn)] font-semibold font-[family-name:var(--font-body)] text-[1rem] transition-all duration-200 hover:bg-[var(--color-accent-hover)] hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {submitting ? 'Sending...' : 'Get My Free Quote →'}
      </button>

      <p className={`text-xs mt-2 text-center ${isDark ? 'text-white/50' : 'text-[var(--color-text-light)]'}`}>
        No spam. No obligation. Just a quick quote.
      </p>
    </form>
  );
}
