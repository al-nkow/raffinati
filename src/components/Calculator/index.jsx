import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Tabs from '../Tabs';
import Rome from '../Rome';
import { contentWidth, grey, text } from '../../config';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
  min-height: 400px;
`;

const Back = styled(Link)`
  margin-bottom: 30px;
  padding: 15px 0;
  display: inline-block;
  color: ${grey};
  font-size: 14px;
  text-decoration: none;
  svg {
    margin-right: 10px;
    vertical-align: middle;
    path {
      stroke: ${grey};
    }
  }
  &:hover {
    color: ${text};
    path {
      stroke: ${text};
    }
  }
`;

const TabContent = styled.div`
  padding: 60px 20px;
`;

const Calculator = () => (
  <Wrap>
    <Back to="/">
      <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.41589 0.511963L1.55896 4.80518L6.41589 9.26376" stroke="#767676" />
      </svg>
      Вернуться на главную
    </Back>
    <Tabs />
    <TabContent>
      <Rome />
    </TabContent>
  </Wrap>
);

export default Calculator;
