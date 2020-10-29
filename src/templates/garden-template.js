import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
// import SEO from '../components/SEO';

const GardenPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout
      location={location}
      pageTitle={post.frontmatter.title}
      gardenDescription={post.frontmatter.description || post.excerpt}
    >
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      <h1>{post.frontmatter.title}</h1>
      <p className="italic">{post.frontmatter.date}</p>
      <article
        /* eslint-disable */
        dangerouslySetInnerHTML={{ __html: post.html }}
        /* eslint-enable */
      />

      {/* <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default GardenPostTemplate;

export const pageQuery = graphql`
  query GardenPostBySlug($slug: String!) {
    # site {
    #   siteMetadata {
    #     title
    #   }
    # }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        posttype
      }
    }
  }
`;
