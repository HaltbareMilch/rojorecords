import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper toggle={toggle}>
        <SidebarMenu>
          <SidebarLink to='/tracklist' onClick={toggle}>
            Tracks
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/about'>
            Über uns
          </SidebarLink>
          <SidebarLink onClick={toggle} to='service'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to='signin'>
            Login
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute>
            Sign Up
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar