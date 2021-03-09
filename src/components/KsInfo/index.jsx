import React from 'react';
import styled from 'styled-components';
import { passion } from '../../config';

import Ks15 from './images/ks15.png';
import Ks2 from './images/ks2.png';
import Ks25 from './images/ks25.png';

export const Tooltip = styled.div`
  z-index: 10;
  width: 300px;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(30px, 45%);
  background: #ffffff;
  padding: 20px;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-style: italic;
  img {
    display: block;
    width: 100%;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  b {
    font-weight: bold;
    color: ${passion};
    font-size: 18px;
  }
  display: none;
`;

export const Info = styled.div`
  position: relative;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${passion};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: '?';
    color: #ffffff;
    font-size: 16px;
    margin-right: 1px;
    margin-top: 1px;
  }
  &:hover {
    div {
      display: block;
    }
  }
`;

const KsInfo = () => (
  <Info>
    <Tooltip>
      Коэффициент <b>2.5</b> подходит для тюли или лекгих портьерных тканей
      <img src={Ks25} alt="" />
      <b>2</b> - cамый часто применяемый коэффициент для штор
      <img src={Ks2} alt="" />
      <b>1.5</b> это минимальный коэффициент
      <img src={Ks15} alt="" />
    </Tooltip>
  </Info>
);

export default KsInfo;
