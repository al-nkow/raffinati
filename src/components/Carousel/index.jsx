import React, { useState } from 'react';
import styled from 'styled-components';

import cornice from './images/cornice.png';
import portiere1 from './images/portiere1.png';
import portiere2 from './images/portiere2.png';
import rome from './images/rome.png';
import tulle1 from './images/tulle1.png';
import tulle2 from './images/tulle2.png';

const slideSize = 200;

const Wrap = styled.div`
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
  font-size: 20px;
  transition: all 0.2s ease;
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
  span {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    text-align: center;
    font-size: 44px;
    opacity: 0;
    transition: all 0.2s ease;
    text-shadow: 0 0 5px rgba(0,0,0,0.2);
  }
  ${(props) => (props.active ? `
    background: #dedede;
    img {
      opacity: 1;
      z-index: 4;
      transform: translate(-50%, -50%) scale(1.6);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    }
    span {
      opacity: 1;
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
  ${({ hide }) => (hide ? `
    opacity: 0.2;
  ` : '')}
`;

const slides = [
  {
    id: 1,
    title: 'Тюль',
    url: tulle1,
    target: 'tulle',
  },
  {
    id: 2,
    title: 'Карниз',
    url: portiere1,
    target: 'cornice',
  },
  {
    id: 3,
    title: 'Римская штора',
    url: rome,
    target: 'rome',
  },
  {
    id: 4,
    title: 'Тюль',
    url: tulle2,
    target: 'tulle',
  },
  {
    id: 5,
    title: 'Карниз',
    url: cornice,
    target: 'cornice',
  },
  {
    id: 6,
    title: 'Тюль',
    url: tulle2,
    target: 'tulle',
  },
  {
    id: 7,
    title: 'Портьера',
    url: portiere2,
    target: 'portiere',
  },
];

const Carousel = () => {
  const [move, setMove] = useState(0);
  const [active, setActive] = useState(3);

  const clickItem = (n, targetId) => {
    if (n === active) {
      const element = document.getElementById(targetId);
      if (typeof window !== 'undefined' && element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setMove(-(n - 3) * slideSize);
    setActive(n);
  };

  return (
    <Wrap>
      <Slider move={move}>
        {slides.map((item, index) => (
          <Slide
            key={item.id}
            hide={index < active - 3 || index > active + 1}
            active={active === index + 1}
            siblings={index === active - 2 || index === active}
            onClick={() => clickItem(index + 1, item.target)}
          >
            <img src={item.url} alt="" />
            <span>{item.title}</span>
          </Slide>
        ))}
      </Slider>
    </Wrap>
  );
};

export default Carousel;
