import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const Box = styled.div`
  border: ${({ bordered }) =>
    bordered ? `0.4rem solid ${Colors.dark}` : 'none'};
  border-radius: ${({ radius }) =>
    (radius === 'bottom-right' && `0 0 8rem 0`) ||
    (radius === 'top-left' && `8rem 0 0 0`)};
  padding: 2.6rem;
  background-color: ${({ variant }) =>
    (variant === 'primary' && Colors.light) ||
    (variant === 'secondary' && Colors.grayLight) ||
    (variant === 'default' && 'none')};
  display: flex;
  flex-direction: column;
`

export const BoxHeader = styled.div`
  padding: 0.5rem 0;
`
export const BoxBody = styled.div`
  padding: 0.5rem 0;
  flex: 1 0 auto;
`
export const BoxFooter = styled.div`
  padding: 0.5rem 0;
`
