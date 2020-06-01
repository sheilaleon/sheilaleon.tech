import { Link } from 'gatsby'
import React, { useState } from 'react'
// import MenuIcon from './icons/menu'

const Header = ({ title }) => (
  <header className="container relative flex items-center justify-between">
    <Link to="/" className="text-2xl">
      {title}
    </Link>
    {/* <Link to="/" className="text-2xl">
      Sheila Leon
    </Link>
    <Nav>
      <NavLink url="/about" title="About" />
      <NavLink url="/blog" title="Blog" />
      <NavLink url="/portfolio" title="Portfolio" />
      <NavLink url="/uses" title="Uses" />
      <NavLink url="/now" title="Now" />
      <NavLink url="/contact" title="Contact" />
      <Menu icon={<MenuIcon />}>
        <Dropdown />
      </Menu>
    </Nav> */}
  </header>
)

// function Dropdown() {
//   function DropdownList(props) {
//     return (
//       <a href={props.link} className="text-xl py-3">
//         {props.children}
//       </a>
//     )
//   }
//   return (
//     <div className="md:hidden dropdown bg-martinique shadow-xl absolute top-4 right-0 w-screen flex flex-col items-center p-8">
//       <DropdownList link="/about">About</DropdownList>
//       <DropdownList link="/about">Blog</DropdownList>
//       <DropdownList link="/about">Portfolio</DropdownList>
//       <DropdownList link="/about">Uses</DropdownList>
//       <DropdownList link="/about">Now</DropdownList>
//       <DropdownList link="/about">Contact</DropdownList>
//     </div>
//   )
// }

// function Nav(props) {
//   return (
//     <nav className="flex items-center">
//       <ul className="flex items-center justify-end">{props.children}</ul>
//     </nav>
//   )
// }

// function Menu(props) {
//   const [expand, setExpand] = useState(false)
//   return (
//     <div className="flex items-center">
//       <button className="md:hidden outline-none focus:outline-none" type="button" onClick={() => setExpand(!expand)}>
//         {props.icon}
//       </button>

//       {expand && props.children}
//     </div>
//   )
// }

// function NavLink(props) {
//   return (
//     <li className="hidden md:block px-3 text-lg">
//       <Link to={props.url}>{props.title}</Link>
//     </li>
//   )
// }

export default Header
