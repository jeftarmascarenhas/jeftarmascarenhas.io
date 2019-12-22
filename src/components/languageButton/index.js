import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import ReactGA from 'react-ga'

import * as S from './styled'

const trackLanguageClick = language => {
  ReactGA.event({
    category: 'Home',
    action: 'click',
    label: `Home - ${language}`,
  })
}

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
            onClick={() => {
              changeLocale(language)
              trackLanguageClick(language)
            }}
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
