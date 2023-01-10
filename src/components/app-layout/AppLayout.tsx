import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';
import { Helmet } from 'react-helmet';

import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { HeaderLink } from 'components/header/HeaderLink';
import { Devtools } from 'components/devtools/Devtools';
interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

const Layout = styled.div`
  display: block;
`;

export default ({ children }: AppLayoutProps) => (
  <>
    <Helmet></Helmet>

    <Styles />

    <Layout>
      <Header>
        <HeaderLink name="Work" href="/" />
        <HeaderLink name="Books" href="/books" />
        <HeaderLink name="About" href="/about" />
        <HeaderLink name="Resumé" href="https://hanlincheng.me/static/hanlin_cheng_resume.pdf" />
      </Header>

      {children}

      <Footer />
      {isDev && <Devtools />}
    </Layout>
  </>
);
