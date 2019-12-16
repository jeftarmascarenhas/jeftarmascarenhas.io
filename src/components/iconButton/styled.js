import styled from 'styled-components'

export const IconButton = styled.button`
  background: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  width: 46px;
  height: 46px;
  text-align: center;
  overflow: visible;
  font-size: 1.2rem;
  border: 0;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  &::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
  }
  > span {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`
