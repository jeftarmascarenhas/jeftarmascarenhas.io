import { css } from 'styled-components'

export const Colors = {
  dark: '#222',
  light: '#fff',
  yellow: '#FFDA00',
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
