import { Link } from 'gatsby';
import React from 'react';

const Header = ({ title }) => (
  <header className="container relative flex items-center justify-between">
    <Link to="/" className="text-2xl">
      {title}
    </Link>
  </header>
);

export default Header;
