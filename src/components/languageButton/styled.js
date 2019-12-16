import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const Button = styled.button`
  background: transparent;
  font-size: 1.8rem;
  border: 0;
  color: ${({ active }) => (active ? Colors.black : Colors.gray)};
  font-weight: ${({ active }) => active && 500};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.6rem;
`

export const GroupButton = styled.div`
  ${Button} {
    &:nth-child(1) {
      border-bottom: 1px solid ${Colors.dark};
    }
  }
`
