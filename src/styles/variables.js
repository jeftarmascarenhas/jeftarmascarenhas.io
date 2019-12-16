import { css } from 'styled-components'

export const Colors = {
  dark: '#222',
  black: '#222',
  light: '#fff',
  yellow: '#FFDA00',
  grayLight: '#EBEBEB',
  gray: '#BFBFBE',
  grayDark: '#6E6E6E',
  grayMedium: '#E8E7E7',
  blackLight: 'rgba(0,0,0, 0.12)',
  bgDark: css`
    background-color: #222;
  `,
  bgLight: css`
    background: #fff;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      #ffffff 0%,
      #f5f5f5 100%
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      #ffffff 0%,
      #f5f5f5 100%
    );
    background: radial-gradient(ellipse at center, #ffffff 0%, #f5f5f5 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f5f5f5',GradientType=1 );
  `,
}
