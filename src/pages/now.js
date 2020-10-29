import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';

const Now = ({ data }) => (
  <Layout pageTitle="Now">
    <section
      /* eslint-disable */
      dangerouslySetInnerHTML={{
        __html: data.nowJson.content.childMarkdownRemark.html,
      }}
      /* eslint-enable */
    />
  </Layout>
);

Now.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Now;

export const query = graphql`
  query NowQuery {
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
