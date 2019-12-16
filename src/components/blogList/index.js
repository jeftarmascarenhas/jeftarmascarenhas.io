import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BlogItem from 'components/blogItem'

const blogListQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
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
  return (
    <>
      {list.map(({ node }) => {
        const info = {
          slug: node.fields.slug,
          title: node.frontmatter.title,
          description: node.frontmatter.description,
          date: node.frontmatter.date,
          timeToRead: node.timeToRead,
          tags: node.frontmatter.tags,
        }
        return <BlogItem key={node.id} info={info} />
      })}
    </>
  )
}

export default BlogList
