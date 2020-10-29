import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout/layout';

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
            <article key={node.fields.slug}>
              <h3>
                <Link
                  to={`/the-garden${node.fields.slug}`}
                  className="flex items-center"
                >
                  <svg
                    className="mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>{' '}
                  {title}
                </Link>
              </h3>
            </article>
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
