import React from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Row } from 'components/grid/Row';
import Title from 'components/sectiontitle/SectionTitle';
import { ILink } from 'components/link/Link';

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

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: ${variables.font.family};
  font-size: ${responsiveFont(25, 33)};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Intro = ({ name, title }: IntroProps) => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <div>
            <LargeTitle>{name}</LargeTitle>
            <NavContainer>
              <ILink to="#about">About</ILink>
              <ILink to="#projects">Projects</ILink>
              <ILink to="#contact">Contact</ILink>
            </NavContainer>
          </div>
        </Row>
      </Wrapper>
    </Container>
  );
};
