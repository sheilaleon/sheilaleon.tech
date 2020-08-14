import { Link } from 'gatsby'
import React from 'react'

const Header = ({ title }) => (
  <header className="container">
    <Link to="/" className="logo">
      {title}
    </Link>
  </header>
)

export default Header
