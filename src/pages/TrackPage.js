import React from "react"
import Navbar from "../components/Navbar";
import TrackListSection from "../components-trackpage/TrackList";
import Footer from "../components/Footer";

export const TrackPage = () => {
  return(
    <>
      <Navbar />
      <TrackListSection />
      <Footer />
    </>
  );
}

export default TrackPage