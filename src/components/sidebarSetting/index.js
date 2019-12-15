import React from 'react'
import PropTypes from 'prop-types'
import { LightbulbFlash } from 'styled-icons/remix-line/LightbulbFlash'

import LanguageButton from 'components/languageButton'
import IconButton from 'components/iconButton'
import * as S from './styled'

const SidebarSetting = ({ onTheme }) => (
  <S.SidebarSetting>
    <IconButton onClick={onTheme}>
      <LightbulbFlash color="red" width={18} height={18} />
    </IconButton>
    <LanguageButton />
  </S.SidebarSetting>
)

SidebarSetting.propTypes = {
  onTheme: PropTypes.func.isRequired,
}
export default SidebarSetting
