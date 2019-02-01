import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'
import ReactMarkdown from 'react-markdown'

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
      <PageTitle
        css={`
          font-size: 28px;
          margin-top: 40px;
          padding-bottom: 30px;
        `}
      >
        History
      </PageTitle>
      {/* eslint-disable react/display-name */}

      <ReactMarkdown
        className="markdown"
        source={history}
        renderers={{
          text: props => (
            <span
              {...props}
              css={`
                display: block;
                margin-bottom: 20px;
                line-height: 36px;
                font-size: 20px;
              `}
            />
          )
        }}
      />
      {/* eslint-enable react/display-name */}
    </Page>
  </div>
)

export default About
