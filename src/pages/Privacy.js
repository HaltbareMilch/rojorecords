import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import PrivacyPage from '../compontents-privacy/Privacy';

export const Privacy = () => {
  {/*Checkt ob das Mobile Menü active ist.*/}
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <PrivacyPage />
      <Footer />
    </>
  )

}

export default Privacy;