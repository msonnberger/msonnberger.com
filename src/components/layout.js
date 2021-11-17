import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr min(60rem, calc(100% - 4rem)) 1fr;
  grid-column-gap: 2rem;

  main {
    grid-column: 2;
  }
`;

const Layout = ({ children }) => (
  <Root>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Martin Sonnberger</title>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#172b50" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <main>{children}</main>
  </Root>
);

export default Layout;
