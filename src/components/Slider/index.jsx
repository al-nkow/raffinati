import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import Portal from 'components/Portal';

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgWrap = styled.img`
  cursor: pointer;
  max-width: 90%;
  max-height: 90%;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0,0,0,0.4);
`;

const Arrow = `
  cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    svg {
      opacity: 0.8;
    }
  }
`;

const Left = styled.div`
  ${Arrow}
  margin-right: 20px;
  svg {
    fill: #ffffff;
    transform: rotate(-90deg);
  }
`;

const Right = styled.div`
  ${Arrow}
  margin-left: 20px;
  svg {
    fill: #ffffff;
    transform: rotate(90deg);
  }
`;

const CLOSE_SLIDER_CLASSNAME = 'image-slider-close';
const KEY_ARROW_RIGHT = 'ArrowRight';
const KEY_ARROW_LEFT = 'ArrowLeft';
const KEY_ESC = 'Escape';

const Slider = ({ images, activeIndex, slide, close }) => {
  const lastIndex = images.length - 1;
  const next = () => slide(activeIndex < lastIndex ? activeIndex + 1 : 0);
  const prev = () => slide(activeIndex > 0 ? activeIndex - 1 : lastIndex);

  const closeHandler = (e) => {
    e.persist();
    if (e.target.classList.contains(CLOSE_SLIDER_CLASSNAME)) close();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => prev(),
    onSwipedRight: () => next(),
    onSwipedUp: () => close(),
    onSwipedDown: () => close(),
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
  });

  useEffect(() => {
    const keyPressed = (e) => {
      switch (e.code) {
        case KEY_ARROW_RIGHT:
          next();
          break;
        case KEY_ARROW_LEFT:
          prev();
          break;
        case KEY_ESC:
          close();
          break;
        default:
      }
    };

    window.addEventListener('keydown', keyPressed);

    return () => {
      window.removeEventListener('keydown', keyPressed);
    };
  });

  return (
    <Portal>
      <Wrap onClick={closeHandler} className={CLOSE_SLIDER_CLASSNAME}>
        <Left onClick={prev}>
          <svg x="0px" y="0px" viewBox="0 0 487 487" style={{ enableBackground: 'new 0 0 487 487' }}>
            <g>
              <path d="M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z" />
            </g>
          </svg>
        </Left>
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <ImgWrap src={images[activeIndex]} onClick={next} {...handlers} />
        <Right onClick={next}>
          <svg x="0px" y="0px" viewBox="0 0 487 487" style={{ enablBackground: 'new 0 0 487 487' }}>
            <g>
              <path d="M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z" />
            </g>
          </svg>
        </Right>
      </Wrap>
    </Portal>
  );
};

export default Slider;
