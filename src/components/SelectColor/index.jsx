import React from 'react';
import styled from 'styled-components';
import { grey, passion, BP_2 } from '../../config';

const Wrap = styled.div`
  margin-bottom: 80px;
  ${BP_2} {
    margin-bottom: 30px;
  }
`;

const BlocksWrap = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);;
  column-gap: 10px;
  row-gap: 10px;
  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(5, 1fr);;
  }
  @media only screen and (max-width: 980px) {
    grid-template-columns: repeat(4, 1fr);;
  }
  @media only screen and (max-width: 770px) {
    grid-template-columns: repeat(3, 1fr);;
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 6px;
    row-gap: 6px;
  }
`;

const Selected = styled.div`
  font-size: 16px;
  font-style: italic;
  font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
  color: ${grey};
`;

const ColorBlock = styled.div`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 2px solid #ffffff;
  background-size: cover;
  background-position: center;
  &.active {
    border: 2px solid ${passion};
  }
  &:after {
    content: "";
    display: block;
    padding: 50%;
  }
  &:hover {
    border: 2px solid ${passion};
  }
  ${({ showTitle }) => (showTitle ? `
    &:before {
      content: '${showTitle}';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-style: italic;
      font-family: 'Playfair Display';
    }
  ` : '')}
`;

const SelectColor = ({ options, select, value, showTitle, keyName, title }) => (
  <Wrap>
    <BlocksWrap>
      {options && options.map(item => (
        <ColorBlock
          className={item[keyName || 'title'] === value ? 'active' : ''}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
          onClick={() => select(item[keyName || 'title'])}
          showTitle={showTitle ? item[keyName || 'title'] : ''}
        />
      ))}
    </BlocksWrap>
    {value ? (
      <Selected>
        Вы выбрали: {title || value}
      </Selected>
    ) : ''}
  </Wrap>
);

export default SelectColor;
