import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
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

const Footer = () => (
  <FooterStyled>
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
  </FooterStyled>
)

export default Footer
