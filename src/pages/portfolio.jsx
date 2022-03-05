import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SEO from '../components/seo';
import Header from '../components/Head';
import Footer from '../components/Footer';
// import Portfolio from '../components/Portfolio';
import Layout from '../components/Layout';

const PortfolioPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <SEO title="Наши работы" />
      <Header />
      {/* <Portfolio /> */}
      <Footer />
    </Layout>
  );
};

export default PortfolioPage;
