import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  flex-grow: 2;
  height: 1px;
  background: var(--blue-mid);
`;

const Title = styled.h3`
  padding-inline: 2rem;
  color: var(--orange);
  font-size: 3rem;
  margin-bottom: 0;
  transform: translateY(-2px);
`;

const SectionTitle = ({ children }) => (
  <Wrapper>
    <Line />
    <Title>{children}</Title>
    <Line />
  </Wrapper>
);

export default SectionTitle;
