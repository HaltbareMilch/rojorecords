import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import TrackSection from '../components/Tracklist'
import {test} from '../components/Tracklist/data'
import MusikSection from '../components/MusikPlayer'
{/*import ConatctSection from '../components/Contact'*/}

export const Home = () => {
  {/*Checkt ob das Mobile Menü active ist.*/}
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  {/*Checkt ob der Musikplayer active ist*/}
  const [isMusicOpen, setIsMusicOpen] = useState(false)

  const toggleMusic = () => {
    setIsMusicOpen(!isMusicOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <TrackSection isMusicOpen={isMusicOpen} toggleMusic={toggleMusic}/>
      <Footer />
    </>
  )
}

export default Home;