import styled from 'styled-components'

export const Tag = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  &:not(:last-child) {
    &:after {
      content: ', ';
      height: 2rem;
    }
  }
`
