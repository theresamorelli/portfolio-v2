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
  -webkit-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 20px -2px rgba(0, 0, 0, 0.5);
`;

export default ({ title, imageName, hideTopBar }: ScreenshotProps) => {
  return (
    <Screenshot>
      {!hideTopBar && <TopBar />}
      <img src={require(`assets/images/${imageName}`)} alt={`${title} screenshot`} />
    </Screenshot>
  );
};
