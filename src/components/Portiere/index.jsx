import React, { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import KsInfo from '../KsInfo';
import { portiereOptions } from '../../config';
import OrderModal from '../OrderModal';

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
  Button,
} from '../Shared';

import { barhatColors, blackoutColors, tulleColors } from '../../colors';
import SelectColor from '../SelectColor';

const mapColors = {
  portiereVeil: tulleColors,
  portiereBlackout: blackoutColors,
  portiereLight: barhatColors,
};

const CORNICE_REG_PRICE = 700; // Карниз профильный - метр
const CORNICE_DEC_PRICE = 2000; // Карниз декоративный - метр
const TAPE_PRICE = 100; // Шторная лента цена за метр
const TAPE_COEF = 0.3; // Коэффициент расчета шторной ленты

const baseMap = portiereOptions.reduce((res, i) => {
  res[i.id] = i.title;
  return res;
}, {});

const PortiereTab = ({ option }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [color, setColor] = useState('');
  const [category, setCategory] = useState(option || null);

  const [values, setValues] = useState({
    base: option ? portiereOptions.find(i => i.id === option).price : null,
    width: null,
    waves: null,
    cornice: false,
    corniceBase: CORNICE_REG_PRICE,
  });

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
        {portiereOptions.map((item) => (
          <Fabric
            key={item.id}
            url={item.image}
            onClick={() => {
              setColor('');
              setCategory(item.id);
              setValues({ ...values, base: item.price });
            }}
            active={category === item.id}
          >
            {item.title}
            <Cost>Стоимость<br />{item.price} руб/погонный метр</Cost>
          </Fabric>
        ))}
      </SelectBase>
      {base && category ? (
        <>
          <Head>
            2. Выберите <i>цвет</i>
          </Head>
          <SelectColor options={mapColors[category]} select={setColor} value={color} />
        </>
      ) : null}
      {base && color ? (
        <>
          <Head>
            2. Укажите
            &nbsp;
            <i>размеры</i>
          </Head>
          <FormGroup>
            <Label>Длина карниза (ширина шторы)</Label>
            <br />
            <Input changed={w => setValues({ ...values, width: w })} placeholder="Укажите ширину в метрах" />
          </FormGroup>
          <FormGroup>
            <Label>
              Желаемая складка (коэффициент сборки)
              <KsInfo />
            </Label>
            <br />
            <Input changed={w => setValues({ ...values, waves: w })} placeholder="Укажите коэффициент - например 2.5" />
          </FormGroup>
          <Checkbox
            onChange={e => setValues({ ...values, cornice: +e.target.checked })}
            checked={cornice}
            title="Добавить карниз"
          />
          {cornice ? (
            <RadioGroup>
              <RadioLabel>
                <RadioBtn checked={corniceBase === CORNICE_REG_PRICE}>
                  <input
                    type="radio"
                    value="option1"
                    checked={corniceBase === CORNICE_REG_PRICE}
                    onChange={() => setValues({ ...values, corniceBase: CORNICE_REG_PRICE })}
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
                    onChange={() => setValues({ ...values, corniceBase: CORNICE_DEC_PRICE })}
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
                <br />
                <Button onClick={() => toggleModal(true)}>Оформить заказ</Button>
              </div>
            </Result>
          ) : null}

          {showOrderModal ? (
            <OrderModal
              details={
                `Портьеры (${baseMap[category]?.toLowerCase()}), цвет: ${color?.toLowerCase()}, ширина ${width} м,
                 складка ${waves}${cornice ? `, ${corniceBase === CORNICE_REG_PRICE ? 'Профильный' : 'Декоративный'} карниз` : ''}.`
              }
              price={totalPrice}
              close={() => toggleModal(false)}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default PortiereTab;
