import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'

export const MiniPlayerContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgb(13,13,13, 0.8);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isMusicOpen}) => (isMusicOpen ? '100%' : '24%')};
  top: ${({isMusicOpen}) => (isMusicOpen ? '100%' : '0%')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const MiniPlayerWrapper = styled.div`
  color: #fff;
`

export const Img = styled.img`
  margin: 10px;
  width: 80px;
  height: 80px;
  float: left;
`

export const TrackName = styled.h1`
  font-size: 24px;
  color: #fff;
`

export const TrackAuthor = styled.p`
  font-size: 16px;
  color: #fff;
`