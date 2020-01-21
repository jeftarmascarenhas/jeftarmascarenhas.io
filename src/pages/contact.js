import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import SEO from 'components/seo'
import Box, { BoxBody } from 'components/box'
import * as C from 'styles/common'

const Contact = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="Contact Me" />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'dev.title' })}
      />
      <Box className="my-4">
        <BoxBody>
          <C.Title>{intl.formatMessage({ id: 'dev.title' })}</C.Title>
          <C.SubTitle>
            {intl.formatMessage({ id: 'dev.description' })}
          </C.SubTitle>
        </BoxBody>
      </Box>
    </Layout>
  )
}

export default Contact
