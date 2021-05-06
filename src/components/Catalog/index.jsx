import React from 'react';
import styled from 'styled-components';
import { contentWidth, romeOptions, tulleOptions, portiereOptions, corniceOptions } from '../../config';
import Block from './Block';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
`;

const Catalog = () => (
  <Wrap id="catalog">
    <Block
      id="rome"
      title="Римская<br />штора"
      description="Отличное дизайнерское решение для Вашего интерьера. Это тканевое полотно, которое при открытии создает волнообразные складки"
      options={romeOptions}
    />
    <Block
      id="tulle"
      swap
      title="Тюль"
      options={tulleOptions}
    />
    <Block
      id="portiere"
      title="Партьеры"
      description="Плотные портьеры хорошо держат форму, драпируются мягкими складками и смотрятся изыскано в любом интерьере"
      options={portiereOptions}
    />
    <Block
      id="cornice"
      swap
      title="Карнизы"
      options={corniceOptions}
    />
  </Wrap>
);

export default Catalog;
