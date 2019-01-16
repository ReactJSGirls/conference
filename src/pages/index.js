import React from 'react'
import Layout from '../layout/index'
import styled, { keyframes } from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'
import BG from '../assets/bg.svg'
import Astronaut from '../assets/astronaut.svg'
import Divider from '../components/Divider'

import Map from '../components/Map'

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

const PageTitle = styled.h3`
  font-size: 31px;
  color: #41495d;
  font-weight: 600;
  text-align: center;
  padding-bottom: 40px;
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

const Page = styled.div`
  width: 1160px;
  max-width: 90%;
  margin: 0 auto;
`

const IndexPage = ({
  data: {
    contentfulWebsiteData: { conferenceName, tagline, dateAndLocation }
  }
}) => {
  return (
    <Layout>
      <Page>
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
      </Page>
      <Divider />
      <ScrollableAnchor id={'about'}>
        <div
          css={`
            background: #f3f4f9;
            padding: 50px 0;
            padding-bottom: 110px;
          `}
        >
          <Page
            css={`
              background: #ffffff;
              box-shadow: 0 72px 80px 0 rgba(45, 54, 95, 0.05);
              padding: 50px;
              border-radius: 20px;
            `}
          >
            <PageTitle>About</PageTitle>
            <h3
              css={`
                padding-top: 40px;
              `}
            >
              ReactJS Girls is one-day non-profit by-community for-community
              conference for the JS community to celebrate React. The conference
              will gather 300 React developers for a single-track content-rich
              day, where women will take the stage
            </h3>
            <ul
              css={`
                margin-top: 60px;
                li {
                  margin-top: 20px;
                  line-height: 36px;
                  font-size: 20px;
                }
              `}
            >
              <li>
                ReactJS Girls is a one day conference for every React developer,
                where women-identified speakers take the stage
              </li>
              <li>
                ReactJS Girls main focus is supporting the diversity community
                in React and offer a safe place for every developer
              </li>
              <li>
                The conference will gather 300 React developers for a
                single-track content-rich day in London
              </li>
            </ul>
          </Page>
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'venue'}>
        <div
          css={`
            background: #f3f4f9;
            padding: 50px 0;
            padding-top: 0;
          `}
        >
          <Page
            css={`
              background: #ffffff;
              box-shadow: 0 72px 80px 0 rgba(45, 54, 95, 0.05);
              padding: 50px;
              border-radius: 20px;
            `}
          >
            <PageTitle>Venue</PageTitle>

            <div
              css={`
                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;
              `}
            >
              <div>
                <h2>30 Euston Square</h2>
                <h4>Address</h4>
                <p
                  css={`
                    margin-bottom: 20px;
                  `}
                >
                  30 Euston Square, London NW1 2FB
                </p>
                <h4>Closest Stations</h4>
                <p
                  css={`
                    margin-bottom: 20px;
                  `}
                >
                  Euston, Euston Square
                </p>
                <h4>Accessibility</h4>
                <p>The venue provides step-free access,</p>{' '}
                <p>and additional assistance for anyone who requires it</p>
              </div>
              <Map />
            </div>
          </Page>
        </div>
      </ScrollableAnchor>
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
