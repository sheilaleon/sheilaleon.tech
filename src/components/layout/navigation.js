import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const Navigation = () => {
  const { navigationLinks } = useSiteMetadata();

  return (
    <div className="nav-links">
      {navigationLinks &&
        navigationLinks.map((link) => (
          <Link
            key={link.label}
            to={link.link}
            title={link.label}
            activeClassName="active"
            partiallyActive={link.link !== '/'}
          >
            {link.label}
          </Link>
        ))}
    </div>
  );
};

export default Navigation;
