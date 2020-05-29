import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ location, title, children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
