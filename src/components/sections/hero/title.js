import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: ${(p) => (p.accent ? 'var(--orange)' : 'var(--blue-light)')};
  font-size: clamp(4rem, 8vw, 6rem);
`;

const Title = ({ accent, children }) => (
  <StyledH1 accent={accent}>{children}</StyledH1>
);

export default Title;
