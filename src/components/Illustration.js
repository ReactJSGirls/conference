import styled, { keyframes } from 'styled-components'
import Astronaut from '../assets/astronaut.svg'

export const Illustration = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;

  @media screen and (max-width: 1130px) {
    right: -150px;
  }

  @media screen and (max-width: 1023px) {
    right: -5%;
    top: 60px;
    position: relative;
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

  @media screen and (max-width: 1023px) {
    position: relative;
    z-index: 3;
    float: right;
    right: 8%;
    max-width: 50%;
  }

  @media screen and (max-width: 460px) {
    margin-top: 60px;
  }
`
