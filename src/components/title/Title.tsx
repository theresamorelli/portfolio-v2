import React from 'react';
import styled from 'styled-components';
import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

export default styled.div`
  ${responsiveFont(40, 70)};

  font-family: ${variables.font.familyHeading};
  font-weight: 300;

  margin: 30px 0;

  text-align: center;
`;
