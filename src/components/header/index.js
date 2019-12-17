import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const Header = ({ siteTitle }) => (
  <S.Header className="mb-4">
    <h1 className="title">
      <Link to="/">{siteTitle}</Link>
    </h1>
    <h3 className="sub-title">
      I love working with Design, Front-end and Back-end
    </h3>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Jeftar Mascarenhas`,
}

export default Header
