import React from 'react'

import * as S from './styled'

const ListSocial = () => {
  return (
    <S.ListSocial>
      <S.ListSocialItem href="https://www.linkedin.com/in/jeftarmascarenhas/">
        <S.IconLinkedin />
      </S.ListSocialItem>
      <S.ListSocialItem href="https://github.com/jeftarmascarenhas">
        <S.IconGithub />
      </S.ListSocialItem>
      <S.ListSocialItem href="https://twitter.com/jeftar">
        <S.IconTwitter />
      </S.ListSocialItem>
    </S.ListSocial>
  )
}

export default ListSocial
