import styled from "styled-components";
import {Link} from 'react-router-dom'
import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io"

export const TrackContainer = styled.div`
  background: #010606;
`

export const MoreTracksBtn = styled(Link)`
`

export const MoreTracks = styled(IoIosArrowDropdown)`
  color: #fff;
  width: 150px;
  height: 75px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
`

export const MoreTracksInfo = styled.p`
  color: #fff;
  font-size: 100%;
  text-align: center;
`

export const TracklistWrapper = styled.div`
  height: 575px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const TrackList = styled.ul`
  position: relative;
  top: 30px;
  height: 540px;
  
`

export const TrackHead = styled.h1`
  color: #fff;
  font-size: 86px;
  text-align: center;
`

export const TrackTop3 = styled.h2`
  color: #fff;
  color: 70px;
  text-align: center;
`

export const Track = styled.li`
  margin: 27px 10px 0px 10px;
  height: 100px;
  border: 1px;
  border-style: solid;
  border-color: #fff;
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

export const TrackLength = styled.p`
  float: right;
  color: #fff;
  margin-right: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  };
`

export const TrackPlay = styled.button`
  float: right;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #1A7BA3;
  @media screen and (max-width: 768px) {
  };
`

export const Play = styled(FaPlay)`
  margin-left: 18px;
`

export const Pause = styled(FaPause)`
  margin-left: 17px;
`