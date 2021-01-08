import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';

import Tulle from './images/tulle.png';
import Blackout from './images/blackout.png';
import Cloth from './images/cloth.png';

import { passion, grey } from '../../config';

const Head = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  font-size: 52px;
  font-family: 'Playfair Display';
  font-weight: 400;
  i {
    font-style: italic;
  }
`;

const SelectBase = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
`;

const Fabric = styled.div`
  cursor: pointer;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-size: 40px;
  position: relative;
  width: 30%;
  height: 369px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  ${({ active }) => (active ? `
    color: #ffffff;
    border-color: ${passion};
  ` : '')}
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${({ url }) => url});
    background-size: cover;
    opacity: ${({ active }) => (active ? '1' : '0.4')};
    z-index: -1;
  }
  &:hover {
    border-color: ${passion};
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  padding-left: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

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
  ${({ checked }) => (checked ? `
    &:before {
      content: '';
      width: 17px;
      height: 2px;
      background: ${grey};
      position: absolute;
      transform: rotate(50deg);
      top: 13px;
      left: 2px;
    }
    &:after {
      content: '';
      width: 17px;
      height: 2px;
      background: ${grey};
      position: absolute;
      transform: rotate(-50deg);
      top: 13px;
      right: 1px;
    }
  ` : '')}
`;

const Result = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 40px;
  font-size: 44px;
  text-align: right;
  & > div {
    flex: 1;
  }
`;

const Cost = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-style: italic;
  font-family: 'Playfair Display';
  font-weight: 400;
  text-align: center;
  line-height: 20px;
`;

const Calculation = styled.div`
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-style: italic;
  color: ${grey};
`;

const TULLE_PRICE = 1300; // Тюль погонный метр
const BLACKOUT_PRICE = 1900; // Блэкаут погонный метр
const CLOTH_PRICE = 1700; // Ткань погонный метр
const CORNICE_PRICE = 2200; // Карниз метр
const TAPE_PRICE = 150; // Шторная лента цена за метр
const TAPE_COEF = 0.3; // Коэффициент расчета шторной ленты

const Rome = () => {
  const [values, setValues] = useState({
    base: null,
    width: null,
    height: null,
    cornice: false,
  });

  const setBase = (price) => {
    setValues({ ...values, base: price });
  };

  const setWidth = (width) => {
    setValues({ ...values, width });
  };

  const setHeight = (height) => {
    setValues({ ...values, height });
  };

  const setCornice = (event) => {
    setValues({ ...values, cornice: +event.target.checked });
  };

  const { base, width, height, cornice } = values;

  const materialCost = +(base * width).toFixed(2);
  const sewingCost = +(base * width * height).toFixed(2);
  const tapeCost = +(width * (height / TAPE_COEF) * TAPE_PRICE).toFixed(2);
  const corniceCost = cornice ? +(width * CORNICE_PRICE).toFixed(2) : 0;

  const totalPrice = +(materialCost + sewingCost + tapeCost + corniceCost).toFixed(2);

  return (
    <div>
      <Head>
        1. Выберите
        &nbsp;
        <i>материал</i>
      </Head>
      <SelectBase>
        <Fabric
          url={Tulle}
          onClick={() => setBase(TULLE_PRICE)}
          active={values.base === TULLE_PRICE}
        >
          Тюль
          <Cost>Стоимость<br />{TULLE_PRICE} руб/погонный метр</Cost>
        </Fabric>
        <Fabric
          url={Blackout}
          onClick={() => setBase(BLACKOUT_PRICE)}
          active={values.base === BLACKOUT_PRICE}
        >
          Блэкаут
          <Cost>Стоимость<br />{BLACKOUT_PRICE} руб/погонный метр</Cost>
        </Fabric>
        <Fabric
          url={Cloth}
          onClick={() => setBase(CLOTH_PRICE)}
          active={values.base === CLOTH_PRICE}
        >
          Ткань
          <Cost>Стоимость<br />{CLOTH_PRICE} руб/погонный метр</Cost>
        </Fabric>
      </SelectBase>
      {base ? (
        <>
          <Head>
            2. Укажите
            &nbsp;
            <i>размеры</i>
          </Head>
          <FormGroup>
            <Label>Длина карниза (ширина шторы)</Label>
            <br />
            <Input changed={setWidth} placeholder="Укажите ширину в метрах" />
          </FormGroup>
          <FormGroup>
            <Label>Высота шторы</Label>
            <br />
            <Input changed={setHeight} placeholder="Укажите высоту в метрах" />
          </FormGroup>
          <CheckboxWrap>
            <Checkbox checked={values.cornice}>
              <input type="checkbox" onChange={setCornice} />
            </Checkbox>
            Добавить карниз
          </CheckboxWrap>
          {width && height ? (
            <Result>
              <Calculation>
                Из чего складывается итоговая стоимость:
                <div>Стоимость ткани: {base}₽ * {width}м = {materialCost}₽</div>
                <div>Цена пошива: {base}₽ * {width}м * {height}м = {sewingCost}₽</div>
                <div>
                  Цена шторной ленты:&nbsp;
                  {width}м * ({height}м/{TAPE_COEF}) * {TAPE_PRICE}₽ = {tapeCost}₽
                </div>
                {cornice ? (
                  <div>Цена карниза: {width}м * {CORNICE_PRICE}₽ = {corniceCost}₽</div>
                ) : null}
              </Calculation>
              <div>
                Итого: {totalPrice} ₽
              </div>
            </Result>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Rome;
