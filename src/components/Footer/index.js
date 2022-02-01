import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Über uns</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
              <FooterLink to='/'>Datenschutz</FooterLink>
              <FooterLink to='/'>Services</FooterLink>
              <FooterLink to='/'>Kontakt</FooterLink>
              <FooterLink to='/'>Cooming Soon</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>YouTube</FooterLink>
              <FooterLink to='/'>Spotify</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
              <FooterLink to='/'>Instagram</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Über uns</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
              <FooterLink to='/'>Datenschutz</FooterLink>
              <FooterLink to='/'>Services</FooterLink>
              <FooterLink to='/'>Kontakt</FooterLink>
              <FooterLink to='/'>Cooming Soon</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>Über uns</FooterLink>
              <FooterLink to='/'>Impressum</FooterLink>
              <FooterLink to='/'>Datenschutz</FooterLink>
              <FooterLink to='/'>Services</FooterLink>
              <FooterLink to='/'>Kontakt</FooterLink>
              <FooterLink to='/'>Cooming Soon</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
