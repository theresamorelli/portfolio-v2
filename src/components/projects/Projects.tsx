import React from 'react';
import styled from 'styled-components';

import Project from 'components/projects/Project';
import Title from 'components/title/Title';
import { Container } from 'components/container/Container';

import projects from 'data/projects.json';

const ProjectsTitle = styled(Title)`
  text-align: center;
`;

const Projects = () => {
  return (
    <Container>
      <ProjectsTitle>Projects</ProjectsTitle>
      {projects.map((project, i) => (
        <Project
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          tech={project.tech}
          liveLink={project.liveLink}
          downloadLink={project.downloadLink}
          githubLink={project.githubLink}
          imageName={project.imageName}
          hideTopBar={project.hideTopBar}
          key={i}
        />
      ))}
    </Container>
  );
};

export default Projects;
