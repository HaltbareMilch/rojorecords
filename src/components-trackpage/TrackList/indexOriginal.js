import React from 'react'
import track from '../../music/tracks.json'
import logo from '../../images/note.png'
import {TrackContainer, TrackWrapper, TrackListBox, TrackList, TrackInfo, Img, Track, Author, GenreArr, TrackTime} from './TrackListElements'
import { Component } from 'react'

class TrackListGeneration extends Component {
  time() {
    var minute = Math.floor(100 / 60);
    var seconds = 100 - minute * 60;

    return minute + ":" + seconds;
  }

  render (){
    return(
      <TrackContainer>
        <TrackWrapper>
          <TrackListBox>
          {track.map((tracks, index)=>{
            return <div>
              <TrackList>
                <TrackInfo>
                  <Img src={logo} />
                  <Track>{tracks.name}</Track>
                  <Author>{tracks.author}</Author>
                  <GenreArr>{tracks.genre}</GenreArr>
                  <TrackTime>{tracks.lengt}</TrackTime>
                </TrackInfo>
              </TrackList></div>
          })}
          </TrackListBox>
        </TrackWrapper>
      </TrackContainer>
    )
  }
}



export default TrackListGeneration;