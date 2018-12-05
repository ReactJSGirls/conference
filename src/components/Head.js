import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ seoTitle, seoDescription }) => (
  <Helmet>
    <html lang="en" />
    <title>{seoTitle}</title>
    <meta name="description" content={seoDescription} />
    <meta charset="utf-8" />
    <meta
      name="image"
      content="https://rawcdn.githack.com/ReactJSGirls/conference/e0eb639f54f8b18c83177c6b44ab2199b09665d9/src/assets/logo.png"
    />
    <meta itemProp="name" content={seoTitle} />
    <meta itemProp="description" content={seoDescription} />
    <meta
      itemProp="image"
      content="https://rawcdn.githack.com/ReactJSGirls/conference/e0eb639f54f8b18c83177c6b44ab2199b09665d9/src/assets/logo.png"
    />
    <meta name="og:title" content={seoTitle} />
    <meta name="og:description" content={seoDescription} />
    <meta
      name="og:image"
      content="https://rawcdn.githack.com/ReactJSGirls/conference/e0eb639f54f8b18c83177c6b44ab2199b09665d9/src/assets/logo.png"
    />
    <meta name="og:url" content="https://reactjsgirls.com" />
    <meta name="og:site_name" content={seoTitle} />
    <meta name="og:type" content="website" />
  </Helmet>
)

export default Head
