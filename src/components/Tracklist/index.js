import React from 'react'
import { TrackContainer, MoreTracksBtn, MoreTracks, MoreTracksInfo, TracklistWrapper, TrackList, TrackHead, TrackTop3, Track, Img, TrackName, TrackAuthor, TrackLength } from './TracklistElements'


const TrackSection = ( { toggleMusic, img } ) => {
  return (
    <TrackContainer>
      <TracklistWrapper>
        <TrackList>
          <TrackHead>Tracklist</TrackHead>
          <TrackTop3>Unsere Top 3 Tracks</TrackTop3>
          <Track onClick={toggleMusic}>
            <Img src={img}/>
            <TrackName>The Abolute Nothing</TrackName>
            <TrackAuthor>Akanzjo</TrackAuthor>
            <TrackLength>03:24</TrackLength>
          </Track>
          <Track onClick={toggleMusic}>
            <Img src={img}/>
            <TrackName>Lonley Pluto</TrackName>
            <TrackAuthor>RoxasMusix</TrackAuthor>
            <TrackLength>04:19</TrackLength>
          </Track>
          <Track onClick={toggleMusic}>
            <Img src={img}/>
            <TrackName>Strange Matter</TrackName>
            <TrackAuthor>Akanzjo feat. Maxwell</TrackAuthor>
            <TrackLength>02:48</TrackLength>
          </Track>
        </TrackList>
      </TracklistWrapper>
      <MoreTracksBtn to='/tracklist#'>
        <MoreTracks ></MoreTracks>
      </MoreTracksBtn>
      <MoreTracksInfo>Mehr Tracks</MoreTracksInfo>
    </TrackContainer>
  )
}

export default TrackSection
