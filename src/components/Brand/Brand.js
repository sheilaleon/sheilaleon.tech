import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const Brand = ({ title }) => (
  <div>
    <Link to="/" className="logo" title={`Home - ${title}`}>
      <Logo
        stopColourStart="(--colour-logo)"
        stopColourEnd="(--colour-logoSecondary)"
      />
    </Link>
  </div>
);

export default Brand;
