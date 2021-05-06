import React from 'react';
import styled from 'styled-components';
import Logo from './images/logo.png';
import { email, phone, text, contentWidth, light, gray74, instaUrl, whatsappUrl } from '../../config';

const Wrap = styled.div`
  background: ${text};
`;

const Inner = styled.div`
  padding: 74px 0;
  width: ${contentWidth}px;
  margin: 0 auto;
  color: ${light};
`;

const Image = styled.img`
  width: 157px;
`;

const Row = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #4F4F4F;
`;

const Col = styled.div`
  padding-top: 38px;
`;

const Title = styled.div`
  position: relative;
  font-size: 18px;
  padding-left: 36px;
  margin-bottom: 36px;
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -58%);
  }
`;

const Info = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  color: ${gray74};
  max-width: 400px;
  line-height: 22px;
`;

const A = styled.a`
  color: ${gray74};
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const UnderFooter = styled.div`
  background: #131313;
  color: #777777;
`;

const Copyright = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
  padding: 20px 0;
  font-size: 16px;
`;

const Footer = () => (
  <Wrap>
    <Inner>
      <Image src={Logo} alt="" />
      <Row>
        <Col>
          <Title>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.3312 0.466919C10.6968 0.182576 11.2087 0.182576 11.5743 0.466919L20.6857 7.55362C20.9323 7.74543 21.0766 8.04034 21.0766 8.35275V19.489C21.0766 20.2945 20.7566 21.067 20.187 21.6366C19.6174 22.2062 18.8449 22.5262 18.0394 22.5262H3.86602C3.06051 22.5262 2.288 22.2062 1.71842 21.6366C1.14884 21.067 0.828857 20.2945 0.828857 19.489V8.35275C0.828857 8.04034 0.973095 7.74543 1.2197 7.55362L10.3312 0.466919ZM2.85363 8.84789V19.489C2.85363 19.7575 2.96029 20.015 3.15015 20.2049C3.34001 20.3947 3.59752 20.5014 3.86602 20.5014H18.0394C18.3079 20.5014 18.5654 20.3947 18.7553 20.2049C18.9452 20.015 19.0518 19.7575 19.0518 19.489V8.84789L10.9527 2.5486L2.85363 8.84789Z" fill="#FEFAF7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M6.90303 12.1256C6.90303 11.6089 7.35629 11.1899 7.91542 11.1899H13.9897C14.5489 11.1899 15.0021 11.6089 15.0021 12.1256V21.4824C15.0021 21.9991 14.5489 22.418 13.9897 22.418C13.4306 22.418 12.9773 21.9991 12.9773 21.4824V13.0613H8.9278V21.4824C8.9278 21.9991 8.47454 22.418 7.91542 22.418C7.35629 22.418 6.90303 21.9991 6.90303 21.4824V12.1256Z" fill="#FEFAF7" />
            </svg>
            Адреса салонов
          </Title>
          <Info>
            Москва, Нахимовский проспект 24, Центр Дизайна и декора &quot;Экспострой&quot;,
            павильон 2, ряд 1, стенд 45
          </Info>
          <Info>
            Санкт-Петербург, Новолитовская 15, Мебельный центр &quot;Аквилон&quot;, корпус Д,
            второй этаж, секция 201 А
          </Info>
          <Info>
            Санкт-Петербург, Варшавская 3, Мебельный центр &quot;Мебельный континент&quot;,
            корпус 1, этаж 2, секця 234 А
          </Info>
        </Col>
        <Col>
          <Title>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.445533 1.83318C0.445533 1.5301 0.566175 1.23944 0.780919 1.02513C0.995663 0.810826 1.28692 0.69043 1.59061 0.69043H19.9004C20.2041 0.69043 20.4954 0.810826 20.7101 1.02513C20.9249 1.23944 21.0455 1.5301 21.0455 1.83318V14.7736C21.0455 15.3798 20.8042 15.9611 20.3747 16.3897C19.9452 16.8183 19.3627 17.0591 18.7554 17.0591H2.72424C2.11685 17.0591 1.53434 16.8183 1.10485 16.3897C0.675366 15.9611 0.434082 15.3798 0.434082 14.7736V2.20343C0.434082 2.14857 0.437517 2.09601 0.445533 2.04344V1.83318ZM2.72424 4.37464V14.7736H18.7554V4.37464L13.1685 9.9501C12.5243 10.5928 11.6507 10.9538 10.7398 10.9538C9.82889 10.9538 8.95528 10.5928 8.31108 9.9501L2.72424 4.37236V4.37464ZM4.52431 2.93936H16.9553L11.5505 8.33312C11.4442 8.43937 11.3179 8.52365 11.1789 8.58116C11.0399 8.63867 10.8908 8.66827 10.7404 8.66827C10.5899 8.66827 10.4409 8.63867 10.3019 8.58116C10.1629 8.52365 10.0366 8.43937 9.93022 8.33312L4.52545 2.93936H4.52431Z" fill="#FEFAF7" />
            </svg>
            E-mail
          </Title>
          <Info><A href={`mailto:${email}`}>{email}</A></Info>
        </Col>
        <Col>
          <Title>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.865 3.51838C18.8087 2.45816 17.552 1.61748 16.1676 1.04505C14.7832 0.472627 13.2987 0.179832 11.8 0.18363C5.51567 0.18363 0.399798 5.28391 0.397258 11.5532C0.397258 13.5568 0.921799 15.5123 1.91881 17.2373L0.302002 23.1279L6.3463 21.546C8.01822 22.4536 9.89134 22.9295 11.7949 22.9304H11.8C18.0831 22.9304 23.199 17.8301 23.2015 11.5608C23.2058 10.0669 22.9132 8.58699 22.3405 7.20657C21.7678 5.82614 20.9264 4.5726 19.865 3.51838V3.51838ZM11.8 21.0116H11.7962C10.0988 21.0118 8.43257 20.5563 6.97245 19.6931L6.62699 19.4879L3.04029 20.4264L3.99666 16.9397L3.77185 16.5825C2.82284 15.0759 2.32045 13.3324 2.32269 11.5532C2.32523 6.34272 6.57618 2.10368 11.8038 2.10368C13.0488 2.10092 14.282 2.34442 15.432 2.82009C16.582 3.29575 17.626 3.99414 18.5035 4.87483C19.3857 5.75131 20.085 6.79347 20.5609 7.94107C21.0368 9.08867 21.2798 10.3189 21.2761 11.5608C21.2735 16.7713 17.0226 21.0116 11.8 21.0116ZM16.9984 13.933C16.7127 13.7899 15.313 13.1034 15.0514 13.0084C14.791 12.9134 14.6018 12.8666 14.4113 13.1503C14.2208 13.434 13.6746 14.0736 13.5083 14.2635C13.3419 14.4535 13.1755 14.4763 12.891 14.3345C12.6065 14.1926 11.6882 13.8925 10.5998 12.9248C9.75265 12.1713 9.18111 11.2416 9.01473 10.9567C8.84835 10.6717 8.99695 10.5184 9.14047 10.3766C9.26874 10.2499 9.42496 10.0448 9.56721 9.87885C9.70946 9.71294 9.75645 9.59515 9.85171 9.40517C9.94697 9.21519 9.89997 9.04928 9.82758 8.90743C9.75646 8.76431 9.18619 7.36607 8.94869 6.7974C8.7188 6.24647 8.48384 6.31993 8.30857 6.31233C8.12704 6.30492 7.94538 6.30154 7.7637 6.30219C7.61924 6.30587 7.4771 6.33926 7.34618 6.40028C7.21527 6.46131 7.09841 6.54865 7.00293 6.65682C6.74129 6.94179 6.00592 7.62824 6.00592 9.02648C6.00592 10.4247 7.02706 11.7761 7.16931 11.9661C7.31156 12.1561 9.17857 15.0247 12.0362 16.2558C12.717 16.5484 13.2479 16.7231 13.6607 16.8549C14.3427 17.0714 14.9638 17.0398 15.4553 16.9676C16.0027 16.8865 17.1407 16.2811 17.3782 15.6175C17.6157 14.9538 17.6157 14.3851 17.5446 14.2661C17.4734 14.147 17.2817 14.0748 16.9984 13.933" fill="#F5F5F5" />
            </svg>
            WhatsApp
          </Title>
          <Info><A href={whatsappUrl} target="_blank" rel="nofollow">{phone}</A></Info>
        </Col>
        <Col>
          <Title>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3157 5.91043C8.15243 5.91043 5.60095 8.46191 5.60095 11.6251C5.60095 14.7884 8.15243 17.3398 11.3157 17.3398C14.4789 17.3398 17.0304 14.7884 17.0304 11.6251C17.0304 8.46191 14.4789 5.91043 11.3157 5.91043ZM11.3157 15.3404C9.27149 15.3404 7.60035 13.6743 7.60035 11.6251C7.60035 9.576 9.26652 7.90983 11.3157 7.90983C13.3648 7.90983 15.031 9.576 15.031 11.6251C15.031 13.6743 13.3598 15.3404 11.3157 15.3404ZM18.5971 5.67667C18.5971 6.41774 18.0002 7.00961 17.2641 7.00961C16.5231 7.00961 15.9312 6.41277 15.9312 5.67667C15.9312 4.94057 16.528 4.34374 17.2641 4.34374C18.0002 4.34374 18.5971 4.94057 18.5971 5.67667ZM22.382 7.0295C22.2974 5.24397 21.8896 3.66235 20.5815 2.35926C19.2784 1.05617 17.6968 0.648329 15.9113 0.558803C14.071 0.454357 8.55529 0.454357 6.71505 0.558803C4.93449 0.643355 3.35287 1.05119 2.04481 2.35428C0.73674 3.65738 0.333876 5.23899 0.24435 7.02453C0.139904 8.86477 0.139904 14.3805 0.24435 16.2208C0.328902 18.0063 0.73674 19.5879 2.04481 20.891C3.35287 22.1941 4.92951 22.6019 6.71505 22.6915C8.55529 22.7959 14.071 22.7959 15.9113 22.6915C17.6968 22.6069 19.2784 22.1991 20.5815 20.891C21.8846 19.5879 22.2925 18.0063 22.382 16.2208C22.4864 14.3805 22.4864 8.86974 22.382 7.0295ZM20.0046 18.1953C19.6166 19.1701 18.8656 19.9212 17.8858 20.3141C16.4186 20.896 12.9371 20.7617 11.3157 20.7617C9.69425 20.7617 6.20774 20.891 4.74549 20.3141C3.77066 19.9261 3.01964 19.1751 2.62672 18.1953C2.04481 16.7281 2.17909 13.2465 2.17909 11.6251C2.17909 10.0037 2.04978 6.51722 2.62672 5.05497C3.01466 4.08014 3.76568 3.32912 4.74549 2.9362C6.21271 2.35428 9.69425 2.48857 11.3157 2.48857C12.9371 2.48857 16.4236 2.35926 17.8858 2.9362C18.8607 3.32414 19.6117 4.07516 20.0046 5.05497C20.5865 6.52219 20.4522 10.0037 20.4522 11.6251C20.4522 13.2465 20.5865 16.7331 20.0046 18.1953Z" fill="#FEFAF7" />
            </svg>
            Instagram
          </Title>
          <Info>Подпишитесь на нас в <A href={instaUrl} target="_blank" rel="noreferrer">Instagram</A></Info>
        </Col>
      </Row>
    </Inner>
    <UnderFooter>
      <Copyright>
        ©
        &nbsp;
        Raffinati
        &nbsp;
        2009-
        {new Date().getFullYear()}
      </Copyright>
    </UnderFooter>
  </Wrap>
);

export default Footer;
