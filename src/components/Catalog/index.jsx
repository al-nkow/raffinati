import React from 'react';
import styled from 'styled-components';
import { contentWidth } from '../../config';

import romeBlackout from './images/romeBlackout.png';
import romeTulle from './images/romeTulle.png';
import romeCloth from './images/romeCloth.png';
import tulleVeil from './images/tulleVeil.png';
import tulleCrepe from './images/tulleCrepe.png';
import tulleLinen from './images/tulleLinen.png';
import portiereBlackout from './images/portiereBlackout.png';
import portiereLight from './images/portiereLight.png';
import portiereVeil from './images/portiereVeil.png';
import cornice1 from './images/cornice1.png';
import cornice2 from './images/cornice2.png';

import Block from './Block';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
`;

const curtainOpts = [
  {
    title: 'Тюль',
    image: romeTulle,
  },
  {
    title: 'Блэкаут',
    image: romeBlackout,
  },
  {
    title: 'Ткань',
    image: romeCloth,
  },
];

const tulleOpts = [
  {
    title: 'Вуаль',
    image: tulleVeil,
  },
  {
    title: 'Креп',
    image: tulleCrepe,
  },
  {
    title: 'Лён',
    image: tulleLinen,
  },
];

const portOpts = [
  {
    title: 'Блэкаут',
    image: portiereBlackout,
  },
  {
    title: 'Лёгкие',
    image: portiereLight,
  },
  {
    title: 'Вуаль',
    image: portiereVeil,
  },
];

const corniceOpts = [
  {
    title: 'Вариант 1',
    image: cornice1,
  },
  {
    title: 'Вариант 2',
    image: cornice2,
  },
];

const Catalog = () => (
  <Wrap id="catalog">
    <Block
      id="rome"
      title="Римская<br /><i>штора</i>"
      description="Надежная, функциональная<br />и простая в использовании<br />римская штора."
      options={curtainOpts}
    />
    <Block
      id="tulle"
      swap
      title="Тюль"
      description="Надежная, функциональная<br />и простая в использовании<br />тюль."
      options={tulleOpts}
    />
    <Block
      id="portiere"
      title="Партьеры"
      description="Надежная, функциональная<br />и простая в использовании<br />партьеры."
      options={portOpts}
    />
    <Block
      id="cornice"
      swap
      title="Карнизы"
      description="Надежная, функциональная<br />и простая в использовании<br />карнизы."
      options={corniceOpts}
    />
  </Wrap>
);

export default Catalog;
