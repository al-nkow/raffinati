import styled from 'styled-components';
import { passion, BP_1 } from 'config';

export const Blocks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 160px;
  ${BP_1} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 568px) {
    display: block;
    margin-bottom: 60px;
  }
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
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #fdfaf7;
  cursor: pointer;
  &:hover ${Image} {
    opacity: 0.5;
  }
  &:hover ${Lupa} {
    opacity: 1;
    top: 10px;
  }
  @media only screen and (max-width: 568px) {
    margin-bottom: 20px;
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
