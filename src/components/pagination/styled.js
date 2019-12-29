import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

import { Colors } from 'styles/variables'
import transitions from 'styles/transitions'

const fontStyle = `
  font-size: 3.2rem;
  font-weight: 700;
`

export const Pagination = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  padding: 0.5rem;
  > span {
    ${fontStyle}
  }
`
export const LinkButton = styled(Link)`
  ${fontStyle}
  transition: ${transitions.all};
  &:hover {
    color: ${Colors.yellow};
  }
`
