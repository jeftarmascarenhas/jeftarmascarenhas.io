import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import Box from 'components/box'
import SEO from 'components/seo'
import BlogList from 'components/blogList'
import * as C from 'styles/common'
import * as S from 'styles/pageStyles/homeStyled'

const IndexPage = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <S.HomeContent>
        <S.PersonalInfo>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Box className="mb-2">
            <C.Title>{intl.formatMessage({ id: 'work' })}</C.Title>
            <p>{intl.formatMessage({ id: 'workerDescription' })}</p>
          </Box>
          <Box variant="second" className="mb-2">
            <C.Title>{intl.formatMessage({ id: 'life' })}</C.Title>
            <p>{intl.formatMessage({ id: 'lifeDescription' })}</p>
          </Box>
        </S.PersonalInfo>
        <S.LastPosts>
          <C.Title>Last Posts</C.Title>
          <BlogList />
          <S.AllPost className="mt-3" to="/blog/">
            View posts
          </S.AllPost>
        </S.LastPosts>
      </S.HomeContent>
    </Layout>
  )
}

export default IndexPage
