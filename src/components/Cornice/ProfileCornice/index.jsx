import React, { useState, useMemo } from 'react';
import {
  Head,
  Label,
  FormGroup,
  Section,
  Result,
  Calculation,
  Button,
} from 'components/Shared';
import Radio from 'components/Radio';
import Input from 'components/Input';
import OrderModal from 'components/OrderModal';
import { getTitle } from 'utils';
import { corniceTypes, mountList } from './data';

const ProfileCornice = ({ data }) => {
  const [showOrderModal, toggleModal] = useState(false);
  const [params, setParams] = useState({
    type: 'single',
    mount: 'ceiling',
  });

  const rowFactor = useMemo(() => corniceTypes.find(i => i.value === params.type).k, [params.type]);

  const ceilFactor = params.size / 0.5;
  const wallPrice = params.mount === 'wall' ? ceilFactor * 250 : 0;
  const corniceCost = params.size * data.price * rowFactor;
  const amount = corniceCost + wallPrice;

  const summary = `Карниз: ${data.title.toLocaleLowerCase()},
    длина ${params.size}м,
    ${params.type && getTitle(corniceTypes, params.type).toLocaleLowerCase()},
    крепление ${params.mount && getTitle(mountList, params.mount).toLocaleLowerCase()}`;

  return (
    <>
      <Section>
        <Head>
          2. Укажите <i>размеры</i>
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
          <Label>Длина карниза</Label>
          <br />
          <Input
            changed={size => setParams({ ...params, size })}
            placeholder="Укажите длину в метрах"
          />
        </FormGroup>
      </Section>
      {params.size ? (
        <Section>
          <Head>
            3. Выберите <i>крепление</i>
          </Head>
          <FormGroup>
            <Radio
              options={mountList}
              onChange={mount => setParams({ ...params, mount })}
              value={params.mount}
            />
          </FormGroup>
        </Section>
      ) : null}
      {params.size ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>
              Цена карниза: {params.size}м * {data.price}₽ {rowFactor > 1 ? `* ${rowFactor}` : ''} = {corniceCost}₽
              <br />
              {wallPrice ? `Крепление на стену: ${ceilFactor} * 250 = ${wallPrice}₽` : ''}
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

export default ProfileCornice;
