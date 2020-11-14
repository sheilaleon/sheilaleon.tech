import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/lay-out/Layout';

const GardenPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  console.log('location :>> ', location);
  console.log('pageContext :>> ', pageContext);

  return (
    <Layout
      location={location}
      pageTitle={`The Garden: ${post.frontmatter.title}`}
      gardenDescription={post.frontmatter.description}
    >
      <h1>{post.frontmatter.title}</h1>
      <p className="text-xs">
        {post.frontmatter.date}
        {` • `}
        {pageContext.category}
      </p>
      <article
        className="post"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <nav className="mt-8">
        <ul className="list-none">
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
      </nav>
    </Layout>
  );
};

export default GardenPostTemplate;

export const pageQuery = graphql`
  query GardenPostBySlug($slug: String!) {
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
