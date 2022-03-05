/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { Wrap, Title } from 'components/Shared';
import AccBlock from '../AccBlock';
import Team from '../Team';
// import Review from '../Review';
import Contacts from '../Contacts';
import { text, passion, whatsappUrl, BP_21 } from '../../config';

import icon1 from './images/icon1.svg';
import icon2 from './images/icon2.svg';
import icon3 from './images/icon3.svg';
import icon4 from './images/icon4.svg';
import icon5 from './images/icon5.svg';
// import icon6 from './images/icon6.svg';

const Last = styled.div`
  border-bottom: 2px solid ${text};
  margin-bottom: 213px;
  ${BP_21} {
    margin-bottom: 100px;
  }
`;

const SomeCmp = styled.div`
  padding: 40px;
  opacity: 0.9;
  ${BP_21} {
    padding: 10px;
  }
`;

const Ul = styled.ul`
  padding: 40px 40px 40px 80px;
  font-size: 18px;
  line-height: 26px;
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 10px;
      height: 10px;
      background: ${passion};
      border-radius: 50%;
    }
  }
  ${BP_21} {
    padding: 20px 20px 40px 20px;
  }
`;

const Social = styled.a`
  margin-left: 20px;
  vertical-align: middle;
  svg {
    width: 50px;
    height: 50px;
    fill: ${passion};
  }
  &:hover {
    svg {
      opacity: 0.8;
    }
  }
`;

