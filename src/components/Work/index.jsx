/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import AccBlock from '../AccBlock';
import Team from '../Team';
// import Review from '../Review';
import Contacts from '../Contacts';
import { contentWidth, text, red } from '../../config';

import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
// import icon6 from './images/icon6.svg';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
  border-bottom: 2px solid ${text};
  margin-bottom: 213px;
`;

const SomeCmp = styled.div`
  padding: 40px;
  opacity: 0.8;
`;

const Title = styled.h2`
  margin-bottom: 92px;
  text-align: center;
  font-size: 80px;
  line-height: 77px;
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
`;

const Ul = styled.ul`
  padding: 40px 40px 40px 80px;
  font-size: 18px;
  line-height: 26px;
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 10px;
      height: 10px;
      background: ${red};
      border-radius: 50%;
    }
  }
`;

const Work = ({ scrollTo }) => {
  return (
    <Wrap>
      <Title>
        Как мы работаем
      </Title>
      <AccBlock title="Онлайн-заказ" icon={icon1}>
        <Ul>
          <li>Выберите шторы подходящие по дизайну</li>
          <li>Определитесь с материалом</li>
          <li>Добавьте необходимый Вам карниз</li>
          <li>Оформите заказ</li>
          <li>Напишите нам в любом из удобных для Вас мессенджеров или позвоните по телефону</li>
        </Ul>
      </AccBlock>
      <AccBlock title="Онлайн-консультация" icon={icon2}>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
      <AccBlock id="contacts" scrollTo={scrollTo} title="Салоны в Москве и С-Петербурге" icon={icon3}>
        <Contacts />
      </AccBlock>
      <AccBlock title="Выезд в пределах города или за город" icon={icon4}>
        <SomeCmp>Раздел в процессе наполнения</SomeCmp>
      </AccBlock>
      <AccBlock title="Наша команда" icon={icon5}>
        <Team />
      </AccBlock>
      {/* <AccBlock title="Отзывы" icon={icon6}>
        <Review />
      </AccBlock> */}
    </Wrap>
  );
};

export default Work;
