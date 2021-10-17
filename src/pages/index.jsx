import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Head';
import Main from '../components/Main';
import Catalog from '../components/Catalog';
import Work from '../components/Work';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = ({ location }) => {
  const [scrollToElem, setScrollToElem] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const elemId = searchParams.get('scroll');

    setScrollToElem(elemId);

    if (typeof window !== 'undefined' && elemId) {
      document.getElementById(elemId).scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Header main setScrollToElem={setScrollToElem} />
      <Main />
      <Catalog />
      <Work scrollTo={scrollToElem} />
      <Partners />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
