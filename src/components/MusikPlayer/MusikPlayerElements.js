import styled from "styled-components";

export const AudioPlayerWrapper = styled.div`
  position: relative;
  top: -50px;
  float: right;
  width: 50%;
  @media screen and (max-width: 768px) {
    top: 0px;
    float: none;
    justify-content: bottom;
    align-items: center;
    width: 100%;
  }
`