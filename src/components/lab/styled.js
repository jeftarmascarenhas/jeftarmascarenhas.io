import styled from 'styled-components'
import Img from 'gatsby-image'

export const Image = styled(Img).attrs(({ title }) => ({
  alt: title,
}))`
  display: block;
`

export const Title = styled.h2`
  font-size: 3.2rem;
`
