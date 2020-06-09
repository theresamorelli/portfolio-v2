import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/container/Container';
import { ELink } from 'components/link/Link';

interface Social {
  icon: string;
  to: string;
}

interface FooterProps {
  logo?: React.ReactNode;
  social: Social[];
}

const FooterRoot = styled.div`
  padding: 40px 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 30px;

  transition: 200ms opacity ease-in-out;

  &:hover {
    opacity: 0.5;
  }

  :first-of-type {
    margin: 0;
  }
`;

const SocialLink = styled(ELink)`
  :hover {
    background: none;
  }
`;

const Icon = styled.i`
  color: #9ea0a6;
  font-size: 1.8rem;

  :hover {
    background: none;
  }
`;

export const Footer = ({ social }: FooterProps) => (
  <FooterRoot>
    <Container>
      <Content>
        <List>
          {social.map((item) => (
            <ListItem key={item.to}>
              <SocialLink href={item.to} target="_blank" rel="noopener noreferrer">
                <Icon className={item.icon} />
              </SocialLink>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  </FooterRoot>
);
