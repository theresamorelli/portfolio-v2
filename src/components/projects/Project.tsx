import React from 'react';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';
import styled from 'styled-components';

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
  margin: 100px 0;
`;

const ColumnVertCenter = styled(Column)`
  align-self: center;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;
const Screenshot = styled.img`
  -webkit-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
`;

export default ({
  title,
  subtitle,
  description,
  tech,
  liveLink,
  githubLink,
  imageName,
}: ProjectProps) => {
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
          <Screenshot
            src={require(`assets/images/${imageName}-screenshot.png`)}
            alt={`${title} screenshot`}
          ></Screenshot>
        </Column>
      </Row>
    </Project>
  );
};
