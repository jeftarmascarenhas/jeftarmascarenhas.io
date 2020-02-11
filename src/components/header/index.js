import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const Header = ({ siteTitle, description }) => (
  <S.Header>
    <h1 className="title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <h3 className="sub-title">{description}</h3>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jeftar Mascarenhas`,
  description: `I love work with Front-end Developer and Javascript`,
}

export default Header
