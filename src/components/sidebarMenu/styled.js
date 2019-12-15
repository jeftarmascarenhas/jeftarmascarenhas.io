import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

import { Colors } from 'styles/variables'

export const SideBarMenu = styled.aside`
  width: 12.625rem;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  padding: 1rem 1.5rem;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  background: transparent;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: block;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const NavItem = styled(Link)`
  position: relative;
  color: ${Colors.dark};
  padding: 0.5rem 0.4rem;
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
`
