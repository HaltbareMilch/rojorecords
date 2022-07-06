import React, {useState} from "react"
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TrackListSection from "../components-trackpage/TrackList";
import Footer from "../components/Footer";
import MusikSection from "../components/MusikPlayer";
import MiniPlayer from "../components/MiniPlayer";

export const TrackPage = () => {

  {/*Checkt ob das Mobile Menü active ist.*/}
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  {/*Checkt ob der MiniPlayer active ist*/}
  const [isMusicOpen, setIsMusicOpen] = useState(false)

  const toggleMusic = () => {
    setIsMusicOpen(!isMusicOpen)
    console.log("Hi")
    console.log(isMusicOpen)
  }

  return(
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <TrackListSection />
      <Footer />
    </>
  );
}

export default TrackPage