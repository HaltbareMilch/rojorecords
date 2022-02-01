import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'

export const MusikContainer = styled.div`
  position: fixed;
  bottom: ${({isMusicOpen}) => (isMusicOpen ? '0px' : '-100px')};
  height: 100px;
  width: 100%;
  background: rgba(14, 14, 14, 0.95);
  justify-items: center;
  transition: all 0.2s ease-in-out;
  z-index: 1000;
`

export const MusikWrapper = styled.div`
  height: 70px;
  max-width: 1200px;
  margin: auto;
  margin-top: 20px;
  z-index: 1002;
`

export const Img = styled.img`
  height: 50px;
  width: 50px;
  margin: 9px;
  float: left;
`

export const MusicInfo = styled.div`

`

export const TrackTitle = styled.h1`

`

export const TrackAuthor = styled.p`

`

export const TimeInfo = styled.div`

`

export const CurrentTime = styled.p`

`

export const Progress = styled.div`

`

export const ProgressBar = styled.input`

`

export const TrackLength = styled.p`

`

export const ControlBar = styled.div`

`

export const TrackBackBtn = styled.button`

`

export const TrackPlay = styled.button`

`

export const TrackNextBtn = styled.button`

`

export const Exit = styled.div`

`

export const CloseBtn = styled.button`

`