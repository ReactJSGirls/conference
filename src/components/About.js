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
    <Page
      css={`
        background: #ffffff;
        box-shadow: 0 72px 80px 0 rgba(45, 54, 95, 0.05);
        padding: 50px;
        border-radius: 20px;
      `}
    >
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
