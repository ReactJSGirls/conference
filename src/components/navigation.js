import React from 'react'
import Logo from '../assets/logo.svg'
import styled from '@emotion/styled'

const GirlsLogo = styled(Logo)`
  width: 145px;
  display: block;
  margin: 0 auto;
  margin-top: 60px;
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
  max-width: 90%;
  margin: auto;
`

export default () => (
  <Nav role="navigation">
    <GirlsLogo />
    <H1>ReactJS Girls Conference</H1>
    <Tagline>
      A conference for every React developer where women take the stage
    </Tagline>
    <Date>3 May, London UK</Date>
  </Nav>
)
