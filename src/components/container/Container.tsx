import { math } from 'polished';
import styled, { css } from 'styled-components';

import { breakpoints, variables } from 'styles/variables';

const breakpointStyles = (key: string) => () => {
  const { width, gutter } = variables.breakpoints[key];

  return css`
    @media (min-width: ${width}) {
      max-width: ${math(`${variables.pageWidth} + (${gutter} * 2)`)};
    }
  `;
};

export const Container = styled.div`
  flex-grow: 1;

  margin: 0 auto;
  padding: 0 ${variables.gutter} 100px;

  max-width: ${math(`${variables.pageWidth} + ${variables.gutter}`)};

  @media (min-width: 800px) {
    padding: 0 10% 10vh;
  }
  @media (max-width: 500px) {
    padding: 0 20px 100px;
  }

  ${breakpointStyles('md')}
  ${breakpointStyles('lg')}
`;
