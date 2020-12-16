import React from 'react';
import styled from 'styled-components';

import TopBar from 'components/screenshot/TopBar';

interface ScreenshotProps {
  imageName: string;
  title: string;
  hideTopBar?: boolean;
}

const Screenshot = styled.div`
  border-radius: 3px 0;
`;

export default ({ title, imageName, hideTopBar }: ScreenshotProps) => {
  return (
    <Screenshot className="shadow">
      {!hideTopBar && <TopBar />}
      <img src={require(`assets/images/${imageName}`)} alt={`${title} screenshot`} />
    </Screenshot>
  );
};
