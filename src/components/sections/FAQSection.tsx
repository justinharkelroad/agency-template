import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import config from '../../config';

/**
 * FAQ Section — SEO-rich, auto-generated from agency config.
 * These questions are pre-built for insurance agencies
 * and inject the agency's city/name for local SEO.
 */
const getFAQs = () => [
  {
    q: `What types of insurance does ${config.agencyName} offer?`,
    a: `We offer ${config.services.map(s => s.title.toLowerCase()).join(', ')}, and more. Every policy is tailored to your specific needs, and we'll help you find the right coverage at the best price.`,
  },
  {
    q: `How do I get a free insurance quote in ${config.address.city}?`,
    a: `Getting a quote is easy — fill out our quick online form, or call us at ${config.phoneDisplay}. We'll review your needs, compare options from our carrier partners, and get back to you within the hour during business hours.`,
  },
  {
    q: `Do I need to switch my current insurance to work with you?`,
    a: `Not necessarily. We can review your current policies at no cost and let you know if we can find better coverage or savings. There's never any obligation.`,
  },
  {
    q: `What areas do you serve?`,
    a: `We're based in ${config.address.city}, ${config.address.state} and proudly serve ${config.serviceAreas.join(', ')}, and surrounding communities.`,
  },
  {
    q: `How quickly can I get coverage?`,
    a: `In many cases, we can have your policy active the same day. Call us at ${config.phoneDisplay} for the fastest service, or submit a quote request online and we'll follow up promptly.`,
  },
  {
    q: `Can I bundle my auto and home insurance?`,
    a: `Yes! Bundling is one of the best ways to save. We specialize in finding multi-policy discounts that can significantly reduce your premiums while increasing your coverage.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = getFAQs();

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="uppercase text-[var(--color-accent)] tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--color-text)] mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-[var(--color-surface)] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-text)] pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[var(--color-text-light)] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-[var(--color-text-light)] leading-relaxed font-[family-name:var(--font-body)]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Inject FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </div>
    </section>
  );
}
