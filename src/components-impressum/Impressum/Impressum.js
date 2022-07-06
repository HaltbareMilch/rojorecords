import styled from "styled-components";

export const ImpressumContainer = styled.div`
    
  &:before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  &:after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  height: 100vh;
  color: #fff;
  background: #010606;
`

export const ImpressumBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const Img = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const ImpressumWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px 80px 24px;
  justify-content: center;
  text-align: center;
  z-index: 2;
`

export const ImpressumTitle = styled.div`
  padding: 0 24px 0 24px;
  height: 100%;
  margin: 150px 0 45px 0;
`

export const ImpressumTitleContent = styled.h1`
  font-size: 65px;
  color: #fff;
  text-align: start;
  padding: 10px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`

export const ImpressumContent = styled.div`
  padding: 0 24px 0 24px;
  height: 100%;
  margin: 75px 0 45px 0;
`

export const ImpressumContentText = styled.p`
  height: 100%;
  margin-top: 15px;
  font-size: 25px;
  color: #fff;
  text-align: justify;
  border: 3px;
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`