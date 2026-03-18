import config from '../config';
import SEOHead from '../components/seo/SEOHead';
import AboutSection from '../components/sections/AboutSection';
import TeamSection from '../components/sections/TeamSection';
import CTABanner from '../components/sections/CTABanner';

export default function AboutPage() {
  return (
    <>
      <SEOHead title={`About Us | ${config.agencyName}`} path="/about" />
      {/* Page header banner */}
      <section className="bg-[var(--color-primary)] pt-28 pb-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl">
            About Us
          </h1>
        </div>
      </section>
      <AboutSection />
      <TeamSection />
      <CTABanner />
    </>
  );
}
