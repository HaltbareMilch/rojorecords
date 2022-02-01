import React from 'react'
import tracks from '../../music/tracks.json'
import logo from '../../images/note.png'
import {TrackContainer, TrackWrapper, TrackList, Image, Img, TrackAndAuthor, Track, Author, Genre, GenreArr, TrackLenght, TrackTime} from './TrackListElements'

class TrackListGeneration extends React.Component {

  convertTime()

  render() {
    return(
      <TrackContainer>
        <TrackWrapper>
            <TrackList>
              <Image>
                <Img src={logo}/>
              </Image>
              <TrackAndAuthor>
                <Track>{track.name}</Track>
                <Author>{track.author}</Author>
              </TrackAndAuthor>
              <Genre>
                <GenreArr>{track.genre}</GenreArr>
              </Genre>
              <TrackLenght>
                <TrackTime>{track.length}</TrackTime>
              </TrackLenght>
            </TrackList>
        </TrackWrapper>
      </TrackContainer>
    );
  }

}


export default TrackListGeneration;