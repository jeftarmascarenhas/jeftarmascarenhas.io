import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import IconButton from 'components/iconButton'
import { ReactComponent as Logo } from '../../images/logo.svg'
import * as S from './styled'

const SidebarMenu = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  const intl = useIntl()

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
          {intl.formatMessage({ id: 'menu.me' })}
        </S.NavItem>
        <S.NavItem to="/about/" activeClassName="active">
          {intl.formatMessage({ id: 'menu.experience' })}
        </S.NavItem>
        <S.NavItem to="/blog/" activeClassName="active">
          {intl.formatMessage({ id: 'menu.blog' })}
        </S.NavItem>
        <S.NavItem to="/myLab/" activeClassName="active">
          {intl.formatMessage({ id: 'menu.lab' })}
        </S.NavItem>
        <S.NavItem to="/mentor/" activeClassName="active">
          {intl.formatMessage({ id: 'menu.mentor' })}
        </S.NavItem>
        <S.NavItem to="/contact/" activeClassName="active">
          {intl.formatMessage({ id: 'menu.contact' })}
        </S.NavItem>
      </S.Nav>
      <IconButton className="btn-mobile" onClick={handleOpenMenu}>
        <S.IconMenu />
      </IconButton>
    </S.SideBarMenu>
  )
}
export default SidebarMenu
