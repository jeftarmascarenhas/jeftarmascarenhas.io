import styled from 'styled-components'

import { Colors } from './variables'

export const Title = styled.h1`
  font-size: ${({ variant }) => (variant === 'blog' ? `5.2rem` : '4.6rem')};
  font-weight: ${({ variant }) => (variant === 'blog' ? `700` : '900')};
`

export const SubTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 400;
  color: ${Colors.grayDark};
`
export const DateTime = styled.time`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
`
