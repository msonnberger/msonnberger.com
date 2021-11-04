import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyle } from '@styles';
import { Layout, Hero, About, Projects, Contact, Footer } from '@components';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Martin Sonnberger</title>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="favicon.png" sizes="50x50" />
    </Helmet>
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
