import { useState, type FormEvent } from 'react';
import config from '../../config';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-[560px] text-center py-12">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[var(--color-text)] mb-4">
          Thank you!
        </h3>
        <p className="text-[var(--color-text-light)] mb-4">
          We'll be in touch within 24 hours.
        </p>
        <a
          href={`tel:${config.phone}`}
          className="text-[var(--color-accent)] font-semibold hover:underline"
        >
          Or call us now: {config.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[560px] space-y-5">
      <div>
        <label htmlFor="name" className="block font-[family-name:var(--font-body)] font-medium text-[0.875rem] text-[var(--color-text)] mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your full name"
          className="w-full border border-[var(--color-border)] rounded-lg py-3 px-4 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-[family-name:var(--font-body)] font-medium text-[0.875rem] text-[var(--color-text)] mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email@example.com"
          className="w-full border border-[var(--color-border)] rounded-lg py-3 px-4 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-[family-name:var(--font-body)] font-medium text-[0.875rem] text-[var(--color-text)] mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="^\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$"
          placeholder="(555) 123-4567"
          className="w-full border border-[var(--color-border)] rounded-lg py-3 px-4 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        />
      </div>

      <div>
        <label htmlFor="insurance-type" className="block font-[family-name:var(--font-body)] font-medium text-[0.875rem] text-[var(--color-text)] mb-1">
          Insurance Type
        </label>
        <select
          id="insurance-type"
          name="insurance-type"
          className="w-full border border-[var(--color-border)] rounded-lg py-3 px-4 text-[var(--color-text)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        >
          <option value="">Select a type...</option>
          {config.services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-[family-name:var(--font-body)] font-medium text-[0.875rem] text-[var(--color-text)] mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us how we can help..."
          className="w-full border border-[var(--color-border)] rounded-lg py-3 px-4 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] resize-y"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please call us at{' '}
          <a href={`tel:${config.phone}`} className="underline">
            {config.phoneDisplay}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[var(--color-accent)] text-white py-3 rounded-lg font-semibold font-[family-name:var(--font-body)] transition-all duration-200 hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending...' : 'Get Your Free Quote'}
      </button>
    </form>
  );
}
