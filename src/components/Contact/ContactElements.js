import styled from "styled-components";

export const ConatctContainer = styled.div`
  height: 800px;
`

export const ContactWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  height: 100%;
`

export const ContactTitle = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-top: 48px;
`

export const ContactUserForm = styled.div`
  height: 150px;
  max-width: 1000px;
  margin: auto;
`

export const UserNameInput = styled.input`
  border: 1px;
  border-style: solid;
  border-color: #000;
  border-top: none;
  border-right: none;
  padding-left: 10px;
  font-size: 24px;
  margin: 20px 0px 0px 20px;
  border: 0px 0px 1px 1px;
  outline: none;
  width: 350px;

  ::placeholder {
    color: #0e0e0e;
  }

  @media screen and (max-width: 768px){
    flex: left;
  }
`

export const UserLastNameInput = styled.input`
  border: 1px;
  border-style: solid;
  border-color: #000;
  border-top: none;
  border-right: none;
  font-size: 24px;
  border: 0px 0px 1px 1px;
  outline: none;
  width: 350px;
  float: right;

  ::placeholder {
    color: #0e0e0e;
  }

  @media screen and (max-width: 768px){
    
  }
`

export const UserEmailInput = styled.input`
  border: 1px;
  border-style: solid;
  border-color: #000;
  border-top: none;
  border-right: none;
  margin: 30px 0px 0px 35px;
  padding-left: 10px;
  font-size: 24px;
  border: 0px 0px 1px 1px;
  outline: none;
  width: 930px;

  ::placeholder {
    color: #0e0e0e;
  }

  @media screen and (max-width: 768px){
    width: 200px;
  }

`

export const ContactTextForm = styled.div`
  width: 1000px;
  margin: auto;
  margin-top: 20px;
  height: 375px;
  border: 1px;
  border-style: solid;
  border-color: #000;
`

export const TextArea = styled.textarea`
  height: 355px;
  width: 980px;
  margin: 10px;
  resize: none;
  font-size: 24px;
  outline: none;

  ::placeholder {
    color: #0e0e0e;
    
  }

  &:focus{
    border-style: none;
  }
`

export const ContactSubmit = styled.button`
  border-radius: 50px;
  background: #000;
  color:#fff;
  padding: 10px 30px 10px 30px;
  margin-left: 500px;
  margin-top: 40px;
`
