import React from 'react';
import styled from 'styled-components';

import Title from 'components/sectiontitle/SectionTitle';
import { Container } from 'components/container/Container';
import { TextContainer } from 'components/container/TextContainer';

import { responsiveFont } from 'styles/utils';

const About = styled(TextContainer)`
  min-height: 100vh;
`;

const Paragraph = styled.p`
  margin-bottom: 30px;

  font-size: ${responsiveFont(16, 20)};

  @media (max-width: 500px) {
    margin-bottom: 22px;
  }
`;

export default () => {
  return (
    <Container id="about">
      <About>
        <Title>About</Title>
        <Paragraph>
          I'm a software engineer specializing in frontend JavaScript and React.
          I'm passionate about making the world better one line of code at a
          time with accessible, intuitive design and clean code.
        </Paragraph>
        <Paragraph>
          Even before I got into programming, I’ve been involved with technology
          as a research engineer, writer, and teacher. After discovering how to
          automate repetitive Excel work with Visual Basic, I've been hooked.
        </Paragraph>
        <Paragraph>
          I'm happiest when exploring and most fulfilled when solving big
          problems to foster the common good. I'm inspired by the endless
          possibilities coding offers for carving structure out of chaos.
        </Paragraph>
      </About>
    </Container>
  );
};
