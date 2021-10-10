import React from 'react';
import styled from 'styled-components';
import { grey, passion, BP_ipad, BP_2 } from '../../config';

const Wrap = styled.div`
  margin-bottom: 80px;
  ${BP_2} {
    margin-bottom: 30px;
  }
`;

const BlocksWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  ${BP_2} {
    justify-content: space-between;
  }
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
  ${BP_ipad} {
    width: 158px;
    height: 158px;
  }
  ${BP_2} {
    margin: 5px;
  }
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
