import React from 'react';
import Header from '../components/Head';
import Main from '../components/Main';
import Catalog from '../components/Catalog';
import Work from '../components/Work';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
// import styled from 'styled-components';
// import { Link } from 'gatsby';

import './common.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/400-italic.css';

// import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

// const Block = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 3px solid red;
//   border-radius: 4px;
// `;

// ========= TODO =======================
/*
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}
*/
// ======================================

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <Main />
    <Catalog />
    <Work />
    <Partners />
    <Footer />
    {/* <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site. 123</p>
      <p>Now go build something great.</p>
      <Block onClick={clickHandler} />
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/using-typescript/">Go to Using TypeScript</Link>
    </Layout> */}
  </>
);

export default IndexPage;
