import React from 'react'
import Header from '../components/header'
import { StaticQuery, graphql } from 'gatsby'
import GlobalStyle from '../utils/global'
import Head from '../components/Head'

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
          <div style={{ maxWidth: '90%', margin: '0 auto' }}>{children}</div>
        </>
      )}
    />
  )
}

export default Template
