import React from 'react';
import { Link } from 'gatsby';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import ToggleColourScheme from '../Layout/ToggleColourScheme';
import Brand from '../Brand/Brand';

const Header = () => {
  const { title, navigationLinks } = useSiteMetadata();
  return (
    <header>
      <section>
        <Brand title={title} />
        <nav className="navigation">
          <ul className="nav-links">
            {navigationLinks &&
              navigationLinks.map((link) => (
                <li>
                  <Link
                    key={link.label}
                    to={link.link}
                    title={link.label}
                    activeClassName="active"
                    partiallyActive
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
          <ToggleColourScheme className="colour-mode" />
          <button id="ico-menu" className="open" type="button">
            <span>Menu</span>
          </button>
        </nav>
      </section>
    </header>
  );
};

export default Header;
