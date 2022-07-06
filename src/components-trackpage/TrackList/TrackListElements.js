import styled from "styled-components";

export const TrackContainer = styled.div`
  background: #010606;
  border: 1px;
  border-style: solid;
  border-color: #010606;
`

export const TrackBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200%;
  overflow: hidden;

  &:before {
  position: absolute;
  content: "";
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(1,6,6,1) 0%, rgba(0,0,0,0.96) 14%, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.88) 70%, rgba(0,0,0,0.86) 100%);

  pointer-events: none;
`

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 1;
`

export const TracklistWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px 80px 24px;
  justify-content: center;
}
`

export const TrackList = styled.ul`
  position: relative;
  top: 30px;
`

export const TrackHead = styled.h1`
  margin-top: 40px;
  color: #fff;
  font-size: 86px;
  text-align: center;
`

export const Track = styled.li`
  margin: 27px 10px 0px 10px;
  height: 100px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 255px;
  }
`

export const Img = styled.img`
  margin: 10px;
  width: 80px;
  height: 80px;
  float: left;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    float: none;
    margin-left: auto;
    margin-right: auto;
  }
`

export const TrackName = styled.h1`
  font-size: 24px;
  color: #fff;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    font-size: 20px;
    text-align: center;
  }
`

export const TrackAuthor = styled.p`
  font-size: 16px;
  color: #fff;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    font-size: 14px;
    text-align: center;
  }
`
