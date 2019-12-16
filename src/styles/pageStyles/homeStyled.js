import styled from 'styled-components'
import { Link } from 'gatsby'

import { Colors } from 'styles/variables'

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 868px) {
    flex-direction: row;
  }
`

export const PersonalInfo = styled.section`
  flex: 1 0 50%;
  @media (min-width: 768px) {
    padding-right: 4rem;
  }
`

export const LastPosts = styled.section`
  background-color: ${Colors.yellow};
  flex: 1 0 50%;
  position: relative;
  padding-top: 5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  &::before {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 0.6rem;
    height: 96%;
    bottom: 0;
    left: 1rem;
  }
`

export const AllPost = styled(Link)`
  font-size: 5.6rem;
  font-weight: 900;
  text-align: right;
  display: block;
  margin-bottom: 1.5rem;
`
