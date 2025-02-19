import React from 'react'
import "./NavBar.css"

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


function NavBar() {
  const NavbarLogo =styled.div `
   font-size: 1.5rem;
    font-weight: bold;
  `
  return (
    <div className="navbar">
    <div className="navbar-logo">Fruitopia 🍓🍉🍒🍎🍑</div>
<div className="navbar-menu">
<NavLink to="/">Home</NavLink>
<NavLink to ="/about">About</NavLink>
<NavLink to = "/search">Search</NavLink>
<NavLink to ="/contact">Contact</NavLink>
</div>
    </div>
  )
}

export default NavBar;