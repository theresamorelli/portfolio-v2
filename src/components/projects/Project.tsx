import React from 'react';
import styled from 'styled-components';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import Screenshot from 'components/screenshot/Screenshot';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';
import { Button } from 'components/button/Button';

import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

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
    min-height: 100vh;
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
  font-size: ${responsiveFont(26, 36)};
  font-family: ${variables.fonts.heading};
`;

const Subtitle = styled.div`
  margin: 10px 0 20px;
  font-size: ${responsiveFont(16, 20)};
`;

const Description = styled.div``;

const Tech = styled.div`
  font-size: ${responsiveFont(16, 20)};
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
}: ProjectProps) => {
  const [displayModal, changeDisplayModal] = React.useState(false);

  const openModal = () => {
    changeDisplayModal(true);
  };

  const closeModal = () => {
    changeDisplayModal(false);
  };

  const customStyles = {
    content: {
      maxWidth: '60%',
      top: '50%',
      left: '50%',
      // right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '50px',
    },
  };

  return (
    <Project>
      {/* <Modal
        open={displayModal}
        onClose={closeModal}
        role={`More info about ${title}`}
        // blockScroll={false}
        // focusTrapped={false}
        
        // container={document.getElementById('modal-container')!}
        // animationDuration={}
        center
      >
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Modal> */}
      <Row>
        <ColumnVertCenter sm={12} md={6} lg={5}>
          <InfoWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Tech>{tech}</Tech>
          </InfoWrapper>
          <ButtonsWrapper>
            {/* <Button onClick={openModal}>More info</Button> */}
            {liveLink && <Button href={liveLink}>Live</Button>}
            {/* {downloadLink && (
              <Button href={downloadLink} download>
                Download my resume
              </Button>
            )} */}
            {githubLink && <Button href={githubLink}>Code</Button>}
          </ButtonsWrapper>
        </ColumnVertCenter>
        <Column sm={12} md={6} lg={7}>
          <Screenshot imageName={imageName} title={title} hideTopBar={hideTopBar} />
        </Column>
      </Row>
    </Project>
  );
};
