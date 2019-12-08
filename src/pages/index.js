import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import BlogList from "components/blogList"

const IndexPage = props => {
  console.log("Index: ", props)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <BlogList />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
