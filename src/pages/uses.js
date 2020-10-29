import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

const Uses = ({ data }) => (
  <Layout pageTitle="Uses">
    <section
      /* eslint-disable */
      dangerouslySetInnerHTML={{
        __html: data.usesJson.content.childMarkdownRemark.html,
      }}
      /* eslint-enable */
    />
  </Layout>
);

Uses.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Uses;

export const query = graphql`
  query UsesQuery {
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
