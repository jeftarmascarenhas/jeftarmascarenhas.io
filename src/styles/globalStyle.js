import { createGlobalStyle, css } from 'styled-components'

import { Colors } from './variables'
import transitions from './transitions'

const createClassMarginHelp = amount => {
  let styles
  for (let i = 0; i < amount; i += 1) {
    styles += `.mt-${i} {
      margin-top: ${i}rem !important;
    }
    .mb-${i} {
      margin-bottom: ${i}rem !important;
    }
    .ml-${i} {
      margin-left: ${i}rem !important;
    }
    .mr-${i} {
      margin-right: ${i}rem !important;
    }
    `
  }
  return css`
    ${styles}
  `
}

const createClassMarginYHelp = amount => {
  let styles
  for (let i = 0; i < amount; i += 1) {
    styles += `.my-${i} {
      margin-top: ${i}rem;
      margin-bottom: ${i}rem;
    }`
  }
  return css`
    ${styles}
  `
}

export default createGlobalStyle`
html {
  font-family: Roboto, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  line-height: 1.3;
  font-size: 8px;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
}
a:active,
a:hover {
  outline-width: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 3.6rem;
  margin: 0.67rem 0;
  font-weight: 700;
}
h2 {
  font-size: 2.8rem;
  margin: 0.67rem 0;
  font-weight: 500;
}
h3 {
  font-size: 2.2rem;
  margin: 0.4rem 0;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1rem;
}
figure {
  margin: 1rem 40px;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
  &:focus {
    outline: none;
    outline: 0;
  }
}
optgroup {
  font-weight: 700;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type='reset'],
[type='submit'],
button,
html [type='button'] {
  -webkit-appearance: button;
}
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type='checkbox'],
[type='radio'] {
  box-sizing: border-box;
  padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
html {
  box-sizing: border-box;
  overflow-y: scroll;
}
* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}
img {
  max-width: 100%;
  display: block;
  border-style: none;
}
 body {
  ${props => (props.darkColor ? Colors.bgDark : Colors.bgLight)};
  color: ${props => (props.darkColor ? Colors.light : Colors.dark)};
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: normal;
  font-size: 2rem;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  transition: ${transitions.default};
 }
 h1, h2 ,h3, h4, h5, h6, p, a {
  color: ${props => (props.darkColor ? Colors.light : Colors.dark)};
 }
 span {
   color: inherit;
 }
 p {
   line-height: 1.5;
   font-size: 2rem;
   color: ${Colors.grayDark};
 }
 figure {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}
table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}
fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

 blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
form {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
noscript {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
iframe {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
hr {
  margin-left: 0;
  margin-right: 0;
  margin-top: calc(1rem - 1px);
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: calc(1rem - 1px);
  background: ${Colors.dark};
  border: none;
  height: 4px;
}
address {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
b {
  font-weight: bold;
}
strong {
  font-weight: bold;
}
dt {
  font-weight: bold;
}
th {
  font-weight: bold;
}
li {
  margin-bottom: calc(1.45rem / 2);
}
ol li {
  padding-left: 0;
}
ul li {
  padding-left: 0;
}
li > ol {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
li > ul {
  margin-left: 1.45rem;
  margin-bottom: calc(1.45rem / 2);
  margin-top: calc(1.45rem / 2);
}
blockquote *:last-child {
  margin-bottom: 0;
}
li *:last-child {
  margin-bottom: 0;
}
p *:last-child {
  margin-bottom: 0;
}
li > p {
  margin-bottom: calc(1.45rem / 2);
}
code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
kbd {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
samp {
  font-size: 0.85rem;
  line-height: 1.45rem;
}
abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}
abbr[title] {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
  text-decoration: none;
}
thead {
  text-align: left;
}
td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: 'tnum';
  -moz-font-feature-settings: 'tnum';
  -ms-font-feature-settings: 'tnum';
  -webkit-font-feature-settings: 'tnum';
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
th:first-child,
td:first-child {
  padding-left: 0;
}
th:last-child,
td:last-child {
  padding-right: 0;
}
tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family: Roboto, 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
    'Liberation Mono', Menlo, Courier, monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}
pre code {
  background: none;
  line-height: 1.42;
}
code:before,
code:after,
tt:before,
tt:after {
  letter-spacing: -0.2em;
  content: ' ';
}
pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
  content: '';
}
@media screen and (min-width: 1170px) {
  html {
    font-size: 10px;
  }
}

  .d-flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }

  .flex-row {
    flex-direction: row;
  }

  .align-self-end {
    align-self: flex-end;
  }
  ${createClassMarginYHelp(5)}
  ${createClassMarginHelp(5)}
`
