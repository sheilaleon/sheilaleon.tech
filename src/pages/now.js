import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Now = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} description={description} />
      <section
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{
          __html: data.nowJson.content.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

Now.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Now;

export const query = graphql`
  query NowQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    nowJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
