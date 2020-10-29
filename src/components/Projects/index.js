import React from 'react';

import GitHubLinkIcon from '../icons/github-link';
import ExternalLinkIcon from '../icons/external-link';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-list">
      <div className="project" id="project-tile">
        <h4>
          <a
            href="https://recreate-kickstarter-recommendations.now.sh/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kickstarter's Recommendations Clone
          </a>
        </h4>
        <p className="text-sm">
          A fun day project of re-creating an existing website to get familiar
          with Tailwind CSS and Next.js with the focus of mobile first.
        </p>
        <ul className="tags">
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel Now</li>
        </ul>
        <div className="preview">
          <a
            href="https://github.com/sheilaleon/recreate-kickstarter-recommendations"
            rel="noopener noreferrer"
            target="_blank"
            className="preview preview-link"
          >
            <GitHubLinkIcon className="preview-icon" />
            <span>View on GitHub</span>
          </a>
          <a
            href="https://recreate-kickstarter-recommendations.now.sh/"
            rel="noopener noreferrer"
            target="_blank"
            className="preview preview-link"
          >
            <ExternalLinkIcon className="preview-icon" />
            <span>View Demo</span>
          </a>
        </div>
      </div>
      <div className="project">
        <h4>
          <a href="/">sheilaleon.tech</a>
        </h4>
        <p className="text-sm">
          This site and very much still a WIP. Built with Gatsby, Tailwind CSS
          and Storybook UI. Deployed using Vercel.
        </p>
        <ul className="tags">
          <li>GatsbyJS</li>
          <li>Tailwind CSS</li>
          <li>Storybook UI</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vercel Now</li>
        </ul>
        <div className="preview">
          <a
            href="https://github.com/sheilaleon/sheilaleon.tech"
            rel="noopener noreferrer"
            target="_blank"
            className="preview preview-link"
          >
            <GitHubLinkIcon className="preview-icon" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
