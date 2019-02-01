import React, { useState, Fragment } from 'react'
import Logo from '../assets/logo.svg'
import styled, { css, createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

import { HeaderStyled, Li, MobileNav, MobileMenuOpen } from './Menus.elements'

const OverlayStyles = createGlobalStyle`
  ${props =>
    props.open &&
    css`
      body {
        height: 100vh;
        overflow: hidden;
      }
    `}
`

const GirlsLogo = styled(Logo)`
  width: 65px;
  height: 65px;
  display: block;
  transform: rotate(0deg);
  transition: transform 500ms ease;
  margin-right: 12px;
  position: relative;
  z-index: 10;

  &:hover {
    transform: rotate(360deg);
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

const ListItems = ({ closeMenu, darkMenu }) => (
  <Fragment>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#about">About</a>
    </Li>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#venue">Venue</a>
    </Li>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#tickets">Tickets</a>
    </Li>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#community">Community</a>
    </Li>
  </Fragment>
)

const Header = ({ darkMenu }) => {
  const [menuOpen, setMenu] = useState(false)
  return (
    <StaticQuery
      query={query}
      render={({
        contentfulWebsiteData: { conferenceName, tagline, dateAndLocation }
      }) => (
        <HeaderStyled>
          <Link to="/">
            <section
              css={`
                display: flex;
                align-items: center;
              `}
            >
              <GirlsLogo />
              <p
                css={`
                  font-weight: 600;
                  font-size: 16px;
                  @media screen and (max-width: 767px) {
                    display: none;
                  }
                `}
              >
                <span
                  css={`
                    display: block;
                    line-height: 1;
                    color: #fb8e82;
                  `}
                >
                  ReactJS Girls{' '}
                </span>
                {conferenceName.split('ReactJS Girls')}
              </p>
            </section>{' '}
          </Link>
          <OverlayStyles open={menuOpen} />
          <MobileMenuOpen
            onClick={() => setMenu(!menuOpen)}
            open={menuOpen}
            aria-label="Toggle Menu"
          />
          <nav
            css={`
              z-index: 1;
              position: relative;
              @media screen and (max-width: 768px) {
                display: none;
              }
            `}
          >
            <ul
              css={`
                display: flex;
              `}
            >
              <ListItems darkMenu={darkMenu} closeMenu={() => setMenu(false)} />
            </ul>
          </nav>
          <MobileNav open={menuOpen}>
            <ul
              css={`
                display: flex;
              `}
            >
              <ListItems darkMenu={darkMenu} closeMenu={() => setMenu(false)} />
            </ul>
          </MobileNav>
        </HeaderStyled>
      )}
    />
  )
}
export default Header
