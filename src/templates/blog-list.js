import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

const BlogList = props => {
  console.log("BlogList: ", props)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog List</h1>
    </Layout>
  )
}
export default BlogList
