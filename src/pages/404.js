import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { ReactComponent as Error } from 'images/error.svg'
import Layout from 'layouts'
import Header from 'components/header'
import SEO from 'components/seo'
import Box, { BoxBody } from 'components/box'
import * as S from 'styles/pageStyles/notFoundStyled'
import * as C from 'styles/common'

const NotFoundPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'header.notfound' })}
      />
      <Box className="my-4">
        <BoxBody>
          <S.Grid>
            <div>
              <C.Title>{intl.formatMessage({ id: 'notfound.title' })}</C.Title>
              <p>{intl.formatMessage({ id: 'notfound.description' })}</p>
            </div>
            <S.ContentImg>
              <Error />
            </S.ContentImg>
          </S.Grid>
        </BoxBody>
      </Box>
    </Layout>
  )
}

export default NotFoundPage
