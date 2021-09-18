import React, { useState } from 'react';
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

const ElectroCornice = ({ data }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [params, setParams] = useState({
    type: '',
    country: '',
    size: '',
  });

  const corniceCost = params.size * data.price;

  const summary = `Карниз: ${data.title.toLocaleLowerCase()},
    ${params.type && getTitle(corniceTypes, params.type).toLocaleLowerCase()},
    длина ${params.size}м,
    производство: ${params.country && getTitle(countries, params.country)},
    пульт: ${params.pult && getTitle(pultList, params.pult).toLocaleLowerCase()}`;

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
            {item.title}
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
              changed={size => setParams({ ...params, size })}
              placeholder="Укажите длину в метрах"
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
            options={pultList}
            onChange={pult => setParams({ ...params, pult })}
            value={params.pult}
          />
        </Section>
      ) : null}
      {params.size && params.pult ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>
              Цена карниза: {params.size}м * {data.price}₽ = {corniceCost}₽
            </div>
          </Calculation>
          <div>
            Итого: {corniceCost}₽
            <br />
            <Button onClick={() => toggleModal(true)}>Оформить заказ</Button>
          </div>
        </Result>
      ) : null}
      {showOrderModal ? (
        <OrderModal
          details={summary}
          price={corniceCost}
          close={() => toggleModal(false)}
        />
      ) : null}
    </>
  );
};

export default ElectroCornice;
