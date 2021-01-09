import React from 'react';
import styled from 'styled-components';
import { grey } from '../../config';
import Check from './images/check.svg';

const CheckboxWrap = styled.label`
  cursor: pointer;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
`;

const Checkbox = styled.div`
  margin-right: 20px;
  position: relative;
  width: 30px;
  height: 30px;
  border: 1px solid ${grey};
  border-radius: 2px;
  input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    botom: 0;
    opacity: 0;
  }
  img {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;

const Component = ({ onChange, checked, title }) => (
  <CheckboxWrap>
    <Checkbox checked={checked}>
      <input type="checkbox" onChange={onChange} />
      <img src={Check} alt="" />
    </Checkbox>
    {title}
  </CheckboxWrap>
);

export default Component;
