import React, { useState } from 'react';
import Input from '../Input';

import {
  Head,
  Label,
  FormGroup,
  Result,
  Calculation,
  RadioGroup,
  RadioLabel,
  RadioBtn,
} from '../Shared';

import { corniceOptions } from '../../config';

const options = corniceOptions.map(i => i.price);

const PortiereTab = ({ option }) => {
  const [values, setValues] = useState({
    width: null,
    corniceBase: options[option || 0],
  });

  const setWidth = (width) => {
    setValues({ ...values, width });
  };

  const setCorniceBase = (corniceBase) => {
    setValues({ ...values, corniceBase });
  };

  const { width, corniceBase } = values;
  const corniceCost = +(width * corniceBase).toFixed(2);

  return (
    <div>
      <Head>
        1. Укажите <i>размеры</i> карниза
      </Head>
      <FormGroup>
        <Label>Длина карниза (ширина шторы)</Label>
        <br />
        <Input changed={setWidth} placeholder="Укажите ширину в метрах" />
      </FormGroup>
      <RadioGroup>
        {corniceOptions.map(item => (
          <RadioLabel key={item.id}>
            <RadioBtn checked={corniceBase === item.price}>
              <input
                type="radio"
                value="option1"
                checked={corniceBase === item.price}
                onChange={() => setCorniceBase(item.price)}
              />
            </RadioBtn>
            {item.title} ({item.price} руб/м)
          </RadioLabel>
        ))}
      </RadioGroup>
      {width ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>Цена карниза: {width}м * {corniceBase}₽ = {corniceCost}₽</div>
          </Calculation>
          <div>
            Итого: {corniceCost} ₽
          </div>
        </Result>
      ) : null}
    </div>
  );
};

export default PortiereTab;
