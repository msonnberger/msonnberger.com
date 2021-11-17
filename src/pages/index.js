import React from 'react';
import { GlobalStyle } from '@styles';
import { Layout, Hero, About, Projects, Contact, Footer } from '@components';

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
