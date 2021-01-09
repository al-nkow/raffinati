import React, { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import KsInfo from '../KsInfo';

import {
  Head,
  SelectBase,
  Fabric,
  Label,
  FormGroup,
  Result,
  Cost,
  Calculation,
  RadioGroup,
  RadioLabel,
  RadioBtn,
} from '../Shared';

import Tulle from './images/tulle.png';
import Blackout from './images/blackout.png';
import Cloth from './images/cloth.png';

const CORNICE_REG_PRICE = 700; // Карниз профильный - метр
const CORNICE_DEC_PRICE = 2000; // Карниз декоративный - метр
const TAPE_PRICE = 100; // Шторная лента цена за метр
const TAPE_COEF = 0.3; // Коэффициент расчета шторной ленты

const VEIL_PRICE = 600; // Вуаль погонный метр
const CREPE_PRICE = 1900; // Креп погонный метр
const LINEN_PRICE = 1300; // Лён погонный метр

const TulleTab = () => {
  const [values, setValues] = useState({
    base: null,
    width: null,
    waves: null,
    cornice: false,
    corniceBase: CORNICE_REG_PRICE,
  });

  const setBase = (price) => {
    setValues({ ...values, base: price });
  };

  const setWidth = (width) => {
    setValues({ ...values, width });
  };

  const setWaves = (waves) => {
    setValues({ ...values, waves });
  };

  const setCornice = (event) => {
    setValues({ ...values, cornice: +event.target.checked });
  };

  const setCorniceBase = (corniceBase) => {
    setValues({ ...values, corniceBase });
  };

  const { base, width, waves, cornice, corniceBase } = values;

  const materialCost = +(base * width * waves).toFixed(2);
  const sewingCost = +(720 * width * waves).toFixed(2);
  const tapeCost = +(width * (waves / TAPE_COEF) * TAPE_PRICE).toFixed(2);
  const corniceCost = cornice ? +(width * corniceBase).toFixed(2) : 0;

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
          onClick={() => setBase(VEIL_PRICE)}
          active={values.base === VEIL_PRICE}
        >
          Вуаль
          <Cost>Стоимость<br />{VEIL_PRICE} руб/погонный метр</Cost>
        </Fabric>
        <Fabric
          url={Blackout}
          onClick={() => setBase(CREPE_PRICE)}
          active={values.base === CREPE_PRICE}
        >
          Креп
          <Cost>Стоимость<br />{CREPE_PRICE} руб/погонный метр</Cost>
        </Fabric>
        <Fabric
          url={Cloth}
          onClick={() => setBase(LINEN_PRICE)}
          active={values.base === LINEN_PRICE}
        >
          Лён
          <Cost>Стоимость<br />{LINEN_PRICE} руб/погонный метр</Cost>
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
            <Label>
              Желаемая складка (коэффициент сборки)
              <KsInfo />
            </Label>
            <br />
            <Input changed={setWaves} placeholder="Укажите коэффициент - например 2.5" />
          </FormGroup>
          <Checkbox onChange={setCornice} checked={cornice} title="Добавить карниз" />
          {cornice ? (
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
          ) : null}

          {width && waves ? (
            <Result>
              <Calculation>
                Из чего складывается итоговая стоимость:
                <div>Стоимость ткани: {base}₽ * {width}м * {waves} = {materialCost}₽</div>
                <div>Цена пошива: 720 * {width}м * {waves} = {sewingCost}₽</div>
                <div>
                  Цена шторной ленты:&nbsp;
                  {width}м * ({waves}/{TAPE_COEF}) * {TAPE_PRICE}₽ = {tapeCost}₽
                </div>
                {cornice ? (
                  <div>Цена карниза: {width}м * {corniceBase}₽ = {corniceCost}₽</div>
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

export default TulleTab;
