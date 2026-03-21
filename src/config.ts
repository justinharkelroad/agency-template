import type { AgencyConfig, TemplateName, TeamMember, Service, SocialLinks } from './config.types';

export type { AgencyConfig, TemplateName, TeamMember, Service, SocialLinks };

const config: AgencyConfig = {
  template: 'momentum',

  agencyName: "Maxwell Insurance Agency",
  tagline: "Protecting What Matters Most",
  phone: "5551234567",
  phoneDisplay: "(555) 123-4567",
  email: "info@maxwellinsurance.com",
  address: {
    street: "123 Main Street",
    city: "Springfield",
    state: "TX",
    zip: "75001",
    full: "123 Main Street, Springfield, TX 75001"
  },
  officeHours: "Mon–Fri 9:00 AM – 5:00 PM",
  yearsInBusiness: 15,

  logo: "/images/logo.png",
  heroImage: "/images/hero.jpg",
  galleryImages: [
    "/images/gallery/family-1.jpg",
    "/images/gallery/family-2.jpg",
    "/images/gallery/community.jpg",
    "/images/gallery/office.jpg",
    "/images/gallery/handshake.jpg",
    "/images/gallery/family-3.jpg",
  ],
  colors: {
    primary: "#1A3A5C",
    secondary: "#2E75B6",
    accent: "#C9963B",
    background: "#FFFFFF",
    text: "#1F2937",
    textLight: "#6B7280"
  },

  aboutText: "Maxwell Insurance Agency has been serving the Springfield community for over 15 years. Founded by John Maxwell, our mission is simple: provide honest, personalized insurance solutions that protect what matters most to our neighbors and friends.\n\nWe believe insurance should be straightforward. No jargon, no runaround — just clear answers and coverage that fits your life. Whether you're buying your first car, closing on a home, or growing a business, we're here to make sure you're covered.",
  aboutHighlights: [
    "Locally owned and operated since 2010",
    "Top 10% agency nationwide",
    "Over 2,000 families protected",
    "A+ Better Business Bureau rating"
  ],

  team: [
    {
      name: "John Maxwell",
      title: "Agency Owner",
      bio: "John founded Maxwell Insurance in 2010 with a commitment to treating every client like a neighbor. With 15 years of experience, he specializes in helping families find the right coverage at the right price.",
      image: "/images/team/owner.jpg"
    },
    {
      name: "Sarah Chen",
      title: "Licensed Sales Producer",
      bio: "Sarah brings 8 years of insurance experience and a passion for educating clients on their coverage options. She specializes in home and auto bundles.",
      image: "/images/team/placeholder.jpg"
    }
  ],

  services: [
    { title: "Auto Insurance", description: "Liability, collision, comprehensive, and roadside assistance. We shop multiple carriers to find your best rate.", icon: "Car" },
    { title: "Home Insurance", description: "Protect your biggest investment. Coverage for your home, personal property, and liability — including flood and umbrella options.", icon: "Home" },
    { title: "Life Insurance", description: "Term and whole life options to protect your family's financial future. Free needs analysis included.", icon: "Heart" },
    { title: "Business Insurance", description: "General liability, commercial property, workers' comp, and BOP policies tailored to small businesses.", icon: "Building2" },
    { title: "Renters Insurance", description: "Affordable coverage for your personal belongings, liability, and additional living expenses. Starts at just a few dollars a month.", icon: "Key" },
    { title: "Umbrella Insurance", description: "Extra liability protection beyond your auto and home policies. Essential for protecting your assets.", icon: "Shield" }
  ],

  carriers: ["Allstate", "Progressive", "Safeco", "National General"],

  social: {
    facebook: "https://facebook.com/maxwellinsurance",
    google: "https://g.page/maxwellinsurance"
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!...",

  siteUrl: "https://www.maxwellinsurance.com",
  metaDescription: "Maxwell Insurance Agency in Springfield, TX — trusted local agency offering auto, home, life, and business insurance. Get a free quote today.",
  serviceAreas: ["Dallas", "Fort Worth", "Plano", "Richardson", "Garland", "Mesquite"],

  formspreeId: "xyzabcde"
};

export default config;
