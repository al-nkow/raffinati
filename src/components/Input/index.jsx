import React from 'react';
import styled from 'styled-components';
import { grey } from '../../config';

const TextField = styled.input`
  border: 1px solid ${grey};
  padding: 20px;
  border-radius: 2px;
  text-shadow: none;
  box-shadow: none;
  min-width: 360px;
  font-size: 16px;
`;

const Input = ({ changed, placeholder }) => {
  const setValue = (event) => {
    const { value } = event.target;
    let val = value.replace(/[,]/g, '.').replace(/[^0-9.]/g, '');

    if (val.indexOf('.') !== -1) {
      const arr = val.split('.');
      if (arr.length > 2) {
        const [first, ...rest] = arr;
        val = `${first}.${rest.join('')}`;
      }
    }

    if (val > 100000) val = 100000;
    if (val[0] === '.') val = '0' + val;

    event.target.value = val;
    changed(+val);
  };

  return <TextField type="text" onChange={setValue} placeholder={placeholder} />;
};

export default Input;
