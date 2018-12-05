import React from 'react'
import Container from '../components/container'
import Navigation from '../components/navigation'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import styles from '../utils/global'

const Template = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allContentfulWebsiteData {
            edges {
              node {
                seoTitle
                seoDescription
              }
            }
          }
        }
      `}
      render={({ allContentfulWebsiteData: { edges } }) => (
        <>
          <Helmet>
            <html lang="en" />
            <title>{edges[0].node.seoTitle}</title>
            <meta name="description" content={edges[0].node.seoDescription} />
          </Helmet>
          <Navigation />
          <Global styles={styles} />
          <Container>{children}</Container>
        </>
      )}
    />
  )
}

export default Template
