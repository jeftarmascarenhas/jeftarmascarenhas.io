import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

const BlogPost = props => {
  console.log("BlogPost: ", props)
  const post = props.data.markdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <h2>{post.frontmatter.title}</h2>
      <h3>{post.frontmatter.description}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

export default BlogPost
