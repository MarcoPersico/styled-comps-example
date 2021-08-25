import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ primaryColor: string }>`
  * {
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    overflow: auto;
  }

  body {
    background: #000;
    margin: 0;
    font-family: 'Quicksand';
  }
`;

export default GlobalStyle;
