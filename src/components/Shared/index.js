import styled from 'styled-components';
import { passion, grey, light } from '../../config';

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
  margin-bottom: 60px;
  text-align: center;
  font-size: 52px;
  font-family: 'Playfair Display';
  font-weight: 400;
  i {
    font-style: italic;
    color: ${passion};
  }
`;

export const SelectBase = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;
`;

export const Fabric = styled.div`
  cursor: pointer;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-size: 40px;
  position: relative;
  width: 30%;
  height: 369px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid transparent;
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
  ` : '')}
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
`;

export const Button = styled.div`
  margin-top: 25px;
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
