import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }


  body {
    margin: 0;
    padding: 0;
    background: #fff;
    // font-family: 'DM Mono', monospace;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    min-height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
export const Video = styled.iframe`
  width: 902px;
  height: 545px;
  border: 1px solid #5984e2;
  box-sizing: border-box;
  border-radius: 13px;
`;
export default GlobalStyle;
