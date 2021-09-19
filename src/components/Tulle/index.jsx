import React, { useState, useEffect } from 'react';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import KsInfo from 'components/KsInfo';
import { tulleOptions, TAPE_PRICE, CORNICE_REG_PRICE, SEWING_BASE_PRICE } from 'config';
import OrderModal from 'components/OrderModal';

import {
  Head,
  SelectBase,
  Fabric,
  Label,
  FormGroup,
  Result,
  Cost,
  Calculation,
  Button,
} from 'components/Shared';

import SelectColor from 'components/SelectColor';
import { barhatColors, tulleColors, crepeColors } from '../../colors';

const mapColors = {
  tulleVeil: tulleColors,
  tulleCrepe: crepeColors,
  tulleLinen: barhatColors,
};

const baseMap = tulleOptions.reduce((res, i) => {
  res[i.id] = i.title;
  return res;
}, {});

const TulleTab = ({ option }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [color, setColor] = useState('');
  const [category, setCategory] = useState(option || null);

  const [values, setValues] = useState({
    base: option ? tulleOptions.find(i => i.id === option).price : null,
    width: null,
    waves: null,
    cornice: false,
  });

  const { base, width, waves, cornice } = values;

  const materialCost = +(base * width * waves).toFixed(2);
  const sewingCost = +(SEWING_BASE_PRICE * width * waves).toFixed(2);
  const tapeCost = +(width * waves * TAPE_PRICE).toFixed(2);
  const corniceCost = cornice ? +(width * CORNICE_REG_PRICE).toFixed(2) : 0;

  const totalPrice = +(materialCost + sewingCost + tapeCost + corniceCost).toFixed(2);

  useEffect(() => {
    setValues({ ...values, cornice: false });
  }, [values.base]);

  return (
    <div>
      <Head>
        1. Выберите
        &nbsp;
        <i>материал</i>
      </Head>
      <SelectBase>
        {tulleOptions.map((item) => (
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
            title="Добавить профильный карниз"
          />

          {width && waves ? (
            <Result>
              <Calculation>
                Из чего складывается итоговая стоимость:
                <div>Стоимость ткани: {base}₽ * {width}м * {waves} = {materialCost}₽</div>
                <div>Цена пошива: {SEWING_BASE_PRICE} * {width}м * {waves} = {sewingCost}₽</div>
                <div>
                  Цена шторной ленты:&nbsp;
                  {width}м * {waves} * {TAPE_PRICE}₽ = {tapeCost}₽
                </div>
                {cornice ? (
                  <div>Цена карниза: {width}м * {CORNICE_REG_PRICE}₽ = {corniceCost}₽</div>
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
                `Тюль (${baseMap[category]?.toLowerCase()}), цвет: ${color?.toLowerCase()}, ширина ${width} м,
                 складка ${waves}${cornice ? ', Профильный карниз' : ''}.`
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

export default TulleTab;
