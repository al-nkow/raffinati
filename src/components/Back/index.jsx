import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { grey, text } from '../../config';

const Wrap = styled(Link)`
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

const Back = () => (
  <Wrap to="/">
    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.41589 0.511963L1.55896 4.80518L6.41589 9.26376" />
    </svg>
    Вернуться на главную
  </Wrap>
);

export default Back;
