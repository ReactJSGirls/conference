import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import styled, { css } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const GirlsLogo = styled(Logo)`
  width: 45px;
  height: 40px;
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

const HeaderStyled = styled.header`
  padding-top: 20px;

  width: 1500px;
  max-width: 90%;
  margin: auto;
  margin-bottom: 160px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1023px) {
    margin-bottom: 40px;
  }
`

const Li = styled.li`
  color: white;
  font-size: 18px;

  a {
    color: white;
    text-decoration: none;

    @media screen and (max-width: 1023px) {
      color: #41495d;
    }
  }

  &:not(:last-child) {
    margin-right: 40px;
  }

  ${props =>
    props.dark &&
    css`
      color: #41495d;
      a {
        color: #41495d;
      }
    `}
`

const MobileNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 9;
  align-items: center;
  left: 0;
  top: 0;
  opacity: 0;
  display: none;
  transition: all 200ms ease;

  ${props =>
    props.open &&
    css`
      opacity: 1;
      display: flex;
    `}

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;

    li {
      text-align: center;
      width: 100%;
      font-size: 36px;

      &:not(:last-child) {
        margin: 0;
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`

const Transform = css`
  &:after {
    transform: rotate(-45deg) translateY(-50%) translateX(42%);
  }

  &:before {
    transform: rotate(45deg) translateY(-50%) translateX(30%);
  }
`

const MobileMenuOpen = styled.button`
  border: none;
  background: transparent;
  position: relative;
  z-index: 11;
  cursor: pointer;
  outline: none;

  ${props =>
    props.open &&
    css`
      ${Transform}
    `}

  &:before,
  &:after {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: #41495d;
    position: relative;
    transition: all 200ms ease;
  }

  &:after {
    top: 8px;
  }

  @media screen and (min-width: 769px) {
    display: none;
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
              <p>{conferenceName}</p>
            </section>{' '}
          </Link>
          <MobileMenuOpen
            onClick={() => setMenu(!menuOpen)}
            open={menuOpen}
            aria-label="Toggle Menu"
          />
          <nav
            css={`
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
              <Li dark={darkMenu}>
                <a href="#about">About</a>
              </Li>
              <Li dark={darkMenu}>
                <a href="#venue">Venue</a>
              </Li>
              <Li dark={darkMenu}>
                <a href="#tickets">Tickets</a>
              </Li>
              <Li dark={darkMenu}>
                <a href="#community">Community</a>
              </Li>
            </ul>
          </nav>
          <MobileNav open={menuOpen}>
            <ul
              css={`
                display: flex;
              `}
            >
              <Li onClick={() => setMenu(false)} dark={darkMenu}>
                <a href="#about">About</a>
              </Li>
              <Li onClick={() => setMenu(false)} dark={darkMenu}>
                <a href="#venue">Venue</a>
              </Li>
              <Li onClick={() => setMenu(false)} dark={darkMenu}>
                <a href="#tickets">Tickets</a>
              </Li>
              <Li onClick={() => setMenu(false)} dark={darkMenu}>
                <a href="#community">Community</a>
              </Li>
            </ul>
          </MobileNav>
        </HeaderStyled>
      )}
    />
  )
}
export default Header
