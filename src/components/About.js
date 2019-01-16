import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'

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
      <PageTitle>About</PageTitle>
      <h3>
        ReactJS Girls is one-day non-profit by-community for-community
        conference for the JS community to celebrate React. The conference will
        gather 300 React developers for a single-track content-rich day, where
        women will take the stage
      </h3>
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
        <li>
          ReactJS Girls is a one day conference for every React developer, where
          women-identified speakers take the stage
        </li>
        <li>
          ReactJS Girls main focus is supporting the diversity community in
          React and offer a safe place for every developer
        </li>
        <li>
          The conference will gather 300 React developers for a single-track
          content-rich day in London
        </li>
      </ul>
    </Page>
  </div>
)

export default About
