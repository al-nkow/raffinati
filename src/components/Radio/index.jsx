import React from 'react';
import styled from 'styled-components';
import { RadioGroup, RadioLabel, RadioBtn, Label } from 'components/Shared';

const Wrap = styled.div`
  display: flex;
  Label {
    margin-right: 20px;
  }
`;

const Radio = ({ options, onChange, value, label }) => (
  <Wrap>
    {label && <Label>{label}</Label>}
    <RadioGroup>
      {
        options.map(item => (
          <RadioLabel key={item.id}>
            <RadioBtn checked={value === item.value}>
              <input
                type="radio"
                value={item.value}
                checked={value === item.value}
                onChange={() => onChange(item.value)}
              />
            </RadioBtn>
            {item.title}
          </RadioLabel>
        ))
      }
    </RadioGroup>
  </Wrap>
);

export default Radio;
