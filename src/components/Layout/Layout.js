import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import useSiteMetadata from '../../hooks/useSiteMetadata';
import SEO from '../SEO/SEO';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ pageTitle, gardenDescription, children }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <SEO
        pageTitle={pageTitle ? `${pageTitle}` : null}
        gardenDescription={gardenDescription ? `${gardenDescription}` : null}
      />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key="main"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer title={title} />
    </>
  );
};

export default Layout;
