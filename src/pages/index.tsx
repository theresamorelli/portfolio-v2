import React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Hi, I'm Theresa
    </Intro>

    <BlockText
      heading="About me"
      description={
        <>
          I'm a software engineer.
        </>
      }
    />
  </>
);
