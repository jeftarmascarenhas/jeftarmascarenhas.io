import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import parser from 'html-react-parser'

import Layout from 'layouts'
import SEO from 'components/seo'

const BlogPost = ({ data, ...props }) => {
  console.log('BlogPost: ', props)
  console.log('BlogPost: ', data)
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>{post.frontmatter.title}</h2>
      <h3>{post.frontmatter.description}</h3>
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      {parser(post.html)}
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
        tags
        # image {
        #   id
        #   publicURL
        #   childImageSharp {
        #     fluid(maxWidth: 1280, quality: 60) {
        #       ...GatsbyImageSharpFluid
        #     }
        #   }
        # }
      }
      timeToRead
    }
  }
`

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
}

export default BlogPost
