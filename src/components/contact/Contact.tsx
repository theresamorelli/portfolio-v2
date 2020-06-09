import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/container/Container';
import { TextContainer } from 'components/container/TextContainer';
import SectionTitle from 'components/sectiontitle/SectionTitle';
import { ELink } from 'components/link/Link';

import { responsiveFont } from 'styles/utils';

const ContactContainer = styled(TextContainer)`
  text-align: center;
  font-size: ${responsiveFont(22, 28)};
  line-height: 3;
`;

export default () => {
  return (
    <Container id="contact">
      <ContactContainer>
        <SectionTitle>Get in touch :)</SectionTitle>
        <div>
          <ELink href="mailto:theresa.l.morelli@gmail.com?subject=Hi!">
            theresa.l.morelli@gmail.com
          </ELink>
        </div>
      </ContactContainer>
    </Container>
  );
};
