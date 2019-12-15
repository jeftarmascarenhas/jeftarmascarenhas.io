import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Image from 'components/image'
import SEO from 'components/seo'
import BlogList from 'components/blogList'

const IndexPage = props => {
  const intl = useIntl()
  console.log('Index: ', props)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{intl.formatMessage({ id: 'title' })}</h1>
      <p>{intl.formatMessage({ id: 'welcome' })}</p>
      <p>{intl.formatMessage({ id: 'description' })}</p>
      <BlogList />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">{intl.formatMessage({ id: 'go_page2' })}</Link>
      <br />
      <Link to="/about/">Sobre</Link>
    </Layout>
  )
}

export default IndexPage
