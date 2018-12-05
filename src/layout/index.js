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
            <meta charset="utf-8" />
            <meta
              name="image"
              content="https://rawcdn.githack.com/ReactJSGirls/conference/0668dada75f299cb2cabdd142a6f4277eb378372/src/assets/favicon.png"
            />
            <meta itemProp="name" content={edges[0].node.seoTitle} />
            <meta
              itemProp="description"
              content={edges[0].node.seoDescription}
            />
            <meta
              itemProp="image"
              content="https://rawcdn.githack.com/ReactJSGirls/conference/0668dada75f299cb2cabdd142a6f4277eb378372/src/assets/favicon.png"
            />
            <meta name="og:title" content={edges[0].node.seoTitle} />
            <meta
              name="og:description"
              content={edges[0].node.seoDescription}
            />
            <meta
              name="og:image"
              content="https://rawcdn.githack.com/ReactJSGirls/conference/0668dada75f299cb2cabdd142a6f4277eb378372/src/assets/favicon.png"
            />
            <meta name="og:url" content="https://reactjsgirls.com" />
            <meta name="og:site_name" content={edges[0].node.seoTitle} />
            <meta name="og:type" content="website" />
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
