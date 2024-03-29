import React from 'react';
import styled from 'styled-components';
import { Wrap as MainWrap, Title } from 'components/Shared';
import AccBlock from 'components/AccBlock';
import { grey, light, BP_21 } from '../../config';

import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';

const Wrap = styled.div`
  padding: 200px 0;
  background: ${grey};
  ${BP_21} {
    padding: 100px 0;
  }
`;

const Last = styled.div`
  border-bottom: 2px solid ${light};
`;

const Partners = () => (
  <Wrap>
    <MainWrap>
      <Title id="partners" white>
        Сотрудничество
        <br />
        с дизайнерами
      </Title>
      <AccBlock title="Присылайте нам свой проект" icon={icon1} light blank />
      <AccBlock title="Вместе мы подберём ткань" icon={icon2} light blank />
      <AccBlock title="Сделаем расчёт стоимости" icon={icon3} light blank />
      <AccBlock title="Заключаем договор" icon={icon4} light blank />
      <AccBlock title="Согласовываем с клиентом" icon={icon5} light blank />
      <Last data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
    </MainWrap>
  </Wrap>
);

export default Partners;
