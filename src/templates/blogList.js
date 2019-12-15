import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from 'layouts'
import SEO from 'components/seo'

const BlogList = ({ data }) => {
  const list = data.allMarkdownRemark.edges
  console.log(list)
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog List</h1>
      <ul>
        {list.map(({ node }) => (
          <li key={node.id}>
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

BlogList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
}

export default BlogList
