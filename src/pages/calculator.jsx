import React from 'react';
import SEO from '../components/seo';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Caculator from '../components/Calculator';
import Layout from '../components/Layout';

const CalcPage = ({ location }) => (
  <Layout>
    <SEO title="Калькулятор" />
    <Header />
    <Caculator location={location} />
    <Footer />
  </Layout>
);

export default CalcPage;
