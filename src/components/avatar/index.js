import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const Avatar = ({ src, alt, size, variant, chidlren }) => (
  <S.Avatar size={size} variant={variant}>
    {chidlren || <img src={src} alt={alt} />}
  </S.Avatar>
)

Avatar.defaultProps = {
  size: 'small',
  variant: 'circle',
  chidlren: null,
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'largger']),
  chidlren: PropTypes.node,
  variant: PropTypes.oneOf(['circle', 'square', 'rounded']),
}

export default Avatar
