import React from 'react';

const Footer = () => (
  <footer>
    <p>
      Built with ♥ using{' '}
      <a href="https://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
        Gatsby
      </a>{' '}
      &amp;{' '}
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        Vercel
      </a>
    </p>
    <p>© {new Date().getFullYear()} Sheila Leon</p>
  </footer>
);

export default Footer;
