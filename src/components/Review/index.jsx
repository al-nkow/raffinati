import React from 'react';
import styled from 'styled-components';

import NoImg from './images/noimg.png';
import Nik from './images/nik.png';

const Wrap = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  box-sizing: border-box;
  padding: 24px;
  width: 30%;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

const Photo = styled.div`
  width: 100px;
  height: 100px;
  background: url('${({ url }) => (url || NoImg)}');
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 25px;
`;

const Name = styled.div`
  font-size: 22px;
  margin-bottom: 15px;
`;

const Msg = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

const Review = () => (
  <Wrap>
    <Card>
      <Photo url={Nik} />
      <Name>Игорь Николаев</Name>
      <Msg>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально. Фаза
        вызывает нулевой меридиан. Магнитное поле потенциально. Фаза вызывает
        нулевой меридиан. Магнитное поле потенциально.
      </Msg>
    </Card>
    <Card>
      <Photo />
      <Name>Игорь Николаев</Name>
      <Msg>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально. Фаза
        вызывает нулевой меридиан. Магнитное поле потенциально. Фаза вызывает
        нулевой меридиан. Магнитное поле потенциально.
      </Msg>
    </Card>
    <Card>
      <Photo />
      <Name>Игорь Николаев</Name>
      <Msg>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально. Фаза
        вызывает нулевой меридиан. Магнитное поле потенциально. Фаза вызывает
        нулевой меридиан. Магнитное поле потенциально.
      </Msg>
    </Card>
  </Wrap>
);

export default Review;
