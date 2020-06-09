import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Styles } from 'styles/base';
import { Helmet } from 'react-helmet';

import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import { variables } from 'styles/variables';

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
      <script src="https://kit.fontawesome.com/b85d416941.js" crossorigin="anonymous"></script>
    </Helmet>

    <Styles />

    <Layout>
      {children}

      <Footer
        social={[
          { icon: variables.fontAwesome.github, to: 'https://github.com/theresamorelli' },
          {
            icon: variables.fontAwesome.linkedin,
            to: 'https://www.linkedin.com/in/theresa-morelli',
          },
          { icon: variables.fontAwesome.blog, to: 'https://medium.com/@theresamorelli' },
        ]}
      />

      {isDev && <Devtools />}
    </Layout>
  </>
);
