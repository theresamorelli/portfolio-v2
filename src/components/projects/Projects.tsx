import React from 'react';
import Project from 'components/projects/Project';
import { Container } from 'components/container/Container';
import { Title } from 'components/intro/Intro';

import styled from 'styled-components';

const ProjectsTitle = styled(Title)`
  text-align: center;
`;

const Projects = () => {
  return (
    <Container>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Project />
      <Project />
      <Project />
    </Container>
  );
};

export default Projects;
