import React from 'react';
import styled from 'styled-components';

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
    <main>{children}</main>
  </Root>
);

export default Layout;
