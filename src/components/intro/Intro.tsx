import React from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { variables, breakpoints } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Row } from 'components/grid/Row';

interface IntroProps {
  name: string;
  title: string;
}

const Wrapper = styled.div`
  padding: 60px 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: ${breakpoints.md}) {
    /* padding: 120px 0; */
  }
`;

export const Title = styled.h4`
  ${responsiveFont(30, 40)};

  font-family: ${variables.font.familyHeading};
  font-weight: 300;

  margin: 30px 0;
`;

export const Paragraph = styled.p`
  ${responsiveFont(26, 32)};

  font-family: ${variables.font.familyHeading};
  font-weight: 300;
`;

export const Intro = ({ name, title }: IntroProps) => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <div>
            <Title>{name}</Title>
            <Paragraph>{title}</Paragraph>
          </div>
        </Row>
      </Wrapper>
    </Container>
  );
};
