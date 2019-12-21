import styled from 'styled-components'

// import { Colors } from 'styles/variables'

export const Avatar = styled.div`
  display: flex;
  width: ${({ size }) =>
    (size === 'small' && `4rem`) || (size === 'largger' && `6rem`)};
  height: ${({ size }) =>
    (size === 'small' && `4rem`) || (size === 'largger' && `6rem`)};
  font-size: ${({ size }) =>
    (size === 'small' && `1.45rem`) || (size === 'largger' && `1.8rem`)};
  overflow: hidden;
  text-align: center;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${({ variant }) =>
    (variant === 'circle' && `50%`) ||
    (variant === 'square' && `none`) ||
    (variant === 'rounded' && `0.35rem`)};
  user-select: none;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    text-indent: 10000px;
    color: transparent;
    background-color: rgba(0, 0, 0, 0.08);
    object-fit: cover;
  }
`
