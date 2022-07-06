import React from "react";
import Image from '../../images/Background-login.png';
import { PrivacyContainer, PrivacyBg, Img, PrivacyWrapper, PrivacyTitle, PrivacyTitleContent, PrivacyContent, PrivacyContentText } from "./Privacy";

export const PrivacyElements = () => {

  return(
    <>
      <PrivacyContainer>
        <PrivacyBg>
          <Img src={Image} />
        </PrivacyBg>
          <PrivacyWrapper>
            <PrivacyTitle>
              <PrivacyTitleContent>Datenschutz</PrivacyTitleContent>
            </PrivacyTitle>
            <PrivacyContent>
              <PrivacyContentText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</PrivacyContentText>
            </PrivacyContent>
          </PrivacyWrapper>
      </PrivacyContainer>
    </>
  )

}

export default PrivacyElements;