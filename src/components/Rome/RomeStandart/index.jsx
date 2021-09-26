import React, { useState } from 'react';
import {
  Head,
  SelectBase,
  Fabric,
  Cost,
  Section,
  Result,
  Calculation,
  Button,
} from 'components/Shared';
import SelectColor from 'components/SelectColor';
import Radio from 'components/Radio';
import Checkbox from 'components/Checkbox';
import OrderModal from 'components/OrderModal';
import { romeOptions } from 'config';

import { standartSizes, corniceTypes } from './data';
import { blackoutColors } from '../../../colors';

const AVAILABLE_COLORS = blackoutColors.slice(0, 4);
const BLACKOUT = romeOptions.find(item => item.id === 'romeBlackout');

const RomeStandart = () => {
  const [showOrderModal, toggleModal] = useState(false);

  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [cornice, setCornice] = useState(false);
  const [corniceType, setCorniceType] = useState('Стандартный');

  const selected = standartSizes.find(i => i.value === size) || {};

  const corniceCost = corniceType === 'Люкс' ? selected.corniceLux : selected.corniceStandart;
  const amount = selected.price + (cornice && corniceType ? corniceCost : 0);

  const summary = `Штора римская cтандарт: ${BLACKOUT.title},
    размеры ${selected.title}, цвет ${color}${cornice ? `, карниз ${corniceType}` : ''}.`;

  return (
    <>
      <Head>
        1. Выберите <i>категорию</i>
      </Head>
      <SelectBase>
        <Fabric url={BLACKOUT.image} active>
          {BLACKOUT.title}
          <Cost>Стоимость<br />{BLACKOUT.price} руб/погонный метр</Cost>
        </Fabric>
      </SelectBase>
      <Head>
        2. Выберите <i>цвет</i>
      </Head>
      <SelectColor options={AVAILABLE_COLORS} select={setColor} value={color} />
      {color ? (
        <Section>
          <Head>
            3. Выберите <i>размер</i>
          </Head>
          <Radio
            options={standartSizes}
            onChange={setSize}
            value={size}
          />
        </Section>
      ) : null}
      {size ? (
        <>
          <Head>
            4. Выберите <i>карниз</i>
          </Head>
          <Checkbox
            onChange={(e) => setCornice(+e.target.checked)}
            checked={cornice}
            title="Добавить карниз"
          />
          {cornice ? (
            <SelectColor
              options={corniceTypes}
              select={setCorniceType}
              value={corniceType}
              showTitle
            />
          ) : null}
        </>
      ) : null}
      {size ? (
        <Result>
          <Calculation>
            Из чего складывается итоговая стоимость:
            <div>
              Стандартная римская штора ({selected.title}): {selected.price}₽
              <br />
              {cornice && corniceType ? `+ Карниз ${corniceType}` : null}
              {/* <br />
              {wallPrice ? `Крепление на стену: ${ceilFactor} * 250 = ${wallPrice}₽` : ''} */}
            </div>
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

export default RomeStandart;
