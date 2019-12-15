import React, { Component } from 'react'
import PropTypes from 'prop-types'

const HTML = ({
  headComponents,
  preBodyComponents,
  bodyAttributes,
  postBodyComponents,
  body,
}) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              window.__onThemeChange = function() {};
              function setTheme(newTheme) {
                window.__theme = newTheme;
                usedTheme = newTheme;
                document.body.className = newTheme;
                window.__onThemeChange(newTheme);
              }
              var usedTheme;
              try {
                usedTheme = localStorage.getItem('theme');
              } catch (err) { }
              window.__setTheme = function(newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
              setTheme(usedTheme || 'light');
            })();
          `,
          }}
        />
        {preBodyComponents}
        <noscript>
          Sem JavaScript está aplicação não funciona. JS is Life :/
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
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
