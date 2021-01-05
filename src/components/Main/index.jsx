import React from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';
import { contentWidth, passion } from '../../config';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
  padding-top: 50px;
  overflow: hidden;
  padding-bottom: 200px;
`;

const H1 = styled.h1`
  position: relative;
  z-index: 10;
  display: block;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-size: 88px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 160px;
  i {
    font-style: italic;
    color: ${passion};
    opacity: 0.8;
  }
`;

const Main = () => (
  <Wrap>
    <H1>
      RAFFINATI
      <br />
      <i>производство</i>
      &nbsp;
      штор
      <br />
      <i>и</i>
      &nbsp;
      карнизов
    </H1>
    <Carousel />
  </Wrap>
);

export default Main;
