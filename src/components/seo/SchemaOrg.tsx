import { Helmet } from 'react-helmet-async';
import config from '../../config';

export default function SchemaOrg() {
  const sameAs = Object.values(config.social).filter(Boolean);

  // Primary InsuranceAgency schema
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': `${config.siteUrl}/#organization`,
    name: config.agencyName,
    description: config.metaDescription,
    url: config.siteUrl,
    telephone: config.phoneDisplay,
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Placeholder — replace per client or omit
      addressCountry: 'US',
    },
    openingHours: config.officeHours,
    image: config.logo.startsWith('http') ? config.logo : `${config.siteUrl}${config.logo}`,
    logo: config.logo.startsWith('http') ? config.logo : `${config.siteUrl}${config.logo}`,
    sameAs,
    areaServed: [
      {
        '@type': 'City',
        name: `${config.address.city}, ${config.address.state}`,
      },
      ...config.serviceAreas.map((city) => ({
        '@type': 'City',
        name: `${city}, ${config.address.state}`,
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Insurance Services',
      itemListElement: config.services.map((service, i) => ({
        '@type': 'Offer',
        '@id': `${config.siteUrl}/#service-${i}`,
        name: service.title,
        description: service.description,
      })),
    },
    priceRange: '$$',
  };

  // WebSite schema for sitelinks search
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${config.siteUrl}/#website`,
    name: config.agencyName,
    url: config.siteUrl,
    publisher: { '@id': `${config.siteUrl}/#organization` },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  );
}
