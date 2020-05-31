import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ title, children }) => (
  <div>
    <Header title={title} />
    <main className="container">{children}</main>
    <Footer />
  </div>
)

export default Layout
