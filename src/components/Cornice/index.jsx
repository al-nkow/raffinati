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
      <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
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
              <span>{item.title}</span>
              <Cost transp={!item.price}>Стоимость<br />{item.price} руб/метр</Cost>
            </Fabric>
          ))}
        </SelectBase>
      </div>
      {category === 'cornice1' && <ProfileCornice data={corniceData.cornice1} />}
      {category === 'cornice2' && <DecorCornice data={corniceData.cornice2} />}
      {category === 'cornice3' && <ElectroCornice data={corniceData.cornice3} />}
    </>
  );
};

export default PortiereTab;
