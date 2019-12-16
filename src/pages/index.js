import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
// import Image from 'components/image'
import Box from 'components/box'
import SEO from 'components/seo'
import BlogList from 'components/blogList'
import * as C from 'styles/common'
import * as S from './pageStyles/homeStyled'

const IndexPage = props => {
  const intl = useIntl()
  console.log('Index: ', props)
  return (
    <Layout>
      <SEO title="Home" />
      <S.HomeContnet>
        <S.PersonalInfo>
          <Box className="mb-2">
            <C.Title>{intl.formatMessage({ id: 'work' })}</C.Title>
            <p>{intl.formatMessage({ id: 'workerDescription' })}</p>
          </Box>
          <Box variant="second" className="mb-2">
            <C.Title>{intl.formatMessage({ id: 'life' })}</C.Title>
            <p>{intl.formatMessage({ id: 'lifeDescription' })}</p>
          </Box>
          {/*
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <Link to="/page-2/">{intl.formatMessage({ id: 'go_page2' })}</Link>
          <br />
          <Link to="/about/">Sobre</Link> */}
        </S.PersonalInfo>
        <S.LastPosts>
          <C.Title>Last Posts</C.Title>
          <BlogList />
          <Link to="/blog/">
            <C.Title>View posts</C.Title>
          </Link>
        </S.LastPosts>
      </S.HomeContnet>
    </Layout>
  )
}

export default IndexPage
