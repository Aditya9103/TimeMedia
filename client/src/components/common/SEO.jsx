import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import config from '../../config/env';

export default function SEO({ 
  title, 
  description, 
  name = "Prime Time Research Media", 
  type = "website",
  image = "https://timemedia.in/og-image.jpg",
  schema
}) {
  const location = useLocation();
  const fullTitle = title === name ? title : `${title} | ${name}`;
  
  // Automatically generate exact canonical URL based on the current route
  const currentUrl = `https://timemedia.in${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph tags for Facebook, LinkedIn, etc. */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={currentUrl} />

      {/* Dynamic Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
