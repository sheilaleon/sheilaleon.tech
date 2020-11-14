import React from 'react';
import { Link } from 'gatsby';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import ToggleColourScheme from '../lay-out/ToggleColourScheme';
import Brand from '../Brand/Brand';

const Header = () => {
  const { title, navigationLinks } = useSiteMetadata();
  return (
    <header>
      <Brand title={title} />
      <nav className="navigation">
        <div className="nav-links">
          {navigationLinks &&
            navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.link}
                title={link.label}
                activeClassName="active"
                partiallyActive
              >
                {link.label}
              </Link>
            ))}
        </div>
        <ToggleColourScheme className="colour-mode" />
      </nav>
    </header>
  );
};

export default Header;
