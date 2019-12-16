import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Box = ({ children, variant, ...rest }) => (
  <S.Box variant={variant} {...rest}>
    {children}
  </S.Box>
)

Box.defaultProps = {
  variant: 'primary',
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'second']),
}
export default Box
