// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Skills from "../components/skills"
import Projects from "../components/projects"

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
  // allMarkdownRemark: {
  //   edges: {
  //     node: {
  //       excerpt: string
  //       frontmatter: {
  //         title: string
  //         date: string
  //         description: string
  //       }
  //       fields: {
  //         slug: string
  //       }
  //     }
  //   }[]
  // }
}

const Index = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} description={description} />
      <Hero />
      <section className="py-8 max-w-screen-lg">
        <p>🖖🏼 Hello, I'm Sheila!</p>
        <p>I specialise in user interfaces, customer experience, visual design and product strategy.</p>
        <p>Currently, I am making the career transition to a full stack developer as part of my “always learning” commitment to myself.</p>
        <p>I am available for freelance/contract projects and consultation.</p>
      </section>
      <Skills />
      <Projects />
    </Layout>
  )
}

export default Index

// const BlogIndex = ({ data, location }: PageProps<Data>) => {
//   const siteTitle = data.site.siteMetadata.title
//   const posts = data.allMarkdownRemark.edges

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title="All posts" />
//       {posts.map(({ node }) => {
//         const title = node.frontmatter.title || node.fields.slug
//         return (
//           <article key={node.fields.slug}>
//             <div>
//               <h3
//               >
//                 <Link to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//             </div>
//             <section>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: node.frontmatter.description || node.excerpt,
//                 }}
//               />
//             </section>
//           </article>
//         )
//       })}
//     </Layout>
//   )
// }

// export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   edges {
    #     node {
    #       excerpt
    #       fields {
    #         slug
    #       }
    #       frontmatter {
    #         date(formatString: "MMMM DD, YYYY")
    #         title
    #         description
    #       }
    #     }
    #   }
    # }
  }
`
