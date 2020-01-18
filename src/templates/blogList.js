import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useIntl, Link } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import SEO from 'components/seo'
import Header from 'components/header'
import Pagination from 'components/pagination'
import Box, { BoxHeader, BoxBody, BoxFooter } from 'components/box'
import Tag from 'components/tag'
import * as S from 'styles/templateStyles/blogListStyled'
import * as C from 'styles/common'

const BlogList = ({ data, pageContext }) => {
  const intl = useIntl()
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/blog/' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`
  const list = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'header.myBlog' })}
      />
      <S.BlogList>
        {list.map(({ node }) => (
          <Box
            className="box"
            radius="top-right"
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
            <BoxFooter>
              {!!node.frontmatter.tags &&
                node.frontmatter.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              <hr />
            </BoxFooter>
          </Box>
        ))}
      </S.BlogList>
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
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
  pageContext: PropTypes.shape({
    currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    numPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
}

export default BlogList
