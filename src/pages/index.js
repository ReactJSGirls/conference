import React from 'react'
import Layout from '../layout/index'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import BG from '../assets/bg.svg'
import MobileBG from '../assets/mobile-bg.svg'
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

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-rows: 200px 1fr;
  }
`

const InfoContainer = styled.main`
  max-width: 490px;

  @media screen and (max-width: 1023px) {
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
    contentfulVenue,
    contentfulCommunity
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
            <AstronautStyled
              css={`
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
              `}
            />
            <BG
              css={`
                @media screen and (max-width: 1023px) {
                  display: none;
                }
              `}
            />

            <MobileBG
              css={`
                @media screen and (min-width: 1024px) {
                  display: none;
                }

                @media screen and (max-width: 460px) {
                  max-width: 200%;
                  left: 10px;
                }
                width: 660px;
                height: auto;
                max-width: 110%;
                position: absolute;
                right: -10px;
              `}
            />
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
        <Community {...contentfulCommunity} />
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
    contentfulCommunity {
      intro {
        intro
      }
      partners {
        id
        link
        logo {
          title
          file {
            url
          }
        }
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
