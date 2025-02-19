import React from 'react'
import "./NavBar.css"

import styled from 'styled-components'



function NavBar() {
  const NavbarLogo =styled.div `
   font-size: 1.5rem;
    font-weight: bold;
  `
  return (
    <NavbarLogo>Fruitopia 🍓🍉🍒🍎🍑</NavbarLogo>
  )
}

export default NavBar;