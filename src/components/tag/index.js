import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Tag = ({ children }) => <S.Tag>{children}</S.Tag>

Tag.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Tag
