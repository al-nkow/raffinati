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
  font-style: italic;
`;

const Partners = () => (
  <Wrap>
    <Inner>
      <Title id="partners">
        Сотрудничество
        <br />
        с дизайнерами
      </Title>
      <AccBlock title="Присылайте нам свой проект" icon={icon1} light blank />
      <AccBlock title="Вместе мы подберём ткань" icon={icon2} light blank />
      <AccBlock title="Сделаем расчёт стоимости" icon={icon3} light blank />
      <AccBlock title="Заключаем договор" icon={icon4} light blank />
      <AccBlock title="Согласовываем с клиентом" icon={icon5} light blank />
    </Inner>
  </Wrap>
);

export default Partners;
