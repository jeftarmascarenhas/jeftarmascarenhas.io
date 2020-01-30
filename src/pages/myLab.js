import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Layout from 'layouts'
import Header from 'components/header'
import SEO from 'components/seo'
import Lab from 'components/lab'

import * as S from 'styles/pageStyles/myLabStyled'

const labsQuery = graphql`
  query {
    allLabJson {
      edges {
        node {
          id
          path
          title
          date
          techs
          description
          imageSrc {
            relativePath
          }
        }
      }
    }
  }
`

const MyLab = () => {
  const intl = useIntl()
  const data = useStaticQuery(labsQuery)
  const labs = data.allLabJson.edges
  return (
    <Layout>
      <SEO
        title="My Labrary"
        lang="en"
        description="Check some experieces about coding"
        keywords={[
          'my labs',
          'front-end',
          'coding',
          'javascript',
          'css',
          'html5',
          'react',
          'css3',
          'animation',
          'pure css',
        ]}
      />
      <Header
        siteTitle="Jeftar Mascarenhas"
        description={intl.formatMessage({ id: 'header.myLabs' })}
      />
      <S.MyLabList className="my-4">
        <Lab labs={labs} />
      </S.MyLabList>
    </Layout>
  )
}

export default MyLab
