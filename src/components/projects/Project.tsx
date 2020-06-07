import React from 'react';
import styled from 'styled-components';

import Screenshot from 'components/projects/Screenshot';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';
import { Button } from 'components/button/Button';

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

const InfoWrapper = styled.div`
  margin: 30px 0;
`;

const ButtonsWrapper = styled.div`
  margin: 30px 0;
`;

const Title = styled.div`
  margin: 7px 0;
  font-size: 1.5rem;
`;

const Subtitle = styled.div`
  margin: 10px 0 20px;
  font-size: 1.1rem;
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
        <ColumnVertCenter sm={12} md={6} lg={5}>
          <InfoWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <div>{description}</div>
            <div>{tech}</div>
          </InfoWrapper>
          <ButtonsWrapper>
            {liveLink && <Button href={liveLink}>Live</Button>}
            {githubLink && <Button href={githubLink}>Github</Button>}
          </ButtonsWrapper>
        </ColumnVertCenter>
        <Column sm={12} md={6} lg={5}>
          <Screenshot imageName={imageName} title={title} />
        </Column>
      </Row>
    </Project>
  );
};
