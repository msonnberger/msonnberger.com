import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    background-color: var(--blue-dark);
    color: var(--blue-mid);
    font-family: 'Source Sans Pro', sans-serif;
  }

  main {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1;
  }
`;

export default GlobalStyle;
