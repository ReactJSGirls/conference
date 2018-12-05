import React from 'react'
import Logo from '../assets/logo.svg'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

const GirlsLogo = styled(Logo)`
  width: 145px;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
`

const H1 = styled.h1`
  color: #fb8e82;
  font-size: 48px;
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
  font-size: 30px;
  padding-top: 40px;
  display: block;
  margin: auto;
  text-align: center;
`

const Nav = styled.nav`
  padding-top: 60px;
  max-width: 90%;
  margin: auto;
`

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulWebsiteData {
          edges {
            node {
              conferenceName
              tagline
              dateAndLocation
            }
          }
        }
      }
    `}
    render={({ allContentfulWebsiteData: { edges } }) => {
      const data = edges[0].node
      return (
        <Nav role="navigation">
          <GirlsLogo />
          <H1>{data.conferenceName}</H1>
          <Tagline>{data.tagline}</Tagline>
          <Date>{data.dateAndLocation}</Date>
        </Nav>
      )
    }}
  />
)
