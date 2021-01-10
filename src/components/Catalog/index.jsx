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
      title="Римская<br /><i>штора</i>"
      description="Надежная, функциональная<br />и простая в использовании<br />римская штора."
      options={romeOptions}
    />
    <Block
      id="tulle"
      swap
      title="Тюль"
      description="Надежная, функциональная<br />и простая в использовании<br />тюль."
      options={tulleOptions}
    />
    <Block
      id="portiere"
      title="Партьеры"
      description="Надежная, функциональная<br />и простая в использовании<br />партьеры."
      options={portiereOptions}
    />
    <Block
      id="cornice"
      swap
      title="Карнизы"
      description="Надежная, функциональная<br />и простая в использовании<br />карнизы."
      options={corniceOptions}
    />
  </Wrap>
);

export default Catalog;
