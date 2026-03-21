export type TemplateName = 'heritage' | 'momentum' | 'prestige' | 'lifeness' | 'seguro' | 'safeon' | 'apex' | 'cornerstone' | 'summit' | 'vanguard' | 'forge' | 'meridian' | 'starter';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLinks {
  facebook?: string;
  google?: string;
  instagram?: string;
  linkedin?: string;
  yelp?: string;
}

export interface AgencyConfig {
  // === TEMPLATE ===
  template: TemplateName;

  // === AGENCY IDENTITY ===
  agencyName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  officeHours: string;
  yearsInBusiness: number;

  // === BRAND ===
  logo: string;
  heroImage: string;
  galleryImages?: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textLight: string;
  };

  // === CONTENT ===
  aboutText: string;
  aboutHighlights: string[];
  team: TeamMember[];
  services: Service[];
  carriers: string[];
  testimonials?: Array<{ quote: string; name: string; location: string; rating: number }>;

  // === SOCIAL ===
  social: SocialLinks;
  googleMapsEmbedUrl: string;

  // === SEO / GEO ===
  siteUrl: string;
  metaDescription: string;
  serviceAreas: string[];

  // === FORMS ===
  formspreeId: string;

  // === ANALYTICS ===
  gaMeasurementId?: string;
  googleAdsId?: string;        // e.g. "AW-1234567890"
  googleAdsCallLabel?: string;  // e.g. "AbCdEf" — conversion label for call clicks
  googleAdsFormLabel?: string;  // e.g. "GhIjKl" — conversion label for form submits
}
