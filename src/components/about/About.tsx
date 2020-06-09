import React from 'react';
import styled from 'styled-components';

import Title from 'components/sectiontitle/SectionTitle';
import { Container } from 'components/container/Container';

import { responsiveFont } from 'styles/utils';

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  max-width: 600px;
  min-height: 100vh;
`;

const Paragraph = styled.p`
  margin: 14px 0;

  font-size: ${responsiveFont(14, 23)};
  font-weight: 300;
  line-height: ${26 / 16};

  :first-of-type {
    margin-top: 0;
  }
`;

export default () => {
  return (
    <Container>
      <About>
        <Title>About</Title>
        <Paragraph>
          I'm a software engineer specializing in frontend JavaScript and React. I'm passionate
          about making the world better one line of code at a time with accessible, intuitive design
          and clean code.
        </Paragraph>
        <Paragraph>
          Even before I got into programming, I’ve been involved with technology as a research
          engineer, writer, and teacher. After discovering how to automate repetitive Excel work
          with Visual Basic, I've been hooked.
        </Paragraph>
        <Paragraph>
          I'm happiest when exploring and most fulfilled when solving big problems to foster the
          common good. I'm inspired by the endless possibilities coding offers for carving structure
          out of chaos.
        </Paragraph>
      </About>
    </Container>
  );
};
