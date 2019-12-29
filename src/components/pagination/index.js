import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import * as S from './styled'

function Pagination({
  currentPage,
  numPages,
  isFirst,
  isLast,
  prevPage,
  nextPage,
}) {
  const intl = useIntl()
  return (
    <S.Pagination>
      {!isFirst && (
        <S.LinkButton rel="prev" to={prevPage}>
          {`← ${intl.formatMessage({ id: 'blog.prev' })}`}
        </S.LinkButton>
      )}
      <span>
        {`${currentPage} ${intl.formatMessage({
          id: 'blog.of',
        })} ${numPages}`}
      </span>
      {!isLast && (
        <S.LinkButton rel="next" to={nextPage}>
          {`${intl.formatMessage({ id: 'blog.next' })} →`}
        </S.LinkButton>
      )}
    </S.Pagination>
  )
}

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination
