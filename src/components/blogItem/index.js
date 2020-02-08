import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'

import Tag from 'components/tag'
import * as C from 'styles/common'
import * as S from './styled'

const BlogItem = ({ info }) => {
  const intl = useIntl()
  return (
    <S.BlogItem to={`/${info.slug}`}>
      {info.date && (
        <C.DateTime>
          {`${info.date} - `}
          <span>
            {`${intl.formatMessage({ id: 'blog.read' })} ${
              info.timeToRead
            } min`}
          </span>
        </C.DateTime>
      )}
      <S.BlogTitle>{info.title}</S.BlogTitle>
      <S.BlogDescription>{info.description}</S.BlogDescription>
      {!!info.tags && info.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </S.BlogItem>
  )
}

BlogItem.propTypes = {
  info: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    timeToRead: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
export default BlogItem
