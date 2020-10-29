import React from 'react';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Footer = () => {
  const { title } = useSiteMetadata();

  return (
    <footer>
      <span className="text-sm">
        © {new Date().getFullYear()} {title}
      </span>
    </footer>
  );
};

export default Footer;
