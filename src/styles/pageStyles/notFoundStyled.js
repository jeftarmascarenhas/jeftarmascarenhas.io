import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`
export const ContentImg = styled.div`
  padding: 2rem;
`
