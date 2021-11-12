import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const Brand = ({ title }) => (
  <>
    <Link to="/" className="logo" title={`Home - ${title}`}>
      <Logo
        stopColourStart="(--colour-primary)"
        stopColourEnd="(--colour-secondary)"
      />
    </Link>
  </>
);

export default Brand;
