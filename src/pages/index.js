import React from "react";
import { GlobalStyle } from "@styles";
import { Layout, Hero, Projects, Contact, Footer } from "@components";

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
