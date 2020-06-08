import React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import About from 'components/about/About';
import Projects from 'components/projects/Projects';

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Theresa Morelli" />

    <Intro name="Theresa Morelli" title="developer, explorer, creator"></Intro>

    <About />

    <Projects />
  </>
);
