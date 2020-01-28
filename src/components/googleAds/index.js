import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const GoogleAds = ({ slot, layout }) => {
  return (
    <S.GoogleAds>
      {layout === 'image' ? (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-adtest={process.env.NODE_ENV !== 'production'}
          data-ad-client="ca-pub-1030376887130634"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-adtest={process.env.NODE_ENV !== 'production'}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-1030376887130634"
          data-ad-slot={slot}
        />
      )}
    </S.GoogleAds>
  )
}

GoogleAds.defaultProps = {
  layout: 'image',
}
GoogleAds.propTypes = {
  layout: PropTypes.string,
  slot: PropTypes.string.isRequired,
}

export default GoogleAds
