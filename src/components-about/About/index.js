import React from "react";
import Image from '../../images/Background-about.png'
import { AboutContainer, AboutWrapper, AboutTitle, AboutContent, AboutLabel, AboutLabelTitle, AboutLabelContent, AboutBg, Img } from './About';

export const AboutPage = () => {
  return (
    <>
      <AboutContainer>
        <AboutBg>
          <Img src={Image} />
        </AboutBg>
          <AboutWrapper>
            <AboutTitle>About
              <AboutContent>
                <AboutLabel>
                  <AboutLabelTitle>Unsere Geschichte</AboutLabelTitle>
                  <AboutLabelContent>RoJø Records wurde 2021 von zwei Musikproduzenten, RoxasMusic und Akanzjø, gegründet. Der Namen RoJø ist von den beiden Künstlernamen abgeleitet.
                                    ROJØ RECORDS ist ein digitales Musiklabel, der es jungen Künstlern ermöglicht Ihre Musikstücke zu veröffentlichen.<br/>
                                    <br/>
                                    AKANZJØ seine GEDANKEN:<br/>
                                    <br/>
                                    Ich finde unser Musiklabel einfach klasse, weil es uns als beste freunde verbindet. Ich bin glücklich, dass er damals die Idee hatte. 
                                    Wir hatten 2018 unser 1. Label namens Bluewatermusic gegründet, aber wir haben diesen Namen 2021 in RoJø Records geändert. 
                                    Das schönste Gefühl war, wo Universe unter unserem Label veröffentlichen konnten.
                  </AboutLabelContent>
                </AboutLabel>
                <AboutLabel>
                  <AboutLabelTitle>Akanzjo</AboutLabelTitle>
                  <AboutLabelContent>AKANZJØ ist ein deutscher Audio Enginner, Beatproducer und Artist, er steht bei RoJø Records unter Vertrag.<br/>
                                    <br/>
                                    2017 -  hat er Angefangen Hip-Hop Beats zu produzieren <br/>
                                    <br/>
                                    2020 -  hat er sein 1. Album „Chapter A „ME““ veröffentlicht <br/>
                                    <br/>
                                    2021 – wurde sein 2. Album „Universe“ veröffentlicht<br/>
                                    <br/>
                                    2021 -  ist Akanzjø der Hauptpruzent  bei „Ossizial“
                  </AboutLabelContent>
                </AboutLabel>
                <AboutLabel>
                  <AboutLabelTitle>RoxasMusic</AboutLabelTitle>
                  <AboutLabelContent>ROXAS MUSIC ist ein deutscher Musikproduzent und Artist. Er steht bei dem digitalen Musiklabel ROJØ RECORDS unter Vertrag.<br/>
                                    <br/>
                                    ROXAS ist für alle digitale Seiteb zuständig, was mit programmieren, Grafiken zutun hat. 
                                    <br/>
                                    2020 – HIGH TO SPACE auf YouTube veröffentlicht<br/>
                                    2020 - 

                  </AboutLabelContent>
                </AboutLabel>
              </AboutContent>
            </AboutTitle>
          </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutPage;