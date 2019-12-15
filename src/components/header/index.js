import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const Header = ({ siteTitle }) => (
  <S.Header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
