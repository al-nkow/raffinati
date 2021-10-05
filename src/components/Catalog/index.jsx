import React from 'react';
import { Wrap } from 'components/Shared';
import { romeOptions, tulleOptions, portiereOptions, corniceOptions } from '../../config';
import Block from './Block';

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
      title="Портьеры"
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
