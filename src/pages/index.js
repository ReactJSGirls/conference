import React from 'react'
import Layout from '../layout/index'
import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

import BG from '../assets/bg.svg'
import { Illustration, AstronautStyled } from '../components/Illustration'
import Divider from '../components/Divider'
import About from '../components/About'
import Footer from '../components/Footer'
import Page from '../components/Page'
import Venue from '../components/Venue'
import Button from '../components/Button'
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
              Apply to speak
            </Button>
          </InfoContainer>
          <Illustration>
            <AstronautStyled />
            <BG />
          </Illustration>
        </Main>
      </Page>
      <Divider />
      <ScrollableAnchor id={'about'}>
        <About />
      </ScrollableAnchor>
      <ScrollableAnchor id={'venue'}>
        <div
          css={`
            padding-bottom: 110px;
            background: #f3f4f9;
            padding-top: 0;
          `}
        >
          <Venue />
        </div>
      </ScrollableAnchor>
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
    }
  }
`

export default IndexPage
