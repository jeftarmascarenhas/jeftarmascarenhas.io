import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import SEO from 'components/seo'
import Box, { BoxBody } from 'components/box'
import * as C from 'styles/common'

import * as S from 'styles/pageStyles/myLabStyled'

const MyLab = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="My Labrary" />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'dev.title' })}
      />
      <S.MyLabList>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <Box key={item} className="lab-item">
            <BoxBody>
              <C.Title>{intl.formatMessage({ id: 'dev.title' })}</C.Title>
              <C.SubTitle>
                {intl.formatMessage({ id: 'dev.description' })}
              </C.SubTitle>
            </BoxBody>
          </Box>
        ))}
      </S.MyLabList>
    </Layout>
  )
}

export default MyLab
