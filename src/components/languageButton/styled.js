import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  font-size: 1.1rem;
  border: 0;
  color: ${({ active }) => (active ? `yellow` : `black`)};
  border-bottom: ${({ active }) => (active ? `1px solid #222` : 'none')};
  cursor: pointer;
`
