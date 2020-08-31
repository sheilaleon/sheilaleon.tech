import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { description } = data.site.siteMetadata;

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} description={description} />
      <section
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
