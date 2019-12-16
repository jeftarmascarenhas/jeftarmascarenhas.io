import React from 'react'
import PropTypes from 'prop-types'

import LanguageButton from 'components/languageButton'
import IconButton from 'components/iconButton'
import ListSocial from 'components/listSocial'
import * as S from './styled'

const SidebarSetting = ({ onTheme }) => (
  <S.SidebarSetting>
    <ListSocial />
    <LanguageButton />
    <IconButton onClick={onTheme}>
      <S.IconLightbulbFlash />
    </IconButton>
    <div className="copyright">
      <span>{`Copyright © ${new Date().getFullYear()}`}</span>
    </div>
  </S.SidebarSetting>
)

SidebarSetting.propTypes = {
  onTheme: PropTypes.func.isRequired,
}
export default SidebarSetting
