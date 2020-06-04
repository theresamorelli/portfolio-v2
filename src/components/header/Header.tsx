import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { variables } from 'styles/variables';
import { Container } from 'components/container/Container';

interface HeaderProps {
  children: ReactNode;
}

const HeaderRoot = styled.header`
  display: block;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  padding: ${variables.gutter} 0;
`;

const Navigation = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Header = ({ children }: HeaderProps) => (
  <HeaderRoot>
    <Container>
      <Content>
        <Navigation>{children}</Navigation>
      </Content>
    </Container>
  </HeaderRoot>
);
