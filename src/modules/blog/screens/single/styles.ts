import { Box, theme } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Article = styled(Box)`
  a {
    display: inline-block;
    background-color: ${theme.colors.teal[400]};
    color: ${theme.colors.white};
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    border-radius: 0.2rem;
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 1.5rem;
    font-weight: 600;
  }
  h2 h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  p {
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 1.2rem;
  }
  table,
  th,
  td {
    border: 1px solid ${theme.colors.gray[300]};
    padding: 0.5rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    th,
    td {
      text-align: left;
    }
  }
`
