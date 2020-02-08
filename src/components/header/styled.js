import styled from 'styled-components'

export const Header = styled.header`
  margin: 2rem 0 0;
  .title {
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }
  .sub-title {
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    margin: 5rem 0 0;
  }
`
