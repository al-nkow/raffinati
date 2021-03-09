import React from 'react';
import SEO from '../components/seo';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Caculator from '../components/Calculator';

// !!! TODO - вот это гавно теряется при обновлении страницы!!!! - его просто нет!
// import './common.css';
// import '@fontsource/playfair-display/400.css';
// import '@fontsource/playfair-display/400-italic.css';

const CalcPage = ({ location }) => (
  <>
    <SEO title="Калькулятор" />
    <Header />
    <Caculator location={location} />
    <Footer />
  </>
);

export default CalcPage;
