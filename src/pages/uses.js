import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const usesPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} description={description} />
      <h1>Uses</h1>
      <p>Hola!</p>
    </Layout>
  );
};

export default usesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
