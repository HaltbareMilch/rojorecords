import React, { useState } from 'react'
import { MusikContainer, MusikWrapper, Img, MusicInfo, TrackNextBtn, TrackAuthor, TrackPlay, TrackTitle, TrackBackBtn, TrackLength, TimeInfo, CloseBtn, CurrentTime, ControlBar, Progress, ProgressBar, Exit } from './MusikPlayerElements'

const MusikSection = ( {isMusicOpen ,toggleMusic, trackTitle, trackAuthor, trackLength} ) => {
  return (
    <MusikContainer isMusicOpen={isMusicOpen}>
      <MusikWrapper>
        <Img></Img>
        <MusicInfo>
          <TrackTitle>{trackTitle}</TrackTitle>
          <TrackAuthor>{trackAuthor}</TrackAuthor>
        </MusicInfo>
        <TimeInfo>
          <CurrentTime></CurrentTime>
          <Progress>
            <ProgressBar></ProgressBar>
          </Progress>
          <TrackLength>{trackLength}</TrackLength>
        </TimeInfo>
        <ControlBar>
          <TrackBackBtn></TrackBackBtn>
          <TrackPlay></TrackPlay>
          <TrackNextBtn></TrackNextBtn>
        </ControlBar>
        <Exit>
          <CloseBtn></CloseBtn>
        </Exit>
      </MusikWrapper>
    </MusikContainer>
  )
}

export default MusikSection
