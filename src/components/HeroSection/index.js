import React, { useState } from 'react'
import video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContnent, HeroH1, HeroP, HeroBtnWrapper, HeadsetOut, HeadsetFull } from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    	setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type='video/mp4' />
      </HeroBg>
      <HeroContnent>
        <HeroH1>
          Musik Die Bewegt
        </HeroH1>
        <HeroP>
          Hier findest du alle Tracks von uns und wirst bei neuen benachrichtigt.
        </HeroP>
        <HeroBtnWrapper>
          <Button 
          to='tracks' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          >
            Durchsuchen {hover ? <HeadsetFull /> : <HeadsetOut />}
          </Button>
        </HeroBtnWrapper>
      </HeroContnent>
    </HeroContainer>
  )
}

export default HeroSection