import React from "react";
import { MiniPlayerContainer, MiniPlayerWrapper, Icon, CloseIcon, Img, TrackName, TrackAuthor } from "./MiniPlayerElements";
import MusikPlayer from "../MusikPlayer";

const MiniPlayer = ({ isMusicOpen, toggleMusic , img, trackName, trackAuthor}) => {
  const changeState = (change) => {
    isMusicOpen = change;
  }

  return (
    <MiniPlayerContainer isMusicOpen={isMusicOpen}>
      <Icon onClick={toggleMusic}>
        <CloseIcon />
      </Icon>
        <MiniPlayerWrapper>
          <Img src={img}/>
          <TrackName>{trackName}</TrackName>
          <TrackAuthor>{trackAuthor}</TrackAuthor>
          <MusikPlayer></MusikPlayer>
        </MiniPlayerWrapper>
    </MiniPlayerContainer>
  );
}

export default MiniPlayer;