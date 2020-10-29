import React from 'react';
import SocialLogo from 'social-logos';
import { motion, useAnimation } from 'framer-motion';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const SocialLinks = () => {
  const { socialLinks } = useSiteMetadata();
  const controls = useAnimation();

  return (
    <div className="social-icons">
      {socialLinks &&
        socialLinks.map((link) => (
          <motion.a
            href={link.link}
            key={link.label}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
            animate={controls}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            <SocialLogo icon={link.icon} size={24} className="social-icon" />
          </motion.a>
        ))}
    </div>
  );
};

export default SocialLinks;
