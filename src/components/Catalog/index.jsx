import React from 'react';
import styled from 'styled-components';
import { contentWidth } from '../../config';
import blockImg from './images/blockImg.png';

import Block from './Block';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
`;

const curtainOpts = [
  {
    title: 'Тюль',
    image: blockImg,
  },
  {
    title: 'Блэкаут',
    image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  },
  {
    title: 'Ткань',
    image: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
  },
];

const tulleOpts = [
  {
    title: 'Вуаль',
    image: blockImg,
  },
  {
    title: 'Лёгкие',
    image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  },
];

const portOpts = [
  {
    title: 'Вуаль',
    image: blockImg,
  },
  {
    title: 'Лёгкие',
    image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  },
];

const corniceOpts = [
  {
    title: 'Вариант 1',
    image: blockImg,
  },
  {
    title: 'Вариант 2',
    image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  },
];

const Catalog = () => (
  <Wrap id="catalog">
    <Block
      title="Римская<br /><i>штора</i>"
      description="Надежная, функциональная<br />и простая в использовании<br />римская штора."
      options={curtainOpts}
      open="rome"
    />
    <Block
      swap
      title="Тюль"
      description="Надежная, функциональная<br />и простая в использовании<br />тюль."
      options={tulleOpts}
      open="tulle"
    />
    <Block
      title="Партьеры"
      description="Надежная, функциональная<br />и простая в использовании<br />партьеры."
      options={portOpts}
      open="portiere"
    />
    <Block
      swap
      title="Карнизы"
      description="Надежная, функциональная<br />и простая в использовании<br />карнизы."
      options={corniceOpts}
      open="cornice"
    />
  </Wrap>
);

export default Catalog;
