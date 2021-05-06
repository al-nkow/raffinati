import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { grey, passion, light } from '../../../config';

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 191px;
  ${({ swap }) => (swap ? 'flex-direction: row-reverse;' : '')}
`;

const Col = styled.div`
  box-sizing: border-box;
  flex: 1;
  &:first-child {
    padding-left: 100px;
    padding-top: 20px;
  }
  &:last-child {
    ${({ swap }) => (swap ? 'padding-right: 15px' : 'padding-left: 15px')};
    flex: none;
    width: 50%;
  }
`;

const Controls = styled.div`
  margin-bottom: 70px;
  display: flex;
`;

const ControlItem = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 40px;
  color: ${grey};
  transition: all 0.2s ease;
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    top: 100%;
    width: 50%;
    background: ${grey};
    margin-top: 2px;
    transition: all 0.2s ease;
  }
  &:hover {
    color: ${passion};
    &:after {
      width: 100%;
      background: ${passion};
    }
  }
  ${({ active }) => (active ? `
    color: ${passion};
    &:after {
      width: 100%;
      background: ${passion};
    }
  ` : '')}
`;

const Title = styled.h3`
  font-style: italic;
  margin-bottom: 42px;
  font-size: 64px;
  line-height: 56px;
  font-family: 'Playfair Display';
  font-weight: 400;
`;

const Description = styled.div`
  padding-right: 40px;
  line-height: 26px;
  margin-bottom: 46px;
`;

const Button = styled(Link)`
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

const Block = ({
  swap,
  title,
  description,
  options,
  id,
}) => {
  const [active, setActive] = useState(options[0].id);
  const currentOption = options.find(i => i.id === active);

  return (
    <Wrap swap={swap} id={id}>
      <Col swap={swap}>
        <Controls>
          {options.map((item) => (
            <ControlItem
              key={item.id}
              active={item.id === active}
              onClick={() => setActive(item.id)}
            >
              {item.title}
            </ControlItem>
          ))}
        </Controls>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        {description ? <Description dangerouslySetInnerHTML={{ __html: description }} /> : ''}
        <Description>{currentOption.info}</Description>
        <Button to={`/calculator?open=${id}&option=${active}`}>Рассчитать стоимость</Button>
      </Col>
      <Col swap={swap}>
        <Image src={currentOption.image} alt="" />
      </Col>
    </Wrap>
  );
};

export default Block;
