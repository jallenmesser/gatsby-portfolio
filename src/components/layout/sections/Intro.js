import React from "react"
import styled from "styled-components"
import { themes } from "../../styles/ColorStyles"
import { H1, H2, MediumText, SmallText } from "../../styles/TextStyles"

export default function Intro() {
  return (
    <Wrapper>
      <TextWrapper>
        <Name>Jallen </Name>
        <Name>Messersmith</Name>
        <Description>Developer, Designer, Media Strategist</Description>
      </TextWrapper>
      <Headshot src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F2JgV6adauEiTls42WLHLJcHIMfc%3D%2F0x38%3A565x415%2F1200x800%2Ffilters%3Afocal(0x38%3A565x415)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F41777688%2Fjalen_rainbow_flag.0.0.jpg&f=1&nofb=1" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const TextWrapper = styled.div`
  display: flex;
  background-color: ${themes.light.text1};
  flex-direction: column;
  height: 30vh;
  width: 30vw;
  min-width: 450px;
  justify-content: flex-end;
  box-shadow: 5px 10px white;
  align-items: flex-end;
  padding: 20px;
  transition: all 1s ease-in-out 0s;
  border-radius: 15px;
  :hover {
    transform: scale(1.05);
    box-shadow: 10px 10px ${themes.light.secondary};
  }
`

const Name = styled(H1)`
  color: ${themes.light.primary};
`
const Headshot = styled.img`
  width: 700px;
  box-shadow: 15px 10px ${themes.light.secondary};
  margin: 50px;
  filter: blur(2px);
  transition: all 1s ease-in-out 0s;
  border-radius: 350px;
  :hover {
    filter: blur(0px);
  }
`

const Description = styled(H2)`
  color: white;
  text-align: right;
`
