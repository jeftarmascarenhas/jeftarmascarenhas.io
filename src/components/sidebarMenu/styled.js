import styled, { css } from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
import { Menu } from 'styled-icons/feather/Menu'
import { Close } from 'styled-icons/evil/Close'

import { Colors } from 'styles/variables'
import transitions from 'styles/transitions'

const menuMobile = css`
  ${({ open }) => open && `visibility: visible; opacity: 1;`}
`

const iconStyle = css`
  width: 3.2rem;
  height: 3.2rem;
`

export const SideBarMenu = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contetn-close {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    width: 100%;
    margin-bottom: 3rem;
  }
  .btn-mobile {
    display: block;
    align-self: stretch;
  }
  @media (min-width: 768px) {
    display: block;
    width: 18.3rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 1.5rem;
    .btn-mobile {
      display: none;
    }
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  background: transparent;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: block;
  width: 5.9rem;
  height: 5.3rem;
  @media (min-width: 768px) {
    width: 9rem;
    height: 8.1rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${Colors.blackLight};
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  transition: ${transitions.all};
  @media (min-width: 768px) {
    visibility: visible;
    opacity: 1;
    position: relative;
    background: transparent;
    align-items: flex-start;
  }
  ${menuMobile};
`

export const NavItem = styled(Link)`
  position: relative;
  color: ${Colors.light};
  padding: 0.5rem 0.4rem;
  margin-bottom: 2.2rem;
  font-size: 3.4rem;
  transition: ${transitions.all};
  &:hover {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${Colors.yellow};
      top: 50%;
      left: -0.2rem;
      transform: translateY(-50%);
    }
  }
  &.active {
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: ${Colors.yellow};
      top: 50%;
      left: -0.2rem;
      transform: translateY(-50%);
    }
  }
  @media (min-width: 768px) {
    color: ${Colors.dark};
    font-size: 2.4rem;
  }
`
export const IconMenu = styled(Menu)`
  ${iconStyle}
  color: ${Colors.dark};
`

export const IconClose = styled(Close)`
  ${iconStyle}
  color: ${Colors.light};
`