const Work = ({ scrollTo }) => {
  return (
    <Wrap>
      <Title>
        Как мы работаем
      </Title>
      <AccBlock title="Онлайн-заказ" icon={icon1}>
        <Ul>
          <li>Выберите шторы подходящие по дизайну</li>
          <li>Определитесь с материалом</li>
          <li>Добавьте необходимый Вам карниз</li>
          <li>Оформите заказ</li>
          <li>Напишите нам в любом из удобных для Вас мессенджеров или позвоните по телефону</li>
        </Ul>
      </AccBlock>
      <AccBlock title="Онлайн-консультация" icon={icon2}>
        <SomeCmp>
          Задайте нам вопрос и мы ответим в течение часа
          <Social href={whatsappUrl} target="_blank" rel="nofollow">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.7966 4.24355C22.5287 2.96736 21.0203 1.95545 19.3585 1.26642C17.6968 0.577399 15.9149 0.224964 14.116 0.229536C6.57277 0.229536 0.432084 6.3687 0.429035 13.915C0.429035 16.3267 1.05865 18.6806 2.25539 20.7569L0.314697 27.8474L7.56979 25.9433C9.57664 27.0357 11.825 27.6086 14.1099 27.6096H14.116C21.6577 27.6096 27.7984 21.4704 27.8014 13.9241C27.8066 12.1259 27.4554 10.3446 26.7679 8.68298C26.0805 7.02138 25.0706 5.5125 23.7966 4.24355ZM14.116 25.2999H14.1114C12.074 25.3002 10.074 24.752 8.32137 23.7129L7.90671 23.466L3.60152 24.5956L4.74947 20.3987L4.47963 19.9688C3.34051 18.1553 2.73748 16.0566 2.74018 13.915C2.74323 7.64318 7.84573 2.54068 14.1206 2.54068C15.615 2.53736 17.0952 2.83046 18.4755 3.40301C19.8559 3.97557 21.109 4.81621 22.1623 5.87629C23.2213 6.9313 24.0606 8.18574 24.6318 9.5671C25.2031 10.9485 25.4948 12.4293 25.4903 13.9241C25.4872 20.1959 20.3847 25.2999 14.116 25.2999ZM20.3558 16.7795C20.0128 16.6072 18.3328 15.781 18.0187 15.6666C17.7062 15.5523 17.479 15.4959 17.2504 15.8374C17.0217 16.1789 16.3662 16.9487 16.1665 17.1774C15.9667 17.4061 15.767 17.4335 15.4255 17.2628C15.0841 17.092 13.9818 16.7307 12.6753 15.566C11.6585 14.6589 10.9725 13.5399 10.7728 13.1969C10.5731 12.8539 10.7514 12.6695 10.9237 12.4987C11.0777 12.3463 11.2652 12.0993 11.4359 11.8996C11.6067 11.6999 11.6631 11.5581 11.7774 11.3294C11.8918 11.1007 11.8353 10.901 11.7484 10.7303C11.6631 10.558 10.9786 8.87498 10.6935 8.19048C10.4176 7.52732 10.1355 7.61574 9.92515 7.60659C9.70726 7.59768 9.4892 7.59361 9.27114 7.5944C9.09773 7.59881 8.92711 7.63901 8.76997 7.71247C8.61283 7.78592 8.47256 7.89105 8.35796 8.02126C8.04391 8.36427 7.16123 9.19055 7.16123 10.8736C7.16123 12.5566 8.38693 14.1833 8.55767 14.412C8.72841 14.6406 10.9694 18.0936 14.3996 19.5754C15.2167 19.9276 15.8539 20.138 16.3494 20.2965C17.168 20.5572 17.9135 20.5191 18.5035 20.4322C19.1606 20.3346 20.5265 19.6059 20.8116 18.8071C21.0967 18.0083 21.0967 17.3238 21.0113 17.1805C20.9259 17.0372 20.6957 16.9503 20.3558 16.7795Z" />
            </svg>
          </Social>
        </SomeCmp>
      </AccBlock>
      <AccBlock id="contacts" scrollTo={scrollTo} title="Салоны в Москве и С-Петербурге" icon={icon3}>
        <Contacts />
      </AccBlock>
      <AccBlock title="Выезд в пределах города или за город" icon={icon4}>
        <SomeCmp>
          При заказе у нас - выезд абсолютно бесплатный. Приедем в течение 2х часов. Оставьте заявку
          <Social href={whatsappUrl} target="_blank" rel="nofollow">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.7966 4.24355C22.5287 2.96736 21.0203 1.95545 19.3585 1.26642C17.6968 0.577399 15.9149 0.224964 14.116 0.229536C6.57277 0.229536 0.432084 6.3687 0.429035 13.915C0.429035 16.3267 1.05865 18.6806 2.25539 20.7569L0.314697 27.8474L7.56979 25.9433C9.57664 27.0357 11.825 27.6086 14.1099 27.6096H14.116C21.6577 27.6096 27.7984 21.4704 27.8014 13.9241C27.8066 12.1259 27.4554 10.3446 26.7679 8.68298C26.0805 7.02138 25.0706 5.5125 23.7966 4.24355ZM14.116 25.2999H14.1114C12.074 25.3002 10.074 24.752 8.32137 23.7129L7.90671 23.466L3.60152 24.5956L4.74947 20.3987L4.47963 19.9688C3.34051 18.1553 2.73748 16.0566 2.74018 13.915C2.74323 7.64318 7.84573 2.54068 14.1206 2.54068C15.615 2.53736 17.0952 2.83046 18.4755 3.40301C19.8559 3.97557 21.109 4.81621 22.1623 5.87629C23.2213 6.9313 24.0606 8.18574 24.6318 9.5671C25.2031 10.9485 25.4948 12.4293 25.4903 13.9241C25.4872 20.1959 20.3847 25.2999 14.116 25.2999ZM20.3558 16.7795C20.0128 16.6072 18.3328 15.781 18.0187 15.6666C17.7062 15.5523 17.479 15.4959 17.2504 15.8374C17.0217 16.1789 16.3662 16.9487 16.1665 17.1774C15.9667 17.4061 15.767 17.4335 15.4255 17.2628C15.0841 17.092 13.9818 16.7307 12.6753 15.566C11.6585 14.6589 10.9725 13.5399 10.7728 13.1969C10.5731 12.8539 10.7514 12.6695 10.9237 12.4987C11.0777 12.3463 11.2652 12.0993 11.4359 11.8996C11.6067 11.6999 11.6631 11.5581 11.7774 11.3294C11.8918 11.1007 11.8353 10.901 11.7484 10.7303C11.6631 10.558 10.9786 8.87498 10.6935 8.19048C10.4176 7.52732 10.1355 7.61574 9.92515 7.60659C9.70726 7.59768 9.4892 7.59361 9.27114 7.5944C9.09773 7.59881 8.92711 7.63901 8.76997 7.71247C8.61283 7.78592 8.47256 7.89105 8.35796 8.02126C8.04391 8.36427 7.16123 9.19055 7.16123 10.8736C7.16123 12.5566 8.38693 14.1833 8.55767 14.412C8.72841 14.6406 10.9694 18.0936 14.3996 19.5754C15.2167 19.9276 15.8539 20.138 16.3494 20.2965C17.168 20.5572 17.9135 20.5191 18.5035 20.4322C19.1606 20.3346 20.5265 19.6059 20.8116 18.8071C21.0967 18.0083 21.0967 17.3238 21.0113 17.1805C20.9259 17.0372 20.6957 16.9503 20.3558 16.7795Z" />
            </svg>
          </Social>
        </SomeCmp>
      </AccBlock>
      <AccBlock title="Наша команда" icon={icon5}>
        <Team />
      </AccBlock>
      {/* <AccBlock title="Отзывы" icon={icon6}>
        <Review />
      </AccBlock> */}
      <Last data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
    </Wrap>
  );
};

export default Work;
