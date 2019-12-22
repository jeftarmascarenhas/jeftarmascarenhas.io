import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'

import { Colors } from 'styles/variables'
import transitions from 'styles/transitions'

const upDown = keyframes`
  0% {
    opacity: 0;
    top: 3.5rem;
  }
  92% {
    opacity: 1;
  }
  100% {
    top: 56rem;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 868px) {
    flex-direction: row;
  }
`

export const PersonAuthor = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
  .author-name {
    font-size: 1.4rem;
    color: ${Colors.grayDark};
  }
  @media (min-width: 868px) {
    margin: 5rem 0;
    .author-name {
      font-size: 1.8rem;
    }
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
  padding-top: 3.5rem;
  padding-left: 5rem;
  padding-right: 4rem;
  background-color: ${({ bgColor }) => bgColor};
  &::before {
    content: '';
    background-color: #fff;
    position: absolute;
    width: 0.6rem;
    height: 96%;
    bottom: 0;
    left: 1.5rem;
  }
`

export const ButtonColor = styled.button`
  margin-bottom: 2rem;
  background-color: ${({ bgColor }) => bgColor};
  text-indent: -10000px;
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  border: 0.2rem solid ${({ active }) => (active ? Colors.dark : Colors.light)};
  transition: ${transitions.all};
  cursor: pointer;
  &:hover {
    border-color: ${Colors.dark};
  }
`

export const SelectColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40rem;
  left: 0.6rem;
  animation: ${upDown} 2.2s ease-out alternate 0.6s;
  @media (min-width: 768px) {
    top: 50rem;
  }
`

export const AllPost = styled(Link)`
  font-size: 5.6rem;
  font-weight: 900;
  text-align: right;
  display: block;
  margin-bottom: 1.5rem;
`
