import React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import Navbar from 'components/navbar/index';
import About from 'components/about/About';
import Projects from 'components/projects/Projects';
import Contact from 'components/contact/Contact';

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Theresa Morelli" />

    <Navbar />

    <Intro />

    <About />

    <Projects />

    <Contact />

    <div id="modal-container"  />
  </>
);
