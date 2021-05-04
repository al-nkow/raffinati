import React, { useState } from 'react';
import Input from '../Input';
import OrderModal from '../OrderModal';

import {
  SelectBase,
  Fabric,
  Cost,
  Head,
  Label,
  FormGroup,
  Result,
  Calculation,
  Button,
} from '../Shared';

import { corniceOptions } from '../../config';

const options = corniceOptions.map(i => i.price);

const baseMap = corniceOptions.reduce((res, i) => {
  res[i.price] = i.title;
  return res;
}, {});

const PortiereTab = ({ option }) => {
  const [showOrderModal, toggleModal] = useState(false);

  const [values, setValues] = useState({
    width: null,
    corniceBase: options[option],
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
    <>
      <Head>
        1. Выберите <i>вариант</i> карниза
      </Head>
      <SelectBase>
        {corniceOptions.map((item) => (
          <Fabric
            key={item.id}
            url={item.image}
            onClick={() => setCorniceBase(item.price)}
            active={values.corniceBase === item.price}
          >
            {item.title}
            <Cost>Стоимость<br />{item.price} руб/метр</Cost>
          </Fabric>
        ))}
        <Fabric cap />
      </SelectBase>
      {corniceBase ? (
        <>
          <Head>
            2. Укажите <i>размеры</i> карниза
          </Head>
          <FormGroup>
            <Label>Длина карниза (ширина шторы)</Label>
            <br />
            <Input changed={setWidth} placeholder="Укажите ширину в метрах" />
          </FormGroup>
        </>
      ) : null}
      {width ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>Цена карниза: {width}м * {corniceBase}₽ = {corniceCost}₽</div>
          </Calculation>
          <div>
            Итого: {corniceCost} ₽
            <br />
            <Button onClick={() => toggleModal(true)}>Оформить заказ</Button>
          </div>
        </Result>
      ) : null}

      {showOrderModal ? (
        <OrderModal
          details={`Карниз ${baseMap[corniceBase]?.toLowerCase()} ${width} м.`}
          price={corniceCost}
          close={() => toggleModal(false)}
        />
      ) : null}
    </>
  );
};

export default PortiereTab;
