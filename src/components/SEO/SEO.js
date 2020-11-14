import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

import useSiteMetadata from '../../hooks/useSiteMetadata';

const SEO = ({ pageTitle, gardenDescription, article }) => {
  const { pathname } = useLocation();
  const {
    title,
    description,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title,
    pageTitle,
    description: gardenDescription || description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={
        seo.pageTitle === null
          ? `${seo.title}`
          : `${seo.pageTitle} | ${seo.title}`
      }
      titleTemplate={
        seo.pageTitle === null
          ? `${seo.title}`
          : `${seo.pageTitle} | ${seo.title}`
      }
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.pageTitle} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
