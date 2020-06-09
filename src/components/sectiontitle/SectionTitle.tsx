import styled from 'styled-components';
import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

export default styled.div`
  margin: 0 0 30px;
  text-align: center;

  font-family: ${variables.font.family};
  font-size: ${responsiveFont(35, 50)};
`;
