import React, { FC } from 'react';
import styled from 'styled-components';

import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';
import { Container } from 'components/container/Container';
import { Row } from 'components/grid/Row';
import Title from 'components/sectiontitle/SectionTitle';
import { ILink } from 'components/link/Link';
import TreesAnimation from './TreesAnimation';

interface IntroProps {
  name: string;
  title: string;
}

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

const LargeTitle = styled(Title)`
  font-size: ${responsiveFont(45, 70)};
  font-family: ${variables.font.familyHeading};
  /* transition: all 10s ease-in;
  text-shadow: 1px 1px grey; */
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

export const Intro: FC<IntroProps> = ({ name, title }) => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <div>
            <TreesAnimation />
            {/* <LargeTitle className="fade-in">{name}</LargeTitle> */}
            {/* <NavContainer>
              <ILink to="#about">About</ILink>
              <ILink to="#projects">Projects</ILink>
              <ILink to="#contact">Contact</ILink>
            </NavContainer> */}
          </div>
        </Row>
      </Wrapper>
    </Container>
  );
};
