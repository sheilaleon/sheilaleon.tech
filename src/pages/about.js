import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

const About = ({ data }) => (
  <Layout pageTitle="About">
    <section
      /* eslint-disable */
      dangerouslySetInnerHTML={{
        __html: data.aboutJson.content.childMarkdownRemark.html,
      }}
      /* eslint-enable */
    />
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
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
