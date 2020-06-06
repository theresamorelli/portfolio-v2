import React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import Projects from 'components/projects/Projects';

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Theresa Morelli" />

    <Intro name="Theresa" title="Developer, explorer, creator"></Intro>

    <Projects />
  </>
);

