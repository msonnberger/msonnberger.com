import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '@styles';
import { Layout, Spacer } from '@components';
import { IconChevronLeft } from '@components/icons';

const StyledLink = styled(Link)`
  box-shadow: none;
  color: var(--blue-mid);

  &:hover {
    color: var(--orange);
    box-shadow: none;

    svg {
      transform: translate(-8px, 5px);
    }
  }

  svg {
    transform: translate(-3px, 5px);
    transition: transform 100ms;
  }
`;

const LegalPage = () => (
  <Layout>
    <GlobalStyle />
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Martin Sonnberger</title>
      <meta charSet="utf-8" />
    </Helmet>
    <Spacer axis="vertical" size={30} />
    <StyledLink to="/">
      <IconChevronLeft /> Go Back
    </StyledLink>
    <Spacer axis="vertical" size={70} />
    <h2>Disclosure in line with § 25 Mediengesetz</h2>
    <Spacer axis="vertical" size={20} />
    <strong>Media Owner and Editor</strong>
    <p>
      Martin Sonnberger <br /> A-5412 Puch bei Hallein, Austria
    </p>
    <Spacer axis="vertical" size={50} />
    <h2>Privacy Policy</h2>
    <Spacer axis="vertical" size={20} />
    <p>
      This website does not collect any personal data. However, when accessing
      this website, your browser automatically transmits data. When running a
      website, it is important that the server which delivers the content runs
      safely and smoothly. To do so, it needs to collect so-called logs. These
      logs include:
    </p>
    <ul>
      <li>Date and time of the request</li>
      <li>The resource being requested</li>
      <li>Your anonymized IP address</li>
      <li>Technical information about the transmission</li>
    </ul>
    <Spacer axis="vertical" size={20} />
    <p>
      As this collection of data is a technical requirement to run this website
      and your IP address is collected anonymously, the collection is fully
      compliant with the GDPR and does not require your explicit consent.
    </p>
  </Layout>
);

export default LegalPage;
