import React, { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';

import { Head, SelectBase, Fabric, Label, FormGroup, Result, Cost, Calculation } from '../Shared';

import Tulle from './images/tulle.png';
import Blackout from './images/blackout.png';
import Cloth from './images/cloth.png';

const TULLE_PRICE = 1300; // Тюль погонный метр
const BLACKOUT_PRICE = 1900; // Блэкаут погонный метр
const CLOTH_PRICE = 1700; // Ткань погонный метр
const CORNICE_PRICE = 2200; // Карниз метр
const TAPE_PRICE = 150; // Шторная лента цена за метр
const TAPE_COEF = 0.3; // Коэффициент расчета шторной ленты

const options = [TULLE_PRICE, BLACKOUT_PRICE, CLOTH_PRICE];

const Rome = ({ option }) => {
  const [values, setValues] = useState({
    base: options[option],
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
          <Checkbox onChange={setCornice} checked={cornice} title="Добавить карниз" />
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
