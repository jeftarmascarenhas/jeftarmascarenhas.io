/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

const HTML = ({
  headComponents,
  preBodyComponents,
  bodyAttributes,
  postBodyComponents,
  htmlAttributes,
  body,
}) => {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="google-site-verification"
          content="7JJI_YUuwwGlVo_A_rYptLlkEkH1etJu4E1YFKB2Bvc"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        <script />
        {preBodyComponents}
        <noscript>
          Sem JavaScript está aplicação não funciona. JS is Life :/
        </noscript>
        <div key="body" id="___gatsby">
          {parse(body)}
        </div>
        {postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
