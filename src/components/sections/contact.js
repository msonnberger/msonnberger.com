import React from 'react';
import styled from 'styled-components';
import { Spacer } from '@components';
import { IconGithub, IconLinkedin } from '@components/icons';

const ContactSection = styled.section`
  position: relative;

  p {
    font-size: 2.4rem;
  }

  .button {
    box-shadow: none;
    display: block;
    color: var(--orange);
    border: 1px solid var(--orange);
    border-radius: 0.3em;
    width: fit-content;
    padding: 0.6em 0.9em;
    font-family: 'Fira Code', monospace;
    letter-spacing: 2px;

    &:hover,
    &:focus {
      background-color: var(--orange-transparent);
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  li > a {
    box-shadow: none;

    &:hover,
    &:focus {
      color: var(--orange);
    }
  }
`;

const Heading = styled.h3`
  font-size: min(10rem, 19vw);
  color: var(--blue-muted);
  font-family: 'Pacifico', cursive;
  position: absolute;
  z-index: -1;
  top: 0;
  left: -80px;

  @media screen and (max-width: 770px) {
    left: 0;
  }
`;

const Contact = () => (
  <ContactSection>
    <Spacer axis="vertical" size={110} />
    <p>
      Feel free to reach out to me about whatever you want, whenever you want.
      My inbox is always open.
    </p>
    <Spacer axis="vertical" size={20} />
    <ul>
      <li>
        <a className="button" href="mailto:hello@msonnberger.com">
          Email
        </a>
      </li>
      <Spacer axis="horizontal" size={40} />
      <li>
        <a
          href="https://www.github.com/msonnberger"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconGithub />
        </a>
      </li>
      <Spacer axis="horizontal" size={30} />
      <li>
        <a
          href="https://www.linkedin.com/in/msonnberger"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconLinkedin />
        </a>
      </li>
    </ul>
    <Heading>Say hello!</Heading>
    <Spacer axis="vertical" size={100} />
  </ContactSection>
);

export default Contact;
