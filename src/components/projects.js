import React from 'react'

import GitHubLinkIcon from './icons/github-link'
import ExternalLinkIcon from './icons/external-link'

const Projects = () => (
  <section className="py-8 max-w-screen-lg">
    <h2>Projects</h2>
    <div className="grid md:grid-cols-2 gap-2 row-gap-16">
      <div className="project pr-16">
        <h3>A re-creation of Kickstarter's Recommendations Page</h3>
        <p className="text-sm">
          A fun day project of re-creating an existing website to get familiar with{' '}
          <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank">
            Tailwind CSS
          </a>{' '}
          and{' '}
          <a href="https://nextjs.org" rel="noopener noreferrer" target="_blank">
            Next.js
          </a>{' '}
          with the focus of mobile first.
        </p>
        <ul className="tags flex flex-wrap items-center">
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel Now</li>
        </ul>
        <div className="preview-links flex items-center">
          <a
            href="https://github.com/sheilaleon/recreate-kickstarter-recommendations"
            rel="noopener noreferrer"
            target="_blank"
            className="preview flex items-center"
          >
            <GitHubLinkIcon className="w-12" />
            <span>View on GitHub</span>
          </a>
          <a
            href="https://recreate-kickstarter-recommendations.now.sh/"
            rel="noopener noreferrer"
            target="_blank"
            className="preview flex items-center"
          >
            <ExternalLinkIcon />
            <span>View Demo</span>
          </a>
        </div>
      </div>
      <div className="project pr-16">
        <h3>SheilaLeon.tech</h3>
        <p className="text-sm">This site! Built with Gatsby, Tailwind CSS and Storybook UI. Deployed using Vercel.</p>
        <ul className="tags flex flex-wrap items-center">
          <li>GatsbyJS</li>
          <li>Tailwind CSS</li>
          <li>Storybook UI</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel Now</li>
        </ul>
        <div className="preview-links grid grid-cols-2 gap-2">
          <a
            href="https://github.com/sheilaleon/sheilaleon.tech"
            rel="noopener noreferrer"
            target="_blank"
            className="preview flex items-center"
          >
            <GitHubLinkIcon className="w-12" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Projects
