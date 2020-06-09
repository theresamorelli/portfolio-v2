import React from 'react';
import styled from 'styled-components';
import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

export default styled.div`
  ${responsiveFont(30, 70)};

  font-family: ${variables.font.family};
  font-weight: 300;

  margin: 0 0 30px;

  text-align: center;
`;
