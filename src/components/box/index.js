import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { BoxHeader, BoxBody, BoxFooter } = S

const Box = ({ children, variant, radius, border, ...rest }) => (
  <S.Box variant={variant} radius={radius} border={border} {...rest}>
    {children}
  </S.Box>
)

Box.defaultProps = {
  variant: 'primary',
  radius: 'top-left',
  border: false,
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  radius: PropTypes.oneOf(['top-left', 'bottom-right']),
  border: PropTypes.bool,
}
export default Box
