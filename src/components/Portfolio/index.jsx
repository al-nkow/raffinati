/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrap } from 'components/Shared';
import Back from 'components/Back';
import Slider from 'components/Slider';
import { Title, Head, Section } from 'components/Shared';

import gb1 from './images/gb1.jpeg';
import gb2 from './images/gb2.jpeg';
import gb3 from './images/gb3.jpeg';
import gb4 from './images/gb4.jpeg';
import gb5 from './images/gb5.jpeg';

import che1 from './images/che1.jpeg';
import che2 from './images/che2.jpeg';
import che3 from './images/che3.jpeg';

import mg1 from './images/mg1.jpeg';
import mg2 from './images/mg2.jpeg';
import mg3 from './images/mg3.jpeg';
import mg4 from './images/mg4.jpeg';
import mg5 from './images/mg5.jpeg';
import mg6 from './images/mg6.jpeg';

const pr1 = [gb1, gb2, gb3, gb4, gb5];
const pr2 = [che1, che2, che3];
const pr3 = [mg1, mg2, mg3, mg4, mg5, mg6];

const Inner = styled.div`
  height: 500px;
`;

const Images = styled.div`
  text-align: center;
  /* display: flex; */
  /* justify-content: space-around; */
  margin-bottom: 40px;
  /* flex-wrap: nowrap; */
`;

const Image = styled.img`
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  height: 220px;
  &:hover {
    opacity: 0.8;
  }
`;

const Description = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 38px;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-style: italic;
`;

const defaultData = {
  images: null,
  activeIndex: 0,
};

const Portfolio = () => {
  const [data, setData] = useState(defaultData);

  const slide = (ind) => setData({ ...data, activeIndex: ind });
  const closeSlider = () => setData(defaultData);

  return (
    <Wrap>
      {data.images && <Slider images={data.images} activeIndex={data.activeIndex} slide={slide} close={closeSlider} />}
      <Back />
      <Title>Примеры наших работ</Title>
      <Section data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Head>1. Проект <i>Жемчужный берег</i> со студией дизайна интерьера <i>2design</i></Head>
        <Images>
          {pr1.map((item, index) => (
            <Image onClick={() => setData({ images: pr1, activeIndex: index })} key={index} src={item} />
          ))}
        </Images>
        <Description>
          Наш первый проект со студией дизайна 2design запомнился динамичным сочетанием алюминиевых жалюзи 
          на лоджии и тюлем в гостиной, которые вместе создают концептуальную игру света. Жемчужный Берег – 
          жилой комплекс на юго-западе Санкт-Петербурга, находится в новом и разительно отличающемся от 
          остальных районов города.  Поэтому нам вместе с ведущим дизайнером Екатериной, хотелось подчеркнуть 
          его неординарность. Портьерная ткань была выбрана с интересной текстурой, крупная рогожка-блэкаут со 
          стильным ненавязчивым блеском. Солнце, достаточно активное во второй половине дня на этой стороне, 
          регулируется сразу двумя способами: при помощи жалюзи и плотного блэкаута, за счет чего обеспечивается 
          комфорт, как в спальной зоне, так и в кухне-гостиной.
        </Description>
      </Section>
      <Section data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Head>2. Проект на <i>Чернышевской</i></Head>
        <Images>
          {pr2.map((item, index) => (
            <Image onClick={() => setData({ images: pr2, activeIndex: index })} key={index} src={item} />
          ))}
        </Images>
        <Description>
          Для этого проекта мы задействовали нашего визуализатора, который помог нам показать клиентке 
          предполагаемый результат! Процесс согласования был достаточно длительным и тернистым: поставщик, у 
          которого мы заказали ткань для римских штор, прислал вместо серой – молочную. А ткань на портьеры в 
          последний момент вывели с производства и пришлось в срочном порядке выбирать новую. Несмотря на все 
          неурядицы, результат превзошел все наши ожидания. Выбранные заново портьеры рогожка-блэкаут отлично 
          вписались в концепцию гостиной-кинотеатра, в которой уютно проводят время заказчики с друзьями и 
          близкими. А светлый тюль обеспечил северную сторону гостиной большим количеством света, чем мог бы 
          серый. Так стечение обстоятельств, привело нас к лучшему результату.
        </Description>
      </Section>
      <Section data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Head>3. Проект <i>Малые Горки</i></Head>
        <Images>
          {pr3.map((item, index) => (
            <Image onClick={() => setData({ images: pr3, activeIndex: index })} key={index} src={item} />
          ))}
        </Images>
        <Description>
          Прошлой осенью нам повезло оформлять текстилем чудесный дом, который находится в поселке Малые Горки. 
          Дом спроектирован таким образом, что все спальни находятся на западной стороне, а гостиная со вторым 
          светом на восточной. Лучи солнца освещают зону гостиной, которая является и столовой для домочадцев, 
          позволяя наслаждаться утренним солнцем, в то время как спальни защищены от раннего пробуждения. 
          Второй свет в гостиной оформлен плотными коричневыми портьерами и молочной нежной вуалью. Для 
          функциональности штор был установлен карниз с электроприводом, чтобы у хозяев была возможность 
          закрыть портьеры и превратить помещение в домашний кинотеатр. Плотные шторы в спальнях поддерживают 
          общий интерьер дома и надежно сохраняет сон.
        </Description>
      </Section>
    </Wrap>
  );
};

export default Portfolio;
