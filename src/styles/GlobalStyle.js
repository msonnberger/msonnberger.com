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
    font-family: 'Inter', -apple-system, sans-serif;
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
  }

  p > a {
    color: var(--orange);
    position: relative;
    display: inline-block;

    &:hover::after {
      width: 100%;
    }
  }

  p > a::after {
    display: block;
    content: '';
    height: 1px;
    width: 0;
    position: absolute;
    bottom: 0.2em;
    background: var(--orange);
    opacity: 0.5;
    transition: width 100ms;
  }

  ul {
    list-style-position: inside;
  }
`;

export default GlobalStyle;
