import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import Page from './Page'
import Button from './Button'

const Communities = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a:not(:last-child) {
    margin-right: 30px;
  }
`
const About = ({ intro: { intro }, partners }) => (
  <div
    css={`
      background: #f3f4f9;
      padding: 50px 0;
      padding-bottom: 200px;
    `}
  >
    <Page fancy>
      <PageTitle>Community & Sponsors</PageTitle>
      <p>
        We have a small number of diversity tickets available to those from
        underrepresented backgrounds (including but not limited to women, people
        of colour, LGBTQIA+ or disabled people).
      </p>
      <PageTitle
        css={`
          font-size: 28px;
          margin-top: 40px;
          padding-bottom: 30px;
        `}
      >
        Community
      </PageTitle>
      <p
        css={`
          margin-bottom: 40px;
        `}
      >
        {intro}
      </p>
      <Communities>
        {partners.map(partner => (
          <a
            key={partner.id}
            rel="noopener noreferrer"
            href={partner.link}
            target="_blank"
          >
            {' '}
            <img height="95" src={partner.logo.file.url} />
          </a>
        ))}
      </Communities>

      <PageTitle
        css={`
          font-size: 28px;
          margin-top: 40px;
          padding-bottom: 30px;
        `}
      >
        Partners
      </PageTitle>
      <p>
        Thank you to our partners and sponsors for investing into our diverse
        design and engineering community:
      </p>
      <h4
        css={`
          margin-top: 20px;
        `}
      >
        Organizer
      </h4>
      <a rel="noopener noreferrer" href="https://yld.io" target="_blank">
        {' '}
        <img
          width="130"
          src="https://uploads-ssl.webflow.com/5b3dfe51f5523c976ad4b12b/5b436659d4f8bb51f436538a_*YLD%20logo%20-%20main-p-500.jpeg"
        />
      </a>

      <p
        css={`
          margin: 40px 0;
        `}
      >
        Join the conversation with 300 React developers discussing the future of
        react.
      </p>
      <Button
        rel="noopener noreferrer"
        href="https://yld.typeform.com/to/xz4xYb"
        target="_blank"
      >
        <span>Sponsor the event</span>
      </Button>
    </Page>
  </div>
)

export default About
