import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const Box = styled.div`
  border: ${({ variant }) =>
    variant === 'second' ? `0.4rem solid #222` : 'none'};
  border-radius: ${({ variant }) =>
    variant === 'second' ? `0 0 8rem 0` : `8rem 0 0 0`};
  padding: 2.6rem;
  background-color: ${({ variant }) =>
    variant === 'primary' ? Colors.grayLight : 'none'};
`
