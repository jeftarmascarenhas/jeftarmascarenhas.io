import styled from 'styled-components'

import { Colors } from 'styles/variables'

export const HomeContnet = styled.div`
  display: flex;
  height: 100vh;
`

export const PersonalInfo = styled.section`
  flex: 1 0 50%;
  padding-right: 4rem;
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
    height: 96vh;
    bottom: 0;
    left: 1rem;
  }
`
