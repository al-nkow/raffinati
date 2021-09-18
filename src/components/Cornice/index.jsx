import React, { useState } from 'react';
import DecorCornice from './DecorCornice';
import ProfileCornice from './ProfileCornice';
import ElectroCornice from './ElectroCornice';
import {
  SelectBase,
  Fabric,
  Cost,
  Head,
} from '../Shared';
import { corniceOptions } from '../../config';

const corniceData = corniceOptions.reduce((res, i) => {
  res[i.id] = i;
  return res;
}, {});

const PortiereTab = ({ option }) => {
  const [category, setCategory] = useState(option || null);

  const [values, setValues] = useState({
    width: null,
    corniceBase: option ? corniceOptions.find(i => i.id === option).price : null,
  });

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
      </SelectBase>
      {category === 'cornice1' && <ProfileCornice data={corniceData.cornice1} />}
      {category === 'cornice2' && <DecorCornice data={corniceData.cornice2} />}
      {category === 'cornice3' && <ElectroCornice data={corniceData.cornice3} />}
    </>
  );
};

export default PortiereTab;
