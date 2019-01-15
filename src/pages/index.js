import React from 'react'
// import Subscribe from '../components/subscribe'
import Layout from '../layout/index'
import styled from 'styled-components'
import YLD from '../assets/yld.svg'
import Twitter from '../assets/twitter.svg'
// import Button from '../components/Button'
import Page from '../components/Page'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  flex-grow: 1;
`

// const Buttons = styled.section`
//   display: flex;
//   margin-top: 30px;
// `

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  margin-top: 50px;
`

const Container = styled.div`
  width: 1100px;
  max-width: 90%;
  margin: auto;
  padding: 60px 0;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Content>
          <Page light center>
            <Container>
              <h3
                css={`
                  padding-top: 40px;
                `}
              >
                ReactJS Girls is one-day non-profit by-community for-community
                conference for the JS community to celebrate React. The
                conference will gather 300 React developers for a single-track
                content-rich day, where women will take the stage
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
                  ReactJS Girls is a one day conference for every React
                  developer, where women-identified speakers take the stage
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
            </Container>
          </Page>
          <Page>
            <Container>
              <h1
                css={`
                  margin-bottom: 80px;
                `}
              >
                Venue
              </h1>

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
                  <h4>Email</h4>
                  <p
                    css={`
                      margin-bottom: 20px;
                    `}
                  >
                    <a
                      css={`
                        text-decoration: underline;
                      `}
                      href="mailto:hey@reactjsgirls.com"
                    >
                      hey@reactjsgirls.com
                    </a>
                  </p>
                </div>
                <Map />
              </div>
            </Container>
          </Page>
          {/* <Buttons>
              <Button
                rel="noopener noreferrer"
                href="https://yld.typeform.com/to/gfZ2jc"
                target="_blank"
              >
                Apply to speak
              </Button>
            <Button
              rel="noopener noreferrer"
              href="mailto:sponsor@reactjsgirls.com"
              target="_blank"
            >
              Sponsor the event
            </Button>
          </Buttons> */}
          {/* <Subscribe /> */}
          <LogoWrapper
            href="https://yld.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Organised by{' '}
            <YLD
              style={{
                marginLeft: -15,
                marginRight: -20,
                transform: 'scale(0.5)'
              }}
            />
          </LogoWrapper>
        </Content>
        <Footer />
      </Main>
    </Layout>
  )
}

export default IndexPage
