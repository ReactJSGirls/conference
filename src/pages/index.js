import React from 'react'
import Layout from '../layout/index'
import styled from 'styled-components'

import BG from '../assets/bg.svg'
import { Illustration, AstronautStyled } from '../components/Illustration'
import Divider from '../components/Divider'
import About from '../components/About'
import Footer from '../components/Footer'
import Page from '../components/Page'
import Venue from '../components/Venue'
import Button from '../components/Button'
import Community from '../components/Community'
import { Title, Tagline, Date } from '../components/Type'

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 700px;
  min-height: 100%;

  @media screen and (max-width: 932px) {
    grid-template-columns: 1fr;
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
    contentfulWebsiteData: {
      conferenceName,
      aboutText,
      aboutHeadline,
      tagline,
      dateAndLocation
    },
    contentfulVenue
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
            <Button
              css={`
                display: block;
                width: 150px;
                margin-top: 20px;
              `}
              rel="noopener noreferrer"
              href="https://yld.typeform.com/to/gfZ2jc"
              target="_blank"
            >
              <span>Apply to speak</span>
            </Button>
          </InfoContainer>
          <Illustration>
            <AstronautStyled />
            <BG />
          </Illustration>
        </Main>
      </Page>
      <Divider />
      <div id={'about'}>
        <About
          headline={aboutHeadline.aboutHeadline}
          text={aboutText.aboutText}
        />
      </div>
      <div id={'venue'}>
        <div
          css={`
            padding-bottom: 110px;
            background: #f3f4f9;
            padding-top: 0;
          `}
        >
          <Venue {...contentfulVenue} />
        </div>
      </div>
      <div id={'community'}>
        <Community />
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulWebsiteData {
      conferenceName
      tagline
      dateAndLocation
      aboutText {
        aboutText
      }
      aboutHeadline {
        aboutHeadline
      }
    }
    contentfulVenue {
      address
      accessibility {
        accessibility
      }
      name
      coordinates {
        lon
        lat
      }
      closestStations
    }
  }
`

export default IndexPage
