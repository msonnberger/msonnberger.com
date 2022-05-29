import React from 'react';
import styled from 'styled-components';
import { Spacer } from '@components';
import { IconGithub, IconLinkedin, IconEmail } from '@components/icons';

const StyledHeroSection = styled.section`
  h1 {
    color: var(--orange);
  }

  h1,
  h2 {
    font-size: clamp(3.2rem, 8vw, 6.5rem);
  }

  p {
    font-size: clamp(2rem, 4vw, 2.2rem);
  }

  ul {
    list-style-type: none;
    display: flex;
  }

  li > a {
    box-shadow: none;
    color: var(--blue-light);
    transition: color 300ms;
  }

  li > a:hover {
    color: var(--orange);
  }
`;

const Hero = () => (
  <StyledHeroSection>
    <Spacer axis="vertical" size={100} />
    <h2>Hi, I am</h2>
    <h1>Martin Sonnberger</h1>
    <Spacer axis="vertical" size={40} />
    <p>
      I’m a computer science student specializing in web development at{' '}
      <a
        href="https://www.fh-salzburg.ac.at/en/study/design-media-and-arts/multimediatechnology-bachelor"
        target="_blank"
        rel="noreferrer noopener"
      >
        Salzburg University of Applied Sciences.
      </a>
      <br />I like building cool things for the web.
    </p>
    <Spacer axis="vertical" size={20} />
    <ul>
      <li>
        <a href="https://www.github.com/msonnberger" target="_blank" rel="noreferrer noopener">
          <IconGithub />
        </a>
      </li>
      <Spacer axis="horizontal" size={20} />
      <li>
        <a href="https://www.linkedin.com/in/msonnberger" target="_blank" rel="noreferrer noopener">
          <IconLinkedin />
        </a>
      </li>
      <Spacer axis="horizontal" size={20} />
      <li>
        <a href="mailto:hello@msonnberger.com">
          <IconEmail />
        </a>
      </li>
    </ul>
  </StyledHeroSection>
);

export default Hero;
