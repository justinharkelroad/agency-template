import { Helmet } from 'react-helmet-async';
import config from '../../config';

interface SEOHeadProps {
  title: string;
  description?: string;
  path: string;
}

export default function SEOHead({ title, description, path }: SEOHeadProps) {
  const desc = description || config.metaDescription;

  // Geo meta tags for local SEO
  const geoRegion = `US-${config.address.state}`;
  const geoPlaceName = `${config.address.city}, ${config.address.state}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${config.siteUrl}${path}`} />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlaceName} />
      <meta name="geo.position" content={`${config.address.zip}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${config.siteUrl}${path}`} />
      <meta property="og:image" content={config.heroImage.startsWith('http') ? config.heroImage : `${config.siteUrl}${config.heroImage}`} />
      <meta property="og:site_name" content={config.agencyName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
