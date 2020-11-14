import React from 'react';
import { motion, useAnimation } from 'framer-motion';

import useColourScheme from '../../hooks/colourScheme';
import Icon from '../../utils/Icon';

const ToggleColourScheme = ({ className }) => {
  const controls = useAnimation();
  const [colourScheme, setColourScheme] = useColourScheme();
  return (
    <button
      type="button"
      title={colourScheme === 'default' ? 'Dark Mode' : 'Light Mode'}
      onClick={(e) => {
        controls.stop();
        controls.start({
          transition: { duration: 1 },
        });
        setColourScheme(colourScheme === 'default' ? 'dark' : 'default');
        e.currentTarget.blur();
      }}
      className={className}
    >
      <motion.div
        key="dark-mode"
        animate={controls}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.85 }}
      >
        {colourScheme === 'default' ? (
          <Icon name="moon" className="dark" />
        ) : (
          <Icon name="sun" className="light" />
        )}
      </motion.div>
    </button>
  );
};

export default ToggleColourScheme;
