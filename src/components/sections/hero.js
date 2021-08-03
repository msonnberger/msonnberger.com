import React from 'react';
import styled from 'styled-components';
import { Spacer } from '../index';

const StyledSection = styled.section``;

const Hero = () => (
  <StyledSection>
    <Spacer axis="vertical" size={100} />
    <h2>Hi, I am</h2>
    <h1>Martin Sonnberger</h1>
  </StyledSection>
);

export default Hero;
