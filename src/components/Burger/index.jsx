import React, { useState } from 'react';
import styled from 'styled-components';
import { passion, gray76, MENU_BP } from '../../config';

const Wrap = styled.div`
  display: none;
  ${MENU_BP} {
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

const MobMenu = styled.div`
  width: 500px;
  height: 500px;
  background: black;
  position: fixed;
  top: 80px;
  right: 0;
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrap>
      <Icon onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Icon>
      {open && <MobMenu />}
    </Wrap>
  );
};

export default Burger;
