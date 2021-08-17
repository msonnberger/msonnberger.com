import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '@styles';
import { Layout, Hero, About, Projects } from '@components';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Martin Sonnberger</title>
      <meta charSet="utf-8" />
    </Helmet>
    <Hero />
    <About />
    {/* <Projects /> */}
  </Layout>
);

export default IndexPage;
