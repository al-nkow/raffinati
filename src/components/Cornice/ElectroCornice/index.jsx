import React, { useState, useMemo } from 'react';
import {
  Head,
  Label,
  FormGroup,
  Section,
  Result,
  Calculation,
  Button,
  SelectBase,
  Fabric,
} from 'components/Shared';
import Radio from 'components/Radio';
import Input from 'components/Input';
import OrderModal from 'components/OrderModal';
import { getTitle } from 'utils';
import { corniceTypes, countries, pultList } from './data';

const getCornicePrice = (price, mapPrices) => {
  if (!price || !mapPrices) return 0;
  const rounded = Math.ceil(price * 2) / 2;
  return mapPrices.get(rounded);
};

const ElectroCornice = ({ data }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [params, setParams] = useState({
    type: '',
    country: '',
    size: '',
  });

  const prices = useMemo(
    () => corniceTypes.find(item => params.type === item.id)?.prices,
    [params.type],
  );
  const pricesMap = prices ? prices[params.country]?.cornice : null;
  const pultPrices = prices ? prices[params.country]?.pult : null;
  const pultCost = prices ? pultPrices?.[params.pult] : null;

  const corniceCost = useMemo(
    () => getCornicePrice(params.size, pricesMap),
    [params.size, pricesMap],
  );

  const amount = corniceCost + (pultCost || 0);

  const pricesMapKeys = pricesMap ? [...pricesMap.keys()] : null;
  const MAX_VALUE = pricesMapKeys ? Math.max(...pricesMapKeys) : null;

  const summary = `Карниз: ${data.title.toLocaleLowerCase()},
    ${params.type && getTitle(corniceTypes, params.type).toLocaleLowerCase()},
    длина ${params.size}м,
    производство: ${params.country && getTitle(countries, params.country)},
    пульт: ${params.pult && getTitle(pultList, params.pult).toLocaleLowerCase()}`;

  const pultOptions = pultPrices ? pultList.filter(item => pultPrices[item.value]) : [];

  return (
    <>
      <Head>
        2. Выберите <i>тип</i>
      </Head>
      <SelectBase>
        {corniceTypes.map((item) => (
          <Fabric
            key={item.id}
            url={item.image}
            onClick={() => {
              setParams({ ...params, type: item.id });
            }}
            active={params.type === item.id}
          >
            <span>{item.title}</span>
          </Fabric>
        ))}
        <Fabric cap />
      </SelectBase>
      {params.type ? (
        <Section>
          <Head>
            3. Выберите <i>страну изготовления</i>
          </Head>
          <Radio
            options={countries}
            onChange={country => setParams({ ...params, country })}
            value={params.country}
          />
        </Section>
      ) : null}
      {params.country ? (
        <Section>
          <Head>
            4. Укажите <i>размеры</i>
          </Head>
          <FormGroup>
            <Label>Длина карниза</Label>
            <br />
            <Input
              max={MAX_VALUE}
              changed={size => setParams({ ...params, size })}
              placeholder="Укажите длину в метрах"
              value={params.size}
            />
          </FormGroup>
        </Section>
      ) : null}
      {params.size ? (
        <Section>
          <Head>
            3. Выберите <i>пульт</i>
          </Head>
          <Radio
            options={pultOptions}
            onChange={pult => setParams({ ...params, pult })}
            value={params.pult}
          />
        </Section>
      ) : null}
      {params.size && pultCost ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>
              Цена карниза: {corniceCost}₽
              <br />
              Стоимость пульта: {pultCost}₽
            </div>
          </Calculation>
          <div className="cost">
            <div>Итого: {amount}₽</div>
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

export default ElectroCornice;
