import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Box, { BoxBody, BoxHeader, BoxFooter } from 'components/box'
import Tag from 'components/tag'
import * as C from 'styles/common'

import * as S from './styled'

const LabImg = ({ imageSrc }) => {
  const { images } = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "lab" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 448) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  const image = images.edges.find(
    img => img.node.relativePath === imageSrc.relativePath
  )
  return <S.Image fluid={image.node.childImageSharp.fluid} />
}

LabImg.propTypes = {
  imageSrc: PropTypes.shape({ relativePath: PropTypes.string }).isRequired,
}

const Lab = ({ labs }) => {
  console.log(labs)
  return (
    <>
      {labs.map(({ node }) => (
        <Box
          key={node.id}
          as="a"
          href={node.path}
          target="_blank"
          className="lab-item"
        >
          <BoxHeader>
            <S.Title className="mt-2">{node.title}</S.Title>
            <C.SubTitle>{node.description}</C.SubTitle>
          </BoxHeader>
          <BoxBody>
            <LabImg imageSrc={node.imageSrc} />
          </BoxBody>
          <BoxFooter>
            <Tag>{node.techs}</Tag>
            <hr />
          </BoxFooter>
        </Box>
      ))}
    </>
  )
}

Lab.propTypes = {
  labs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      path: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
}
export default Lab
