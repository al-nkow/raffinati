import React from 'react';
import styled from 'styled-components';
import { passion, gray76, MENU_BP } from '../../config';

const Wrap = styled.div`
  display: none;
  ${MENU_BP} {
    margin-top: -10px;
    display: block;
  }
`;

const Icon = styled.div`
  display: flex;
  cursor: pointer;
  width: 34px;
  height: 24px;
  margin-left: 30px;
  flex-direction: column;
  justify-content: space-between;
  div {
    height: 3px;
    background: ${gray76};
    border-radius: 2px;
  }
  &:hover {
    div {
      background: ${passion};
    }
  }
`;

const Burger = ({ onClick }) => (
  <Wrap>
    <Icon onClick={onClick}>
      <div />
      <div />
      <div />
    </Icon>
  </Wrap>
);

export default Burger;
