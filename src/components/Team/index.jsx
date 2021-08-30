import React from 'react';
import styled from 'styled-components';

// import Bear from './images/bear.png';
// import Girl from './images/girl.png';
// import Girl2 from './images/girl2.png';
// import Man from './images/man.png';
import baba from './images/baba.gif';
import baba2 from './images/baba2.gif';
import baba3 from './images/baba3.gif';
import baba4 from './images/baba4.gif';

const Wrap = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  padding: 10px;
  width: 22%;
  min-height: 400px;
  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  text-align: center;
`;

const Top = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 70%;
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

const Info = styled.div`
  font-size: 18px;
  line-height: 26px;
`;

const Team = () => (
  <Wrap>
    <Card>
      <Top>
        <Image src={baba} alt="" />
      </Top>
      <Name>Джамшут</Name>
      <Info>
        Шторы харашо прадавание делает. Плов вкюсный готовит. Старшим не грубит.
      </Info>
    </Card>
    <Card>
      <Top>
        <Image src={baba2} alt="" />
      </Top>
      <Name>Гаффар</Name>
      <Info>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально.
      </Info>
    </Card>
    <Card>
      <Top>
        <Image src={baba3} alt="" />
      </Top>
      <Name>Алтынгуль</Name>
      <Info>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально.
      </Info>
    </Card>
    <Card>
      <Top>
        <Image src={baba4} alt="" />
      </Top>
      <Name>Арслон</Name>
      <Info>
        Фаза вызывает нулевой меридиан. Магнитное поле потенциально.
      </Info>
    </Card>
  </Wrap>
);

export default Team;
