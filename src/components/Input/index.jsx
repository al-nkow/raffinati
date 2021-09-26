import React, { useRef, useEffect } from 'react';
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

const Input = ({ changed, placeholder, max = 10000, value }) => {
  const inpRef = useRef(null);
  const setValue = (event) => {
    let val = event.target.value.replace(/[,]/g, '.').replace(/[^0-9.]/g, '');

    if (val.indexOf('.') !== -1) {
      const arr = val.split('.');
      if (arr.length > 2) {
        const [first, ...rest] = arr;
        val = `${first}.${rest.join('')}`;
      }
    }

    if (val > max) val = max;
    if (val[0] === '.') val = `0${val}`;

    // eslint-disable-next-line no-param-reassign
    event.target.value = val;
    changed(+val);
  };

  useEffect(() => {
    if (value > max) {
      changed(max);
      inpRef.current.value = max;
    }
  }, [value, max]);

  return <TextField ref={inpRef} type="text" onChange={setValue} placeholder={placeholder} />;
};

export default Input;
