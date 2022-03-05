import styled from 'styled-components';
import { passion, grey, light, contentWidth, BP_0, BP_ipad, BP_2, BP_21 } from '../../config';

export const Wrap = styled.div`
  max-width: ${contentWidth}px;
  width: 95%;
  margin: 0 auto;
`;

export const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  display: inline-flex;
  margin-right: 10px;
  align-items: center;
  margin-right: 20px;
  ${({ large }) => (large ? `
    font-size: 20px;
  ` : '')}
  ${BP_2} {
    margin-bottom: 20px;
  }
`;

export const RadioBtn = styled.div`
  margin-right: 10px;
  width: ${({ large }) => (large ? '36px' : '20px')};
  height: ${({ large }) => (large ? '36px' : '20px')};
  border-radius: 50%;
  position: relative;
  border: 1px solid ${grey};
  input {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
  ${({ checked }) => (checked ? `
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      background: ${passion};
      border-radius: 50%;
      opacity: 90%;
    }
  ` : '')}
`;

export const Head = styled.h2`
  margin-bottom: 54px;
  text-align: center;
  font-size: 52px;
  line-height: 54px;
  font-family: 'Playfair Display';
  font-weight: 400;
  i {
    font-style: italic;
    color: ${passion};
  }
  ${BP_2} {
    font-size: 44px;
    line-height: 46px;
  }
`;

export const SelectBase = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
  min-width: 120px;
  flex-wrap: wrap;
`;

export const Fabric = styled.div`
  cursor: pointer;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-size: 40px;
  line-height: 26px;
  position: relative;
  width: 30%;
  height: 369px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
  span {
    box-sizing: border-box;
    word-wrap: break-word;
    max-width: 100%;
    text-align: center;
  }
  ${({ active }) => (active ? `
    color: #ffffff;
    border-color: ${passion};
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ` : '')}
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${({ url }) => url}) center;
    background-size: cover;
    opacity: ${({ active }) => (active ? '1' : '0.4')};
    z-index: -1;
  }
  &:hover {
    border-color: ${passion};
  }
  ${({ cap }) => (cap ? `
    cursor: default;
    opacity: 0;
    ${BP_2} {
      display: none;
    }
  ` : '')}
  ${BP_0} {
    width: 32%;
    font-size: 30px;
    height: 300px;
  }
  ${BP_2} {
    width: 48%;
    height: 200px;
    margin-bottom: 7px;
    span {
      padding: 0 5px;
    }
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Result = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 40px;
  font-size: 44px;
  text-align: right;
  & > div {
    flex: 1;
  }
  .cost {
    button {
      margin-top: 25px;
    }
  }
  ${BP_ipad} {
    flex-direction: column;
    .cost {
      margin-top: 40px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      button {
        margin-top: -14px;
      }
    }
  }
  ${BP_2} {
    padding-top: 20px;
    .cost {
      text-align: left;
      display: block;
      font-size: 34px;
      button {
        margin-top: 34px;
      }
    }
  }
`;

export const Cost = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-style: italic;
  font-family: 'Playfair Display';
  font-weight: 400;
  text-align: center;
  line-height: 20px;
  ${(props) => (
    props.transp ? 'opacity: 0;' : ''
  )}
`;

export const Calculation = styled.div`
  font-size: 20px;
  text-align: left;
  line-height: 28px;
  font-family: 'Playfair Display';
  font-weight: 400;
  font-style: italic;
  color: ${grey};
  ${BP_2} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Button = styled.button`
  border: none;
  box-shadow: none;
  outline: none;
  transition: all 0.2s ease;
  font-size: 14px;
  padding: 15px 30px;
  background: ${passion};
  text-transform: uppercase;
  color: ${light};
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.9;
  }
`;

export const Section = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.h2`
  ${({ white }) => (white ? 'color: #ffffff;' : '')}
  margin-bottom: 92px;
  text-align: center;
  font-size: 80px;
  line-height: 77px;
  font-family: 'Playfair Display';
  font-style: italic;
  font-weight: 400;
  ${BP_21} {
    font-size: 54px;
    line-height: 56px;
    margin-bottom: 60px;
  }
`;
