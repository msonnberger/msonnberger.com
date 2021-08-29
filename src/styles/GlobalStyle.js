import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--blue-dark);
    color: var(--blue-mid);
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1;
  }

  p {
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    box-shadow: 0 -4px 0 0 var(--orange) inset;
    transition: all 100ms;
  }

  a:hover {
    box-shadow: 0 -28px 0 0 var(--orange) inset;
    color: var(--blue-dark);
  }
`;

export default GlobalStyle;
