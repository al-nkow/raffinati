import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Tabs from '../Tabs';
import Rome from '../Rome';
import Tulle from '../Tulle';
import Portiere from '../Portiere';
import Cornice from '../Cornice';
import { contentWidth, grey, text } from '../../config';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
`;

const Back = styled(Link)`
  margin-bottom: 30px;
  padding: 15px 0;
  display: inline-block;
  color: ${grey};
  font-size: 14px;
  text-decoration: none;
  svg {
    margin-right: 10px;
    vertical-align: middle;
    path {
      stroke: ${grey};
    }
  }
  &:hover {
    color: ${text};
    path {
      stroke: ${text};
    }
  }
`;

const TabContent = styled.div`
  padding: 60px 20px 100px 20px;
`;

const Calculator = ({ location }) => {
  const searchParams = new URLSearchParams(location.search);
  const open = searchParams.get('open');
  const option = searchParams.get('option');
  const [active, setActive] = useState(open || 'rome');

  return (
    <Wrap>
      <Back to="/">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.41589 0.511963L1.55896 4.80518L6.41589 9.26376" />
        </svg>
        Вернуться на главную
      </Back>
      <Tabs active={active} setActive={setActive} />
      <TabContent>
        {active === 'rome' ? <Rome option={open === 'rome' && option} /> : null}
        {active === 'tulle' ? <Tulle option={open === 'tulle' && option} /> : null}
        {active === 'portiere' ? <Portiere option={open === 'portiere' && option} /> : null}
        {active === 'cornice' ? <Cornice option={open === 'cornice' && option} /> : null}
      </TabContent>
    </Wrap>
  );
};

export default Calculator;
