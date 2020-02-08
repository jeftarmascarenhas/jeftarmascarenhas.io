import React from 'react'
import PropTypes from 'prop-types'

import LanguageButton from 'components/languageButton'
// import IconButton from 'components/iconButton'
import ListSocial from 'components/listSocial'
import * as S from './styled'

const SidebarSetting = () => {
  return (
    <S.SidebarSetting>
      <ListSocial />
      <LanguageButton />
      {/* <IconButton onClick={onTheme}>
        <S.IconLightbulbFlash />
      </IconButton> */}
      <div className="copyright">
        {`Copyright © ${new Date().getFullYear()}`}
      </div>
    </S.SidebarSetting>
  )
}

SidebarSetting.propTypes = {
  onTheme: PropTypes.func.isRequired,
}
export default SidebarSetting
