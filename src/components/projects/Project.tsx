import React from 'react';
import styled from 'styled-components';

import Screenshot from 'components/projects/Screenshot';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string;
  liveLink?: string;
  githubLink?: string;
  imageName: string;
}

const Project = styled.div`
  margin: 70px 0;
`;

const ColumnVertCenter = styled(Column)`
  align-self: center;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

export default ({ title, subtitle, description, tech, liveLink, githubLink, imageName }: ProjectProps) => {
  return (
    <Project>
      <Row>
        <ColumnVertCenter sm={12} md={6}>
          <Title>{title}</Title>
          <div>{subtitle}</div>
          <div>{description}</div>
          <div>Technologies: {tech}</div>
        </ColumnVertCenter>
        <Column sm={12} md={6}>
          <Screenshot imageName={imageName} title={title} />
        </Column>
      </Row>
    </Project>
  );
};
