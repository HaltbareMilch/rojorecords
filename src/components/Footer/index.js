import React, {useEffect} from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, CopyRight } from './FooterElements'
import { ExternalLink } from 'react-external-link'

const Footer = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

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
              <FooterLink onClick={() => openInNewTab('https://www.youtube.com/channel/UCKc6KOVuO854dR9dnyQrf_g')}>YouTube</FooterLink>
              <FooterLink onClick={() => openInNewTab('https://open.spotify.com/artist/4M8AS5kvIDkZej6vU8sOrZ')}>spotify</FooterLink>
              <FooterLink onClick={() => openInNewTab('https://twitter.com/Akanzjo')}>Twitter</FooterLink>
              <FooterLink onClick={() => openInNewTab('https://www.instagram.com/rojo_records_offical/')}>Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <CopyRight>© RoJø Records 2022</CopyRight>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
