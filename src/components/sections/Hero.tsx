import { Link } from 'react-router-dom';
import config from '../../config';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${config.heroImage})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/70 to-[var(--color-primary)]/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1
          className="font-[family-name:var(--font-heading)] font-normal text-white mb-6 animate-[fadeSlideUp_800ms_ease-out_both]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          {config.agencyName}
        </h1>
        <p
          className="font-[family-name:var(--font-body)] text-white/90 mb-10 animate-[fadeSlideUp_800ms_ease-out_200ms_both]"
          style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
        >
          {config.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeSlideUp_800ms_ease-out_400ms_both]">
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Get a Free Quote
            </Button>
          </Link>
          <Button variant="outline" size="lg" href={`tel:${config.phone}`}>
            Call Us: {config.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
