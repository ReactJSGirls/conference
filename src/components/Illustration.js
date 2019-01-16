import styled, { keyframes } from 'styled-components'
import Astronaut from '../assets/astronaut.svg'

export const Illustration = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;

  @media screen and (max-width: 1130px) {
    right: -100px;
  }

  @media screen and (max-width: 1130px) {
    right: -150px;
  }

  @media screen and (max-width: 932px) {
    right: 0;
  }
`

const hover = keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
`

export const AstronautStyled = styled(Astronaut)`
  position: absolute;
  top: 30%;
  right: 15%;
  transform: translatey(0px);
  animation: ${hover} 6s ease-in-out infinite;

  @media screen and (max-width: 1130px) {
    right: 25%;
  }
  @media screen and (max-width: 932px) {
    display: none;
  }
`
