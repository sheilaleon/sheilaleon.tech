// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Skills from '../components/skills'
import Projects from "../components/projects";

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
