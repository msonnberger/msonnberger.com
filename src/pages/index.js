import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '@styles';
import { Layout, Hero, About } from '@components';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Martin Sonnberger</title>
      <meta charSet="utf-8" />
    </Helmet>
    <Hero />
    {/* <About /> */}
  </Layout>
);

export default IndexPage;
