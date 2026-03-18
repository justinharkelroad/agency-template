import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../../config';

interface AboutSectionProps {
  condensed?: boolean;
}

export default function AboutSection({ condensed = false }: AboutSectionProps) {
  const paragraphs = config.aboutText.split('\n\n');
  const displayText = condensed ? [paragraphs[0]] : paragraphs;

  return (
    <section className="py-[var(--section-padding)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column — text */}
          <div>
            <span className="uppercase text-[var(--color-accent)] tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--color-text)] mt-3 mb-6">
              Your Local Insurance Partner
            </h2>
            <div className="space-y-4">
              {displayText.map((p, i) => (
                <p key={i} className="text-[var(--color-text-light)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            {condensed && (
              <Link
                to="/about"
                className="inline-block mt-6 text-[var(--color-accent)] font-medium hover:underline"
              >
                Learn More →
              </Link>
            )}
          </div>

          {/* Right column — highlights */}
          <div className="space-y-4">
            {config.aboutHighlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mt-0.5">
                  <Check size={18} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-[var(--color-text)] font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
