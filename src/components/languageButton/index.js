import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

import * as S from './styled'

const languageName = {
  en: 'EN',
  pt: 'PT',
}

const LanguageButton = () => (
  <S.GroupButton>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) =>
        languages.map(language => (
          <S.Button
            key={language}
            type="button"
            onClick={() => changeLocale(language)}
            active={currentLocale === language}
          >
            {languageName[language]}
          </S.Button>
        ))
      }
    </IntlContextConsumer>
  </S.GroupButton>
)

export default LanguageButton
