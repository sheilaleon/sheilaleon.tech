import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ title, children }) => (
  <>
    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
