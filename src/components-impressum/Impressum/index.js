import React from 'react';
import Image from '../../images/Background-login.png';
import {ImpressumContainer, ImpressumBg, Img, ImpressumWrapper, ImpressumTitle, ImpressumTitleContent, ImpressumContent, ImpressumContentText} from './Impressum';

export const ImpressumElements = () => {

  return(
    <>
      <ImpressumContainer>
        <ImpressumBg>
          <Img src={Image} />
        </ImpressumBg>
          <ImpressumWrapper>
            <ImpressumTitle>
              <ImpressumTitleContent>Impressum</ImpressumTitleContent>
            </ImpressumTitle>
            <ImpressumContent>
              <ImpressumContentText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</ImpressumContentText>
            </ImpressumContent>
          </ImpressumWrapper>
      </ImpressumContainer>
    </>
  )

}

export default ImpressumElements;

