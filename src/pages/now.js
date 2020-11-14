import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

const Now = ({ data }) => (
  <Layout pageTitle="Now">
    <section
      className="pages"
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{
        __html: data.nowJson.content.childMarkdownRemark.html,
      }}
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
