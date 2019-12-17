import { Link } from 'gatsby-plugin-intl'
import styled from 'styled-components'

import { Colors } from 'styles/variables'
import transitions from 'styles/transitions'

export const BlogItem = styled(Link)`
  display: block;
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    transition: ${transitions.all};
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.4rem;
    background-color: ${Colors.black};
  }
`

export const BlogTitle = styled.h2`
  font-size: 3.2rem;
`

export const DateTime = styled.time`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`

export const BlogDescription = styled.h3`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
`
