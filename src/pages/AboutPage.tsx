import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';
import CTABanner from '../components/sections/CTABanner';
import ClickToCall from '../components/ui/ClickToCall';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title={`About ${config.agencyName} | Insurance Agency in ${config.address.city}, ${config.address.state}`}
        description={`Learn about ${config.agencyName} — serving ${config.address.city}, ${config.address.state} for ${config.yearsInBusiness}+ years. Meet our team and discover why families trust us with their insurance needs.`}
        path="/about"
      />
      {/* Page header banner */}
      <section className="bg-[var(--color-primary)] pt-28 pb-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
            About {config.agencyName}
          </h1>
          <p className="text-white/70 mt-3 font-[family-name:var(--font-body)]">
            Serving {config.address.city} and the surrounding community for {config.yearsInBusiness}+ years
          </p>
        </div>
      </section>
      <AboutSection />
      <TeamSection />
      <CTABanner />
      <ClickToCall variant="floating" />
    </>
  );
}
