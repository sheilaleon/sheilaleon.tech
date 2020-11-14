import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

const Uses = ({ data }) => (
  <Layout pageTitle="Uses">
    <section
      className="pages"
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{
        __html: data.usesJson.content.childMarkdownRemark.html,
      }}
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
