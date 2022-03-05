import React, { useState } from 'react';
import styled from 'styled-components';
import { Wrap } from 'components/Shared';
import Back from 'components/Back';
import Tabs from '../Tabs';
import Rome from '../Rome';
import Tulle from '../Tulle';
import Portiere from '../Portiere';
import Cornice from '../Cornice';
import { BP_2 } from '../../config';

const TabContent = styled.div`
  padding: 60px 20px 100px 20px;
  ${BP_2} {
    padding: 40px 0 60px 0;
  }
`;

const Calculator = ({ location }) => {
  const searchParams = new URLSearchParams(location.search);
  const open = searchParams.get('open');
  const option = searchParams.get('option');
  const [active, setActive] = useState(open || 'rome');

  return (
    <Wrap>
      <Back />
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
