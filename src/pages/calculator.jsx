import React from 'react';
import SEO from '../components/seo';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Caculator from '../components/Calculator';

const CalcPage = ({ location }) => (
  <>
    <SEO title="Калькулятор" />
    <Header />
    <Caculator location={location} />
    <Footer />
  </>
);

export default CalcPage;
