import React from 'react'
import Layout from '../layout/index'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import About from '../components/About'
import Tickets from '../components/Tickets'
import Speakers from '../components/Speakers'
import Footer from '../components/Footer'
import Page from '../components/Page'
import Venue from '../components/Venue'
import Button from '../components/Button'
import Community from '../components/Community'
import { Title, Tagline, Date } from '../components/Type'
import Logo from '../assets/logo.svg'

const GirlsLogo = styled(Logo)`
  width: 140px;
  height: 140px;
  display: block;
  margin: auto;
  transform: rotate(0deg);
  transition: transform 500ms ease;
  position: relative;
  z-index: 10;
  margin-bottom: 40px;

  &:hover {
    transform: rotate(360deg);
  }
`
const Main = styled.main`
  grid-template-columns: 1fr 700px;
  min-height: 100%;
`

const InfoContainer = styled.main`
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
      history,
      tagline,
      dateAndLocation
    },
    contentfulVenue,
    contentfulCommunity,
    allContentfulSpeaker
  }
}) => {
  return (
    <Layout>
      <div
        css={`
          background: #232c3d;
          text-align: center;
          padding: 60px 0;
          min-height: 100vh;
        `}
      >
        <Page>
          <Main>
            <InfoContainer>
              <Title>
                <GirlsLogo />
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
                  width: 200px;
                  margin-top: 20px;
                  margin: auto;
                  margin-top: 50px;

                  @media screen and (max-width: 767px) {
                    margin-top: 10px;
                  }
                `}
                rel="noopener noreferrer"
                href="https://yld.typeform.com/to/gfZ2jc"
                target="_blank"
              >
                <span>Become a speaker</span>
              </Button>
            </InfoContainer>
          </Main>
        </Page>
      </div>
      <div id="about">
        <About
          headline={aboutHeadline.aboutHeadline}
          history={history.history}
          text={aboutText.aboutText}
        />
      </div>
      <div id="speakers">
        <div
          css={`
            padding-bottom: 100px;
            background: #f3f4f9;
            padding-top: 0;
          `}
        >
          <Speakers speakers={allContentfulSpeaker} />
        </div>
      </div>
      <div id="tickets">
        <Tickets />
      </div>
      <div id="venue">
        <div
          css={`
            padding-bottom: 100px;
            background: #f3f4f9;
            padding-top: 0;
          `}
        >
          <Venue {...contentfulVenue} />
        </div>
      </div>
      <div id="community">
        <Community {...contentfulCommunity} />
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSpeaker {
      edges {
        node {
          name
          id
          photo {
            file {
              url
            }
          }
          github
          twitter
          website
          job
          talk {
            title
          }
        }
      }
    }

    contentfulWebsiteData {
      conferenceName
      tagline
      dateAndLocation
      aboutText {
        aboutText
      }
      history {
        history
      }
      aboutHeadline {
        aboutHeadline
      }
    }
    contentfulCommunity {
      intro {
        intro
      }
      diversityText {
        diversityText
      }
      joinConversation {
        joinConversation
      }
      sponsorsThankYou {
        sponsorsThankYou
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
