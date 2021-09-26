import React, { useState, useEffect, useMemo } from 'react';
import {
  Head,
  Label,
  FormGroup,
  Section,
  Result,
  Calculation,
  Button,
} from 'components/Shared';
import SelectColor from 'components/SelectColor';
import Radio from 'components/Radio';
import Input from 'components/Input';
import OrderModal from 'components/OrderModal';
import { getTitle } from 'utils';

import { сolors, factSheet, corniceTypes, diametersList, tipsList } from './data';

const DecorCornice = ({ data }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [params, setParams] = useState({
    color: '',
    fact: '',
    type: 'single',
    diameter: '16',
    size: null,
    tip: '',
  });

  const corniceCost = params.size * data.price;

  const tipPrice = useMemo(
    () => tipsList.find(item => item.title === params.tip)?.price,
    [params.tip],
  );

  const summary = `Карниз: ${data.title.toLocaleLowerCase()},
    длина ${params.size}м,
    ${params.type && getTitle(corniceTypes, params.type).toLocaleLowerCase()},
    диаметр ${params.diameter && getTitle(diametersList, params.diameter)},
    цвет: ${params.color && params.color.toLocaleLowerCase()}, 
    фактура: ${params.fact && params.fact.toLocaleLowerCase()},
    наконечник: ${params.tip && params.tip.toLocaleLowerCase()}.`;

  const filteredDiametersList = useMemo(() => diametersList.filter(item => {
    const isDoubleValue = item.value.includes('/');
    return params.type === 'double' ? isDoubleValue : !isDoubleValue;
  }), [params.type]);

  const amount = corniceCost + tipPrice;

  useEffect(() => setParams({ ...params, diameter: params.type === 'double' ? '16/16' : '16' }), [params.type]);

  return (
    <>
      <Head>
        2. Выберите <i>цвет</i>
      </Head>
      <SelectColor
        options={сolors}
        select={color => setParams({ ...params, color })}
        value={params.color}
      />
      {params.color ? (
        <>
          <Head>
            3. Выберите <i>фактуру</i>
          </Head>
          <SelectColor
            options={factSheet}
            select={fact => setParams({ ...params, fact })}
            value={params.fact}
          />
        </>
      ) : null}
      {params.fact ? (
        <>
          <Section>
            <Head>
              4. Укажите <i>размеры</i>
            </Head>
            <FormGroup>
              <Radio
                label="Тип карниза:"
                options={corniceTypes}
                onChange={type => setParams({ ...params, type })}
                value={params.type}
              />
            </FormGroup>
            <FormGroup>
              <Radio
                label="Диаметр карниза:"
                options={filteredDiametersList}
                onChange={diameter => setParams({ ...params, diameter })}
                value={params.diameter}
              />
            </FormGroup>
            <FormGroup>
              <Label>Длина карниза (ширина шторы)</Label>
              <br />
              <Input
                changed={size => setParams({ ...params, size })}
                placeholder="Укажите ширину в метрах"
              />
            </FormGroup>
          </Section>
        </>
      ) : null}
      {params.size ? (
        <>
          <Head>
            5. Выберите <i>наконечник</i>
          </Head>
          <SelectColor
            options={tipsList}
            select={tip => setParams({ ...params, tip })}
            value={params.tip}
          />
        </>
      ) : null}
      {params.size && params.tip ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>Цена карниза: {params.size}м * {data.price}₽ = {corniceCost}₽</div>
            <div>Стоимость наконечника: {tipPrice}₽</div>
          </Calculation>
          <div>
            Итого: {amount}₽
            <br />
            <Button onClick={() => toggleModal(true)}>Оформить заказ</Button>
          </div>
        </Result>
      ) : null}
      {showOrderModal ? (
        <OrderModal
          details={summary}
          price={amount}
          close={() => toggleModal(false)}
        />
      ) : null}
    </>
  );
};

export default DecorCornice;
