import React from 'react'
import Logo from '../assets/logo.svg'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const GirlsLogo = styled(Logo)`
  width: 145px;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
  transform: rotate(0deg);
  transition: transform 500ms ease;

  &:hover {
    transform: rotate(360deg);
  }
`

const H1 = styled.h1`
  color: #fb8e82;
  font-size: 58px;
  text-transform: uppercase;
  text-align: center;
`

const Tagline = styled.p`
  font-size: 24px;
  max-width: 500px;
  display: block;
  margin: auto;
  text-align: center;
`

const Date = styled.span`
  font-size: 40px;
  padding-top: 40px;
  display: block;
  margin: auto;
  text-align: center;
`

const Nav = styled.nav`
  max-width: 90%;
  margin: auto;
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
      <Nav role="navigation">
        <GirlsLogo />
        <H1>{conferenceName}</H1>
        <Tagline>{tagline}</Tagline>
        <Date>{dateAndLocation}</Date>
      </Nav>
    )}
  />
)

export default Header
