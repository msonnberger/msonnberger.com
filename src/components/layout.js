import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 80rem 1fr;

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
