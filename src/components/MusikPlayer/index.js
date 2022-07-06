import React, { useState } from 'react'
import { AudioPlayerWrapper } from './MusikPlayerElements'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusikPlayer = ( {musicSource} ) => {
  return (
    <>
      <AudioPlayerWrapper>
        <AudioPlayer src={musicSource} showSkipControls={false} showJumpControls={false} customAdditionalControls={[]} volume={0.3}/>
      </AudioPlayerWrapper>
    </>
  )
}

export default MusikPlayer
