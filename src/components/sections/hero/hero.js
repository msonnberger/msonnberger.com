import React from 'react';
import styled from 'styled-components';
import Title from './title';
import { Spacer } from '../../index';

const StyledSection = styled.section``;

const Hero = () => (
  <StyledSection>
    <Spacer axis="vertical" size={100} />
    <Title>Hi, I am</Title>
    <Title accent>Martin Sonnberger</Title>
  </StyledSection>
);

export default Hero;
