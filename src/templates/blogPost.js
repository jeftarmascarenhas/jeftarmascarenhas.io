import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import parser from 'html-react-parser'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import DisqusComment from 'components/disqusComment'
import SEO from 'components/seo'
import Box, { BoxHeader, BoxBody } from 'components/box'
// import GoogleAds from 'components/googleAds'
import * as C from 'styles/common'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={
          post.frontmatter.image
            ? `https://jeftar.com.br${post.frontmatter.image}`
            : 'https://jeftar.com.br/assets/img/jeftar-icon.png'
        }
      />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'header.myBlog' })}
      />
      {/* <GoogleAds layout="inArticle" /> */}
      <Box
        className="my-4"
        radius="top-right"
        itemScope
        itemType="http://schema.org/Article"
      >
        <BoxHeader>
          {post.frontmatter.date && (
            <C.DateTime>
              {`${post.frontmatter.date} - `}
              <span>
                {`${intl.formatMessage({ id: 'blog.read' })} ${
                  post.timeToRead
                } min`}
              </span>
            </C.DateTime>
          )}
          <C.Title>{post.frontmatter.title}</C.Title>
          <C.SubTitle>{post.frontmatter.description}</C.SubTitle>
          <hr />
        </BoxHeader>
        <BoxBody>
          <div itemProp="articleBody">{parser(post.html)}</div>
        </BoxBody>
        {/* <GoogleAds layout="image"/> */}
      </Box>
      <Box border radius="top-left" className="mb-2">
        <BoxHeader>
          <C.Title>{intl.formatMessage({ id: 'comments' })}</C.Title>
        </BoxHeader>
        <BoxBody>
          <DisqusComment
            title={post.frontmatter.title}
            slug={post.fields.slug}
          />
        </BoxBody>
      </Box>
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
        image
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
        date: PropTypes.string,
        image: PropTypes.string,
      }),
      timeToRead: PropTypes.number,
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
}

export default BlogPost
