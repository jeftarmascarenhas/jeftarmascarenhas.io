import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const Wrapper = styled.main`
  position: relative;
  overflow-x: hidden;
  padding: 0 2rem 8.4rem 2rem;
  background-color: ${Colors.bgLight};
  @media (min-width: 768px) {
    padding: 0 8rem 0 20rem;
  }
`
