/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import * as utils from 'helpers/utils'
import SidebarMenu from 'components/sidebarMenu'
import SidebarSetting from 'components/sidebarSetting'
import GlobalStyle from '../styles/globalStyle'
import * as S from './styled'

function Layout({ children }) {
  const [themeMode, setThemeMode] = useState(false)

  function handleChangeTheme() {
    setThemeMode(!themeMode)
  }

  useEffect(() => {
    function setDefaultThem() {
      utils.setLocalStore('themesite', themeMode)
    }
    setDefaultThem()
  }, [])

  useEffect(() => {
    function checkTheme() {
      const themesite = utils.getLocalStore('themesite', { parser: true })
      setThemeMode(themesite)
    }
    checkTheme()
    return () => {
      checkTheme()
    }
  }, [setThemeMode])

  return (
    <>
      <GlobalStyle darkColor={themeMode} />
      <ThemeProvider theme={{ mode: themeMode ? 'dark' : 'light' }}>
        <S.Wrapper>
          <SidebarMenu />
          {children}
          <SidebarSetting onTheme={handleChangeTheme} />
        </S.Wrapper>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
