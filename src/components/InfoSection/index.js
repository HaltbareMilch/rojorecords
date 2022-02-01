import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'

const InfoSection = ( {lightBg, id, lightText, imgStart, topline, heading, subtitle, buttonLable, darkText, img, alt} ) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>
                {topline}
              </TopLine>
              <Heading lightText={lightText}>
                {heading}
              </Heading>
              <Subtitle darkText={darkText}>
                {subtitle}
              </Subtitle>
              <BtnWrap>
                <Button to='about'>{buttonLable}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
