import React from 'react';
import styled from 'styled-components';
import { Wrap as MainWrap } from 'components/Shared';
import Carousel from '../Carousel';
import { passion, BP_1, BP_2, BP_3 } from '../../config';

const winSize = typeof window !== 'undefined' ? window.innerWidth : null;

const Wrap = styled(MainWrap)`
  padding-top: 150px;
  padding-bottom: 300px;
  overflow: hidden;
  ${BP_1} {
    padding-top: 110px;
    padding-bottom: 200px;
  }
  ${BP_2} {
    padding-top: 70px;
  }
  ${BP_3} {
    padding-top: 20px;
    padding-bottom: 0;
  }
`;

const H1 = styled.h1`
  position: relative;
  z-index: 10;
  font-style: italic;
  display: block;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-size: 88px;
  line-height: 78px;
  text-align: center;
  margin-bottom: 220px;
  i {
    color: ${passion};
    opacity: 0.8;
  }
  ${BP_1} {
    font-size: 72px;
    line-height: 62px;
    margin-bottom: 180px;
  }
  ${BP_2} {
    font-size: 62px;
    line-height: 52px;
    margin-bottom: 120px;
  }
  ${BP_3} {
    font-size: 52px;
    line-height: 48px;
    margin-bottom: 40px;
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
    {winSize && winSize > 400 && <Carousel />}
  </Wrap>
);

export default Main;
