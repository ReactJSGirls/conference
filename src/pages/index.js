import React from 'react'
import Layout from '../layout/index'
import styled, { keyframes } from 'styled-components'
import BG from '../assets/bg.svg'
import Astronaut from '../assets/astronaut.svg'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 700px;
  min-height: 100%;

  @media screen and (max-width: 932px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 11px;

  @media screen and (max-width: 932px) {
    max-width: 400px;
    color: white;
  }
`

const Tagline = styled.p`
  font-size: 24px;
  max-width: 400px;
  margin-bottom: 20px;

  @media screen and (max-width: 932px) {
    color: white;
  }
`

const Date = styled.span`
  font-size: 33px;
  color: #7a7f8d;
  font-weight: 600;

  @media screen and (max-width: 932px) {
    color: white;
  }
`

const Illustration = styled.div`
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

const AstronautStyled = styled(Astronaut)`
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

const InfoContainer = styled.main`
  max-width: 490px;

  @media screen and (max-width: 932px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

const IndexPage = ({
  data: {
    contentfulWebsiteData: { conferenceName, tagline, dateAndLocation }
  }
}) => {
  return (
    <Layout>
      <Main>
        <InfoContainer>
          <Title>
            <span
              css={`
                color: #fb8e82;
              `}
            >
              ReactJS Girls{' '}
            </span>
            {conferenceName.split('ReactJS Girls')}
          </Title>
          <Tagline>{tagline}</Tagline>
          <Date>{dateAndLocation}</Date>
        </InfoContainer>
        <Illustration>
          <AstronautStyled />
          <BG
            css={`
              @media screen and (max-width: 932px) {
              }
            `}
          />
        </Illustration>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulWebsiteData {
      conferenceName
      tagline
      dateAndLocation
    }
  }
`

export default IndexPage
