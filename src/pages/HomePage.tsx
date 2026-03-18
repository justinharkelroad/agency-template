import config from '../config';
import { getTemplate } from '../templates/registry';
import SEOHead from '../components/seo/SEOHead';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import CTABanner from '../components/sections/CTABanner';
import ClickToCall from '../components/ui/ClickToCall';

export default function HomePage() {
  const { Hero } = getTemplate(config.template);

  return (
    <>
      <SEOHead
        title={`${config.agencyName} | ${config.tagline} | ${config.address.city}, ${config.address.state}`}
        description={`${config.agencyName} in ${config.address.city}, ${config.address.state} — your trusted local insurance agency. Get free quotes for auto, home, life, and business insurance. Call ${config.phoneDisplay} today.`}
        path="/"
      />
      <Hero />
      <AboutSection condensed />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <ClickToCall variant="floating" />
    </>
  );
}
