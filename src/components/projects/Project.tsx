import React from 'react';
import styled from 'styled-components';

import Screenshot from 'components/screenshot/Screenshot';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';
import { Button } from 'components/button/Button';

import { responsiveFont } from 'styles/utils';

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  tech?: string;
  liveLink?: string;
  downloadLink?: string;
  githubLink?: string;
  imageName: string;
  hideTopBar?: boolean;
}

const Project = styled.div`
  margin: 0 0 100px;

  @media (max-width: 719px) {
    margin: 0 0 70px;
  }
`;

const ColumnVertCenter = styled(Column)`
  align-self: center;
`;

const InfoWrapper = styled.div`
  margin: 30px 0;

  @media (max-width: 719px) {
    text-align: center;
  }
`;

const ButtonsWrapper = styled.div`
  margin: 30px 0;

  @media (max-width: 719px) {
    text-align: center;
  }
`;

const Title = styled.div`
  margin: 7px 0;
  font-size: ${responsiveFont(30, 40)};
`;

const Subtitle = styled.div`
  margin: 10px 0 20px;
  font-size: ${responsiveFont(20, 25)};
  font-weight: 300;
`;

const Description = styled.div`
  font-weight: 300;
`;

const Tech = styled.div`
  font-size: ${responsiveFont(16, 20)};
  font-weight: 300;
  color: #00000082;

  /* margin: 40px 0; */
`;

export default ({
  title,
  subtitle,
  description,
  tech,
  liveLink,
  // downloadLink,
  githubLink,
  imageName,
  hideTopBar,
}: ProjectProps) => (
  <Project>
    <Row>
      <ColumnVertCenter sm={12} md={6} lg={5}>
        <InfoWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          <Tech>{tech}</Tech>
        </InfoWrapper>
        <ButtonsWrapper>
          {liveLink && <Button href={liveLink}>Live</Button>}
          {/* {downloadLink && (
              <Button href={downloadLink} download>
                Download my resume
              </Button>
            )} */}
          {githubLink && <Button href={githubLink}>Github</Button>}
        </ButtonsWrapper>
      </ColumnVertCenter>
      <Column sm={12} md={6} lg={7}>
        <Screenshot imageName={imageName} title={title} hideTopBar={hideTopBar} />
      </Column>
    </Row>
  </Project>
);
