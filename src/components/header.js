import React from 'react'
import Logo from '../assets/logo.svg'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const GirlsLogo = styled(Logo)`
  width: 45px;
  height: 40px;
  display: block;
  transform: rotate(0deg);
  transition: transform 500ms ease;
  margin-right: 12px;

  &:hover {
    transform: rotate(360deg);
  }
`

const HeaderStyled = styled.header`
  padding-top: 20px;

  width: 1160px;
  max-width: 90%;
  margin: auto;
  margin-bottom: 160px;
  display: flex;
  justify-content: space-between;
`

const Li = styled.li`
  color: white;
  font-size: 18px;

  a {
    color: white;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`

const query = graphql`
  query details {
    contentfulWebsiteData {
      conferenceName
      tagline
      dateAndLocation
    }
  }
`

const Header = () => (
  <StaticQuery
    query={query}
    render={({
      contentfulWebsiteData: { conferenceName, tagline, dateAndLocation }
    }) => (
      <HeaderStyled>
        <section
          css={`
            display: flex;
            align-items: center;
          `}
        >
          <GirlsLogo />
          <p
            css={`
              @media screen and (max-width: 932px) {
                color: white;
              }
            `}
          >
            {conferenceName}
          </p>
        </section>

        <nav>
          <ul
            css={`
              display: flex;
            `}
          >
            <Li>
              <a href="#about">About</a>
            </Li>
            <Li>
              <a href="#venue">Venue</a>
            </Li>
            <Li>
              <a href="#tickets">Tickets</a>
            </Li>
            <Li>
              <a href="#community">Community</a>
            </Li>
          </ul>
        </nav>
      </HeaderStyled>
    )}
  />
)

export default Header
