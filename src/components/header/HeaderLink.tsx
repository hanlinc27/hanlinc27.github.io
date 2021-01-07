import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import 'styles/fonts.css';
import { Container } from 'components/container/Container';

interface LinkProps {
  name: string;
  href: string;
  icon?: ReactNode;
}

const base = css`
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  
  margin-left: 28px;
  text-decoration: none;
  color: #1E1A1D;
  transition: 200ms opacity ease-in-out;
`;

const LinkElement = styled.a`
  ${base};
`;


const Lnk = styled(Link)`
  ${base};
`;

export const HeaderLink = ({ name, href }: LinkProps) => {
  const isLink = typeof href !== 'undefined';
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');

  if (isExternal) {
    return (
      <LinkElement href={href} target="_blank" rel={'noopener noreferrer'}>
        {name}
      </LinkElement>
    );
  }

  return (
    <Lnk to={href}>
      {name}
    </Lnk>
  );
};
