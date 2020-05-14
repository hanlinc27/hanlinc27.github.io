import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';
import { Helmet } from 'react-helmet';

import Resume from 'assets/svg/document.svg';
import Github from 'assets/svg/github.svg';
import Linkedin from 'assets/svg/linkedin.svg';
import Twitter from 'assets/svg/twitter.svg';
import Email from 'assets/svg/email.svg';
import DolphinFooter from 'assets/svg/dolphin-footer.svg';
import { Footer } from 'components/footer/Footer';
import { Header } from 'components/header/Header';
import { HeaderLink } from 'components/header/HeaderLink';
import { Devtools } from 'components/devtools/Devtools';
import {Logo } from 'assets/images/favicon.png';
interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

const Layout = styled.div`
  display: block;

  min-height: 100vh;
`;

export default ({ children }: AppLayoutProps) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <Styles />

    <Layout>
      <Header>
      <HeaderLink name = "projects" href = "https://www.notion.so/hanlincprojects/Projects-7a41d12bbf704647a410bb46eb4b65e7" /> 
      <HeaderLink name = "musings" href = "/musings" /> 
        <HeaderLink name="about me" href="/about" />

        {/* <a href = "https://hanlincheng.me/static/hanlincheng.pdf" target ="_blank"> resumé</a> */}
        <HeaderLink name = "resumé" href = 'https://hanlincheng.me/static/hanlincheng.pdf'  />
        {/* <HeaderLink name="github" href="https://github.com/ueno-llc" icon={<Github />} /> */}
      </Header>

      {children}

      <Footer
         logo={<Logo />}
       
        social={[
         
          { icon: <Email />, to: 'mailto:h62cheng@uwaterloo.ca' },
          { icon: <Linkedin />, to: 'https://www.linkedin.com/in/hanlincheng' },
          { icon: <Github />, to: 'https://github.com/hanlinc27' },
          { icon: <Twitter />, to: 'https://twitter.com/hanlin_cheng' },

        ]}
    
      />

      {isDev && <Devtools />}
    </Layout>
  </>
);
