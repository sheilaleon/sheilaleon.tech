import React from 'react';
import { Link, graphql } from 'gatsby';

import Icon from '../utils/Icon';
import Layout from '../components/lay-out/Layout';

const GardenIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout pageTitle="The Garden">
      <section>
        <h1>The Garden</h1>
        <p>
          A collection of posts, ideas and random information I find worth
          growing, collecting and tending to.
        </p>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <ul key={node.fields.slug} className="garden-list">
              <li>
                <Link
                  to={`/the-garden${node.fields.slug}`}
                  className="garden-link"
                >
                  <Icon name="file" className="mr-4 inline-block" />
                  <span>{title}</span>
                </Link>
              </li>
            </ul>
          );
        })}
      </section>
    </Layout>
  );
};

export default GardenIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/the-garden/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            category
            posttype
            tags
          }
        }
      }
    }
  }
`;
