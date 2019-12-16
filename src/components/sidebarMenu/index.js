import React, { useState } from 'react'

import IconButton from 'components/iconButton'
import { ReactComponent as Logo } from '../../images/logo.svg'
import * as S from './styled'

const SidebarMenu = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  function handleOpenMenu() {
    setMenuMobile(!menuMobile)
  }

  return (
    <S.SideBarMenu>
      <S.LogoLink>
        <Logo />
      </S.LogoLink>
      <S.Nav open={menuMobile}>
        <div className="btn-mobile">
          <div className="contetn-close">
            <IconButton onClick={handleOpenMenu}>
              <S.IconClose />
            </IconButton>
          </div>
        </div>
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
      <IconButton className="btn-mobile" onClick={handleOpenMenu}>
        <S.IconMenu />
      </IconButton>
    </S.SideBarMenu>
  )
}
export default SidebarMenu
