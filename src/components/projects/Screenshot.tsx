import React from 'react';
import styled from 'styled-components';

interface ScreenshotProps {
  imageName: string;
  title: string;
}

const Screenshot = styled.div`
  border-radius: 3px 0;
  -webkit-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 10px 20px -2px rgba(0, 0, 0, 0.5);
`;

const TopBar = styled.div`
  width: 100%;
  background-color: #ddd;
`;

const TopFakeButton = styled.i`
  height: 8px;
  width: 8px;
  display: inline-block;
  background-color: #ff5f57;
  border-radius: 50%;
  position: relative;
  left: 10px;

  :after {
    position: absolute;
    height: 8px;
    width: 8px;
    display: inline-block;
    border-radius: 50%;
    content: ' ';
    left: 30px;
    background-color: #28ca41;
  }

  :before {
    position: absolute;
    height: 8px;
    width: 8px;
    display: inline-block;
    border-radius: 50%;
    content: ' ';
    left: 15px;
    background-color: #ffbd2e;
  }
`;

export default ({ title, imageName }: ScreenshotProps) => {
  return (
    <Screenshot>
      <TopBar>
        <TopFakeButton />
      </TopBar>
      <img src={require(`assets/images/${imageName}-screenshot.png`)} alt={`${title} screenshot`} />
    </Screenshot>
  );
};
