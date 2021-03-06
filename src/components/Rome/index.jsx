import React, { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
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
import { romeOptions } from '../../config';
import OrderModal from '../OrderModal';

import { barhatColors, blackoutColors, tulleColors } from '../../colors';
import SelectColor from '../SelectColor';

const mapColors = {
  romeTulle: tulleColors,
  romeBlackout: blackoutColors,
  romeCloth: barhatColors,
};

const CORNICE_PRICE = 2200; // Карниз метр
const TAPE_PRICE = 100; // Шторная лента цена за метр
const TAPE_COEF = 0.3; // Коэффициент расчета шторной ленты

const baseMap = romeOptions.reduce((res, i) => {
  res[i.id] = i.title;
  return res;
}, {});

const Rome = ({ option }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [color, setColor] = useState('');
  const [category, setCategory] = useState(option || null);

  const [values, setValues] = useState({
    base: option ? romeOptions.find(i => i.id === option).price : null,
    width: null,
    height: null,
    cornice: false,
    type: 'standart',
  });

  const { base, width, height, cornice, type } = values;

  const materialCost = +(base * width).toFixed(2);
  const sewingCost = +(base * width * height).toFixed(2);
  const tapeCost = +(width * (height / TAPE_COEF) * TAPE_PRICE).toFixed(2);
  const corniceCost = cornice ? +(width * CORNICE_PRICE).toFixed(2) : 0;

  const totalPrice = +(materialCost + sewingCost + tapeCost + corniceCost).toFixed(2);

  return (
    <div>
      <RadioGroup>
        <RadioLabel>
          <RadioBtn checked={type === 'standart'}>
            <input
              type="radio"
              value="standart"
              checked={type === 'standart'}
              onChange={() => setValues({ ...values, type: 'standart' })}
            />
          </RadioBtn>
          Стандарт
        </RadioLabel>
        <RadioLabel>
          <RadioBtn checked={type === 'order'}>
            <input
              type="radio"
              value="order"
              checked={type === 'order'}
              onChange={() => setValues({ ...values, type: 'order' })}
            />
          </RadioBtn>
          Под заказ
        </RadioLabel>
      </RadioGroup>
      <Head>
        1. Выберите <i>категорию</i>
      </Head>
      <SelectBase>
        {romeOptions.map((item) => (
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
            3. Укажите <i>размеры</i>
          </Head>
          <FormGroup>
            <Label>Длина карниза (ширина шторы)</Label>
            <br />
            <Input changed={(w) => setValues({ ...values, width: w })} placeholder="Укажите ширину в метрах" />
          </FormGroup>
          <FormGroup>
            <Label>Высота шторы</Label>
            <br />
            <Input changed={(h) => setValues({ ...values, height: h })} placeholder="Укажите высоту в метрах" />
          </FormGroup>
          <Checkbox
            onChange={(e) => setValues({ ...values, cornice: +e.target.checked })}
            checked={cornice}
            title="Добавить карниз"
          />
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
                <br />
                <Button onClick={() => toggleModal(true)}>Оформить заказ</Button>
              </div>
            </Result>
          ) : null}
          {showOrderModal ? (
            <OrderModal
              details={
                `Римская штора (${baseMap[category]?.toLowerCase()}), цвет: ${color?.toLowerCase()}, ширина ${width}м,
                 высота ${height}м${cornice ? ', карниз' : ''}.`
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

export default Rome;
