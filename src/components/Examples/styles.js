import styled from 'styled-components';
import { passion } from 'config';

export const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 160px;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  transition: all 0.2s linear;
  width: 100%;
  height: 200px;
  background-size: cover;
`;

export const Lupa = styled.svg`
  transition: all 0.2s linear; 
  position: absolute;
  top: 20px;
  right: 10px;
  fill: ${passion};
  width: 32px;
  height: 32px;
  opacity: 0;
`;

export const Block = styled.div`
  position: relative;
  width: 31%;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #fdfaf7;
  margin-bottom: 40px;
  cursor: pointer;
  &:hover ${Image} {
    opacity: 0.5;
  }
  &:hover ${Lupa} {
    opacity: 1;
    top: 10px;
  }
`;

export const Info = styled.div`
  padding: 20px;
  font-size: 16px;
`;

export const Head = styled.h3`
  font-weight: bold;
  display: block;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  margin-bottom: 15px;
`;

export const Period = styled.div`
  font-family: 'Playfair Display';
  font-style: italic;
  color: ${passion};
`;

export const Days = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
