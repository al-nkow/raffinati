import React from 'react';
import SEO from '../components/seo';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Caculator from '../components/Calculator';

const CalcPage = () => (
  <>
    <SEO title="Калькулятор" />
    <Header />
    <Caculator />
    <Footer />
  </>
);

export default CalcPage;
