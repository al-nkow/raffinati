import React from 'react';
import { Wrap } from 'components/Shared';
import { romeOptions, tulleOptions, portiereOptions, corniceOptions } from '../../config';
import Block from './Block';

const Catalog = () => (
  <Wrap id="catalog">
    <div id="rome">
      <Block
        title="Римская<br />штора"
        description="Отличное дизайнерское решение для Вашего интерьера. Это тканевое полотно, которое при открытии создает волнообразные складки"
        options={romeOptions}
      />
    </div>
    <div id="tulle">
      <Block
        swap
        title="Тюль"
        options={tulleOptions}
      />
    </div>
    <div id="portiere">
      <Block
        title="Портьеры"
        description="Плотные портьеры хорошо держат форму, драпируются мягкими складками и смотрятся изыскано в любом интерьере"
        options={portiereOptions}
      />
    </div>
    <div id="cornice">
      <Block
        swap
        title="Карнизы"
        options={corniceOptions}
      />
    </div>
  </Wrap>
);

export default Catalog;
