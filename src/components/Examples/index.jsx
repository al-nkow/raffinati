import React, { useState } from 'react';
import { Wrap, Title } from 'components/Shared';
import Slider from 'components/Slider';

import { Blocks, Image, Lupa, Block, Info, Head, Body, Period, Days } from './styles';
import Data, { IMAGES } from './data';

const defaultSliderData = {
  images: null,
  activeIndex: 0,
};

const Examples = () => {
  const [sliderData, setSliderData] = useState(defaultSliderData);

  const slide = (ind) => setSliderData({ ...sliderData, activeIndex: ind });
  const closeSlider = () => setSliderData(defaultSliderData);

  const blockClickHandler = (index) => {
    setSliderData({ images: IMAGES, activeIndex: index });
  };

  return (
    <Wrap data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      {sliderData.images && (
        <Slider
          images={sliderData.images}
          activeIndex={sliderData.activeIndex}
          slide={slide}
          close={closeSlider}
        />
      )}
      <Title>Наши работы</Title>
      <Blocks>
        {Data.map((item, index) => (
          <Block key={item.id} onClick={() => blockClickHandler(index)}>
            <Image style={{ backgroundImage: `url(${item.thumb})` }} />
            <Lupa xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </Lupa>
            <Info>
              {item.title && <Head>{item.title}</Head>}
              {item.body && <Body>{item.body}</Body>}
              {item.days && <Period>Срок изготовления <Days>{item.days}</Days> дней</Period>}
            </Info>
          </Block>
        ))}
      </Blocks>
    </Wrap>
  );
};

export default Examples;
