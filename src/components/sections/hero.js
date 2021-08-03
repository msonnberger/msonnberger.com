import React from 'react';
import styled from 'styled-components';
import { Spacer } from '@components';
import { IconGithub, IconLinkedin, IconEmail } from '@components/icons';

const StyledSection = styled.section`
  h1 {
    color: var(--orange);
  }

  h1,
  h2 {
    font-size: clamp(3.2rem, 8vw, 7rem);
  }

  p {
    font-size: clamp(2rem, 4vw, 2.4rem);
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
  <StyledSection>
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
      </a>{' '}
      I like building beautiful, well-crafted things for the web.
    </p>
    <Spacer axis="vertical" size={20} />
    <ul>
      <li>
        <a
          href="https://www.github.com/msonnberger"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconGithub />
        </a>
      </li>
      <Spacer axis="horizontal" size={20} />
      <li>
        <a
          href="https://www.linkedin.com/in/msonnberger"
          target="_blank"
          rel="noreferrer noopener"
        >
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
  </StyledSection>
);

export default Hero;
