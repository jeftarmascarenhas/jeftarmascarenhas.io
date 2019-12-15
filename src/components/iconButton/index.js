import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const IconButton = ({ children, ...rest }) => (
  <S.IconButton {...rest}>
    <span>{children}</span>
  </S.IconButton>
)

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
}
export default IconButton
