import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'

const About = ({ headline, text }) => (
  <div
    css={`
      background: #f3f4f9;
      padding: 50px 0;
      padding-bottom: 200px;
    `}
  >
    <Page fancy>
      <PageTitle>About</PageTitle>
      <h3>{headline}</h3>
      <ul
        css={`
          margin-top: 60px;
          li {
            margin-top: 20px;
            line-height: 36px;
            font-size: 20px;
          }
        `}
      >
        {text.split('\n').map((reason, i) => (
          <li key={i}>{reason}</li>
        ))}
      </ul>
    </Page>
  </div>
)

export default About
