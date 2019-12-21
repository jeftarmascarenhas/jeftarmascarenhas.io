import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import Box from 'components/box'
import SEO from 'components/seo'
import Avatar from 'components/avatar'
import BlogList from 'components/blogList'
import jeftarImg from 'images/avatar.png'
import * as C from 'styles/common'
import { Colors } from 'styles/variables'
import * as S from 'styles/pageStyles/homeStyled'
import * as utils from 'helpers/utils'

const IndexPage = () => {
  const [activeColor, setActiveColor] = useState(
    utils.getLocalStore('postColor')
  )

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

  const setColor = color => {
    utils.setLocalStore('postColor', color)
    setActiveColor(color)
  }

  return (
    <Layout>
      <SEO
        title="Home"
        lang={intl.locale}
        keywords={[
          'React',
          'Dicas rápidas',
          'JavaScript',
          'React Native',
          'Nodejs',
          'Quick Tip',
        ]}
      />
      <S.HomeContent>
        <S.PersonalInfo>
          <Header siteTitle={data.site.siteMetadata.title} />
          <S.PersonAuthor>
            <Avatar src={jeftarImg} size="largger" alt="Jeftar Mascarenhas" />
            <span className="ml-2 author-name">
              Recife, Pernambuco - Brasil
            </span>
          </S.PersonAuthor>
          <Box className="mb-4" variant="secondary" radius="bottom-right">
            <C.Title>{intl.formatMessage({ id: 'work' })}</C.Title>
            <p>{intl.formatMessage({ id: 'workerDescription' })}</p>
          </Box>
          <Box border radius="top-left" variant="default" className="mb-2">
            <C.Title>{intl.formatMessage({ id: 'life' })}</C.Title>
            <p>{intl.formatMessage({ id: 'lifeDescription' })}</p>
          </Box>
        </S.PersonalInfo>
        <S.LastPosts bgColor={activeColor}>
          <C.Title>{intl.formatMessage({ id: 'blog.lastPosts' })}</C.Title>
          <BlogList />
          <S.AllPost className="mt-3" to="/blog/">
            {intl.formatMessage({ id: 'blog.viewPosts' })}
          </S.AllPost>
          <S.SelectColor>
            <S.ButtonColor
              type="button"
              bgColor={Colors.yellow}
              className="btn-color"
              active={Colors.yellow === activeColor}
              onClick={() => setColor(Colors.yellow)}
            >
              Yellow
            </S.ButtonColor>
            <S.ButtonColor
              type="button"
              bgColor={Colors.green}
              active={Colors.green === activeColor}
              className="btn-color"
              onClick={() => setColor(Colors.green)}
            >
              Green
            </S.ButtonColor>
            <S.ButtonColor
              type="button"
              bgColor={Colors.blue}
              active={Colors.blue === activeColor}
              className="btn-color"
              onClick={() => setColor(Colors.blue)}
            >
              Blue
            </S.ButtonColor>
          </S.SelectColor>
        </S.LastPosts>
      </S.HomeContent>
    </Layout>
  )
}

export default IndexPage
