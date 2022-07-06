import React from 'react'
import { ConatctContainer, ContactWrapper, ContactTitle, ContactUserForm, UserNameInput, UserLastNameInput, UserEmailInput, ContactTextForm, ContactSubmit, TextArea } from './ContactElements'

const ConatctSection = () => {
  return (
    <ConatctContainer>
      <ContactWrapper>
        <ContactTitle>Kontakt</ContactTitle>
        <ContactUserForm>
          <UserNameInput placeholder='Vorname... (optional)'></UserNameInput>
          <UserLastNameInput placeholder='Nachname... (optional)'></UserLastNameInput>
          <UserEmailInput placeholder='E-mail... (required)'></UserEmailInput>
        </ContactUserForm>
        <ContactTextForm>
          <TextArea type='text' placeholder='Nachricht...'></TextArea>
        </ContactTextForm>
      <ContactSubmit>Absenden</ContactSubmit>
      </ContactWrapper>
    </ConatctContainer>
  )
}

export default ConatctSection
