import { Star } from 'lucide-react';
import config from '../../config';

export default function TestimonialsSection() {
  if (!config.testimonials || config.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-[var(--section-padding)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="uppercase text-[var(--color-accent)] tracking-[3px] font-[family-name:var(--font-body)] font-semibold text-sm">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[var(--color-text)] mt-3">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {config.testimonials.slice(0, 3).map((testimonial, i) => (
            <blockquote
              key={i}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={20}
                    className={
                      j < testimonial.rating
                        ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                        : 'text-[var(--color-border)]'
                    }
                  />
                ))}
              </div>
              <p className="italic font-[family-name:var(--font-body)] text-[1.1rem] text-[var(--color-text)] mb-4">
                "{testimonial.quote}"
              </p>
              <cite className="not-italic text-[var(--color-text-light)] text-sm">
                — {testimonial.name}, {testimonial.location}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
