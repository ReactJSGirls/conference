import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'
import Button from './Button'

const About = () => (
  <div
    css={`
      background: #f3f4f9;
      padding: 50px 0;
      padding-bottom: 200px;
    `}
  >
    <Page
      css={`
        background: #ffffff;
        box-shadow: 0 72px 80px 0 rgba(45, 54, 95, 0.05);
        padding: 50px;
        border-radius: 20px;
      `}
    >
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
        Design Systems London is built by and for the community. The conference
        is inspired by the previously organised open-source conference ReactFest
        where Sid gave a talk on Design Systems with React. Both ReactFest and
        DSL are brought to you by front-end and design communities from various
        meetups and non-profit conferences - we can't thank them enough for
        providing spaces for learning. 100% of profits will be invested back
        into the community - have your say on this when you get your ticket.
      </p>
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
        href="mailto:sponsor@reactjsgirls.com"
        target="_blank"
      >
        <span>Sponsor the event</span>
      </Button>
    </Page>
  </div>
)

export default About
