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
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
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
