import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const aboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} description={description} />
      <h1>About</h1>
      <p>Hola!</p>
    </Layout>
  );
};

export default aboutPage;

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