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
          <SidebarLink onClick={toggle}>
            Tracks
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            Über uns
          </SidebarLink>
          <SidebarLink onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle}>
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