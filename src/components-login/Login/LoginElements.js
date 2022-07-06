import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const LoginContainer = styled.div`
  
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

export const LoginBg = styled.div`
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

export const LoginWrapper = styled.div`
  height: 520px;
  width: 400px;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 280px;
  }
`

export const LoginBox = styled.div`
  
`

export const LoginTitle = styled.h1`
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
`

export const LoginField = styled.div`
  margin-top: 30px;
`

export const LoginEmail = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255,255,255,0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
`

export const LoginPass = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255,255,255,0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
`

export const LoginSubmitt = styled(LinkS)`
  position: absolute;
  left: 5%;
  bottom: 10px;
  width: 90%;
  background-color: #ffffff;
  color: #080710;
  padding: 10px;
  margin: auto;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
`

export const LoginButtons = styled(LinkR)`
`

