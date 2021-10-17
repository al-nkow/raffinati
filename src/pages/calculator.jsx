import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SEO from '../components/seo';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Caculator from '../components/Calculator';
import Layout from '../components/Layout';

const CalcPage = ({ location }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <SEO title="Калькулятор" />
      <Header />
      <Caculator location={location} />
      <Footer />
    </Layout>
  );
};

export default CalcPage;
