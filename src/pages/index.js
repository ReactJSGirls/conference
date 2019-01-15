import React from 'react'
import Layout from '../layout/index'
import styled, { keyframes } from 'styled-components'
import BG from '../assets/bg.svg'
import PlanetA from '../assets/planet-a.svg'
import Astronaut from '../assets/Astronaut.svg'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 800px;
  min-height: 100%;
`

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 11px;
`

const Tagline = styled.p`
  font-size: 24px;
  max-width: 400px;
  margin-bottom: 20px;
`

const Date = styled.span`
  font-size: 303x;
  color: #7a7f8d;
`

const Illustration = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
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

const IndexPage = ({
  data: {
    contentfulWebsiteData: { conferenceName, tagline, dateAndLocation }
  }
}) => {
  return (
    <Layout>
      <Main>
        <div
          css={`
            max-width: 400px;
          `}
        >
          <Title>{conferenceName}</Title>
          <Tagline>{tagline}</Tagline>
          <Date>{dateAndLocation}</Date>
        </div>
        <Illustration>
          <Astronaut
            css={`
              position: absolute;
              top: 30%;
              right: 15%;
              transform: translatey(0px);
              animation: ${hover} 6s ease-in-out infinite;
            `}
          />
          <PlanetA
            css={`
              position: absolute;
              top: 130px;
              margin-left: 31px;
            `}
          />
          <BG />
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
