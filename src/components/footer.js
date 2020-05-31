import React from 'react'

const Footer = () => (
  <footer className="container">
    <p>
      Built with ♥ using{' '}
      <a href="https://gatsbyjs.org/" rel="noopener noreferrer">
        Gatsby
      </a>{' '}
      &amp;{' '}
      <a href="https://vercel.com/" rel="noopener noreferrer">
        Vercel
      </a>
    </p>
    <p>© {new Date().getFullYear()} Sheila Leon</p>
  </footer>
)

export default Footer
