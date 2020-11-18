// eslint-disable-next-line
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // const blogPost = path.resolve(`./src/templates/blog-post-template.js`);
  const gardenPost = path.resolve(`./src/templates/garden-template.js`);

  const result = await graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
                category
                posttype
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create Garden pages.
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    if (edge.node.frontmatter.posttype === 'garden') {
      createPage({
        path: `/the-garden${edge.node.fields.slug}`,
        component: gardenPost,
        context: {
          slug: edge.node.fields.slug,
          category: edge.node.frontmatter.category,
        },
      });
      // } else {
      //   // blog post
      //   createPage({
      //     path: `/blog${edge.node.fields.slug}`,
      //     component: blogPost,
      //     context: {
      //       slug: edge.node.fields.slug,
      //       category: edge.node.frontmatter.category,
      //     },
      //   });
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
