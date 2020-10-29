import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../SEO';
import Header from './header';
import Footer from './footer';

const Layout = ({ pageTitle, gardenDescription, children }) => (
  <div className="flex-container">
    <SEO
      pageTitle={pageTitle ? `${pageTitle}` : null}
      gardenDescription={gardenDescription ? `${pageTitle}` : null}
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
    <Footer />
  </div>
);

export default Layout;
