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

const baseMap = corniceOptions.reduce((res, i) => {
  res[i.id] = i.title;
  return res;
}, {});

const PortiereTab = ({ option }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [category, setCategory] = useState(option || null);

  const [values, setValues] = useState({
    width: null,
    corniceBase: option ? corniceOptions.find(i => i.id === option).price : null,
  });

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
            onClick={() => {
              setCategory(item.id);
              setValues({ ...values, corniceBase: item.price });
            }}
            active={category === item.id}
          >
            {item.title}
            <Cost>Стоимость<br />{item.price} руб/метр</Cost>
          </Fabric>
        ))}
        {/* <Fabric cap /> */}
      </SelectBase>
      {corniceBase ? (
        <>
          <Head>
            2. Укажите <i>размеры</i> карниза
          </Head>
          <FormGroup>
            <Label>Длина карниза (ширина шторы)</Label>
            <br />
            <Input changed={w => setValues({ ...values, width: w })} placeholder="Укажите ширину в метрах" />
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
          details={`Карниз ${baseMap[category]?.toLowerCase()} ${width} м.`}
          price={corniceCost}
          close={() => toggleModal(false)}
        />
      ) : null}
    </>
  );
};

export default PortiereTab;
