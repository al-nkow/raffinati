import React from 'react';
import styled from 'styled-components';
import AccBlock from '../AccBlock';
import { contentWidth, grey, light } from '../../config';

import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';

const Wrap = styled.div`
  padding: 200px 0;
  background: ${grey};
`;

const Inner = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
  border-bottom: 2px solid ${light};
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 92px;
  text-align: center;
  font-size: 80px;
  line-height: 88px;
  font-family: 'Playfair Display';
  font-weight: 400;
  i {
    font-style: italic;
  }
`;

const SomeCmp = styled.div`
  padding: 40px;
  opacity: 0.8;
  color: ${light};
`;

const Partners = () => (
  <Wrap>
    <Inner>
      <Title id="partners">
        Сотрудничество
        <br />
        <i>с дизайнерами</i>
      </Title>
      <AccBlock title="Присылайте нам свой проект" icon={icon1} light>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
      <AccBlock title="Вместе мы подберём ткань" icon={icon2} light>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
      <AccBlock title="Сделаем расчёт стоимости" icon={icon3} light>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
      <AccBlock title="Заключаем договор" icon={icon4} light>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
      <AccBlock title="Согласовываем с клиентом" icon={icon5} light>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
    </Inner>
  </Wrap>
);

export default Partners;
