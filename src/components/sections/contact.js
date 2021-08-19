import React from 'react';
import styled from 'styled-components';
import { Spacer } from '@components';

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
`;

const Cta = styled.h3`
  font-size: min(10rem, 20vw);
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
    <a className="button" href="mailto:hello@msonnberger.com">
      Email
    </a>
    <Cta>Say hello!</Cta>
    <Spacer axis="vertical" size={100} />
  </ContactSection>
);

export default Contact;
