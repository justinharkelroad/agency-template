import { Helmet } from 'react-helmet-async';
import config from '../../config';

interface SEOHeadProps {
  title: string;
  description?: string;
  path: string;
}

export default function SEOHead({ title, description, path }: SEOHeadProps) {
  const desc = description || config.metaDescription;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${config.siteUrl}${path}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${config.siteUrl}${path}`} />
      <meta property="og:image" content={`${config.siteUrl}${config.heroImage}`} />
      <meta property="og:site_name" content={config.agencyName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
