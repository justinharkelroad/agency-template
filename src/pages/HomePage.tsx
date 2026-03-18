import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTABanner from '../components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title={`${config.agencyName} | ${config.tagline}`}
        path="/"
      />
      <Hero />
      <AboutSection condensed />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
