import React from 'react';
import styled from 'styled-components';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { phone, text, passion, BP_21 } from '../../config';

const Wrap = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  ${BP_21} {
    flex-direction: column;
    padding: 10px;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 45%;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #fdfaf7;
  ${BP_21} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  padding: 24px;
`;

const City = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Info = styled.div`
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 18px;
  svg {
    vertical-align: middle;
    margin-right: 10px;
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${text};
`;

const MapWrap = styled.div`
  height: 240px;
  background: #f9f5f2;
`;

const Contacts = () => (
  <YMaps>
    <Wrap>
      <Card>
        <MapWrap>
          <Map
            style={{ width: '100%', height: '240px' }}
            defaultState={{ center: [55.672431, 37.582697], zoom: 16 }}
            options={{ suppressMapOpenBlock: true }}
            modules={['geoObject.addon.hint']}
          >
            <Placemark
              geometry={[55.672431, 37.582697]}
              properties={{ hintContent: 'Центр Дизайна и декора &quot;Экспострой&quot;' }}
              options={{ iconColor: passion }}
            />
          </Map>
        </MapWrap>
        <Content>
          <City>Москва</City>
          <Info>
            Нахимовский проспект 24, Центр Дизайна и декора &quot;Экспострой&quot;,
            павильон 2, ряд 1, стенд 45
          </Info>
          <Info>
            Время работы:<br />
            с 10:00 до 20:00 пн-сб<br />
            с 10:00 до 19:00 вс<br />
          </Info>
          <Link href={`tel:${phone}`}>
            <Info>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.4863 4.17519C22.2184 2.899 20.71 1.88709 19.0482 1.19806C17.3865 0.50904 15.6046 0.156605 13.8057 0.161177C6.26247 0.161177 0.121781 6.30034 0.118732 13.8466C0.118732 16.2584 0.74835 18.6122 1.94508 20.6886L0.00439453 27.779L7.25949 25.8749C9.26633 26.9674 11.5147 27.5402 13.7996 27.5412H13.8057C21.3474 27.5412 27.4881 21.402 27.4911 13.8558C27.4963 12.0576 27.1451 10.2762 26.4576 8.61462C25.7702 6.95302 24.7603 5.44414 23.4863 4.17519ZM13.8057 25.2316H13.8011C11.7637 25.2318 9.76369 24.6836 8.01107 23.6446L7.59641 23.3976L3.29122 24.5273L4.43917 20.3303L4.16933 19.9004C3.0302 18.0869 2.42718 15.9882 2.42987 13.8466C2.43292 7.57482 7.53543 2.47232 13.8103 2.47232C15.3047 2.469 16.7849 2.7621 18.1652 3.33465C19.5456 3.90721 20.7987 4.74785 21.852 5.80793C22.911 6.86294 23.7503 8.11738 24.3215 9.49874C24.8928 10.8801 25.1845 12.361 25.18 13.8558C25.1769 20.1276 20.0744 25.2316 13.8057 25.2316ZM20.0455 16.7112C19.7025 16.5389 18.0225 15.7126 17.7084 15.5983C17.3959 15.4839 17.1687 15.4275 16.9401 15.769C16.7114 16.1105 16.0559 16.8804 15.8561 17.109C15.6564 17.3377 15.4567 17.3652 15.1152 17.1944C14.7738 17.0237 13.6715 16.6624 12.365 15.4976C11.3482 14.5906 10.6622 13.4716 10.4625 13.1286C10.2628 12.7856 10.4411 12.6011 10.6134 12.4304C10.7674 12.2779 10.9549 12.0309 11.1256 11.8312C11.2964 11.6315 11.3528 11.4897 11.4671 11.2611C11.5814 11.0324 11.525 10.8327 11.4381 10.6619C11.3528 10.4897 10.6683 8.80662 10.3832 8.12212C10.1073 7.45896 9.82522 7.54738 9.61484 7.53823C9.39696 7.52932 9.1789 7.52525 8.96083 7.52604C8.78743 7.53046 8.61681 7.57065 8.45967 7.64411C8.30253 7.71756 8.16226 7.82269 8.04766 7.9529C7.73361 8.29591 6.85093 9.12219 6.85093 10.8052C6.85093 12.4883 8.07662 14.1149 8.24737 14.3436C8.41811 14.5723 10.6591 18.0253 14.0893 19.5071C14.9064 19.8592 15.5436 20.0696 16.0391 20.2282C16.8577 20.4889 17.6032 20.4508 18.1932 20.3639C18.8503 20.2663 20.2162 19.5376 20.5013 18.7387C20.7864 17.9399 20.7864 17.2554 20.701 17.1121C20.6156 16.9688 20.3854 16.8819 20.0455 16.7112Z" fill="#A82D2C" />
              </svg>
              {phone}
            </Info>
          </Link>
        </Content>
      </Card>
      <Card>
        <MapWrap>
          <Map
            style={{ width: '100%', height: '240px' }}
            defaultState={{ center: [59.927726, 30.332464], zoom: 10 }}
            options={{ suppressMapOpenBlock: true }}
            modules={['geoObject.addon.hint']}
          >
            <Placemark
              geometry={[59.981885, 30.358575]}
              properties={{ hintContent: 'Мебельный центр &quot;Аквилон&quot;' }}
              options={{ iconColor: passion }}
            />
            <Placemark
              geometry={[59.882140, 30.311726]}
              properties={{ hintContent: 'Мебельный центр &quot;Мебельный континент&quot;' }}
              options={{ iconColor: passion }}
            />
          </Map>
        </MapWrap>
        <Content>
          <City>Санкт-Петербург</City>
          <Info>
            Новолитовская 15, Мебельный центр &quot;Аквилон&quot;, корпус Д,
            второй этаж, секция 201 А
          </Info>
          <Info>
            Варшавская 3, Мебельный центр &quot;Мебельный континент&quot;,
            корпус 1, этаж 2, секця 234 А
          </Info>
          <Info>Открыто с 11:00 до 20:00 пн-вс</Info>
          <Link href={`tel:${phone}`}>
            <Info>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.4863 4.17519C22.2184 2.899 20.71 1.88709 19.0482 1.19806C17.3865 0.50904 15.6046 0.156605 13.8057 0.161177C6.26247 0.161177 0.121781 6.30034 0.118732 13.8466C0.118732 16.2584 0.74835 18.6122 1.94508 20.6886L0.00439453 27.779L7.25949 25.8749C9.26633 26.9674 11.5147 27.5402 13.7996 27.5412H13.8057C21.3474 27.5412 27.4881 21.402 27.4911 13.8558C27.4963 12.0576 27.1451 10.2762 26.4576 8.61462C25.7702 6.95302 24.7603 5.44414 23.4863 4.17519ZM13.8057 25.2316H13.8011C11.7637 25.2318 9.76369 24.6836 8.01107 23.6446L7.59641 23.3976L3.29122 24.5273L4.43917 20.3303L4.16933 19.9004C3.0302 18.0869 2.42718 15.9882 2.42987 13.8466C2.43292 7.57482 7.53543 2.47232 13.8103 2.47232C15.3047 2.469 16.7849 2.7621 18.1652 3.33465C19.5456 3.90721 20.7987 4.74785 21.852 5.80793C22.911 6.86294 23.7503 8.11738 24.3215 9.49874C24.8928 10.8801 25.1845 12.361 25.18 13.8558C25.1769 20.1276 20.0744 25.2316 13.8057 25.2316ZM20.0455 16.7112C19.7025 16.5389 18.0225 15.7126 17.7084 15.5983C17.3959 15.4839 17.1687 15.4275 16.9401 15.769C16.7114 16.1105 16.0559 16.8804 15.8561 17.109C15.6564 17.3377 15.4567 17.3652 15.1152 17.1944C14.7738 17.0237 13.6715 16.6624 12.365 15.4976C11.3482 14.5906 10.6622 13.4716 10.4625 13.1286C10.2628 12.7856 10.4411 12.6011 10.6134 12.4304C10.7674 12.2779 10.9549 12.0309 11.1256 11.8312C11.2964 11.6315 11.3528 11.4897 11.4671 11.2611C11.5814 11.0324 11.525 10.8327 11.4381 10.6619C11.3528 10.4897 10.6683 8.80662 10.3832 8.12212C10.1073 7.45896 9.82522 7.54738 9.61484 7.53823C9.39696 7.52932 9.1789 7.52525 8.96083 7.52604C8.78743 7.53046 8.61681 7.57065 8.45967 7.64411C8.30253 7.71756 8.16226 7.82269 8.04766 7.9529C7.73361 8.29591 6.85093 9.12219 6.85093 10.8052C6.85093 12.4883 8.07662 14.1149 8.24737 14.3436C8.41811 14.5723 10.6591 18.0253 14.0893 19.5071C14.9064 19.8592 15.5436 20.0696 16.0391 20.2282C16.8577 20.4889 17.6032 20.4508 18.1932 20.3639C18.8503 20.2663 20.2162 19.5376 20.5013 18.7387C20.7864 17.9399 20.7864 17.2554 20.701 17.1121C20.6156 16.9688 20.3854 16.8819 20.0455 16.7112Z" fill="#A82D2C" />
              </svg>
              {phone}
            </Info>
          </Link>
        </Content>
      </Card>
    </Wrap>
  </YMaps>
);

export default Contacts;
