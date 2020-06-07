import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface ILinkProps {
  children: React.ReactNode;
  to: string;
  [key: string]: any;
}

interface ELinkProps {
  children: React.ReactNode;
  href: string;
  download: boolean;
  [key: string]: any;
}

export const ILink = ({ children, to, ...props }: ILinkProps) => (
  <GatsbyLink to={to} {...props}>
    {children}
  </GatsbyLink>
);

export const ELink = ({ children, href, download, ...props }: ELinkProps) => {
  if (download) {
    return (
      <a href={href} {...props} download>
        {children}
      </a>
    );
  } else {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
};
