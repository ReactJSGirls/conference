import React from 'react'
import Subscribe from '../components/subscribe'
import Layout from '../layout/index'
import styled from 'styled-components'
import YLD from '../assets/yld.svg'
import Button from '../components/Button'
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

const Buttons = styled.section`
  display: flex;
  margin-top: 30px;
`

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  margin-top: 50px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Main>
        <Content>
          <Buttons>
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
          </Buttons>
          <Subscribe />
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
