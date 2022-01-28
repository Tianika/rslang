import { createGlobalStyle } from 'styled-components';
import { baseTheme } from '../../utils';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${baseTheme.colors.bg};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
