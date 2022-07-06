import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements'

const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/home'>ROJØ RECORDS</NavLogo>
          <MobileIcon onClick={toggle} isOpen={isOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/tracklist'>Tracks</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/about'>Über uns</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='service'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signin'>Login</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink>
              Regestrieren
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

