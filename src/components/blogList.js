import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
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

const BlogList = () => {
  const allBlogList = useStaticQuery(blogListQuery)
  const list = allBlogList.allMarkdownRemark.edges
  console.log(allBlogList)
  console.log(list)
  return (
    <div>
      <h3>List Blog</h3>
    </div>
  )
}

export default BlogList
