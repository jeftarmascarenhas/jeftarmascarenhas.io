import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const Wrapper = styled.main`
  position: relative;
  overflow-x: hidden;
  padding: 0 1rem 8.4rem 1rem;
  background-color: ${Colors.bgLight};
  @media (min-width: 768px) {
    padding: 0 8rem 0 18.3rem;
  }
`
