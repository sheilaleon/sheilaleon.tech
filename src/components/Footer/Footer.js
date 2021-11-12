import React from 'react';

const Footer = ({ title }) => (
  <footer>
    <section>
      <span className="text-sm">
        © {new Date().getFullYear()} {title}
      </span>
    </section>
  </footer>
);

export default Footer;
