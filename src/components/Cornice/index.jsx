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

const CORNICE_REG_PRICE = 700; // Карниз профильный - метр
const CORNICE_DEC_PRICE = 2000; // Карниз декоративный - метр

const options = [CORNICE_REG_PRICE, CORNICE_DEC_PRICE];

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
        1. Укажите <i>размеры</i> корниза
      </Head>
      <FormGroup>
        <Label>Длина карниза (ширина шторы)</Label>
        <br />
        <Input changed={setWidth} placeholder="Укажите ширину в метрах" />
      </FormGroup>

      <RadioGroup>
        <RadioLabel>
          <RadioBtn checked={corniceBase === CORNICE_REG_PRICE}>
            <input
              type="radio"
              value="option1"
              checked={corniceBase === CORNICE_REG_PRICE}
              onChange={() => setCorniceBase(CORNICE_REG_PRICE)}
            />
          </RadioBtn>
          Профильный ({CORNICE_REG_PRICE} руб/м)
        </RadioLabel>
        <RadioLabel>
          <RadioBtn checked={corniceBase === CORNICE_DEC_PRICE}>
            <input
              type="radio"
              value="option2"
              checked={corniceBase === CORNICE_DEC_PRICE}
              onChange={() => setCorniceBase(CORNICE_DEC_PRICE)}
            />
          </RadioBtn>
          Декоративный ({CORNICE_DEC_PRICE} руб/м)
        </RadioLabel>
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
