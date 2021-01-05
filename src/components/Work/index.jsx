import React from 'react';
import styled from 'styled-components';
import { contentWidth } from '../../config';

const Wrap = styled.div`
  width: ${contentWidth}px;
  margin: 0 auto;
  padding: 200px 0;
  border: 1px solid red;
`;

const Work = () => (
  <Wrap>
    test
  </Wrap>
);

export default Work;
