import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'

const About = ({ headline, text, history }) => (
  <div
    css={`
      background: #f3f4f9;
      padding: 50px 0;
      padding-bottom: 100px;
    `}
  >
    <Page
      fancy
      css={`
        overflow: auto;
      `}
    >
      <PageTitle>Tickets</PageTitle>
      <tito-widget event="reactjs-girls-conference/reactjs-girls-conference" />
    </Page>
  </div>
)

export default About
