import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { SectionTitle } from '@components';

const calcAge = () => {
  const myBirthday = new Date(2001, 8, 26); // month is 0-based index
  const diffMilliSeconds = Date.now() - myBirthday;
  const age = new Date(diffMilliSeconds).getUTCFullYear() - 1970;
  return age;
};

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
      Hello! I’m a {calcAge()} year old college student from Austria. Since
      middle school I’ve known that I’ll want to do “something with computers”.
      After studying one semester of traditional computer science in Vienna, it
      clicked for me and I knew that I wanted to become a professional web
      developer. In order to further pursue this dream, I decided to move to
      Salzburg to study MultiMediaTechnology there.
    </p>
    <p>
      When not sitting in front of my computer, I like cooking, hiking and
      playing the trumpet.
    </p>
  </StyledAboutSection>
);

export default About;
