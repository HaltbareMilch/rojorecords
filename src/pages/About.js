import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import AboutPage from '../components-about/About'

export const About = () => {
  {/*Checkt ob das Mobile Menü active ist.*/}
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar isOpen={isOpen} toggle={toggle}/>
    <AboutPage />
    <Footer />
    </>
  )
}

export default About;