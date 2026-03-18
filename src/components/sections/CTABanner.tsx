import { Link } from 'react-router-dom';
import config from '../../config';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="bg-[var(--color-primary)] py-16 text-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl mb-4">
          Ready to Protect What Matters?
        </h2>
        <p className="font-[family-name:var(--font-body)] text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Get a personalized quote in minutes. No obligation, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Get Your Free Quote
            </Button>
          </Link>
          <Button variant="outline" size="lg" href={`tel:${config.phone}`}>
            Call {config.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
