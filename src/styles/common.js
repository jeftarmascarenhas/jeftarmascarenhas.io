import styled from 'styled-components'

export const Title = styled.h1`
  font-size: ${({ variant }) => (variant === 'blog' ? `6.2rem` : '5.6rem')};
  font-weight: ${({ variant }) => (variant === 'blog' ? `700` : '900')};
`

export const SubTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 400;
`
