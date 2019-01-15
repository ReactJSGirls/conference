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

// const H1 = styled.h1`
//   color: #fb8e82;
//   font-size: 48px;
//   text-transform: uppercase;
//   text-align: center;
// `

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
            <Li>About</Li>
            <Li>Tickets</Li>
            <Li>Venue</Li>
          </ul>
        </nav>
      </HeaderStyled>
    )}
  />
)

export default Header
