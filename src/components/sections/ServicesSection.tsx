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
            Coverage You Can Count On
          </h2>
          <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
            We offer comprehensive insurance solutions to protect every part of your life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
