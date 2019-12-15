import React from 'react'

import { ReactComponent as Logo } from '../../images/logo.svg'
import * as S from './styled'

const SidebarMenu = () => (
  <S.SideBarMenu>
    <S.LogoLink>
      <Logo />
    </S.LogoLink>
    <S.Nav>
      <S.NavItem to="/" activeClassName="active">
        Me
      </S.NavItem>
      <S.NavItem to="/about/" activeClassName="active">
        Experience
      </S.NavItem>
      <S.NavItem to="/blog/" activeClassName="active">
        Blog
      </S.NavItem>
      <S.NavItem to="/myLab/" activeClassName="active">
        My Lab
      </S.NavItem>
      <S.NavItem to="/mentor/" activeClassName="active">
        Mentor
      </S.NavItem>
      <S.NavItem to="/contact/" activeClassName="active">
        Contact
      </S.NavItem>
    </S.Nav>
  </S.SideBarMenu>
)

export default SidebarMenu
