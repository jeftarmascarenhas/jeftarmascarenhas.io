import { Link } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const BlogItem = styled(Link)`
  display: block;
  border-bottom: 0.2rem solid ${Colors.black};
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

export const BlogTitle = styled.h2`
  font-size: 3.2rem;
`

export const DateTime = styled.time`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`

export const BlogDescription = styled.h3`
  font-size: 1.9rem;
  font-weight: 400;
`
