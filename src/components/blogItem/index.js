import React from 'react'
import PropTypes from 'prop-types'

import Tag from 'components/tag'
import * as S from './styled'

const BlogItem = ({ info }) => {
  console.log(info)
  return (
    <S.BlogItem to={`/${info.slug}`}>
      {info.date && (
        <S.DateTime>
          {`${info.date} - `}
          <span>{`Leitura ${info.timeToRead} min`}</span>
        </S.DateTime>
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
