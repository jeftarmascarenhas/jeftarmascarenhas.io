import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const DisqusComment = ({ slug, title }) => {
  const url = `https://jeftar.com.br/blog${slug}`
  return (
    <S.DisqusComment>
      <ReactDisqusComments
        shortname="jeftarmascarenhas"
        identifier={url}
        title={title}
        url={url}
      />
    </S.DisqusComment>
  )
}

DisqusComment.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default DisqusComment
