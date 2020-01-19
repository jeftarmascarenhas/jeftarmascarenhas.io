import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { experiencies } from 'helpers/static-data'
import Layout from 'layouts'
import Header from 'components/header'
import SEO from 'components/seo'
import Tag from 'components/tag'
import Box, { BoxImg, BoxBody, BoxFooter } from 'components/box'
import * as C from 'styles/common'

const ExperiencePage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        title="Jeftar Mascarenhas - Experience"
        description="Saiba onde trabalhei e trabalho atualmente."
      />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'header.experience' })}
      />
      {!!experiencies.length &&
        experiencies.map(experience => (
          <Box key={experience.id} radius="top-right" className="my-4">
            <BoxImg src="https://www.hotelenseadaboaviagem.com.br/blog/wp-content/uploads/2018/06/ground-zero-2014135_960_720-960x480.jpg" />
            <BoxBody>
              <C.Title>{experience.title}</C.Title>
              <C.SubTitle>{experience.description}</C.SubTitle>
            </BoxBody>
            <BoxFooter>
              <Tag>{experience.office}</Tag>
            </BoxFooter>
          </Box>
        ))}
    </Layout>
  )
}

export default ExperiencePage
