import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import SEO from 'components/seo'
import Header from 'components/header'
import Box, { BoxHeader, BoxBody } from 'components/box'
import Tag from 'components/tag'
import * as S from 'styles/templateStyles/blogListStyled'
import * as C from 'styles/common'

const BlogList = ({ data }) => {
  const intl = useIntl()
  const list = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Header siteTitle="Jeftar Mascarenhas" description="My blog" />
      <S.BlogList>
        {list.map(({ node }) => (
          <Box
            className="box"
            as={Link}
            key={node.id}
            to={`/${node.fields.slug}`}
          >
            <BoxHeader>
              {node.frontmatter.date && (
                <C.DateTime>
                  {`${node.frontmatter.date} - `}
                  <span>
                    {`${intl.formatMessage({ id: 'blog.read' })} ${
                      node.timeToRead
                    } min`}
                  </span>
                </C.DateTime>
              )}
            </BoxHeader>
            <BoxBody>
              <C.Title>{node.frontmatter.title}</C.Title>
              <C.SubTitle>{node.frontmatter.description}</C.SubTitle>
            </BoxBody>
            <div>
              {!!node.frontmatter.tags &&
                node.frontmatter.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              <hr />
            </div>
          </Box>
        ))}
      </S.BlogList>
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
