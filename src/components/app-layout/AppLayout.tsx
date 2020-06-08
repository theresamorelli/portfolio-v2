import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';
import { Helmet } from 'react-helmet';

import Github from 'assets/svg/github.svg';
import Linkedin from 'assets/svg/linkedin.svg';

import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

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
        href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Open+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
    </Helmet>

    <Styles />

    <Layout>
      {children}

      <Footer
        social={[
          { icon: <Github />, to: 'https://github.com/theresamorelli' },
          { icon: <Linkedin />, to: 'https://www.linkedin.com/in/theresa-morelli' },
        ]}
      />

      {isDev && <Devtools />}
    </Layout>
  </>
);
