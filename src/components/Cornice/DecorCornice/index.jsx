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

import { сolors, factSheet, corniceTypes, diametersList, tipsList, decorPrices } from './data';

const factNamesMap = factSheet.reduce((res, i) => {
  res[i.value] = i.title;
  return res;
}, {});

const getCornicePrice = (size, type, diameter, fact) => {
  if (!size || !type || !diameter || !fact) return 0;
  const k = Math.ceil(size / 0.2);
  const estSize = Math.round(k * 2) / 10;
  const pricesMap = decorPrices[type] && decorPrices[type][diameter]
    ? decorPrices[type][diameter][fact]
    : null;
  return pricesMap ? pricesMap.get(estSize) : 0;
};

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

  const corniceCost = getCornicePrice(params.size, params.type, params.diameter, params.fact);
  const tipPrice = useMemo(
    () => tipsList.find(item => item.title === params.tip)?.price,
    [params.tip],
  );
  const amount = corniceCost + tipPrice * 2;

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

  useEffect(() => setParams({ ...params, diameter: params.type === 'double' ? 'r16/16' : 'r16' }), [params.type]);

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
            keyName="value"
            title={factNamesMap[params.fact]}
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
                placeholder="Укажите ширину в метрах (макс. 4 метра)"
                max={4}
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
            <div>Цена карниза: {corniceCost}₽</div>
            <div>Стоимость наконечника: {tipPrice} * 2 = {tipPrice * 2}₽</div>
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
