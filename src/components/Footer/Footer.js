import React from 'react';

const Footer = ({ title }) => (
  <footer>
    <span className="text-sm">
      © {new Date().getFullYear()} {title}
    </span>
  </footer>
);

export default Footer;
