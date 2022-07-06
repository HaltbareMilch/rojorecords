import React from 'react'
import Image from '../../images/Background-login.png'
import { LoginContainer, LoginWrapper, LoginBox, LoginTitle, LoginField, LoginEmail, LoginPass, LoginSubmitt, LoginButtons, LoginBg, Img } from './LoginElements';

export const LoginElements = () => {

  return(
    <>
      <LoginContainer>
        <LoginBg>
          <Img src={Image} />
        </LoginBg>
          <LoginWrapper>
            <LoginBox>
              <LoginTitle>Anmelden</LoginTitle>
              <LoginField>
                <LoginEmail></LoginEmail>
                <LoginPass></LoginPass>
                <LoginSubmitt>Login</LoginSubmitt>
              </LoginField>
              <LoginButtons></LoginButtons>
            </LoginBox>
          </LoginWrapper>
      </LoginContainer>
    </>
  )

}

export default LoginElements;