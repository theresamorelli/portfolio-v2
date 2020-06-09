import React from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { variables, breakpoints } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Row } from 'components/grid/Row';
import Title from 'components/sectiontitle/SectionTitle';

interface IntroProps {
  name: string;
  title: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  margin: 0 auto;
  padding: 50px 0;

  text-align: center;
`;

const LargeTitle = styled(Title)`
  font-size: ${responsiveFont(45, 70)};
  font-family: ${variables.font.familyHeading};
`;

export const Paragraph = styled.p`
  ${responsiveFont(28, 33)};

  font-family: ${variables.font.family};
  font-weight: 300;
`;

export const Intro = ({ name, title }: IntroProps) => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <div>
            <LargeTitle>{name}</LargeTitle>
            <Paragraph>{title}</Paragraph>
          </div>
        </Row>
      </Wrapper>
    </Container>
  );
};
