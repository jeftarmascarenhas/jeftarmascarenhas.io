import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const Box = styled.div`
  position: relative;
  overflow-x: hidden;
  box-shadow: -0.1rem 0.1rem 0.4rem 0 ${Colors.shadow};
  border: ${({ bordered }) =>
    bordered ? `0.4rem solid ${Colors.dark}` : 'none'};
  border-radius: ${({ radius }) =>
    (radius === 'bottom-right' && `0 0 8rem 0`) ||
    (radius === 'top-right' && `0 8rem 0 0`) ||
    (radius === 'top-left' && `8rem 0 0 0`)};
  background-color: ${({ variant }) =>
    (variant === 'primary' && Colors.light) ||
    (variant === 'secondary' && Colors.grayLight) ||
    (variant === 'default' && 'none')};
  display: flex;
  flex-direction: column;
`

export const BoxImg = styled.div`
  width: 100%;
  height: 18rem;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

export const BoxHeader = styled.div`
  padding: 1.4rem 2.8rem;
`

export const BoxBody = styled.div`
  padding: 2.2rem 2.8rem;
  flex: 1 0 auto;
`

export const BoxFooter = styled.div`
  padding: 1rem 2.8rem;
`
