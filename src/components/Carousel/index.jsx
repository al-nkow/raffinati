import React, { useState } from 'react';
import styled from 'styled-components';
import imgg from './images/slider.png';
import imgh from './images/slider1.png';

const slideSize = 200;

const Wrap = styled.div`
  // border: 1px solid red;
  min-height: 100px;
  width: ${slideSize * 5}px;
  margin: 0 auto;
`;

const Slider = styled.div`
  display: flex;
  transform: translate(${(props) => props.move}px, 0);
  transition: all 0.2s linear;
`;

const Slide = styled.div`
  position: relative;
  cursor: pointer;
  min-width: ${slideSize}px;
  width: ${slideSize}px;
  height: ${slideSize}px;
  // border: 1px solid blue;
  font-size: 20px;
  img {
    border-radius: 2px;
    display: block;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
    opacity: 0.8;
    transition: all 0.2s ease;
  }
  ${(props) => (props.active ? `
    background: #dedede;
    img {
      opacity: 1;
      z-index: 4;
      transform: translate(-50%, -50%) scale(1.6);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    }
  ` : '')}
  ${(props) => (props.siblings ? `
    img {
      opacity: 1;
      z-index: 3;
      transform: translate(-50%, -50%) scale(1.2);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  ` : '')} 
`;

const slides = [
  {
    id: 1,
    title: 1,
    url: imgh,
  },
  {
    id: 2,
    title: 2,
    url: imgg,
  },
  {
    id: 3,
    title: 3,
    url: imgh,
  },
  {
    id: 4,
    title: 4,
    url: imgg,
  },
  {
    id: 5,
    title: 5,
    url: imgh,
  },
  {
    id: 6,
    title: 6,
    url: imgg,
  },
  {
    id: 7,
    title: 7,
    url: imgh,
  },
  {
    id: 8,
    title: 8,
    url: imgg,
  },
];

const Carousel = () => {
  const [move, setMove] = useState(0);
  const [active, setActive] = useState(3);

  const clickItem = (n) => {
    if (n === active) return;

    setMove(-(n - 3) * slideSize);
    setActive(n);
  };

  return (
    <Wrap>
      <Slider move={move}>
        {slides.map((item, index) => (
          <Slide
            key={item.id}
            active={active === index + 1}
            siblings={index === active - 2 || index === active}
            onClick={() => clickItem(index + 1)}
          >
            <img src={item.url} alt="" />
          </Slide>
        ))}
      </Slider>
    </Wrap>
  );
};

export default Carousel;
