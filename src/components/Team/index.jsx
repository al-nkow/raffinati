import React from 'react';
import styled from 'styled-components';

import d1 from './images/d1.gif';
import d3 from './images/d3.gif';
import d4 from './images/d4.gif';

const Wrap = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  padding: 10px;
  width: 22%;
  /* min-height: 400px; */
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  text-align: center;
`;

const Top = styled.div`
  position: relative;
  height: 236px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Name = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
`;

// const Info = styled.div`
//   font-size: 18px;
//   line-height: 26px;
// `;

const Team = () => (
  <Wrap>
    <Card>
      <Top>
        <Image src={d1} alt="" />
      </Top>
      <Name>Александра</Name>
      {/* <Info>
        Шторы харашо прадавание делает. Плов вкюсный готовит. Старшим не грубит.
      </Info> */}
    </Card>
    <Card>
      <Top>
        <Image src={d3} alt="" />
      </Top>
      <Name>Дарья</Name>
      {/* <Info>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально.
      </Info> */}
    </Card>
    <Card>
      <Top>
        <Image src={d4} alt="" />
      </Top>
      <Name>Валерия</Name>
      {/* <Info>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально.
      </Info> */}
    </Card>
  </Wrap>
);

export default Team;
