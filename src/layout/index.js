import React from 'react'
import Header from '../components/header'
import { StaticQuery, graphql } from 'gatsby'
import GlobalStyle from '../utils/global'
import Head from '../components/Head'
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({ scrollDuration: 800, keepLastAnchorHash: true })

const query = graphql`
  query HeadingQuery {
    contentfulWebsiteData {
      seoTitle
      seoDescription
    }
  }
`

const Template = ({ children }) => {
  return (
    <StaticQuery
      query={query}
      render={({ contentfulWebsiteData }) => (
        <>
          <Head {...contentfulWebsiteData} />
          <Header />
          <GlobalStyle />

          {children}
        </>
      )}
    />
  )
}

export default Template
