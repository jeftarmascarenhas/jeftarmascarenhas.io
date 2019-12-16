/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import * as utils from 'helpers/utils'
import Header from 'components/header'
import SidebarMenu from 'components/sidebarMenu'
import SidebarSetting from 'components/sidebarSetting'
import GlobalStyle from '../styles/globalStyle'
import * as S from './styled'

function Layout({ children }) {
  const [themeMode, setThemeMode] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function handleChangeTheme() {
    utils.setLocalStore('themesite', themeMode)
    setThemeMode(!themeMode)
  }

  useEffect(() => {
    function checkTheme() {
      const themesite = utils.getLocalStore('themesite', { parser: true })
      setThemeMode(!themesite)
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
          <Header siteTitle={data.site.siteMetadata.title} />
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
