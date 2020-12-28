import React, { FC } from 'react';
import styled from 'styled-components';

import { Container } from 'components/container/Container';
import { Row } from 'components/grid/Row';

import loadable from '@loadable/component';
const TreesAnimation = loadable(() => import('./TreesAnimation'));

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 0;

  text-align: center;
  /* z-index: 10; */
  /* width: min-content; */
`;

export const Intro: FC = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Row>
          <TreesAnimation />
        </Row>
      </Wrapper>
    </Container>
  );
};
