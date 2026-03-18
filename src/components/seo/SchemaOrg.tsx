import { Helmet } from 'react-helmet-async';
import config from '../../config';

export default function SchemaOrg() {
  const sameAs = Object.values(config.social).filter(Boolean);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
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
    openingHours: config.officeHours,
    image: `${config.siteUrl}${config.logo}`,
    sameAs,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
