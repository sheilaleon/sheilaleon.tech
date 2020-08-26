import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Uses = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} description={description} />
      <section
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{
          __html: data.usesJson.content.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

Uses.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Uses;

export const query = graphql`
  query UsesQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    usesJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
