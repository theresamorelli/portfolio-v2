import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { ILink, ELink } from 'components/link/Link';

import { variables } from 'styles/variables';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  download?: boolean;
  onClick?(): void;
}

const base = css`
  display: inline-flex;
  position: relative;

  padding: 0 25px;
  margin-right: ${variables.gutter};

  height: 40px;

  cursor: pointer;

  font-size: ${variables.font.size};
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  vertical-align: middle;

  background-color: #343a40;
  color: #fff;

  transition: background-color 180ms ease;

  &:hover {
    background-color: ${darken(0.25, '#343a40')};
  }
`;

const Lnk = styled.a`
  ${base}

  :last-of-type {
    margin-right: 0;
  }
`;

const Btn = styled.button`
  ${base};
`;

export const Button = ({ children, href, download, onClick }: ButtonProps) => {
  const isLink = typeof href !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');
  const isDownload = !!download;

  if (isExternal) {
    return (
      <Lnk href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Lnk>
    );
  }

  if (isLink) {
    return (
      <ILink to={href || '#'}>
        <Lnk>{children}</Lnk>
      </ILink>
    );
  }

  if (isDownload) {
    return (
      <ELink href={href || '#'} download={true}>
        <Btn>{children}</Btn>
      </ELink>
    );
  }

  return <Btn onClick={onClick}>{children}</Btn>;
};
