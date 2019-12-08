import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

const BlogList = props => {
  console.log("BlogList: ", props)
  const list = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog List</h1>
      <ul>
        {list.map(({ node }, idx) => (
          <li key={idx}>
            <Link to={`/${node.fields.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <h4>{node.frontmatter.description}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
            title
            tags
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
