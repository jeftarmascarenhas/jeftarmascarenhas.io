import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

export const { BoxHeader, BoxBody, BoxFooter } = S

const Box = ({ children, variant, radius, bordered, ...rest }) => {
  const borderedBool = bordered ? 1 : 0
  return (
    <S.Box variant={variant} radius={radius} bordered={borderedBool} {...rest}>
      {children}
    </S.Box>
  )
}

Box.defaultProps = {
  variant: 'primary',
  radius: 'top-left',
  bordered: false,
}
Box.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default']),
  radius: PropTypes.oneOf(['top-left', 'bottom-right']),
  bordered: PropTypes.bool,
}
export default Box
