import React, { useState } from 'react';
import Radio from 'components/Radio';
import RomeOrder from './RomeOrder';
import RomeStandart from './RomeStandart';

export const typesList = [
  {
    id: 1,
    value: 'order',
    title: 'Под заказ',
  }, {
    id: 2,
    value: 'standart',
    title: 'Стандарт',
  },
];

const Rome = ({ option }) => {
  const [type, setType] = useState('order');

  return (
    <div>
      <Radio
        options={typesList}
        onChange={setType}
        value={type}
        large
      />
      {type === 'order' ? <RomeOrder option={option} /> : null}
      {type === 'standart' ? <RomeStandart /> : null}
    </div>
  );
};

export default Rome;
