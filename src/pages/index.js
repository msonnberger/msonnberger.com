import React from 'react';
import { GlobalStyle } from '@styles';
import { Layout, Hero, About, Projects, Jobs, Contact, Footer } from '@components';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Hero />
    <About />
    <Projects />
    <Jobs />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
