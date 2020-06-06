import React from 'react';
import { Column } from 'components/grid/Column';
import { Row } from 'components/grid/Row';
import styled from 'styled-components';

const Project = styled.div`
  margin: 70px 0;
`;

export default () => {
  return (
    <Project>
      <Row>
        <Column sm={12} md={6}>Description and stuff</Column>
        <Column sm={12} md={6}>
          <img src="https://www.jpl.nasa.gov/images/spitzer/20160829/pia20914-16.jpg"></img>
        </Column>
      </Row>
    </Project>
  );
};
