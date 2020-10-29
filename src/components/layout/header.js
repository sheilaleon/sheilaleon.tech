import React from 'react';
import { Link } from 'gatsby';
import { motion, useAnimation } from 'framer-motion';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import Navigation from './navigation';
import useColorScheme from '../../hooks/colorScheme';

import Logo from '../Logo';
import { IconSun } from '../../assets/icons/sun';
import { IconMoon } from '../../assets/icons/moon';

const Brand = () => {
  const { title } = useSiteMetadata();
  return (
    <div>
      <Link to="/" className="logo" title={`Home - ${title}`}>
        <Logo />
      </Link>
    </div>
  );
};

const ColorSchemeToggle = ({ className }) => {
  const controls = useAnimation();
  const [colorScheme, setColorScheme] = useColorScheme();
  return (
    <button
      type="button"
      title="Toggle colour mode"
      onClick={(e) => {
        controls.stop();
        controls.start({
          transition: { duration: 1 },
        });
        setColorScheme(colorScheme === 'default' ? 'dark' : 'default');
        e.currentTarget.blur();
      }}
      className={className}
    >
      <motion.div
        key="dark-mode"
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85 }}
      >
        {colorScheme === 'default' ? (
          <IconMoon className="color-mode dark" />
        ) : (
          <IconSun className="color-mode light" />
        )}
      </motion.div>
    </button>
  );
};

const Header = () => (
  <header>
    <Brand />
    <nav className="navigation">
      <Navigation />
      <ColorSchemeToggle />
    </nav>
  </header>
);

export default Header;
