import React from 'react'
import Image from '../../images/Background-login.png'
import data from '../../music/tracks'
import {TrackContainer, TracklistWrapper, TrackList, TrackHead, Track, Img, TrackName, TrackAuthor, AudioPlayerWrapper, TrackBg, BgImg } from './TrackListElements'
import { Component } from 'react'
import MusikPlayer from '../../components/MusikPlayer'
import MiniPlayer from '../../components/MiniPlayer'

let isMusicOpen;
let isToggleMusic;

const toggleMusic = ({ isMusicOpen, toggleMusic}) => {
  isToggleMusic = toggleMusic;
  console.log("Hi2");
}

class TrackListGeneration extends Component {

  render (){
    return(
      <TrackContainer>
        <TrackBg>
          <BgImg src={Image} />
        </TrackBg>
          <TracklistWrapper>
            <TrackList>
            <TrackHead>Tracklist</TrackHead>
              {data.map((tracks, index)=>{
                return <div>
                  <TrackList>
                    <Track>
                      <Img src={tracks.image} alt="logo"/>
                      <TrackName>{tracks.name}</TrackName>
                      <TrackAuthor>{tracks.author}</TrackAuthor>
                      <MusikPlayer musicSource={tracks.sourceMusic} />
                    </Track>
                  </TrackList></div>
              })}
            </TrackList>
          </TracklistWrapper>
      </TrackContainer>
    )
  }
}



export default TrackListGeneration;