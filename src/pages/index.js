import React from 'react'
import Subscribe from '../components/subscribe'
import Layout from '../layout/index'
import styled from 'styled-components'
import YLD from '../assets/yld.svg'

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

const Button = styled.a`
  text-decoration: none;
  background: transparent;
  border: 3px solid #fb8e82;
  padding: 10px 15px;
  position: relative;
  transition: all 200ms ease;

  &:hover {
    color: #313131;

    &:after,
    &:before {
      width: 50%;
    }
  }

  &:after,
  &:before {
    transition: all 200ms ease;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: #fb8e82;
    z-index: -1;
  }

  &:before {
    right: 0;
    left: auto;
  }

  &:first-child {
    margin-right: 20px;
  }
`

const Footer = styled.footer`
  height: 50px;
  margin-top: 40px;
  display: flex;
  align-items: flex-end;
  position: relative;
  top: 100%;
  padding-bottom: 20px;

  a:not(:last-child) {
    margin-right: 20px;
  }
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
            Organized by{' '}
            <YLD
              style={{
                marginLeft: -15,
                marginRight: -20,
                transform: 'scale(0.5)'
              }}
            />
          </LogoWrapper>
        </Content>
        <Footer>
          <a
            href="https://www.notion.so/yldeditorial/REACTJS-GIRLS-Code-of-Conduct-79c2d5f938a14ac6a885b9b77d6044f6"
            rel="noopener noreferrer"
            target="_blank"
          >
            Code of Conduct
          </a>
          <a
            href="mailto:hey@reactjsgirls.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Contact
          </a>
        </Footer>
      </Main>
    </Layout>
  )
}

export default IndexPage
