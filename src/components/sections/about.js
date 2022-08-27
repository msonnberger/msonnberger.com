import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { SectionTitle } from '@components';

const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;

  .memoji {
    width: 35rem;
    transform: translate(-40px, 18px);
  }
`;

const About = () => (
  <StyledAboutSection>
    <StaticImage
      className="memoji"
      src="../../images/memoji.png"
      alt="Memoji of myself"
      width={350}
      height={350}
    />
    <SectionTitle>About Me</SectionTitle>
    <p>
      Hello! I’m a college student and web developer from Austria. I'm studying  MultiMediaTechnology at Salzburg University of Applied Sciences
      and am currently working as an Software Engineer Intern at{' '}
      <a href="https://www.cloudflight.io" target="_blank" rel="noreferrer">
        Cloudflight
      </a>{' '}
      in Vienna. I enjoy all things related to the web.
    </p>
    <p>When not sitting in front of my computer, I like cooking and playing the trumpet.</p>
  </StyledAboutSection>
);

export default About;
