import React from 'react';
import styled from 'styled-components';
import { grey, passion } from '../../config';

const Wrap = styled.div`
  margin-bottom: 80px;
`;

const BlocksWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Selected = styled.div`
  font-size: 16px;
  font-style: italic;
  font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
  color: ${grey};
`;

const ColorBlock = styled.div`
  position: relative;
  cursor: pointer;
  width: 170px;
  height: 170px;
  border: 2px solid #ffffff;
  margin-right: 10px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: center;
  &.active {
    border: 2px solid ${passion};
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

const SelectColor = ({ options, select, value, showTitle }) => (
  <Wrap>
    <BlocksWrap>
      {options && options.map(item => (
        <ColorBlock
          className={item.title === value ? 'active' : ''}
          key={item.id}
          style={{ backgroundImage: `url(${item.img})` }}
          onClick={() => select(item.title)}
          showTitle={showTitle ? item.title : ''}
        />
      ))}
    </BlocksWrap>
    {value ? (
      <Selected>
        Вы выбрали: {value}
      </Selected>
    ) : ''}
  </Wrap>
);

export default SelectColor;
